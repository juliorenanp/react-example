import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"
import Pictures from "./pages/pictures"

export function AppRoutes() {
    return (
        <Router>
            <Routes>
               <Route path="/pictures" element={<Pictures/>}/>
            </Routes>
        </Router>
    )
}