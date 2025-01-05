import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
// Q. Whats the point of redis? How to use it? Key-value pairs, difference between redis and mongodb