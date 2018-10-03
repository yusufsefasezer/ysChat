class User {
  constructor(id, login) {
    this.id = id;
    this.isLogin = login;
    this.fullname = '';

  }
  static getOnlineUser() {
    let onlineUser = [];

    this.users.forEach((value, key) => {
      if (value.isLogin) {
        onlineUser.push(value.fullname);
      }
    });

    return onlineUser;
  }
};

User.users = new Map();

module.exports = User;