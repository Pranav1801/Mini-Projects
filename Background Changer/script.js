const selectedColorCode = document.getElementById("selected-color");

// Changing Background Color Using Color Picker
function changeClick(){
    const colorPicker = document.getElementById("color-picker").value;
    // changeColor('Yellow');
    selectedColorCode.innerHTML = colorPicker;
    document.body.style.background = colorPicker;
}


// Randomly Changing Background Color
const generateRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    changeColor(color);
}

function changeColor(color){
    document.body.style.background = color;
    selectedColorCode.innerHTML = color;
}