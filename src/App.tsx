import React, { useState } from 'react';
import MusicTypeSelector from '@/components/MusicTypeSelector';
import SaveButton from '@/components/SaveButton';
import FormSearchItem from '@/components/FormSearchItem';

function App() {
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

  const musicTypes = ['Instrumental', 'Ballad', 'Rock'];
  const [selectedType, setSelectedType] = useState<string>(musicTypes[0]);
  const [searchData, setSearchData] = useState<any>({
    musicType: selectedType,
  });

  const handleSave = () => {
    console.log('searchData', searchData);
    alert('Data saved successfully! Check console for details.');
  };
  return (
    <div className="p-6 bg-[#191C1F] min-h-screen">
      <MusicTypeSelector
        setSelectedType={setSelectedType}
        musicTypes={musicTypes}
        selectedType={selectedType}
        setSearchData={setSearchData}
      />
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
      <SaveButton handleSave={handleSave} />
    </div>
  );
}

export default App;
