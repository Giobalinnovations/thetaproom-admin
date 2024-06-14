interface FormErrorProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-green-200 text-green-700 p-2 rounded-md flex gap-2 items-center">
      <p>{message}</p>
    </div>
  );
};
