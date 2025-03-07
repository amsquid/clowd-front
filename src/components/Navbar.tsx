interface Props {
	handleClick(item: string): void;
	navBarItems: string[];
}

const Navbar = ({ handleClick, navBarItems }: Props) => {
	return (
		<div className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<p className="navbar-brand">Clowd</p>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						{navBarItems.map((value: string, idx: number) => (
							<li className="nav-item" key={idx} aria-label={value}>
								<a
									className="nav-link active"
									aria-current="page"
									href="#"
									onClick={() => handleClick(value)}
								>
									{value}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
