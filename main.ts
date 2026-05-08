input.onButtonPressed(Button.A, function () {
    ESP8266_IoT.setData(
    "RB3LMXXQNCXW2QPD",
    1
    )
    ESP8266_IoT.uploadData()
    basic.showNumber(1)
    basic.pause(20000)
})
input.onButtonPressed(Button.B, function () {
    ESP8266_IoT.setData(
    "RB3LMXXQNCXW2QPD",
    0
    )
    ESP8266_IoT.uploadData()
    basic.showNumber(0)
    basic.pause(20000)
})
basic.showString("MQTT")
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("XHsc40000", "ncc1701a")
if (ESP8266_IoT.wifiState(false)) {
    basic.showIcon(IconNames.No)
} else {
    basic.showIcon(IconNames.Yes)
}
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
})
