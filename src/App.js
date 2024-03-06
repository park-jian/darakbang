import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { AuthContextProvider } from './context/AuthContext';
import { NavermapsProvider } from 'react-naver-maps';

function App() {
  return <>
    {/* <AuthContextProvider> */}
    <NavermapsProvider ncpClientId={process.env.REACT_APP_NAVER_MAP_CLIENT_ID}>
      <Navbar />
      <Outlet />
    </NavermapsProvider>
    {/* </AuthContextProvider>   */}
  </>
}

export default App;
