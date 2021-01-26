const fs = require("fs");
let Bot = require("geometrix_bot");

try {
    const data = fs.readFileSync("env.json");
    const TEST_BOT_TOKEN = JSON.parse(data).TEST_BOT_TOKEN;

    new Bot(TEST_BOT_TOKEN);

} catch (err) {
    console.error("Error: ", err) 
}
