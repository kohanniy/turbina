class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  sendForm(formData) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        poems: formData.poems
      })
    })
      .then((result) => {
        return this._getResponseData(result);
      });
  }

  getSongs() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: this.headers
    })
      .then((result) => {
        return this._getResponseData(result);
      });
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }
}

export default new Api({
  // baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-15',
  // headers: {
  //   authorization: '34b321e7-b4e4-4ac9-9db1-e3a7134426f4',
  //   'Content-Type': 'application/json'
  // }
});
