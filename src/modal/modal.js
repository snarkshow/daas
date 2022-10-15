import React from "react";

const Modal = (props) => {
  return (
    <section className="modalBackground w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-70 absolute top-0 ">
      <div className="modalContainer w-full h-1/2 rounded border-8 border-blue-600 bg-white mx-5 flex  flex-col justify-between items-center ">
        <div className=" modalText mt-8 mx-3">
          <p className="text-sm">
            {" "}
            {props.data.title} <br />
            <br />
            {props.data.agreementPoint} <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            .
          </p>
        </div>
        <div className="buttonContainer w-full h-auto relative bottom-0 flex justify-center">
          <button
            className="uppercase bg-blue-600 text-white px-2 py-1 font-bold rounded mb-8"
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
