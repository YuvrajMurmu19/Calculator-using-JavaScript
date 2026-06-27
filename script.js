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
        if (display.value === 'Error') {

            display.value = '';
            return;
        }
        display.value = eval(display.value);
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