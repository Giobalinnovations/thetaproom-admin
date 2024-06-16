const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchApi = async <T>(endpoint: string): Promise<T> => {
  const url = `${baseUrl}/${endpoint}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return response.json();
};
