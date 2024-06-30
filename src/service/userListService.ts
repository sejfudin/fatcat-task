import { UserType } from '@interfaces/userInterfaces';
import axiosInstance from '@homework-task/utils/axios';

export const getUserList = async (): Promise<UserType[]> => {
    try {
        const response = await axiosInstance.get<UserType[]>(`/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user list:', error);
        throw new Error(error instanceof Error ? error.message : 'Error fetching user list');
    }
};
