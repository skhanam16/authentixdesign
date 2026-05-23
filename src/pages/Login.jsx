import { SubmitBtn,FormInput} from "../components";
 import { Form, Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";


export const action = (store) => async({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local', data);
    console.log(response);
   store.dispatch(loginUser(response.data))
      toast.success("you successfully logged in");
      return redirect('/');
      // return null;
    
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || "please check your credential";
    toast.error(errorMessage);
    return redirect('/login');
    
  }
// return null;
// console.log(store);
};

const Login = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const loginAsGuestUser = async() => {
  try {
const response =  await customFetch.post('/auth/local/', {
  identifier: 'test@test.com',
  password: 'secret'
});
dispatch(loginUser(response.data));
toast.success("Loggedin as a guest user");
navigate('/');
    
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message;
    toast.error(errorMessage);
  }

 }

  return <section className="h-screen grid place-items-center">
    <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
      <h4 className="text-center text-3xl font-bold">Login</h4>
       <FormInput   label="email" name="identifier" type="email" />
          <FormInput   label="password" name="password" type="password"  />
       <div className="mt-4">
            <SubmitBtn  text="login"/>
       </div>
        <button type="button" className="btn btn-secondary btn-block" onClick={loginAsGuestUser}>guest user</button>
        <p className="text-center">Not a member yet <Link to="/register" className="ml-2 link link-hover 
        link-primary capitalize">register</Link></p>
        
     
    </Form>
  </section>
}
export default Login