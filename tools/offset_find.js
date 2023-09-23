const fs = require('fs');

const bytes = fs.readFileSync('./baserom.jp.z64');
const file = Buffer.from([0x8B,0xD5,0x71,0x98,0x55,0xF0,0x82,0x9F,0x7F,0xF0,0x45,0x40,0x67,0x5E,0x4D,0x6D,0xFF]);

const offset = bytes.indexOf(file);
const size = file.length;

console.log(offset, size)