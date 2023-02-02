const calTemp = () => {
  let tempInsert = document.getElementById("temp").value;

  const tempSelect = document.getElementById("temp_diff");
  const valTemp = temp_diff.options[tempSelect.selectedIndex].value;

  const celToFah = (cel) => {
    let fahrenit = Math.round(cel * (9 / 5) + 32);
    return fahrenit;
  };

  const fahToCel = (fah) => {
    let celsius = Math.round((fah - 32) * (5 / 9));
    return celsius;
  };

  let result;

  if (valTemp == "cel") {
    result = celToFah(tempInsert);
    document.getElementById("resultTemp").innerHTML = `${result}°Fahrenit`;
  } else {
    result = fahToCel(tempInsert);
    document.getElementById("resultTemp").innerHTML = `${result}°Celsius`;
  }
};
