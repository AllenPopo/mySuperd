import http from '../common/utils/http';

export function postTestData(param) {
  // return http.post('/api/folder/get_dmc_tree_with_tblist', param);
  return http.post('https://api.powerbi.com/beta/1e4168a5-9bd1-4faa-9620-e6b1a9468474/datasets/8286908f-305c-4033-82bf-7534a7b533a2/rows?redirectedFromSignup=1&key=lKdqs5i9sNGyCFUAd%2FE%2B7oGXWSWcdehRNAvl9FTOG94s78zXhDo%2FKZ%2FPa4%2BbMxbq8pfrPgxeakWoInWs0SRPNw%3D%3D',
  param);
}