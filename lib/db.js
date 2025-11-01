import mongoose from 'mongoose';

const MONGODB_URI = process.env.DB_URL;

if (!MONGODB_URI) {
  throw new Error('Missing DB_URL in environment');
}

let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
