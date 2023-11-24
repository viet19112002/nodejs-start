import { AppDataSource } from "../data-source";
import { User } from "../entity/User.entity";

const userRepository = AppDataSource.getRepository(User);

async function getAllUser() {
    return await userRepository.find();
}

module.exports = {
    getAllUser: getAllUser
}
