import {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch('http://localhost:8080/cors')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch(alert)
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="App">
      {users.length > 0 && users.map((user,i) => <p key={'user_'+i}> {user} </p>)}
    </div>
  );
}

export default App;
