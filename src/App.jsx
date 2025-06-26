import { useEffect, useState } from 'react';
import { fetchUsers } from './services/api';
import UserCard from './components/userCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(data => {
        console.log('fetchUsers()', data);
        setUsers(data);
      })
      .catch(console.error);
  }, []);


  console.log(users)
  if (!users.length) return <p>Cargando usuarios...</p>;

  console.log('Usuarios:', users);

  return (
    <>
      <Navbar />
       <></>
      <div
        className='app-container'
      >
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      
      <Footer />
    </>
  );
}

export default App;

