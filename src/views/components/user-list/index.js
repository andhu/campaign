import { List } from 'immutable';
import React, { PropTypes } from 'react';

import UserItem from './user-item';
import { Card } from 'semantic-ui-react';

const UserList = ({users, removeUser, updateUser}) => {
  let userItems = users.map((user, index) => {
    return (
      <UserItem
        key={index}
        user={user}
        removeUser={removeUser}
        updateUser={updateUser}
      />
    );
  });

  return (
    <Card.Group>
      {userItems}
    </Card.Group>
  );
};

UserList.propTypes = {
  removeUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default UserList;
