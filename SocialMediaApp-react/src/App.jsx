import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import  SocialApp from "./components/SocialApp"
import CustonRoutes from "./routes/CustomRoutes";
function App() {
  return (
    <>
     {/* <SocialApp /> */}
     <Navbar/>
     <CustonRoutes />
    </>
  );
}

export default App;
