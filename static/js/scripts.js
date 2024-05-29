function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    updateDynamicResult();
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    const dynamicResult = document.getElementById('dynamic-result');
    dynamicResult.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    updateDynamicResult();
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        display.value = result;
        const dynamicResult = document.getElementById('dynamic-result');
        dynamicResult.value = '';
    } catch (error) {
        display.value = 'Error';
        const dynamicResult = document.getElementById('dynamic-result');
        dynamicResult.value = '';
    }
}

function updateDynamicResult() {
    const display = document.getElementById('display');
    const dynamicResult = document.getElementById('dynamic-result');
    try {
        const result = eval(display.value);
        dynamicResult.value = result;
    } catch (error) {
        dynamicResult.value = '';
    }
}
