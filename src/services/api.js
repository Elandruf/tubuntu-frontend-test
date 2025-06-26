import axios from 'axios';
import React from 'react';



export async function fetchUsers() {
  const res = await fetch('https://dummyjson.com/users')
  if (!res.ok) throw new Error('Error al obtener usuarios');
  const data = await res.json();
  return data.users;
}
