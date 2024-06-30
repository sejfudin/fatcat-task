import axios from 'axios';
import { FormFields } from '@interfaces/formInterfaces';

export const postData = async (data: FormFields): Promise<FormFields> => {
    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        data
    );
    return response.data;
};