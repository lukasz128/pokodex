import { HttpClient } from '@angular/common/http';
import { Directive, inject, InjectionToken } from '@angular/core';
import { environment } from 'apps/client/src/environments/environment.dev';

export const environmentApiUrlToken = new InjectionToken<
  typeof environment.rootUrl
>('Environemnt api url token', {
  providedIn: 'root',
  factory: () => {
    if (environment.production) return environment.rootUrl;

    // reference to "/api" from proxy.config.json
    return '/api';
  },
});

@Directive()
export class ApiService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _apiPrefix = inject(environmentApiUrlToken);

  protected get<TResponse>(...params: Parameters<typeof this._httpClient.get>) {
    const [url, options] = params;
    const computedUrl = `${this._apiPrefix}/${url}`;

    return this._httpClient.get<TResponse>(computedUrl, options);
  }

  protected post<TResponse>(
    ...params: Parameters<typeof this._httpClient.post>
  ) {
    const [url, body, options] = params;
    const computedUrl = `${this._apiPrefix}/${url}`;

    return this._httpClient.post<TResponse>(computedUrl, body, options);
  }
}
