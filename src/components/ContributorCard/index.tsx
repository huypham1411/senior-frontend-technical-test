import React, { useState } from 'react';
import { Contributor } from '../../mock/data';

const ContributorCard: React.FC<
  Contributor & { handleContributorRemove: (contributorId: number) => void }
> = ({
  contributorName,
  contributorAlias,
  contributorAvatarUrl,
  contributorId,
  handleContributorRemove,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleRemoveClick = () => {
    handleContributorRemove(contributorId);
    setDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg shadow-md w-[200px] text-base mt-[8px] mr-[8px] relative">
      <div className="flex items-center">
        <img
          src={contributorAvatarUrl || ''}
          alt={contributorAlias || 'Avatar'}
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <p className="font-semibold">
            {contributorName} <span>(ID:{contributorId})</span>
          </p>
          {contributorAlias && (
            <p className="text-[#51555F]">Alias: {contributorAlias}</p>
          )}
        </div>
      </div>
      <div className="relative">
        <button onClick={toggleDropdown} className="focus:outline-none">
          <img src="/assets/icons/more-icon.svg" alt="more" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md text-sm z-10">
            <ul className="py-1">
              <li
                onClick={handleRemoveClick}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
              >
                Remove
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContributorCard;
