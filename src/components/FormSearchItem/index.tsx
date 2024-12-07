import React, { useState } from 'react';
import TextHeader from '../TextHeader';
import ContributorList from '../ContributorList';
import ContributorInput from '../ContributorInput';
import { Contributor, mockContributors } from '@/mock/data';

type Props = {
  role: string;
  required?: boolean;
  setSearchData: (data: {}) => void;
};

const FormSearchItem = (props: Props) => {
  const { role, required, setSearchData } = props;
  const [inputValue, setInputValue] = useState('');
  const [selectedContributors, setSelectedContributors] = useState<
    Contributor[]
  >([]);
  const [searchResults, setSearchResults] =
    useState<Contributor[]>(mockContributors);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const filteredResults = mockContributors.filter(
      (contributor: Contributor) =>
        contributor?.contributorName
          ?.toLowerCase()
          .includes(e.target.value.toLowerCase()),
    );
    setSearchResults(filteredResults);
  };

  const handleContributorSelect = (contributor: Contributor) => {
    if (
      !selectedContributors.some(
        (c) => c.contributorId === contributor.contributorId,
      )
    ) {
      const updatedContributors = [...selectedContributors, contributor];
      setSelectedContributors(updatedContributors);
      setSearchData((prev: any) => ({ ...prev, [role]: updatedContributors }));
    }
    setInputValue('');
    setSearchResults([]);
  };

  const handleContributorRemove = (contributorId: number) => {
    setSelectedContributors(
      selectedContributors.filter((c) => c.contributorId !== contributorId),
    );
  };
  return (
    <div className="flex flex-col bg-[#09090B] p-[13px]">
      <h2 className="text-sm">
        <TextHeader content={role} required={required} />
      </h2>
      <ContributorList
        data={selectedContributors}
        role={role}
        handleContributorRemove={handleContributorRemove}
      />
      <ContributorInput
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        searchResults={searchResults}
        onContributorSelect={handleContributorSelect}
        selectedContributors={selectedContributors}
      />
    </div>
  );
};

export default FormSearchItem;
