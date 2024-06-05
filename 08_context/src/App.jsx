import "./App.css";
import Login from "./Components/Login.jsx";
import Profile from "./Components/Profile.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";

function App() {
  return (
    <UserContextProvider>
      <div>App</div>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
