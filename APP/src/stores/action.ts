import firebase from '../configs/fire'
const db = firebase.firestore();
const auth = firebase.auth();
const database = db.collection('profile')

export const setUserId = (payload) => ({
  type: 'user/id',
  payload
})

export const setDataUser = (payload) => ({
  type: 'user/data',
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

export const getDataUser =  (payload) => {
  const { userId } = payload
  return async (dispatch) => {
    try {      
        dispatch(setLoading(true))
        const data = database.doc(userId).get()

        dispatch(setDataUser(data))
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

export const updateData = (payload) => {
  return async(dispatch) => {
    const { userId, user } = payload.data
    const { name, birthdate, data } = payload
    console.log('gaess');
    
    try {
      await database.doc(userId).set({...user, 
        name,
        birthdate })

      dispatch(getDataUser({ data: userId }))
    } catch (error) {
      console.log(error);
    }
  }
}

export const updateProfile = (payload) => {
  return async(dispatch) => {
    const { userId, user } = payload.data
    const { base64 } = payload
    
    try {
      await database.doc(userId).set({ ...user, avatar: base64 })
      console.log('boom');
      
      dispatch(getDataUser({ data: userId }))
    } catch (error) {
      console.log(error)
    }
  }
}
