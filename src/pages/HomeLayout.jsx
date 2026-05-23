import { Outlet, useNavigation} from "react-router-dom";
import { Header, Navbar, Loading } from "../components";
import Login from "./Login";
import Register from "./Register";

const HomeLayout = () => {
const navigate = useNavigation();
const isPageLoading = navigate.state === 'loading';

  return <>
      <Header />
    {/* <span className="text-4xl text-primary">AuthentixDesign</span> */}
    <Navbar />
    {isPageLoading ? (<Loading />)  
    : (
    <section className="align-element py-20">
     <Outlet />
  </section>
  )
  };
  </>
}
export default HomeLayout