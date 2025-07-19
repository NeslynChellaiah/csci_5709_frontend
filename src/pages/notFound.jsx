import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Page Not Found</p>
      <p className="text-md text-gray-600 mb-6">
        The page you're looking for doesn’t exist or has been moved.
      </p>
    </div>
  );
}
