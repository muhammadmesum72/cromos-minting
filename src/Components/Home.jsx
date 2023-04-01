import React, { useState } from "react";
import Nft from "../Data/Nft.jpg";

const homeText = `Once upon a time, in a land far away, lived a group of cartoony and
          freaky apes. One little ape, however, was different from the rest. He
          dreamed of becoming a Crazzzy Monster, inspired by his love for horror
          movies and books. And thus, the idea for the Crazzzy Monsterzzz
          collection was born! But this collection isn't just any ordinary art
          collection. It's a journey through nostalgia, with each monster family
          representing a different horror movie and all the equipment relative
          to that monster. With 20 monster families and more than 300 traits,
          there's a Crazzzy Monster for every fan out there. As a member of the
          Crazzzy Monsters community, you'll have access to exclusive events,
          promotions, and giveaways. You'll also have the opportunity to trade
          and sell your monsters, connect with other collectors and enthusiasts
          around the world, and build a truly unique collection of Crazzzy
          Monsters. The founders of Crazzzy Monsters aim to create an eco-system
          that prioritizes community, sharing benefits, and transparency. The
          collection is built on the Cronos Chain, ensuring secure and
          transparent transactions. Each Crazzzy Monster comes with unique
          utilities and royalty programs, giving you access to exclusive perks
          and rewards.`;

const Home = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText((prev) => !prev);
  };

  const textToShow = showFullText
    ? homeText
    : homeText.split(" ").slice(0, 100).join(" ") + "...";

  const buttonText = showFullText ? "Minimize" : "Read More";
  return (
    <div className="container mx-auto">
      <div className="h-screen flex items-center justify-center text-center ">
        <p className="hidden md:block text-lg md:text-lg w-2/3">{homeText}</p>
      </div>

      <div className="block md:hidden py-4 text-center w-full lg:w-2/3 mx-auto h-auto py-32 flex flex-col justify-center items-center">
        <p className="text-lg transition-all ease-in-out">{textToShow}</p>
        <div>
          <button
            className="bg-yellow-500 text-black px-4 py-2 rounded mt-4"
            onClick={toggleShowFullText}
          >
            {buttonText}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-12">
        {/* nft */}
        <div className="w-96 shadow-xl">
          <img src={Nft} alt="" className="w-full rounded-xl " />
        </div>
        {/* Details */}
        <div className="text-center pb-6 space-y-4">
          <div className="text-3xl">
            <span className="font-bold text-yellow-500">Total Supply: </span>
            <span>2221</span>
          </div>
          <div className="text-3xl">
            <span className="font-bold text-yellow-500">Current Price: </span>
            <span>0.1 SOL</span>
          </div>
          <div>
            <button className="px-12 py-3 bg-yellow-500 font-bold uppercase rounded-lg text-xl">
              Mint Monster
            </button>
          </div>
        </div>
      </div>

      {/* Minting Info */}
      <div className="flex flex-col items-center md:flex-row w-full gap-12 px-12 pb-24">
        {/* MINT INFO */}
        <div className="w-full md:w-1/2 bg-slate-300 bg-opacity-10 text-white rounded-xl p-6">
          <div className="">
            <h5 className="mb-4 text-2xl">
              {" "}
              <b>MINTING INFO:</b>
            </h5>
          </div>
          <div className="">
            <table className="w-full text-lg">
              <tr className="border-t border-opacity-50">
                <td className="py-3 pl-3">
                  <p className="font-semibold ">Mint Price</p>
                </td>
                <td>
                  <p className="font-semibold ">0.99 SOL</p>
                </td>
              </tr>
              <tr className="border-t border-opacity-50">
                <td className="py-3 pl-3">
                  <p className="font-semibold ">Sale Time</p>
                </td>
                <td>
                  <p className="font-semibold ">TBA</p>
                </td>
              </tr>
              <tr className="border-t border-opacity-50">
                <td className="py-3 pl-3">
                  <p className="font-semibold ">Whitelist</p>
                </td>
                <td>
                  <p className="font-semibold ">Gurranted</p>
                </td>
              </tr>
              <tr className="border-t border-opacity-50">
                <td className="py-3 pl-3">
                  <p className="font-semibold ">Public Sale</p>
                </td>
                <td>
                  <p className="font-semibold ">FCFS</p>
                </td>
              </tr>
              <tr className="border-t border-opacity-50">
                <td className="py-3 pl-3">
                  <p className="font-semibold ">Accepted Currency</p>
                </td>
                <td>
                  <p className="font-semibold ">SOLANA</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/* PROJECT iNFO */}
        <div className="w-full md:w-1/2 bg-slate-300 bg-opacity-10 text-white rounded-xl p-6">
          <div className="">
            <h5 className="text-2xl font-bold">PROJECT INFO:</h5>
            <br />
          </div>
          <div className="">
            <h3 className="text-2xl">About Cromos:</h3>
            <p className="mt-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              magni recusandae placeat, in fuga libero voluptate maiores tempora
              nobis hic asperiores quos ex sint ipsam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
