import { createContext, useState } from "react";
import AuthService from "../service/AuthService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

    const service = new AuthService();
	const navigateTo = useNavigate();


	// const [message, setMessage] = useState({message: '', type: 'error'})

	
	const signUpUser = async (data) => {
		// console.log({data: data});
		const userResp = await service.signUp(data);
        // console.log({respUser: userResp});
		setUser(userResp);

		navigateTo("/log-in");
	};

	const logInUser = async (data) => {
		// console.log({data: data});
		const userResp = await service.logIn(data);

		if(userResp.authToken){
			const decryptedCred = await service.verify(userResp.authToken);
			// setUser(decryptedCred);
			setErrorMessage(null);
			navigateTo("/user-profile");
		} else{
			setErrorMessage(userResp.message);
		}
	};

	const getCurrentUser = async () => {
		const currentUser = await service.getCurrentUser();
		// console.log({userLoggedIn: currentUser});
		setUser(currentUser);
	}

	const logOutUser = async () =>{
		await service.logOut();
		navigateTo("/");
	}


	return (
		<AuthContext.Provider value={{ user, setUser, signUpUser, logInUser, logOutUser, getCurrentUser, errorMessage}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
 
