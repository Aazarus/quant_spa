import { environment } from 'src/environments/environment';
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];
  public title = 'Weather Forecast';

  public displayedColumns = ['dateFormatted', 'temperatureC', 'temperatureF', 'summary'];

  constructor(http: HttpClient) {
    const baseUrl = environment.baseUrl;
    http.get<WeatherForecast[]>(baseUrl + 'WeatherForecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
