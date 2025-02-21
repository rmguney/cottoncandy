'use client';

import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

export default function DropdownShowcase() {
  const [value, setValue] = useState('');

  const options = [
    { value: 'pizza', label: '🍕 yummy pizza' },
    { value: 'taco', label: '🌮 cool taco' },
    { value: 'burger', label: '🍔 big borgar' },
    { value: 'sushi', label: '🍣 raw fish uwu' },
  ];

  return (
    <section id="dropdown" className="border-4 border-double border-[#FF00FF] p-4 sm:p-8 bg-[#000000] text-[#00FF00]">
      <h2 className="text-2xl sm:text-4xl mb-4 font-bold rainbow-text">✨ pick thing ✨</h2>
      
      <div className="bg-[#0000FF] p-2 sm:p-4 mb-4 font-[Comic Sans MS] overflow-x-auto">
        <code className="text-[#FFFF00] text-sm sm:text-base whitespace-nowrap">
          npm install @cottoncandy/Dropdown
        </code>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <Dropdown 
          options={options}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        
        <Dropdown 
          options={options}
          error="OOPSIE WOOPSIE"
          defaultValue="pizza"
        />
        
        <Dropdown 
          options={options}
          disabled
          defaultValue="burger"
        />
      </div>

      <div className="bg-[#330033] p-2 sm:p-4 text-[#00FF00] font-mono overflow-x-auto">
        <pre className="text-sm sm:text-base whitespace-pre">{`import { Dropdown } from '@cottoncandy/Dropdown'

<Dropdown
  options={options}
  onChange={handleChange}
/>`}</pre>
      </div>
    </section>
  );
}
