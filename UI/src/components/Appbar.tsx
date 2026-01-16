import { SearchBar } from "./Searchbar"

export const Appbar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f] text-white border-b border-white/10">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-[#272727] rounded-full">
          ☰
        </button>
        <span className="text-lg font-semibold">YouTube</span>
      </div>

      {/* Center */}
      <div className="flex-1 max-w-xl mx-6">
        <SearchBar />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="px-3 py-1 text-sm hover:bg-[#272727] rounded-full">
          Logout
        </button>
      </div>

    </header>
  )
}
