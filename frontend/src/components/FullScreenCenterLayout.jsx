export default function FullScreenCenterLayout({ children }) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        {children}
      </div>
    );
  }
  