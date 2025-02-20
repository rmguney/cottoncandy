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
        <code className="text-[#FFFF00]">npm install @blursed/button</code>
      </div>

      <div className="flex flex-row items-center justify-center gap-4 my-8">
        <Button onClick={handleClick}>
          {`klicc (${clickCount})`}
        </Button>
        
        <Button variant="danger">
          danjer!!
        </Button>

        <Button disabled>
          no touchy!!1
        </Button>
      </div>

      <div className="bg-[#330033] p-4 text-[#00FF00] font-mono">
        <pre>
          {`import { Button } frm '@blursed/button'

<Button variant="danjer">
  do awfle thngs
</Buttun>`}
        </pre>
      </div>
    </section>
  );
}
