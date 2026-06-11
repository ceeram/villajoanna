#!/usr/bin/env bash
# =============================================================================
#  Optimize original photos for the web (resize + compress, using built-in sips)
# -----------------------------------------------------------------------------
#  Workflow:
#    1. Put your full-resolution originals in   images/_originals/
#    2. Run:   make images        (or: bash scripts/optimize-images.sh)
#
#  Outputs (everything in images/photos/ is regenerated each run):
#    images/photos/<name>.jpg         full size  (max 2400px, q80) — lightbox
#    images/photos/thumb/<name>.jpg   thumbnail  (max  800px, q70) — grid
#
#  Originals in images/_originals/ are git-ignored, so the huge files never get
#  committed. Tune sizes via env vars, e.g.  FULL_MAX=3000 make images
# =============================================================================
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/images/_originals"
OUT="$ROOT/images/photos"
THUMBS="$OUT/thumb"

FULL_MAX="${FULL_MAX:-2400}"
FULL_Q="${FULL_Q:-80}"
THUMB_MAX="${THUMB_MAX:-800}"
THUMB_Q="${THUMB_Q:-70}"

mkdir -p "$SRC"

shopt -s nullglob nocaseglob
originals=("$SRC"/*.jpg "$SRC"/*.jpeg "$SRC"/*.png "$SRC"/*.heic "$SRC"/*.heif "$SRC"/*.tif "$SRC"/*.tiff)
if [ ${#originals[@]} -eq 0 ]; then
  echo "No originals found in images/_originals/ — put your photos there first."
  exit 0
fi

# Regenerate cleanly so re-runs are idempotent.
rm -rf "$OUT"
mkdir -p "$THUMBS"

count=0
for f in "${originals[@]}"; do
  base="$(basename "${f%.*}")"
  # slugify: lowercase, spaces/underscores -> dash, drop other punctuation
  slug="$(printf '%s' "$base" | tr '[:upper:]' '[:lower:]' | tr ' _' '--' | sed -E 's/[^a-z0-9-]//g; s/-+/-/g; s/^-+|-+$//g')"
  [ -z "$slug" ] && slug="photo"
  # disambiguate if two originals slugify to the same name
  if [ -e "$OUT/$slug.jpg" ]; then
    i=2; while [ -e "$OUT/$slug-$i.jpg" ]; do i=$((i+1)); done; slug="$slug-$i"
  fi

  sips -Z "$FULL_MAX"  -s format jpeg -s formatOptions "$FULL_Q"  "$f" --out "$OUT/$slug.jpg"     >/dev/null
  sips -Z "$THUMB_MAX" -s format jpeg -s formatOptions "$THUMB_Q" "$f" --out "$THUMBS/$slug.jpg"  >/dev/null
  printf '  %-24s -> %s.jpg (%s) + thumb (%s)\n' \
    "$(basename "$f")" "$slug" \
    "$(du -h "$OUT/$slug.jpg" | cut -f1 | tr -d ' ')" \
    "$(du -h "$THUMBS/$slug.jpg" | cut -f1 | tr -d ' ')"
  count=$((count + 1))
done

echo "Done: optimized $count image(s)."
echo "  full:   images/photos/        (max ${FULL_MAX}px, q${FULL_Q})"
echo "  thumbs: images/photos/thumb/  (max ${THUMB_MAX}px, q${THUMB_Q})"
