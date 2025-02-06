class AppController {
    static getHomepage(request, response) {
      response.send(200, "Hello ALX!");
    }
  }
  
  export default AppController;