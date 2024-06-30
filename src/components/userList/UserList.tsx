import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserList } from '@homework-task/service/userListService';
import { User } from './User';
import { UserType } from '@interfaces/userInterfaces';

interface UserListProps {
    onBack: () => void;
}

export const UserList: React.FC<UserListProps> = ({ onBack }) => {
    const { data, error, isLoading } = useQuery<UserType[]>({
        queryKey: ['users'],
        queryFn: getUserList,
    });
    return (
        <div className="w-8/12">
            <h1 className="text-3xl font-bold">Users list</h1>
            <button
                className="text-base text-primary pt-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={onBack}
                aria-label="Go back"
            >
                Back
            </button>
            {isLoading ? (
                <p className="mt-4">Loading...</p>
            ) : error ? (
                <p className="mt-4 text-red">Error loading users: {error instanceof Error ? error.message : 'Unknown error'}</p>
            ) : (
                data?.map((user: UserType) => <User key={user.id} {...user} />)
            )}
        </div>
    );
};
