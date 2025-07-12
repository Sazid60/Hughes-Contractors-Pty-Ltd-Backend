import dotenv from "dotenv";
dotenv.config();

interface EnvConfig {
    NODE_ENV: "development" | "production";
    PORT: string;
    DB_URL: string;
    EMAIL_USER: string;
    EMAIL_PASS: string;
    BCRYPT_SALT_ROUND: string;
    JWT_ACCESS_SECRET: string;
    JWT_ACCESS_EXPIRES: string;
    ADMIN_EMAIL: string;
    ADMIN_PASSWORD: string;
}

const loadEnvVariables = (): EnvConfig => {
    const requiredEnvVariables: (keyof EnvConfig)[] = [
        "NODE_ENV",
        "PORT",
        "DB_URL",
        "EMAIL_USER",
        "EMAIL_PASS",
        "BCRYPT_SALT_ROUND",
        "JWT_ACCESS_SECRET",
        "JWT_ACCESS_EXPIRES",
        "ADMIN_EMAIL",
        "ADMIN_PASSWORD",
    ];

    requiredEnvVariables.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable: ${key}`);
        }
    });

    return {
        NODE_ENV: process.env.NODE_ENV as "development" | "production",
        PORT: process.env.PORT as string,
        DB_URL: process.env.DB_URL as string,
        EMAIL_USER: process.env.EMAIL_USER as string,
        EMAIL_PASS: process.env.EMAIL_PASS as string,
        BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
        JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
        JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES as string,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL as string,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD as string,
    };
};

export const envVars = loadEnvVariables();
