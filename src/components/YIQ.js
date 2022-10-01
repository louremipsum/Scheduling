const getContrast = (hex1) => {
  // To remove # from the HEX code if present
  if (hex1.slice(0, 1) === "#") {
    hex1 = hex1.slice(1);
  }

  // If a 3-charater HEX code, convert to 6-charater
  if (hex1.length === 3) {
    hex1
      .split("")
      .map((hex) => hex + hex)
      .join("");
  }

  //convert to RGB value
  const r = parseInt(hex1.substr(0, 2), 16);
  const g = parseInt(hex1.substr(2, 2), 16);
  const b = parseInt(hex1.substr(4), 16);

  //converting to YIQ color model
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  //checking contrast
  return yiq >= 128 ? "black" : "white";
};

const getContrastGradient = (hex1, hex2) => {
  const hex1_c = getContrast(hex1);
  const hex2_c = getContrast(hex2);
  if (hex1_c === "black" && hex2_c === "black") {
    return "dark";
  }
  if (hex1_c === "white" && hex2_c === "white") {
    return "white";
  }
  return "gray";
};

export default getContrastGradient;
