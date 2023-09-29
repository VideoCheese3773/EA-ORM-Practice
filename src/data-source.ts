import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entities/Task"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'ep-plain-forest-62609634.us-east-2.aws.neon.fl0.io', // Your host
    port: 5432, // Default PostgreSQL port
    username: 'fl0user', // Usuario || process.env.PORT
    password: 'XZHA3fiUk5jc', // Contraseña
    database: 'test-database', // Nombre
    synchronize: true, // Para Dev
    logging: true, // Para Dev
    entities: [Task, User],
    migrations: [],
    subscribers: [],
    ssl: { rejectUnauthorized: false }, // Ignora el error de certificado no confiable
    name: 'default', // Asegúrate de definir el nombre de la conexión
})
