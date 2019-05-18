import fetch from '../config/axios.js';

/**
 * 获取广告位参数
 */
const getBanner = (params = { reqData: {} }) => {
  return fetch({
    url: 'api/web/pageAds',
    method: 'get',
    params
  });
};

/**
 * 获取比赛列表
 */
const getMatchList = (params = { reqData: {} }) => {
  return fetch({
    url: 'api/web/indexMatchList',
    method: 'get',
    params
  });
};

/**
 * 获取友情链接
 */
const getFriendsList = (params = { reqData: {} }) => {
  return fetch({
    url: 'api/web/friendLink',
    method: 'get',
    params
  });
};


/**
 * 获取比赛详情
 */
const getMatchDetail = (params = { reqData: {},id:'' }) => {
  return fetch({
    url: 'api/web/match/'+params.id,
    method: 'get'
  });
};

export default {
  getBanner,
  getMatchList,
  getFriendsList,
  getMatchDetail
};
