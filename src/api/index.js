import axios from 'axios';
//增加默认的请求路径
axios.defaults.baseURL = 'http://localhost:3000';

//拦截器
axios.interceptors.response.use((res) => {
  return res.data;//在这里统一拦截结果，把结果处理成res.data
});

//获取轮播图数据，返回promise对象
export let getSliders = () => {
  return axios.get('/sliders');
};

//获取热门图书接口
export let getHotBook = () => {
  return axios.get('/hot');
};
