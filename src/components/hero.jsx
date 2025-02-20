'use client';

export default function Hero() {
  return (
    <div className="relative border-8 border-double border-pink-500 p-8 blursed-container overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
      </div>

      <h1 className="text-8xl font-bold text-red-600 rotate-3 animate-pulse word-art">
        blursed
      </h1>
      
      <p className="text-3xl text-purple-800 -rotate-6 mt-4 animate-blink">
      💗 gud desings 💗
      </p>

      <div className="absolute top-5 right-5 -rotate-45 animate-bounce">
        <span className="inline-block bg-yellow-300 text-red-600 text-xl p-4 transform rotate-12">
        💗 npm i cursed-ui
        </span>
      </div>
      
      <div className="absolute bottom-[-20px] right-0 under-construction w-full h-4" />
    </div>
  );
}
