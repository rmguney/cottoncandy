export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full">
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-7xl p-4 sm:p-6 md:p-8 lg:p-10">
          {children}
        </div>
      </div>
    </div>
  );
}
