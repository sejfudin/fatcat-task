import axios from 'axios';
import { FormFields } from '@interfaces/formInterfaces';
import { BASE_URL } from '@homework-task/components/utils/constants';

export const postData = async (data: FormFields): Promise<FormFields> => {
    const response = await axios.post(
        `${BASE_URL}/posts`,
        data
    );
    return response.data;
};