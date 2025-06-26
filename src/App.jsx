import { useEffect, useState } from 'react';
import { fetchUsers } from './services/api';
import UserCard from './components/userCard';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(data => {
        console.log("Datos recibidos:", data);
        setUsers(data);
      })
      .catch(error => {
        console.error("Error al cargar usuarios:", error);
      });
  }, []);

  console.log(users)
  if (!users.length) return <p>Cargando usuarios...</p>;

  console.log('Usuarios:', users);

  return (
    <div
      style={{
        maxWidth: 960,
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        padding: 20,
      }}
    >
      {users.map(user => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
}

export default App;

