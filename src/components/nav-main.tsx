"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
          <SidebarMenuItem>
              <SidebarMenuButton tooltip={item.title} >
                {item.icon && <item.icon />}
                <a href={item.url}>
                <span>{item.title}</span>
                </a>
                <ChevronRight className="ml-auto transition-transform duration-200" />
              </SidebarMenuButton>
          </SidebarMenuItem>

          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
