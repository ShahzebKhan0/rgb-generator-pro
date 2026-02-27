import { useState } from "react";

const App = () => {
  // 1️⃣ State to store the current background color
  // We start with a default color instead of undefined
  const [rgbColor, setRgbColor] = useState("rgb(0, 0, 0)");

  // 2️⃣ Function to generate a random RGB color
  const changeColor = () => {
    // RGB values range from 0 to 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Create a valid CSS rgb string and store it in state
    setRgbColor(`rgb(${r}, ${g}, ${b})`);
  };

  // 3️⃣ Function to copy the current color to clipboard
  const handleCopy = () => {
    // Safety check: only copy if color exists
    if (!rgbColor) return;

    navigator.clipboard.writeText(rgbColor);
    alert("Color copied to clipboard!");
  };

  return (
    // 4️⃣ Main container
    // Background color is controlled by React state
    <div
      className="relative h-screen w-full flex items-center justify-center flex-col gap-5 text-white transition-all"
      style={{ backgroundColor: rgbColor }}
    >
      {/* 🔹 Header */}
      <div className="absolute top-7 flex items-center gap-2 rounded-2xl bg-black py-3 px-6 font-bold text-xl">
        <h1>This project is owned by:</h1>
        <span className="animate-bounce">Shahzeb</span>
      </div>

      {/* 🔹 Button to generate a new color */}
      <button
        onClick={changeColor}
        className="bg-black text-white text-2xl py-2 px-6 rounded-xl border border-amber-500 cursor-pointer hover:scale-105 active:scale-95 transition-all"
      >
        Change Color
      </button>

      {/* 🔹 Button to copy RGB value */}
      <button
        onClick={handleCopy}
        className="bg-black py-2 px-5 rounded-2xl font-bold cursor-pointer hover:scale-105 active:scale-95 transition-all"
      >
        {rgbColor}
      </button>

      {/* 🔹 Helper text */}
      <p className="text-white opacity-60 select-none">
        Click the RGB value to copy it
      </p>
    </div>
  );
};

export default App;