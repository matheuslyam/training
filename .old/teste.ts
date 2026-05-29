// como usar Uint8Array
const buffer = new Uint8Array(10);

for (let i = 0; i < buffer.length; i++) {
    buffer[i] = i;
}

console.log(buffer)