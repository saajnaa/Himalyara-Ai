import React from 'react'

function Chatsection({ inputValue, responseData, loading }) {

  console.log(loading)
  return (
    <>


      <div
        className="text-white  h-100 w-[97%] rounded-xl mt-5"
        style={{ maxHeight: '600px', overflowY: 'auto', padding: '1rem' }}
      >
        <p
          className='bottom-5 right-5  pl-9 pr-9 rounded-sm'
          style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
        >
          {loading ? "Typing..." : responseData}
        </p>
      </div>



    </>
  )
}

export default Chatsection