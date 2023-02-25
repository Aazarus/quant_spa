import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnDestroy {
  public forecasts: WeatherForecast[] = [];
  public title = 'Weather Forecast';

  public displayedColumns = ['dateFormatted', 'temperatureC', 'temperatureF', 'summary'];

  private weatherSub: Subscription;

  constructor(http: HttpClient) {
    const baseUrl = environment.baseUrl;
    this.weatherSub = http.get<WeatherForecast[]>(baseUrl + 'WeatherForecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  ngOnDestroy(): void {
    if (!!this.weatherSub) {
      this.weatherSub.unsubscribe();
    }
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
