import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { BadgeAlert, BookAlertIcon, BookCopy, Calendar1, Flame, ListPlusIcon, TagsIcon, TrendingUpIcon } from 'lucide-react';

export const DashboardCardsSection = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 px-2 mt-2">
            <Card className="from-teal-50 to-teal-200 bg-gradient-to-b rounded-lg @container/card">
                <CardHeader>
                    <CardDescription className="text-black" >Total Journals</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">10</CardTitle>
                    <CardAction>
                        <BookCopy />
                    </CardAction>

                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
                        Entries made till now <Calendar1 className="size-4" />
                    </div>
                </CardFooter>
            </Card>
            <Card className="from-teal-50 to-teal-200 bg-gradient-to-b rounded-lg @container/card">
                <CardHeader>
                    <CardDescription className="text-black">New Entries</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">25</CardTitle>
                    <CardAction>
                            <ListPlusIcon />
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
                        Recent Entries <BookAlertIcon className="size-4" />
                    </div>
                </CardFooter>
            </Card>
            <Card className="from-teal-50 to-teal-200 bg-gradient-to-b rounded-lg @container/card">
                <CardHeader>
                    <CardDescription className="text-black">Writing Streak</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">5 Days</CardTitle>
                    <CardAction>
                            <TrendingUpIcon />
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
                        Your current streak <Flame className="size-4" />
                    </div>
                </CardFooter>
            </Card>
            <Card className="from-teal-50 to-teal-200 bg-gradient-to-b rounded-lg @container/card">
                <CardHeader>
                    <CardDescription className="text-black">Tags Available</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">15</CardTitle>
                    <CardAction>
                            <TagsIcon />
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
                        Your added Tags <BadgeAlert className="size-4" />
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}