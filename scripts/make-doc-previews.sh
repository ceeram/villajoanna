#!/usr/bin/env bash
# =============================================================================
#  Generate first-page preview images for the PDFs in documents/
# -----------------------------------------------------------------------------
#  Put your PDFs in documents/ and run:  make docs
#  Outputs:  documents/previews/<name>.jpg  (regenerated each run)
#  Then list each document in PROPERTY.documents in js/content.js.
# =============================================================================
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/documents"
OUT="$SRC/previews"
MAX="${DOC_PREVIEW_MAX:-1400}"
Q="${DOC_PREVIEW_Q:-82}"

shopt -s nullglob nocaseglob
pdfs=("$SRC"/*.pdf)
if [ ${#pdfs[@]} -eq 0 ]; then
  echo "No PDFs found in documents/ — add them there first."
  exit 0
fi

rm -rf "$OUT"; mkdir -p "$OUT"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

count=0
for f in "${pdfs[@]}"; do
  base="$(basename "${f%.*}")"
  slug="$(printf '%s' "$base" | tr '[:upper:]' '[:lower:]' | tr ' _' '--' | sed -E 's/[^a-z0-9-]//g; s/-+/-/g; s/^-+|-+$//g')"
  [ -z "$slug" ] && slug="document"
  # Render first page to PNG via Quick Look, then compress to JPEG with sips.
  qlmanage -t -s "$MAX" -o "$tmp" "$f" >/dev/null 2>&1 || true
  png="$tmp/$(basename "$f").png"
  if [ -f "$png" ]; then
    sips -s format jpeg -s formatOptions "$Q" "$png" --out "$OUT/$slug.jpg" >/dev/null
    printf '  %-30s -> documents/previews/%s.jpg (%s)\n' "$(basename "$f")" "$slug" \
      "$(du -h "$OUT/$slug.jpg" | cut -f1 | tr -d ' ')"
    count=$((count + 1))
  else
    echo "  WARN: could not render a preview for $(basename "$f")"
  fi
done

echo "Done: generated $count preview(s) in documents/previews/."
