import axios from 'axios';
import { UserType } from '@interfaces/userInterfaces';

export const getUserList = async (): Promise<UserType[]> => {
    const response = await axios.get<UserType[]>(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
};