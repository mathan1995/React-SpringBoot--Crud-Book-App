import axios from "axios";
class BookDataService {
  //Get Book As a List
  retrieveAllBooks(name) {
    //   console.warn("Retrive all books as list service Working");
    return axios.get(`http://localhost:8080/library/findAll`);
  }
  //Get Book By Id
  // retriveBooks(id) {
  //   //   console.warn("retrive by id service Working");
  //   return axios.get(`http://localhost:8080/library/geBookById/${id}`);
  // }
}

export default new BookDataService();
