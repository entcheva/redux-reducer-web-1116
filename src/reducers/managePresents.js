export function managePresents(state=[], action){

  switch (action.type) {
    case 'ADD':
      return {...state, presents: [...state.presents, action.payload]}
    default:
      return: state
  }

}
