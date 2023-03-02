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
    console.log("🚀 ~ file: signalr.service.ts:17 ~ SignalrService ~ constructor ~ this.connection:", this.connection)
    this.connection.start();
    this.connection.on("Connected", (id: string) => {
      this.connectionId = id;
      console.log("🚀 ~ file: signalr.service.ts:21 ~ SignalrService ~ this.connection.on ~ this.connectionId:", this.connectionId)
    });
  }

  public startStream(ticker: string, start: string, end: string, interval: number): IStreamResult<any> {
    if (this.connection.state === signalR.HubConnectionState.Disconnected) {
      this.connection.start();
    }

    return this.connection.stream("SendStock", ticker, start, end, interval);
  }
}
