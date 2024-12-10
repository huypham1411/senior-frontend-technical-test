import React, { useState } from 'react';
import TextHeader from '@/components/TextHeader';

type MusicTypeSelectorProps = {
  musicTypes: string[];
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  selectedType: string;
  setSearchData: (data: {}) => void;
};
const MusicTypeSelector: React.FC<MusicTypeSelectorProps> = ({
  setSelectedType,
  musicTypes,
  selectedType,
  setSearchData,
}) => {
  if (musicTypes.length === 0) {
    return;
  }
  return (
    <div className="flex flex-col">
      <p className="text-[#6C7786] leading-[16.34px] pb-[5px] text-[13.5px]">
        <TextHeader content="Music Type" />
      </p>
      <div className="flex space-x-[7px]">
        {musicTypes?.map((type) => (
          <button
            key={type}
            className={`bg-[#09090B]  h-[52px] w-[222px] text-[11px] ${
              selectedType === type
                ? 'border-[2px] border-[#E4E5E5] rounded-[3px]'
                : 'border-[2px] border-[#262629] rounded-[3px]'
            }`}
            onClick={() => {
              setSelectedType(type);
              setSearchData((prev: any) => ({ ...prev, musicType: type }));
            }}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MusicTypeSelector;
