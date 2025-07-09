import { ListIcon, NotebookPenIcon, PinIcon } from "lucide-react"
import { Input } from "./ui/input"
import { TypographyH4 } from "./ui/typography"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export const DashboardSecondHalf = () => {
    return (
        <div className="mt-4 px-2">
            <div className="flex flex-1 overflow-auto rounded-md border">
                <div className="w-2/3 border-r">
                    <div className="flex items-center gap-2 p-4">
                        <TypographyH4 text="Recent Activities" />
                        <div className="flex justify-end gap-2 ml-auto">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" size='icon'>
                                        <NotebookPenIcon className="size-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Write a new journal</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" size='icon'>
                                        <ListIcon className="size-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>View all journals</TooltipContent>
                            </Tooltip>
                        </div>
                        <Input placeholder="Search" className="w-1/4" />

                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex items-center gap-2 p-4">
                        <PinIcon className="size-6 text-primary" />
                        <TypographyH4 text="Pinned Journals" />
                    </div>
                </div>

            </div>
        </div>
    )
} 