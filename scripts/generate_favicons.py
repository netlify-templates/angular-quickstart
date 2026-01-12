from pathlib import Path

from PIL import Image

# Repo root (parent of /src)
repo_root = Path(__file__).resolve().parent.parent

# Input stays under src/assets
source_path = repo_root / "src/assets/favicon/favicon-base.png"
img = Image.open(source_path).convert("RGBA")

out_dir = repo_root / "src/assets/favicon"
out_dir.mkdir(parents=True, exist_ok=True)

sizes = [16, 32, 48, 192, 512, 180]
resample = getattr(Image, "Resampling", Image).LANCZOS

for size in sizes:
    resized = img.resize((size, size), resample=resample)
    name = "apple-touch-icon.png" if size == 180 else f"favicon-{size}.png"
    resized.save(out_dir / name, format="PNG")

img.save(
    out_dir / "favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
)