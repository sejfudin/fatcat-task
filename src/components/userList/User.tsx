import React from 'react';
import { UserType } from '@interfaces/userInterfaces';
export const User: React.FC<UserType> = ({
    id,
    name,
    username,
    email,
    phone,
}) => {
    return (
        <div className="py-4 ">
            <h4 className="text-sm">Id: {id}</h4>
            <h4 className="text-sm font-bold">Name: {name}</h4>
            <h4 className="text-sm">Username: {username}</h4>
            <h4 className="text-sm">Email: {email}</h4>
            <h4 className="text-sm">Phone: {phone}</h4>
        </div>
    );
};
