//发送ajax请求
/**
 * 1.封装功能函数
 *    1.功能点明确
 *    2. 函数内部应该保留固定代码（静态的）
 *    3. 将动态的数据抽取成形参，由使用者根据自身情况传入动态数据
 * 2. 封装功能组件
 *    1. 功能点明确
 *    2. 组件内部保留静态的代码
 *    3. 将动态的数据抽取成props参数，由使用者根据自身的情况以标签属性 的形式动态传入props数据
 *    4. 一个良好的组件应该设置组件的必要性及数据类型
 *        props:{
 *          msg:{
 *            require:true,
 *             default:默认值
 *             type: String 
 *          }         
 * 
 *        }
 */
import config from './config'
export default (url, data={}, method="GET")=>{
  return new Promise((resolve, reject)=>{
    wx.request({
      url: config.mobileURL + url,
      data,
      method,
      success:(res)=>{
        console.log('请求成功');
        resolve(res.data);
      },
      fail:(err)=>{
        reject(err);
      }
    })
  })
}

