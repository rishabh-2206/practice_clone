import React from "react";


const About = () => {
  return (
    //Header
    <>
      <div className="bg-[rgba(112,0,206,1)] flex justify-between h-24 items-center pl-6 pr-6">
        <div>
          <img
            src="https://static.tildacdn.com/tild6432-6265-4334-a534-613036646433/logofullneurodactyl_.png"
            style={{ width: "300px" }}
          />
        </div>
        <div className="flex text-[#fff] gap-5">
          <h2 className="text-2xl font-normal">Products</h2>
          <h2 className="text-2xl font-normal">Solutions</h2>
          <h2 className="text-2xl font-normal">Advantages</h2>
          <h2 className="text-2xl font-normal">Markets</h2>
          <h2 className="text-2xl font-normal">News</h2>
          <h2 className="text-2xl font-normal">About Us</h2>
          <h2 className="text-2xl font-normal">Contacts</h2>
        </div>
      </div>
      <div
  className={`-webkit-font-smoothing-antialiased
    text-center
    box-border
    m-0
    p-0
    border-0
    w-full
    bg-[url(https://img.freepik.com/free-vector/technology-digital-data-mesh-network-background_1017-19691.jpg?w=2000)]
    bg-fixed
    py-12
    overflow-y-auto
  `}
>
  <div className="w-[60%] mx-auto bg-white px-10 py-6">
    <h2 className="font-bold text-4xl text-blue-500 text-center mb-10">About us</h2>
    <p className="text-left text-black leading-[1.75] text-lg text-[#787777] font-light">
      Neurodactyl is a technology start-up founded in 2023 by specialists in machine vision and deep
      learning technologies. We have vast experience on biometric markets and have been working with
      different biometric technologies starting from 2014, when neural network based facial recognition
      technologies have completely changed the market. Today we are focused on creating cutting edge
      algorithms in fingerprint recognition, striving to bring a new life and power of new mobile
      technologies to the market of old-school biometrics.
      <br />
      <br />
      We aim to make identification powered by biometrics convenient, easy and reliable and help to
      protect personal and financial data in new digital reality.
      <br />
      <br />
      Besides fingerprint recognition our R&D team also doing research in other biometrics like face,
      voice and iris.
    </p>
  </div>
</div>

      {/* //Footer */}
      <div className="bg-[#7000ce] flex justify-between items-center p-6">
        <img src="https://thumb.tildacdn.com/tild3764-6233-4865-b137-303837303962/-/resize/180x/-/format/webp/logofullneurodactyl_.png" />
        <div className="text-[#fff] text-[14px] text-center">
          <h2 className="text-[#fff]">
            All Right Reserved, 2023. Neurodactyl, LLC. <br />
            Address: Georgia, Tbilisi, Nadzaladevi District,
            <br /> Kursebi Street, N15. Identification Number:
            <br />
            400354488
            <br />
            E-mail us: info@neurodactyl.com
          </h2>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default About;
