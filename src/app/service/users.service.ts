import API from "../utility/axios";

export class UsersService {
    static login(data: any): Promise<any> {
        return API.post(`/user/login`, data);
    }

}
