// src/components/SearchForm.js
import React, { useState } from 'react';
import PunkTransferQuery from './PunkTransferQuery';

const SearchForm = () => {
  const [punkIndex, setPunkIndex] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Punk Index"
          value={punkIndex}
          onChange={(e) => setPunkIndex(e.target.value)}
        />
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </form>
      <PunkTransferQuery punkIndex={punkIndex} from={from} to={to} />
    </div>
  );
};

export default SearchForm;
