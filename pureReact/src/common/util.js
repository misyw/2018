export  const Environment = {
  'yuwei':'www.yuwei.com',
  'master':'www.正式设备版.com',
  'masterTEST':'www.测试设备版.com',
  'trunk':'www.商务版.com',
  'trunkTEST':'www.200测试版本.com'
}
export const  _local = Environment[process.env.objName];// process.env.objName