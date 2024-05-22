import { Inject, Injectable } from '@angular/core';
import { Client } from '../entities/client';
import { HttpClient } from '@angular/common/http';
import { TOTS_CORE_PROVIDER, TotsBaseHttpService, TotsCoreConfig, TotsListResponse, TotsQuery } from '@tots/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends TotsBaseHttpService<Client> {

  constructor(
    @Inject(TOTS_CORE_PROVIDER) protected override config: TotsCoreConfig,
    protected override http: HttpClient,
  ) {
    super(config, http);
    this.basePathUrl = 'https://agency-coda.uc.r.appspot.com';
  }

  override list(query: Partial<TotsQuery>): Observable<TotsListResponse<Client>> {
    return this.http.post(`${this.basePathUrl}/client/list`, query) as Observable<TotsListResponse<Client>>;
  }

  override removeById(itemId: number): Observable<{ deletes: Array<number> }> {
    return this.http.delete(`${this.basePathUrl}/client/remove/${itemId}`) as Observable<{ deletes: Array<number> }>
  }

  override update(item: Client): Observable<Client> {
    return this.http.post(`${this.basePathUrl}/client/save`, item) as Observable<Client>;
  }
}
