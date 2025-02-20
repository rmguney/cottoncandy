export default function Layout({ children }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-gradient-to-r from-purple-600 via-yellow-400 to-green-500 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-comic-sans">
      {children}
    </div>
  );
}
