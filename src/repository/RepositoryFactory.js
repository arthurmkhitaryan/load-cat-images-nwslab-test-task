import CatRepository from "./repositories/CatRepository";

export default class RepositoryFactory {
    static cats(method, data) {
        return CatRepository[method](data);
    }
}