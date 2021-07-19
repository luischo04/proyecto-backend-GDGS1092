import pool from '../database/database'

class AuthDAO {

    public async getUser(usuario: string) {
        const result = await pool.then(async (connection) => {
            return await connection.query('SELECT * FROM usuario WHERE usuario = ?', [usuario]);
        });

        return result;
    }

}

export const dao = new AuthDAO();