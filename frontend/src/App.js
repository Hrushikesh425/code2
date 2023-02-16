import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserFeedback from "./components/feedback";
import { Footer } from "./components/footer";
import { Route, Routes } from "react-router-dom";
import BannerCarousel from "./components/carousel";
import EventInfo from "./components/eventInfo";
import LoginPage from "./components/login";
import SignPage from "./components/signUp";
import Registration from "./components/registration";
import AdminHome from "./components/AdminHome";
import { StudProfile } from "./components/studentprofile";
import AdminEventInfo from "./components/AdminEventInfo";
import Deparment from "./components/Deparment";
import UserState from "./context/user/UserState";
import EventState from "./context/event/EventState";
import AddEvent from "./components/AddEvent";
import EventType from "./components/EventType";
import Search from "./components/search";
import AdminSignup from "./components/AdminSignup";
import AdminLogin from "./components/AdminLogin";
import Mode from "./components/Mode";
import ForgetPassword from "./components/ForgetPassword";
import Protected from "./components/Protected";
import ProtectedNormal from "./components/ProtectedNormal";
import Gallery from "./components/Gallery";

function ColorSchemesExample() {
  return (
    <div className="App">
      <UserState>
        <EventState>
          <Routes>
            <Route
              exact
              path="/home"
              element={<BannerCarousel></BannerCarousel>}
            ></Route>

            <Route path="/userfeedback" element={<UserFeedback />}></Route>

            <Route path="/event/:eid" element={<EventInfo />}></Route>


            <Route path="/" element={<LoginPage />}></Route>

            <Route path="/signup" element={<SignPage />}></Route>

            <Route path="/registration" element={<Registration />}></Route>

            <Route path="/forgetpassword" element={<ForgetPassword />}></Route>


            <Route path="/admin" element={
              <Protected isSignedIn={localStorage.getItem('token')} role={localStorage.getItem('role')} matchrole="admin">
                <AdminHome />
              </Protected>
            }></Route>

            <Route path="/adminevent/:eid" element={
              <Protected isSignedIn={localStorage.getItem('token')} role={localStorage.getItem('role')} matchrole="admin">
                <AdminEventInfo />
              </Protected>}></Route>

            <Route path="/profile" element={
              <ProtectedNormal isSignedIn={localStorage.getItem('token')} role={localStorage.getItem("role")} matchrole="user" >
                <StudProfile />
              </ProtectedNormal>
            } />

            <Route path="/department/:filter" element={
              <ProtectedNormal isSignedIn={localStorage.getItem('token')} >
                <Deparment />
              </ProtectedNormal>} />
            <Route path="/type/:filter" element={
              <ProtectedNormal isSignedIn={localStorage.getItem('token')} >
                <EventType />
              </ProtectedNormal>
            } />
            <Route path="/mode/:filter" element={
              <ProtectedNormal isSignedIn={localStorage.getItem('token')} >
                <Mode />
              </ProtectedNormal>}
            />

            <Route path="/addevent" element={<AddEvent />}></Route>
            <Route path="/search/:search" element={<Search />}></Route>

            <Route path="/admin-signup" element={<AdminSignup />}></Route>
            <Route path="/admin-login" element={<AdminLogin />}></Route>
            <Route path="/admin-home" element={<AdminHome />}></Route>
            <Route path="/eventgallery" element={<Gallery />} />


            {/* <Route path="/payment/:eid" element={<RazorpayPayment />}></Route> */}
          </Routes>

          <Footer />
        </EventState>
      </UserState>
    </div>
  );
}

export default ColorSchemesExample;
