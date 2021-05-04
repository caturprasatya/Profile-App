import firebase from '../configs/fire'
const db = firebase.firestore();
const auth = firebase.auth();

export const setUserId = (payload) => ({
  type: 'user/id',
  payload
})

export const setLoading = (payload) => ({
  type: 'loading/setLoading',
  payload
})

export const setError = (payload) => ({
  type: 'error/setError',
  payload
})

export const userLogin =  (payload) => {
  const { email, password } = payload
  return async (dispatch) => {
    try {      
        dispatch(setLoading(true))
        const cred = await auth.signInWithEmailAndPassword(email, password)
        const userId = cred.user?.uid;

        dispatch(setUserId(userId))
    } catch (error) {
      dispatch(setError(error.message))
    }
    dispatch(setLoading(false))
  }
}
export const userRegister = (payload) => {
  const { email, password } = payload
  return async(dispatch) => {
    const cred = await auth.createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error.message)
      
    });
    
    if (cred) {
      const userId = cred.user?.uid;
      const userData = {
        email,
        password
    };
    dispatch(setUserId(userId))
    
    db.collection('profile')
      .doc(userId)
      .set(userData)
      .then(() => {
        console.log('User successfully added to the DB!');
      })
      .then(() => {
        console.log('User created!');
      })
      .catch(error => {
        dispatch(setError(error.message))
        console.log('Error adding user to the DB: ', error);
      });
      }
  }
}
