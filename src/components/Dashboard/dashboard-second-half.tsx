import { ListIcon, NotebookPenIcon, PinIcon } from "lucide-react"
import { Input } from "../ui/input"
import { TypographyH4 } from "../ui/typography"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Label } from "../ui/label"
import { useNavigate } from "react-router"
import { RouteStrings } from "@/config/routeStrings"
import { DataTable } from "../ui/data-table"
import { Badge } from "../ui/badge"

export const DashboardSecondHalf = () => {

    const navigate = useNavigate();
    return (
        <div className="mt-2 px-2 mb-2">
            <div className="flex flex-1 rounded-md border">
                <div className="w-2/3 border-r">
                    <div className="flex items-center gap-2 p-4 border-b">
                        <TypographyH4 text="Recent Journals" />
                        <div className="flex justify-end gap-2 ml-auto">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" size='icon' onClick={() => navigate(RouteStrings.JOURNAL_CREATE)}>
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
                    <div className="p-2">
                        <div className="overflow-auto rounded-md border">
                            <DataTable columns={[
                                {
                                    accessorKey: 'writtenOn',
                                    header: 'Written On',
                                    cell: info => info.getValue(),
                                },
                                {
                                    accessorKey: 'title',
                                    header: 'Title',
                                    cell: info => info.getValue(),
                                },
                                {
                                    accessorKey: 'tag',
                                    header: 'Tag',
                                    cell: info => <Badge>{String(info.getValue())}</Badge>,
                                }
                            ]} data={[
                                { writtenOn: '2023-03-15', title: 'My First Journal', tag: 'Personal' },
                                { writtenOn: '2023-03-16', title: 'Exploring the Mountains', tag: 'Travel' },
                                { writtenOn: '2023-03-19', title: 'Exploring the Areas', tag: 'Work' },
                                { writtenOn: '2023-03-20', title: 'Weekend Reflections', tag: 'Personal' },
                            ]} />
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex items-center gap-2 p-4 mt-2 border-b">
                        <PinIcon className="size-6 text-primary" />
                        <TypographyH4 text="Pinned Journals" />
                    </div>
                    <div className="p-2">
                        <div className="rounded-md border overflow-auto">
                            <ul>
                                <li className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer">
                                    <Label>Favourite Journal</Label>
                                    <Badge className="bg-indigo-400">Personal</Badge>
                                </li>
                                <li className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer">
                                    <Label>Exploring the Mountains</Label>
                                    <Badge className="bg-indigo-400">Travel</Badge>
                                </li>
                                <li className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer">
                                    <Label>Work Journal</Label>
                                    <Badge className="bg-indigo-400">Work</Badge>
                                </li>
                                <li className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer">
                                    <Label>Weekend Reflections</Label>
                                    <Badge className="bg-indigo-400">Personal</Badge>
                                </li>
                                <li className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer">
                                    <Label>Travel Adventures</Label>
                                    <Badge className="bg-indigo-400">Travel</Badge>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
} 