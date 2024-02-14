var solution = ""
var equation = ""
// Lines 3-5 add text to the calculator when a button is clicked

const addText = (text) => {
    document.getElementById("textarea").value += text
}

// Lines 9-10 delete one character from the input tag

const del = () => {
    let x = document.getElementById("textarea").value
    x = x.substring(0, x.length-1)
    document.getElementById("textarea").value = x
}

// Lines 17-20 clear everything from the input tag

const clr = () => {
    document.getElementById("textarea").value = ""
}

const sin = (text) => {
    document.getElementById("textarea").value += text
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.sin(Number(equation[0]))
    document.getElementById("textarea").value = solution
}

const cos = (text) => {
    document.getElementById("textarea").value += text
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.cos(Number(equation[0]))
    document.getElementById("textarea").value = solution
}

const tan = (text) => {
    document.getElementById("textarea").value += text
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.tan(Number(equation[0]))
    document.getElementById("textarea").value = solution
}

const log = (text) => {
    document.getElementById("textarea").value += text
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.log10(Number(equation[0]))
    document.getElementById("textarea").value = solution
}

const ln = (text) => {
    document.getElementById("textarea").value += text
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.log(Number(equation[0]))
    document.getElementById("textarea").value = solution
}

const sqrt = (text) => {
    document.getElementById("textarea").value += text
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.sqrt(Number(equation[0]))
    document.getElementById("textarea").value = solution
}

const equal = () => {
        solution = document.getElementById("textarea").value
        solution = eval(solution)
        document.getElementById("textarea").value = solution
}

