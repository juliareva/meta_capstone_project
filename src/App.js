import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Reservation from "./components/Reservation";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/booking" element={<Reservation />}></Route>
          <Route
            path="/booking_confirmed"
            element={<ConfirmedBooking />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
