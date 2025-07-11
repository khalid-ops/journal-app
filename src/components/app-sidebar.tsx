import * as React from "react"
import {
  BookOpenIcon,
  NotepadText,
  PenLineIcon,
  Settings2,
  TagsIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { RouteStrings } from "@/config/routeStrings"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "PJApp",
      logo: NotepadText,
      plan: "Private & Secure",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: RouteStrings.HOME,
      icon: BookOpenIcon,
      isActive: true,
    },
    {
      title: "All Journals",
      url: RouteStrings.JOURNAL,
      icon: PenLineIcon,
      isActive: false,
      items: [],
    },
    {
      title: "Tags",
      url: "#",
      icon: TagsIcon,
      isActive: false,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: false,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
