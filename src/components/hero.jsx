'use client';

export default function Hero() {
  return (
    <div className="relative border-8 border-dashed border-pink-500 p-8 bg-[#00FF00]">
      <h1 className="text-8xl font-bold text-red-600 rotate-3 animate-pulse">
        HORRİFİC DESİGNS
      </h1>
      
      <p className="text-3xl text-purple-800 -rotate-6 mt-4 animate-blink">
        Making the web worse, one component at a time!
      </p>

      <div className="absolute top-0 right-0 -rotate-45 animate-bounce">
        <span className="inline-block bg-yellow-300 text-red-600 text-xl p-4 m-2 transform rotate-12">
          🎈 sOON ON NPM STAY ON HOLD!
        </span>
      </div>
    </div>
  );
}
