class User {
	private static _instance: User;

	username: string;
	token: string;

	private constructor() {
		this.username = "";
		this.token = "";
	}

	public static getInstance() {
		return this._instance || (this._instance = new this());
	}

	public setupUser(username: string, token: string) {
		this.username = username;
		this.token = token;
	}
}

export default User;
