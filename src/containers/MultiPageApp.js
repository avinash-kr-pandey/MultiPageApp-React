import { Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import MultiPateAppRoutes from "../routes/MultiPateAppRoutes";

const MultiPageApp = ()=>{
    return(
        <BrowserRouter>
            <Navigation/>
            {MultiPateAppRoutes()}
        </BrowserRouter>
    );
}
export default MultiPageApp;