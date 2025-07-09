import { DailyThoughts } from "@/components/daily-thoughts";
import Layout from "../Layout/layout";
import { DashboardCardsSection } from "@/components/dashboard-cards";
import { DashboardSecondHalf } from "@/components/dashboard-second-half";

export default function Home() {
  return (
        <Layout props={{ title: "Dashboard" }}>
            <DailyThoughts />
            <DashboardCardsSection />
            <DashboardSecondHalf />
        </Layout>
  );
}