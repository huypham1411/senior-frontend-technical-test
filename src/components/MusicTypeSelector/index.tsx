import React, { useState } from 'react';
import TextHeader from '@/components/TextHeader';

const MusicTypeSelector: React.FC = () => {
  const musicTypes = ['Instrumental', 'Ballad', 'Rock'];
  const [selectedType, setSelectedType] = useState<string>(musicTypes[0]);

  return (
    <div className="flex flex-col">
      <p className="text-[#6C7786] leading-[16.34px] pb-[5px] text-[13.5px]">
        <TextHeader content="Music Type" />
      </p>
      <div className="flex space-x-[7px]">
        {musicTypes.map((type) => (
          <button
            key={type}
            className={`bg-[#09090B]  h-[52px] w-[222px] text-[11px] ${
              selectedType === type
                ? 'border-[2px] border-[#E4E5E5] rounded-[3px]'
                : 'border-[2px] border-[#262629] rounded-[3px]'
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MusicTypeSelector;
