import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import FAQ from "./pages/faq";

/* INDIVIDUAL SERVICE PAGES */
import DeepCleaning from "./pages/services/DeepCleaning";
import RecurringCleaning from "./pages/services/RecurringCleaning";
import MoveInMoveOut from "./pages/services/MoveInMoveOut";
import Housekeeping from "./pages/services/Housekeeping";
import PostConstruction from "./pages/services/PostConstruction";
import EventCleaning from "./pages/services/EventCleaning";
import ExtraInsideServices from "./pages/services/ExtraInsideServices";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/faq" element={<FAQ />} />



        {/* SERVICE PAGES */}
        <Route
          path="/services/deep-cleaning"
          element={<DeepCleaning />}
        />

        <Route
          path="/services/recurring-cleaning"
          element={<RecurringCleaning />}
        />

        <Route
          path="/services/move-in-move-out"
          element={<MoveInMoveOut />}
        />

        <Route
          path="/services/housekeeping"
          element={<Housekeeping />}
        />

        <Route
          path="/services/post-construction"
          element={<PostConstruction />}
        />

        <Route
          path="/services/event-cleaning"
          element={<EventCleaning />}
        />

        <Route
  path="/services/extra-inside-services"
  element={<ExtraInsideServices />}
/>

      </Routes>

      <FloatingWhatsApp />

    </BrowserRouter>

  );
}

export default App;