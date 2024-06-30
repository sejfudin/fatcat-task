import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserList } from '@homework-task/service/userListService';
import {User} from './User';
import { UserType } from '@interfaces/userInterfaces';

interface UserListProps {
    onBack: () => void;
}

export const UserList: React.FC<UserListProps> = ({ onBack }) => {
    const { data } = useQuery<UserType[]>({
        queryKey: ['users'],
        queryFn: getUserList,
    });
    return (
        <div className="w-8/12">
            <h1 className="text-3xl font-bold">Users list</h1>
            <button className="text-base text-primary pt-4" onClick={onBack}>
                Back
            </button>
            {data ? (
                data.map((user: UserType) => <User key={user.id} {...user} />)
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};