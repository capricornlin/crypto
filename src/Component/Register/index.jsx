import { useState } from "react";
import Header from "../Header";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();
  const go = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    register(email, password)
      .then((res) => {
        toast.success("Register successfully");
        go("/");
        console.log(res);
      })
      .catch((error) => {
        console.log("error messages: ", error.message);
      })
      .finally(() => setIsSubmitting(false));
    console.log("email: ", email);
    console.log("password", password);
  };

  return (
    <>
      <Header />
      <div className="flex w-screen h-screen justify-center ">
        <div className="mt-[100px] w-1/2 lg:w-[500px]">
          <div className="text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Register
          </div>
          <form action="" method="POST" onSubmit={SubmitHandler}>
            <div>
              <label className="text-xl block   my-2 text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-lg w-full my-2"
                value={email}
                placeholder="Input your email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div>
              <label className="text-xl block  my-2 text-gray-300" htmlFor="password">
                Password
              </label>
              <input
                className="rounded-lg w-full my-2"
                placeholder="At Least 6 Digits"
                onChange={(e) => setPassword(e.target.value)}
                minLength="6"
                type="password"
                name="password"
                value={password}
                required
              />
            </div>

            <button className="my-5 active:ring-4 ring-cyan-500 ring-offset-2 duration-100 tracking-wide text-white p-2 hover:cursor-pointer rounded-lg w-full bg-gradient-to-r from-cyan-500 to-blue-500">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
