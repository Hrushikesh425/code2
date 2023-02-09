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


            <Route path="/admin" element={<AdminHome />}></Route>

            <Route path="/adminevent/:eid" element={<AdminEventInfo />}></Route>

            <Route path="/profile" element={<StudProfile />} />

            <Route path="/department/:filter" element={<Deparment />} />
            <Route path="/type/:filter" element={<EventType />} />
            <Route path="/mode/:filter" element={<Mode />} />

            <Route path="/addevent" element={<AddEvent />}></Route>
            <Route path="/search/:search" element={<Search />}></Route>

            <Route path="/admin-signup" element={<AdminSignup />}></Route>
            <Route path="/admin-login" element={<AdminLogin />}></Route>

            {/* <Route path="/payment/:eid" element={<RazorpayPayment />}></Route> */}
          </Routes>

          <Footer />
        </EventState>
      </UserState>
    </div>
  );
}

export default ColorSchemesExample;
