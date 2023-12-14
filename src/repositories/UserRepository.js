import { UserModel } from "../models/UserModel.js";

class UserRepository {
  async listUsers() {
    const users = await UserModel.find(
      {},
      {
        username: true,
        role: true,
      }
    );
    return users;
  }

  async createUser(userPayload) {
    return await UserModel.create(userPayload);
  }

  async updateUser(id,userPayload,rolee) {
    const newUser = await UserModel.findByIdAndUpdate(
        {
            _id: id,
            role: rolee
        },
        userPayload
    );
  }

  async deleteUser(id){
    await UserModel.deleteOne({_id: id});
  }
}

export default new UserRepository();