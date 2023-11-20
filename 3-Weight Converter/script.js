// variab
let lbsInput = document.getElementById('lbsInput')
let output = document.getElementById ('output')
let gramsOutput = document.getElementById ('gramsOutput')
let kgOutput = document.getElementById ('kgOutput')
let ozOutput = document.getElementById ('ozOutput')

//style
output.style.visibility = 'hidden'
// event
lbsInput.addEventListener('input', function(e){
    let pound = e.target
    if (pound.value >= 0 ){
        output.style.visibility = 'visible'
        gramsOutput.innerHTML = (pound.value /  0.002205).toFixed(2)
        kgOutput.innerHTML = (pound.value *  0.45359237 ).toFixed(2)
        ozOutput.innerHTML = (pound.value * 16).toFixed(2)
    }
    else{
        alert("Please enter positive number")
        pound.value = " "
    }
    
})
    
    