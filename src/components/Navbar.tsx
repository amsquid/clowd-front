import User from "../User";

interface Props {
	handleClick(item: string): void;
	navBarItems: string[];
	selectedItem: string;
}

const Navbar = ({ handleClick, navBarItems, selectedItem }: Props) => {
	const user: User = User.getInstance();

	return (
		<div className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<p className="navbar-brand">Clowd</p>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{navBarItems.map((value: string, idx: number) => (
							<a
								className={
									"nav-link " + (selectedItem == value ? "active" : "")
								}
								aria-label={value}
								href="#"
								key={idx}
								onClick={() => handleClick(value)}
							>
								{value}
							</a>
						))}
					</ul>
					<span className="navbar-text">{user.username}</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
