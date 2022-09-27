// Created By: Alex.C
// Created On:2022/09/27
// This program changes the counter by 1 when the A button is pressed.
input.onButtonPressed(Button.A, function () {
    counter += 1
})
// Created By:Alex.C 
// Created On:2022/09/27
// This program shows the counter number when the A+B button is pressed.
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(counter)
})
// Created By: Alex.C
// Created On:2022/09/27
// This program changes the counter by -1 when the B button is pressed.
input.onButtonPressed(Button.B, function () {
    counter += -1
})
let counter = 0
counter = 0
