import React, { useState } from "react";
import Card from "./cardUI";
import "./card-style.css";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
const tabs = [
  { title: "Prizes", component: <Prizes /> },
  { title: "Sponsored Prizes", component: <SponsoredPrizes /> },
  { title: "Swags for all", component: <AllPrize /> },
];
function Prizes() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-[#1a1a1d] border-0 rounded-lg shadow-lg outline-none focus:outline-none text-white">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="mr-10 text-3xl font-semibold">Comming Soon</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none opacity-50 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-white bg-transparent outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    Comming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
      <div id="left-prize" className="flex flex-col w-full p-8 xl:w-2/5">
        <div className="flex flex-row items-center w-full my-4 text-white">
          <span className="flex items-center justify-center w-[5rem] h-[4rem] md:w-24 md:h-24 text-2xl font-semibold text-white bg-gradient-to-r from-[#f4941d] to-[#ffd200] rounded-full">
            1st
          </span>
          <div className="flex flex-col items-start ml-4 md:ml-16 text-center">
            <span className="text-3xl font-semibold ">Soon To Be Released</span>
            <span onClick={() => setShowModal(true)} className="cursor-pointer w-full">
              Click to know more
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center w-full my-4 text-white">
          <span className="flex items-center justify-center w-[5rem] h-[4rem] md:w-24 md:h-24 text-2xl font-semibold text-white bg-gradient-to-r from-[#757f9a] to-[#d7dde8] rounded-full">
            2nd
          </span>
          <div className="flex flex-col items-start ml-4 md:ml-16 text-center">
            <span className="text-3xl font-semibold ">Soon To Be Released</span>
            <span onClick={() => setShowModal(true)} className="cursor-pointer w-full">
              Click to know more
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center w-full my-4 text-white">
          <span className="flex items-center justify-center w-[5rem] h-[4rem] md:w-24 md:h-24 text-2xl font-semibold text-white bg-gradient-to-r from-[#232526] to-[#414344] rounded-full">
            3rd
          </span>
          <div className="flex flex-col items-start ml-4 md:ml-16 text-center">
            <span className="text-3xl font-semibold ">Soon To Be Released</span>
            <span onClick={() => setShowModal(true)} className="cursor-pointer w-full">
              Click to know more
            </span>
          </div>
        </div>
      </div>
      <div
        id="right-image"
        className="items-center justify-center hidden w-3/5 lg:flex"
      >
        <img src="prize.png" className="h-96" alt='prizes'/>
      </div>
    </>
  );
}

function SponsoredPrizes() {
  return (
    <>
      <div className="flex items-center justify-center w-full text-2xl text-white h-72">
        Coming Soon
      </div>
    </>
  );
}

function AllPrize() {
  return (
    <>
      <div className="flex items-center justify-center w-full text-2xl text-white h-72">
        Coming Soon
      </div>
    </>
  );
}
export default function Cards() {
  const [currentTab, setTabState] = useState(0);

  return (
    <div className="container mx-auto mb-16 text-center " id="prizes">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={
            <>
      
              <div className="text-4xl lg:text-7xl font-bold text-[#8471ae] my-4 tracking-wider  lg:my-6 font-[Oswald] mb-16">
                Prizes
              </div>
        
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
  
      <div className="bg-[#1a1a1d] rounded-xl  bg-opacity-50 py-10 mx-16 max-w-[1200px] md:mx-auto">
        <div
          id="tabs"
          className="flex justify-start w-full border-b-2 border-gray-200"
        >
          {tabs.map((tab, id) => {
            return (
              <span
                key={id}
                onClick={() => setTabState(id)}
                className={` mx-4 mb-2 text-xl cursor-pointer ${
                  currentTab == id
                    ? " text-white border-b-2 border-[#CEB7FF]"
                    : "text-gray-400"
                }`}
              >
                {tab.title}
              </span>
            );
          })}
        </div>
        <div className="flex w-full">{tabs[currentTab].component}</div>
      </div>
    </div>
  );
}
