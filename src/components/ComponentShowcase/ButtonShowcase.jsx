'use client';
import Button from '../Button/Button';
import { useState } from 'react';

export default function ButtonShowcase() {
  const [clickCount, setClickCount] = useState(0);
  
  const handleClick = () => setClickCount(prev => prev + 1);

  return (
    <section id="buttons" className="border-4 border-double border-[#FF00FF] p-8 bg-[#000000] text-[#00FF00]">
      <h2 className="text-4xl mb-4 font-bold rainbow-text">✨ boton ✨</h2>
      
      <div className="bg-[#0000FF] p-4 mb-4 font-[Comic Sans MS]">
        <code className="text-[#FFFF00]">npm install @cottoncandy/Button</code>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-8 w-full">
        <Button onClick={handleClick} className="w-full sm:w-auto">
          {`klicc (${clickCount})`}
        </Button>
        
        <Button variant="danger" className="w-full sm:w-auto">
          danjer!!
        </Button>

        <Button disabled className="w-full sm:w-auto">
          no touchy!!1
        </Button>
      </div>

      <div className="bg-[#330033] p-4 text-[#00FF00] font-mono">
        <pre>
          {`import { Button } from '@cottoncandy/Button'

<Button variant="danger">
  do awfle thngs
</Buttun>`}
        </pre>
      </div>
    </section>
  );
}
