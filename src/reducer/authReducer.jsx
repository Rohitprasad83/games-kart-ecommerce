function authReducer(state, action) {
  switch (action.type) {
    case 'FIRST_NAME':
      return { ...state, firstName: action.payload }
    case 'LAST_NAME':
      return { ...state, lastName: action.payload }
    case 'EMAIL':
      return { ...state, email: action.payload }
    case 'PASSWORD':
      return { ...state, password: action.payload }
    case 'CONFIRM_PASSWORD':
      return { ...state, confirmPassword: action.payload }
    case 'FILL_DUMMY_DETAILS':
      return {
        ...state,
        firstName: 'Rohit',
        lastName: 'Prasad',
        email: 'rohit.prasad@neog.com',
        password: 'rohit1234*',
        confirmPassword: 'rohit1234*',
      }
    default:
      return { ...state }
  }
}
export { authReducer }
