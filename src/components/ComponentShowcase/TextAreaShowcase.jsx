'use client';

import { useState } from 'react';
import TextArea from '../TextArea/TextArea';

export default function TextAreaShowcase() {
  const [value, setValue] = useState('');

  return (
    <section id="textarea" className="border-4 border-double border-[#FF00FF] p-8 bg-[#000000] text-[#00FF00]">
      <h2 className="text-4xl mb-4 font-bold rainbow-text">✨ big box ✨</h2>
      
      <div className="bg-[#0000FF] p-4 mb-4 font-[Comic Sans MS]">
        <code className="text-[#FFFF00]">npm install @blursed/textarea</code>
      </div>

      <div className="grid gap-8 mb-8">
        <TextArea 
          label="put stuf"
          placeholder="many text go here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        
        <TextArea 
          label="bad thing happen"
          placeholder="oopsie"
          error="NO WERK :("
          defaultValue="code bad"
        />
        
        <TextArea 
          label="ded"
          placeholder="not alowed sry"
          disabled
          defaultValue="brain.exe stop"
        />
      </div>

      <div className="bg-[#330033] p-4 text-[#00FF00] font-mono">
        <pre>{`import { TextArea } from '@blursed'

<BigBox
  label="many text"
  placeholder="write lot here"
/>`}</pre>
      </div>
    </section>
  );
}
