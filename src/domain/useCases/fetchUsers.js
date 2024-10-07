import { fetchRandomUsers } from "../../data/api/randomUserApi";
import { User } from "../entities/User";

export const fetchUsers = async (count = 10) => {
  const rawUsers = await fetchRandomUsers(count);
  return rawUsers.map(
    (user) => new User(user.uid, user.first_name, user.last_name, user.avatar)
  );
};
