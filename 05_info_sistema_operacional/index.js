const os = require("node:os")
console.log(os.cpus());
// ram
console.log(os.freemem() / 1024 / 1024 / 1024);