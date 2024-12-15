import mongoose, { Schema, Document } from "mongoose";

export interface IUserCrypto extends Document {
  userId: string; 
  username: string;
  favoriteCrypto: string;
}

const UserCryptoSchema: Schema = new Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  favoriteCrypto: { type: String, required: true },
});

const UserCrypto =
  mongoose.models.UserCrypto ||
  mongoose.model<IUserCrypto>("UserCrypto", UserCryptoSchema);

export default UserCrypto;
