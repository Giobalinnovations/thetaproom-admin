interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-red-200 text-red-700 p-2 rounded-md flex gap-2 items-center">
      <p>{message}</p>
    </div>
  );
};
