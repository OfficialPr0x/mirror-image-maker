import { useState, useEffect } from "react";
import { Menu, X, Settings, Search } from "lucide-react";

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
    <nav className="h-12 bg-[#252526] border-b border-[#3C3C3C]">
      <div className="h-full px-4">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF605C]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD44]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00CA4E]"></div>
            </div>
            <span className="text-sm text-[#858585]">The Only Prompt - Builder</span>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-3 py-1 text-xs text-[#858585] hover:bg-[#37373D] rounded">Preview</button>
            <button className="px-3 py-1 text-xs text-white bg-[#0078D4] hover:bg-[#0067B5] rounded">Publish</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;