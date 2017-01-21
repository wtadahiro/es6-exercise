import React from 'react';

export const FooInput = ({ value, onChange }) => (
  <div>
    <input type="text" value={value} onChange={e => onChange(e.target.value)} />
  </div>
);

