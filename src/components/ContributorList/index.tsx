import React from 'react';
import ContributorCard from '../ContributorCard';
import { Contributor } from '@/mock/data';

interface ContributorListProps {
  data: Contributor[];
  role: string;
  handleContributorRemove: (contributorId: number) => void;
}

const ContributorList: React.FC<ContributorListProps> = (
  prop: ContributorListProps,
) => {
  const { data, role, handleContributorRemove } = prop;
  if (data.length === 0) {
    return (
      <p className="mt-[18px] text-sm">No {role.toLowerCase()} selected</p>
    );
  }
  return (
    <div className="flex flex-wrap mb-[10px]">
      {data.map((contributor) => (
        <ContributorCard
          key={contributor.contributorId}
          {...contributor}
          handleContributorRemove={handleContributorRemove}
        />
      ))}
    </div>
  );
};

export default ContributorList;
