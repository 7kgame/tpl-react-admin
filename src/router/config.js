/* eslint-disable global-require */
import React from 'react';
import _dvaDynamic from 'dva/dynamic'

const routes = [{
    "path": "/user",
    "component": _dvaDynamic({

      component: () => import( /* webpackChunkName: "layouts__UserLayout" */ '@/layouts/UserLayout'),
      LoadingComponent: require('@/components/PageLoading/index').default,
    }),
    "routes": [{
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "name": "login",
        "component": _dvaDynamic({

          component: () => import( /* webpackChunkName: "p__User__Login" */ '@/pages/User/Login'),
          LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
        }),
        "exact": true
      },
      {
        "path": "/user/register",
        "name": "register",
        "component": _dvaDynamic({

          component: () => import( /* webpackChunkName: "p__User__Register" */ '@/pages/User/Register'),
          LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
        }),
        "exact": true
      },
      {
        "path": "/user/register-result",
        "name": "register.result",
        "component": _dvaDynamic({

          component: () => import( /* webpackChunkName: "p__User__RegisterResult" */ '@/pages/User/RegisterResult'),
          LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
        }),
        "exact": true
      },
      {
        "component": _dvaDynamic({

          component: () => import( /* webpackChunkName: "p__404" */ '@/pages/404'),
          LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
        }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
          pagesPath: 'src/pages',
          hasRoutesInConfig: true
        })
      }
    ]
  },
  {
    "path": "/",
    "component": _dvaDynamic({

      component: () => import( /* webpackChunkName: "layouts__BasicLayout" */ '@/layouts/BasicLayout'),
      LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
    }),
    "Routes": [require('@/pages/Authorized').default],
    "routes": [{
        "path": "/",
        "redirect": "/dashboard/analysis",
        "authority": [
          "admin",
          "user"
        ],
        "exact": true
      },
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dashboard",
        "routes": [{
            "path": "/dashboard/analysis",
            "name": "analysis",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Dashboard__Analysis" */ '@/pages/Dashboard/Analysis'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "name": "monitor",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Dashboard__Monitor" */ '@/pages/Dashboard/Monitor'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "name": "workplace",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Dashboard__Workplace" */ '@/pages/Dashboard/Workplace'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
              pagesPath: 'src/pages',
              hasRoutesInConfig: true
            })
          }
        ]
      },
      {
        "path": "/form",
        "icon": "form",
        "name": "form",
        "routes": [{
            "path": "/form/basic-form",
            "name": "basicform",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Forms__BasicForm" */ '@/pages/Forms/BasicForm'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/form/step-form",
            "name": "stepform",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Forms__StepForm" */ '@/pages/Forms/StepForm'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "hideChildrenInMenu": true,
            "routes": [{
                "path": "/form/step-form",
                "redirect": "/form/step-form/info",
                "exact": true
              },
              {
                "path": "/form/step-form/info",
                "name": "info",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__Forms__StepForm" */ '@/pages/Forms/StepForm/Step1'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "path": "/form/step-form/confirm",
                "name": "confirm",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__Forms__StepForm" */ '@/pages/Forms/StepForm/Step2'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "path": "/form/step-form/result",
                "name": "result",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__Forms__StepForm" */ '@/pages/Forms/StepForm/Step3'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
                  pagesPath: 'src/pages',
                  hasRoutesInConfig: true
                })
              }
            ]
          },
          {
            "path": "/form/advanced-form",
            "name": "advancedform",
            "authority": [
              "admin"
            ],
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Forms__AdvancedForm" */ '@/pages/Forms/AdvancedForm'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
              pagesPath: 'src/pages',
              hasRoutesInConfig: true
            })
          }
        ]
      },
      {
        "path": "/list",
        "icon": "table",
        "name": "list",
        "routes": [{
            "path": "/list/table-list",
            "name": "searchtable",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__List__TableList" */ '@/pages/List/TableList'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/list/basic-list",
            "name": "basiclist",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__List__BasicList" */ '@/pages/List/BasicList'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/list/card-list",
            "name": "cardlist",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__List__CardList" */ '@/pages/List/CardList'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/list/search",
            "name": "searchlist",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__List__List" */ '@/pages/List/List'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "routes": [{
                "path": "/list/search",
                "redirect": "/list/search/articles",
                "exact": true
              },
              {
                "path": "/list/search/articles",
                "name": "articles",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__List__List" */ '@/pages/List/Articles'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "path": "/list/search/projects",
                "name": "projects",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__List__List" */ '@/pages/List/Projects'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "path": "/list/search/applications",
                "name": "applications",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__List__List" */ '@/pages/List/Applications'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
                  pagesPath: 'src/pages',
                  hasRoutesInConfig: true
                })
              }
            ]
          },
          {
            "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
              pagesPath: 'src/pages',
              hasRoutesInConfig: true
            })
          }
        ]
      },
      {
        "path": "/profile",
        "name": "profile",
        "icon": "profile",
        "routes": [{
            "path": "/profile/basic",
            "name": "basic",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Profile__BasicProfile" */ '@/pages/Profile/BasicProfile'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/profile/basic/:id",
            "name": "basic",
            "hideInMenu": true,
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Profile__BasicProfile" */ '@/pages/Profile/BasicProfile'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/profile/advanced",
            "name": "advanced",
            "authority": [
              "admin"
            ],
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Profile__AdvancedProfile" */ '@/pages/Profile/AdvancedProfile'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
              pagesPath: 'src/pages',
              hasRoutesInConfig: true
            })
          }
        ]
      },
      {
        "name": "result",
        "icon": "check-circle-o",
        "path": "/result",
        "routes": [{
            "path": "/result/success",
            "name": "success",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Result__Success" */ '@/pages/Result/Success'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/result/fail",
            "name": "fail",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Result__Error" */ '@/pages/Result/Error'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
              pagesPath: 'src/pages',
              hasRoutesInConfig: true
            })
          }
        ]
      },
      {
        "name": "exception",
        "icon": "warning",
        "path": "/exception",
        "routes": [{
            "path": "/exception/403",
            "name": "not-permission",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Exception__403" */ '@/pages/Exception/403'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/exception/404",
            "name": "not-find",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Exception__404" */ '@/pages/Exception/404'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/exception/500",
            "name": "server-error",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Exception__500" */ '@/pages/Exception/500'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/exception/trigger",
            "name": "trigger",
            "hideInMenu": true,
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Exception__TriggerException" */ '@/pages/Exception/TriggerException'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
              pagesPath: 'src/pages',
              hasRoutesInConfig: true
            })
          }
        ]
      },
      {
        "name": "account",
        "icon": "user",
        "path": "/account",
        "routes": [{
            "path": "/account/center",
            "name": "center",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Account__Center__Center" */ '@/pages/Account/Center/Center'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "routes": [{
                "path": "/account/center",
                "redirect": "/account/center/articles",
                "exact": true
              },
              {
                "path": "/account/center/articles",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__Account__Center__Center" */ '@/pages/Account/Center/Articles'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "path": "/account/center/applications",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__Account__Center__Center" */ '@/pages/Account/Center/Applications'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "path": "/account/center/projects",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__Account__Center__Center" */ '@/pages/Account/Center/Projects'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
                  pagesPath: 'src/pages',
                  hasRoutesInConfig: true
                })
              }
            ]
          },
          {
            "path": "/account/settings",
            "name": "settings",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Account__Settings__Info" */ '@/pages/Account/Settings/Info'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "routes": [{
                "path": "/account/settings",
                "redirect": "/account/settings/base",
                "exact": true
              },
              {
                "path": "/account/settings/base",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__Account__Settings__Info" */ '@/pages/Account/Settings/BaseView'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "path": "/account/settings/security",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__Account__Settings__Info" */ '@/pages/Account/Settings/SecurityView'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "path": "/account/settings/binding",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__Account__Settings__Info" */ '@/pages/Account/Settings/BindingView'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "path": "/account/settings/notification",
                "component": _dvaDynamic({

                  component: () => import( /* webpackChunkName: "p__Account__Settings__Info" */ '@/pages/Account/Settings/NotificationView'),
                  LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
                }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
                  pagesPath: 'src/pages',
                  hasRoutesInConfig: true
                })
              }
            ]
          },
          {
            "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
              pagesPath: 'src/pages',
              hasRoutesInConfig: true
            })
          }
        ]
      },
      {
        "name": "editor",
        "icon": "highlight",
        "path": "/editor",
        "routes": [{
            "path": "/editor/flow",
            "name": "flow",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Editor__GGEditor__Flow" */ '@/pages/Editor/GGEditor/Flow'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/editor/mind",
            "name": "mind",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Editor__GGEditor__Mind" */ '@/pages/Editor/GGEditor/Mind'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "path": "/editor/koni",
            "name": "koni",
            "component": _dvaDynamic({

              component: () => import( /* webpackChunkName: "p__Editor__GGEditor__Koni" */ '@/pages/Editor/GGEditor/Koni'),
              LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
            }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
              pagesPath: 'src/pages',
              hasRoutesInConfig: true
            })
          }
        ]
      },
      {
        "component": _dvaDynamic({

          component: () => import( /* webpackChunkName: "p__404" */ '@/pages/404'),
          LoadingComponent: require('F:/workSpace/tpl-react-ap/src/components/PageLoading/index').default,
        }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
          pagesPath: 'src/pages',
          hasRoutesInConfig: true
        })
      }
    ]
  },
  {
    "component": () => React.createElement(require('F:/workSpace/tpl-react-ap/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
      pagesPath: 'src/pages',
      hasRoutesInConfig: true
    })
  }
];

export default routes;
