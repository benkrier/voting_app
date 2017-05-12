import React, { PropTypes } from 'react';

const IsRole = ({role, children}) => {
  if(Roles.userIsInRole(Meteor.userId(), 'admin')) {
    return children;
  }
  return null;
}

IsRole.propTypes = {
  role: PropTypes.string.isRequired,
  children: PropTypes.object,
}

export default IsRole;
