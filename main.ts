let x = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    x = 5 * 6
    radio.sendNumber(x)
})
