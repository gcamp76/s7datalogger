class PLCClient {
    constructor(config) {
        this.config = config;
        this.connected = false;
    }

    connect() {
        console.log("Connecting to PLC:", this.config.plc.ip);
        this.connected = true;
    }

    readData() {
        if (!this.connected) {
            throw new Error("PLC not connected");
        }

        return {
            timestamp: new Date(),
            value: Math.random() * 100
        };
    }

    disconnect() {
        this.connected = false;
    }
}

module.exports = PLCClient;
