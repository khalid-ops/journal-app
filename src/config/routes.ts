import { createBrowserRouter } from "react-router";
import React from "react";
import Home from "../app/Home";
import { Journal } from "@/app/Journal";
import AllJournals from "@/app/Journal/ListPage";
import { RouteStrings } from "./routeStrings";

const router = createBrowserRouter([
    {
        element: React.createElement(Home),
        path: RouteStrings.HOME,
    },
    {
        element: React.createElement(AllJournals),
        path: RouteStrings.JOURNAL,
    },
    {
        element: React.createElement(Journal),
        path: RouteStrings.JOURNAL_CREATE,
    },
]);

export default router;
