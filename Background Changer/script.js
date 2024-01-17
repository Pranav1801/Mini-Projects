const selectedColorCode = document.getElementById("selected-color");

function changeClick(){
    const colorPicker = document.getElementById("color-picker").value;
    // changeColor('Yellow');
    selectedColorCode.innerHTML = colorPicker;
    document.body.style.background = colorPicker;
}

function changeColor(color){
    document.body.style.background = color;
}
