import { environment } from "src/environments/environment.prod";

export class AppConstants {

  static readonly appRoutes = {
    home: 'home',
    searchCar: 'search-car',
    order: 'order',
    contact: 'contact',
    register: 'register',
    login: 'login',
    logout: 'logout',
    panel: 'panel',
    portal: 'portal',
  };

  static readonly systemSettings = {
    baseDomain: environment.homeBaseUrl
  }
}
