from psd_tools import PSDImage

psd = PSDImage.open(r"C:\Users\gabri\Projects\dr-incarbone-website\LOGO_GIORGIO.PSD")
print("size:", psd.size)


def walk(layer, depth=0):
    ind = "  " * depth
    kind = getattr(layer, "kind", "?")
    bbox = getattr(layer, "bbox", None)
    print(f"{ind}{layer.name!r} kind={kind} visible={layer.visible} bbox={bbox}")
    if hasattr(layer, "__iter__"):
        for child in layer:
            walk(child, depth + 1)


for layer in psd:
    walk(layer)
