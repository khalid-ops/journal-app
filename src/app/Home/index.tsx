import Layout from "../Layout/layout";
import { DashboardCardsSection } from "@/components/Dashboard/dashboard-cards";
import { DashboardSecondHalf } from "@/components/Dashboard/dashboard-second-half";
import { Button } from "@/components/ui/button";
import { RouteStrings } from "@/config/routeStrings";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
        <Layout props={{ title: "Dashboard" }}>
            <div className="flex rounded-md border ml-2 mr-2 mb-1 mt-2">
              <div className="flex flex-col items-start gap-2 p-4">
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, John 👋</h1>
                <p className="text-muted-foreground">Ready to capture today's thoughts and reflections?</p>
              </div>
              <div className="mt-4 ml-auto mr-4">
                <Button size={"lg"} onClick={() => {navigate(RouteStrings.JOURNAL_CREATE);}}>Get Started</Button>
              </div>
            </div>
            <DashboardCardsSection />
            <div className="p-3 mt-2 ml-2 mr-2 rounded-md border">
                <h2 className="text-2xl font-semibold mb-4">What's Your Mood Today!</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                        <h3 className="font-semibold">Happy 😊</h3>
                        <p className="text-muted-foreground">Feeling great today!</p>
                    </div>
                    <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                        <h3 className="font-semibold">Sad 😔</h3>
                        <p className="text-muted-foreground">A bit down today.</p>
                    </div>
                    <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                        <h3 className="font-semibold">Neutral 😐</h3>
                        <p className="text-muted-foreground">Just another day.</p>
                    </div>
                </div>

            </div>
            <DashboardSecondHalf />
        </Layout>
  );
}