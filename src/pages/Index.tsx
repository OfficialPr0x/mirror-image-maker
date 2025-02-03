import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <main className="flex h-[calc(100vh-4rem)]">
        {/* File Explorer Sidebar */}
        <div className="w-64 bg-[#221F26] border-r border-[#403E43] p-4">
          <h2 className="text-sm font-semibold text-[#8E9196] mb-4">EXPLORER</h2>
          <div className="space-y-2">
            <div className="flex items-center text-[#F1F0FB] hover:bg-[#403E43] p-2 rounded cursor-pointer">
              <span>📄 index.tsx</span>
            </div>
            <div className="flex items-center text-[#F1F0FB] hover:bg-[#403E43] p-2 rounded cursor-pointer">
              <span>📄 styles.css</span>
            </div>
          </div>
        </div>

        {/* Code Editor Area */}
        <div className="flex-1 bg-[#1A1F2C]">
          <div className="flex items-center bg-[#221F26] px-4 py-2 border-b border-[#403E43]">
            <div className="flex space-x-2">
              <div className="px-3 py-1 text-sm bg-[#403E43] text-[#F1F0FB] rounded">index.tsx</div>
              <div className="px-3 py-1 text-sm text-[#8E9196] hover:bg-[#403E43] rounded cursor-pointer">styles.css</div>
            </div>
          </div>
          <div className="p-4 font-mono">
            <div className="flex items-center text-[#8E9196]">
              <span className="w-8 text-right mr-4">1</span>
              <span className="text-[#9b87f5]">import</span>
              <span className="text-[#F1F0FB] mx-2">React</span>
              <span className="text-[#9b87f5]">from</span>
              <span className="text-[#D946EF] mx-2">'react'</span>;
            </div>
            <div className="flex items-center text-[#8E9196]">
              <span className="w-8 text-right mr-4">2</span>
              <span></span>
            </div>
            <div className="flex items-center text-[#8E9196]">
              <span className="w-8 text-right mr-4">3</span>
              <span className="text-[#9b87f5]">const</span>
              <span className="text-[#0FA0CE] mx-2">App</span>
              <span className="text-[#F1F0FB]">=</span>
              <span className="text-[#F97316] mx-2">()</span>
              <span className="text-[#F1F0FB]">=></span>
              <span className="text-[#F1F0FB] mx-2">{}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;