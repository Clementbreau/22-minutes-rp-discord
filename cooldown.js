const RPC = require("discord-rpc");

const clientId = "1439247106580942970";
const rpc = new RPC.Client({ transport: "ipc" });

const cooldown = 22 * 60 * 1000;

function setPresence() {
    rpc.setActivity({
        details: "Still stuck with the fishes",
        endTimestamp: Date.now() + cooldown,
        instance: false
    });
}

rpc.on("ready", () => {
    setPresence();
    setInterval(setPresence, cooldown);
});

rpc.login({ clientId }).catch(console.error);