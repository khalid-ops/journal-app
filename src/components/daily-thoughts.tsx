import { journalQuotes } from "@/lib/constants/quotes";
import { Card, CardHeader, CardTitle } from "./ui/card"
import { TypographyBlockquote } from "./ui/typography"

export const DailyThoughts = () => {

    function getRandomQuote() {
        const index = Math.floor(Math.random() * journalQuotes.length);
        return journalQuotes[index];
    }

    return (
        <div className="p-2">
            <Card className="mb-2 bg-gradient-to-br from-yellow-100 to-yellow-400 rounded-lg @container/card">
                <CardHeader>
                    <CardTitle>Quote Of The Day</CardTitle>
                    <TypographyBlockquote text={getRandomQuote()} />
                </CardHeader>
            </Card>
        </div>
    )
}