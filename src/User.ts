class User {
	private static _instance: User;

	username: string;
	token: string;
	target: string;

	private constructor() {
		this.username = "";
		this.token = "";
		this.target = "";
	}

	public static getInstance() {
		return this._instance || (this._instance = new this());
	}

	public setupUser(username: string, token: string, target: string) {
		this.username = username;
		this.token = token;
		this.target = target;
	}
}

export default User;
