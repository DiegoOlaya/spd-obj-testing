import { TestBed, inject } from '@angular/core/testing';

import { PlotlyGrapherService } from './plotly-grapher.service';

describe('PlotlyGrapherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlotlyGrapherService]
    });
  });

  it('should be created', inject([PlotlyGrapherService], (service: PlotlyGrapherService) => {
    expect(service).toBeTruthy();
  }));
});
