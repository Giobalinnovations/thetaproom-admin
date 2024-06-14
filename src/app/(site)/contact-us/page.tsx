import Title from "@/components/title";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Mail, MapPinIcon, Phone } from "lucide-react";
import StaticForm from "./static-form";
// import Form from "./form";

export default function Page() {
  return (
    <>
      <div className="relative">
        <Image
          src="/images/Bed-Banner.webp"
          width={1900}
          height={500}
          alt="Banner Image"
        />
      </div>

      <div className="container  max-sm:flex-col pt-2 pb-4 flex gap-8 ">
        <div className=" sm:w-1/2 ">
          <Title title="CONTACT INFO" />
          <div className="flex flex-col gap-4 py-4 justify-center flex-wrap items-center">
            <Card className="sm:w-2/3 w-full flex flex-col justify-center ">
              <div className="flex gap-4 py-4 px-4">
                <Mail>coast2coast@bellnet.ca</Mail>
                <div className="">
                  <p className="font-bold">E - Mail</p>arya.saurabh95@gmail.com
                </div>
              </div>
            </Card>
            <Card className="sm:w-2/3 w-full flex flex-col justify-center ">
              <div className="flex gap-4 py-4 px-4">
                <Phone>coast2coast@bellnet.ca</Phone>
                <div className="">
                  <p className="font-bold">Phone</p>
                  <p>905-855-3449</p>
                  <p>905-822-9311</p>
                </div>
              </div>
            </Card>
            <Card className="sm:w-2/3 w-full flex flex-col justify-center ">
              <div className="flex gap-4 py-4 px-4">
                <MapPinIcon></MapPinIcon>
                <div className="">
                  <p className="font-bold">Address</p>
                  <p>
                    2222 South Sheridan Way, Unit 301 MississiAuGa, Ont. L5J 2M4
                  </p>
                </div>
              </div>
            </Card>
            <Card className="sm:w-2/3 w-full flex flex-col justify-center ">
              <div className="flex gap-4 py-4 px-4">
              <div className="">
                <div className="">
                  <p className="font-bold py-2 text-xl">Coast2Coast showroom policy:</p>
                  <ul className="list-decimal">
                    <li> We are a B2B company.</li>
                    <li>Our showroom is not open to the public.</li>
                    <li>
                     Guests have to be accompanied by Coast2Coast customers.
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="right text-center sm:w-1/2">
          <Title title="GET IN TOUCH" />
          <StaticForm/>

        </div>
      </div>

      {/* <div className="policy text-center py-8 container">
      <Card className="w-full flex flex-col gap-8 justify-center ">
              <div className="py-8">
                <div className="">
                  <p className="font-bold py-2 text-xl">Coast2Coast showroom policy:</p>
                  <ul>
                    <li>1. We are a B2B company.</li>
                    <li>2. Our showroom is not open to the public.</li>
                    <li>
                     3. Guests have to be accompanied by Coast2Coast customers.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
      </div> */}
    </>
  );
}
