let feedback = {};
const list = [{
  'name': '周先生',
  'city': '上海',
  'content': '自己测了一下，感觉还是很准的。'
},
{
  'name': '黄女士',
  'city': '北京',
  'content': '失恋之后测了测，居然真的说中了我的心事。'
},
{
  'name': '霍女士',
  'city': '重庆',
  'content': '朋友推荐的，一开始还不相信，不过这个真的很准~'
},
{
  'name': '胡先生',
  'city': '厦门',
  'content': '这个测算说的还是很详细的，感觉不错，向大家推荐！'
},
{
  'name': '朱先生',
  'city': '深圳',
  'content': '这个测算不错，好几个朋友测了都说很准。'
},
{
  'name': '白女士',
  'city': '成都',
  'content': '本来自己很迷茫的，谢谢这个测算帮我找到了方向！'
},
{
  'name': '王先生',
  'city': '新加坡',
  'content': '测算挺准的，我也让别人试了试，都觉得不错。'
},
{
  'name': '陈女士',
  'city': '海南',
  'content': '一直不太明白自己的心，测了这个我觉得我明白了。'
},
{
  'name': '蔡女士',
  'city': '河北',
  'content': '这个测算的内容比较详细，看起来很舒心。'
},
{
  'name': '冉先生',
  'city': '湖南',
  'content': '很准，确实对恋爱有很大的帮助，感谢~'
},
{
  'name': '余女士',
  'city': '新疆',
  'content': '非常准，感谢对我提供的帮助！'
},
{
  'name': '魏先生',
  'city': '天津',
  'content': '感觉分析得还是很准确的，提出的建议也很有用！'
},
{
  'name': '张先生',
  'city': '南京',
  'content': '在感情方面分析得很到位，不错不错~'
},
{
  'name': '姜女士',
  'city': '杭州',
  'content': '测出来的结果很好，我很满意。'
},
{
  'name': '蒋先生',
  'city': '广东',
  'content': '希望我能遇见这里面所说的人吧！'
},
{
  'name': '周女士',
  'city': '苏州',
  'content': '帮朋友测了测，朋友说很有用，很准！'
},
{
  'name': '陈女士',
  'city': '重庆',
  'content': '想不到我的另一半就是我一直以来期待的样子！好开心~'
},
{
  'name': '赵女士',
  'city': '嘉兴',
  'content': '好期待啊，好希望能快一点碰到！！！'
},
{
  'name': '张先生',
  'city': '郑州',
  'content': '一直都不知道什么类型的女生适合，测算结果给我指明了方向！'
},
{
  'name': '王女士',
  'city': '武汉',
  'content': '真没想到最适合我的另一半就在离我不远的地方！'
},
{
  'name': '林女士',
  'city': '贵阳',
  'content': '冥冥之中天注定，我要开始行动起来了！'
},
{
  'name': '李先生',
  'city': '成都',
  'content': '感觉我离脱单不远啦！！我要去推荐给我的同事们！'
},
{
  'name': '谢先生',
  'city': '西安',
  'content': '才经历了分手的我，重新找到了努力的方向，哈哈哈~'
},
{
  'name': '陈女士',
  'city': '江苏',
  'content': '感情方面一直都挺不顺的，原来是我没有找到对的人。'
},
{
  'name': '房女士',
  'city': '长春',
  'content': '心动了，好想快点邂逅他啊！！！'
},
{
  'name': '江先生',
  'city': '哈尔滨',
  'content': '不知道什么时候才能结束单身的我又重新燃起了斗志！'
},
{
  'name': '潘女士',
  'city': '厦门',
  'content': '早知道我的另一半是这样子的，我当初就应该鼓足勇气行动了啊！'
},
{
  'name': '左先生',
  'city': '昆明',
  'content': '结果很满意，是我喜欢的类型，嘻嘻。'
},
{
  'name': '黄先生',
  'city': '海口',
  'content': '原来是我自己没有把握住机会才会单身到现在，哎，早看到就好了。'
},
{
  'name': '沈先生',
  'city': '南宁',
  'content': '明明我已经遇到了她，只是时机不对罢了。'
}

]

list.forEach((item) => {
  item.sex = item.name.indexOf('先生') > -1;
});
feedback.list = list.concat(list);

feedback.showFeedback = function () {
  let list = document.querySelector('.feedback_list');
  let listHeight = list.getBoundingClientRect().height;
  let y = 0;
  let move = () => {
    y < listHeight / 2 ? y += 0.4 : y = 0;
    list.style.transform = 'translate3d(0, -' + y + 'px, 0)';
    list.style.webkitTransform = 'translate3d(0, -' + y + 'px, 0)';
    feedback.animation = window.requestAnimationFrame(move);
  }
  move();
}
export default feedback;
