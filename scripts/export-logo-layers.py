from pathlib import Path

from psd_tools import PSDImage
from PIL import Image

ROOT = Path(r"C:\Users\gabri\Projects\dr-incarbone-website")
PSD_PATH = ROOT / "LOGO_GIORGIO.PSD"
PUBLIC = ROOT / "public"

psd = PSDImage.open(PSD_PATH)

layers = {layer.name: layer for layer in psd.descendants()}

icon = layers["illustrazione-anatomica-dettagliata-del-cervello-umano-e-del-sistema-vascolare_flipped (1)"]
name = layers["GIORGIO INCARBONE"]
neuro = layers["NEUROCHIRURGO"]

icon_image = icon.composite()
icon_image.save(PUBLIC / "logo-icon.png")

name_image = name.composite()
neuro_image = neuro.composite()

name_image.save(PUBLIC / "logo-name-layer.png")
neuro_image.save(PUBLIC / "logo-neuro-layer.png")

print("icon size:", icon_image.size)
print("name size:", name_image.size)
print("neuro size:", neuro_image.size)
print("icon bbox:", icon.bbox)
print("name bbox:", name.bbox)
print("neuro bbox:", neuro.bbox)
