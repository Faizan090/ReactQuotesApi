import { useState, useEffect } from 'react'
import './app.css'

function QuotesComp() {
  const [quote, setQuote] = useState("")
  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json()
    setQuote(data.content)

    
  }
  useEffect(() => {
    fetchQuote()    
}, [])
  

  return (
    <>
    <div className="hover:border-rose-500 border-4 border-sky-500 max-w-md w-full p-8 bg-white rounded-lg shadow-lg quote-card bg-[#2dd4bf] m-20">
      <h2 className='hover:text-[#f8fafc] text-transform: capitalize'>{quote}</h2>
      <br />
      <h5 id="quote">Click the button to get a quote!</h5>
      <button id="getQuote" className="mt-3 hover:border-rose-500 m-1 border-solid border-4 border-sky-500 bg-purple-500 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-purple-300" onClick={fetchQuote}>
      Get Quote
    </button>
  </div>
    </>
  )
}

export default QuotesComp
