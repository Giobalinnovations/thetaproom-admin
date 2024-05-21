import { Button } from "./ui/button";

export default function Map() {
  return (
    <>
      <div className=" container py-8 flex flex-col sm:flex-row gap-12 w-full">
        <div className="map  w-full sm:w-3/4">
          <iframe
            className="w-full h-full"
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ height: 400 }}
          ></iframe>
        </div>
        <div className=" w-full sm:w-1/4 flex text-left flex-col gap-4">
          <h2 className="text-[#000] font-medium text-xl">PICK UP LOCATION</h2>
          <p className="Uppercase">
            2222 South Sheridan Way, Unit 301 MississiAuGa, Ont. L5J 2M4
          </p>
          <div className="font-bold flex flex-col gap-4">
            <p>Call: 905-855-3449</p>
            <p>Toll Free: 905 - 822 - 9311</p>
            <p>E-mail: arya.saurabh95@gmail.com</p>
          </div>
          <p>
            Our showroom is not open to the public. Guests have to be accompanied
            by CoastToCoast dealers.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
}
