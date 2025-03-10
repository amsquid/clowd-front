import User from "../User";

const FileExplorer = () => {
	const user: User = User.getInstance();

	console.log(user.target);

	return (
		<div className="files">
			<ul className="list-group">
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
				<li className="list-group-item">A fourth item</li>
				<li className="list-group-item">And a fifth one</li>
			</ul>
		</div>
	);
};

export default FileExplorer;
