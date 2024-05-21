type  TitleProps = {

    title : string;
};




export default function Title( {title,}: TitleProps) {
  return (
    <>
      <div className=" flex justify-center container bg-white py-16">
        <div className=" flex flex-col gap-3 text-center container">
          <h2 className="text-black font-bold text-2xl">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
}
