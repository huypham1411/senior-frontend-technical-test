import React from 'react';

type SaveButtonProps = { handleSave: () => void };
const SaveButton: React.FC<SaveButtonProps> = ({ handleSave }) => {
  return (
    <button
      onClick={handleSave}
      className="flex items-center justify-center bg-white text-black rounded-lg w-[237px] h-[57px] justify-self-end mt-[28px]"
    >
      Save
    </button>
  );
};

export default SaveButton;
