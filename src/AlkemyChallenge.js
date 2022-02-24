import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

// apikey = 99e23a28d32b4bc0bf4f1db6d7e5693a
// https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=99e23a28d32b4bc0bf4f1db6d7e5693a

const init = ()=>{
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
}


export const AlkemyChallenge = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if(!user) return;
    localStorage.setItem('user',JSON.stringify(user));
  }, [user])
  

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
