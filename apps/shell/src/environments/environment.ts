
export const environment = {
  production: false,
  apiUrl: 'https://mackservices.solverminds.net',
  baseUrl: 'http://localhost:',
  remotes: [
    {
      projectName: 'app1',
      portOrPath: '4201',
      routerPath: 'app-1'
    },
    {
      projectName: 'app2',
      portOrPath: '4202',
      routerPath: 'app-2'
    },
    {
      projectName: 'app3',
      portOrPath: '4203',
      routerPath: 'app-3'
    },
    {
      projectName: 'app4',
      portOrPath: '4204',
      routerPath: 'app-4'
    }
  ]
};
