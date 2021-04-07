const mqtt = require('mqtt');

const broker = mqtt.connect('mqtt://test.mosquitto.org/');

const delay = ms => new Promise(res => setTimeout(res, ms));

broker.on('connect', async () => {
    console.log("Conectado no broker MQTT");

    // código que fica eternamente gerando dados
    while(true) {
        const temperatura = Math.floor(Math.random() * 40) + 20;

        broker.publish("sensor-temperatura", temperatura.toString());

        console.log(`Valor de temperatura gerado: ${temperatura}`);

        await delay(5000); // 5 segundos
    }
});