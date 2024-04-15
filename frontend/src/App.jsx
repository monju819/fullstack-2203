import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import OtpVerification from "./pages/OtpVerification";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import ChangePass from "./pages/ChangePass";
import Home from "./pages/Home";
import Category from "./pages/Category";

// react-router-dom
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registration />}></Route>
        <Route
          path="/otpvirification/:email/:otp"
          element={<OtpVerification />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
        <Route path="/changepass/:token" element={<ChangePass />}></Route>
        <Route path="/home" element={<Home />}>
          <Route path="createcat" element={<Category />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
