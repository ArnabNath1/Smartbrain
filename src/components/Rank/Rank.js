import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`Arnab, your current entry count is #1`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;