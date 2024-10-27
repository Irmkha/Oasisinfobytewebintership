document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = document.getElementById('tempInput').value;
    const conversionType = document.getElementById('conversionType').value;
    let result = 0;
  
    if (!tempInput) {
      document.getElementById('result').innerText = "Please enter a temperature!";
      return;
    }
  
    if (conversionType === 'celsius') {
      result = (tempInput * 9/5) + 32;
      document.getElementById('result').innerText = `${tempInput}°C is ${result.toFixed(2)}°F`;
    } else {
      result = (tempInput - 32) * 5/9;
      document.getElementById('result').innerText = `${tempInput}°F is ${result.toFixed(2)}°C`;
    }
  });
  