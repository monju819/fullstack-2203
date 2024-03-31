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
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
