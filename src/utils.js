export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

export const rgbToHex = (r, g, b) => {
  return "0x" + ((1 << 24) + (r << 16) + (g << 8)).toString(16).slice(1);
}
