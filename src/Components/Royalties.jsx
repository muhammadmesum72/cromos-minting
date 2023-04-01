import React from 'react'

const Royalties = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-6'>
        <div className='border border-2 border-gray-300 w-fit mx-auto'>
            <h2 className='text-3xl font-bold text-center py-5 px-9'>Royalities </h2>

        </div>
        <div className='text-2xl font-bold'>
            <h2>CroHogs</h2>
        </div>
        <div className='flex gap-6'>
            <div className='bg-yellow-500 px-6 py-2 rounded-lg bg-opacity-70 text-center'>
                <h3 className='font-bold'>Available to claim</h3>
                <h3>0.00 CRO</h3>
            </div>
            <div className='bg-yellow-500 px-6 py-2 rounded-lg bg-opacity-70 text-center'>
                <h3 className='font-bold'>Total Distributed</h3>
                <h3>5.84K CRO</h3>
            </div>
        </div>
        <div className='bg-gray-300 px-6 py-2 rounded-lg bg-opacity-20'>Claim 0.23 CRO</div>

        {/* Social Links */}
        <div className='inline-flex gap-12 mt-9'>
            <div>Twi</div>
            <div>Dis</div>
            <div>Web</div>

        </div>
    </div>
  )
}

export default Royalties