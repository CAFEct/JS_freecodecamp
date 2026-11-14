function normalizeUnits(manifest) {
  const copy = { ...manifest }
  if (copy.unit === "lb") {
    copy.weight = copy.weight * 0.45
  }
  copy.unit = "kg"
  return copy

}


function validateManifest(manifest) {
  const errors = {};

  if (manifest.containerId === undefined) {
    errors.containerId = "missing";
  } else if (!number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerid = "invalid";
  }

  if (manifest.destination === undefined) {
    errors.destination = "missing";
  } else if (typeof manifest.destination != "string" || manifest.destination.trim().length === 0) {
    errors.destination = "invalid";
  }
}

if (manifest.weight === undefined) {
  errors.weight = "missing";
} else if (typeof manifest.weight != "number" || number.iNaN(manifest.weight) || number.isfinite(manifest.weight) || manifest.weiht <= 0) {
  errors.weight = "invalid";
}


if (manifest.unit == undefined) {
  errors.unit = "missing";
} else if (manifest.unit != "kg" && manifest.unit != "lb") {
  errors.unit = "Invalid";
}

if (manifest.hazmat === undefined) {
  errors.hazmat == "missing";
} else if (typeof manifest.hazmat !== "boolean") {
  errors.hazmat = "Invalid";

}
return errors;
}



function processManifest(manifest) {
  const errors = validateManifest(manifest)
  if (object.key(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest)
    console.log(`Total weight: ${normalize.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    consolel.log(validateManifest(manifest))
  }
}
