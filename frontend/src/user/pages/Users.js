import React from 'react';

import UserList from '../components/UsersList';

const Users = () => {
    const USERS = [{id:'u1', name: 'Max', iamge: '', places: 3 }];

    return <UserList items ={USERS}/>
};

export default Users;