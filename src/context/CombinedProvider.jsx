import React from "react";
import {WidgetProvider} from "context";
const CombinedProvider=({children})=>{
    return (
        <WidgetProvider>{children}</WidgetProvider>
    )
}
export {CombinedProvider};