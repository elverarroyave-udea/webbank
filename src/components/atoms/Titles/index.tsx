import React from 'react';

const HeroTitle = () => {
  return (
    <h1 className='text-center lg:text-left text-[40px] lg:text-[56px] font-light text-secondary max-w-72 lg:max-w-96'>
      Next generation digital banking
    </h1>
  );
};
const MediumTitle = () => {
  return (
    <h2 className='text-center lg:text-left text-[32px] lg:text-[40px] font-light text-secondary max-w-72 lg:max-w-max'>
      Why choose Easybank?
    </h2>
  );
};
const SubTitle = () => {
  return <div>Index</div>;
};
const TextTitle = () => {
  return <div>Index</div>;
};
const SubText = () => {
  return <div>Index</div>;
};

export { HeroTitle, MediumTitle, SubTitle, TextTitle, SubText };
