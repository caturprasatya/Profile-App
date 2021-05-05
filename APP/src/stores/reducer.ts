const initialState = {
  userId: '3x8tJi6XgWfOLErPoXocXlQfg9X2',
  loading: false,
  error: null,
  user: {email: "test102@gmail.com",
    password: "asassasw"}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'user/id':
      return { ...state, userId: payload }
    case 'user/data':
      return { ...state, user: payload }
      case 'loading/setLoading':
      return { ...state, loading: payload }
    case 'error/setError':
      return { ...state, loading: payload }
      
    default:
      return state
  }
}
