import * as JsCookie from "js-cookie"; // generated
import React from 'react';
import ReactDOM from "react-dom/client";
import { GpsSys } from "./gps_sys/gpsSys";
export { DashboardCharts } from './dashboard/dashboard-charts';

// pass-through for Cookies API
export const Cookies = JsCookie.default;
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    //<React.StrictMode>
        <GpsSys/>
    //</React.StrictMode>
);
