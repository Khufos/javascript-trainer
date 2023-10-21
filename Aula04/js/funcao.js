function toCelcius(fahrenheit){
 let celcius = (5/9) * (fahrenheit-32)
 document.getElementById('result').innerHTML = celcius.toFixed(1)

}