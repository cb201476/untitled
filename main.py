def on_gesture_shake():
    Random = randint(0, 6)
    if Random == 0:
        basic.clear_screen()
        basic.show_string("Never")
    elif Random == 1:
        basic.clear_screen()
        basic.show_string("Yah")
    elif Random == 2:
        basic.clear_screen()
        basic.show_string("You Can Dream")
    elif Random == 3:
        basic.clear_screen()
        basic.show_string("Stay Lonely")
    elif Random == 4:
        basic.clear_screen()
        basic.show_string("You Matter")
    elif Random == 5:
        basic.clear_screen()
        basic.show_string("Love Yourself")
    elif Random == 6:
        basic.clear_screen()
        basic.show_string("Just Stop")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

