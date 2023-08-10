import { useState, useEffect } from 'react'
import QuotesComp from './QuotesComp'

function App() {
  return (
    <>
    <nav className="bg-teal-400 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="hover:text-sky-700 text-white text-xl font-bold">My Awesome Quotes</a>
            <ul className="flex space-x-4">
        <li className="navbar-item border-b-4 border-transparent hover:border-rose-500">
           <a href="https://faizan59.000webhostapp.com/" className="text-white">About The Creator</a>
        </li>
                
        <li className="navbar-item border-b-4 border-transparent hover:border-rose-500">
          <a href="https://github.com/Faizan090" className="text-white">github</a>
        </li>
        <li className="navbar-item border-b-4 border-transparent hover:border-rose-500">
          <a href="https://www.instagram.com/smohammedfaizan0/" className="text-white">Instagram</a>
        </li>
      </ul>
    </div>
    </nav>
   <QuotesComp/>
   <QuotesComp/>
   <footer class="bg-teal-400 p-4 border-t-4 border-sky-300">
    <div class="container mx-auto flex justify-center">
      <ul class="flex space-x-4">
        <li class="footer-item border-b-4 border-transparent hover:border-rose-500">
          <a href="#" class="text-white">Privacy Policy</a>
        </li>
        <li class="footer-item border-b-4 border-transparent hover:border-rose-500">
          <a href="#" class="text-white">Terms of Service</a>
        </li>
        <li class="footer-item border-b-4 border-transparent hover:border-rose-500">
          <a href="#" class="text-white">Copyright</a>
        </li>
      </ul>
    </div>
  </footer>
    </>
  )
}

export default App
