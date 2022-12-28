import './App.css';
import './MovieRow.css';
import { Route } from "wouter";
import Footer from './footer';
import Header from './header';
import Login from './login';
import Preview from './preview';
import Signup from './signup';
import Add from './Add';
import Demo from './demo';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div className="App">
        <Header />
        <Login setToken={setToken} />
        <Footer />

      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Route path="/tick"><Demo /></Route>
      <Route path="/Admin/home"><Preview /></Route>
      <Route path="/Admin/signup"><Signup /></Route>
      <Route path="/Admin/Add"><Add /></Route>
      <Footer />
    </div>
  );
}

export default App;
