import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { IStreamResult } from '@microsoft/signalr/src/Stream';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private connection: signalR.HubConnection;
  private connectionId: string;

  constructor() {
    const url = environment.baseUrl;
    this.connection = new signalR.HubConnectionBuilder().withUrl(`${url}stockDataHub`).build();
    this.connection.start();
    this.connection.on("Connected", (id: string) => {
      this.connectionId = id;
    });
  }

  public async startStream(ticker: string, start: string, end: string, interval: number): Promise<IStreamResult<any>> {
    if (this.connection.state === signalR.HubConnectionState.Disconnected) {
      await this.connection.start();
    }

    return this.connection.stream("SendStock", ticker, start, end, interval);
  }
}
