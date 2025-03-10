import { ReactNode, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TextViewer from "../components/TextViewer";
import { useNavigate } from "react-router-dom";
import User from "../User";
import FileExplorer from "../components/FileExplorer";

enum Menus {
	FILE_EXPLORER,
	TEXT_VIEWER,
}

const Dashboard = () => {
	const [menu, setMenu] = useState(Menus.FILE_EXPLORER);

	const menus = ["File Explorer", "Text Viewer"];

	const navigate = useNavigate();
	const user: User = User.getInstance();

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

	const getActiveMenu = (): ReactNode => {
		switch (menu) {
			case Menus.FILE_EXPLORER:
				return <FileExplorer />;
			case Menus.TEXT_VIEWER:
				return <TextViewer />;
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

	useEffect(() => {
		if (user.target == "") navigate("/");
	}, []);

	return (
		<div className="dashboard">
			<Navbar
				handleClick={handleClick}
				selectedItem={menuToString(menu)}
				navBarItems={menus}
			/>
			{getActiveMenu()}
		</div>
	);
};

export default Dashboard;
