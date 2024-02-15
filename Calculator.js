// Creates empty variables that will be used later

var solution = ""
var equation = ""
// Adds text to the calculator when a button is clicked

const addText = (text) => {
    document.getElementById("textarea").value += text
}

// Deletes one character from the input tag

const del = () => {
    let char = document.getElementById("textarea").value
    char = char.substring(0, char.length-1)
    document.getElementById("textarea").value = char
}

// Clears everything from the input tag

const clr = () => {
    document.getElementById("textarea").value = ""
}

// Returns the sine of the last number given

const sin = () => {
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.sin(Number(equation[equation.length - 1]))
    equation.pop()
    equation.push(solution)
    document.getElementById("textarea").value = equation.join(" ")
}

// Returns the cosine of the last number given

const cos = () => {
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.cos(Number(equation[equation.length - 1]))
    equation.pop()
    equation.push(solution)
    document.getElementById("textarea").value = equation.join(" ")
}

// Returns the tan of the last number given

const tan = () => {
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.tan(Number(equation[equation.length - 1]))
    equation.pop()
    equation.push(solution)
    document.getElementById("textarea").value = equation.join(" ")
}

// Returns the log of the last number given

const log = () => {
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.log10(Number(equation[equation.length - 1]))
    equation.pop()
    equation.push(solution)
    document.getElementById("textarea").value = equation.join(" ")
}

// Returns the natural log of the last number given

const ln = () => {
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.log(Number(equation[equation.length - 1]))
    equation.pop()
    equation.push(solution)
    document.getElementById("textarea").value = equation.join(" ")
}

// Returns the square root of the last number given

const sqrt = () => {
    equation = document.getElementById("textarea").value
    equation = equation.split(" ")
    solution = Math.sqrt(Number(equation[equation.length - 1]))
    equation.pop()
    equation.push(solution)
    document.getElementById("textarea").value = equation.join(" ")
}

// Returns the solution to basic arithmetic operations

const equal = () => {
        solution = document.getElementById("textarea").value

        // Trys to eval the equation and if it errors change the textarea to 'Error' otherwise display the solution
        
        try {
            solution = eval(solution)
            document.getElementById("textarea").value = solution
        } catch (error) {
            document.getElementById("textarea").value = "Error"
        }
}

