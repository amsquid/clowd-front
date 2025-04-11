import { useEffect, useState } from "react";
import Alert from "./Alert";
import User from "../User";

interface Props {
	ip: string;
	onClickItem(filename: string): void;
}

const FileExplorer = ({ ip, onClickItem }: Props) => {
	const [files, setFiles] = useState([]);
	const [loading, setLoading] = useState(true);

	const user: User = User.getInstance();

	const requestFiles = async () => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token: user.token }),
		};

		await fetch("http://" + ip + ":3000/list-files", requestOptions)
			.then((res) => res.json())
			.then((data) => {
				setFiles(data.files);
				setLoading(false);
			})
			.catch((error: Error) => {
				console.log(error.message);
			});
	};

	useEffect(() => {
		requestFiles();
	}, []);

	return (
		<div className="files">
			{!loading && (
				<ul className="list-group">
					{files.map((file: string, idx: number) => (
						<li
							className="list-group-item"
							key={idx}
							onClick={() => onClickItem(file)}
						>
							{file}
						</li>
					))}
				</ul>
			)}
			{loading && <Alert type="primary">Loading Files</Alert>}
		</div>
	);
};

export default FileExplorer;
