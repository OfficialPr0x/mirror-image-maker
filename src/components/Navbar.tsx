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
    <nav className="h-12 bg-[#1A1F2C] border-b border-[#2D2D2D]">
      <div className="h-full px-4">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF605C]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD44]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00CA4E]"></div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-[#8E9196]">New Text Document</span>
              <span className="text-sm text-[#8E9196]">×</span>
              <span className="text-sm text-[#8E9196] opacity-50">Build a Website...</span>
              <span className="text-sm text-[#8E9196] opacity-50">+</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="px-3 py-1.5 text-xs text-[#F1F0FB] hover:bg-[#403E43] rounded-md transition-colors">
              Preview
            </button>
            <button className="px-3 py-1.5 text-xs text-white bg-[#0078D4] hover:bg-[#0067B5] rounded-md transition-colors flex items-center space-x-1">
              <span>Publish</span>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V7H7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;