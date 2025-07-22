export async function loginUser(credentials) {
  const res = await fetch('http://localhost:8000/api/accounts/login/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });

  if (!res.ok) throw new Error('Login failed');
  return await res.json(); // { token, role }
}

export async function registerUser(data) {
  const res = await fetch('http://localhost:8000/api/accounts/register/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error('Register failed');
  return await res.json();
}
