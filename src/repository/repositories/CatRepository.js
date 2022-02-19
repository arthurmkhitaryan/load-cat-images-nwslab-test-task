import ApiFactory from "./../ApiFactory";

class CatRepository extends ApiFactory {
  constructor() {
    super();
  }

  getCategories() {
    return new Promise((resolve, reject) => {
      this.get("/categories")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getImages({ limit = "", categoryId = "" }) {
    return new Promise((resolve, reject) => {
      this.get(`/images/search?limit=${limit}&category_ids=${categoryId}`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default new CatRepository();
