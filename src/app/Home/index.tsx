import Layout from "../Layout/layout";
import { DashboardCardsSection } from "@/components/dashboard-cards";

export default function Home() {
  return (
        <Layout props={{ title: "Dashboard" }}>
            <DashboardCardsSection />
        </Layout>
  );
}