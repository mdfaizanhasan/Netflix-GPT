import { useRef, useState } from "react"
import Header from "../components/Header"
import { checkValidData } from "../utils/Validate";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState();
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // validate the form data

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        // if (message) return

    };
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (

        <div className="">
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="Background image"
                />
            </div>
            {/* Forms */}
            <form action=""
                onSubmit={handleSubmit}
                className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-90 rounded-xl"
            >
                <h1
                    className="font-bold text-3xl py-4 -mt-10"
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && (
                    <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="p-4 my-2 w-full bg-gray-800 rounded-lg"
                    />
                )}

                <input
                    ref={email}
                    type="text"
                    placeholder="Enter Email Address"
                    className="p-4 my-2 w-full bg-gray-800 rounded-lg"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Enter Password"
                    className="p-4 my-2 w-full bg-gray-800 rounded-lg"
                />
                <p className="text-red-700 font-bold py-2 text-lg">{errorMessage}</p>
                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-xl"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p
                    onClick={toggleSignInForm} className="py-4 cursor-pointer text-slate-400"
                >
                    {isSignInForm ? "New to Netflix? Sign up Now." : "Already registered? Sign in Now"}
                </p>
            </form>
        </div>
    )
}

export default Login