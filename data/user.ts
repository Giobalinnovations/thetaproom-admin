export type User = {
  email: string;
  password: string;
} | null;

export async function getUserByEmailAndPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User | undefined> {
  try {
    const user = await fetch('http://localhost:8090/api/v1/admins/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(res => res.json());
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    // console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
    // return null;
  }
}
