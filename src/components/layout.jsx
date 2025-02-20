export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-yellow-400 to-green-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
