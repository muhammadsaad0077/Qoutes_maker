import React from 'react';

const QuoteCard = ({ data, handleNext, bgColor, textColor }) => {
  if(!data || Object.keys(data).length === 0) {
  return (
    <div className={`flex justify-center items-center mt-[25%] md:mt-[12%] md:w-[45%] md:h-[40vh] w-screen h-[50vh] rounded-lg shadow-lg bg-white transition-all duration-1000 ease-in-out`}>
      <h1 className={`relative left-16 bottom-6 text-2xl font-bold ${textColor} transition-all duration-1000 ease-in-out`}>"If you are expert of your proffesion then you are always in demand"</h1>
      <div className="flex justify-end mt-24 whitespace-nowrap">
        <p className={`relative left-20 md:left-12 ${textColor}`}>~Ahmad</p>
      </div>
      <div>
        <button onClick={handleNext} className={`whitespace-nowrap ${bgColor} text-white relative top-[95px] right-10 md:right-16 px-4 py-2 rounded-lg transition-all duration-1000 ease-in-out`}>New Quote</button>
      </div>
    </div>
  );
}

return(
  <div className={`flex justify-center items-center mt-[25%] md:mt-[12%] md:w-[45%] md:h-[40vh] w-screen h-[50vh] rounded-lg shadow-lg bg-white transition-all duration-1000 ease-in-out`}>
      <h1 className={`relative left-16 bottom-6 text-2xl font-bold ${textColor} transition-all duration-1000 ease-in-out`}>"{data?.content}"</h1>
      <div className="flex justify-end mt-24 whitespace-nowrap">
        <p className={`relative left-20 md:left-12 ${textColor}`}>~{data?.author}</p>
      </div>
      <div>
        <button onClick={handleNext} className={`whitespace-nowrap ${bgColor} text-white relative top-[95px] right-10 md:right-16 px-4 py-2 rounded-lg transition-all duration-1000 ease-in-out`}>New Quote</button>
      </div>
    </div>
)
}

export default QuoteCard;