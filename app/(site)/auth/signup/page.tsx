import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio - Alan Barbosa",
  description: "Portfólio de Alan Barbosa - QA engineer",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
