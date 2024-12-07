import React from 'react';

type Props = {
  content: string;
  required?: boolean;
};

const TextHeader = (props: Props) => {
  const { content, required } = props;
  return (
    <>
      {content} {required && <span className="text-red-500">*</span>}
    </>
  );
};

export default TextHeader;
