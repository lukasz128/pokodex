import { HttpClient } from '@angular/common/http';
import { Directive, inject, InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export const environementApiUrl = new InjectionToken<
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
  private readonly _apiPrefix = inject(environementApiUrl);

  protected get<TResponse>(...params: Parameters<typeof this._httpClient.get>) {
    const [url, options] = params;
    const computedUrl = `${this._apiPrefix}/${url}`;

    return this._httpClient.get<TResponse>(computedUrl, options);
  }
}
