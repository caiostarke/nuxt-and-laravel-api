import type { UseFetchOptions } from '#app'

export function useApiFetch<T> (url: string | (() => string), options: UseFetchOptions<T> = {}) {
  let headers: any = {}

  const token = useCookie('XSRF-TOKEN');

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
  }

  return useFetch("http://localhost:8000" + url, {
  credentials: 'include',
  watch:false,  
  ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  })
}
