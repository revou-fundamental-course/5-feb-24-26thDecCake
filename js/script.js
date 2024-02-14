document.getElementById('reset_btn').addEventListener('click', function() {
  document.getElementById('temperature').value = '';
  document.getElementById('current_unit').textContent = '°C';
  document.getElementById('conversion_result').value = '';
  document.getElementById('conversion_process').value = '';
});


document.getElementById('toggle_btn').addEventListener('click', function() {
  const currentUnit = document.getElementById('current_unit').textContent.trim();
  const newUnit = currentUnit === '°C' ? '°F' : '°C';
  document.getElementById('current_unit').textContent = newUnit;
  
  convertTemperature();
});

function convertTemperature() {
  const temperature = parseFloat(document.getElementById('temperature').value);
  const unit = document.getElementById('current_unit').textContent.trim();
  
  if (isNaN(temperature)) {
      alert('Please enter a valid temperature.');
      return;
  }
  
  let result;
  let convertedUnit;
  let conversionProcess;
  if (unit === '°C') {
      result = (temperature * 9/5) + 32;
      convertedUnit = '°F';
      conversionProcess = `${temperature}°C × 9/5 + 32 = ${result.toFixed(2)}°F`;
  } else if (unit === '°F') {
      result = (temperature - 32) * 5/9;
      convertedUnit = '°C';
      conversionProcess = `(${temperature}°F - 32) × 5/9 = ${result.toFixed(2)}°C`;
  }

  document.getElementById('conversion_result').value = `${result.toFixed(2)} ${convertedUnit}`;
  document.getElementById('conversion_process').value = `${conversionProcess}`;
}

document.getElementById('convert_btn').addEventListener('click', function() {
  convertTemperature();
});
