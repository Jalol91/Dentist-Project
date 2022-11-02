import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import AboutUs from "./container/AboutUs";
import Blogs from "./container/Blogs";
import Hero from "./container/Hero";
import OurTeam from "./container/OurTeam";
import Services from "./container/Services";
import Testimonials from "./container/Testimonials";
import WeBeliee from "./container/WeBelieve";
import WhoWeAre from "./container/WhoWeAre";
import WhyChoose from "./container/WhyChoose";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import EmployeesPage from "./pages/EmployeesPage";
import ErrorPage from "./pages/ErrorPage";
import ServicesPage from "./pages/ServicesPage";

import AppointmenPage from "./pages/AppointmentPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactsPage />} />
          <Route path='/doctors' element={<EmployeesPage />} />

          <Route path='/service' element={<ServicesPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/appointment' element={<AppointmenPage />} />
          <Route path="/" element={<HomePage />} />

          <Route path='*' element={<ErrorPage />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>




  );
}

export default App;
