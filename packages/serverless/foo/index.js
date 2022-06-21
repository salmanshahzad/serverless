const axios = require("axios");

module.exports = { main };

async function main(args) {
    console.log(process.env);
    console.log(args);
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res.data);
    return { body: res.data };
}
