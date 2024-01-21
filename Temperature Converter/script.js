const celcius = document.getElementById("celcius");
const farenheit = document.getElementById("farenheit");
const kelvin = document.getElementById("kelvin");

// window.onload = function(){
//     // convertFromCelcius();
//     celcius.addEventListener('input', function(){
//         printVal( celcius.value, (celcius.value * (9/5) + 32), (celcius.value + 273.15));
//     });
//     convertFromFarenheit();
//     convertFromKelvin();
// };

celcius.addEventListener('input', function(e){
    // printVal( e.target.value, (e.target.value * (9/5) + 32), (e.target.value + 273.15) );
    convertFromCelcius(e.target.value);
});

farenheit.addEventListener('input', function(e){
    // printVal( ((farenheit.value - 32) * 5/9), farenheit.value, ((farenheit.value - 32) * 5/9 + 273.15));
    convertFromFarenheit(e.target.value);
});

kelvin.addEventListener('input', function(e){
    // printVal( (kelvin.value - 273.15), ((kelvin.value - 273.15) * 9/5 + 32), kelvin.value);
    convertFromKelvin(e.target.value);
});

const convertFromCelcius = (temp) =>{
    const far = temp * (9/5) + 32;
    const kel = parseFloat(temp) + 273.15;
    if(temp == ""){
        farenheit.value = "";
        kelvin.value = "";
    } else {    
        farenheit.value = far;
        kelvin.value = kel;
    }
}

const convertFromFarenheit = (temp) =>{    
    const cel = (temp - 32) * 5/9;
    const kel = ((temp - 32) * (5/9)) + 273.15; 
    if(temp == ""){
        celcius.value = "";
        kelvin.value = "";
    } else {    
        celcius.value = cel;
        kelvin.value = kel;
    }
}

const convertFromKelvin = (temp) =>{
    const cel = parseFloat(temp) - 273.15;
    const far = ((temp - 273.15) * (9/5)) + 32;
    if(temp == ""){
        celcius.value = "";
        farenheit.value = "";
    } else {    
        celcius.value = cel;
        farenheit.value = far;
    }
}

function printVal(cel_temp, far_temp, kel_temp){
    celcius.value = cel_temp;
    farenheit.value = far_temp;
    kelvin.value = kel_temp;
}