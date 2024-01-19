const celcius = document.getElementById("celcius");
const farenheit = document.getElementById("farenheit");
const kelvin = document.getElementById("kelvin");

window.onload = function(){
    // convertFromCelcius();
    celcius.addEventListener('input', function(){
        printVal( celcius.value, (celcius.value * (9/5) + 32), (celcius.value + 273.15));
    });
    convertFromFarenheit();
    convertFromKelvin();
};

// function convertFromCelcius(){
//     celcius.addEventListener('input', function(){
//         printVal( celcius.value, (celcius.value * (9/5) + 32), (celcius.value + 273.15));
//     });
// }

function convertFromFarenheit(){
    farenheit.addEventListener('input', function(){
        printVal( ((farenheit.value - 32) * 5/9), farenheit.value, ((farenheit.value - 32) * 5/9 + 273.15));
    });
}

function convertFromKelvin(){
    kelvin.addEventListener('input', function(){
        printVal( (kelvin.value - 273.15), ((kelvin.value - 273.15) * 9/5 + 32), kelvin.value);
    });
}

function printVal(cel_temp, far_temp, kel_temp){
    celcius.value = cel_temp;
    farenheit.value = far_temp;
    kelvin.value = kel_temp;
}
