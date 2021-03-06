

const user = (state={}, action) => {
    switch(action.type) {
        case "LOGIN_SUCCESS":
            return action.user
        case "CREATE_USER_SUCCESS":
            return action.user
         case "FETCH_USER_SUCCESS":
             return [...action.user]
        case 'LOGOUT_SUCCESS':
            return {}
        default:
            return state
    }
} 

export default user