import { useState, useEffect } from "react";
import { Menu, X, Settings, Search, GitBranch } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`h-16 bg-[#221F26] border-b border-[#403E43]`}>
      <div className="h-full px-4">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-xl font-semibold text-[#9b87f5]">
              Lovable IDE
            </a>
            <div className="hidden md:flex items-center space-x-4 text-[#F1F0FB]">
              <button className="hover:text-[#9b87f5] transition-colors">File</button>
              <button className="hover:text-[#9b87f5] transition-colors">Edit</button>
              <button className="hover:text-[#9b87f5] transition-colors">View</button>
              <button className="hover:text-[#9b87f5] transition-colors">Help</button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-[#1A1F2C] rounded px-3 py-1.5">
              <Search className="w-4 h-4 text-[#8E9196] mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-[#F1F0FB] outline-none w-40"
              />
            </div>
            <button className="p-2 hover:bg-[#403E43] rounded transition-colors">
              <GitBranch className="w-5 h-5 text-[#F1F0FB]" />
            </button>
            <button className="p-2 hover:bg-[#403E43] rounded transition-colors">
              <Settings className="w-5 h-5 text-[#F1F0FB]" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F1F0FB]"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden animate-fadeIn bg-[#221F26] absolute left-0 right-0 border-b border-[#403E43]">
            <div className="px-4 py-2 space-y-2">
              {["File", "Edit", "View", "Help"].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left px-3 py-2 text-[#F1F0FB] hover:bg-[#403E43] rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;