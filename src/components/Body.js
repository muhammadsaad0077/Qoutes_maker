import React, { useEffect, useState } from 'react'
import QuoteCard from './QuoteCard'

const Body = () => {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0);
    const [bgColor, setBgColor] = useState('bg-blue-500');
    const [textColor, setTextColor] = useState('text-blue-500');

    const colors = ["bg-red-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-orange-500", "bg-amber-500", "bg-lime-500", "bg-sky-500", "bg-teal-500", "bg-cyan-500"];
  const textColors = ["text-red-500", "text-green-500", "text-yellow-500", "text-purple-500", "text-pink-500", "text-orange-500", "text-amber-500", "text-lime-500", "text-sky-500", "text-teal-500", "text-cyan-500"];
  
    const fetchData = async () => {
        const response = await fetch("https://api.quotable.io/quotes/random?limit=50");
      const jsonData = await response.json();
      const filteredData = jsonData.filter(quote => quote.content.length <= 45);
      setData([...data, ...filteredData]);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleNext = () => {

        let nextIndex = current + 1;

        if (nextIndex >= data.length) {
            fetchData();
            return;
          }

    setCurrent(nextIndex);
        // Change background color
        setBgColor(colors[current % colors.length]);
        // Change text color
        setTextColor(textColors[current % textColors.length]);
      };
  
  
    return (
      <div className={`w-screen h-screen transition-all duration-1000 ease-in-out ${bgColor} bg`}>
        <div className="text-blue-500 flex justify-center items-center">
          <QuoteCard key={data[current]?.id} data={data[current]} handleNext={handleNext} bgColor={bgColor} textColor={textColor} />
        </div>
      </div>
    );
  };
  
  export default Body;
