var button=document.querySelector('.button')
var inputValue=document.querySelector('.inputValue')

var Name = document.querySelector('.Name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var tempfeel = document.querySelector('.tempfeel');




button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=f26794e346d2a2eedbb9fc1f9ee6166e'+'&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue=data['name'];
        var tempValue =data['main']['temp'];
        var tempfeelValue =data['main']['feels_like'];
        var descValue =data['weather'][0]['description'];
        
 
        Name.innerHTML = "City: " + nameValue ;
        temp.innerHTML = "Temperature: " + tempValue.toFixed(2) + "°C";
        tempfeel.innerHTML="Feels like: " + tempfeelValue.toFixed(2) + "°C";
        desc.innerHTML = "Weather: " + descValue;
    })


.catch(err=> alert("Invalid City!"))

})
