X = 0
Y = 0
RSTART = 1
DELAY = 100
STATE = 0
basic.show_icon(IconNames.SQUARE)

def on_forever():
    global X, Y
    for COUNT in range(16):
        while RSTART != 0:
            led.unplot(X, Y)
            if COUNT < 4:
                X = COUNT
                Y = 0
            elif COUNT < 8:
                X = 4
                Y = COUNT - 4
            elif COUNT < 12:
                X = 12 - COUNT
                Y = 4
            else:
                X = 0
                Y = 16 - COUNT
            led.plot(X, Y)
            basic.pause(DELAY)
basic.forever(on_forever)

def on_forever2():
    global DELAY, STATE, RSTART
    COUNT2 = 0
    basic.show_number(COUNT2)
    if STATE == 0 and input.button_is_pressed(Button.B):
        DELAY = 100
        STATE = 1
        RSTART = 1
    elif STATE == 1 and not (input.button_is_pressed(Button.B)):
        for index in range(5):
            DELAY += 100
            basic.pause(1000)
        RSTART = 0
        STATE = 2
    elif STATE == 2:
        for index2 in range(4):
            basic.show_number(COUNT2)
            basic.pause(100)
            basic.clear_screen()
        STATE = 0
    else:
        pass
basic.forever(on_forever2)
