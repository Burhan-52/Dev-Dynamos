import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Calendar from "./components/Calendar";
import Chat from "./components/Chat";
import Prephub from "./components/Prephub";
import AppBar from "./components/AppBar";
import ReactBigCalendar from "./components/ReactBigCalendar";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/calendar" element={<ReactBigCalendar />} />
          <Route path="/PrepHub" element={<Prephub />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
