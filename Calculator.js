// Lines 3-99 add text to the calculator when a button is clicked

const seven = () => {
    document.getElementById("textarea").value += "7"
}

const eight = () => {
    document.getElementById("textarea").value += "8"
}

const nine = () => {
    document.getElementById("textarea").value += "9"
}

const sqrt = () => {
    document.getElementById("textarea").value += " √ "
}

const four = () => {
    document.getElementById("textarea").value += "4"
}

const five = () => {
    document.getElementById("textarea").value += "5"
}

const six = () => {
    document.getElementById("textarea").value += "6"
}

const exp = () => {
    document.getElementById("textarea").value += " ^ "
}

const one = () => {
    document.getElementById("textarea").value += "1"
}

const two = () => {
    document.getElementById("textarea").value += "2"
}

const three = () => {
    document.getElementById("textarea").value += "3"
}

const sin = () => {
    document.getElementById("textarea").value += " Sin "
}

const add = () => {
    document.getElementById("textarea").value += " + "
}

const zero = () => {
    document.getElementById("textarea").value += "0"
}

const sub = () => {
    document.getElementById("textarea").value += " - "
}

const cos = () => {
    document.getElementById("textarea").value += " Cos "
}

const multi = () => {
    document.getElementById("textarea").value += " * "
}

const div = () => {
    document.getElementById("textarea").value += " / "
}

const natLog = () => {
    document.getElementById("textarea").value += " e "
}

const tan = () => {
    document.getElementById("textarea").value += " Tan "
}

const log = () => {
    document.getElementById("textarea").value += " Log "
}

const del = () => {
    let x = document.getElementById("textarea").value
    x = x.substring(0, x.length-1)
    document.getElementById("textarea").value = x
}

const clr = () => {
    document.getElementById("textarea").value = ""
}

const equal = () => {
    let y = document.getElementById("textarea").value
    y = y.split(" ")

    for (let i = 0; i < y.length - 1; i++) {
        let solution
        if (y[i] == "+") {
            solution = Number(y[i-1]) + Number(y[i+1])
            document.getElementById("textarea").value = solution
            y = y.splice(y[i-1], 3)
            y = y.unshift(solution)
            console.log(y)
        } else if (y[i] == "-") {
            solution = Number(y[i-1]) - Number(y[i+1])
            document.getElementById("textarea").value = solution
            y = y.splice(y[i-1], 3)
            y = y.unshift(solution)
            console.log(y)
        }
    }
}

