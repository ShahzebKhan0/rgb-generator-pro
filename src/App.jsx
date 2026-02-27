import { useState } from 'react';

const App = () => {

    const [rgbColor, setRgbColor] = useState()

    
    const changeColor = () => {
      const r = Math.floor(Math.random() * 256 / 5);
      const g = Math.floor(Math.random() * 256 / 5);
      const b = Math.floor(Math.random() * 256 / 5);
      setRgbColor(`rgb(${r}, ${g}, ${b})`)
    }
    
    function copy() {
      navigator.clipboard.writeText(rgbColor)
    }
    



  return (
    <div className='relative h-screen w-full flex items-center justify-center text-white flex-col gap-5' style={{ backgroundColor: rgbColor }}>
     <div className='absolute  top-7 w-auto flex items-center justify-between rounded-2xl bg-black py-3 px-6'>
       <h1 className='font-bold text-xl'>This project is own by :</h1>
       <span className='ml-1.5 animate-bounce right-6 font-bold text-xl'>Shahzeb</span>
     </div>

      <button
        onClick={changeColor}
        className="bg-black text-white text-2xl py-2 px-6 rounded-xl border border-amber-500 cursor-pointer hover:scale-99 active:scale-104 transition-all">
        Change
      </button>
      <button
      onClick={copy}
      className='bg-black py-2 px-5 rounded-2xl font-bold cursor-pointer hover:scale-99 active:scale-104 transition-all'>{!rgbColor ? 'generate color' : rgbColor}</button>
      <h1 className='text-white opacity-50 cursor-not-allowed select-none'>Click the rgb value to copy that</h1>
    </div>
  )
}

export default App