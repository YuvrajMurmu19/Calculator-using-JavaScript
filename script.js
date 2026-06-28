//this is to store the history of the calculations
let calculationHistory = [];

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
        let originalExpr = expr
        
        expr = expr
            .replaceAll("sin", "Math.sin")
            .replaceAll("cos", "Math.cos")
            .replaceAll("tan", "Math.tan")
            .replaceAll("log", "Math.log10")
            .replaceAll("ln", "Math.log")
            .replaceAll("√", "Math.sqrt")
            .replaceAll("π", "Math.PI")
         
            
         expr = expr.replace(/\be\b/g, "Math.E");
        
         //modifying to store history
        let result = eval(expr);
        result = formatResult(result);

        calculationHistory.push(originalExpr + " = " + result);
        display.value = result;
        renderHistory();

    } catch (error) {
        display.value = 'Error';
        console.error(error);
    }
}
function formatResult(num) {
    return Number(num.toFixed(10)).toString();
}

// adding toggle history function
function toggleHistory(){
    const panel = document.getElementById("history-panel");

    if(panel.style.display === "block"){
        panel.style.display = "none";
    }else{
        panel.style.display="block";
        renderHistory();
    }
}
//rendering the hsitory
function renderHistory(){
    const list = document.getElementById("history-list");
    list.innerHTML = "";

    calculationHistory.slice().reverse().forEach(item =>{
        const div = document.createElement("div");
        div.className = "history-item";
        div.textContent = item;
        list.appendChild(div);
    })
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

function power() {
    appendValue("**");
}
function percent() {
    appendValue("/100");
}