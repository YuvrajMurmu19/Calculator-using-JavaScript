function appendValue(value) {
    const display = document.getElementById("display")
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
    display.scrollLeft = display.scrollWidth;
}
function calculate() {
    const display = document.getElementById("display");
    //  i have used this try catch block so that i can catch errors and show it to users that they have typed something invalid

    try {
        // i have applied if condition so that when user clicks equal to and error is there in display field 
        // i change the display field to show nothing
        if (display.value === 'Error' || display.value === '') {

            display.value = '';
            return;
        }

        let expr = display.value;
        
        expr = expr
            .replaceAll("sin", "Math.sin")
            .replaceAll("cos", "Math.cos")
            .replaceAll("tan", "Math.tan")
            .replaceAll("log", "Math.log10")
            .replaceAll("ln", "Math.log")
            .replaceAll("√", "Math.sqrt")
            .replaceAll("π", "Math.PI")
         
            
         expr = expr.replace(/\be\b/g, "Math.E");

        display.value = eval(expr);
    } catch (error) {
        display.value = 'Error';
        console.error(error);
    }
}

function deleteLast() {
    const display = document.getElementById("display");
    if (display.value === "Error") {
        display.value = "";
        return;
    }
    display.value = display.value.slice(0, -1);
}
//i will add scientific class with a toggle function in the calculator
function toggleScientific() {
    const calculator = document.querySelector(".calculator");
    const button = document.getElementById("toggle-mode");
    calculator.classList.toggle("scientific");

    if (calculator.classList.contains("scientific")) {
        button.value = "STD";
    }
    else {
        button.value = "SCI";
    }
}

function insertPi() {
    appendValue("π");
}
function insertE() {
    appendValue("e");
}
function sqrt() {
    appendValue("√(");
}
function sin() {
    appendValue("sin(");
}

function cos() {
    appendValue("cos(");
}

function tan() {
    appendValue("tan(");
}
function log() {
    appendValue("log(");
}

function ln() {
    appendValue("ln(");
}
function insertOpenBracket() {
    appendValue("(");
}
function insertCloseBracket() {
    appendValue(")");
}