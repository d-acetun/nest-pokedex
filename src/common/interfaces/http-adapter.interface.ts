export interface HttoAdapter {
  get<T>(url: string): Promise<T>;
}
