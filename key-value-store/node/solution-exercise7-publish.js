var redis = require("redis");

var client = redis.createClient({
    host: "redis",
    port: "6379"
});

client.publish("notification", "Hello World!", function() {
    process.exit(0);
});
