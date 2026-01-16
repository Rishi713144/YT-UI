export const LeftBar = () => {
  return (
    <aside className="hidden md:flex flex-col w-56 bg-[#0f0f0f] text-white py-2">
      
      {/* Top Section */}
      <SidebarItem title="Home" icon="🏠" />
      <SidebarItem title="Shorts" icon="🎬" />
      <SidebarItem title="Subscriptions" icon="📺" />

      <Divider />

      {/* Library Section */}
      <SidebarItem title="Library" icon="📁" />
      <SidebarItem title="History" icon="🕘" />
      <SidebarItem title="Your videos" icon="🎥" />
      <SidebarItem title="Watch later" icon="⏱️" />
      <SidebarItem title="Liked videos" icon="👍" />

      <Divider />

      {/* Explore */}
      <SidebarItem title="Trending" icon="🔥" />
      <SidebarItem title="Music" icon="🎵" />
      <SidebarItem title="Gaming" icon="🎮" />
    </aside>
  )
}

/* ---------- Components ---------- */

const SidebarItem = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-[#272727] cursor-pointer transition">
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{title}</span>
    </div>
  )
}

const Divider = () => {
  return <div className="my-2 border-t border-white/10" />
}
