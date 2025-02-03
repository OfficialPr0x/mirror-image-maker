import Navbar from "@/components/Navbar";
import { Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      <Navbar />
      <main className="flex h-[calc(100vh-4rem)]">
        {/* File Explorer Sidebar */}
        <div className="w-16 bg-[#252526] border-r border-[#3C3C3C] flex flex-col items-center py-4">
          <button className="p-2 hover:bg-[#37373D] rounded mb-2">
            <svg className="w-5 h-5 text-[#858585]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 17h18M3 12h18M3 7h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="p-2 bg-[#37373D] rounded mb-2">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <path d="M13 2v7h7" />
            </svg>
          </button>
          <button className="p-2 hover:bg-[#37373D] rounded">
            <Search className="w-5 h-5 text-[#858585]" />
          </button>
        </div>

        {/* File Tree Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-[#3C3C3C] p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-[#CCCCCC]">EXPLORER</h2>
            <button className="text-[#858585] hover:text-white">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="space-y-1">
            <div className="flex items-center text-[#CCCCCC] hover:bg-[#37373D] p-1.5 rounded cursor-pointer">
              <span className="text-xs">index.html</span>
            </div>
            <div className="flex items-center text-[#CCCCCC] hover:bg-[#37373D] p-1.5 rounded cursor-pointer">
              <span className="text-xs">styles.css</span>
            </div>
          </div>
        </div>

        {/* Code Editor Area */}
        <div className="flex-1 bg-[#1E1E1E] overflow-hidden">
          <div className="flex items-center bg-[#252526] px-4 py-2 border-b border-[#3C3C3C]">
            <div className="flex space-x-2">
              <div className="px-3 py-1 text-xs bg-[#1E1E1E] text-[#CCCCCC] rounded-t">index.html</div>
              <div className="px-3 py-1 text-xs text-[#858585] hover:bg-[#2D2D2D] rounded-t cursor-pointer">styles.css</div>
            </div>
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="flex items-center text-[#858585]">
              <span className="w-8 text-right mr-4 select-none">1</span>
              <span className="text-[#C586C0]">import</span>
              <span className="text-[#9CDCFE] mx-2">React</span>
              <span className="text-[#C586C0]">from</span>
              <span className="text-[#CE9178] mx-2">&apos;react&apos;</span>;
            </div>
            <div className="flex items-center text-[#858585]">
              <span className="w-8 text-right mr-4 select-none">2</span>
              <span></span>
            </div>
            <div className="flex items-center text-[#858585]">
              <span className="w-8 text-right mr-4 select-none">3</span>
              <span className="text-[#C586C0]">const</span>
              <span className="text-[#DCDCAA] mx-2">App</span>
              <span className="text-[#CCCCCC]">=</span>
              <span className="text-[#CCCCCC] mx-2">()</span>
              <span className="text-[#CCCCCC]">{'=>'}</span>
              <span className="text-[#CCCCCC] mx-2">{'{}'}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;