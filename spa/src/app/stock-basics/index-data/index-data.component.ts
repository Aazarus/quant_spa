import { RepositoryService } from 'src/app/services/repository.service';
import { Component } from '@angular/core';
import { IndexData } from 'src/app/models/index-data';

@Component({
  selector: 'app-index-data',
  templateUrl: './index-data.component.html',
  styleUrls: ['./index-data.component.scss'],
})
export class IndexDataComponent {

  public title: string = "Index Data";
  public displayedCols: string[] = [
    'date',
    'ig',
    'hy',
    'spx',
    'vix'
  ];

  constructor(private repoService: RepositoryService) { }

  public get indexData(): IndexData[] {
    return this.repoService.indexData;
  }
}
