const crypto = require("crypto");
const poseidon = require("poseidon-encryption");

// SHA-256
const data = "This is some data X.";
// TODO: Compute the SHA-256 hash of the data and print it. Try changing the data slightly and observe the changes in the hash.
const hashValue = crypto.createHash("sha256").update(data).digest("hex");
console.log(hashValue);

// Poseidon
const inputs = [1, 2, 3, 4];
// TODO: Compute the Poseidon hash of the inputs and print it. Remember that Poseidon accepts an array of integers as input.
const poseidonHash = poseidon.poseidon(inputs);
console.log(poseidonHash);
