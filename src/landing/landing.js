import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import Products from "./products";
import Modal from "../modal/modal";
import { modalData } from "../modalData/modalData";

const Landing = () => {
  const [showModal, setModal] = useState(false);
  const [modalCounter, setModalCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModal(true);
    }, 800);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (showModal === false) {
      setModalCounter(modalCounter + 1);
    }
  }, [showModal]);

  return (
    <section
      className={`w-full h-screen relative ${
        showModal ? `overflow-hidden` : `overflow-scroll`
      } `}
    >
      <NavBar />
      <section className="heroImage w-full h-auto border bg-green-300 relative after:">
        <img
          src="https://i.dailymail.co.uk/1s/2019/04/10/12/12093654-6906845-image-a-13_1554894190186.jpg"
          className="w-full"
          alt=""
        />

        <div className="websiteTitle absolute top-0 left-0 w-1/2 h-full bg-white bg-opacity-80 my-auto flex flex-col justify-center pl-3 md:pl-28">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900  to-gray-300 font-bold">
            <span className="text-5xl md:text-9xl">D</span>
            <span className="text-2xl md:text-4xl"> istributed</span>
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900  to-gray-300 font-bold">
            <span className="text-5xl md:text-9xl">P</span>

            <span className="text-2xl md:text-4xl"> roductivity &</span>
          </p>

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900  to-gray-300 font-bold">
            <span className="text-5xl md:text-9xl">M</span>

            <span className="text-2xl md:text-4xl"> orale</span>
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900  to-gray-300 font-bold">
            <span className="text-5xl md:text-9xl">E</span>

            <span className="text-2xl md:text-4xl"> nhancement</span>
          </p>
        </div>
      </section>
      <Products />
      <section></section>

      {showModal && modalCounter < modalData.length && (
        <Modal onClick={() => setModal(false)} data={modalData[modalCounter]} />
      )}
      {modalCounter === modalData.length && (
        <section className="modalBackground  flex items-center justify-center bg-gray-500 bg-opacity-70 fixed top-0 bottom-0 right-0 left-0">
          <div className="modalContainer w-full h-5/6 rounded border-8 border-blue-600 bg-white mx-5 flex  flex-col justify-between items-center ">
            <div className=" modalText mt-8 mx-3">
              <p className="text-xl">
                text here etc etc
                <br />
                <br />
                Our version of you will soon be able to experience this website,
                along with all associated features and benefits.
              </p>
              <br />
              <p className="text-4xl">
                Get ready to join the office of tomorrow,
                <br />{" "}
                <span className="text-red-600 font-bold text-5xl"> today</span>
              </p>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default Landing;
