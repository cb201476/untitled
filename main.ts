input.onGesture(Gesture.Shake, function on_gesture_shake() {
    let Random = randint(0, 6)
    if (Random == 0) {
        basic.clearScreen()
        basic.showString("Never")
    } else if (Random == 1) {
        basic.clearScreen()
        basic.showString("Yah")
    } else if (Random == 2) {
        basic.clearScreen()
        basic.showString("You Can Dream")
    } else if (Random == 3) {
        basic.clearScreen()
        basic.showString("Stay Lonely")
    } else if (Random == 4) {
        basic.clearScreen()
        basic.showString("You Matter")
    } else if (Random == 5) {
        basic.clearScreen()
        basic.showString("Love Yourself")
    } else if (Random == 6) {
        basic.clearScreen()
        basic.showString("Just Stop")
    }
    
})
