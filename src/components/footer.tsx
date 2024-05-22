import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className=" mt-auto container bg-[#222222]">
        <div className="  justify-center pt-8 pb-12 grid text-white gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
          <div>
            <h1 className="text-2xl py-3">About Us</h1>
            <p className="text-base">
              Coast 2 Coast Furniture is your premier destination for exquisite
              furniture, offering one-of-a-kind designs in a variety of
              materials. With a commitment to quality craftsmanship and
              personalized service, we strive to enhance your living spaces with
              timeless elegance. Visit us today and discover the perfect pieces
              to elevate your home.
            </p>
          </div>
          <div>
            <p className="text-xl  py-3">Quick Links</p>
            <ul>
              <li>
                <Link href={"#"}>About</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
              <li>
                <Link href={"#"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"#"}>Terms & Conditions</Link>
              </li>
              <li>
                <Link href={"#"}>Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href={"#"}>Terms of Service</Link>
              </li>
              <li>
                <Link href={"#"}>Refund policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xl py-3">Social Media</p>
            <ul className="flex gap-4">
              <li>
                <Link href={"#"}>
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <Youtube />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <Linkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center py-8 text-white">
          Copyright © Coast2Coast Furniture. All right reserved |{" "}
          <Link className="underline" href={"#"}>
            Terms of Service
          </Link>
        </div>
      </footer>
    </>
  );
}
