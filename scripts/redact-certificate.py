#!/usr/bin/env python3
"""Redact the energy certifier's personal data from a PDF certificate.

The energy performance certificate embeds the certifying technician's personal
details (name, NIF/ID, email, phone, signature). This removes them properly —
the underlying text is deleted, not just covered — so they can't be copied or
extracted from the published PDF.

Usage (run with the project venv):
  .venv/bin/python3 scripts/redact-certificate.py INPUT.pdf --dump
  .venv/bin/python3 scripts/redact-certificate.py INPUT.pdf --out OUT.pdf --apply

Without --apply it's a dry run: it only reports what it would redact.
"""
import argparse
import re
import fitz  # PyMuPDF

# Exact personal-data strings of the certifying technician to remove.
TARGETS = [
    "EVA PERELLO ROWLEY",
    "PERELLO ROWLEY EVA",
    "43090927J",
    "43090927 J",
    "43090927",
    "636934685",
    # Email — rendered split across two lines in the cell, so target each piece.
    "PERELLOARQUITECTURA@GM",
    "PERELLOARQUITECTURA",
    "AIL.COM",
]
# Anything matching these is also redacted (emails).
REGEXES = [re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")]


def collect(page):
    hits = []
    for t in TARGETS:
        for r in page.search_for(t):
            hits.append((t, r))
    text = page.get_text()
    for rx in REGEXES:
        for m in set(rx.findall(text)):
            for r in page.search_for(m):
                hits.append((m, r))
    return hits


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("input")
    ap.add_argument("--out")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dump", action="store_true")
    args = ap.parse_args()

    doc = fitz.open(args.input)

    if args.dump:
        for i, page in enumerate(doc):
            print(f"\n===== PAGE {i + 1} =====")
            print(page.get_text())
        return

    total = 0
    for i, page in enumerate(doc):
        # Signature fields hold the certifier's name/NIF in their appearance
        # stream, which apply_redactions() can't remove — delete the widget.
        sigs = [w for w in (page.widgets() or []) if w.field_type_string == "Signature"]
        if args.apply:
            for w in sigs:
                page.delete_widget(w)

        hits = collect(page)
        if sigs:
            print(f"Page {i + 1}: removing {len(sigs)} signature field(s)")
        if hits:
            print(f"Page {i + 1}: {len(hits)} text redaction(s)")
            for label, r in hits:
                print(f"   {label!r:34} @ {tuple(round(x, 1) for x in r)}")
        if args.apply and hits:
            for _, r in hits:
                page.add_redact_annot(r, fill=(0, 0, 0))
            page.apply_redactions()
        total += len(hits) + len(sigs)

    print(f"\nTotal: {total} item(s)")
    if args.apply:
        out = args.out or args.input
        doc.save(out, garbage=4, deflate=True)
        print(f"Saved redacted PDF -> {out}")


if __name__ == "__main__":
    main()
