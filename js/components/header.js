import ProfileService from "../services/profile.service.js";

class Header {
  constructor() {
    const user = document.getElementById("user");
    return this._fetchProfile(user);
  }

  static template = `<header>
        <h1 class="title">Example</h1>
        <div id="user" class="user"></div>
    </header>`;

  _fetchProfile = async (user) => {
    const profile = await ProfileService.fetchProfile();
    const { name, email } = profile;
    user.innerHTML = `
                <div class="data">
                    <div class="name">${name}</div>
                    <div class="email">${email}</div>
                </div>
                <div class="avatar">${this._getAvatar(name)}</div>
            `;
  };

  _getAvatar = (name) =>
    name
      .split(" ")
      .map((x) => x.substring(0, 1))
      .join("");
}

export default Header;
