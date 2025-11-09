const { users } = require("../data/db");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/tokens");
const { isValidEmail } = require("../utils/validation");

async function signup(email, password) {
        if (!isValidEmail(email)) throw new Error("Invalid email format");

        const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passPattern.test(password)) throw new Error("Password must be at least 6 characters long and contain at least one letter and one number");

        if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
                throw new Error("User already exists")
        };

        const hash = await bcrypt.hash(password, 10);
        const user = { id: String(users.length + 1), email, password: hash };
        users.push(user);
        const token = generateToken(user);
        return { token, user };
}

async function login(email, password) {
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (!user) throw new Error("Invalid credentials");
        if (!await bcrypt.compare(password, user.password)) throw new Error("Invalid credentials");
        const token = generateToken(user);
        return { token, user };
}

module.exports = { signup, login };