var redis = require("redis");

var client = redis.createClient({
    host: "redis",
    port: "6379"
});

client.on("message", function (channel, message) {
    console.log("Channel: " + channel + " - Message: " + message);
});

client.subscribe("notification");
