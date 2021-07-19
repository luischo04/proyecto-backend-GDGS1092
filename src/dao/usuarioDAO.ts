import pool from "../database/database";

class UsuarioDAO {
    public async lista() {
        const result  = await pool.then(async (connection) => {
            return await connection.query("SELECT cveUsuario, usuario, cveRol FROM usuario");
        });

        return result;
    }

    public async verificarUsuario(usuario: string) {
        const result = await pool.then(async (connection) => {
            return await connection.query('SELECT cveUsuario FROM usuario WHERE usuario = ?', [usuario]);
        });

        return result;
    }

    public async verificarRol(cveRol: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query('SELECT * FROM rol WHERE cveRol = ? AND activo = ?', [cveRol, true]);
        });

        return result;
    }

    public async insert(user: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query("INSERT INTO usuario SET ?", [user]);
        });

        return result;
    }
}

export const dao = new UsuarioDAO();