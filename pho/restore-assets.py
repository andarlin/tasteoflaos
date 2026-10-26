from pathlib import Path
from urllib.request import urlopen

# Immutable deployment preserves the original storefront images.
base = 'https://tasteoflaos-220noxwac-andar-lins-projects.vercel.app/assets/'
destination = Path(__file__).resolve().parent / 'assets'
destination.mkdir(exist_ok=True)
for name in ['family.webp', 'hero-mobile.webp', 'hero.webp', 'noodles.webp', 'pho-hero.webp', 'product.webp', 'serving.webp']:
    with urlopen(base + name, timeout=30) as response:
        (destination / name).write_bytes(response.read())
    print(name)
