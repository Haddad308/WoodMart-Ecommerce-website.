import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles.css";
import TokenContextProvider from "./context/tokenContext.js";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
let query = new QueryClient()
root.render(
    <React.StrictMode>
        <QueryClientProvider client={query} >
            <TokenContextProvider>
                <App />
            </TokenContextProvider>
        </QueryClientProvider>
    </React.StrictMode>
);


// TODO List: 
//? 1- cart operation. 
//? 2- Payment operation.
//? 3- Responsive design. 
//? 4- reviews.
//? 5- fix Footer.
//? 6- add catogeries sideBar.  
//? 7- Update product cart.  
//? 8- Whislist.  
//? 8- Searching.  


