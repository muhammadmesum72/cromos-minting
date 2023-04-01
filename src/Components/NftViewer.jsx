import React from 'react'

const NftViewer = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
        
        <div>
            <h2 className='text-3xl font-bold text-center py-5'>Your Monster NFTs </h2>

        </div>

        {/* Wallet Nfts */}
        <div>
            <div>wallet nft 1</div>
            <div>wallet nft 2</div>
            <div>wallet nft 3</div>
            <div>wallet nft 4</div>
            <div>wallet nft 5</div>
        </div>
    
    </div>
  )
}

export default NftViewer