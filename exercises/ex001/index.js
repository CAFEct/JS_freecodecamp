function normalizeUnits(manifest) {
  const copy = { ...manifest }
  if (copy.unit === "lb") {
    copy.weight = copy.weight * 0.45
  }
  copy.unit = "kg"
  return copy

}


function validateManifest(manifest) {

}
