import axios from 'axios';
import { UserType } from '@interfaces/userInterfaces';
import { BASE_URL } from '@homework-task/components/utils/constants';

export const getUserList = async (): Promise<UserType[]> => {
    const response = await axios.get<UserType[]>(
        `${BASE_URL}/users`
    );
    return response.data;
};