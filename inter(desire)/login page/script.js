
document.getElementById('convertBtn').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;

    if (isNaN(temperature)) {
        document.getElementById('result').textContent = "Please enter a valid temperature.";
        return;
    }

    let result;
    
    if (unitFrom === unitTo) {
        result = temperature;
    } else if (unitFrom === 'Celsius' && unitTo === 'Fahrenheit') {
        result = (temperature * 9/5) + 32;
    } else if (unitFrom === 'Celsius' && unitTo === 'Kelvin') {
        result = temperature + 273.15;
    } else if (unitFrom === 'Fahrenheit' && unitTo === 'Celsius') {
        result = (temperature - 32) * 5/9;
    } else if (unitFrom === 'Fahrenheit' && unitTo === 'Kelvin') {
        result = (temperature - 32) * 5/9 + 273.15;
    } else if (unitFrom === 'Kelvin' && unitTo === 'Celsius') {
        result = temperature - 273.15;
    } else if (unitFrom === 'Kelvin' && unitTo === 'Fahrenheit') {
        result = (temperature - 273.15) * 9/5 + 32;
    }

    document.getElementById('result').textContent = `Converted Temperature: ${result.toFixed(2)} ${unitTo}`;
});