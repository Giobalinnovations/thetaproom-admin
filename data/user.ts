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
    const user = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admins/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }
    ).then(res => res.json());

    return user;
  } catch (error) {
    console.log(error);
    // console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
    // return null;
  }
}
