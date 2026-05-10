const PLCClient = require("../core/plc-client");
const config = require("../../config/config.json");

const plc = new PLCClient(config);

plc.connect();

setInterval(() => {
    const data = plc.readData();
    console.log("PLC DATA:", data);
}, config.polling_interval_ms);
