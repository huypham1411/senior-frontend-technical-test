import React from 'react';
import { Contributor } from '@/mock/data';

export type ContributorInputProps = {
  onContributorSelect: (contributor: Contributor) => void;
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchResults: Contributor[];
  selectedContributors: Contributor[];
};

const ContributorInput: React.FC<ContributorInputProps> = ({
  onContributorSelect,
  inputValue,
  handleInputChange,
  searchResults,
  selectedContributors,
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          type="text"
          placeholder="Typing name or id of artist here"
          className="w-full border-[1px] border-[#1E1E21] rounded-[4px] bg-transparent h-[42px] pl-[38px]"
          value={inputValue}
          onChange={handleInputChange}
        />
        <img
          src="/assets/icons/search-icon.svg"
          alt="Search Icon"
          className="absolute top-1/2 left-[16px] transform -translate-y-1/2 w-[12px] h-[12px]"
        />
        {selectedContributors.length > 0 && (
          <div className="space-x-2 absolute right-[16px] top-1/2 transform -translate-y-1/2">
            <input type="checkbox" />
            <span>Reorder</span>
          </div>
        )}
      </div>

      {inputValue && searchResults.length > 0 && (
        <div className="mt-4 bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-400">Search results</p>
          {searchResults.map((contributor) => (
            <div
              key={contributor.contributorId}
              className="flex items-center justify-between p-2 mt-2 bg-gray-800 rounded-lg"
            >
              <div className="flex items-center">
                <img
                  src={contributor.contributorAvatarUrl || undefined}
                  alt={contributor.contributorAlias || undefined}
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-bold text-white">
                    {contributor.contributorName} (
                    {contributor.contributorAlias})
                  </p>
                </div>
              </div>
              <button
                onClick={() => onContributorSelect(contributor)}
                className="text-sm text-gray-400 hover:text-gray-200"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 text-sm text-gray-400">
        {selectedContributors.length} selected
      </div>
    </div>
  );
};

export default ContributorInput;
