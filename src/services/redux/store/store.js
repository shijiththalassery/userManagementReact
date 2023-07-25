import UserSignupReducer from "../reducer/userSignupReducer";
import UserLoginReducer from '../reducer/userLoginReducer'
import ApiUrlReducer from "../reducer/urlReducer";
import UserUpdateReducer from "../reducer/userUpdateReducer"

import { combineReducers, legacy_createStore as createStore } from 'redux'; 

const rootReducer = combineReducers({
  UserSignup: UserSignupReducer,
  UserLogin: UserLoginReducer,
  UserUpdate:UserUpdateReducer,
  APIURL: ApiUrlReducer,
});

const store = createStore(rootReducer);

export default store;