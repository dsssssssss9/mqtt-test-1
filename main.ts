basic.showString("MQTT")
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("XHsc40000", "ncc1701a")
if (ESP8266_IoT.wifiState(false)) {
    basic.showIcon(IconNames.No)
} else {
    basic.showIcon(IconNames.Yes)
}
basic.forever(function () {
	
})
