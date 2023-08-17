import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import PublicPages from "../PublicPages/PublicPages";
import ProtectedPages from "../ProtectedPages/ProtectedPages";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <>
        <PublicPages user={user} />
        <ProtectedPages user={user} />
      </>
    </main>
  );
}

export default App;
