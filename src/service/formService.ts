import { FormFields } from '@interfaces/formInterfaces';
import axiosInstance from '@homework-task/utils/axios';

export const postData = async (data: FormFields): Promise<FormFields> => {
    const response = await axiosInstance.post('/posts', data);
    return response.data;
};
