'use client';

export default function Hero() {
  return (
    <div className="relative border-8 border-double border-pink-500 p-8 blursed-container">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
      </div>

      <h1 className="text-8xl font-bold text-red-600 rotate-2 animate-pulse word-art">
        cottoncandy
      </h1>
      
      <p className="text-3xl text-purple-800 -rotate-2 mb-4 animate-blink">
      bestest ui
      </p>

      <div className="absolute top-5 right-5 -rotate-45 animate-bounce">
        <span className="inline-block bg-yellow-300 text-red-600 text-xl p-4 transform rotate-12">
        💗 npm i cottoncandy
        </span>
      </div>
      
    </div>
  );
}
