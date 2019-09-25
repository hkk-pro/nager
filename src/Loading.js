import React from 'react';

export default function Loading() {
  return (
    <div className="p-2">
      Loading{' '}
      <div className="spinner-grow spinner-grow-sm pl-3" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow spinner-grow-sm pl-3" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow spinner-grow-sm pl-3" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
}
