interface Props {
	handleClick(item: string): void;
	navBarItems: string[];
	selectedItem: string;
}

const Navbar = ({ handleClick, navBarItems, selectedItem }: Props) => {
	return (
		<div className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<p className="navbar-brand">Clowd</p>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
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
				</div>
			</div>
		</div>
	);
};

export default Navbar;
