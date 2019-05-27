import {
  formatNumber
} from './tool';

const raidersInfo = [{
  infoTitle: '面对感情',
  raidersTitle: '不将就、不随便，不轻易',
  leftDesc: '找到你的 感情弱点',
  rightDesc: '告诉你 脱单的秘诀',
  index: 0
},
{
  infoTitle: '喜欢一个人',
  raidersTitle: '始于颜值，陷于才华，忠于人品',
  leftDesc: '看到另一半 的各项指数',
  rightDesc: '能让你 更清晰找到 适合的对象',
  index: 1
},
{
  infoTitle: '一份长久的感情',
  raidersTitle: '需要双方的磨合与经营',
  leftDesc: '看到一起后 的感情生活',
  rightDesc: '提前看到 自己的 幸福生活',
  index: 2
}
];


function initBirthTime() {
  let arr = [];
  arr.push({
    label: '不清楚',
    value: '12:00:00'
  })
  for (let i = 0; i < 24; i++) {
    arr.push({
      label: `${formatNumber(i)}:00-${formatNumber(i)}:59`,
      value: `${i}:30:00`
    })
  }
  return arr;
}

const birthTimeList = initBirthTime()

const lockTitleList = [{
  title: '',
  lockTitle: '向目标前进 绝不错过TA'
},
{
  title: 'TA的各项指数',
  lockTitle: '了解对方特点 期待美好爱情'
},
{
  title: '适合相遇的地点',
  lockTitle: '大师预测最容易恋爱的地点 经常前去收获完美爱情'
},
{
  title: '在一起的感情生活',
  lockTitle: '大师精准预测彼此感情危机 大师支招维系稳定关系方法'
},
{
  title: '能嫁入豪门吗',
  lockTitle: '从你自身各项素质出发 精准推算你的未来'
},
{
  title: '感情专家的情感建议',
  lockTitle: '只说对的情感建议'
}
];

const config = {
  raidersInfo,
  birthTimeList,
  lockTitleList,
  pageHtml: `${window.location.protocol}//mobile.51wnl-cq.com/numberology/wnl_xplyb/index.html`
}
export default config;
