let display = window.document.querySelector('#display')

function addToDisplay(value) {

    if (display.textContent == '0') {

        if (value == '+' || value == '-' || value == '*' || value == '/' || value == ',') {
            display.innerHTML = '0'
        }
        else {
            
            display.innerHTML = ''
            display.innerHTML += value

        }

    }

    else {
        
        display.innerHTML += value

    }

}

function clearDisplay() {

    display.textContent = ''
    display.innerHTML = '0'

}

function calculateResult() {

    const displayValue = display.textContent
    let result = ''

    try {
        result = eval(displayValue)
    }

    catch (error) {
        result = 'ERROR'
    }

    display.innerHTML = result
    
}