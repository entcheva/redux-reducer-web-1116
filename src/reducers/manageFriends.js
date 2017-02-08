export function manageFriends(state=[], action){

  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.payload]}
    case 'REMOVE_FRIEND':
      return {...state, friends: state.friends.filter((friend) => friend.id !== action.payload)}
    default:
      return state
  }

}
