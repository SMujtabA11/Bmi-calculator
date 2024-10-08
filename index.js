var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var ageplus = document.getElementById("ageplus");
var ageminus = document.getElementById("ageminus");
var rangeSlider = document.getElementById("rangeSlider");
var x = 0;
var y = 0;
var bmi;
var weightOutput = document.getElementById("weightOutput");
var ageOutput = document.getElementById("ageOutput");
var heightOutput = document.getElementById("heightOutput");
var calBtn = document.getElementById("calBtn");
plus.addEventListener("click",function(){
    x++;
    weightOutput.innerText = x;
})
minus.addEventListener("click",function(){
    if(x === 0){
        alert("sorry")
    }
    else{
        x--;
        weightOutput.innerText = x;
    }
   
})
ageplus.addEventListener("click",function(){
    y++;
    ageOutput.innerText = y;
})
ageminus.addEventListener("click",function(){
    if(y === 0){
        alert("sorry")
    }
    else{
        y--;
        ageOutput.innerText = y;
    }
})
rangeSlider.addEventListener("input",function(){
    heightOutput.innerText=rangeSlider.value;
})
var heightInMeters = rangeSlider.value / 100; 
calBtn.addEventListener("click",function(){

    bmi =x / Math.pow(heightInMeters, 2);
    console.log(heightInMeters)



})