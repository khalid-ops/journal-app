import { Badge } from "./ui/badge"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { BookCopy, ListPlusIcon, TagsIcon } from 'lucide-react';

export const DashboardCardsSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
            <Card className="from-violet-100 to-violet-400 bg-gradient-to-br rounded-lg @container/card">
                <CardHeader>
                    <CardDescription className="text-black" >Total Journals</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">10</CardTitle>
                    <CardAction>
                        <Badge className="bg-black text-white">
                            <BookCopy />
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter>
                </CardFooter>
            </Card>
            <Card className="from-blue-100 to-blue-400 bg-gradient-to-br rounded-lg @container/card">
                <CardHeader>
                    <CardDescription className="text-black">New Entries</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">25</CardTitle>
                    <CardAction>
                        <Badge className="bg-black text-white">
                            <ListPlusIcon />
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter>
                </CardFooter>
            </Card>
            <Card className="from-green-100 to-green-400 bg-gradient-to-br rounded-lg @container/card">
                <CardHeader>
                    <CardDescription className="text-black">Tags Used</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">15</CardTitle>
                    <CardAction>
                        <Badge className="bg-black text-white">
                            <TagsIcon />
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter>
                </CardFooter>
            </Card>
        </div>
    )
}