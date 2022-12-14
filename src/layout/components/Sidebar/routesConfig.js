const routes = [
  {
    path: '/layout/v2-sub-app',
    meta: { title: 'SUB-JAY', icon: 'record', childApp: 'v3-sub-app' },
    children: [
      {
        path: '/layout/v2-sub-app/nginx-prefix/nginx/desc',
        meta: { title: '可爱女人', icon: '', childApp: 'v2-sub-app' }
      },
      {
        path: '/layout/v2-sub-app/nginx-prefix/other/desc',
        meta: { title: '黑色幽默', icon: '', childApp: 'v2-sub-app' }
      }
    ]
  },
  {
    path: '/layout/v3-sub-app',
    meta: { title: 'SUB-十一月的肖邦', icon: 'record', childApp: 'v3-sub-app' },
    children: [
      {
        path: '/layout/v3-sub-app/#/dashboard',
        meta: { title: '夜曲', icon: '', childApp: 'v3-sub-app' }
      },
      {
        path: '/layout/v3-sub-app/#/test/index',
        meta: { title: '飘移', icon: '', childApp: 'v3-sub-app' }
      },
      {
        path: '/layout/v3-sub-app/#/monitor/index',
        meta: { title: '一路向北', icon: '', childApp: 'v3-sub-app' }
      }
    ]
  },
  {
    path: 'iframe',
    meta: { title: 'SUB-Iframe', icon: 'record' },
    children: [
      {
        path: '/iframe/iframe-page',
        meta: { title: 'SUB-Iframe', icon: '' }
      }
    ]
  }
]

export default routes
