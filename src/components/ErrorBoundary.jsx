// components/ErrorBoundary.jsx
'use client';

export default function ErrorBoundary({ error, reset }) {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded-lg">
      <h2>Something went wrong!</h2>
      <button onClick={reset} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
        Try again
      </button>
    </div>
  );
}