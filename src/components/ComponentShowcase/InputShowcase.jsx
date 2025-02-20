'use client';

import { useState } from 'react';
import Input from '../Input/Input';

export default function InputShowcase() {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);

  return (
    <section id="inputs" className="border-4 border-double border-[#FF00FF] p-8 bg-[#000000] text-[#00FF00]">
      <h2 className="text-4xl mb-4 font-bold rainbow-text">✨ inpot ✨</h2>
      
      <div className="bg-[#0000FF] p-4 mb-4 font-[Comic Sans MS]">
        <code className="text-[#FFFF00]">npm install @cottoncandy/Input</code>
      </div>

      <div className="flex flex-row gap-4 mb-8">
        <Input 
          placeholder="type here ok"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        
        <Input 
          placeholder="no werk :("
          error="AAAAAA IT BORKED"
        />
        
        <Input 
          placeholder="cant type sry"
          disabled
        />
      </div>

      <div className="bg-[#330033] p-4 text-[#00FF00] font-mono">
        <pre>{`import { Input } from '@cottoncandy/Input'

<Input
  placeholder="no werk :("
  error="AAAAAA IT BORKED"
/>`}</pre>
      </div>
    </section>
  );
}
