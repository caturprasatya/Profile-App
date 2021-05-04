const initialState = {
  userId: '',
  loading: false,
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'user/id':
      return { ...state, userId: payload }
    case 'loading/setLoading':
      return { ...state, loading: payload }
    case 'error/setError':
      return { ...state, loading: payload }
      
    default:
      return state
  }
}
