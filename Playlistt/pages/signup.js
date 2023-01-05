import React, {useState} from "react";
// import {NavLink, useNavigate} from ""





export const Signup = () => {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("")

const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");

    }) 
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.errorMessage
        console.log(errorCode, errorMessage);
    })
  }
}

return (
    <main>
        <section>
            <div>
                <div>
                    <h1> Focus App</h1>
                    <form>
                    <div>
                        <label htmlFor="email-address">Email address</label>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
)