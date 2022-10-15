import React from "react";

const Modal = (props) => {
  return (
    <section className="modalBackground  flex items-center justify-center bg-gray-500 bg-opacity-70 fixed top-0 bottom-0 right-0 left-0">
      <div className="modalContainer w-full h-3/4 rounded border-8 border-blue-600 bg-white mx-5 flex  flex-col justify-between items-center ">
        <div className=" modalText mt-3 mx-3">
          <p className="text-l font-semibold">{props.data.title}</p>
          <br />

          <p className="text-sm">
            Our Distributed Productivity & Motivational Technology ("DPME")
            suite operates on a privacy-first framework: <br />
            <br />
            {props.data.agreementPoint} <br />
            <br />
            By clicking "I agree", you grant Distributed Productivity &
            Motivational Technology ("DPME") full access to this information.
          </p>
        </div>
        <div className="buttonContainer w-full h-auto relative bottom-0 flex justify-center">
          <button
            className=" uppercase bg-blue-600 text-white px-2 py-1 font-bold rounded mb-8"
            onClick={() => props.onClick()}
          >
            I agree
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
