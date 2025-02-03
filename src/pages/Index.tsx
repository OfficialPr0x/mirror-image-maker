import Navbar from "@/components/Navbar";
import { Search, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Share2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <main className="flex h-[calc(100vh-3rem)]">
        {/* Activity Bar */}
        <div className="w-12 bg-[#1A1F2C] border-r border-[#2D2D2D] flex flex-col items-center py-4">
          <button className="p-2 hover:bg-[#403E43] rounded-md mb-2 group transition-colors">
            <svg className="w-5 h-5 text-[#9b87f5] group-hover:text-[#F1F0FB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 17h18M3 12h18M3 7h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="p-2 bg-[#403E43] rounded-md mb-2">
            <svg className="w-5 h-5 text-[#F1F0FB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <path d="M13 2v7h7" />
            </svg>
          </button>
          <button className="p-2 hover:bg-[#403E43] rounded-md transition-colors">
            <Search className="w-5 h-5 text-[#8E9196] hover:text-[#F1F0FB]" />
          </button>
        </div>

        {/* File Explorer */}
        <div className="w-64 bg-[#1A1F2C] border-r border-[#2D2D2D] flex flex-col">
          <div className="p-4 border-b border-[#2D2D2D]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#F1F0FB]">EXPLORER</span>
              <button className="text-[#8E9196] hover:text-[#F1F0FB] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-2 space-y-1">
              <div className="flex items-center text-[#F1F0FB] hover:bg-[#403E43] p-1.5 rounded-md cursor-pointer transition-colors">
                <span className="text-xs">index.html</span>
              </div>
              <div className="flex items-center text-[#8E9196] hover:bg-[#403E43] p-1.5 rounded-md cursor-pointer transition-colors">
                <span className="text-xs">styles.css</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 bg-[#1A1F2C] flex flex-col">
          {/* Editor Tabs */}
          <div className="h-10 border-b border-[#2D2D2D] flex items-center px-4">
            <div className="flex space-x-1">
              <div className="px-3 py-1 text-xs bg-[#403E43] text-[#F1F0FB] rounded-md">index.html</div>
              <div className="px-3 py-1 text-xs text-[#8E9196] hover:bg-[#403E43] rounded-md cursor-pointer transition-colors">styles.css</div>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-auto">
            <div className="p-4 font-mono text-sm">
              <div className="flex">
                <div className="w-12 text-right pr-4 text-[#8E9196] select-none">1</div>
                <div className="flex-1">
                  <span className="text-[#D946EF]">import</span>
                  <span className="text-[#9b87f5]"> React </span>
                  <span className="text-[#D946EF]">from</span>
                  <span className="text-[#F1F0FB]"> &apos;react&apos;</span>
                  <span className="text-[#8E9196]">;</span>
                </div>
              </div>
              <div className="flex">
                <div className="w-12 text-right pr-4 text-[#8E9196] select-none">2</div>
                <div className="flex-1"></div>
              </div>
              <div className="flex">
                <div className="w-12 text-right pr-4 text-[#8E9196] select-none">3</div>
                <div className="flex-1">
                  <span className="text-[#D946EF]">const</span>
                  <span className="text-[#9b87f5]"> App </span>
                  <span className="text-[#F1F0FB]">= () =></span>
                  <span className="text-[#F1F0FB]"> {}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="h-6 bg-[#1A1F2C] border-t border-[#2D2D2D] flex items-center px-4">
            <div className="flex items-center space-x-4 text-xs text-[#8E9196]">
              <span>Debugging</span>
              <ChevronUp className="w-4 h-4" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;