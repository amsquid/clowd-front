import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Login />} />
						<Route path="login" element={<Login />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="*" element={<Page404 />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
