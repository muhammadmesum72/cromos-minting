import React, { useState } from "react";
import { walletNfts } from "../Data/data";

const NftViewer = () => {
  const [selectedNft, setSelectedNft] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openZoomModal = (nft) => {
    setSelectedNft(nft);
    setIsPopupOpen(true);
  };
  const closeModal = () => {
    setIsPopupOpen(false)
  }
  return (
    <>
      {isPopupOpen ? (
        <div onClick={closeModal} className="fixed w-full h-screen bg-opacity-80 flex items-center justify-center bg-gray-700 top-1/2 left-1/2 right-auto bottom-auto -mr-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {/* <img src={selectedNft.nft} alt="" /> */}
          {/* <button  className="" onClick={() => closeModal()}>X</button> */}
          <div className="md:h-full p-9 ">
            <img src={selectedNft.nft} alt="" className="relative md:h-full rounded-xl shadow-xl" />

          </div>
        </div>
      ) : undefined}
      <div
        className={
          walletNfts.length > 18
            ? "flex items-center justify-center flex-col h-auto pt-32 pb-32"
            : "flex items-center justify-center flex-col h-screen pt-32 pb-32"
        }
      >
        <div>
          <h2 className="text-3xl font-bold text-center py-9 ">
            Your Monster NFTs
          </h2>
        </div>
        {/* Wallet Nfts */}
        <div className="h-full px-4 md:px-0 grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-6 items-center justify-center ">
          {walletNfts.length > 0 ? (
            walletNfts.map((wnft) => (
              <div key={wnft.id} className="relative">
                <div
                  onClick={() => openZoomModal(wnft)}
                  className="cursor-pointer"
                >
                  <img
                    src={wnft.nft}
                    alt="nft"
                    className="w-44 rounded-xl shadow-xl cursor-pointer"
                  />
                </div>
                <span className="absolute top-1 left-1 px-3 py-1 bg-slate-700 bg-opacity-70 rounded-xl">
                  #{wnft.id}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center h-screen text-2xl">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default NftViewer;
