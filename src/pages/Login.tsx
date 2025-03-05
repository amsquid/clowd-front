import { SyntheticEvent, useState } from "react";
import Cookies from "universal-cookie";
import Alert from "../components/Alert";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [target, setTarget] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(<p></p>);
	const [showError, setShowError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [loggingIn, setLoggingIn] = useState(true);

	const navigate = useNavigate();

	const checkFields = (): boolean => {
		if (target === "") {
			setError(<p>Please enter a target IP</p>);
			setShowError(true);
			return false;
		}

		if (username === "") {
			setError(<p>Please enter a username</p>);
			setShowError(true);
			return false;
		}

		if (password === "") {
			setError(<p>Please enter a password</p>);
			setShowError(true);
			return false;
		}

		return true;
	};

	const attemptLogin = () => {
		if (!checkFields()) return;

		(async () => {
			setLoading(true);

			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username: username, password: password }),
			};

			await fetch("http://" + target + ":3000/login", requestOptions)
				.then((res) => res.json())
				.then((data) => {
					const loggedin = data["logged-in"];

					if (loggedin) {
						const cookies = new Cookies();
						cookies.set("token", data["token"]);

						navigate("/dashboard", { replace: true });
					} else {
						setError(<p>Invalid Credentials</p>);
						setShowError(true);
						setLoading(false);
					}
				})
				.catch((error: Error) => {
					console.log(error.message);

					setError(<p>Unable to connect to server</p>);
					setShowError(true);
					setLoading(false);
				});
		})();
	};

	const attemptRegister = () => {
		if (!checkFields()) return;

		(async () => {
			setLoading(true);

			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username: username, password: password }),
			};

			await fetch("http://" + target + ":3000/register", requestOptions)
				.then((res) => res.json())
				.then((data) => {
					const registered = data["registered"];

					if (registered) {
						console.log("Registered");
						setShowError(false);
						setLoading(false);
					} else {
						setError(<p>Failed to register</p>);
						setShowError(true);
						setLoading(false);
					}
				})
				.catch((error: Error) => {
					console.log(error.message);

					setError(<p>Unable to connect to server</p>);
					setShowError(true);
					setLoading(false);
				});
		})();
	};

	const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;

		if (target.name === "target") {
			setTarget(target.value);
		}

		if (target.name === "username") {
			setUsername(target.value);
		}

		if (target.name === "password") {
			setPassword(target.value);
		}
	};

	return (
		<div>
			<div className="auth-options">
				<h3
					className={loggingIn ? "auth-chosen" : "auth-notchosen"}
					onClick={() => setLoggingIn(true)}
				>
					Login
				</h3>
				<h3
					className={!loggingIn ? "auth-chosen" : "auth-notchosen"}
					onClick={() => setLoggingIn(false)}
				>
					Register
				</h3>
			</div>
			<div className="form">
				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingInput"
						placeholder="Target IP"
						name="target"
						onChange={handleChange}
					/>
					<label htmlFor="floatingInput">Target IP</label>
				</div>
				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingInput"
						placeholder="Username"
						name="username"
						onChange={handleChange}
					/>
					<label htmlFor="floatingInput">Username</label>
				</div>
				<div className="form-floating">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						name="password"
						placeholder="Password"
						onChange={handleChange}
					/>
					<label htmlFor="floatingPassword">Password</label>
				</div>
				<button
					type="button"
					className="btn btn-primary"
					onClick={loggingIn ? attemptLogin : attemptRegister}
					disabled={loading}
				>
					{loggingIn ? "Login" : "Register"}
				</button>
				{showError && <Alert type="danger">{error}</Alert>}
			</div>
		</div>
	);
};

export default Login;
