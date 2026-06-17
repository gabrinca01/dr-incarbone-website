from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(r"C:\Users\gabri\Projects\dr-incarbone-website")
PUBLIC = ROOT / "public"
FONTS = ROOT / "fonts"

ICON_PATH = PUBLIC / "logo-icon.png"
OUTPUT_PATH = PUBLIC / "logo-giorgio.png"

NAME = "GIORGIO INCARBONE"
PROFESSION = "NEUROCHIRURGO"

ICON = Image.open(ICON_PATH).convert("RGBA")
ICON_W, ICON_H = ICON.size

NAME_SIZE = 47
PROFESSION_SIZE = 38
GAP = 18
ICON_TEXT_GAP = 68

name_font = ImageFont.truetype(str(FONTS / "Miranoextended Bold.ttf"), NAME_SIZE)
profession_font = ImageFont.truetype(str(FONTS / "Miranoextended Light.ttf"), PROFESSION_SIZE)


def draw_tracked_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    xy: tuple[int, int],
    font: ImageFont.FreeTypeFont,
    tracking: int,
    fill: tuple[int, int, int, int] = (15, 23, 42, 255),
) -> int:
    x, y = xy
    for char in text:
        draw.text((x, y), char, font=font, fill=fill)
        x += draw.textlength(char, font=font) + tracking
    return x - tracking


def text_width(
    draw: ImageDraw.ImageDraw,
    text: str,
    font: ImageFont.FreeTypeFont,
    tracking: int,
) -> float:
    width = 0.0
    for index, char in enumerate(text):
        width += draw.textlength(char, font=font)
        if index < len(text) - 1:
            width += tracking
    return width


temp = Image.new("RGBA", (1, 1))
draw = ImageDraw.Draw(temp)

name_tracking = 10
profession_tracking = 24

name_width = text_width(draw, NAME, name_font, name_tracking)
profession_width = text_width(draw, PROFESSION, profession_font, profession_tracking)
text_width_px = int(max(name_width, profession_width))

canvas_w = ICON_W + ICON_TEXT_GAP + text_width_px + 40
canvas_h = ICON_H
canvas = Image.new("RGBA", (canvas_w, canvas_h), (255, 255, 255, 0))

canvas.paste(ICON, (0, 0), ICON)

text_x = ICON_W + ICON_TEXT_GAP
block_h = NAME_SIZE + GAP + PROFESSION_SIZE
name_y = (canvas_h - block_h) // 2
profession_y = name_y + NAME_SIZE + GAP

draw = ImageDraw.Draw(canvas)
draw_tracked_text(draw, NAME, (text_x, name_y), name_font, name_tracking)
draw_tracked_text(
    draw,
    PROFESSION,
    (text_x, profession_y),
    profession_font,
    profession_tracking,
)

canvas.convert("RGB").save(OUTPUT_PATH, format="PNG")
print("saved", OUTPUT_PATH, canvas.size)
