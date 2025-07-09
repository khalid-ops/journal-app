import { AppSidebar } from "@/components/app-sidebar"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { FlameIcon } from "lucide-react"

export default function Layout({ children, props }: { children?: React.ReactNode, props?: { title: string, icon?: React.ReactNode } }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b mb-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />

              <div className="flex items-center gap-2">
                  <h3 className="">{props!.title}</h3>
              </div>
            </div>
          </header>
          <div>
              {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
      <div className="flex justify-end border-t">
        <FlameIcon className="size-4 mr-1" />
        <p className="text-xs font-medium text-muted-foreground">Your Journals are 100% private, Happy Journaling!!</p>
      </div>
    </div>
  )
}
