input.onButtonPressed(Button.A, function () {
    ESP8266_IoT.setData(
    "RB3LMXXQNCXW2QPD",
    1
    )
    ESP8266_IoT.uploadData()
    basic.showNumber(1)
    ESP8266_IoT.publishMqttMessage(
    "1",
    "topic/1",
    ESP8266_IoT.QosList.Qos2,
    false
    )
    basic.pause(20000)
})
input.onButtonPressed(Button.B, function () {
    ESP8266_IoT.setData(
    "RB3LMXXQNCXW2QPD",
    0
    )
    ESP8266_IoT.uploadData()
    basic.showNumber(0)
    ESP8266_IoT.publishMqttMessage(
    "0",
    "topic/1",
    ESP8266_IoT.QosList.Qos2,
    false
    )
    basic.pause(20000)
})
ESP8266_IoT.MqttEvent("topic/1", ESP8266_IoT.QosList.Qos0, function (message) {
    if (message == "1") {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (message == "0") {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
basic.showString("MQTT")
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("XHsc40000", "ncc1701a")
if (ESP8266_IoT.wifiState(false)) {
    basic.showIcon(IconNames.No)
} else {
    basic.showIcon(IconNames.Yes)
}
ESP8266_IoT.setMQTT(
ESP8266_IoT.SchemeList.TCP,
"PCg9Ky0jMSEBBx4MNi0MLBY",
"PCg9Ky0jMSEBBx4MNi0MLBY",
"AM7sqSWs88JFz9vEzGJxIGg9",
""
)
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.connectMQTT("mqtt3.thingspeak.com", 1883, true)
    if (ESP8266_IoT.isMqttBrokerConnected()) {
        basic.showIcon(IconNames.Heart)
    }
})
