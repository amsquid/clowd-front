import { useState } from "react";
import Navbar from "../components/Navbar";

enum Menus {
	FILE_EXPLORER,
	TEXT_VIEWER,
}

const Dashboard = () => {
	const [menu, setMenu] = useState(Menus.FILE_EXPLORER);

	const menus = ["File Explorer", "Text Viewer"];

	const menuToString = (menuItem: Menus): string => {
		switch (menuItem) {
			case Menus.FILE_EXPLORER:
				return "File Explorer";
			case Menus.TEXT_VIEWER:
				return "Text Viewer";
			default:
				return "";
		}
	};

	const handleClick = (item: string) => {
		switch (item) {
			case "File Explorer":
				setMenu(Menus.FILE_EXPLORER);
				break;

			case "Text Viewer":
				setMenu(Menus.TEXT_VIEWER);
				break;
		}
	};

	return (
		<div>
			<Navbar
				handleClick={handleClick}
				selectedItem={menuToString(menu)}
				navBarItems={menus}
			/>
		</div>
	);
};

export default Dashboard;
