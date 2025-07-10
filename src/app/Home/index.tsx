import Layout from "../Layout/layout";
import { DashboardCardsSection } from "@/components/dashboard-cards";
import { DashboardSecondHalf } from "@/components/dashboard-second-half";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
        <Layout props={{ title: "Dashboard" }}>
            <div className="flex rounded-md border ml-2 mr-2 mb-1 mt-3">
              <div className="flex flex-col items-start gap-2 p-4">
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, John 👋</h1>
                <p className="text-muted-foreground">Ready to capture today's thoughts and reflections?</p>
              </div>
              <div className="mt-4 ml-auto mr-4">
                <Button size={"lg"}>Get Started</Button>
              </div>
            </div>
            <DashboardCardsSection />
            <DashboardSecondHalf />
        </Layout>
  );
}