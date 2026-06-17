from pathlib import Path

from PIL import Image
from psd_tools import PSDImage

ROOT = Path(r"C:\Users\gabri\Projects\dr-incarbone-website")
PSD_PATH = ROOT / "LOGO_GIORGIO.PSD"
PUBLIC = ROOT / "public"

ICON_LAYER_NAME = (
    "illustrazione-anatomica-dettagliata-del-cervello-umano-e-del-sistema-vascolare_flipped (1)"
)
NAME_LAYER = "GIORGIO INCARBONE"
NEURO_LAYER = "NEUROCHIRURGO"
ICON_TEXT_GAP = 68
TEXT_EXPORT_SCALE = 1.4


def trim_transparent(image: Image.Image) -> Image.Image:
    if image.mode != "RGBA":
        image = image.convert("RGBA")

    bbox = image.getbbox()
    if not bbox:
        return image

    return image.crop(bbox)


def align_width(image: Image.Image, target_width: int) -> Image.Image:
    if image.width == target_width:
        return image

    target_height = round(image.height * (target_width / image.width))
    return image.resize(
        (target_width, target_height),
        Image.Resampling.LANCZOS,
    )


psd = PSDImage.open(PSD_PATH)
layers = {layer.name: layer for layer in psd.descendants()}

icon_layer = layers[ICON_LAYER_NAME]
name_layer = layers[NAME_LAYER]
neuro_layer = layers[NEURO_LAYER]

icon_image = trim_transparent(icon_layer.composite())
name_image = trim_transparent(name_layer.composite())
neuro_image = trim_transparent(neuro_layer.composite())

target_text_width = name_image.width
neuro_image = align_width(neuro_image, target_text_width)

gap = neuro_layer.bbox[1] - name_layer.bbox[3]
text_height = name_image.height + gap + neuro_image.height
text_block = Image.new("RGBA", (target_text_width, text_height), (0, 0, 0, 0))
text_block.paste(name_image, (0, 0), name_image)
text_block.paste(neuro_image, (0, name_image.height + gap), neuro_image)

export_width = round(text_block.width * TEXT_EXPORT_SCALE)
export_height = round(text_block.height * TEXT_EXPORT_SCALE)
text_block = text_block.resize(
    (export_width, export_height),
    Image.Resampling.LANCZOS,
)

icon_image.save(PUBLIC / "logo-icon.png")
name_image.save(PUBLIC / "logo-name.png")
neuro_image.save(PUBLIC / "logo-neuro.png")
text_block.save(PUBLIC / "logo-text.png")

canvas_w = icon_image.width + ICON_TEXT_GAP + export_width + 40
canvas_h = max(icon_image.height, export_height)
canvas = Image.new("RGBA", (canvas_w, canvas_h), (255, 255, 255, 0))

canvas.paste(icon_image, (0, (canvas_h - icon_image.height) // 2), icon_image)

text_x = icon_image.width + ICON_TEXT_GAP
text_y = (canvas_h - export_height) // 2
canvas.paste(text_block, (text_x, text_y), text_block)
canvas.convert("RGB").save(PUBLIC / "logo-giorgio.png", format="PNG")

print("icon:", icon_image.size)
print("name:", name_image.size)
print("neuro:", neuro_image.size)
print("text block:", text_block.size)
print("gap:", gap)
print("composite:", canvas.size)
