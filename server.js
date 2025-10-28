import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.post("/users", async (req, res) => {
    const { name, email, address } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
    }

    try {
        const sql = "INSERT INTO Usuarios (name, email, address) VALUES (?, ?, ?)";
        const values = [name, email, address];

        const [result] = await pool.query(sql, values);

        const newUser = {
            id: result.insertId,
            name,
            email,
            address
        };

        res.status(201).json(newUser);

    } catch (error) {
        console.error("Erro ao inserir usuário:", error);
        res.status(500).json({ error: "Erro interno ao salvar usuário." });
    }
});

app.get("/users", async (req, res) => {
    try {
        // Query SQL para selecionar TODOS os usuários
        const sql = "SELECT * FROM Usuarios";

        const [rows] = await pool.query(sql);
        res.json(rows);

    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        res.status(500).json({ error: "Erro interno ao buscar usuários." });
    }
});

app.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, address } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
    }

    try {
        const sql = "UPDATE Usuarios SET name = ?, email = ?, address = ? WHERE id = ?";
        const values = [name, email, address, id];

        const [result] = await pool.query(sql, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        const updatedUser = { id: parseInt(id), name, email, address };
        res.status(200).json(updatedUser);

    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        res.status(500).json({ error: "Erro interno ao atualizar usuário." });
    }
});
-
app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const sql = "DELETE FROM Usuarios WHERE id = ?";
        const [result] = await pool.query(sql, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

       
        res.status(204).send(); 

    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        res.status(500).json({ error: "Erro interno ao deletar usuário." });
    }
});

const PORT = 3000;

async function startServer() {
    try {
        await pool.query("SELECT 1");
        console.log("Conexão com o banco de dados MySQL estabelecida.");
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Falha ao conectar com o banco de dados:", error);
        process.exit(1); // Encerra o processo com erro
    }
}
// Inicia o servidor
startServer();
