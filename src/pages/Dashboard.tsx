import { ReactNode, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TextViewer from "../components/TextViewer";
import { useNavigate } from "react-router-dom";
import FileExplorer from "../components/FileExplorer";

enum Menus {
	FILE_EXPLORER,
	TEXT_VIEWER,
}

const Dashboard = () => {
	const [menu, setMenu] = useState(Menus.FILE_EXPLORER);
	const [activeFile, setActiveFile] = useState("");

	const menus = ["File Explorer", "Text Viewer"];

	const navigate = useNavigate();

	const searchParams = new URLSearchParams(document.location.search);
	const ip: string = searchParams.get("target") || "";

	const onClickItem = (filename: string) => {
		setActiveFile(filename);
		setMenu(Menus.TEXT_VIEWER);
	};

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
				return <FileExplorer ip={ip} onClickItem={onClickItem} />;
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
		if (ip === "") navigate("/");
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
