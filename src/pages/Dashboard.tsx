import { useState } from "react";
import Navbar from "../components/Navbar";

enum Menus {
	FILE_EXPLORER,
	TEXT_VIEWER,
}

const Dashboard = () => {
	const [menu, setMenu] = useState(Menus.FILE_EXPLORER);

	const menus = ["File Explorer"];

	const handleClick = (item: string) => {
		console.log(item);
	};

	return (
		<div>
			<Navbar handleClick={handleClick} navBarItems={menus} />
		</div>
	);
};

export default Dashboard;
