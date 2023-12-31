"use client";

type ErrorUIProps = {
  error: unknown;
  reset: () => void;
};

export default function ErrorUI({error, reset}: ErrorUIProps) {
  console.log({error, reset});

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 잘못된 페이지에요🥲</h1>
      <p className="text-gray-600 text-lg mb-8">
        We apologize for the inconvenience. Please try again later.
      </p>
      <button
        className="px-4 py-2 bg-highlight text-white rounded hover:bg-orange-400 font-suitSemiBold"
        onClick={reset}>
        새로고침
      </button>
    </div>
  );
}
