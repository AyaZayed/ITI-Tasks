import express from "express";
import fs from "fs";
import path from "path";

const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

const app = express();

// middleware to parse json body
app.use(express.json());

// backup middleware
const backup = (req, res, next) => {
        try {
                const backupName = `backups/data-backup-${Date.now()}.json`;
                fs.writeFileSync(backupName, JSON.stringify(users, null, 2));
                console.log(`Backup created: ${backupName}`);
        } catch (err) {
                console.error("Backup failed:", err.message);
        }

        next();
};

const isValidUsername = (username) => {
        if (username.length < 3) {
                return false
        }
        return true
}

const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
}

// logging middleware
app.use((req, res, next) => {
        console.log(`${req.method} ${req.url} ${Date.now()}`);
        next();
});


// get all users
app.get("/users", (req, res) => {
        try {
                res.status(200).json({ message: "Users fetched successfully", users });
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
});

// count users
app.get('/users/count', (req, res) => {
        const totalUsers = users.filter((user) => user.role === 'user')
        const totalAdmins = users.filter((user) => user.role === 'admin')
        try {
                res.status(200).json({
                        message: "Users count fetched successfully",
                        users: totalUsers.length,
                        admins: totalAdmins.length
                });
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
})

// get user by username
app.get("/users/search", (req, res) => {
        const { username } = req.query;
        const user = users.find((user) => user.username.toLowerCase() === username.toLowerCase());
        if (!user) {
                return res.status(404).json({ message: "User not found" });
        }
        try {
                res.status(200).json({ message: "User fetched successfully", user });
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
});

// get user by id
app.get("/users/:id", (req, res) => {
        const { id } = req.params;
        const user = users.find((user) => user.id === Number(id));
        if (!user) {
                return res.status(404).json({ message: "User not found" });
        }
        try {
                res.status(200).json({ message: "User fetched successfully", user });
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
});

// create user
app.post("/users", backup, async (req, res) => {
        const newUser = req.body;
        if (!newUser || !newUser.username || !newUser.email) {
                return res.status(400).json({ message: "User data is required" });
        }

        if (!isValidUsername(newUser.username)) {
                return res.status(400).json({ message: "Username must be at least 3 characters long" });
        }

        if (!isValidEmail(newUser.email)) {
                return res.status(400).json({ message: "Invalid email" });
        }

        const doesExist = users.find((user) => user.username === newUser.username || user.email === newUser.email);

        if (doesExist) {
                return res.status(400).json({ message: "User already exists" });
        }

        users.push({ ...newUser, role: "user", id: users.length + 1 });

        try {
                fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
                res.status(201).json({ message: "User created successfully", user: newUser });
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
});

// update user
app.put("/users/:id", backup, (req, res) => {
        const { id } = req.params;
        const updatedUser = req.body;
        const userIndex = users.findIndex((user) => user.id === Number(id));
        if (userIndex === -1) {
                return res.status(404).json({ message: "User not found" });
        }

        if (updatedUser.username && !isValidUsername(updatedUser.username)) {
                return res.status(400).json({ message: "Username must be at least 3 characters long" });
        }

        if (updatedUser.email && !isValidEmail(updatedUser.email)) {
                return res.status(400).json({ message: "Invalid email" });
        }

        users[userIndex] = { ...users[userIndex], ...updatedUser };
        try {
                fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
                res.status(200).json({ message: "User updated successfully", user: users[userIndex] });
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
});

// delete user
app.delete("/users/:id", backup, (req, res) => {
        const { id } = req.params;
        const userIndex = users.findIndex((user) => user.id === Number(id));
        if (userIndex === -1) {
                return res.status(404).json({ message: "User not found" });
        }
        users.splice(userIndex, 1);
        try {
                fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
                res.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
});


// not found routes
app.use((req, res) => {
        res.status(404).json({ message: "Route not found" });
});

// error handling middleware
app.use((err, req, res, next) => {
        res.status(500).json({ message: err.message });
});

const PORT = 6000;

app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
});
