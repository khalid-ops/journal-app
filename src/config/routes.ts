import { createBrowserRouter } from "react-router";
import React from "react";
import Home from "../app/Home";
import { Journal } from "@/app/Journal-Upsert";
import { RouteStrings } from "./routeStrings";

const router = createBrowserRouter([
    {
        element: React.createElement(Home),
        path: RouteStrings.HOME,
    },
    {
        element: React.createElement(Journal),
        path: RouteStrings.JOURNAL,
    },
]);

export default router;
