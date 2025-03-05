import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	type: string;
}

const Alert = ({ children, type }: Props) => {
	const alertClass: string = "alert alert-" + type;

	return <div className={alertClass}>{children}</div>;
};

export default Alert;
