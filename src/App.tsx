import React, { useState } from 'react';
import MusicTypeSelector from '@/components/MusicTypeSelector';
import SaveButton from '@/components/SaveButton';
import FormSearchItem from '@/components/FormSearchItem';

function App() {
  const [searchData, setSearchData] = useState({});

  const roleData = [
    'Main artist',
    'Featured artist',
    'Composer',
    'Lyricist',
    'Music publisher',
    'Producer',
    'Mixer',
    'Remixer',
  ];
  return (
    <div className="p-6 bg-[#191C1F] min-h-screen">
      <MusicTypeSelector />
      <div className="grid grid-cols-2 gap-4 mt-[26px]">
        {roleData.map((role, index) => (
          <FormSearchItem
            key={index}
            role={role}
            required={role !== 'Remixer'}
            setSearchData={setSearchData}
          />
        ))}
      </div>
      <SaveButton />
    </div>
  );
}

export default App;
