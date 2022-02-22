export interface Navigation {
  navigate: (route: string, properties: any) => {};
}

export interface ReactNavigationRoute {
  key: string;
  name: string;
  params: {
    name: string;
  };
  path: string;
}
