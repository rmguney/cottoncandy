'use client';

import { useState } from 'react';
import TextArea from '../TextArea/TextArea';

export default function TextAreaShowcase() {
  const [value, setValue] = useState('');

  return (
    <section id="textarea" className="border-4 border-double border-[#FF00FF] p-4 sm:p-8 bg-[#000000] text-[#00FF00]">
      <h2 className="text-2xl sm:text-4xl mb-4 font-bold rainbow-text">✨ big box ✨</h2>
      
      <div className="bg-[#0000FF] p-2 sm:p-4 mb-4 font-[Comic Sans MS] overflow-x-auto">
        <code className="text-[#FFFF00] text-sm sm:text-base whitespace-nowrap">npm install @cottoncandy/TextArea</code>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8 w-full">
        <TextArea 
          placeholder="type here ok"
          className="w-full min-h-[100px] border-4 border-[#ff00ff] bg-black text-[#00ff00]"
          wrapperClassName="relative w-full"
        />
        
        <TextArea 
          placeholder="oopsie"
          aria-invalid="true"
          className="
            w-full min-h-[100px] 
            border-4 border-red-500 bg-black text-[#00ff00]
            animate-[shake_0.2s_ease-in-out_infinite]
          "
        />
        
        <TextArea 
          placeholder="cant type sry"
          disabled
          className="
            w-full min-h-[100px] 
            border-4 border-gray-500 bg-gray-800 text-gray-500
            cursor-not-allowed opacity-50
          "
        />
      </div>

      <div className="bg-[#330033] p-2 sm:p-4 text-[#00FF00] font-mono overflow-x-auto">
        <pre className="text-sm sm:text-base whitespace-pre">{`import { TextArea } from '@cottoncandy/TextArea'

<TextArea
  placeholder="many text go here"
  error="bad thing happen"
/>`}</pre>
      </div>
    </section>
  );
}
