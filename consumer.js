const mqtt = require('mqtt');

const broker = mqtt.connect('mqtt://test.mosquitto.org/');

broker.on('connect', () => {
    broker.subscribe("sensor-temperatura", () => {
        console.log("sensor-temperatura subscribed!");
    });
});

broker.on('message', (topic, temperatura) => {
    console.log(`    >>>>>>> Mensagem recebida do tópico ${topic} - temperatura ${temperatura}º`);
});