// src/components/MergedBox1.jsx

import Box from './Box1';
import { boxData } from './boxData';

export default function MergedBox1() {
  return (
    
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-1 ">
        {boxData.map((box) => (
          <div
            key={box.id}
            className=" w-[25%] bg-black"
          >
            <Box box={box} />
          </div>
        ))}
      </div>
  );
}
