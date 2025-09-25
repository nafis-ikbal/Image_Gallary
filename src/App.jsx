import './App.css'
import Header from './components/Header'
import SearchImgGallary from './components/SearchImgGallary'
import HomeImgGallary from './components/HomeImgGallary'
import { useState } from 'react'

function App() {
  const [resultsImages, setResultsImages] = useState([]);  //for imgs data
  const [searchValue, setSeachValue] = useState(""); //for input value

  return (
    <>
      <Header resultsObjs={setResultsImages} keywords={searchValue} setKeywords={setSeachValue}/>
      
      <div className="border-4 border-double rounded-2xl p-5 bg-white overflow-y-scroll h-[31rem] custom-scrollbar">
        {/* its show as home page */}
        {resultsImages.length === 0 && (
            <HomeImgGallary/>
        )}

        {/* its show when user search for images */}
        {resultsImages.length !== 0 && (
            <SearchImgGallary images={resultsImages} setImages={setResultsImages} srcValue={searchValue}/>
        )}
      </div>
    </>
  )
}

export default App
