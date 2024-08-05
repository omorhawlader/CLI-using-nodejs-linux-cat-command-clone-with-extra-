const fs = require("fs");

const writeSteam = fs.createWriteStream("./example.txt");

for (let index = 0; index < 1000000; index++) {
  !writeSteam.write(index.toString());
}
