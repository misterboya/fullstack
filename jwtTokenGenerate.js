const jwt = require("jsonwebtoken");
//generate, decode, verify
const value = {
    name: "venu",
    accountNumber: 123123123
}
//jwt
const token = jwt.sign(value, "secret");
console.log(token);

const decode = jwt.decode(token);
console.log("Decoded token " + decode);

const verified = jwt.verify(token, "secret");
console.log("Token verified " + verified);