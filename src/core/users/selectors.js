export function getUsers(state) {
  return state.users;
}

export function getUserList(state) {
  return getUsers(state).list;
}

