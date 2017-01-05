import React from 'react';
import {Link} from 'react-router';

const AdminLink = () => {
  return (
    
      <Link to="/admin" activeClassName="active">Admin</Link>
  );
};

export default AdminLink;
