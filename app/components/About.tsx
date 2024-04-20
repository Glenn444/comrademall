import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="font-semibold text-2xl">Welcome to ComradeMall! </h1>
      <p>
        At ComradeMall, we believe in the power of camaraderie and creating a
        flourishing community where comrades can come together to sell, buy, and
        connect. We have built a dynamic online platform that serves as a
        one-stop destination for comrades looking to showcase and discover
        unique products, as well as provide convenient accommodations for
        parents and fellow comrades.{" "}
      </p>
      <h2 className="text-red-600 text-xl">Our Marketplace:</h2>
      ComradeMall is a vibrant marketplace that{" "}
      <span className="font-bold">
        empowers comrades to turn their passions into thriving businesses{" "}
      </span>
      . With our user-friendly interface, listing your products and managing
      your online store is a breeze. We provide the necessary tools and
      resources to support your business growth, ensuring a seamless selling
      experience.
      <h3 className="text-green-600 text-xl">ComradeBnB:</h3>
      <div>
        <p>
          In addition to our marketplace, we are proud to introduce ComradeBnB,{" "}
          <span className="font-bold">
            a unique accommodation service tailored specifically for comrades
            and their families.
          </span>
        </p>
        <p>
          We understand that important milestones such as admission and
          graduation can bring parents from far and wide to support their
          beloved comrades. With ComradeBnB, comrades have the option to list
          their rooms and earn money when booked by parents or returning
          graduants.
        </p>
      </div>
      <h3 className="text-green-600 text-xl">ComradeRentals: </h3>
      <div>
        We also offer ComradeRentals,{" "}
        <span className="font-bold">
          a convenient solution for parents or comrades seeking housing near the
          school for their students or themselves{" "}
        </span>
        . Finding suitable accommodations can be a challenge, especially during
        peak admission or graduation seasons. Our platform simplifies this
        process by connecting parents and comrades with available rental
        properties in close proximity to the school. Whether it&apos;s <span className="font-bold">a cozy
        apartment, a spacious house, or a shared living space </span>, ComradeRentals
        ensures a hassle-free booking experience, allowing parents and comrades
        to focus on what truly matters - supporting their students through
        admission.
      </div>
      <div>
        We are dedicated to providing a secure and trustworthy platform where
        comrades can connect, support each other&apos;s endeavors, and
        contribute to the growth of our shared community. <span className="font-bold">Whether you are looking to sell, buy, or
        find accommodations, we are here to serve you and facilitate your
        journey.</span> Together, let&apos;s build a thriving marketplace and welcoming
        community at ComradeMall.
      </div>
      <div className="py-6 flex justify-center">
      <Button className="w-1/2"><Link href="/">Home </Link></Button>
      </div>
    </div>
    

  );
}

export default About;
