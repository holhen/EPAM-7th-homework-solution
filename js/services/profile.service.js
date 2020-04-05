import Http from "./http.service.js";

class ProfileService {
  static fetchProfile = async () => {
    const response = await Http.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return this._createProfileFromResponse(response);
  };

  static _createProfileFromResponse = (response) => {
    const { id, name, email } = response;
    return {
      id,
      name,
      email,
    };
  };
}

export default ProfileService;
