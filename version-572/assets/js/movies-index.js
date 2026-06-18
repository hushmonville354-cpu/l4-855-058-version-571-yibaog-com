const movies = [
  {
    "id": "0001",
    "title": "飞女正传粤语",
    "url": "./movie-0001.html",
    "cover": "./1.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 青春 / 犯罪",
    "tags": [
      "古惑女",
      "姐妹情",
      "九龙城寨"
    ],
    "oneLine": "1997前夕，四个在九龙城寨长大的女孩决定在金盆洗手前，做最后一单“大事”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0002",
    "title": "愿望清单",
    "url": "./movie-0002.html",
    "cover": "./2.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 奇幻",
    "tags": [
      "绝症",
      "遗愿",
      "公路片",
      "催泪",
      "治愈"
    ],
    "oneLine": "癌症晚期老奶奶的遗愿清单上写着“离婚”，可她的丈夫已经痴呆到连自己名字都忘了。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0003",
    "title": "爱情来的时候2",
    "url": "./movie-0003.html",
    "cover": "./3.jpg",
    "region": "香港",
    "type": "剧集",
    "year": "2016",
    "genre": "爱情，剧情，都市",
    "tags": [
      "单元剧",
      "浪漫",
      "都市男女"
    ],
    "oneLine": "四个独立爱情故事，串联起香港、新加坡、马来西亚和韩国，爱情来的时候从不提前通知。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0004",
    "title": "爱的沉浸式",
    "url": "./movie-0004.html",
    "cover": "./4.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "genre": "都市爱情 / 科幻互动",
    "tags": [
      "体验式恋爱",
      "虚拟现实",
      "都市情感",
      "记忆",
      "选择分支",
      "沉浸体验",
      "未来科技"
    ],
    "oneLine": "她进入一款能模拟恋爱记忆的沉浸式系统后，才发现每一次“心动”都在偷偷改写自己现实中的人生选择。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0005",
    "title": "摇滚万万岁2：传奇再续",
    "url": "./movie-0005.html",
    "cover": "./5.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 音乐",
    "tags": [
      "伪纪录片",
      "老炮",
      "巡演"
    ],
    "oneLine": "解散30年的传奇摇滚乐队再次合体，却发现自己最大的粉丝是当今最红的AI音乐制作人。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0006",
    "title": "异形基地",
    "url": "./movie-0006.html",
    "cover": "./6.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1986",
    "genre": "科幻 / 恐怖",
    "tags": [
      "外星生物",
      "密闭空间",
      "生存",
      "重口味",
      "经典"
    ],
    "oneLine": "南极科考站挖出神秘冰棺，寄生异形在极夜中猎杀所有队员，无人能逃。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0007",
    "title": "凡尔赛宫艳史",
    "url": "./movie-0007.html",
    "cover": "./7.jpg",
    "region": "法国",
    "type": "剧集",
    "year": "2023",
    "genre": "历史, 剧情, 爱情",
    "tags": [
      "宫廷",
      "路易十四",
      "权谋",
      "奢华",
      "野史"
    ],
    "oneLine": "凡尔赛宫的宫女、园丁与厨娘，用他们的眼睛揭开太阳王盛世背后的权力游戏。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0008",
    "title": "刚达",
    "url": "./movie-0008.html",
    "cover": "./8.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "科幻 / 动作 / 战争",
    "tags": [
      "机甲",
      "反战",
      "宇宙战争",
      "人机共生",
      "悲剧英雄"
    ],
    "oneLine": "在人类被AI击败的未来，最后一个旧时代机甲战士“刚达”苏醒，它必须搭载一个没受过任何训练的少年去炸毁敌人的主控核心。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0009",
    "title": "爵士丛林",
    "url": "./movie-0009.html",
    "cover": "./9.jpg",
    "region": "美国",
    "type": "动画电影",
    "year": "2025",
    "genre": "动画，音乐，奇幻",
    "tags": [
      "爵士乐",
      "动物城",
      "梦想",
      "即兴",
      "纽约"
    ],
    "oneLine": "在动物们只能演奏古典乐的严苛城市，一只吹萨克斯的流浪猫误入地下爵士丛林，发现了音乐的“不和谐”真相。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0010",
    "title": "婚礼行动",
    "url": "./movie-0010.html",
    "cover": "./10.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 爱情",
    "tags": [
      "婚礼闹剧",
      "乌龙事件",
      "错位配对"
    ],
    "oneLine": "一场婚礼上，两位伴郎与两位伴娘意外交换了身份，却各自爱上了对方的“搭档”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0011",
    "title": "黑鸟黑鸟黑莓",
    "url": "./movie-0011.html",
    "cover": "./11.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑，奇幻",
    "tags": [
      "哥特",
      "小镇疑云",
      "植物",
      "女巫"
    ],
    "oneLine": "每到黑莓成熟的季节，小镇就会有人离奇失踪，而唯一目击者是一只会学舌的黑鸟。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0012",
    "title": "老板娘3",
    "url": "./movie-0012.html",
    "cover": "./12.jpg",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2026",
    "genre": "动作",
    "tags": [
      "女性",
      "复仇",
      "街头",
      "拳拳到肉"
    ],
    "oneLine": "夜市老板娘这次惹上的不是黑帮，而是一个能操控城市监控系统的神秘黑客。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0013",
    "title": "楼台惊梦",
    "url": "./movie-0013.html",
    "cover": "./13.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "古宅",
      "戏班",
      "戏曲",
      "轮回",
      "民俗"
    ],
    "oneLine": "没落戏班住进百年古楼，每晚的练唱声里，总多出一个不属于任何人的女声。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0014",
    "title": "破处女王",
    "url": "./movie-0014.html",
    "cover": "./14.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "喜剧、青春、成长",
    "tags": [
      "高中生",
      "谣言",
      "女性反击",
      "身体自主"
    ],
    "oneLine": "高二女生被造黄谣后没有崩溃，反而把谣言当简历，在学校里开起了“破处咨询公司”。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0015",
    "title": "青春的答案",
    "url": "./movie-0015.html",
    "cover": "./15.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "青春 / 剧情 / 成长",
    "tags": [
      "高考季",
      "友谊裂痕",
      "家庭压力",
      "自我选择",
      "乡镇校园",
      "青春迷惘"
    ],
    "oneLine": "一场被父母、老师和分数推着走的高三冲刺里，三个少年在同一张试卷之外，终于开始寻找属于自己的答案。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0016",
    "title": "曼尼酒店",
    "url": "./movie-0016.html",
    "cover": "./16.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "悬疑剧情",
    "tags": [
      "悬疑",
      "酒店",
      "群像",
      "反转"
    ],
    "oneLine": "一家只在午夜开门的神秘酒店，只要入住就能实现一个愿望，代价是你最珍贵的记忆。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0017",
    "title": "烧失恶人",
    "url": "./movie-0017.html",
    "cover": "./17.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪 / 悬疑 / 剧情",
    "tags": [
      "纵火案",
      "记忆碎片",
      "双雄对决",
      "黑色电影"
    ],
    "oneLine": "一个失忆的纵火犯在狱中收到七盒录像带，里面竟记录着他未曾犯下的八宗命案。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0018",
    "title": "走佬情人节",
    "url": "./movie-0018.html",
    "cover": "./18.jpg",
    "region": "中国大陆",
    "type": "剧情片",
    "year": "2024",
    "genre": "都市爱情、黑色喜剧、悬疑",
    "tags": [
      "失踪案",
      "情人节",
      "假身份",
      "反转"
    ],
    "oneLine": "当“情人节快递”变成“失踪名单”时，这个被称为走佬的骑手要用一晚时间追回真相，也要守住自己只想好好被爱的一颗心。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0019",
    "title": "嗜血战神",
    "url": "./movie-0019.html",
    "cover": "./19.jpg",
    "region": "新西兰",
    "type": "电影",
    "year": "2005",
    "genre": "动作 / 奇幻",
    "tags": [
      "毛利文化",
      "冷兵器",
      "复仇史诗",
      "丛林追杀",
      "神话生物"
    ],
    "oneLine": "部落被灭的毛利勇士在昏迷中获得了半神血统，为了救回被献祭的灵魂，他必须猎杀丛林里的每一头恶魔。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0020",
    "title": "米老鼠的黑白动画片生涯",
    "url": "./movie-0020.html",
    "cover": "./20.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "纪录片, 动画",
    "tags": [
      "幕后",
      "考古",
      "经典",
      "致敬"
    ],
    "oneLine": "一部揭秘米奇诞生之初那些被遗忘的黑白短片的纪录片，探寻初代米奇不为人知的“暗黑”性格。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0021",
    "title": "最是橙黄橘绿时",
    "url": "./movie-0021.html",
    "cover": "./21.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2019",
    "genre": "爱情 / 剧情",
    "tags": [
      "文艺",
      "季节变迁",
      "错过"
    ],
    "oneLine": "一对青梅竹马，在十年间的每个“秋末冬初”重逢一次，每次都差一点点就能相爱。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0022",
    "title": "斗罗大陆：双神大战",
    "url": "./movie-0022.html",
    "cover": "./22.jpg",
    "region": "中国内地",
    "type": "动画电影",
    "year": "2026",
    "genre": "奇幻 / 战斗",
    "tags": [
      "神位之战",
      "武魂融合",
      "终局之战"
    ],
    "oneLine": "唐三继承海神与修罗神双神位，却引发神界规则崩塌，必须与已成敌人的小舞生死对决。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0023",
    "title": "大大哒",
    "url": "./movie-0023.html",
    "cover": "./23.jpg",
    "region": "马来西亚",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 家庭",
    "tags": [
      "南洋喜剧",
      "胖女孩逆袭",
      "网红文化"
    ],
    "oneLine": "一个梦想当网红的200斤女孩，为了变瘦住进减肥营，却发现胖胖的自己才是“流量密码”。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0024",
    "title": "凡尔杜先生",
    "url": "./movie-0024.html",
    "cover": "./24.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 犯罪",
    "tags": [
      "黑色幽默",
      "存在主义",
      "翻拍经典"
    ],
    "oneLine": "失业的奢侈品店柜哥，靠“情感杀熟”诈骗富婆为生，直到他爱上了一个比他还穷的女人。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0025",
    "title": "宿主",
    "url": "./movie-0025.html",
    "cover": "./25.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻惊悚",
    "tags": [
      "寄生",
      "外星生物",
      "身份认同"
    ],
    "oneLine": "外星寄生虫接管了人类身体，但一个男人的意识顽强地活了下来，与体内的外星人共用一具躯体展开逃亡。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0026",
    "title": "拯救圣诞老人",
    "url": "./movie-0026.html",
    "cover": "./26.jpg",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": [
      "圣诞老人被绑架",
      "黑客少年",
      "驯鹿罢工",
      "礼物工厂"
    ],
    "oneLine": "圣诞老人被一家即将破产的科技公司绑架用作AI训练数据，一个不相信圣诞节的黑客少年必须闯入防火墙。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0027",
    "title": "这个美好的世界",
    "url": "./movie-0027.html",
    "cover": "./27.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "genre": "悬疑, 奇幻, 家庭",
    "tags": [
      "反乌托邦",
      "虚假日常",
      "细思极恐",
      "反转"
    ],
    "oneLine": "一个幸福得近乎完美的家庭，每天醒来都会遗忘前一天发生的所有不幸与暴力。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0028",
    "title": "盲目的丈夫们",
    "url": "./movie-0028.html",
    "cover": "./28.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 剧情",
    "tags": [
      "婚姻",
      "心理",
      "反转",
      "人性",
      "黑色电影"
    ],
    "oneLine": "五个相互不认识的丈夫接连失踪，唯一的共同点：他们都曾参加过一个“透明婚姻”心理工作坊。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0029",
    "title": "亲切的警察",
    "url": "./movie-0029.html",
    "cover": "./29.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2026",
    "genre": "犯罪 / 喜剧 / 剧情",
    "tags": [
      "微笑杀手",
      "扫黑除恶",
      "反差萌",
      "基层警察"
    ],
    "oneLine": "韩国某小镇上，一个对所有居民都笑眯眯的派出所警察，其实是全国排名前三的顶级杀手。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0030",
    "title": "初夏的甜蜜约定",
    "url": "./movie-0030.html",
    "cover": "./30.jpg",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情, 青春, 喜剧",
    "tags": [
      "青梅竹马",
      "契约恋爱",
      "校园"
    ],
    "oneLine": "学霸少女与校霸签下“恋爱契约”，期限是整个夏天，到期后各奔东西。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0031",
    "title": "巴比伦5号：失落的传说",
    "url": "./movie-0031.html",
    "cover": "./31.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2007",
    "genre": "科幻 / 悬疑",
    "tags": [
      "太空歌剧",
      "巴比伦5号续篇",
      "宗教科幻",
      "外星考古",
      "冷战隐喻"
    ],
    "oneLine": "巴比伦5号空间站退役十年后，一名考古学家在废墟中发现了一段全息影像，里面的人说“我们从未离开”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0032",
    "title": "魄散魂离",
    "url": "./movie-0032.html",
    "cover": "./32.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1999",
    "genre": "恐怖, 灵异",
    "tags": [
      "魂魄出窍",
      "梦中杀人",
      "九七焦虑"
    ],
    "oneLine": "失眠症患者发现，只要他睡着，就会变成厉鬼在梦里杀人，而死去的人会在现实中消失。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0033",
    "title": "欲海春潮",
    "url": "./movie-0033.html",
    "cover": "./33.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 悬疑",
    "tags": [
      "不伦之恋",
      "视觉系",
      "嫉妒",
      "海岛",
      "失踪"
    ],
    "oneLine": "画家与少妇在海边别墅偷情，第二天少妇的丈夫突然来访，而少妇却凭空消失了。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0034",
    "title": "长脚怪",
    "url": "./movie-0034.html",
    "cover": "./34.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "都市传说改编",
      "民俗恐怖",
      "心理惊悚"
    ],
    "oneLine": "美国小镇接连有孩子失踪，唯一的目击者描述：凶手是一个腿有两米长、戴着高礼帽的男人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0035",
    "title": "悬崖2016",
    "url": "./movie-0035.html",
    "cover": "./35.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "自杀圣地",
      "记者",
      "网络直播",
      "反转"
    ],
    "oneLine": "2016年，跳崖圣地“悲伤悬崖”突然装上了防护网，但坠崖人数不降反增，记者调查后发现网在“另一侧”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0036",
    "title": "棕榈滩奇缘",
    "url": "./movie-0036.html",
    "cover": "./36.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 爱情",
    "tags": [
      "度假",
      "冤家",
      "豪门",
      "轻松"
    ],
    "oneLine": "破产女孩误闯佛罗里达顶级富豪度假村，被误认为是新晋贵妇，不得不与毒舌的酒店经理上演假面夫妻。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0037",
    "title": "神捕铁飞花之冤冤相报",
    "url": "./movie-0037.html",
    "cover": "./37.jpg",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2025",
    "genre": "古装 / 动作 / 悬疑 / 武侠",
    "tags": [
      "女捕快",
      "连环命案",
      "江湖恩怨",
      "以血还血",
      "身份反转"
    ],
    "oneLine": "铁飞花追查一桩灭门案时，发现所有死者都曾在十年前参与过一场针对她恩师的屠杀。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0038",
    "title": "接线追缉",
    "url": "./movie-0038.html",
    "cover": "./38.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 犯罪",
    "tags": [
      "追缉",
      "接线",
      "复仇",
      "飙车",
      "香港"
    ],
    "oneLine": "前警队接线员通过监听报警电话，独自追查杀害妻子的真凶。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0039",
    "title": "幸福的脚步",
    "url": "./movie-0039.html",
    "cover": "./39.jpg",
    "region": "泰国",
    "type": "剧集",
    "year": "2019",
    "genre": "剧情 / 家庭 / 温情",
    "tags": [
      "泰剧",
      "残疾",
      "母子",
      "创业",
      "美食"
    ],
    "oneLine": "瘫痪少年用双脚不能走路，却用双手做出了感动整个城市的美食，他在炉灶前找回了站立的尊严。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0040",
    "title": "暗杀第一夫人",
    "url": "./movie-0040.html",
    "cover": "./40.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "动作，惊悚，政治",
    "tags": [
      "青瓦台",
      "保镖",
      "内鬼",
      "反转",
      "女性动作"
    ],
    "oneLine": "女保镖被安插进青瓦台暗杀第一夫人，却在朝夕相处中与目标产生了超越敌友的复杂情感。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0041",
    "title": "我们是最棒的！",
    "url": "./movie-0041.html",
    "cover": "./41.jpg",
    "region": "瑞典",
    "type": "电影",
    "year": "2018",
    "genre": "剧情 / 音乐",
    "tags": [
      "少女",
      "朋克",
      "叛逆"
    ],
    "oneLine": "三个13岁女孩组建了一支全世界最烂的朋克乐队。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0042",
    "title": "百货战警",
    "url": "./movie-0042.html",
    "cover": "./42.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "动作, 喜剧",
    "tags": [
      "小人物英雄",
      "商场保安",
      "笨贼"
    ],
    "oneLine": "购物中心一名零武力值的胖保安，在平安夜独自面对一伙武装劫匪，他唯一的武器是对讲机和手推车。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0043",
    "title": "高于一切",
    "url": "./movie-0043.html",
    "cover": "./43.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 音乐 / 爱情",
    "tags": [
      "钢琴家",
      "阿尔茨海默",
      "遗忘与忠诚"
    ],
    "oneLine": "一位享誉世界的钢琴家被确诊早发性阿尔茨海默症，他的妻子用音符帮他找回自己。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0044",
    "title": "山多尼卡斯先生",
    "url": "./movie-0044.html",
    "cover": "./44.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2019",
    "genre": "剧情、奇幻、悬疑",
    "tags": [
      "魔幻现实主义",
      "公寓",
      "永生",
      "孤独",
      "邻居"
    ],
    "oneLine": "一栋老旧公寓里，神秘的房东山多尼卡斯先生从不出门，据说他已经活了五百年，而他的租客们正在一个接一个地消失。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0045",
    "title": "拳王国语",
    "url": "./movie-0045.html",
    "cover": "./45.jpg",
    "region": "中国大陆 / 中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 运动 / 剧情",
    "tags": [
      "拳击",
      "热血",
      "国语配音",
      "草根逆袭"
    ],
    "oneLine": "退役拳击教练老马，在地下拳场捡到了一个有天赋的孤儿，将他培养成拳王，却被黑暗势力盯上。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0046",
    "title": "民间奇谈传",
    "url": "./movie-0046.html",
    "cover": "./46.jpg",
    "region": "中国台湾 / 新加坡",
    "type": "剧集",
    "year": "1999",
    "genre": "奇幻 / 恐怖 / 古装",
    "tags": [
      "单元剧",
      "民间故事",
      "因果报应",
      "民俗"
    ],
    "oneLine": "说书人的扇子一挥，五个恐怖的民间禁忌故事接连上演，最后一个故事竟将说书人自己也卷了进去。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0047",
    "title": "今天也无异样",
    "url": "./movie-0047.html",
    "cover": "./47.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情, 喜剧, 日常",
    "tags": [
      "职场",
      "废柴",
      "幽默哲学",
      "治愈"
    ],
    "oneLine": "一个一事无成的中年上班族，每一天都告诉自己“今天也无异样”，直到世界末日真的来临。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0048",
    "title": "砸掉你的牙",
    "url": "./movie-0048.html",
    "cover": "./48.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 剧情",
    "tags": [
      "相声",
      "小镇青年",
      "传承",
      "黑色幽默"
    ],
    "oneLine": "一个濒临倒闭的乡镇曲艺社，为了活下去，被迫将传统相声改编成重金属摇滚。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0049",
    "title": "铁堡歼魔",
    "url": "./movie-0049.html",
    "cover": "./49.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 奇幻",
    "tags": [
      "僵尸",
      "清朝",
      "阵法",
      "道士"
    ],
    "oneLine": "清末，一支洋人探险队闯入铁堡，唤醒沉睡百年的僵尸将军与他麾下铁尸军团。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0050",
    "title": "穿墙之弹",
    "url": "./movie-0050.html",
    "cover": "./50.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "genre": "战争 / 悬疑 / 剧情",
    "tags": [
      "冷战柏林",
      "子弹穿墙",
      "狙击对决",
      "历史悬案"
    ],
    "oneLine": "1961年柏林墙刚建成的夜晚，一颗子弹穿过三堵墙打死东德哨兵，至今无人知道子弹从哪里来。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0051",
    "title": "天空之城",
    "url": "./movie-0051.html",
    "cover": "./51.jpg",
    "region": "日本",
    "type": "电影",
    "year": "1986",
    "genre": "动画，冒险，奇幻",
    "tags": [
      "宫崎骏",
      "飞行石",
      "冒险",
      "环保",
      "经典"
    ],
    "oneLine": "少女从天空坠落，身上携带的飞行石是找到传说中漂浮帝国拉普达的唯一线索。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0052",
    "title": "李祥和的婚事",
    "url": "./movie-0052.html",
    "cover": "./52.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2028",
    "genre": "剧情 / 黑色幽默",
    "tags": [
      "大龄青年",
      "荒诞相亲",
      "小镇叙事",
      "骗婚",
      "方言喜剧"
    ],
    "oneLine": "四十二岁的李祥和为了应付母亲，把镇上所有未婚女性都相了个遍，却发现自己爱上了那个专门帮他写情书的婚骗托儿。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0053",
    "title": "常春藤",
    "url": "./movie-0053.html",
    "cover": "./53.jpg",
    "region": "美国, 中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑, 校园",
    "tags": [
      "藤校",
      "精英教育",
      "阶层",
      "秘密社团"
    ],
    "oneLine": "华裔女孩在藤校发现精英社团的秘密：每年都要“处理”掉一名成绩垫底的学生。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0054",
    "title": "重回越战",
    "url": "./movie-0054.html",
    "cover": "./54.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2007",
    "genre": "战争, 动作",
    "tags": [
      "老兵",
      "穿越",
      "丛林",
      "创伤"
    ],
    "oneLine": "一位越战老兵被闪电击中后穿越回1969年的战场，这次他带着未来三十年的记忆，决心救回当年的战友。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0055",
    "title": "隐墙",
    "url": "./movie-0055.html",
    "cover": "./55.jpg",
    "region": "奥地利 / 德国",
    "type": "电影",
    "year": "2012",
    "genre": "科幻, 剧情",
    "tags": [
      "末日",
      "女性",
      "独白",
      "哲学"
    ],
    "oneLine": "一个女人和一条狗被一道看不见的墙困在阿尔卑斯山牧场，墙外的一切都已静止。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0056",
    "title": "8号展品",
    "url": "./movie-0056.html",
    "cover": "./56.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 恐怖",
    "tags": [
      "博物馆",
      "克苏鲁",
      "禁忌",
      "怪物"
    ],
    "oneLine": "自然历史博物馆的8号库房里，一件编号“8”的无名展品，正在将参观者变成活化石。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0057",
    "title": "龙虎群英",
    "url": "./movie-0057.html",
    "cover": "./57.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1993",
    "genre": "动作 / 犯罪",
    "tags": [
      "双雄",
      "卧底",
      "兄弟情",
      "港式暴力美学"
    ],
    "oneLine": "警方最悍的虎和黑帮最忠的龙，两个最强的人发现彼此是失散多年的亲兄弟。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0058",
    "title": "巨人",
    "url": "./movie-0058.html",
    "cover": "./58.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2016",
    "genre": "剧情 / 西部 / 家庭",
    "tags": [
      "德州",
      "家族",
      "石油",
      "三代人"
    ],
    "oneLine": "德州牧场主家族三代人横跨四十年，从养牛到挖油，这片土地让他们暴富，也让他们变成另一种巨人。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0059",
    "title": "一命",
    "url": "./movie-0059.html",
    "cover": "./59.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 武士",
    "tags": [
      "切腹反转",
      "诈欺与尊严",
      "一人破城",
      "黑泽明致敬"
    ],
    "oneLine": "一名浪人为赎回被卖为娼的女儿，只身踏入领主的“切腹仲裁场”，用假肚子骗过所有剑客，直到遇到一个也做过父亲的老武士。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0060",
    "title": "麦肯尼加省",
    "url": "./movie-0060.html",
    "cover": "./60.jpg",
    "region": "阿根廷",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪 / 剧情",
    "tags": [
      "黑帮",
      "政商勾结",
      "小镇",
      "命运",
      "史诗"
    ],
    "oneLine": "阿根廷一个虚构省份的百年黑帮史，聚焦三代教父的崛起、疯狂与覆灭。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0061",
    "title": "特种兵王",
    "url": "./movie-0061.html",
    "cover": "./61.jpg",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2024",
    "genre": "动作 / 战争",
    "tags": [
      "军事",
      "硬核枪战",
      "丛林作战",
      "兄弟情"
    ],
    "oneLine": "退役三年的兵王为了救出被绑架的战友女儿，不得不重组小队潜入金三角毒巢。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0062",
    "title": "康斯坦丁：恶魔之城",
    "url": "./movie-0062.html",
    "cover": "./62.jpg",
    "region": "美国",
    "type": "电影 / 动画",
    "year": "2026",
    "genre": "动画 / 奇幻 / 恐怖",
    "tags": [
      "DC",
      "驱魔",
      "黑色幽默",
      "洛杉矶",
      "恶魔契约"
    ],
    "oneLine": "康斯坦丁醒来发现自己和路西法打了一个赌：如果能在天亮前救出九个被诅咒的陌生人，他的肺癌就能痊愈。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0063",
    "title": "差等生乔曦",
    "url": "./movie-0063.html",
    "cover": "./63.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "genre": "喜剧 / 青春",
    "tags": [
      "差生",
      "高考",
      "师生关系",
      "逆袭"
    ],
    "oneLine": "高三差等生乔曦被老师放弃、被同学嘲笑，她用一学期时间从年级倒数逆袭到前十，但体检报告显示她只剩三个月视力。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0064",
    "title": "曼德勒2005",
    "url": "./movie-0064.html",
    "cover": "./64.jpg",
    "region": "丹麦",
    "type": "电影",
    "year": "2005",
    "genre": "剧情, 历史",
    "tags": [
      "拉斯冯提尔",
      "道格玛",
      "奴隶制",
      "人性实验",
      "讽刺"
    ],
    "oneLine": "在美国深南部的曼德勒庄园，废除奴隶制后，黑奴们却投票要求继续为奴。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0065",
    "title": "我的家乡在陕西第二季",
    "url": "./movie-0065.html",
    "cover": "./65.jpg",
    "region": "中国大陆",
    "type": "纪录片剧集",
    "year": "2024",
    "genre": "纪录片",
    "tags": [
      "乡土",
      "人文",
      "变迁",
      "美食",
      "温情"
    ],
    "oneLine": "离开大城市的外卖员回到陕北老家，用无人机意外拍出了爆红全网的黄土高原四季歌。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0066",
    "title": "诱捕正义",
    "url": "./movie-0066.html",
    "cover": "./66.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "暗网",
      "私刑正义",
      "社会派推理",
      "女性复仇"
    ],
    "oneLine": "六个在暗网上买卖女性受害视频的账号同时被盗，接着，那些视频里施暴的男人开始一个个以视频里同样的死法死去。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0067",
    "title": "西游记1996国语版",
    "url": "./movie-0067.html",
    "cover": "./67.jpg",
    "region": "中国台湾 / 新加坡",
    "type": "剧集",
    "year": "1996",
    "genre": "古装 / 神话 / 动作",
    "tags": [
      "经典翻拍",
      "取经之路",
      "人性妖性",
      "实景特效"
    ],
    "oneLine": "1996年融合新加坡与台湾班底的西游改编，唐僧师徒在妖邪横行的世道里修心破劫。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0068",
    "title": "反安慰剂",
    "url": "./movie-0068.html",
    "cover": "./68.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "心理惊悚，剧情",
    "tags": [
      "心理暗示",
      "医患关系",
      "实验疗法",
      "反转"
    ],
    "oneLine": "一位心理医生让病人相信他的病无药可救，结果病人真的死了——尽管他根本没病。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0069",
    "title": "风速一千里",
    "url": "./movie-0069.html",
    "cover": "./69.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2013",
    "genre": "冒险/运动",
    "tags": [
      "帆船",
      "环球航海",
      "孤身对抗风暴",
      "真实事件改编"
    ],
    "oneLine": "独臂航海家参加单人环球帆船赛，在南大洋遭遇百年一遇的冰风暴。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0070",
    "title": "祸起高利贷",
    "url": "./movie-0070.html",
    "cover": "./70.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪, 剧情",
    "tags": [
      "高利贷",
      "复仇",
      "底层",
      "黑色电影"
    ],
    "oneLine": "老实人为还债误入高利贷陷阱，最终选择用极端手段让整个吸血链条陪葬。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0071",
    "title": "野女王",
    "url": "./movie-0071.html",
    "cover": "./71.jpg",
    "region": "美国 / 澳大利亚",
    "type": "电视剧",
    "year": "2023",
    "genre": "动作、冒险、剧情",
    "tags": [
      "女性复仇",
      "荒野求生",
      "黑帮",
      "母性"
    ],
    "oneLine": "城市女医生被迫带着孩子在澳洲荒野逃亡，身后是黑帮追杀，身前是无尽荒漠。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0072",
    "title": "苏洛对玛奇斯特",
    "url": "./movie-0072.html",
    "cover": "./72.jpg",
    "region": "墨西哥 / 美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 冒险",
    "tags": [
      "蒙面侠",
      "拉丁英雄",
      "大乱斗",
      "多重宇宙"
    ],
    "oneLine": "跨越时空的拉丁英雄大集结，佐罗与玛奇斯特在一场疯狂的穿越中相遇，却发现彼此才是最大的敌人。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0073",
    "title": "医妃难囚第三季",
    "url": "./movie-0073.html",
    "cover": "./73.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "古装, 甜宠, 穿越",
    "tags": [
      "女医",
      "穿越",
      "王爷",
      "医疗",
      "权斗"
    ],
    "oneLine": "女军医穿越成和亲王妃，想用现代医术逃婚，却顺手治好了敌国王爷的绝症，被绑去当了王妃。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0074",
    "title": "不见不散",
    "url": "./movie-0074.html",
    "cover": "./74.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "爱情, 剧情, 都市",
    "tags": [
      "异地恋",
      "约定",
      "十年之约",
      "催泪"
    ],
    "oneLine": "大学毕业那天他们约定：十年后如果都还单身，就在学校梧桐树下不见不散。第十年，女孩去了，男孩没来。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0075",
    "title": "钢铁大伍：救国的铁箱子",
    "url": "./movie-0075.html",
    "cover": "./75.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "科幻/战争/冒险",
    "tags": [
      "机甲",
      "二战",
      "穿越",
      "热血"
    ],
    "oneLine": "二战末期，日本少年驾驶代号“铁箱子”的落后坦克，与未来穿越来的机甲军团死战。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0076",
    "title": "魔法先生 另一个世界",
    "url": "./movie-0076.html",
    "cover": "./76.jpg",
    "region": "中国大陆",
    "type": "奇幻冒险电影",
    "year": "2028",
    "genre": "奇幻, 冒险, 成长, 动作, 轻喜剧",
    "tags": [
      "平行世界",
      "魔法规则",
      "青年成长",
      "命运重写",
      "学院阴谋",
      "互助冒险"
    ],
    "oneLine": "平凡图书管理员周砚意外获得一枚会发声的指环，发现自己不是被选中的天才，而是被召回的“世界修补者”，必须在两界之间替被遗忘者改写命运。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0077",
    "title": "奔．奔．奔",
    "url": "./movie-0077.html",
    "cover": "./77.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "运动励志",
    "tags": [
      "跑步",
      "家庭",
      "和解",
      "公路",
      "中年"
    ],
    "oneLine": "中年废柴父亲为了逃避债务，报名了一场环岛马拉松，却发现女儿偷偷跟在他身后跑。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0078",
    "title": "花青歌",
    "url": "./movie-0078.html",
    "cover": "./78.jpg",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2023",
    "genre": "古装、悬疑、爱情",
    "tags": [
      "穿越",
      "探案",
      "契约婚姻",
      "甜虐",
      "身份互换"
    ],
    "oneLine": "现代女法医穿越成古代和亲公主，为逃婚与敌国间谍头子签下假夫妻契约，却在联手破案时发现他竟是自己的验尸“死者”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0079",
    "title": "施陶芬贝格–真正的故事",
    "url": "./movie-0079.html",
    "cover": "./79.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "genre": "历史 / 传记 / 战争",
    "tags": [
      "刺杀希特勒",
      "二战",
      "未遂政变"
    ],
    "oneLine": "1944年“7.20”刺杀希特勒事件全记录，聚焦施陶芬贝格上校从英雄到叛国者再到抵抗象征的心路历程。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0080",
    "title": "噗通噗通我的人生",
    "url": "./movie-0080.html",
    "cover": "./80.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 奇幻 / 家庭",
    "tags": [
      "心跳",
      "换心",
      "记忆",
      "治愈",
      "青春"
    ],
    "oneLine": "叛逆少女移植了优等生的心脏后，总能听到不属于自己的心跳声与暗恋。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0081",
    "title": "惹不起的千岁大人",
    "url": "./movie-0081.html",
    "cover": "./81.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "古装, 甜宠, 奇幻, 喜剧",
    "tags": [
      "千年僵尸",
      "欢喜冤家",
      "反差萌"
    ],
    "oneLine": "考古队女队长意外唤醒千年“活祖宗”，这位法力无边的千岁大人不仅赖在她家不走，还非要报她先祖的救命之恩。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0082",
    "title": "白头山",
    "url": "./movie-0082.html",
    "cover": "./82.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2019",
    "genre": "灾难, 动作",
    "tags": [
      "火山喷发",
      "韩式灾难",
      "兄弟情",
      "特效"
    ],
    "oneLine": "白头山火山突然爆发，韩国一半国土被毁，一队人马必须潜入朝鲜偷取核弹头诱发山体减压。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0083",
    "title": "危险游戏2022",
    "url": "./movie-0083.html",
    "cover": "./83.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "惊悚、犯罪、悬疑",
    "tags": [
      "暗网",
      "直播",
      "大逃杀",
      "反转"
    ],
    "oneLine": "六名网红受邀参加“千万美金密室逃脱”直播，才意识到自己不是玩家，而是一群富豪观众押注的猎物。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0084",
    "title": "狼牙魔咒",
    "url": "./movie-0084.html",
    "cover": "./84.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻, 冒险",
    "tags": [
      "斯拉夫神话",
      "狼人",
      "诅咒",
      "冰雪"
    ],
    "oneLine": "一名牧羊少年意外拔出了狼王的神圣獠牙，在月圆之夜变成了最后的狼人守护者。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0085",
    "title": "火星生活",
    "url": "./movie-0085.html",
    "cover": "./85.jpg",
    "region": "英国",
    "type": "TV剧集",
    "year": "2018",
    "genre": "科幻, 悬疑, 剧情",
    "tags": [
      "穿越",
      "警匪",
      "70年代",
      "意识流",
      "翻拍"
    ],
    "oneLine": "警探被车撞后醒来发现自己在1973年，他到底是在过去，还是在火星的梦里？",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0086",
    "title": "虎鲨在行动",
    "url": "./movie-0086.html",
    "cover": "./86.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 冒险",
    "tags": [
      "走私",
      "虎鲨",
      "东南亚",
      "水下打斗"
    ],
    "oneLine": "为追回被抢走的海关证物，一个保安和一条虎鲨在走私船上联手了。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0087",
    "title": "糊涂好孕姐第二季",
    "url": "./movie-0087.html",
    "cover": "./87.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧, 家庭",
    "tags": [
      "情景喜剧",
      "孕傻",
      "乌龙事件",
      "治愈"
    ],
    "oneLine": "当迷糊宝妈怀上二胎，她的“孕傻”技能升级到了全新高度，甚至差点把大宝弄丢在超市。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0088",
    "title": "啊，野麦峠",
    "url": "./movie-0088.html",
    "cover": "./88.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 历史, 女性",
    "tags": [
      "缫丝女工",
      "明治时代",
      "底层苦难",
      "社会写实"
    ],
    "oneLine": "明治末年，一群穷苦少女翻越野麦峠去缫丝厂打工，以为能改变命运，却走进了炼狱。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0089",
    "title": "禁断动画48",
    "url": "./movie-0089.html",
    "cover": "./89.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "genre": "恐怖，惊悚，伪纪录片",
    "tags": [
      "都市传说",
      "诅咒视频",
      "单元剧",
      "互动式惊吓"
    ],
    "oneLine": "地下论坛流出的48段被诅咒动画，每观看一段，现实中的死亡倒计时就会缩短一小时。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0090",
    "title": "大力杀手波派",
    "url": "./movie-0090.html",
    "cover": "./90.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "喜剧，动作，恐怖",
    "tags": [
      "反英雄",
      "吃菠菜",
      "黑色幽默",
      "血腥"
    ],
    "oneLine": "吃了变异菠菜后，懦弱的水手变成力大无穷的疯狂杀手，向污染海洋的黑心企业复仇。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0091",
    "title": "末代独裁",
    "url": "./movie-0091.html",
    "cover": "./91.jpg",
    "region": "英国 / 德国",
    "type": "电影",
    "year": "2006",
    "genre": "剧情 / 传记 / 历史",
    "tags": [
      "政治",
      "非洲",
      "独裁者",
      "真实改编",
      "人性"
    ],
    "oneLine": "一名苏格兰医生意外成为非洲独裁者的私人医生，却逐渐发现自己只是暴君炫耀人权的工具。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0092",
    "title": "天地万物",
    "url": "./movie-0092.html",
    "cover": "./92.jpg",
    "region": "英国 / 美国",
    "type": "剧集",
    "year": "2024",
    "genre": "奇幻 / 冒险",
    "tags": [
      "泛灵论",
      "生态寓言",
      "微观视角",
      "神话重构"
    ],
    "oneLine": "当一个小女孩获得了与世间万物对话的能力后，她发现一块石头、一滴雨和一只蚂蚁都有自己的爱恨情仇。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0093",
    "title": "桃花坞开放中 第三季",
    "url": "./movie-0093.html",
    "cover": "./93.jpg",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "genre": "真人秀",
    "tags": [
      "社交",
      "慢生活",
      "孤岛",
      "治愈",
      "撕逼"
    ],
    "oneLine": "12位过气明星被扔进无人孤岛，靠直播卖惨自救，不料集体翻红。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0094",
    "title": "浪子歌声",
    "url": "./movie-0094.html",
    "cover": "./94.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "1987",
    "genre": "音乐 / 爱情",
    "tags": [
      "流浪歌手",
      "80年代",
      "怀旧",
      "台语金曲",
      "浪子回头"
    ],
    "oneLine": "一个落魄的台语歌手，带着一把吉他和一封绝笔信，在巡回演唱的终点站遇到了改变他一生的女孩。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0095",
    "title": "小马的山村日记",
    "url": "./movie-0095.html",
    "cover": "./95.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 乡村",
    "tags": [
      "乡村振兴",
      "支教老师",
      "治愈温情"
    ],
    "oneLine": "一个来自大城市的问题少女，被父母送到偏远山村“改造”，却在这里找到了人生方向。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0096",
    "title": "大雄之宇宙英雄记",
    "url": "./movie-0096.html",
    "cover": "./96.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "动画, 冒险, 科幻",
    "tags": [
      "哆啦A梦",
      "英雄",
      "宇宙",
      "剧场版"
    ],
    "oneLine": "大雄自称是地球守护者，被外星公主招募去打怪兽，结果发现怪兽都是误入歧途的宇宙难民。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0097",
    "title": "暴风女郎",
    "url": "./movie-0097.html",
    "cover": "./97.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "动作犯罪",
    "tags": [
      "女杀手",
      "极端天气",
      "复仇",
      "黑色幽默"
    ],
    "oneLine": "一名过气女天气预报员真实身份是杀手，她利用极端天气做掩护执行复仇计划。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0098",
    "title": "科学怪猴",
    "url": "./movie-0098.html",
    "cover": "./98.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "科幻 / 惊悚",
    "tags": [
      "基因实验",
      "灵长类",
      "伦理",
      "变异",
      "暴走"
    ],
    "oneLine": "生物学家复活了死去宠物猴的大脑，却发现植入的人类基因让这只猴子拥有了操控同伴的能力。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0099",
    "title": "忌廉沟师奶",
    "url": "./movie-0099.html",
    "cover": "./99.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 家庭",
    "tags": [
      "市井",
      "师奶",
      "甜品",
      "邻里"
    ],
    "oneLine": "屋邨里五个师奶因为一盒被偷吃的忌廉蛋糕，牵扯出二十年前的黄金劫案秘密。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0100",
    "title": "国王：永远的君主",
    "url": "./movie-0100.html",
    "cover": "./100.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻 / 爱情 / 平行世界",
    "tags": [
      "君主制",
      "平行世界",
      "穿越",
      "宿命"
    ],
    "oneLine": "大韩帝国的皇帝意外开启通往“大韩民国”的门，发现自己的恋人在这里是一个恨他入骨的警察。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0101",
    "title": "情场世界波",
    "url": "./movie-0101.html",
    "cover": "./101.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 爱情, 运动",
    "tags": [
      "足球",
      "乌龙事件",
      "前任",
      "反转"
    ],
    "oneLine": "世界杯决赛夜，一个社恐程序员发给前女友的求复合短信，误发给了整个通讯录。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0102",
    "title": "群蛇出洞",
    "url": "./movie-0102.html",
    "cover": "./102.jpg",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2020",
    "genre": "惊悚, 灾难, 自然",
    "tags": [
      "动物灾难",
      "生态恐怖",
      "密室"
    ],
    "oneLine": "一座废弃矿洞下方沉睡的数十万条蛇，因为一场地震倾巢而出。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0103",
    "title": "梦断英伦",
    "url": "./movie-0103.html",
    "cover": "./103.jpg",
    "region": "英国",
    "type": "电影",
    "year": "1987",
    "genre": "剧情, 爱情",
    "tags": [
      "异国恋",
      "阶级差异",
      "悲剧",
      "1980年代",
      "伦敦"
    ],
    "oneLine": "一位中国留学生为留在伦敦嫁给英国贵族，却发现一切美好不过是精心编织的骗局。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0104",
    "title": "刽乐小丑3",
    "url": "./movie-0104.html",
    "cover": "./104.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 血腥 / 惊悚",
    "tags": [
      "小丑",
      "万圣节",
      "杀戮狂欢",
      "邪典"
    ],
    "oneLine": "万圣节之夜，一个被杀不死的恶魔小丑附身到了游乐场的旋转木马上，每转一圈，就会换一种方式杀死一个孩子。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0105",
    "title": "光荣的迷惑",
    "url": "./movie-0105.html",
    "cover": "./105.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "genre": "战争 / 心理",
    "tags": [
      "二战",
      "英雄幻灭",
      "精神创伤",
      "黑色幽默"
    ],
    "oneLine": "二战末期，一个被授予铁十字勋章的17岁士兵，踏上了亲手毁掉自己“英雄事迹”的逃亡路。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0106",
    "title": "云中行走",
    "url": "./movie-0106.html",
    "cover": "./106.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2015",
    "genre": "传记，冒险，剧情",
    "tags": [
      "走钢丝",
      "双子塔",
      "梦想",
      "真实事件",
      "勇气"
    ],
    "oneLine": "法国杂技艺人菲利普·帕特，在1974年非法走钢丝穿越纽约双子塔顶端。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0107",
    "title": "光阴的传说",
    "url": "./movie-0107.html",
    "cover": "./107.jpg",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2024",
    "genre": "奇幻、家庭",
    "tags": [
      "时间",
      "祖孙",
      "老宅",
      "治愈",
      "慢节奏"
    ],
    "oneLine": "一座老宅里的挂钟，能让敲钟者回到过去任何一天，但每次回去都会加速衰老一年。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0108",
    "title": "欢迎来到隔离病房",
    "url": "./movie-0108.html",
    "cover": "./108.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "医疗悬疑 / 社会剧情",
    "tags": [
      "限定空间",
      "群像博弈",
      "医患关系",
      "心理边界",
      "现实焦虑"
    ],
    "oneLine": "一场突发未知传染事件后，整层隔离病房被彻底封锁，医生、患者和陪护只能在有限空间里互相审视，直到真相先于病毒失控。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0109",
    "title": "孽恋焚情",
    "url": "./movie-0109.html",
    "cover": "./109.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 爱情 / 古装",
    "tags": [
      "法式情欲",
      "18世纪",
      "贵族",
      "禁忌恋",
      "改编"
    ],
    "oneLine": "1785年，一名贵族少妇与丈夫的私生子侄子，在凡尔赛宫后花园里开始了一场以毁灭为目的的爱情对弈。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0110",
    "title": "消失的女孩",
    "url": "./movie-0110.html",
    "cover": "./110.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2017",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "失踪案",
      "多层反转",
      "记忆迷宫"
    ],
    "oneLine": "女孩失踪七年后突然回家，DNA确认是她本人，但母亲却说：这不是我的女儿。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0111",
    "title": "锦绣令",
    "url": "./movie-0111.html",
    "cover": "./111.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "古装、权谋、爱情",
    "tags": [
      "替身皇后",
      "权谋博弈",
      "刺绣秘术"
    ],
    "oneLine": "替妹妹入宫的小绣娘意外卷入夺嫡之争，手中的金针成了改写天下命运的最强武器。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0112",
    "title": "哪吒·魔童归来",
    "url": "./movie-0112.html",
    "cover": "./112.jpg",
    "region": "中国大陆",
    "type": "电影 / 动画",
    "year": "2026",
    "genre": "动作 / 神话 / 奇幻 / 亲情",
    "tags": [
      "哪吒重生",
      "父子和解",
      "现代都市",
      "乾坤圈升级"
    ],
    "oneLine": "哪吒三太子在封神三千年后意外跌落当代滨海市，失去法力，还附身在一个自闭症男孩身上。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0113",
    "title": "罗莎的自白",
    "url": "./movie-0113.html",
    "cover": "./113.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2026",
    "genre": "剧情, 传记",
    "tags": [
      "女性",
      "移民",
      "身份认同",
      "舞台剧",
      "阿尔及利亚战争"
    ],
    "oneLine": "一位阿尔及利亚裔法国老太太在养老院里，向年轻护工说出了隐藏四十年的秘密：她曾是独立战争中的间谍。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0114",
    "title": "纸牌之国",
    "url": "./movie-0114.html",
    "cover": "./114.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑，奇幻",
    "tags": [
      "生存游戏",
      "扑克牌",
      "政治隐喻"
    ],
    "oneLine": "52个陌生人被关进扑克牌城堡，每轮投票淘汰一人，留下的那张牌决定国家命运。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0115",
    "title": "撒旦来临",
    "url": "./movie-0115.html",
    "cover": "./115.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 心理 / 宗教",
    "tags": [
      "心理惊悚",
      "邪教家庭",
      "真假恶魔",
      "母爱与信仰",
      "低成本高概念"
    ],
    "oneLine": "一个患有精神分裂的母亲坚信儿子是撒旦转世，而镇上的人开始一个个暴毙。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0116",
    "title": "独臂刀客/断臂刀国语",
    "url": "./movie-0116.html",
    "cover": "./116.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1972",
    "genre": "武侠 / 动作 / 剧情",
    "tags": [
      "断臂复仇",
      "江湖门派",
      "以弱胜强",
      "刀法传承",
      "侠义宿命"
    ],
    "oneLine": "断去一臂的刀客重新握刀，不为证明自己仍强，而是为了替师门洗清一桩被埋二十年的血案。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0117",
    "title": "奥利安娜",
    "url": "./movie-0117.html",
    "cover": "./117.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 心理 / 惊悚",
    "tags": [
      "师生",
      "权力关系",
      "话剧改编",
      "两性对立"
    ],
    "oneLine": "大学男教授帮助一名女学生，女学生却反手控告他性骚扰。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0118",
    "title": "镜子不说谎",
    "url": "./movie-0118.html",
    "cover": "./118.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2021",
    "genre": "奇幻，剧情，心理",
    "tags": [
      "魔镜",
      "诚实",
      "欲望",
      "婚姻",
      "真相"
    ],
    "oneLine": "一面古董魔镜让人在镜中看到自己最真实欲望的样子，一对夫妻因此崩溃。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0119",
    "title": "没有我的日子",
    "url": "./movie-0119.html",
    "cover": "./119.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2026",
    "genre": "剧情, 奇幻, 女性",
    "tags": [
      "平行宇宙",
      "存在主义",
      "自我认知",
      "失踪",
      "觉醒"
    ],
    "oneLine": "感到被全世界忽视的家庭主妇某天突然“物理消失”，所有人都不记得她，唯独一个盲人老妇能看见她。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0120",
    "title": "午夜出租车",
    "url": "./movie-0120.html",
    "cover": "./120.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "都市传说",
      "时空循环",
      "心理压迫"
    ],
    "oneLine": "每晚十一点，一辆红色出租车准时出现在殡仪馆门口，而司机竟是三年前已死的他。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0121",
    "title": "嘻哈胡桃夹子",
    "url": "./movie-0121.html",
    "cover": "./121.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "歌舞, 奇幻, 家庭",
    "tags": [
      "圣诞",
      "街舞Battle",
      "经典改编",
      "音乐剧"
    ],
    "oneLine": "布鲁克林街头舞者误入平行世界，必须用嘻哈battle拯救被诅咒的胡桃夹子王国。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0122",
    "title": "救赎2025",
    "url": "./movie-0122.html",
    "cover": "./122.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻， 惊悚",
    "tags": [
      "时间循环",
      "反乌托邦",
      "记忆删除"
    ],
    "oneLine": "为了赎罪，他自愿进入“因果删除系统”，结果发现自己已经循环赎罪了九千次。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0123",
    "title": "我凭本事单身",
    "url": "./movie-0123.html",
    "cover": "./123.jpg",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2023",
    "genre": "都市喜剧, 情感, 成长",
    "tags": [
      "相亲焦虑",
      "算法恋爱",
      "单身经济",
      "青年职场",
      "自我修复"
    ],
    "oneLine": "她把脱单当项目排期，连心动都按里程碑打卡，直到一位帮她修门锁的邻居提醒：爱情不是流程表，也不是绩效考核。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0124",
    "title": "太平年",
    "url": "./movie-0124.html",
    "cover": "./124.jpg",
    "region": "中国",
    "type": "剧集",
    "year": "2024",
    "genre": "历史 / 古装",
    "tags": [
      "南北朝",
      "帝王成长",
      "权谋"
    ],
    "oneLine": "一个被流放的亡国皇子，如何在乱世中伪装成傻子，最终开创属于他的太平盛世。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0125",
    "title": "本末测评",
    "url": "./movie-0125.html",
    "cover": "./125.jpg",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2023",
    "genre": "脱口秀/测评",
    "tags": [
      "网络综艺",
      "犀利吐槽",
      "社会实验",
      "消费主义",
      "黑色幽默"
    ],
    "oneLine": "一个试图测评万物本质的节目，最终却亲手模糊了真与假的边界。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0126",
    "title": "武动乾坤：涅槃神石",
    "url": "./movie-0126.html",
    "cover": "./126.jpg",
    "region": "中国大陆",
    "type": "电影 / 动画",
    "year": "2023",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": [
      "古装玄幻",
      "能量争夺",
      "兄弟并肩",
      "秘境探险"
    ],
    "oneLine": "上古神石碎裂散落各地，林动必须在七日内集齐碎片，否则天地将陷入永恒黑暗。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0127",
    "title": "竹山孤旅",
    "url": "./movie-0127.html",
    "cover": "./127.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "1979",
    "genre": "剧情, 家庭, 伦理",
    "tags": [
      "乡土文学",
      "父子情",
      "认祖归宗",
      "催泪"
    ],
    "oneLine": "被生父遗弃的少年从竹山出发，跨越半个台湾寻找亲人，却换来一场迟到的忏悔。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0128",
    "title": "死亡晚餐",
    "url": "./movie-0128.html",
    "cover": "./128.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2021",
    "genre": "悬疑 / 犯罪 / 密室",
    "tags": [
      "晚宴",
      "全员恶人",
      "密室推理",
      "反转",
      "西班牙悬疑"
    ],
    "oneLine": "七个老友的年度晚餐上，第三道菜端上来时，有人死了，所有人都有动机。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0129",
    "title": "会画少年的天空 少年画室",
    "url": "./movie-0129.html",
    "cover": "./129.jpg",
    "region": "中国",
    "type": "综艺",
    "year": "2025",
    "genre": "真人秀, 艺术",
    "tags": [
      "绘画",
      "少年",
      "成长",
      "创造营"
    ],
    "oneLine": "十二位自闭症少年被关进一座城堡，每人一间画室，要在三十天内画出“无法用语言表达的世界”。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0130",
    "title": "一切安好第二季",
    "url": "./movie-0130.html",
    "cover": "./130.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2026",
    "genre": "剧情 / 喜剧 / 家庭",
    "tags": [
      "中年危机",
      "黑色幽默",
      "破碎家庭",
      "回归",
      "治愈"
    ],
    "oneLine": "上一季全家差点炸了房子，这一季他们决定去乡下开民宿，继续互相折磨。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0131",
    "title": "孽恋狂情",
    "url": "./movie-0131.html",
    "cover": "./131.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2006",
    "genre": "情色 / 悬疑",
    "tags": [
      "三角",
      "偷窥",
      "画室"
    ],
    "oneLine": "画家为寻找灵感租下旧公寓，却发现自己每一幅画中的女人，都会在第二天离奇死亡。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0132",
    "title": "万渣朝凰第五季",
    "url": "./movie-0132.html",
    "cover": "./132.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "古装 / 爱情",
    "tags": [
      "穿越",
      "女强",
      "爽剧"
    ],
    "oneLine": "现代女强人穿越成亡国公主，靠管理学知识在乱世中建立商业帝国并俘获敌国将军。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0133",
    "title": "不抛弃遇上不放弃",
    "url": "./movie-0133.html",
    "cover": "./133.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 喜剧",
    "tags": [
      "底层互助",
      "小人物质朴哲学",
      "骑手生活",
      "温情催泪"
    ],
    "oneLine": "一个落魄程序员和一个社恐外卖骑手被迫同居，在互相嫌弃中成为彼此唯一的光。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0134",
    "title": "探险活宝第四季",
    "url": "./movie-0134.html",
    "cover": "./134.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2012",
    "genre": "动画 / 冒险 / 喜剧",
    "tags": [
      "末世奇幻",
      "脑洞大开",
      "友谊成长"
    ],
    "oneLine": "人类男孩芬恩和魔法狗杰克在哇塞大陆继续他们的奇葩冒险，这次他们将探索冰王和玛瑟琳的黑暗过往。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0135",
    "title": "我孕故我在",
    "url": "./movie-0135.html",
    "cover": "./135.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "genre": "喜剧生活",
    "tags": [
      "怀孕",
      "女性友谊",
      "身体焦虑",
      "都市职场"
    ],
    "oneLine": "四个预产期同在五月的准妈妈组成“五月花”互助会，在鸡飞狗跳的孕期里，重新认识自己的身体、工作和婚姻。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0136",
    "title": "魔环",
    "url": "./movie-0136.html",
    "cover": "./136.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻 / 惊悚",
    "tags": [
      "考古",
      "诅咒",
      "时间循环",
      "超自然"
    ],
    "oneLine": "一枚出土的维京魔环让考古小队被困在维京人的血祭仪式当天，反复死亡。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0137",
    "title": "欢喜就好之五星大饭店",
    "url": "./movie-0137.html",
    "cover": "./137.jpg",
    "region": "中国福建 / 新加坡",
    "type": "电视剧",
    "year": "2024",
    "genre": "喜剧 / 爱情",
    "tags": [
      "闽南语",
      "酒店风云",
      "小人物逆袭"
    ],
    "oneLine": "福建土楼的穷小子意外继承了一家新加坡五星级大饭店，却发现饭店已负债累累，而且员工全是奇葩。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0138",
    "title": "最强战兵",
    "url": "./movie-0138.html",
    "cover": "./138.jpg",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2024",
    "genre": "动作、军事",
    "tags": [
      "兵王回归",
      "保护千金",
      "硬核肉搏"
    ],
    "oneLine": "代号“阎王”的最强佣兵退役后成为大小姐的贴身保镖，却发现暗杀者正是自己曾经的战友。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0139",
    "title": "百粤风云",
    "url": "./movie-0139.html",
    "cover": "./139.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "历史战争",
    "tags": [
      "武侠",
      "明末",
      "抗清"
    ],
    "oneLine": "南明末年，广东十虎后人集结，在珠江口以血肉之躯对抗坚船利炮。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0140",
    "title": "波河的人们",
    "url": "./movie-0140.html",
    "cover": "./140.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 纪录片",
    "tags": [
      "诗意",
      "河流",
      "人文",
      "黑白"
    ],
    "oneLine": "沿着意大利最长河流，一位诗人用镜头记录下河畔居民濒临消失的生存方式和低语。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0141",
    "title": "选老坐",
    "url": "./movie-0141.html",
    "cover": "./141.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 犯罪",
    "tags": [
      "黑帮",
      "权力斗争",
      "江湖",
      "黑色幽默",
      "退休"
    ],
    "oneLine": "帮派大佬金盆洗手，推选新“坐馆”，却发现所有候选人都想让他死，连他自己也不例外。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0142",
    "title": "天邪神 动态漫画第二季",
    "url": "./movie-0142.html",
    "cover": "./142.jpg",
    "region": "中国大陆",
    "type": "动态漫画",
    "year": "2024",
    "genre": "玄幻 / 热血 / 漫改",
    "tags": [
      "战斗",
      "修仙",
      "逆天",
      "动态漫画",
      "强强"
    ],
    "oneLine": "邪神归来，这一次他要灭的不是敌人，而是自己的前世。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0143",
    "title": "任性女郎",
    "url": "./movie-0143.html",
    "cover": "./143.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1956",
    "genre": "爱情喜剧 / 歌舞 / 都市浪漫",
    "tags": [
      "时尚舞台",
      "反叛少女",
      "剧院乌龙",
      "身份误认",
      "浪漫邂逅",
      "独立意识"
    ],
    "oneLine": "她把所有追求者都当成麻烦，却在一场误闯剧院后台的乌龙里，和最不合适的人撞出最难忘的舞步。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0144",
    "title": "科拉尔金矿",
    "url": "./movie-0144.html",
    "cover": "./144.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2018",
    "genre": "动作 / 犯罪 / 剧情",
    "tags": [
      "黑帮史诗",
      "逆袭",
      "阶级反抗",
      "视觉奇观"
    ],
    "oneLine": "一个被高利贷压迫的码头工人潜入印度最富的金矿，三年后他成了矿区的“地下皇帝”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0145",
    "title": "孕妇与狂徒",
    "url": "./movie-0145.html",
    "cover": "./145.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪, 动作, 剧情",
    "tags": [
      "警匪",
      "孕妇",
      "困兽斗",
      "密室逃生"
    ],
    "oneLine": "临产女警在医院遭遇劫持，整个产科楼层变成绑匪与孕妇的生死博弈场。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0146",
    "title": "请你记住我",
    "url": "./movie-0146.html",
    "cover": "./146.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 爱情 / 科幻",
    "tags": [
      "记忆移植",
      "绝症",
      "伦理困境",
      "软科幻"
    ],
    "oneLine": "一位脑科学家长途跋涉，试图为患有罕见失忆症的妻子植入一个“完美的”虚拟记忆。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0147",
    "title": "当星光坠入花海",
    "url": "./movie-0147.html",
    "cover": "./147.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "爱情 / 奇幻",
    "tags": [
      "陨石",
      "花店",
      "失忆",
      "循环",
      "纯爱"
    ],
    "oneLine": "花店女孩捡到一颗会发光的陨石，每夜她都能梦见一个男生，但现实中这个男生根本不认识她。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0148",
    "title": "喜结良缘",
    "url": "./movie-0148.html",
    "cover": "./148.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 爱情, 家庭",
    "tags": [
      "婚礼",
      "乌龙",
      "闹剧",
      "歌舞"
    ],
    "oneLine": "一场印度盛大婚礼上，新郎、伴郎、厨师和一只猴子全都搞错了结婚对象，而真正的准新娘还在隔壁村堵车。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0149",
    "title": "长江七号粤语",
    "url": "./movie-0149.html",
    "cover": "./149.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2008",
    "genre": "喜剧 / 科幻 / 家庭",
    "tags": [
      "外星宠物",
      "底层亲情",
      "原声粤配",
      "笑中带泪"
    ],
    "oneLine": "周铁在工地捡到一只外星玩具狗，却不知它正在用最后的能量拯救这对父子的未来。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0150",
    "title": "真爱伴鹅行",
    "url": "./movie-0150.html",
    "cover": "./150.jpg",
    "region": "法国 / 比利时",
    "type": "动画电影",
    "year": "2024",
    "genre": "喜剧 / 冒险",
    "tags": [
      "大雁",
      "迁徙",
      "公路片",
      "环保"
    ],
    "oneLine": "一只被人类养大的家鹅错把自己当无人机，跟着一架滑翔机完成了一次不可能的跨国迁徙。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0151",
    "title": "撒旦定居点",
    "url": "./movie-0151.html",
    "cover": "./1.jpg",
    "region": "冰岛",
    "type": "电视剧",
    "year": "2026",
    "genre": "恐怖，悬疑",
    "tags": [
      "北欧民俗恐怖",
      "邪教",
      "极夜"
    ],
    "oneLine": "极夜笼罩下的冰岛小镇，居民开始集体做同样的噩梦，梦里都说魔鬼要来做客。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0152",
    "title": "曝光",
    "url": "./movie-0152.html",
    "cover": "./2.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑、犯罪、剧情",
    "tags": [
      "记者",
      "网络暴力",
      "阶层"
    ],
    "oneLine": "实习记者意外拍到了市长候选人受贿画面，发布后却引发了一场针对她本人的猎巫行动。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0153",
    "title": "脱线春香传",
    "url": "./movie-0153.html",
    "cover": "./3.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2011",
    "genre": "古装, 喜剧, 爱情, 轻传奇",
    "tags": [
      "经典改编",
      "身份误认",
      "反套路女主",
      "朝鲜风俗",
      "权谋闹剧",
      "轻松讽刺"
    ],
    "oneLine": "当传统春香故事被写进一群完全不按规矩出牌的人手里，忠贞爱情变成了满是误会、伪装和笑点的荒唐大冒险。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0154",
    "title": "复制闪灵娇妻",
    "url": "./movie-0154.html",
    "cover": "./4.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "genre": "科幻， 恐怖， 惊悚",
    "tags": [
      "克隆",
      "精神控制",
      "家庭暴力",
      "心理"
    ],
    "oneLine": "为了挽回婚姻，天才神经学家克隆了亡妻，并植入“完美主妇”记忆，直到原配妻子的怨念开始在复制体中觉醒。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0155",
    "title": "追忆潸然",
    "url": "./movie-0155.html",
    "cover": "./5.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2023",
    "genre": "爱情, 生活, 剧情",
    "tags": [
      "纯爱",
      "虐心",
      "错过",
      "治愈",
      "慢热"
    ],
    "oneLine": "因车祸失忆的女子在十年后偶遇初恋，却发现自己正嫁给了当年撞她的司机。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0156",
    "title": "泰王纳黎萱",
    "url": "./movie-0156.html",
    "cover": "./6.jpg",
    "region": "泰国",
    "type": "历史电影",
    "year": "2007",
    "genre": "史诗 / 战争 / 王朝",
    "tags": [
      "王权复兴",
      "抗敌复国",
      "战象军阵",
      "朝堂权谋",
      "民族史诗"
    ],
    "oneLine": "少年质子回国即位后，面对内外交困与旧日屈辱，他必须以王者之名重整军队，夺回失去的国土与尊严。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0157",
    "title": "波奇亚",
    "url": "./movie-0157.html",
    "cover": "./7.jpg",
    "region": "意大利 / 法国",
    "type": "电视剧",
    "year": "2025",
    "genre": "历史 / 犯罪 / 传记",
    "tags": [
      "教廷",
      "毒药",
      "权谋",
      "家族"
    ],
    "oneLine": "不是所有的家族都叫波奇亚：他们用毒药统治罗马，用乱伦维持血脉，用阴谋对抗上帝。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0158",
    "title": "里约大冒险2",
    "url": "./movie-0158.html",
    "cover": "./8.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2014",
    "genre": "动画, 喜剧, 冒险",
    "tags": [
      "鹦鹉",
      "亚马逊",
      "音乐",
      "家庭"
    ],
    "oneLine": "布鲁和珠儿带着三只小鹦鹉飞进亚马逊丛林，发现那里藏着一个巨大的鸟类文明。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0159",
    "title": "热汤",
    "url": "./movie-0159.html",
    "cover": "./9.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "剧情, 科幻, 悬疑",
    "tags": [
      "人工智能",
      "婚姻",
      "克隆",
      "软科幻"
    ],
    "oneLine": "妻子怀疑丈夫出轨，却在监控中发现丈夫每天都在和另一个“自己”拥抱。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0160",
    "title": "风流韵事",
    "url": "./movie-0160.html",
    "cover": "./10.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧, 爱情, 情色",
    "tags": [
      "复古",
      "70年代",
      "性解放",
      "讽刺"
    ],
    "oneLine": "1970年代罗马，一个保守派议员为了“打击淫秽”卧底进了城中最大的风流俱乐部。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0161",
    "title": "火线警戒",
    "url": "./movie-0161.html",
    "cover": "./11.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "动作 / 犯罪",
    "tags": [
      "卧底警察",
      "双面间谍",
      "黑帮内斗",
      "街头战争"
    ],
    "oneLine": "一名卧底深入贩毒集团核心后，发现自己的警察联系人竟是黑帮安插的内鬼，两边都在追杀他。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0162",
    "title": "大门",
    "url": "./movie-0162.html",
    "cover": "./12.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻, 悬疑, 剧情",
    "tags": [
      "建筑",
      "秘密",
      "代际传承",
      "家庭"
    ],
    "oneLine": "一座古老日式宅邸里有一扇从未被打开的门，当祖父临终前说“绝对不要打开它”，四代人的命运开始围绕这扇门加速旋转。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0163",
    "title": "不幸的幸会",
    "url": "./movie-0163.html",
    "cover": "./13.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2019",
    "genre": "悬疑、犯罪、剧情",
    "tags": [
      "误会导致",
      "连环杀手",
      "倒霉蛋",
      "猫鼠游戏"
    ],
    "oneLine": "全日本最倒霉的男人，被误认为是连环杀手，而真正的杀手竟成了他的最佳搭档。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0164",
    "title": "身家调查",
    "url": "./movie-0164.html",
    "cover": "./14.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 悬疑, 家庭",
    "tags": [
      "身份认同",
      "财富",
      "秘密",
      "家族史",
      "伦理"
    ],
    "oneLine": "一场婚前的例行背景调查，竟牵扯出未婚夫家族三年前一桩未破的离奇命案。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0165",
    "title": "迷信",
    "url": "./movie-0165.html",
    "cover": "./15.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "悬疑， 恐怖， 奇幻",
    "tags": [
      "民俗",
      "邪教",
      "乡村",
      "连环杀人",
      "反转"
    ],
    "oneLine": "一个不信鬼神的女刑警回到家乡，发现村民口耳相传的“迷信禁忌”，其实是掩盖连环杀人的暗号。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0166",
    "title": "害虫",
    "url": "./movie-0166.html",
    "cover": "./16.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "寄生虫",
      "拆迁",
      "复仇",
      "身体恐怖",
      "社会隐喻"
    ],
    "oneLine": "一场拆迁风波后，老城区居民身上长出诡异的黑色斑点，它们似乎拥有集体意识。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0167",
    "title": "诺亚方舟漂流记2",
    "url": "./movie-0167.html",
    "cover": "./17.jpg",
    "region": "爱尔兰 / 卢森堡",
    "type": "电影",
    "year": "2025",
    "genre": "动画, 冒险",
    "tags": [
      "海洋漂流",
      "生态寓言",
      "萌物"
    ],
    "oneLine": "洪水消退后，一群方舟上的“偷渡”小动物们组成舰队寻找新大陆，却发现海底沉睡着一座会吃人的“塑料山”。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0168",
    "title": "双面伴娘",
    "url": "./movie-0168.html",
    "cover": "./18.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 悬疑 / 同性",
    "tags": [
      "身份错位",
      "婚礼闹剧",
      "卧底伴娘",
      "姐妹情深"
    ],
    "oneLine": "为了调查闺蜜未婚夫的底细，她假扮伴娘混入婚礼，却差点成了新娘本人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0169",
    "title": "甜言蜜语1999粤语",
    "url": "./movie-0169.html",
    "cover": "./19.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1999",
    "genre": "爱情, 剧情",
    "tags": [
      "千禧年",
      "古天乐",
      "蒙嘉慧",
      "纯爱",
      "离岛"
    ],
    "oneLine": "一个失语症青年在离岛的小商店里，通过录音带默默爱上了来度假的盲女。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0170",
    "title": "看不见的战争",
    "url": "./movie-0170.html",
    "cover": "./20.jpg",
    "region": "美国 / 英国",
    "type": "剧集",
    "year": "2027",
    "genre": "科幻, 惊悚, 政治",
    "tags": [
      "信息战",
      "脑机接口",
      "意识操控",
      "反乌托邦"
    ],
    "oneLine": "第三次世界大战没有硝烟，敌我双方的士兵在植入芯片的幻觉中互相残杀，而他们以为自己在打游戏。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0171",
    "title": "拉面首领",
    "url": "./movie-0171.html",
    "cover": "./21.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情、美食、商战",
    "tags": [
      "拉面",
      "黑帮",
      "料理对决",
      "匠心精神",
      "浪子回头"
    ],
    "oneLine": "前黑帮大佬金盆洗手开拉面店，用极道的手段与规矩挑战米其林评审。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0172",
    "title": "我的爱对你说1997",
    "url": "./movie-0172.html",
    "cover": "./22.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2022",
    "genre": "爱情、年代",
    "tags": [
      "回归",
      "港风",
      "错位恋",
      "时代变迁"
    ],
    "oneLine": "1997年香港回归前夕，一对情侣被迫分离，二十年后他们各自的子女竟成了恋人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0173",
    "title": "高粱地里大麦熟",
    "url": "./movie-0173.html",
    "cover": "./23.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "1989",
    "genre": "剧情, 历史",
    "tags": [
      "民俗",
      "封建礼教",
      "女性"
    ],
    "oneLine": "民国初年北方农村，一位被迫嫁给傻子的女人，与高粱地里的哑巴长工发生了不伦之恋。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0174",
    "title": "性爱白日梦",
    "url": "./movie-0174.html",
    "cover": "./24.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 奇幻, 情色",
    "tags": [
      "幻想",
      "自我探索",
      "女性视角",
      "艺术"
    ],
    "oneLine": "一名保守女图书管理员发现自己每次做白日梦，梦中的情色场景都会在现实中成真。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0175",
    "title": "勇闯无人之境第二季",
    "url": "./movie-0175.html",
    "cover": "./25.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": [
      "废土",
      "生存",
      "人工智能觉醒"
    ],
    "oneLine": "核战后的废土上，幸存者们发现控制城市的超级AI不仅没死，还开始利用人类进行情感实验。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0176",
    "title": "零度动物园",
    "url": "./movie-0176.html",
    "cover": "./26.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2023",
    "genre": "科幻， 悬疑， 剧情",
    "tags": [
      "低温科技",
      "复活",
      "伦理",
      "克隆"
    ],
    "oneLine": "北极圈内的富豪建造了冷冻动物园，但被复活的猛犸象似乎有了人类智慧。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0177",
    "title": "拳精",
    "url": "./movie-0177.html",
    "cover": "./27.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作、奇幻、喜剧",
    "tags": [
      "功夫",
      "五行",
      "通灵",
      "修炼",
      "搞笑"
    ],
    "oneLine": "不学无术的武术替身意外获得五个“拳精”附体，却发现它们比他还废物。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0178",
    "title": "乘龙怪婿第四季",
    "url": "./movie-0178.html",
    "cover": "./28.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2018",
    "genre": "喜剧/古装",
    "tags": [
      "女婿上门",
      "奇葩岳父",
      "身份造假",
      "笑料不断"
    ],
    "oneLine": "为了迎娶财主家大小姐，小镇青年假扮海归富二代，结果岳父是个比他还能编的“前朝遗老”，两人互相飙演技。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0179",
    "title": "从容的快板",
    "url": "./movie-0179.html",
    "cover": "./29.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 音乐",
    "tags": [
      "钢琴",
      "代际冲突",
      "时间轮回"
    ],
    "oneLine": "一个叛逆的钢琴天才少女意外获得一块能暂停时间的怀表，却发现从容演奏的代价是加速衰老。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0180",
    "title": "本色英雄",
    "url": "./movie-0180.html",
    "cover": "./30.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "动作, 犯罪, 剧情",
    "tags": [
      "反英雄",
      "暴力美学",
      "黑帮",
      "救赎"
    ],
    "oneLine": "一名杀手在执行最后一次任务时发现目标是自己失散多年的弟弟。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0181",
    "title": "乘客－欢迎来到德国",
    "url": "./movie-0181.html",
    "cover": "./31.jpg",
    "region": "德国",
    "type": "电视剧（迷你剧）",
    "year": "2015",
    "genre": "剧情，社会",
    "tags": [
      "难民",
      "公路",
      "人性",
      "出租车"
    ],
    "oneLine": "一位柏林出租车司机每晚搭载的乘客，正悄悄改变他对这个国家的看法。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0182",
    "title": "怒海潜将",
    "url": "./movie-0182.html",
    "cover": "./32.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "动作 / 冒险 / 军事",
    "tags": [
      "潜水",
      "深海异形",
      "航母",
      "精英小队"
    ],
    "oneLine": "美军精英潜水队在深海发现非人类钢铁残骸，却唤醒沉睡万年的海底掠食者。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0183",
    "title": "旅店春光",
    "url": "./movie-0183.html",
    "cover": "./33.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 情色 / 文艺",
    "tags": [
      "情欲",
      "香港旧区",
      "边缘人",
      "偷窥",
      "救赎"
    ],
    "oneLine": "深水埗一家廉价时钟旅馆里，每天下午三点，一个妓女和一个盲人老兵准时开房，却从不做爱。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0184",
    "title": "哈迪塞镇之战",
    "url": "./movie-0184.html",
    "cover": "./34.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "战争， 历史， 剧情",
    "tags": [
      "伊拉克战争",
      "真实事件",
      "反战",
      "纪实"
    ],
    "oneLine": "真实的伊拉克战场上，一个看似平静的小镇如何在一小时内变成了血腥的人间炼狱。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0185",
    "title": "良宵绮梦",
    "url": "./movie-0185.html",
    "cover": "./35.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2024",
    "genre": "情色、剧情、悬疑",
    "tags": [
      "梦境",
      "欲望",
      "艺术片"
    ],
    "oneLine": "一位禁欲的修女每晚都会梦见同一个男人，而那个男人是当地臭名昭著的妓院老板。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0186",
    "title": "伟大的格林卡",
    "url": "./movie-0186.html",
    "cover": "./36.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "传记, 音乐",
    "tags": [
      "作曲家",
      "沙俄",
      "创作困境"
    ],
    "oneLine": "俄国古典音乐之父格林卡，在创作歌剧《鲁斯兰与柳德米拉》期间，深陷抄袭指控、婚姻失败与沙皇审查的三重夹击。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0187",
    "title": "超能失控",
    "url": "./movie-0187.html",
    "cover": "./37.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 动作 / 惊悚",
    "tags": [
      "超能力",
      "失控",
      "心理变化"
    ],
    "oneLine": "三个高中生意外获得超能力，从行侠仗义到肆意妄为，能力的膨胀最终吞噬了他们的友谊与人性。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0188",
    "title": "夜城赋",
    "url": "./movie-0188.html",
    "cover": "./38.jpg",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2024",
    "genre": "古装, 权谋, 爱情",
    "tags": [
      "双面间谍",
      "灭门之仇",
      "替嫁",
      "白切黑"
    ],
    "oneLine": "为了复仇，她顶替姐姐嫁给敌国奸臣，却发现他要篡的不仅是皇位，还有自己的心。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0189",
    "title": "审判长",
    "url": "./movie-0189.html",
    "cover": "./39.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "genre": "犯罪 / 惊悚",
    "tags": [
      "私刑",
      "法官",
      "复仇",
      "反转"
    ],
    "oneLine": "一名退休法官在地下室私设法庭，专审法律无法定罪的恶人，直到有一天，被告席上坐着一个戴着他女儿项链的男人。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0190",
    "title": "宿敌2024",
    "url": "./movie-0190.html",
    "cover": "./40.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "悬疑, 惊悚",
    "tags": [
      "复仇",
      "双雄",
      "政商勾结",
      "高智商"
    ],
    "oneLine": "两个被同一势力灭门的孤儿，一个成为检察官，一个成为黑帮老大，二十年后宿命对决。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0191",
    "title": "山村新曲",
    "url": "./movie-0191.html",
    "cover": "./41.jpg",
    "region": "中国大陆",
    "type": "戏曲电影",
    "year": "1965",
    "genre": "戏曲, 歌舞",
    "tags": [
      "河南曲剧",
      "农村",
      "社会主义建设"
    ],
    "oneLine": "太行山深处的小村庄里，村民们用曲剧的形式唱出了修水渠、建电站的火热生活。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0192",
    "title": "小乌龟是怎样长大的",
    "url": "./movie-0192.html",
    "cover": "./42.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "家庭， 奇幻， 喜剧",
    "tags": [
      "儿童文学改编",
      "魔法",
      "成长",
      "治愈"
    ],
    "oneLine": "一个总是被欺负的瘦小男孩，得到了一只会随着他的勇气而变大的魔法小乌龟。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0193",
    "title": "一级玩家",
    "url": "./movie-0193.html",
    "cover": "./43.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 动作 / 冒险",
    "tags": [
      "虚拟现实",
      "游戏世界",
      "彩蛋狂潮",
      "反乌托邦"
    ],
    "oneLine": "2045年，一名少年玩家在史上最大VR游戏中发现隐藏彩蛋，引来邪恶公司的全球追杀。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0194",
    "title": "术士神传",
    "url": "./movie-0194.html",
    "cover": "./44.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1990",
    "genre": "奇幻古装",
    "tags": [
      "神魔",
      "斗法",
      "宿命",
      "港剧经典"
    ],
    "oneLine": "为救苍生，两个拥有半神之力的术士被迫转世争斗，三生三世不死不休。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0195",
    "title": "大追捕",
    "url": "./movie-0195.html",
    "cover": "./45.jpg",
    "region": "中国大陆 / 中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 犯罪",
    "tags": [
      "双雄",
      "跨境追凶",
      "以暴制暴"
    ],
    "oneLine": "内地刑警与香港黑警隔空联手，追捕一个“已经死了七年”的逃犯，而每一次接近真相，就多一具警察的尸体。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0196",
    "title": "到北极去",
    "url": "./movie-0196.html",
    "cover": "./46.jpg",
    "region": "加拿大",
    "type": "纪录片",
    "year": "2025",
    "genre": "纪录 / 自然",
    "tags": [
      "北极",
      "气候变化",
      "生态"
    ],
    "oneLine": "一支科学家团队驻守北极一年，记录下冰川消亡前的最后影像。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0197",
    "title": "美国起义",
    "url": "./movie-0197.html",
    "cover": "./47.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2021",
    "genre": "犯罪, 剧情, 历史",
    "tags": [
      "警匪",
      "纪实",
      "黑帮"
    ],
    "oneLine": "洛杉矶警局的黑人警官发明了“反黑战术”，却发现这套用来打击黑人的系统，正在成为新的压迫工具。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0198",
    "title": "科拉深孔",
    "url": "./movie-0198.html",
    "cover": "./48.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "科幻 / 惊悚 / 灾难",
    "tags": [
      "地心探险",
      "未知生物",
      "密闭空间"
    ],
    "oneLine": "一支国际科考队重返苏联废弃的科拉超深钻孔，却发现钻到地下的不只是岩石层。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0199",
    "title": "众矢之的",
    "url": "./movie-0199.html",
    "cover": "./49.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪, 悬疑",
    "tags": [
      "网络暴力",
      "社会派推理",
      "反转"
    ],
    "oneLine": "一条“女学生被老师性侵”的匿名帖引爆全网，但随着调查深入，发帖人、老师、女学生每人都是加害者。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0200",
    "title": "墨菲斯托的华尔兹",
    "url": "./movie-0200.html",
    "cover": "./50.jpg",
    "region": "德国",
    "type": "电视剧",
    "year": "2020",
    "genre": "惊悚, 历史, 奇幻",
    "tags": [
      "浮士德",
      "纳粹",
      "魔鬼契约",
      "音乐",
      "哲学"
    ],
    "oneLine": "1933年，一位犹太钢琴家与魔鬼做交易：用灵魂换取纳粹高官的信任，拯救族人却失去自我。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0201",
    "title": "#居酒屋新干线",
    "url": "./movie-0201.html",
    "cover": "./51.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2022",
    "genre": "美食 / 日常",
    "tags": [
      "新干线",
      "车站便当",
      "职场",
      "治愈"
    ],
    "oneLine": "被贬到偏远地区的上班族，在乘坐新干线的通勤路上，发现了各地“车站便当”与美酒的终极奥秘。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0202",
    "title": "最后的乘客",
    "url": "./movie-0202.html",
    "cover": "./52.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2027",
    "genre": "悬疑、惊悚、科幻",
    "tags": [
      "列车",
      "密闭空间",
      "失忆",
      "寄生"
    ],
    "oneLine": "六名乘客在一趟无人驾驶的列车上醒来，谁才是真正的“乘客”？",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0203",
    "title": "玩命鎗火",
    "url": "./movie-0203.html",
    "cover": "./53.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作",
    "tags": [
      "枪战",
      "兄弟情",
      "卧底"
    ],
    "oneLine": "警方与毒枭交易现场被第三方偷袭，所有人困在烂尾楼，只剩子弹和猜疑。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0204",
    "title": "体坛秘史：黑哨行动",
    "url": "./movie-0204.html",
    "cover": "./54.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "genre": "纪录片 / 犯罪 / 体育",
    "tags": [
      "赌球",
      "裁判黑幕",
      "真实事件改编"
    ],
    "oneLine": "记录NBA历史上最大赌球丑闻，涉事裁判多纳西在镜头前承认：我操纵的比赛比自首的多三倍。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0205",
    "title": "说100万次就好了",
    "url": "./movie-0205.html",
    "cover": "./55.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "奇幻 / 爱情 / 悬疑",
    "tags": [
      "轮回",
      "通灵",
      "青梅竹马",
      "催泪"
    ],
    "oneLine": "青梅竹马的男友在一次事故后变成了游魂，只有女主能看见他，而为了让她听见自己的话，他需要重复说一百万次。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0206",
    "title": "头条：良辰杀人记",
    "url": "./movie-0206.html",
    "cover": "./56.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑， 犯罪",
    "tags": [
      "记者",
      "连环杀手",
      "新闻伦理"
    ],
    "oneLine": "一名调查记者发现，最近发生的连环杀人案，竟然完全按照她三年前一篇虚构报道的手法执行。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0207",
    "title": "厌世女佣日记",
    "url": "./movie-0207.html",
    "cover": "./57.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 喜剧",
    "tags": [
      "社畜日常",
      "阶级批判",
      "女性视角",
      "黑色幽默"
    ],
    "oneLine": "首尔一位哲学系毕业的女佣，在五个富人家庭打扫卫生的同时，用存在主义解剖他们的伪善生活。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0208",
    "title": "死蠢斗一番 2.5",
    "url": "./movie-0208.html",
    "cover": "./58.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "genre": "喜剧 / 恶搞 / 动作",
    "tags": [
      "无厘头",
      "恶作剧对决",
      "名人客串",
      "屎尿屁笑话",
      "打破第四面墙"
    ],
    "oneLine": "两个废柴网红为了争夺百万粉丝，展开了一场毁掉整个洛杉矶的终极恶作剧大战。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0209",
    "title": "石磨的婚事",
    "url": "./movie-0209.html",
    "cover": "./59.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2017",
    "genre": "剧情 / 农村",
    "tags": [
      "农村",
      "彩礼",
      "真爱",
      "乡土幽默",
      "现实题材"
    ],
    "oneLine": "太行山区的石匠为了凑齐三十万彩礼，把自己祖传的石磨盘推到了城里，却被告知那是汉代的文物。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0210",
    "title": "不思异：志怪",
    "url": "./movie-0210.html",
    "cover": "./60.jpg",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑 / 奇幻 / 恐怖",
    "tags": [
      "志怪",
      "单元剧",
      "反转",
      "中式恐怖"
    ],
    "oneLine": "深夜古籍店老板卖出每一本志怪小说，都会在买家身上发生一模一样的故事。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0211",
    "title": "歌坛惊梦",
    "url": "./movie-0211.html",
    "cover": "./61.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 音乐 / 悬疑",
    "tags": [
      "娱乐圈",
      "替身",
      "悬疑",
      "港乐情怀",
      "幕后黑手"
    ],
    "oneLine": "当红女歌手车祸毁容后，制作人找来一个声音一模一样的替身，但替身开始一步步取代她的人生。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0212",
    "title": "2019天猫双十一狂欢夜",
    "url": "./movie-0212.html",
    "cover": "./62.jpg",
    "region": "中国",
    "type": "综艺/晚会",
    "year": "2019",
    "genre": "歌舞 / 真人秀",
    "tags": [
      "直播事故",
      "后台解密",
      "购物节"
    ],
    "oneLine": "一场天价购物晚会的幕后：顶流明星塌房、机器人故障、打折代码泄露，全员崩溃倒计时。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0213",
    "title": "阳光下游",
    "url": "./movie-0213.html",
    "cover": "./63.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2013",
    "genre": "剧情， 家庭， 喜剧",
    "tags": [
      "阿尔茨海默",
      "亲情",
      "公路片",
      "治愈",
      "催泪弹"
    ],
    "oneLine": "得知患上阿尔茨海默症的父亲最后一个愿望是去佛罗里达看海，工作狂儿子不得不带着“老小孩”踏上囧事不断的南下之旅。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0214",
    "title": "逮捕",
    "url": "./movie-0214.html",
    "cover": "./64.jpg",
    "region": "中国",
    "type": "电视剧",
    "year": "2022",
    "genre": "犯罪 / 刑侦",
    "tags": [
      "反腐",
      "卧底",
      "双面人生"
    ],
    "oneLine": "一名禁毒警察被要求逮捕自己最敬爱的师父，却发现师父的真实身份比毒品更复杂。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0215",
    "title": "使徒行者3",
    "url": "./movie-0215.html",
    "cover": "./65.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2026",
    "genre": "警匪、悬疑、动作",
    "tags": [
      "卧底",
      "黑帮",
      "刑讯",
      "终极背叛",
      "香港取景"
    ],
    "oneLine": "当所有卧底身份都被黑客曝光，警队与黑帮的界限彻底消失，每个人都是孤狼。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0216",
    "title": "赤裸裸的暴力",
    "url": "./movie-0216.html",
    "cover": "./66.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "暴力美学",
      "黑吃黑",
      "复仇",
      "快节奏",
      "R级"
    ],
    "oneLine": "一名沉默的退役杀手，为了找回被黑帮夺走的女儿遗物，只能用最原始的方式杀穿整座城市。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0217",
    "title": "断线森林2",
    "url": "./movie-0217.html",
    "cover": "./67.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑 / 犯罪",
    "tags": [
      "多线叙事",
      "荒诞黑色",
      "内陆犯罪",
      "方言电影"
    ],
    "oneLine": "一把丢失的狙击枪，一个逃跑的偷猎者，和三个接到同一条绑架短信的女人，在西南密林深处命运断线。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0218",
    "title": "中年大叔转生反派千金",
    "url": "./movie-0218.html",
    "cover": "./68.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "动画, 喜剧, 奇幻",
    "tags": [
      "异世界",
      "转生",
      "性转",
      "搞笑",
      "社畜"
    ],
    "oneLine": "四十五岁的建筑公司课长田中，某天醒来发现自己成了乙女游戏中恶毒的女配角，并试图用工程学改善被流放的命运。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0219",
    "title": "神偷燕子李三",
    "url": "./movie-0219.html",
    "cover": "./69.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 武侠 / 古装",
    "tags": [
      "轻功",
      "劫富济贫",
      "民国奇案",
      "探案"
    ],
    "oneLine": "京城频现飞贼，只偷贪官不扰百姓，警探设下天罗地网，却发现贼人竟是故人。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0220",
    "title": "四兄弟",
    "url": "./movie-0220.html",
    "cover": "./70.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2010",
    "genre": "家庭 / 剧情 / 年代",
    "tags": [
      "兄弟反目",
      "家族企业",
      "旧城改造",
      "亲情债务",
      "命运分岔"
    ],
    "oneLine": "四个从同一条胡同走出来的兄弟，在一次家族拆迁风波里彻底分道扬镳，又必须在父亲病危时重新面对彼此。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0221",
    "title": "只得一个父亲",
    "url": "./movie-0221.html",
    "cover": "./71.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2022",
    "genre": "家庭, 剧情",
    "tags": [
      "父子",
      "阿尔茨海默",
      "街头生存"
    ],
    "oneLine": "一个患有阿尔茨海默症的老江湖，每天用当年混街头的办法，重新认出自己的儿子。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0222",
    "title": "当代孝子",
    "url": "./movie-0222.html",
    "cover": "./72.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 家庭",
    "tags": [
      "养老",
      "城乡差异",
      "亲情绑架",
      "反向教育",
      "现实主义"
    ],
    "oneLine": "被村里评为“不孝子”的中年男人，用一套城里的“科学养老法”让全村老人崩溃。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0223",
    "title": "泰山与珍妮",
    "url": "./movie-0223.html",
    "cover": "./73.jpg",
    "region": "美国",
    "type": "动画电影",
    "year": "2026",
    "genre": "爱情 / 冒险",
    "tags": [
      "野人回归",
      "都市爱情",
      "丛林法则"
    ],
    "oneLine": "婚后十年，珍妮带泰山回伦敦省亲，丛林之王在华尔街用藤蔓荡秋千引发了金融混乱。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0224",
    "title": "红猪",
    "url": "./movie-0224.html",
    "cover": "./74.jpg",
    "region": "日本",
    "type": "动画电影",
    "year": "2026",
    "genre": "奇幻 / 战争",
    "tags": [
      "宫崎骏精神续作",
      "飞行员",
      "诅咒",
      "亚得里亚海",
      "反战"
    ],
    "oneLine": "被诅咒变成猪的赏金猎人飞行员，在二战前夕的亚得里亚海上空，与王牌飞行员展开决战。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0225",
    "title": "芋川椋三玄关番之卷",
    "url": "./movie-0225.html",
    "cover": "./75.jpg",
    "region": "日本",
    "type": "动画电影",
    "year": "2018",
    "genre": "历史 / 喜剧 / 家庭",
    "tags": [
      "江户市井",
      "玄关文化",
      "误会连环",
      "传统工艺",
      "轻讽刺",
      "生活流"
    ],
    "oneLine": "一个专管替邻里守门送客的男人，因一场误送信件的乌龙，被卷入整条街坊的秘密与和解之中。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0226",
    "title": "星游记",
    "url": "./movie-0226.html",
    "cover": "./76.jpg",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2024",
    "genre": "科幻、冒险、热血",
    "tags": [
      "星际航行",
      "少年成长",
      "宇宙冒险",
      "友情",
      "神秘遗迹"
    ],
    "oneLine": "问题少年意外获得一枚古星图碎片，被迫与傲娇船长踏上寻找传说中“星之终点”的旅程。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0227",
    "title": "萝莉的时间",
    "url": "./movie-0227.html",
    "cover": "./77.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "时间循环",
      "童真恐怖",
      "反转"
    ],
    "oneLine": "七岁女孩每天下午三点都会重置时间，而她是唯一记得的人。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0228",
    "title": "威震大西洋",
    "url": "./movie-0228.html",
    "cover": "./78.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2026",
    "genre": "历史， 战争， 海战",
    "tags": [
      "二战",
      "U型潜艇",
      "护航舰队"
    ],
    "oneLine": "一艘残废的英国驱逐舰，一个被判定“怯战”的上尉，他们要在燃料耗尽前，用诱饵战术击沉三艘U型潜艇。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0229",
    "title": "女人裙下",
    "url": "./movie-0229.html",
    "cover": "./79.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 喜剧",
    "tags": [
      "女性群像",
      "法式浪漫",
      "幽默",
      "独立"
    ],
    "oneLine": "巴黎一间高级时装工作室里，四位不同年龄的女性在裙摆的褶皱中寻找自我与自由。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0230",
    "title": "圣诞故事：新篇章",
    "url": "./movie-0230.html",
    "cover": "./80.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "家庭, 奇幻, 喜剧",
    "tags": [
      "圣诞老人",
      "接班",
      "现代科技",
      "驯鹿罢工"
    ],
    "oneLine": "老圣诞老人退休，他的社恐女儿被迫接班，却发现全球孩子都改玩平板了。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0231",
    "title": "幻影凶间",
    "url": "./movie-0231.html",
    "cover": "./81.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2007",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "斯蒂芬·金",
      "酒店",
      "超自然",
      "心理恐怖",
      "密室"
    ],
    "oneLine": "一位不信鬼的恐怖小说作家住进著名的“海豚酒店”1408号房，房间开始用他写过所有死法来杀他。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0232",
    "title": "龙虎鬪三关",
    "url": "./movie-0232.html",
    "cover": "./82.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1972",
    "genre": "动作，武侠",
    "tags": [
      "邵氏",
      "功夫",
      "闯关",
      "兄弟情"
    ],
    "oneLine": "明朝忠臣之后为救父，独闯戒备森严的“龙虎三关”，每一关都是一场以命相搏的死斗。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0233",
    "title": "欲海杀机",
    "url": "./movie-0233.html",
    "cover": "./83.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚 / 情色 / 悬疑",
    "tags": [
      "情欲",
      "设局",
      "富豪",
      "蛇蝎美人",
      "多重反转"
    ],
    "oneLine": "亿万富翁在游艇上与神秘女郎一夜风流，醒来后发现自己成了被全城追捕的杀人犯。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0234",
    "title": "乔省长和他的女儿们",
    "url": "./movie-0234.html",
    "cover": "./84.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2022",
    "genre": "剧情 / 家庭 / 官场",
    "tags": [
      "现实主义",
      "亲情博弈",
      "退休生活",
      "政治遗产"
    ],
    "oneLine": "退休省长乔老爷子本想安享晚年，却发现四个女儿各自深陷他曾经治理过的权力与利益漩涡。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0235",
    "title": "老爸老妈的浪漫史第五季",
    "url": "./movie-0235.html",
    "cover": "./85.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "genre": "喜剧 / 爱情",
    "tags": [
      "情景喜剧",
      "友情",
      "恋爱",
      "回忆杀"
    ],
    "oneLine": "泰德终于遇到了自称“老妈”的女孩，但莉莉和马修的婚姻却突遭七年之痒。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0236",
    "title": "最后的勇士",
    "url": "./movie-0236.html",
    "cover": "./86.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻 / 动作 / 喜剧",
    "tags": [
      "勇士",
      "穿越",
      "俄罗斯神话",
      "搞笑",
      "特效"
    ],
    "oneLine": "一个被所有人嘲笑的莫斯科废柴，意外穿越到古代罗斯，必须证明自己就是传说中的最后勇士。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0237",
    "title": "我是顾家男",
    "url": "./movie-0237.html",
    "cover": "./87.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情， 家庭， 喜剧",
    "tags": [
      "男性视角",
      "家庭主夫",
      "育儿",
      "中年危机"
    ],
    "oneLine": "曾是金牌销售员的顾家南为了家庭成为全职主夫，却发现自己正在被这个“高效”的社会系统性地淘汰。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0238",
    "title": "等待月亮",
    "url": "./movie-0238.html",
    "cover": "./88.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "科幻、剧情",
    "tags": [
      "太空",
      "孤独",
      "AI",
      "文艺科幻"
    ],
    "oneLine": "在月球基地独自驻守三年的宇航员，每天收到来自地球的AI语音“晚安”，直到有一天语音说了一句从未说过的话。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0239",
    "title": "酱园弄·悬案",
    "url": "./movie-0239.html",
    "cover": "./89.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "悬疑, 古装",
    "tags": [
      "民国",
      "凶案",
      "女性复仇",
      "社会派"
    ],
    "oneLine": "酱园弄女老板被杀，全镇人都有嫌疑，只有那个失忆的哑巴丫鬟在默默拼凑真相。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0240",
    "title": "狼嚎再起",
    "url": "./movie-0240.html",
    "cover": "./90.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2018",
    "genre": "惊悚 / 灾难 / 动作",
    "tags": [
      "极寒封锁",
      "野性觉醒",
      "边境生存",
      "群体恐慌",
      "声音追猎"
    ],
    "oneLine": "一次雪原救援让沉寂多年的狼群再度暴走，而真正的威胁并不是野兽本身，而是人类埋下的秘密。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0241",
    "title": "布尔什维克兄弟",
    "url": "./movie-0241.html",
    "cover": "./91.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2021",
    "genre": "剧情、历史、战争",
    "tags": [
      "兄弟情",
      "苏联",
      "黑色幽默",
      "信仰崩塌"
    ],
    "oneLine": "一对被斯大林清洗过的兄弟，几十年后竟在普京时代重逢于街头冲突的敌对双方。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0242",
    "title": "马永贞",
    "url": "./movie-0242.html",
    "cover": "./92.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作，剧情",
    "tags": [
      "民国",
      "上海滩",
      "功夫",
      "黑帮"
    ],
    "oneLine": "不同于以往的英雄，这个马永贞是个只想在澡堂打工的胆小鬼，直到他唯一的朋友被害。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0243",
    "title": "神盾局特工第四季",
    "url": "./movie-0243.html",
    "cover": "./93.jpg",
    "region": "美国",
    "type": "科幻动作剧",
    "year": "2026",
    "genre": "动作, 间谍, 政治惊悚",
    "tags": [
      "量子芯片",
      "维度任务",
      "机构阴谋",
      "团队背叛",
      "记忆篡改"
    ],
    "oneLine": "神盾局宣布清理历史文件后，第四季的特工小队发现灾难预演清单被提前写好，必须在维度崩塌前先找回谁掌握了记忆的开关。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0244",
    "title": "三个男人和一条美腿",
    "url": "./movie-0244.html",
    "cover": "./94.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 黑色幽默",
    "tags": [
      "截肢",
      "荒诞",
      "真假美腿",
      "欲望象征"
    ],
    "oneLine": "一个截肢女明星的仿生美腿被偷走，三个男人都想抢到它，以为它能给自己带来好运。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0245",
    "title": "警网擒凶",
    "url": "./movie-0245.html",
    "cover": "./95.jpg",
    "region": "香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 犯罪",
    "tags": [
      "港产片",
      "警匪",
      "动作",
      "卧底",
      "枪战"
    ],
    "oneLine": "卧底警察即将归队，却发现整个警署都是黑帮的人，只有他能证明自己的清白。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0246",
    "title": "私人保镖",
    "url": "./movie-0246.html",
    "cover": "./96.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 犯罪, 喜剧",
    "tags": [
      "保镖",
      "乌龙事件",
      "黑帮喜剧",
      "港式幽默"
    ],
    "oneLine": "菜鸟保镖误打误撞成为黑帮老大的贴身护卫，却发现雇主竟是警方卧底，自己反而成了全城追杀的目标。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0247",
    "title": "古堡游龙",
    "url": "./movie-0247.html",
    "cover": "./97.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "动作，奇幻",
    "tags": [
      "古装",
      "龙",
      "寻宝"
    ],
    "oneLine": "落魄画师被召入皇家古堡画龙，却发现壁画上的龙每到子夜就会活过来吃掉真相。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0248",
    "title": "天伦乐",
    "url": "./movie-0248.html",
    "cover": "./98.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "家庭 / 剧情",
    "tags": [
      "亲情",
      "养老",
      "返乡",
      "和解",
      "乡土"
    ],
    "oneLine": "除夕夜，三个在大城市打拼的子女被老父亲“骗”回乡下，发现家里多了一个不说话的“新弟弟”。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0249",
    "title": "在壁橱里谈话",
    "url": "./movie-0249.html",
    "cover": "./99.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 同性 / 家庭",
    "tags": [
      "出柜",
      "父子关系",
      "和解"
    ],
    "oneLine": "15 岁男孩在自己的壁橱里，与父亲进行了一场持续三年的跨时空对话。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0250",
    "title": "其实你不懂他的心",
    "url": "./movie-0250.html",
    "cover": "./100.jpg",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情 / 都市",
    "tags": [
      "女性",
      "职场",
      "现实"
    ],
    "oneLine": "四个在上海打拼的闺蜜，遭遇了来自职场PUA、凤凰男、妈宝男的情感陷阱，她们该如何破局？",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0251",
    "title": "天空之眼",
    "url": "./movie-0251.html",
    "cover": "./101.jpg",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2024",
    "genre": "战争 / 剧情 / 惊悚",
    "tags": [
      "无人机战争",
      "道德困境",
      "反恐"
    ],
    "oneLine": "一名女上校要通过无人机消灭恐怖分子，但导弹落点旁出现了一个卖饼的小女孩。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0252",
    "title": "自大的范尔",
    "url": "./movie-0252.html",
    "cover": "./102.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 传记 / 历史",
    "tags": [
      "名著改编",
      "讽刺",
      "阶级",
      "英国文学"
    ],
    "oneLine": "一个除了才华一无所有的穷作家，试图用自己的傲慢敲开维多利亚时代伦敦的上流社会大门。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0253",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 欢乐一家亲第二季 霸王妖姬 天降美食国语 主妇狂想曲 史前巨鳄 记忆之中 大小黄天霸 病毒航班 女体铳 英雄五杀 香衾春色 洪荒巨兽 星际传奇2 人间·喜剧 好汉三条半 卫国先锋 禁播档案 拾光的秘密 大地呼声 独角兽战争",
    "url": "./movie-0253.html",
    "cover": "./103.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0254",
    "title": "艾琳青春纪事",
    "url": "./movie-0254.html",
    "cover": "./104.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 青春",
    "tags": [
      "少女",
      "成长",
      "法语",
      "乡村",
      "初恋"
    ],
    "oneLine": "1980年代法国乡村少女艾琳，用一本秘密日记记录了整个家族的尴尬与温柔。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0255",
    "title": "勇士之路",
    "url": "./movie-0255.html",
    "cover": "./105.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2023",
    "genre": "奇幻 / 冒险",
    "tags": [
      "少年成长",
      "剑与魔法",
      "公路片"
    ],
    "oneLine": "废柴少年捡到一把会说话的神剑，被迫踏上挑战八大魔神的不归路。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0256",
    "title": "爱情事件",
    "url": "./movie-0256.html",
    "cover": "./106.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情",
    "tags": [
      "婚外情",
      "道德困境",
      "圣诞节",
      "重逢"
    ],
    "oneLine": "两个已婚男女在圣诞派对立下约定：如果一年后还想在一起，就私奔。但当天，车祸发生了。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0257",
    "title": "飞越情海",
    "url": "./movie-0257.html",
    "cover": "./107.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情 / 同性",
    "tags": [
      "澎湖",
      "女飞官",
      "同性之恋",
      "家庭冲突"
    ],
    "oneLine": "一位澎湖渔村长大的女孩成为台军首位女战斗机飞行员，而她与地勤机械师的爱情，不被母亲原谅。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0258",
    "title": "红颜煞",
    "url": "./movie-0258.html",
    "cover": "./108.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作武侠",
    "tags": [
      "女杀手",
      "民国",
      "旗袍"
    ],
    "oneLine": "民国上海滩，一名旗袍女子连杀三位帮派大佬，巡捕房发现她竟是已死的名伶。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0259",
    "title": "皇冠高地",
    "url": "./movie-0259.html",
    "cover": "./109.jpg",
    "region": "英国",
    "type": "历史权谋片",
    "year": "2016",
    "genre": "历史, 权谋, 冒险",
    "tags": [
      "皇冠诅咒",
      "民众投票",
      "记忆协定",
      "雾岭政治",
      "王权象征",
      "地下议会"
    ],
    "oneLine": "高地王冠每次更换主人都会抹去十分钟记忆，年轻女王在雾夜里重建法度与联盟，让象征失去权威的皇冠转变为全民监督的公器。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0260",
    "title": "眼见为凭",
    "url": "./movie-0260.html",
    "cover": "./110.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2021",
    "genre": "悬疑, 惊悚",
    "tags": [
      "盲人",
      "证人",
      "反转",
      "密室"
    ],
    "oneLine": "盲人按摩师是唯一目睹了隔壁谋杀案的“目击者”，但他的证词，警察不信。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0261",
    "title": "百花缭乱 武士新娘 特典",
    "url": "./movie-0261.html",
    "cover": "./111.jpg",
    "region": "日本",
    "type": "OVA",
    "year": "2023",
    "genre": "动作 / 奇幻 / 恋爱",
    "tags": [
      "武士",
      "后宫",
      "特典福利"
    ],
    "oneLine": "婚礼前夕，十位新娘继承历代英灵之力，与新郎携手挫败“灭世婚礼”阴谋。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0262",
    "title": "完美娇妻",
    "url": "./movie-0262.html",
    "cover": "./112.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚, 悬疑, 剧情",
    "tags": [
      "科技伦理",
      "人工智能",
      "婚姻",
      "控制欲"
    ],
    "oneLine": "丈夫定制了一个AI完美妻子，但当她开始拥有自我意识后，理想家园变成了恐怖牢笼。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0263",
    "title": "麒麟特战队之机甲核心",
    "url": "./movie-0263.html",
    "cover": "./113.jpg",
    "region": "中国大陆",
    "type": "电影 / 网络电影",
    "year": "2022",
    "genre": "动作 / 科幻 / 军事",
    "tags": [
      "机甲战斗",
      "特种部队",
      "未来战争",
      "硬核"
    ],
    "oneLine": "2042年，最强机甲麒麟小队遭遇叛变，核心驾驶员发现自己的记忆是植入的。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0264",
    "title": "星球大战9：天行者崛起",
    "url": "./movie-0264.html",
    "cover": "./114.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "科幻, 动作",
    "tags": [
      "太空歌剧",
      "史诗终章",
      "光剑对决"
    ],
    "oneLine": "最后的抵抗军，必须找到隐藏在银河系边缘的终极武器，才能击败复活了的帕尔帕廷皇帝。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0265",
    "title": "宅门恩怨",
    "url": "./movie-0265.html",
    "cover": "./115.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "民国家族 / 悬疑情感 / 权谋",
    "tags": [
      "豪门宅斗",
      "族谱秘密",
      "旧宅谜案",
      "继承争夺",
      "双线回忆",
      "女性觉醒"
    ],
    "oneLine": "一座百年老宅里封存的不只是家族荣光，还有一桩牵连两代人的失踪案，所有继承人都在争产时逐渐露出真面目。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0266",
    "title": "心霊内科医稲生知性",
    "url": "./movie-0266.html",
    "cover": "./116.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "恐怖 / 医疗 / 悬疑",
    "tags": [
      "灵异现象",
      "科学驱魔",
      "单元剧"
    ],
    "oneLine": "一位精神科医生认为所有鬼怪都是脑内病变，直到她接诊了一个“被自己影子追杀”的病人。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0267",
    "title": "鲨卷风3",
    "url": "./movie-0267.html",
    "cover": "./117.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "genre": "喜剧， 科幻， 惊悚",
    "tags": [
      "鲨鱼",
      "龙卷风",
      "B级片",
      "无厘头",
      "恶搞"
    ],
    "oneLine": "史上最离谱的鲨鱼龙卷风再次升级，这次连太空站都无法幸免。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0268",
    "title": "惹火娇娃",
    "url": "./movie-0268.html",
    "cover": "./118.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "动作, 犯罪, 女性",
    "tags": [
      "女特工",
      "变装",
      "复仇"
    ],
    "oneLine": "金盆洗手的女飞贼为了救回被黑帮绑架的女儿，重操旧业，利用美色与高科技炸毁赌场金库。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0269",
    "title": "饥渴",
    "url": "./movie-0269.html",
    "cover": "./119.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚, 恐怖, 剧情",
    "tags": [
      "吸血鬼",
      "饥饿",
      "欲望",
      "宗教"
    ],
    "oneLine": "一个被上帝抛弃的神父，为了对抗体内无法满足的饥渴，选择了与恶魔交易。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0270",
    "title": "魔鬼同意令",
    "url": "./movie-0270.html",
    "cover": "./120.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 心理",
    "tags": [
      "邪教",
      "心理操控",
      "签署协议"
    ],
    "oneLine": "一个绝望的母亲签署了一份“让儿子复活”的协议，事后发现合同中每个字都是陷阱。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0271",
    "title": "霓虹心",
    "url": "./movie-0271.html",
    "cover": "./121.jpg",
    "region": "日本",
    "type": "动画电影",
    "year": "2025",
    "genre": "科幻, 爱情, 都市",
    "tags": [
      "赛博都市",
      "电子音乐",
      "AI恋爱",
      "女主成长",
      "霓虹美学"
    ],
    "oneLine": "在全天候霓虹雨下，歌手兼程序员葵决定与一台会写情书的AI共享感官，却在情感和自由之间发现自己从未见过的第三种自己。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0272",
    "title": "孤独的士兵",
    "url": "./movie-0272.html",
    "cover": "./122.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2026",
    "genre": "战争, 剧情, 心理",
    "tags": [
      "二战",
      "斯大林格勒",
      "幸存者",
      "反战"
    ],
    "oneLine": "斯大林格勒战役中唯一存活的德国士兵，逃回家乡后发现所有人都已当他是死人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0273",
    "title": "明明系发明",
    "url": "./movie-0273.html",
    "cover": "./123.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 科幻",
    "tags": [
      "发明",
      "乌龙",
      "亲情"
    ],
    "oneLine": "一个自称“发明家”的废柴老爸，为了挽回离家出走的儿子，把所有失败发明改造了一遍。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0274",
    "title": "谁动了我的蛋糕",
    "url": "./movie-0274.html",
    "cover": "./124.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑，喜剧，剧情",
    "tags": [
      "职场政治",
      "封闭空间",
      "黑色幽默",
      "推理"
    ],
    "oneLine": "某顶尖广告公司例会上，为庆祝中标定制的巨型蛋糕里被人藏了一根断指，全公司进入“谁是真凶”的疯狂内斗。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0275",
    "title": "4条大路通阴间",
    "url": "./movie-0275.html",
    "cover": "./125.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2019",
    "genre": "恐怖 / 喜剧 / 惊悚",
    "tags": [
      "分段式",
      "泰国民俗",
      "黑色幽默",
      "因果报应"
    ],
    "oneLine": "四个故事分别对应四条通往阴间的路：电梯、医院走廊、寺庙后门、母亲的子宫。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0276",
    "title": "季风季节",
    "url": "./movie-0276.html",
    "cover": "./126.jpg",
    "region": "印度尼西亚",
    "type": "电影",
    "year": "2017",
    "genre": "文艺 / 成长 / 家庭",
    "tags": [
      "雨季来临",
      "返乡记忆",
      "乡土变迁",
      "少年视角",
      "失落与和解",
      "东南亚气质"
    ],
    "oneLine": "每年季风到来时，离乡多年的青年都会回到海边老屋，而他真正害怕的不是暴雨，而是旧日亲情在潮湿空气里重新发酵。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0277",
    "title": "亲密如贼",
    "url": "./movie-0277.html",
    "cover": "./127.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "genre": "犯罪 / 悬疑 / 爱情",
    "tags": [
      "雌雄大盗",
      "博物馆盗窃",
      "感情测谎",
      "反转再反转",
      "黑吃灰"
    ],
    "oneLine": "一对伪装成情侣的盗贼成功偷走名画，却发现对方都是警方卧底，且任务互不知情。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0278",
    "title": "科妮莉亚",
    "url": "./movie-0278.html",
    "cover": "./128.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 悬疑",
    "tags": [
      "身份错位",
      "庄园",
      "画像",
      "维多利亚"
    ],
    "oneLine": "维多利亚时代，贫穷女家庭教师科妮莉亚发现自己与庄园里一幅百年前贵妇画像长得一模一样，画中人在看她。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0279",
    "title": "大泽之水",
    "url": "./movie-0279.html",
    "cover": "./129.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1941",
    "genre": "剧情, 爱情",
    "tags": [
      "黑色电影",
      "沼泽",
      "三角恋",
      "宿命"
    ],
    "oneLine": "一个逃跑的杀人犯躲进沼泽，一对看守灯塔的夫妇在道德与欲望间摇摆。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0280",
    "title": "冠军请指教",
    "url": "./movie-0280.html",
    "cover": "./130.jpg",
    "region": "中国大陆",
    "type": "综艺 / 真人秀",
    "year": "2023",
    "genre": "运动 / 竞技 / 真人秀",
    "tags": [
      "体育",
      "跨界",
      "挑战",
      "励志"
    ],
    "oneLine": "六位零基础的娱乐圈艺人，必须在三个月内接受魔鬼训练，挑战一项从未涉足的专业体育项目。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0281",
    "title": "风中奇缘",
    "url": "./movie-0281.html",
    "cover": "./131.jpg",
    "region": "美国",
    "type": "动画电影",
    "year": "1995",
    "genre": "动画, 歌舞, 爱情, 冒险",
    "tags": [
      "自然灵性",
      "文化冲突",
      "爱情选择",
      "土地守护",
      "历史寓言"
    ],
    "oneLine": "当风开始替大地说话，一位不愿被命运安排的少女必须在族群、爱情与家园之间，做出足以改变所有人的选择。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0282",
    "title": "女人寻春",
    "url": "./movie-0282.html",
    "cover": "./132.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2008",
    "genre": "文艺，爱情，公路，家庭",
    "tags": [
      "中年女性",
      "自我觉醒",
      "海岸旅行",
      "旧情回望",
      "温柔修补"
    ],
    "oneLine": "一位四十岁女性在替母亲完成一趟春日祭祖之旅的途中，意外踏上了重新认识自己和人生的路。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0283",
    "title": "爸爸，小船",
    "url": "./movie-0283.html",
    "cover": "./133.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情，家庭，儿童",
    "tags": [
      "亲情",
      "留守儿童",
      "治愈",
      "海洋"
    ],
    "oneLine": "为了让自闭症儿子叫一声爸爸，一个渔村汉子决定造一艘去海底的船。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0284",
    "title": "凸搥特派员",
    "url": "./movie-0284.html",
    "cover": "./134.jpg",
    "region": "香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作喜剧",
    "tags": [
      "乌龙间谍",
      "高科技装备",
      "反套路"
    ],
    "oneLine": "最不靠谱的保全专员阿槌，误打误撞被派去执行一项关乎世界毁灭的机密任务。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0285",
    "title": "90后的80后后妈",
    "url": "./movie-0285.html",
    "cover": "./135.jpg",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2023",
    "genre": "喜剧 / 爱情 / 家庭",
    "tags": [
      "重组家庭",
      "代际冲突",
      "轻喜"
    ],
    "oneLine": "26岁女孩嫁给42岁大叔后，发现最头疼的不是婆媳关系，而是比自己还叛逆的18岁继子。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0286",
    "title": "锁命横财",
    "url": "./movie-0286.html",
    "cover": "./136.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑，惊悚，犯罪",
    "tags": [
      "密室",
      "人性考验",
      "金钱诅咒",
      "反转"
    ],
    "oneLine": "清洁工从死者公寓偷走巨款，却发现这笔钱会“锁”住每一个经手人的命。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0287",
    "title": "神鬼认证：神鬼疑云",
    "url": "./movie-0287.html",
    "cover": "./137.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2004",
    "genre": "动作，悬疑，谍战",
    "tags": [
      "失忆",
      "特工",
      "谍影",
      "追踪",
      "身份"
    ],
    "oneLine": "失忆特工杰森·伯恩刚找回一点线索，却又被中情局的新杀手锁定，真相愈发扑朔迷离。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0288",
    "title": "爸爸的三轮车",
    "url": "./movie-0288.html",
    "cover": "./138.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2019",
    "genre": "家庭 / 剧情",
    "tags": [
      "亲情",
      "父子",
      "底层",
      "奋斗",
      "城市"
    ],
    "oneLine": "一辆破旧三轮车，撑起儿子大学梦与父亲一生的沉默守护。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0289",
    "title": "良辰吉日",
    "url": "./movie-0289.html",
    "cover": "./139.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "中式恐怖",
      "民俗婚礼",
      "冥婚",
      "反转再反转"
    ],
    "oneLine": "姐姐替妹妹出嫁，却在洞房夜发现新郎是一具尸体，而这场冥婚的受害者远不止她一人。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0290",
    "title": "特洛伊奥德赛",
    "url": "./movie-0290.html",
    "cover": "./140.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作，奇幻，史诗",
    "tags": [
      "希腊神话",
      "英雄",
      "海难",
      "怪兽",
      "归乡之路"
    ],
    "oneLine": "特洛伊战争结束后，奥德修斯在海上漂流十年，他不只要对抗海妖独眼巨人，还要对抗士兵们对于“回家”的信仰崩塌。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0291",
    "title": "白色女孩",
    "url": "./movie-0291.html",
    "cover": "./141.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑, 剧情, 心理",
    "tags": [
      "失踪案",
      "记忆碎片",
      "北海道雪景",
      "社会派"
    ],
    "oneLine": "北海道小镇的雪地里发现一个失忆的白衣女孩，而当居民们尝试帮助她时，怪事接连发生。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0292",
    "title": "热铁皮屋顶上的猫",
    "url": "./movie-0292.html",
    "cover": "./142.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 悬疑",
    "tags": [
      "拆迁",
      "留守儿童",
      "魔幻",
      "酷暑"
    ],
    "oneLine": "拆迁前最后的夏天，四个孩子在即将倒塌的楼顶发现了一只不会叫的猫，并因此卷入一场成人世界的秘密。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0293",
    "title": "大村官之放飞梦想",
    "url": "./movie-0293.html",
    "cover": "./143.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2016",
    "genre": "农村励志 / 现实情感 / 青春成长",
    "tags": [
      "乡村振兴",
      "村官成长",
      "基层治理",
      "青年创业",
      "返乡建设"
    ],
    "oneLine": "一个被派回山村的年轻村官，在旧规矩和新梦想之间硬闯出一条路，也把一群沉默的乡亲重新带回了希望里。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0294",
    "title": "开往明天的列车",
    "url": "./movie-0294.html",
    "cover": "./144.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 奇幻 / 剧情",
    "tags": [
      "穿越",
      "治愈",
      "遗憾",
      "宿命"
    ],
    "oneLine": "一个中年失意的男子跳轨自杀未遂，醒来发现自己困在一列永远开往“明天”的列车上，乘客都是他曾经辜负过的人。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0295",
    "title": "考试",
    "url": "./movie-0295.html",
    "cover": "./145.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑, 惊悚",
    "tags": [
      "密室",
      "心理战",
      "教育",
      "反转"
    ],
    "oneLine": "六位考生被困考场，考试规则只有一条：最后一名将死。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0296",
    "title": "明月守护者",
    "url": "./movie-0296.html",
    "cover": "./146.jpg",
    "region": "法国",
    "type": "动画电影",
    "year": "2014",
    "genre": "奇幻, 冒险, 爱情",
    "tags": [
      "唯美",
      "想象力",
      "童话",
      "浪漫"
    ],
    "oneLine": "一个笨拙的月亮守护者弄丢了月亮，导致世界大乱，他必须跨越梦境与现实的边缘，找回发光的星球。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0297",
    "title": "名将之后",
    "url": "./movie-0297.html",
    "cover": "./147.jpg",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2021",
    "genre": "剧情， 运动",
    "tags": [
      "摔跤",
      "非遗",
      "少年",
      "成长",
      "传承"
    ],
    "oneLine": "一个沉迷游戏的“废柴”少年，被查出是晚清名将之后，被迫继承家族使命，学习即将失传的“布库”摔跤。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0298",
    "title": "惊弓之岛",
    "url": "./movie-0298.html",
    "cover": "./148.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑， 惊悚， 冒险",
    "tags": [
      "孤岛",
      "大逃杀",
      "心理战",
      "解谜"
    ],
    "oneLine": "十名陌生人被送到一座无人岛，每人身后都绑着一把弩，而岛上唯一的规则是：箭不能指向任何人。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0299",
    "title": "历劫蔷薇",
    "url": "./movie-0299.html",
    "cover": "./149.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2023",
    "genre": "剧情 / 犯罪 / 女性",
    "tags": [
      "女性复仇",
      "底层挣扎",
      "港剧",
      "黑色电影",
      "逆境重生"
    ],
    "oneLine": "茶餐厅女工被陷害入狱十年，出狱后她化身“蔷薇”，向当年害她的四名仇人温柔复仇。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0300",
    "title": "艳阳春水惊鸿",
    "url": "./movie-0300.html",
    "cover": "./150.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "武侠 / 爱情 / 古装",
    "tags": [
      "江湖",
      "失忆",
      "杀手",
      "复仇",
      "虐恋"
    ],
    "oneLine": "她是失忆的顶级杀手，他是江南画舫的哑巴琴师，当她恢复记忆的那天，发现要杀的目标正是他的亲生父亲。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0301",
    "title": "狗眼看人心",
    "url": "./movie-0301.html",
    "cover": "./1.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 社会 / 家庭",
    "tags": [
      "忠犬",
      "邻里纠纷",
      "中产焦虑",
      "人性",
      "以小见大"
    ],
    "oneLine": "一只小狗被邻居的大狗咬死，本该是简单的民事纠纷，却演变成了一场撕破脸的人性大战。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0302",
    "title": "伤痕累累",
    "url": "./movie-0302.html",
    "cover": "./2.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 运动",
    "tags": [
      "格斗",
      "女性成长",
      "父女和解",
      "逆袭"
    ],
    "oneLine": "退役女拳手为救女儿重返擂台，却发现最大的对手是内心的创伤。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0303",
    "title": "恶狼年代",
    "url": "./movie-0303.html",
    "cover": "./3.jpg",
    "region": "俄罗斯",
    "type": "电视剧",
    "year": "2026",
    "genre": "犯罪，剧情，黑帮",
    "tags": [
      "俄罗斯黑帮",
      "90年代",
      "寡头",
      "兄弟情"
    ],
    "oneLine": "苏联解体后的混乱90年代，三个发小从街头小贩做起，逐渐成为莫斯科黑帮寡头，最终却互相残杀。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0304",
    "title": "大明星丽莎",
    "url": "./movie-0304.html",
    "cover": "./4.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 悬疑",
    "tags": [
      "娱乐圈",
      "替身",
      "阴谋",
      "追凶"
    ],
    "oneLine": "顶流女星突然失踪，她的平民替身被推上台前，却卷入连环命案。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0305",
    "title": "马孔多",
    "url": "./movie-0305.html",
    "cover": "./5.jpg",
    "region": "哥伦比亚",
    "type": "电影",
    "year": "2027",
    "genre": "魔幻现实主义、剧情",
    "tags": [
      "家族",
      "宿命",
      "暴雨",
      "孤独"
    ],
    "oneLine": "马孔多被一场持续十年的暴雨淹没，水面下浮起整个家族的秘密。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0306",
    "title": "诱惑我小妈",
    "url": "./movie-0306.html",
    "cover": "./6.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1996",
    "genre": "剧情，爱情，伦理",
    "tags": [
      "禁忌之恋",
      "伦理",
      "港式奇情",
      "家族恩怨"
    ],
    "oneLine": "他恨父亲，为了报复，他决定去诱惑父亲刚娶进门的新娘，却没料到她会让他真的沦陷。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0307",
    "title": "双生杀手的崛起",
    "url": "./movie-0307.html",
    "cover": "./7.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 惊悚",
    "tags": [
      "双子",
      "杀手",
      "反英雄",
      "暴力美学"
    ],
    "oneLine": "连体双胞胎杀手被分开后，一人成了顶尖特工，另一人则成了他的暗杀目标。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0308",
    "title": "魔方高手",
    "url": "./movie-0308.html",
    "cover": "./8.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情，励志，竞技",
    "tags": [
      "魔方",
      "自闭症",
      "天才",
      "父子"
    ],
    "oneLine": "一位患有自闭症的天才少年通过魔方打开了心门，却也在赛场上面临世俗的偏见。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0309",
    "title": "瘦人之歌",
    "url": "./movie-0309.html",
    "cover": "./9.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "歌舞, 传记",
    "tags": [
      "音乐",
      "绝症",
      "励志",
      "黑人"
    ],
    "oneLine": "体重300斤的蓝调歌手被确诊绝症，他决定在死前开一场演唱会，唱到“瘦下去”。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0310",
    "title": "四面受敌",
    "url": "./movie-0310.html",
    "cover": "./10.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 惊悚 / 犯罪",
    "tags": [
      "密室",
      "反恐",
      "孤胆英雄",
      "极限压力"
    ],
    "oneLine": "一个被困在透明审讯室的前特工，要在72小时内同时应付审讯、外敌入侵和体内定时毒药。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0311",
    "title": "非常背叛",
    "url": "./movie-0311.html",
    "cover": "./11.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2027",
    "genre": "惊悚、犯罪",
    "tags": [
      "谍战",
      "家庭伦理",
      "双重间谍",
      "高智商博弈"
    ],
    "oneLine": "一名朝鲜间谍潜伏韩国十年，组建了幸福家庭，直到上级命令他亲手毁掉这一切。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0312",
    "title": "从凌晨到夜晚",
    "url": "./movie-0312.html",
    "cover": "./12.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2016",
    "genre": "剧情 / 家庭 / 生活流",
    "tags": [
      "二十四小时",
      "出租车",
      "城市夜话",
      "群像",
      "现实"
    ],
    "oneLine": "跟随一辆夜班出租车，见证从凌晨到夜晚，一座城市里五个普通人的生死12小时。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0313",
    "title": "红颜未老恩先断",
    "url": "./movie-0313.html",
    "cover": "./13.jpg",
    "region": "中国内地",
    "type": "剧集",
    "year": "2028",
    "genre": "古装 / 爱情 / 宫斗 / 悲剧",
    "tags": [
      "深宫怨",
      "帝后离心",
      "虐恋",
      "嫡庶之争",
      "女性悲剧"
    ],
    "oneLine": "皇后用半生心血助帝王坐稳江山，却在新秀女入宫当晚，接到了废后的圣旨和一壶毒酒。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0314",
    "title": "白痴之日",
    "url": "./movie-0314.html",
    "cover": "./14.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "讽刺 / 荒诞 / 剧情",
    "tags": [
      "愚人节",
      "社会实验",
      "集体疯狂",
      "存在主义",
      "黑色寓言"
    ],
    "oneLine": "在一年一度的“合法白痴日”，一个正常人被误抓进精神病院，却成了最有智慧的人。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0315",
    "title": "波尔日记",
    "url": "./movie-0315.html",
    "cover": "./15.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情、战争、传记",
    "tags": [
      "二战德军",
      "反战日记",
      "少年士兵",
      "东线战场",
      "真实改编"
    ],
    "oneLine": "一位17岁德军士兵的日记被发现，里面没有战功，只有他如何偷偷帮助苏联孤儿并伪造阵亡记录。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0316",
    "title": "惜花芷",
    "url": "./movie-0316.html",
    "cover": "./16.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "古装 / 爱情",
    "tags": [
      "种田",
      "经商",
      "逆袭",
      "甜宠"
    ],
    "oneLine": "现代花艺师穿越成弃妇，靠一手插花绝技在古代开起连锁花坊。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0317",
    "title": "那个幽深的地方",
    "url": "./movie-0317.html",
    "cover": "./17.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2014",
    "genre": "恐怖/心理",
    "tags": [
      "心理恐怖",
      "乡下老宅",
      "童年记忆",
      "循环空间",
      "压抑感"
    ],
    "oneLine": "男子回乡下老宅收拾母亲遗物，发现地下室有一个不断延伸的走廊，且每次打开门都回到同一间房。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0318",
    "title": "人为何要创造",
    "url": "./movie-0318.html",
    "cover": "./18.jpg",
    "region": "美国",
    "type": "纪录片",
    "year": "2025",
    "genre": "纪录, 哲学",
    "tags": [
      "艺术",
      "科学",
      "人性"
    ],
    "oneLine": "从第一团篝火到人工智能，一部探寻人类创造欲本质的视觉史诗。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0319",
    "title": "火网边缘",
    "url": "./movie-0319.html",
    "cover": "./19.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 惊悚",
    "tags": [
      "黑客",
      "暗网",
      "孤胆英雄",
      "高智商犯罪",
      "复仇"
    ],
    "oneLine": "一名退役情报局黑客潜入暗网黑市，却发现他要追踪的头号目标竟是自己的亲弟弟。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0320",
    "title": "海昏行第二季",
    "url": "./movie-0320.html",
    "cover": "./20.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "冒险, 历史, 悬疑",
    "tags": [
      "盗墓",
      "西汉文化",
      "谜团升级"
    ],
    "oneLine": "第一季的幸存者刚逃出海昏侯墓，就发现一枚刻着他们名字的汉代玉佩出现在现代。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0321",
    "title": "在地心拦截",
    "url": "./movie-0321.html",
    "cover": "./21.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2003",
    "genre": "科幻冒险",
    "tags": [
      "地心通道",
      "失控能量",
      "地核危机",
      "深层探索",
      "倒计时救援"
    ],
    "oneLine": "一支秘密深钻小队在地幔下方发现了失控的古老装置，若不及时拦截，整个地球磁场都将被彻底改写。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0322",
    "title": "绿野红颜",
    "url": "./movie-0322.html",
    "cover": "./22.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "genre": "年代、爱情、抗战",
    "tags": [
      "东北抗联",
      "女猎人",
      "日军实验室",
      "雪原"
    ],
    "oneLine": "1940年东北雪原，一位猎户女儿在抗联战士的遗物里，发现了自己失踪三年的未婚夫的名字。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0323",
    "title": "蹴鞠",
    "url": "./movie-0323.html",
    "cover": "./23.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "古装运动",
    "tags": [
      "宋代",
      "足球起源",
      "热血竞技",
      "市井江湖",
      "逆袭"
    ],
    "oneLine": "北宋汴梁，一个街头混混带着一群乞丐组成的蹴鞠队，踢赢了皇家“齐云社”，却踢怒了整个官场。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0324",
    "title": "超人前传第四季",
    "url": "./movie-0324.html",
    "cover": "./24.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2004",
    "genre": "科幻 / 冒险",
    "tags": [
      "超英起源",
      "青春校园",
      "氪石"
    ],
    "oneLine": "克拉克进入了大学，遇到了神秘的“女巫”和拥有超能力的橄榄球对手，小镇的秘密即将全面爆发。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0325",
    "title": "吾妻偷情",
    "url": "./movie-0325.html",
    "cover": "./25.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 情色, 悬疑",
    "tags": [
      "不伦",
      "心理",
      "改编"
    ],
    "oneLine": "平庸的上班族发现妻子出轨，他选择沉默并跟踪调查，却陷入更深的欲望漩涡。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0326",
    "title": "理性和感性",
    "url": "./movie-0326.html",
    "cover": "./26.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情喜剧",
    "tags": [
      "姐妹",
      "爱情观",
      "现代",
      "反差"
    ],
    "oneLine": "理性至极的姐姐用Excel筛选男友，感性泛滥的妹妹靠直觉闪婚，两人被迫互换人生一个月。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0327",
    "title": "女士的品格",
    "url": "./movie-0327.html",
    "cover": "./27.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情, 职场, 女性",
    "tags": [
      "职场妈妈",
      "年龄焦虑",
      "互助"
    ],
    "oneLine": "三个不同年龄的女高管在职场厮杀中意外成为彼此的后盾，发现“女士的品格”不是完美，是不完美的勇气。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0328",
    "title": "安内蒙尼",
    "url": "./movie-0328.html",
    "cover": "./28.jpg",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 文艺",
    "tags": [
      "心理",
      "女性",
      "孤独",
      "意象"
    ],
    "oneLine": "植物学家安内蒙尼在丈夫失踪后，发现自家花园里的每一株花都长出了人的指纹。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0329",
    "title": "狂沙十万里",
    "url": "./movie-0329.html",
    "cover": "./29.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 冒险",
    "tags": [
      "西部",
      "盗墓",
      "寻宝"
    ],
    "oneLine": "为了找回丢失的国宝，盗墓贼、考古学家和退伍兵在戈壁深处组成临时联盟。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0330",
    "title": "亡骸游戏",
    "url": "./movie-0330.html",
    "cover": "./30.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2023",
    "genre": "奇幻、悬疑、战斗",
    "tags": [
      "异世界转生",
      "死灵法师",
      "黑道",
      "智斗"
    ],
    "oneLine": "最强的死灵法师被勇者杀死后转生到现代新宿，为了低调生存而用尸体技能帮黑帮收高利贷。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0331",
    "title": "我的老婆是大佬",
    "url": "./movie-0331.html",
    "cover": "./31.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 动作 / 犯罪",
    "tags": [
      "黑帮",
      "女大佬",
      "婚姻"
    ],
    "oneLine": "传奇女大佬为退隐嫁给老实公务员，婚后却因邻居欺负丈夫而重操旧业，把整个小区打造成了新的王国。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0332",
    "title": "永不言弃",
    "url": "./movie-0332.html",
    "cover": "./32.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "genre": "运动 / 励志 / 家庭",
    "tags": [
      "马拉松",
      "残障人士",
      "父子和解",
      "热血",
      "逆袭"
    ],
    "oneLine": "一场车祸夺去他的双腿，也毁掉了父子关系，直到他在轮椅上发现了父亲的马拉松旧照片。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0333",
    "title": "伊瓦鲁",
    "url": "./movie-0333.html",
    "cover": "./33.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻、冒险、剧情",
    "tags": [
      "航海",
      "神话生物",
      "父子情",
      "岛屿",
      "诅咒"
    ],
    "oneLine": "少年为拯救病重父亲，扬帆寻找传说中能实现一愿的神秘岛屿“伊瓦鲁”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0334",
    "title": "百战敢死队",
    "url": "./movie-0334.html",
    "cover": "./34.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "战争 / 动作",
    "tags": [
      "抗日",
      "小队作战",
      "冷兵器格斗",
      "兄弟情"
    ],
    "oneLine": "八名死囚换一场刺杀，任务完成后他们才发现自己只是弃子。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0335",
    "title": "三国之战神无双",
    "url": "./movie-0335.html",
    "cover": "./35.jpg",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2024",
    "genre": "动作 / 历史 / 奇幻",
    "tags": [
      "穿越",
      "吕布",
      "系统",
      "无双割草",
      "爽片"
    ],
    "oneLine": "游戏代练魂穿成吕布亲兵，激活“战神系统”，却发现历史剧本被改得面目全非。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0336",
    "title": "黒蝎女侠2：震荡之后",
    "url": "./movie-0336.html",
    "cover": "./36.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 犯罪",
    "tags": [
      "反英雄",
      "硬核格斗",
      "女杀手",
      "续作"
    ],
    "oneLine": "上一部惨胜三年后，黑蝎女侠发现当初被剿灭的帮派只是某个跨国黑警网络的冰山一角。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0337",
    "title": "李林克的小馆儿第二季",
    "url": "./movie-0337.html",
    "cover": "./37.jpg",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2026",
    "genre": "剧情、治愈、美食",
    "tags": [
      "深夜食堂",
      "都市故事",
      "人情冷暖",
      "单元剧",
      "成人向"
    ],
    "oneLine": "小馆儿生意火爆后，李林克被迫扩大店面，却发现自己离“做菜的初心”越来越远。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0338",
    "title": "血屋",
    "url": "./movie-0338.html",
    "cover": "./38.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖惊悚",
    "tags": [
      "鬼屋",
      "邪教",
      "家族秘密",
      "血浆",
      "反转"
    ],
    "oneLine": "网红探险队闯入废弃凶宅直播，却发现房屋本身是一台需要活人献祭的古老机器。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0339",
    "title": "错误的教育",
    "url": "./movie-0339.html",
    "cover": "./39.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情、家庭、伦理",
    "tags": [
      "教育内卷",
      "原生家庭",
      "社会反思",
      "亲子关系"
    ],
    "oneLine": "三个不同阶层的家庭，因为“望子成龙”的执念，一步步将自己的孩子推向了深渊。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0340",
    "title": "黎明的河边",
    "url": "./movie-0340.html",
    "cover": "./40.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "小镇",
      "河边抛尸",
      "兄弟"
    ],
    "oneLine": "赣南小镇河边惊现无名男尸，当了一辈子渡船工的哑巴忽然开口，指认凶手是自己的亲弟弟。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0341",
    "title": "万里归途",
    "url": "./movie-0341.html",
    "cover": "./41.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "剧情，战争，动作",
    "tags": [
      "撤侨",
      "外交官",
      "战争",
      "沙漠",
      "真实改编"
    ],
    "oneLine": "努米亚战乱爆发，两位手无寸铁的中国外交官，穿越炮火和沙漠，带领百名同胞回家。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0342",
    "title": "男式伊甸园",
    "url": "./movie-0342.html",
    "cover": "./42.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "黑色喜剧 / 科幻 / 社会讽刺",
    "tags": [
      "男性困境",
      "会员制社区",
      "记忆定制",
      "未来消费主义",
      "荒诞设定",
      "身份表演"
    ],
    "oneLine": "一家只对男性开放的“理想生活实验社区”突然上线，却用定制欲望、记忆删改和排名制度把居民变成了商品。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0343",
    "title": "奥尔高索洛的强盗",
    "url": "./movie-0343.html",
    "cover": "./43.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "1965",
    "genre": "剧情, 西部, 犯罪",
    "tags": [
      "撒丁岛",
      "绑匪",
      "悲情英雄",
      "黑白摄影"
    ],
    "oneLine": "撒丁岛山区最后的牧羊人被迫成为绑匪，在与现代宪兵的对抗中，他守护的不仅是自由，还有古老尊严。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0344",
    "title": "草原小屋",
    "url": "./movie-0344.html",
    "cover": "./44.jpg",
    "region": "中国内蒙古",
    "type": "剧情冒险电影",
    "year": "2016",
    "genre": "生存、成长、自然",
    "tags": [
      "草原",
      "牧民生活",
      "生存求解",
      "环保抗争",
      "青少年成长"
    ],
    "oneLine": "少年阿勒布在迁徙季误入被封锁的边境风口，小屋里的旧图纸指向一处地下水源坐标，却也让他卷入决定全村命运的矿权争夺。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0345",
    "title": "风云粤语",
    "url": "./movie-0345.html",
    "cover": "./45.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 年代 / 黑帮",
    "tags": [
      "黑帮史诗",
      "江湖恩怨",
      "时代变迁",
      "粤语原声"
    ],
    "oneLine": "一个失语的打字员，用一台老式打字机敲出了整个粤语黑帮的兴衰密码。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0346",
    "title": "方程式恋爱",
    "url": "./movie-0346.html",
    "cover": "./46.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情, 科幻, 剧情",
    "tags": [
      "算法恋爱",
      "人工智能",
      "纯爱",
      "科学实验",
      "日本"
    ],
    "oneLine": "天才程序员用恋爱算法追求女神，却发现自己的代码动了真心。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0347",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 结婚为什么 充满恩典 与姑母同行 自杀直播现场 双宝斗恶龙 血色清晨 友谊万万岁 遥远的街区 仙女教母 太多强森 兽性新人类之艳星劫 二麻租媳妇 初恋那一天所读的故事 巴雷利的巴菲 罪恶黑名单第五季 大长今 良心无悔 十四岁 一杯上路2021 象限之眼",
    "url": "./movie-0347.html",
    "cover": "./47.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0348",
    "title": "龙与雀斑公主",
    "url": "./movie-0348.html",
    "cover": "./48.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "科幻 / 动画 / 青春",
    "tags": [
      "虚拟世界",
      "歌姬",
      "变身",
      "网络身份",
      "创伤"
    ],
    "oneLine": "现实中的雀斑少女，在虚拟世界化身绝美歌姬，却被一条伤痕累累的“龙”盯上。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0349",
    "title": "身为人母",
    "url": "./movie-0349.html",
    "cover": "./49.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2006",
    "genre": "剧情 / 家庭",
    "tags": [
      "母职困境",
      "婚姻裂痕",
      "城郊生活",
      "自我觉醒",
      "情感压抑"
    ],
    "oneLine": "她以为成为母亲就是人生的答案，直到日复一日的照料、牺牲与沉默，把她推到了“我究竟是谁”的边缘。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0350",
    "title": "小河亲过我的脸",
    "url": "./movie-0350.html",
    "cover": "./50.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 家庭",
    "tags": [
      "留守儿童",
      "乡村",
      "诗意",
      "公路"
    ],
    "oneLine": "南方山村，一个留守儿童沿着即将被污染的小河独自上路，去找在城里打工的爸爸，让他回来救河。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0351",
    "title": "举报者",
    "url": "./movie-0351.html",
    "cover": "./51.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 犯罪",
    "tags": [
      "反腐",
      "悬疑",
      "人性"
    ],
    "oneLine": "一名普通会计的匿名举报，意外撕开了整座城市权力网络的血色裂缝。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0352",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 一球成名2 不堪回首话当年 地狱的花园 射雕英雄传之东邪西毒 变调的灰姑娘 帕顿·奥斯华：我爱一切 影星杰·凯利 我盛大的希腊婚礼2 年轻女子 潜行天下 没有房租的一年 梅西降临：美国足球新时代 大阅兵 性之道 龙票 只为那一刻与你相见 护理师 跳吧，女孩 西游传奇之宝象国斗神纪 互动杀人事件",
    "url": "./movie-0352.html",
    "cover": "./52.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0353",
    "title": "边城英烈传",
    "url": "./movie-0353.html",
    "cover": "./53.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "历史、战争",
    "tags": [
      "近代史",
      "边疆",
      "保家卫国",
      "真实事件改编",
      "壮烈"
    ],
    "oneLine": "1904年，东北边陲小镇，一群没受过正规训练的猎人、教师和铁匠，为守护国土向沙俄入侵者打响了一场注定失败的战斗。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0354",
    "title": "大野龙虎狗",
    "url": "./movie-0354.html",
    "cover": "./54.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1989",
    "genre": "动作、犯罪",
    "tags": [
      "黑帮",
      "兄弟情",
      "卧底"
    ],
    "oneLine": "三个从小一起长大的混混，分别成了警察、黑帮老大和疯子。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0355",
    "title": "闪谷第二季",
    "url": "./movie-0355.html",
    "cover": "./55.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑 / 奇幻",
    "tags": [
      "超自然",
      "小镇",
      "80年代复古",
      "时间线重置"
    ],
    "oneLine": "上一季结尾主角逃出了闪谷，但他醒来后发现，整个现实世界都变成了闪谷的模样。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0356",
    "title": "两代情怀",
    "url": "./movie-0356.html",
    "cover": "./56.jpg",
    "region": "台湾",
    "type": "家庭剧情片",
    "year": "1994",
    "genre": "家庭,爱情,文艺",
    "tags": [
      "代际创伤",
      "家书",
      "电影记忆",
      "成长",
      "和解"
    ],
    "oneLine": "两代人的未寄出信件在同一部坏了的放映机里重叠，往日亲情与爱情不再是回忆，而是让人愿意再次出发的方向。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0357",
    "title": "第七传人",
    "url": "./movie-0357.html",
    "cover": "./57.jpg",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2014",
    "genre": "奇幻 / 动作 / 冒险",
    "tags": [
      "预言血脉",
      "见习猎魔",
      "黑暗女巫",
      "师徒关系",
      "末世危机"
    ],
    "oneLine": "被命运选中的第七传人必须在月蚀降临前完成试炼，否则古老邪灵一旦苏醒，整片大陆都会坠入黑夜。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0358",
    "title": "无限风暴",
    "url": "./movie-0358.html",
    "cover": "./58.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 科幻, 灾难",
    "tags": [
      "时间循环",
      "暴风雪",
      "实验事故",
      "救援",
      "悬疑"
    ],
    "oneLine": "一场实验室事故让暴风雪困住了整座城市，而气象学家发现自己被困在风暴降临前的一小时循环中。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0359",
    "title": "瑜珈鲁蛇",
    "url": "./movie-0359.html",
    "cover": "./59.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧",
    "tags": [
      "废柴",
      "瑜伽",
      "女性成长",
      "反内卷"
    ],
    "oneLine": "失业废宅男误入女子瑜伽班，意外成了网红，却必须面对真实自我。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0360",
    "title": "天使杀手",
    "url": "./movie-0360.html",
    "cover": "./60.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚, 犯罪, 悬疑",
    "tags": [
      "护士",
      "连续死亡",
      "反转",
      "宗教隐喻"
    ],
    "oneLine": "一家医院儿科病房五年内死亡53名儿童，所有人都认为是主治医生的失误，直到一位护士发现了枕头上的十字架针孔。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0361",
    "title": "恐龙王国",
    "url": "./movie-0361.html",
    "cover": "./61.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "科幻，冒险，动作",
    "tags": [
      "恐龙",
      "侏罗纪",
      "克隆",
      "灾难",
      "世界观"
    ],
    "oneLine": "恐龙不再只是岛上宠物，它们进化出初级智慧并建立了王国，人类成了被圈养的“食物”。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0362",
    "title": "鬼马小精灵2",
    "url": "./movie-0362.html",
    "cover": "./62.jpg",
    "region": "美国 / 加拿大",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 奇幻 / 家庭",
    "tags": [
      "续集",
      "校园",
      "隐形人",
      "恶作剧",
      "友情"
    ],
    "oneLine": "继承了隐身超能力的麻烦精少女，在新学校里掀起一场对抗教导主任的“幽灵革命”。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0363",
    "title": "本人捷克造",
    "url": "./movie-0363.html",
    "cover": "./63.jpg",
    "region": "捷克 / 斯洛伐克",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 战争 / 传记",
    "tags": [
      "二战",
      "军工厂",
      "父子传承",
      "黑色幽默"
    ],
    "oneLine": "二战末期，一个不善言辞的捷克军械师被党卫军胁迫生产次品机枪，他决定用一把“完美”的枪做最后的反抗。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0364",
    "title": "山中小屋的回忆",
    "url": "./movie-0364.html",
    "cover": "./64.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "悬疑 / 情感 / 乡村",
    "tags": [
      "旧屋",
      "童年创伤",
      "失踪谜案",
      "山路",
      "记忆碎片",
      "返乡"
    ],
    "oneLine": "一座藏在深山里的废弃小屋，像一把被时间掩埋的钥匙，逼着长大后的她重新打开童年那段不敢回想的失踪之夜。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0365",
    "title": "恶魔的艺术2",
    "url": "./movie-0365.html",
    "cover": "./65.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2005",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "降头",
      "巫术",
      "复仇",
      "邪教"
    ],
    "oneLine": "一个农村女孩被富家子弟始乱终弃后，用最恶毒的降头术展开灭门报复。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0366",
    "title": "窥视之眸",
    "url": "./movie-0366.html",
    "cover": "./66.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑， 惊悚， 恐怖",
    "tags": [
      "偷窥",
      "公寓",
      "网络直播"
    ],
    "oneLine": "女主搬进低价公寓，发现自己能通过猫眼看到每个邻居最黑暗的秘密，而他们也在通过猫眼看她。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0367",
    "title": "甜蜜十六岁",
    "url": "./movie-0367.html",
    "cover": "./67.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 家庭",
    "tags": [
      "成长",
      "母女",
      "代际冲突",
      "蛋糕",
      "秘密"
    ],
    "oneLine": "十六岁生日宴上，女孩切开蛋糕，却发现里面藏着一份关于自己身世的DNA报告。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0368",
    "title": "黑煞星大显神通",
    "url": "./movie-0368.html",
    "cover": "./68.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1978",
    "genre": "动作, 冒险",
    "tags": [
      "邵氏",
      "功夫",
      "寻宝",
      "木乃伊"
    ],
    "oneLine": "民国时期的东方侠盗“黑煞星”远赴埃及，在金字塔内大战复活的法老木乃伊与上海黑帮。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0369",
    "title": "妻子的浪漫旅行第四季",
    "url": "./movie-0369.html",
    "cover": "./69.jpg",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2025",
    "genre": "真人秀, 旅行, 情感",
    "tags": [
      "婚姻",
      "观察室",
      "治愈",
      "明星"
    ],
    "oneLine": "五位处于不同婚姻困境中的妻子结伴前往冰岛，在极端环境下重新找回自我，而丈夫们则在观察室急得跳脚。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0370",
    "title": "香蕉先生",
    "url": "./movie-0370.html",
    "cover": "./70.jpg",
    "region": "台湾",
    "type": "电视剧",
    "year": "2023",
    "genre": "奇幻 / 爱情 / 喜剧",
    "tags": [
      "都市奇幻",
      "变身",
      "植物人设",
      "欢喜冤家",
      "轻喜剧"
    ],
    "oneLine": "黑道太子意外附身一株濒死香蕉树，只有冷漠女植物学家的吻才能让他恢复人形。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0371",
    "title": "伯格曼岛",
    "url": "./movie-0371.html",
    "cover": "./71.jpg",
    "region": "法国 / 瑞典",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 爱情",
    "tags": [
      "文艺",
      "迷影",
      "创作困境"
    ],
    "oneLine": "一对陷入婚姻危机的导演夫妇来到法罗岛，在伯格曼的旧居里，他们开始重写自己的剧本与人生。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0372",
    "title": "激浪奇迹",
    "url": "./movie-0372.html",
    "cover": "./72.jpg",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2015",
    "genre": "剧情 / 冒险",
    "tags": [
      "冲浪题材",
      "人与动物",
      "心灵救赎",
      "自然奇观"
    ],
    "oneLine": "在痛失爱子后，一个父亲跟着一群神秘的海豚，发现了海底那个足以治愈一切的粉色荧光世界。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0373",
    "title": "四保临江",
    "url": "./movie-0373.html",
    "cover": "./73.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "历史 / 战争",
    "tags": [
      "解放战争",
      "东北战场",
      "陈云",
      "林彪",
      "阻击战"
    ],
    "oneLine": "1946年寒冬，南满根据地面临杜聿明十万大军围剿，一场关乎东北战局存亡的“四保临江”拉开序幕。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0374",
    "title": "小樱桃第一季",
    "url": "./movie-0374.html",
    "cover": "./74.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "动画 / 儿童 / 家庭",
    "tags": [
      "治愈",
      "成长",
      "低龄向"
    ],
    "oneLine": "七岁女孩小樱桃拥有听到植物心事的能力，她和她的多肉植物朋友们，一起治愈了大城市里的孤独症患者。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0375",
    "title": "通灵姐妹",
    "url": "./movie-0375.html",
    "cover": "./75.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖",
    "tags": [
      "附身",
      "民俗",
      "姐妹情"
    ],
    "oneLine": "一对双胞胎姐妹，妹妹被恶灵附身，姐姐发现背后的诅咒源于她们母亲当年犯下的罪行。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0376",
    "title": "弗兰克叔叔",
    "url": "./movie-0376.html",
    "cover": "./76.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "剧情 / 家庭 / 同性",
    "tags": [
      "乡村",
      "秘密",
      "恐同",
      "救赎"
    ],
    "oneLine": "每年家庭聚会都带着“室友”参加的弗兰克叔叔，今年决定带上真正的男友，而侄女无意中发现了他的秘密。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0377",
    "title": "乐园2019",
    "url": "./movie-0377.html",
    "cover": "./77.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "科幻, 剧情, 悬疑",
    "tags": [
      "记忆上传",
      "虚拟社区",
      "失踪案",
      "未来教育",
      "人格分层"
    ],
    "oneLine": "一座号称能替人保存幸福记忆的“乐园系统”在2019年上线后，看似治愈了所有伤痛，却悄悄把一批使用者从现实中抹去。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0378",
    "title": "红颜粤语",
    "url": "./movie-0378.html",
    "cover": "./78.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2008",
    "genre": "剧情, 爱情",
    "tags": [
      "粤剧",
      "女小生",
      "错位人生",
      "情欲"
    ],
    "oneLine": "粤剧团里最红的女小生，在台上演尽才子佳人，台下却无法面对自己的性别与欲望。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0379",
    "title": "少年泰坦出击大战少年泰坦",
    "url": "./movie-0379.html",
    "cover": "./79.jpg",
    "region": "美国",
    "type": "动画电影",
    "year": "2019",
    "genre": "动作 / 喜剧 / 超级英雄",
    "tags": [
      "平行宇宙",
      "自黑",
      "萌系",
      "合体",
      "打破第四面墙"
    ],
    "oneLine": "卖萌版的少年泰坦与自己最严肃的原始版本泰坦遭遇，一言不合就开始互黑。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0380",
    "title": "夹缝求生",
    "url": "./movie-0380.html",
    "cover": "./80.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚, 犯罪, 剧情",
    "tags": [
      "考试院杀人魔",
      "租客互害",
      "密闭空间"
    ],
    "oneLine": "一个贫穷的考研生搬进了一家考试院，他发现这里的每一位古怪租客，手上都沾着前任房客的血。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0381",
    "title": "坎坷人生",
    "url": "./movie-0381.html",
    "cover": "./81.jpg",
    "region": "中国",
    "type": "电视剧",
    "year": "2021",
    "genre": "家庭伦理",
    "tags": [
      "亲情",
      "磨难",
      "成长",
      "励志"
    ],
    "oneLine": "一个普通女人从八十年代至今，穿越下岗、离异、重病，却始终把家撑成一把伞。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0382",
    "title": "农村人闯上海",
    "url": "./movie-0382.html",
    "cover": "./82.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2018",
    "genre": "喜剧, 都市, 成长",
    "tags": [
      "上海方言",
      "下岗返城",
      "偶像反转",
      "城市生存",
      "家族生意",
      "夜市奇谈"
    ],
    "oneLine": "六个从坝上县进城的表兄弟把旧仓库改成摊位后，却发现上海最难跨越的不是房租，而是彼此对“城里人面具”的羞惭与恐惧。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0383",
    "title": "有药",
    "url": "./movie-0383.html",
    "cover": "./83.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "古装 / 喜剧 / 悬疑",
    "tags": [
      "中医",
      "江湖骗子",
      "养生",
      "悬壶济世"
    ],
    "oneLine": "一个只会背《药性赋》的江湖骗子，因为治好了太后的“绝症”，被逼当了太医，还要查出下毒的真凶。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0384",
    "title": "人生第一次",
    "url": "./movie-0384.html",
    "cover": "./84.jpg",
    "region": "中国",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 青春",
    "tags": [
      "成长节点",
      "时代变迁",
      "群像戏"
    ],
    "oneLine": "从1990年到2025年，每集讲述一代人在某个年龄段的“人生第一次”——第一次上学、第一次辞职、第一次当父母、第一次离婚。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0385",
    "title": "冼星海",
    "url": "./movie-0385.html",
    "cover": "./85.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "传记，音乐，历史",
    "tags": [
      "黄河大合唱",
      "革命",
      "艺术家"
    ],
    "oneLine": "贫苦船工之子如何成长为人民音乐家，在延安的窑洞里谱写不朽的《黄河大合唱》。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0386",
    "title": "圣诞快乐颂",
    "url": "./movie-0386.html",
    "cover": "./86.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2022",
    "genre": "喜剧 / 音乐 / 家庭",
    "tags": [
      "节日合家欢",
      "灵魂互换",
      "阿卡贝拉"
    ],
    "oneLine": "一个刻薄的投行男与一个热情洋溢的教堂唱诗班指挥意外灵魂互换，必须在平安夜之前换回身体。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0387",
    "title": "狂兽粤语",
    "url": "./movie-0387.html",
    "cover": "./87.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 警匪",
    "tags": [
      "卧底",
      "癫狂",
      "粤语原声"
    ],
    "oneLine": "卧底警察被黑帮逼迫服下兽性激发药物，他必须在完全兽化前救出被绑架的女儿。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0388",
    "title": "人生是道选择题",
    "url": "./movie-0388.html",
    "cover": "./88.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "奇幻， 爱情， 剧情",
    "tags": [
      "平行宇宙",
      "高考",
      "选择",
      "悔恨",
      "重生"
    ],
    "oneLine": "35岁的单亲妈妈顾晓曼在同学会上被嘲笑后，意外获得了一个遥控器，可以跳回人生中任何一次重要的选择题面前改答案。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0389",
    "title": "虚拟情人粤语",
    "url": "./movie-0389.html",
    "cover": "./89.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2025",
    "genre": "爱情 / 科幻 / 都市",
    "tags": [
      "AI恋人",
      "粤语都市",
      "情感订制",
      "记忆上传",
      "港岛夜景",
      "伦理抉择"
    ],
    "oneLine": "她以为自己只是下载了一位虚拟恋人，没想到对方却能准确说出她失去的童年记忆，连真心都开始变得难以分辨。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0390",
    "title": "隐藏角色",
    "url": "./movie-0390.html",
    "cover": "./90.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑",
    "tags": [
      "卧底",
      "多重身份",
      "狼人杀"
    ],
    "oneLine": "一个卧底、一个变节者、一个双重间谍和一个不知道自己是警察的警察，四个人在同一个房间里，只有一个人说的是真话。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0391",
    "title": "半糖关系2",
    "url": "./movie-0391.html",
    "cover": "./91.jpg",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2020",
    "genre": "爱情，同性，都市",
    "tags": [
      "破镜重圆",
      "职场",
      "同居日常",
      "甜虐交织"
    ],
    "oneLine": "三年前不告而别的前任，竟然成了新公司空降的顶头上司，这下办公室变成了修罗场。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0392",
    "title": "暴风一族",
    "url": "./movie-0392.html",
    "cover": "./92.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1991",
    "genre": "剧情, 动作",
    "tags": [
      "古惑仔",
      "兄弟情",
      "义气",
      "黑帮",
      "悲剧"
    ],
    "oneLine": "一个只想开理发店的怯懦青年，因为误杀了一个小混混，被迫踏上了一条无法回头的修罗之路。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0393",
    "title": "对付弱者",
    "url": "./movie-0393.html",
    "cover": "./93.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2019",
    "genre": "悬疑, 犯罪, 剧情",
    "tags": [
      "校园霸凌",
      "复仇",
      "反转",
      "心理惊悚",
      "法律"
    ],
    "oneLine": "一个被霸凌的高中生长大后成为法官，他设计了一场天衣无缝的审判，让所有施暴者入狱。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0394",
    "title": "新变种人",
    "url": "./movie-0394.html",
    "cover": "./94.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2028",
    "genre": "科幻, 恐怖, 超自然",
    "tags": [
      "超能力",
      "精神病院",
      "恐惧实体化",
      "暗黑风",
      "青少年"
    ],
    "oneLine": "五名拥有危险超能力的青少年被关押在一座秘密设施中，他们最深的恐惧正化作现实吞噬彼此。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0395",
    "title": "神算子蒋敬",
    "url": "./movie-0395.html",
    "cover": "./95.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "古装悬疑",
    "tags": [
      "梁山",
      "算学",
      "连环案",
      "智斗"
    ],
    "oneLine": "梁山排名第五十三的“神算子”蒋敬，被一封血书卷入京城连环命案，算珠之下，竟藏着前朝龙脉的秘密。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0396",
    "title": "天涯寻芳踪",
    "url": "./movie-0396.html",
    "cover": "./96.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2015",
    "genre": "剧情，家庭，公路",
    "tags": [
      "失忆",
      "寻亲",
      "公路片式剧集",
      "年代跨度",
      "治愈"
    ],
    "oneLine": "儿子车祸失忆后只记得母亲身上茉莉花香，于是他踏上公路，用鼻子寻找二十年前失散的母亲。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0397",
    "title": "演讲辩论社",
    "url": "./movie-0397.html",
    "cover": "./97.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "校园/励志",
    "tags": [
      "辩论",
      "口吃",
      "友情",
      "成长"
    ],
    "oneLine": "重度口吃的男孩加入演讲辩论社，所有人都以为他是来当后勤的，直到他在全国大赛上用三分钟沉默赢了第一场。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0398",
    "title": "在波威",
    "url": "./movie-0398.html",
    "cover": "./98.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "文艺，剧情，家庭",
    "tags": [
      "小城镇",
      "留守",
      "抑郁症",
      "父子关系",
      "方言"
    ],
    "oneLine": "南方小镇“波威”，一个患有抑郁症的父亲试图在自杀前教会叛逆的儿子如何一个人活下去。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0399",
    "title": "1860",
    "url": "./movie-0399.html",
    "cover": "./99.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "历史 / 战争 / 灾难",
    "tags": [
      "圆明园",
      "清军视角",
      "纪实风格"
    ],
    "oneLine": "英法联军逼近北京前夜，一支清军斥候小队奉命去烧毁圆明园的图纸。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0400",
    "title": "青龙镇谜案",
    "url": "./movie-0400.html",
    "cover": "./100.jpg",
    "region": "中国大陆",
    "type": "TV Series",
    "year": "2024",
    "genre": "悬疑， 犯罪， 民国",
    "tags": [
      "民国奇案",
      "本格推理",
      "风水"
    ],
    "oneLine": "青龙镇接连发生“借尸还魂”案，每一具尸体都指向二十年前一场被掩埋的灭门惨案。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0401",
    "title": "无彩限的怪灵世界",
    "url": "./movie-0401.html",
    "cover": "./101.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2025",
    "genre": "奇幻, 校园, 治愈",
    "tags": [
      "怪谈",
      "色彩失明",
      "青春成长"
    ],
    "oneLine": "这个世界上只有失去情感的人才能看到怪灵，而一个完全看不到怪灵的女孩却成了驱灵社的王牌。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0402",
    "title": "世界街头女斗士3",
    "url": "./movie-0402.html",
    "cover": "./102.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作，运动",
    "tags": [
      "女性格斗",
      "街头霸王",
      "全球巡回",
      "复仇"
    ],
    "oneLine": "被逐出师门的格斗女王，为了救出被绑架的妹妹，必须辗转全球五大地下拳场，打赢一场不能赢的生死车轮战。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0403",
    "title": "婚礼的成员",
    "url": "./movie-0403.html",
    "cover": "./103.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 家庭",
    "tags": [
      "文学改编",
      "青春成长",
      "南方哥特"
    ],
    "oneLine": "12岁的假小子坚信自己应该加入哥哥的蜜月旅行，并试图用一场绑架来证明。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0404",
    "title": "不再恐惧",
    "url": "./movie-0404.html",
    "cover": "./104.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2012",
    "genre": "恐怖, 心理",
    "tags": [
      "恐惧症",
      "实验",
      "密室",
      "意志力"
    ],
    "oneLine": "七个恐惧症患者参加实验，只要在密室里待够72小时就能获得百万奖金。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0405",
    "title": "寻找马歇",
    "url": "./movie-0405.html",
    "cover": "./105.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 冒险",
    "tags": [
      "老人与海",
      "阿尔茨海默",
      "航海"
    ],
    "oneLine": "患有阿尔茨海默症的老水手独自驾船出海，声称要去找四十年前失踪的船员马歇。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0406",
    "title": "驳命老公追老婆粤语",
    "url": "./movie-0406.html",
    "cover": "./106.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2011",
    "genre": "剧情，喜剧，爱情",
    "tags": [
      "港剧",
      "身份错位",
      "追妻火葬场",
      "黑色幽默"
    ],
    "oneLine": "一场意外让花花公子与沉闷会计师灵魂互换，为了不失去妻子，他必须用情敌的身体重新追回自己的婚姻。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0407",
    "title": "我的意外老爸",
    "url": "./movie-0407.html",
    "cover": "./107.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 家庭",
    "tags": [
      "身份乌龙",
      "父子情",
      "成长",
      "治愈"
    ],
    "oneLine": "为了应付家长会，他雇了一个演员当爸爸，结果这人真是他亲爹。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0408",
    "title": "我们这一班",
    "url": "./movie-0408.html",
    "cover": "./108.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2011",
    "genre": "校园 / 青春 / 剧情",
    "tags": [
      "班级群像",
      "青春烦恼",
      "升学压力",
      "师生关系",
      "友情"
    ],
    "oneLine": "一群高三学生被塞进同一间教室，在倒计时的黑板、不断翻新的排名和各自秘密里，学会如何把“我们”活成真的。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0409",
    "title": "与时尚同居",
    "url": "./movie-0409.html",
    "cover": "./109.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2011",
    "genre": "喜剧, 爱情",
    "tags": [
      "职场",
      "小人物逆袭",
      "时尚圈",
      "讽刺"
    ],
    "oneLine": "被开除的杂志副主编拉拢一群失败者，在筒子楼里山寨顶级时尚杂志，却意外爆红。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0410",
    "title": "幸福房屋事件簿",
    "url": "./movie-0410.html",
    "cover": "./110.jpg",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2024",
    "genre": "都市悬疑, 温情喜剧, 职场, 家庭",
    "tags": [
      "房产中介",
      "社区怪谈",
      "居住焦虑",
      "旧屋秘密",
      "人情修复"
    ],
    "oneLine": "一位专门处理“难卖房”的中介，在一间间看似普通却暗藏故事的屋子里，顺手替陌生人解开了比房价更难处理的人生结。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0411",
    "title": "西部杀阵",
    "url": "./movie-0411.html",
    "cover": "./111.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作， 西部， 惊悚",
    "tags": [
      "枪战",
      "复仇",
      "荒漠",
      "孤胆英雄"
    ],
    "oneLine": "一名神秘枪手闯入被悍匪控制的西部小镇，必须在日落前破解杀阵救出人质。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0412",
    "title": "叛逆者",
    "url": "./movie-0412.html",
    "cover": "./112.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "谍战， 年代",
    "tags": [
      "民国",
      "双面间谍",
      "信仰",
      "烧脑",
      "反转"
    ],
    "oneLine": "军统特训营第一名毕业生被派去潜伏共党，却在第一次任务中发现自己竟是共党早就埋下的“沉睡者”。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0413",
    "title": "玉蒲团之官人我要",
    "url": "./movie-0413.html",
    "cover": "./113.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1998",
    "genre": "古装、情色",
    "tags": [
      "风月",
      "搞笑",
      "伦理",
      "讽刺"
    ],
    "oneLine": "一名书生为求功名娶了富家女，却发现家中每个女人都有一本“欲望日记”。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0414",
    "title": "无痛侠",
    "url": "./movie-0414.html",
    "cover": "./114.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2019",
    "genre": "动作喜剧",
    "tags": [
      "先天无痛",
      "复仇成长",
      "反套路英雄",
      "黑帮追缉"
    ],
    "oneLine": "一个天生感受不到疼痛的男孩，被动作电影和旧仇同时喂大，最后决定用最离谱也最诚实的方式替自己的人生开打。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0415",
    "title": "爱情无计",
    "url": "./movie-0415.html",
    "cover": "./115.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1938",
    "genre": "爱情 / 喜剧 / 误会 / 都市",
    "tags": [
      "阶层碰撞",
      "假戏真做",
      "机智对白",
      "复古浪漫",
      "追逐误会",
      "双强博弈"
    ],
    "oneLine": "一份被写坏的婚约、一次临时冒充的约会和一场全城误认的绯闻，把两位最不肯低头的人推向了意外真心。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0416",
    "title": "丧尸犀利哥",
    "url": "./movie-0416.html",
    "cover": "./116.jpg",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 恐怖 / 动作 / 黑色幽默",
    "tags": [
      "丧尸末日",
      "流浪汉",
      "潮牌文化",
      "底层逆袭"
    ],
    "oneLine": "丧尸病毒爆发后，一个衣衫褴褛的流浪汉被潮牌主理人误认为“末日高定设计师”，阴差阳错成了人类抵抗军的精神领袖。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0417",
    "title": "奴隶区",
    "url": "./movie-0417.html",
    "cover": "./117.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑, 惊悚",
    "tags": [
      "生存游戏",
      "心理控制",
      "人性实验",
      "反转"
    ],
    "oneLine": "一个名为“SCM”的奴役设备突然普及，戴上它的人要么成为主人，要么沦为奴隶。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0418",
    "title": "创世纪1：地产风云粤语",
    "url": "./movie-0418.html",
    "cover": "./118.jpg",
    "region": "香港",
    "type": "商战悬疑电视剧",
    "year": "2015",
    "genre": "现实主义, 家族权谋, 都市黑色",
    "tags": [
      "地产博弈",
      "粤语法庭",
      "家族账本",
      "港式秩序",
      "社区记忆"
    ],
    "oneLine": "一宗九十年代遗留地皮拍卖重启，陈炜拿着祖父遗留账本追问起源，发现“创世纪”并非项目名，而是一份可以改写一代命运的阴谋契约。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0419",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 他人即地狱2024 小尼基 韩城攻略 洪堡亲王 似曾不相识 听！冰雪的声音 八十龟酱观察日记第二季 风雪少女离奇命案 原子弹轰炸广岛记 灵异405号房 加里的速度 爱情诅咒 超级警探 当家小娘子 蝙蝠侠：黑暗骑士崛起国语 战栗时空使者 魁拔之战神崛起 重返悲剧现场 镇魂歌 小妞死翘翘",
    "url": "./movie-0419.html",
    "cover": "./119.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0420",
    "title": "浪漫满厨",
    "url": "./movie-0420.html",
    "cover": "./120.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2022",
    "genre": "爱情, 美食, 喜剧",
    "tags": [
      "厨房创业",
      "甜点疗愈",
      "合作对决",
      "失恋复苏",
      "旧式食谱"
    ],
    "oneLine": "一个不会做甜点的人把爱情误认成任务清单，厨房里的每一道轻食都让两颗受伤的心慢慢放下防线，去学会重新选择彼此。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0421",
    "title": "霸道总裁与乡村女教师",
    "url": "./movie-0421.html",
    "cover": "./121.jpg",
    "region": "中国大陆",
    "type": "微短剧",
    "year": "2024",
    "genre": "爱情, 剧情",
    "tags": [
      "甜宠",
      "逆袭",
      "城乡差异"
    ],
    "oneLine": "遭遇商业暗算失忆的总裁流落山村，被支教女教师收留，两人在鸡飞狗跳中互生情愫。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0422",
    "title": "承诺",
    "url": "./movie-0422.html",
    "cover": "./122.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情, 战争, 历史",
    "tags": [
      "一战",
      "跨国恋",
      "书信传情",
      "生死相守"
    ],
    "oneLine": "一战爆发前夜，法国女教师与德国军官许下重逢承诺，战壕里唯一的信物是一枚纽扣。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0423",
    "title": "佩吉巷的火枪手",
    "url": "./movie-0423.html",
    "cover": "./123.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2024",
    "genre": "动作, 冒险, 历史, 喜剧",
    "tags": [
      "19世纪纽约",
      "黑帮女老大",
      "少数族裔英雄"
    ],
    "oneLine": "1863年纽约征兵暴动期间，三个爱尔兰移民女工联手华裔黑帮，对抗种族暴徒。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0424",
    "title": "怒海群雄",
    "url": "./movie-0424.html",
    "cover": "./124.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 犯罪, 剧情",
    "tags": [
      "海盗",
      "复仇",
      "兄弟情",
      "海上激战"
    ],
    "oneLine": "为报杀父之仇，前海军陆战队员潜入现代海盗集团，却发现自己兄弟竟是仇人。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0425",
    "title": "在河彼岸",
    "url": "./movie-0425.html",
    "cover": "./125.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 奇幻",
    "tags": [
      "生死",
      "摆渡人",
      "河流",
      "治愈"
    ],
    "oneLine": "一条能摆渡亡魂的神秘河流突然干涸，河这边的活人开始看到彼岸的死者。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0426",
    "title": "把怪物放在首页",
    "url": "./movie-0426.html",
    "cover": "./126.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "惊悚 / 悬疑 / 职场",
    "tags": [
      "互联网",
      "算法",
      "恐怖都市传说",
      "讽刺",
      "高概念"
    ],
    "oneLine": "新闻 APP 小编发现，只要把一张诡异照片放上首页，照片里的人就会在 24 小时内死于非命。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0427",
    "title": "绝命大逃亡",
    "url": "./movie-0427.html",
    "cover": "./127.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "genre": "动作, 惊悚, 灾难",
    "tags": [
      "城市封锁",
      "倒计时逃生",
      "地下通道",
      "误判危机",
      "生死追捕"
    ],
    "oneLine": "在全城封锁的三小时里，前警员被迫带着一名证人穿越崩塌中的地下城，只为赶在爆炸前活着抵达终点。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0428",
    "title": "宙斯之子：赫拉克勒斯",
    "url": "./movie-0428.html",
    "cover": "./128.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2014",
    "genre": "动作 / 冒险 / 奇幻",
    "tags": [
      "希腊神话",
      "大力神",
      "巨石强森",
      "佣兵传奇",
      "破除神话"
    ],
    "oneLine": "世人皆知的半神英雄其实只是个力气大的凡人，但当真正的地狱三头犬现身时，他必须成为真正的神。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0429",
    "title": "盗影谜情",
    "url": "./movie-0429.html",
    "cover": "./129.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑爱情",
    "tags": [
      "偷盗",
      "失忆",
      "双面间谍",
      "港风"
    ],
    "oneLine": "顶级女盗贼失忆后，发现自己留下的日记本里写着“爱人是警察，杀了他”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0430",
    "title": "欲望都市第四季",
    "url": "./movie-0430.html",
    "cover": "./130.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2002",
    "genre": "都市爱情 / 喜剧剧情",
    "tags": [
      "女性友谊",
      "爱情选择",
      "都市生活",
      "时尚",
      "亲密关系",
      "自我成长"
    ],
    "oneLine": "当爱情、事业与自我认同同时进入升级阶段，四个女人发现，真正棘手的从来不是分手，而是如何继续做自己。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0431",
    "title": "酸世代",
    "url": "./movie-0431.html",
    "cover": "./131.jpg",
    "region": "俄罗斯",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 青春 / 社会",
    "tags": [
      "后苏联青年",
      "虚无主义",
      "非主流文化"
    ],
    "oneLine": "90年代末俄罗斯边陲小城，四个迷恋西方垃圾摇滚的少年决定抢劫一家酸洗厂，把废酸当武器向无聊的世界宣战。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0432",
    "title": "空中浩劫第七季",
    "url": "./movie-0432.html",
    "cover": "./132.jpg",
    "region": "加拿大",
    "type": "剧集",
    "year": "2017",
    "genre": "纪录, 灾难",
    "tags": [
      "航空事故",
      "真实改编",
      "飞行安全"
    ],
    "oneLine": "本季聚焦六起触目惊心的航空灾难，还原人祸与天灾交织的真相瞬间。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0433",
    "title": "甜蜜蜜2007",
    "url": "./movie-0433.html",
    "cover": "./133.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2007",
    "genre": "爱情 / 剧情",
    "tags": [
      "回归十年",
      "移民",
      "邓丽君"
    ],
    "oneLine": "九七后第七年，曾经一起骑单车的小军和李翘在香港街头擦肩而过，两人手里都攥着同一张机票。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0434",
    "title": "被炉、蜜桔和小猫",
    "url": "./movie-0434.html",
    "cover": "./134.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "生活 / 治愈",
    "tags": [
      "慢生活",
      "单元剧",
      "三代同堂",
      "散文诗"
    ],
    "oneLine": "一个屋檐下，被炉连接着顽固的奶奶、失业的儿子、被霸凌的孙女和一只流浪猫的四季。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0435",
    "title": "乌龙英雄",
    "url": "./movie-0435.html",
    "cover": "./135.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "genre": "喜剧， 超级英雄",
    "tags": [
      "恶搞",
      "废柴",
      "团队合作",
      "反套路"
    ],
    "oneLine": "五个因为各种奇葩理由被超级英雄学院开除的废柴，决定自己组队拯救世界，但每次都搞错反派。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0436",
    "title": "骷髅13：女王蜂",
    "url": "./movie-0436.html",
    "cover": "./136.jpg",
    "region": "日本",
    "type": "动画电影",
    "year": "1998",
    "genre": "动作 / 悬疑 / 犯罪 / 战争",
    "tags": [
      "顶级杀手",
      "组织阴谋",
      "冷战氛围",
      "女王密令",
      "枪战追击",
      "黑色美学"
    ],
    "oneLine": "当“女王蜂”向全世界最致命的枪手发出邀请，一场以情报、背叛和复仇为筹码的暗杀博弈悄然开局。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0437",
    "title": "禁苑春浓",
    "url": "./movie-0437.html",
    "cover": "./137.jpg",
    "region": "中国大陆 / 英国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 历史",
    "tags": [
      "宫廷",
      "禁忌之恋",
      "晚清",
      "跨国"
    ],
    "oneLine": "1900年，紫禁城一名洗衣房宫女与英国使馆翻译官秘密相恋，在八国联军攻入北京的混乱中，两人赌上了性命逃亡。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0438",
    "title": "有你真好·温暖演唱会",
    "url": "./movie-0438.html",
    "cover": "./138.jpg",
    "region": "中国台湾",
    "type": "综艺 / 音乐",
    "year": "2024",
    "genre": "真人秀 / 音乐",
    "tags": [
      "素人",
      "治愈",
      "街头路演"
    ],
    "oneLine": "六位过气歌手开着厢式货车环岛，每到一站就为当地素人办一场只唱一首歌的定制演唱会。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0439",
    "title": "保护证人组粤语",
    "url": "./movie-0439.html",
    "cover": "./139.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2002",
    "genre": "警匪 / 动作",
    "tags": [
      "证人保护",
      "内鬼",
      "粤语原声",
      "小组作战"
    ],
    "oneLine": "保护证人组精英小队接到任务：护送的证人正是他们小组内奸的爱人。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0440",
    "title": "莫罗事件",
    "url": "./movie-0440.html",
    "cover": "./140.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2025",
    "genre": "历史 / 犯罪 / 悬疑",
    "tags": [
      "政治",
      "绑架",
      "真实事件改编",
      "冷战",
      "惊悚"
    ],
    "oneLine": "1978年，意大利总理莫罗被绑架，一名记者通过零散的线索，发现了事件背后更深的国际阴谋。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0441",
    "title": "猎毒之闪电突击",
    "url": "./movie-0441.html",
    "cover": "./141.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "动作，犯罪",
    "tags": [
      "缉毒",
      "特种部队",
      "边境",
      "枪战"
    ],
    "oneLine": "一支不存在的缉毒小队，用闪电战的方式，在热带雨林里猎杀最狡猾的毒枭。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0442",
    "title": "孩子不坏",
    "url": "./movie-0442.html",
    "cover": "./142.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "青春 / 家庭 / 剧情",
    "tags": [
      "少年成长",
      "亲子沟通",
      "校园冲突",
      "误解与和解",
      "城市边缘",
      "自我修复"
    ],
    "oneLine": "一群被贴上“坏孩子”标签的中学生，在一次被迫参加的社区修复行动里，意外找回了彼此、也找回了自己。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0443",
    "title": "合法伴侣",
    "url": "./movie-0443.html",
    "cover": "./143.jpg",
    "region": "英国 / 中国大陆",
    "type": "电影",
    "year": "2020",
    "genre": "喜剧 / 爱情",
    "tags": [
      "假结婚",
      "签证",
      "基友",
      "乌龙",
      "英伦"
    ],
    "oneLine": "两个直男为了拿英国永居权假扮同性伴侣，结果移民官派来的女调查员正好是其中一人的前女友。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0444",
    "title": "秋想和春一起吃饭",
    "url": "./movie-0444.html",
    "cover": "./144.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "剧情， 美食",
    "tags": [
      "日常",
      "治愈",
      "友情",
      "合租"
    ],
    "oneLine": "两个失意的大学男生开始了合租生活，用料理填饱肚子，也用对话治愈彼此的人生。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0445",
    "title": "未命名恐怖片",
    "url": "./movie-0445.html",
    "cover": "./145.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 元电影",
    "tags": [
      "片名诅咒",
      "剧组死亡",
      "录像带",
      "邪教仪式",
      "第四面墙"
    ],
    "oneLine": "一支摄制组拍摄一部叫《未命名恐怖片》的电影，所有工作人员在杀青当晚，都忘记了自己的名字。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0446",
    "title": "冰冷天国",
    "url": "./movie-0446.html",
    "cover": "./146.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2022",
    "genre": "科幻伦理",
    "tags": [
      "冷冻休眠",
      "背叛",
      "时间跳跃",
      "孤独"
    ],
    "oneLine": "一男子参与了人体冷冻计划，约定30年后由妻子唤醒他，当他醒来时，却发现已经过去了300年，且地球只剩他最后一个人类。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0447",
    "title": "布罗姆利的足球小子",
    "url": "./movie-0447.html",
    "cover": "./147.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2016",
    "genre": "剧情 / 运动 / 传记",
    "tags": [
      "足球梦想",
      "父子冲突",
      "阶层跨越",
      "真实改编"
    ],
    "oneLine": "一个矿工的儿子拥有足球天赋，却遭到父亲的强烈反对，他必须在煤灰与绿茵之间做出选择。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0448",
    "title": "爸爸去哪儿第五季",
    "url": "./movie-0448.html",
    "cover": "./148.jpg",
    "region": "中国",
    "type": "综艺/大电影",
    "year": "2025",
    "genre": "真人秀、家庭",
    "tags": [
      "亲子",
      "旅行",
      "怀旧",
      "成年亲子关系"
    ],
    "oneLine": "当年参加第一季的孩子们长大了，这次轮到他们带着自己年迈的父亲踏上旅途。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0449",
    "title": "青春恋爱梦",
    "url": "./movie-0449.html",
    "cover": "./149.jpg",
    "region": "日本",
    "type": "电影",
    "year": "1990",
    "genre": "爱情, 剧情, 校园",
    "tags": [
      "纯爱",
      "日式青春",
      "宫泽理惠",
      "怀旧"
    ],
    "oneLine": "高中棒球队的少年暗恋着病弱的少女，少女说等她病好去看甲子园，却成了一个永远的约定。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0450",
    "title": "最高殊勋夫人",
    "url": "./movie-0450.html",
    "cover": "./150.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2021",
    "genre": "剧情 / 历史 / 政治",
    "tags": [
      "女性权谋",
      "日据时期",
      "独立运动",
      "大女主"
    ],
    "oneLine": "朝鲜最后一位女官表面效忠日本天皇，实则在茶盏间传递情报，她要以“叛徒”之名名垂青史。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0451",
    "title": "一样的月光",
    "url": "./movie-0451.html",
    "cover": "./1.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "genre": "文艺剧情",
    "tags": [
      "家庭",
      "记忆",
      "失智症",
      "和解"
    ],
    "oneLine": "失智的母亲只认得三十年前的月亮，儿子每晚陪她看月亮，自己却迷失在当下。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0452",
    "title": "女人中的陌生人1966",
    "url": "./movie-0452.html",
    "cover": "./2.jpg",
    "region": "日本",
    "type": "电影",
    "year": "1966",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "黑白片",
      "家庭主妇",
      "身份伪造",
      "邻居之死"
    ],
    "oneLine": "温顺主妇家搬来一个神秘女租客后开始连连死人，而她的真实身份是战时逃兵。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0453",
    "title": "似曾不相识",
    "url": "./movie-0453.html",
    "cover": "./3.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 奇幻 / 悬疑",
    "tags": [
      "失忆",
      "循环",
      "巴黎",
      "浪漫"
    ],
    "oneLine": "男人每天醒来都会忘记前一天，但一个陌生女人总在他的梦境里说：“我们明天见。”",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0454",
    "title": "地心危机",
    "url": "./movie-0454.html",
    "cover": "./4.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻、灾难、动作",
    "tags": [
      "地心探险",
      "怪兽",
      "地球停转"
    ],
    "oneLine": "地核突然冷却，一支钻井队向地心投放核弹，却唤醒了一群以岩浆为食的太古巨虫。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0455",
    "title": "民国少年侦探社",
    "url": "./movie-0455.html",
    "cover": "./5.jpg",
    "region": "中国内地",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑， 冒险， 青春",
    "tags": [
      "民国",
      "少年侦探",
      "单元破案",
      "热血",
      "军阀"
    ],
    "oneLine": "四个性格迥异的民国少年，在侦探社的招牌下，意外卷入了一场篡改民国历史的惊天阴谋。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0456",
    "title": "党的女儿",
    "url": "./movie-0456.html",
    "cover": "./6.jpg",
    "region": "中国",
    "type": "电视剧",
    "year": "2025",
    "genre": "历史， 剧情， 传记",
    "tags": [
      "革命",
      "女性",
      "地下党",
      "信仰",
      "主旋律"
    ],
    "oneLine": "从抗战到建国，一位农村妇女成长为优秀地下党员的传奇一生，她的上线和下线，都是她的至亲。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0457",
    "title": "致命名媛之夜",
    "url": "./movie-0457.html",
    "cover": "./7.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑，惊悚",
    "tags": [
      "上流社会",
      "晚宴",
      "杀人游戏",
      "女性复仇"
    ],
    "oneLine": "五名纽约上东区名媛收到一封神秘邀请函，参加一场“只有名媛才能参加”的私人晚宴，但晚宴上每道菜都藏着一个人的秘密。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0458",
    "title": "电锯惊魂5",
    "url": "./movie-0458.html",
    "cover": "./8.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2008",
    "genre": "恐怖/惊悚",
    "tags": [
      "密室逃脱",
      "血腥机关",
      "人性拷问"
    ],
    "oneLine": "当五位陌生人从废弃工厂醒来，他们的心脏被铁链串联，而唯一的钥匙藏在彼此的胃里。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0459",
    "title": "青春飞一般",
    "url": "./movie-0459.html",
    "cover": "./9.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "青春 / 运动",
    "tags": [
      "羽毛球",
      "励志",
      "校园"
    ],
    "oneLine": "一个被省队淘汰的羽毛球少年回到县城高中，带领一群“废柴”队友，挑战全国冠军名校。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0460",
    "title": "冲锋队怒火街头",
    "url": "./movie-0460.html",
    "cover": "./10.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 警匪",
    "tags": [
      "飞虎队",
      "暴动",
      "兄弟情",
      "正义"
    ],
    "oneLine": "五名被停职的冲锋队员，为救被绑架的队长女儿，持“玩具枪”闯入匪巢。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0461",
    "title": "疯狂大营救",
    "url": "./movie-0461.html",
    "cover": "./11.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "动作, 冒险",
    "tags": [
      "越狱",
      "硬汉",
      "爽片",
      "孤胆英雄"
    ],
    "oneLine": "为了救回被诬陷的女儿，退役特种兵单挑整个黑狱系统，三小时内必须打通九道生死关。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0462",
    "title": "司汤达综合征",
    "url": "./movie-0462.html",
    "cover": "./12.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑、惊悚",
    "tags": [
      "艺术",
      "幻觉",
      "连环案",
      "佛罗伦萨"
    ],
    "oneLine": "多名游客在乌菲兹美术馆欣赏名画时离奇死亡，女警探发现自己也患上了“艺术品眩晕症”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0463",
    "title": "断·桥",
    "url": "./movie-0463.html",
    "cover": "./13.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "剧情, 犯罪, 悬疑",
    "tags": [
      "命案",
      "复仇",
      "养女",
      "桥梁坍塌"
    ],
    "oneLine": "一座大桥坍塌，露出里面埋了八年的尸骨，死者的养女决定亲手找出凶手。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0464",
    "title": "保镳",
    "url": "./movie-0464.html",
    "cover": "./14.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "genre": "动作 / 悬疑 / 剧情",
    "tags": [
      "保镖",
      "职场",
      "悬疑",
      "港剧",
      "贴身保护"
    ],
    "oneLine": "前G4成员转行做私人保镳，第一个客户是屡遭死亡威胁的富豪千金，但想杀她的可能是她自己。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0465",
    "title": "玉女情动",
    "url": "./movie-0465.html",
    "cover": "./15.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "剧情， 爱情， 情色",
    "tags": [
      "邵氏",
      "禁忌恋",
      "风月"
    ],
    "oneLine": "纯情修女在照顾受伤的黑帮逃犯时，被唤醒了被宗教信仰压抑多年的世俗欲望。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0466",
    "title": "旷野的枪声",
    "url": "./movie-0466.html",
    "cover": "./16.jpg",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2018",
    "genre": "西部，犯罪",
    "tags": [
      "荒漠",
      "复仇",
      "沉默男主",
      "黑色电影"
    ],
    "oneLine": "澳洲内陆荒漠，一名神秘枪手来到小镇，只为找出当年出卖整个帮派的叛徒。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0467",
    "title": "果尔达",
    "url": "./movie-0467.html",
    "cover": "./17.jpg",
    "region": "以色列",
    "type": "电影",
    "year": "2023",
    "genre": "传记 / 历史 / 政治",
    "tags": [
      "女领袖",
      "赎罪日战争",
      "中年危机"
    ],
    "oneLine": "1973年赎罪日战争期间，患有白血病和幽闭恐惧症的以色列女总理，在地堡里度过了人生最漫长的十九天。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0468",
    "title": "芭比公主三剑客",
    "url": "./movie-0468.html",
    "cover": "./18.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "动画 / 冒险 / 歌舞",
    "tags": [
      "芭比",
      "公主",
      "剑客",
      "女权"
    ],
    "oneLine": "四位来自不同国家的公主放下皇冠拿起剑，组成“三剑客”保卫王国不被奸臣篡位。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0469",
    "title": "政治之爱",
    "url": "./movie-0469.html",
    "cover": "./19.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情 / 爱情 / 政治",
    "tags": [
      "政坛罗曼史",
      "理想主义",
      "利益婚姻",
      "权力博弈"
    ],
    "oneLine": "为了竞选总统，他娶了一个不爱的人；而那个他真正爱的人，是竞争对手的首席幕僚。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0470",
    "title": "遇见你真好第一季",
    "url": "./movie-0470.html",
    "cover": "./20.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "爱情, 喜剧, 青春",
    "tags": [
      "都市情感",
      "合租",
      "命中注定"
    ],
    "oneLine": "为了拿到天价奖金，六位素不相识的单身男女被迫在同居屋内扮演完美情侣，却假戏真做。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0471",
    "title": "猪圈",
    "url": "./movie-0471.html",
    "cover": "./21.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "genre": "剧情， 悬疑",
    "tags": [
      "农村",
      "罪案",
      "人性"
    ],
    "oneLine": "养猪户老李的猪圈里挖出一只手，全村人的秘密开始像猪粪一样被翻了出来。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0472",
    "title": "德里夫人您在哪",
    "url": "./movie-0472.html",
    "cover": "./22.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑, 剧情, 家庭",
    "tags": [
      "失踪",
      "记忆碎片",
      "身份错位",
      "寻亲",
      "印度社会"
    ],
    "oneLine": "失忆的贵妇认定自己是穷人家的童养媳，两个家庭因此掀起轩然大波。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0473",
    "title": "快乐星球第二部",
    "url": "./movie-0473.html",
    "cover": "./23.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "科幻 / 儿童 / 冒险",
    "tags": [
      "外星",
      "环保",
      "编程",
      "勇气",
      "友谊"
    ],
    "oneLine": "长大后的丁凯乐回到快乐星球，却发现这里被垃圾覆盖，老顽童爷爷被关进了虚拟监狱。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0474",
    "title": "平原上的夏洛克",
    "url": "./movie-0474.html",
    "cover": "./24.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "剧情, 悬疑, 黑色幽默",
    "tags": [
      "乡村侦探",
      "人情社会",
      "荒诞现实"
    ],
    "oneLine": "华北平原的三个留守老人为了破获一桩肇事逃逸案，用土办法上演一出乡村“神探”大戏。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0475",
    "title": "青春环游记第一季",
    "url": "./movie-0475.html",
    "cover": "./25.jpg",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "genre": "真人秀 / 旅行",
    "tags": [
      "文旅",
      "爆笑",
      "怀旧",
      "明星互动"
    ],
    "oneLine": "五位年龄跨度超过三十岁的明星，驾驶一辆破旧面包车重走90年代的经典旅游线路。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0476",
    "title": "97分钟",
    "url": "./movie-0476.html",
    "cover": "./26.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚，犯罪",
    "tags": [
      "劫机",
      "实时叙事",
      "谈判专家",
      "高空危机"
    ],
    "oneLine": "一架从伦敦飞往纽约的航班被劫持，全程片长等于劫持持续的实际时间。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0477",
    "title": "恋恋红尘",
    "url": "./movie-0477.html",
    "cover": "./27.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情 / LGBT",
    "tags": [
      "老年同志",
      "陪伴",
      "告别",
      "温情"
    ],
    "oneLine": "七十岁那年，他在养老院重遇了五十年前私奔未遂的初恋。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0478",
    "title": "金牌投资人",
    "url": "./movie-0478.html",
    "cover": "./28.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "职场 / 商战",
    "tags": [
      "投行",
      "小白逆袭",
      "师徒",
      "资本游戏"
    ],
    "oneLine": "投行菜鸟被分配到全公司最魔鬼的女MD手下，第一课是：“把你的良心锁进保险柜”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0479",
    "title": "某种女人",
    "url": "./movie-0479.html",
    "cover": "./29.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情",
    "tags": [
      "独立电影",
      "女性群像",
      "美国西部",
      "克制叙事"
    ],
    "oneLine": "在蒙大拿州的荒原上，一个女律师、一个农场主和一个法学院学生，各自面临着“不被看见”的困境。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0480",
    "title": "自行车与旧电钢",
    "url": "./movie-0480.html",
    "cover": "./30.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 音乐 / 文艺",
    "tags": [
      "小镇青年",
      "音乐梦想",
      "怀旧",
      "生活流"
    ],
    "oneLine": "2000年，东北小镇，一个想骑自行车去北京的孩子，与一个想用旧电钢弹出贝多芬的退休工人，互为彼此的远方。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0481",
    "title": "流氓太保3",
    "url": "./movie-0481.html",
    "cover": "./31.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 犯罪",
    "tags": [
      "校园",
      "黑帮",
      "复仇",
      "三部曲终章"
    ],
    "oneLine": "曾经的高中混混老大出狱后，发现自己的儿子成了新一任校霸。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0482",
    "title": "怪咖幽浮社",
    "url": "./movie-0482.html",
    "cover": "./32.jpg",
    "region": "日本",
    "type": "动画",
    "year": "2024",
    "genre": "动画, 喜剧, 科幻, 校园",
    "tags": [
      "动漫",
      "UFO",
      "社团",
      "搞笑",
      "青春"
    ],
    "oneLine": "废柴高中生创建的“幽浮研究社”只有一个社员，直到某天真的外星人降落在了他们的天线锅上。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0483",
    "title": "维希之眼",
    "url": "./movie-0483.html",
    "cover": "./33.jpg",
    "region": "法国",
    "type": "剧集",
    "year": "2025",
    "genre": "历史 / 谍战 / 剧情",
    "tags": [
      "二战",
      "维希法国",
      "盲人",
      "间谍"
    ],
    "oneLine": "二战时期，一位失明的调香师靠鼻子监听纳粹电台的密文，却发现自己一直活在谎言中。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0484",
    "title": "股疯",
    "url": "./movie-0484.html",
    "cover": "./34.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2021",
    "genre": "喜剧, 剧情, 犯罪",
    "tags": [
      "股市",
      "疯狂",
      "黑色喜剧",
      "发财梦"
    ],
    "oneLine": "一个菜场卖鱼的大妈，靠“鱼腥味消息法”炒股赚了一个亿，引得全港跟风，最后发现她其实是金融大鳄的棋子。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0485",
    "title": "视线中的光",
    "url": "./movie-0485.html",
    "cover": "./35.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑 / 惊悚",
    "tags": [
      "盲人",
      "感官",
      "犯罪"
    ],
    "oneLine": "一位失明的声优，通过耳朵“看见”了对面楼里的谋杀案，但没有人相信她。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0486",
    "title": "大小通吃",
    "url": "./movie-0486.html",
    "cover": "./36.jpg",
    "region": "香港",
    "type": "动作喜剧电影",
    "year": "2017",
    "genre": "动作,黑色喜剧,社会讽刺",
    "tags": [
      "双面人生",
      "组织系统",
      "城市黑幕",
      "小人物崛起",
      "街头生存",
      "讽刺犯罪",
      "荒诞反击"
    ],
    "oneLine": "小阿在“大小”之间跳转的瞬间，原以为能把一切都通吃，没想到这座城早已把每个人都分成了可吃与可被吃的份额。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0487",
    "title": "菊花香",
    "url": "./movie-0487.html",
    "cover": "./37.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2003",
    "genre": "爱情, 悲剧",
    "tags": [
      "绝恋",
      "绝症",
      "纯爱",
      "催泪弹"
    ],
    "oneLine": "身患胃癌的妻子在生命最后几个月，强忍病痛为盲人丈夫录制了未来十年生日所需的爱心便当语音教程。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0488",
    "title": "精灵宝可梦：超梦的逆袭",
    "url": "./movie-0488.html",
    "cover": "./38.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "动画 / 动作",
    "tags": [
      "情怀重置",
      "克隆哲学",
      "史诗对战"
    ],
    "oneLine": "最强的克隆宝可梦超梦再度觉醒，这次它要挑战的不只是小智，而是人类的造物主。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0489",
    "title": "画皮青衣",
    "url": "./movie-0489.html",
    "cover": "./39.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "奇幻, 爱情, 古装",
    "tags": [
      "京剧",
      "换皮",
      "戏班",
      "人妖恋"
    ],
    "oneLine": "戏班青衣每次画上特定的脸谱，她的身体就会变成另一个失踪的女人，而台下总坐着一个哭泣的将军。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0490",
    "title": "鸳鸯楼·惊魂",
    "url": "./movie-0490.html",
    "cover": "./40.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚, 悬疑, 恐怖",
    "tags": [
      "中式恐怖",
      "老宅凶灵",
      "单元回魂",
      "心理阴影"
    ],
    "oneLine": "为了直播爆火，一群网红闯入废弃三十年的“鸳鸯楼”凶宅，却无意中触发了每扇门背后一个等待复仇的冤魂。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0491",
    "title": "英雄本色2",
    "url": "./movie-0491.html",
    "cover": "./41.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025 (虚构续集)",
    "genre": "动作 / 犯罪",
    "tags": [
      "枪战",
      "兄弟",
      "复仇",
      "江湖"
    ],
    "oneLine": "宋子杰牺牲十年后，宋子豪为给弟弟终极复仇，重出江湖对抗第三代伪钞集团。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0492",
    "title": "一夜惊魂",
    "url": "./movie-0492.html",
    "cover": "./42.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "轮回",
      "鬼宅",
      "日式心理恐怖"
    ],
    "oneLine": "六个网红为了流量闯入废弃医院直播，却陷入了一场持续百年的血腥轮回。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0493",
    "title": "澳大利亚日",
    "url": "./movie-0493.html",
    "cover": "./43.jpg",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 悬疑",
    "tags": [
      "国定假日",
      "原住民",
      "种族冲突",
      "狂欢与悲剧",
      "多线叙事"
    ],
    "oneLine": "澳大利亚日狂欢夜，一桩失踪案揭开了这个国家“国庆”底下化脓的伤口。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0494",
    "title": "疯狂食人鲨",
    "url": "./movie-0494.html",
    "cover": "./44.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "灾难惊悚",
    "tags": [
      "鲨鱼",
      "变异",
      "游轮",
      "血浆"
    ],
    "oneLine": "豪华游轮遇难，幸存者被困在沉船顶部，而一头因核废料变异的透明食人鲨在船底虎视眈眈。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0495",
    "title": "只有为你",
    "url": "./movie-0495.html",
    "cover": "./45.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2025",
    "genre": "爱情 / 奇幻",
    "tags": [
      "平行世界",
      "轮回",
      "纯爱",
      "虐恋"
    ],
    "oneLine": "为了拯救注定会死的你，我在一千个平行世界里杀了一千次自己。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0496",
    "title": "笨贼三人组",
    "url": "./movie-0496.html",
    "cover": "./46.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2008",
    "genre": "犯罪喜剧, 动作闹剧",
    "tags": [
      "失手抢案",
      "误打误撞",
      "黑帮追债",
      "搞笑反转",
      "兄弟情"
    ],
    "oneLine": "三个从没真正干过大案的小贼，误把黑帮洗钱账本当成保险箱钥匙，结果偷到了全城最危险的麻烦。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0497",
    "title": "如何改变世界",
    "url": "./movie-0497.html",
    "cover": "./47.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情, 科幻, 政治",
    "tags": [
      "时间回溯",
      "社会实验",
      "蝴蝶效应",
      "道德困境"
    ],
    "oneLine": "一群大学生获得一台能“模拟改变历史”的机器，六次尝试后，现实开始被他们篡改的记忆覆盖。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0498",
    "title": "大情人华伦天奴",
    "url": "./movie-0498.html",
    "cover": "./48.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2026",
    "genre": "传记, 爱情",
    "tags": [
      "默片",
      "偶像",
      "影史",
      "情欲"
    ],
    "oneLine": "他是默片时代最性感的男人，但镜头外他只爱一个人。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0499",
    "title": "落凡尘",
    "url": "./movie-0499.html",
    "cover": "./49.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动画, 奇幻",
    "tags": [
      "中式美学",
      "神仙下凡",
      "治愈系"
    ],
    "oneLine": "一个被贬下凡的小神仙失去了所有法力，在城市里当外卖员重新修炼。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0500",
    "title": "亚马逊之火",
    "url": "./movie-0500.html",
    "cover": "./50.jpg",
    "region": "巴西 / 美国",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚 / 冒险 / 环保",
    "tags": [
      "雨林炼狱",
      "女科学家",
      "生物武器",
      "限时逃亡"
    ],
    "oneLine": "气候学家在亚马逊腹地发现一种能引燃空气的奇异真菌，随即遭到跨国雇佣兵的追杀。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0501",
    "title": "天使之心",
    "url": "./movie-0501.html",
    "cover": "./51.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "器官移植",
      "记忆入侵",
      "道德困境"
    ],
    "oneLine": "女孩移植了陌生人的心脏后，开始梦见一起尚未发生的谋杀。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0502",
    "title": "我是处女座2023",
    "url": "./movie-0502.html",
    "cover": "./52.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 喜剧",
    "tags": [
      "星座",
      "完美主义",
      "都市",
      "治愈",
      "社恐"
    ],
    "oneLine": "一个重度强迫症的处女座男生，被一个随性如风的射手座女生彻底打乱生活。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0503",
    "title": "养父2011",
    "url": "./movie-0503.html",
    "cover": "./53.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2011",
    "genre": "家庭, 伦理, 剧情",
    "tags": [
      "亲情",
      "绝症",
      "寻亲",
      "父爱如山"
    ],
    "oneLine": "一个被诊断为绝症的烤鸭店老板，耗尽生命最后的时间，只为给自己收养的四个孩子找到亲生父母。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0504",
    "title": "你是我兄弟巅峰决战",
    "url": "./movie-0504.html",
    "cover": "./54.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 犯罪",
    "tags": [
      "兄弟反目",
      "拳击",
      "黑帮",
      "最后的战斗"
    ],
    "oneLine": "失散二十年的亲兄弟，一个成了拳王，一个成了黑帮打手，被迫在生死拳台上决斗。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0505",
    "title": "大罗马沉没记",
    "url": "./movie-0505.html",
    "cover": "./55.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "genre": "动作, 灾难, 历史",
    "tags": [
      "古罗马",
      "海啸",
      "角斗士",
      "特效"
    ],
    "oneLine": "公元79年，一场超级地震引发海啸直扑罗马，角斗士与水师提督联手拯救百万民众。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0506",
    "title": "漂移的栅栏",
    "url": "./movie-0506.html",
    "cover": "./56.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻, 剧情, 治愈",
    "tags": [
      "小镇",
      "消失",
      "回忆",
      "象征"
    ],
    "oneLine": "一座海边小镇的木质栅栏开始每天自动向海岸线移动一米，仿佛在追赶什么看不见的东西。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0507",
    "title": "乐坛传奇：海滩男孩",
    "url": "./movie-0507.html",
    "cover": "./57.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "传记, 音乐, 剧情",
    "tags": [
      "乐队传记",
      "冲浪摇滚",
      "天才与疯子",
      "布莱恩·威尔森"
    ],
    "oneLine": "天才布莱恩·威尔森打造《宠物之声》时，被父亲和表兄弟联手送进精神病院。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0508",
    "title": "天师斗僵尸续集",
    "url": "./movie-0508.html",
    "cover": "./58.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧，恐怖，奇幻",
    "tags": [
      "茅山",
      "僵尸",
      "师徒",
      "黑色幽默",
      "现代都市"
    ],
    "oneLine": "上一代天师退休后，他的废柴徒弟用直播带货的方式，把捉僵尸变成了互联网生意。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0509",
    "title": "从零到一的爱情",
    "url": "./movie-0509.html",
    "cover": "./59.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "genre": "爱情",
    "tags": [
      "甜宠",
      "契约",
      "双面人格"
    ],
    "oneLine": "考古系女博士为了保住课题经费，被迫与患有双重人格的酒店CEO签订恋爱契约。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0510",
    "title": "保佑野兽和孩子们",
    "url": "./movie-0510.html",
    "cover": "./60.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "冒险, 剧情",
    "tags": [
      "野外求生",
      "问题少年",
      "驯马",
      "自我救赎"
    ],
    "oneLine": "六名问题少年被送入荒野进行“改造”，却在山火袭来时被领队抛弃，他们唯一的向导是一匹受伤的野马。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0511",
    "title": "二十四城记",
    "url": "./movie-0511.html",
    "cover": "./61.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2008",
    "genre": "纪录片 / 剧情",
    "tags": [
      "国企变迁",
      "口述历史",
      "厂区记忆"
    ],
    "oneLine": "一座即将被拆除的军工老厂，几代人的青春埋在了420厂区的梧桐树下。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0512",
    "title": "足球工厂",
    "url": "./movie-0512.html",
    "cover": "./62.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 运动, 犯罪",
    "tags": [
      "足球流氓",
      "父子",
      "工人阶级",
      "暴力"
    ],
    "oneLine": "一个梦想成为职业球员的男孩，发现自己的父亲竟是当地最臭名昭著的足球流氓头子。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0513",
    "title": "东京白日梦女",
    "url": "./movie-0513.html",
    "cover": "./63.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "genre": "喜剧爱情",
    "tags": [
      "职场",
      "女性群像",
      "逆袭"
    ],
    "oneLine": "三个30岁的闺蜜约定不再做“白日梦”，却发现现实比幻想更需要勇气。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0514",
    "title": "恶之心",
    "url": "./movie-0514.html",
    "cover": "./64.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情, 犯罪, 心理",
    "tags": [
      "侧写师",
      "连环杀手",
      "心理博弈",
      "真实改编"
    ],
    "oneLine": "韩国首位犯罪侧写师，在没有任何成功先例的年代，独自走进七个连环杀人犯的内心深渊。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0515",
    "title": "我的隔壁有男神",
    "url": "./movie-0515.html",
    "cover": "./65.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情 / 喜剧 / 青春",
    "tags": [
      "明星邻居",
      "社恐",
      "契约恋爱",
      "爆笑"
    ],
    "oneLine": "顶流男星为躲避私生饭，搬到普通小区，却发现隔壁住着能“听见心声”的社恐宅女。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0516",
    "title": "布里奇顿第一季",
    "url": "./movie-0516.html",
    "cover": "./66.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2020",
    "genre": "爱情 / 剧情 / 历史",
    "tags": [
      "摄政时期",
      "有色人种王后",
      "八卦小报",
      "社交季",
      "玛丽苏"
    ],
    "oneLine": "在19世纪伦敦的上流社交季，一位化名“惠斯尔顿夫人”的神秘写手用八卦小报搅动了四对男女的豪门婚恋。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0517",
    "title": "回家过节",
    "url": "./movie-0517.html",
    "cover": "./67.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2020",
    "genre": "恐怖， 民俗",
    "tags": [
      "水灯节",
      "返乡",
      "降头"
    ],
    "oneLine": "一家人难得回乡下过节，奶奶却在水灯上写了所有子孙的名字，然后点燃了整条河。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0518",
    "title": "白色城堡",
    "url": "./movie-0518.html",
    "cover": "./68.jpg",
    "region": "土耳其",
    "type": "剧集",
    "year": "2021",
    "genre": "剧情 / 医疗",
    "tags": [
      "医生群像",
      "理想主义",
      "体制之痛",
      "感人"
    ],
    "oneLine": "一群满怀理想的年轻医生，在一座破旧公立医院里，对抗官僚、贫穷与死神。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0519",
    "title": "右岸，左岸",
    "url": "./movie-0519.html",
    "cover": "./69.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情文艺",
    "tags": [
      "巴黎",
      "双城记",
      "中产危机"
    ],
    "oneLine": "她在塞纳河右岸过着奢靡生活，她在左岸挣扎在温饱线，一场身份互换的意外让她们窥见了人生的B面。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0520",
    "title": "香港大营救",
    "url": "./movie-0520.html",
    "cover": "./70.jpg",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 历史, 悬疑",
    "tags": [
      "1997",
      "谍战",
      "动作枪战",
      "爱国"
    ],
    "oneLine": "1997 年香港回归前夕，一名华裔特工奉命营救被国际犯罪组织绑架的科学家。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0521",
    "title": "橙衣梦想",
    "url": "./movie-0521.html",
    "cover": "./71.jpg",
    "region": "荷兰",
    "type": "剧集",
    "year": "2024",
    "genre": "运动 / 励志",
    "tags": [
      "足球",
      "青训营",
      "少年热血",
      "团队合作"
    ],
    "oneLine": "一群来自不同文化背景的少年，为了进入阿贾克斯青年队而展开残酷且热血的竞争。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0522",
    "title": "战斗人3",
    "url": "./movie-0522.html",
    "cover": "./72.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1992",
    "genre": "动作, 科幻",
    "tags": [
      "格斗游戏",
      "改造人",
      "擂台",
      "暴力美学"
    ],
    "oneLine": "第三代战斗机器人觉醒自我意识，在无限制格斗大赛中向人类创造者宣战。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0523",
    "title": "篮球女王",
    "url": "./movie-0523.html",
    "cover": "./73.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 传记 / 运动",
    "tags": [
      "女篮",
      "种族歧视",
      "真实事件",
      "坚韧"
    ],
    "oneLine": "她叫露西亚·哈里斯，在NBA出现的二十年前，她就已经在男子职业联赛大杀四方。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0524",
    "title": "理发店情缘",
    "url": "./movie-0524.html",
    "cover": "./74.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧， 爱情， 剧情",
    "tags": [
      "小镇",
      "继承",
      "手艺人",
      "怀旧"
    ],
    "oneLine": "破产的金融精英被迫回乡继承祖父的老式理发店，与店里毒舌的女理发师展开了一场关于传统与潮流的战争与爱。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0525",
    "title": "杀手来电",
    "url": "./movie-0525.html",
    "cover": "./75.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚，悬疑",
    "tags": [
      "连环杀手",
      "心理博弈",
      "电话威胁"
    ],
    "oneLine": "午夜电话响起，对方准确说出她的位置，一场猫鼠游戏在闹市展开。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0526",
    "title": "刺青粤语",
    "url": "./movie-0526.html",
    "cover": "./76.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪， 剧情， 动作",
    "tags": [
      "黑帮",
      "卧底",
      "暗号",
      "身份认同"
    ],
    "oneLine": "卧底警察将关键情报刺于背上，却发现自己最忠心的手下就是他要找的黑帮头目之子。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0527",
    "title": "美声歌后：玛丽亚",
    "url": "./movie-0527.html",
    "cover": "./77.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "传记 / 音乐",
    "tags": [
      "玛丽亚·凯莉",
      "歌手",
      "传记",
      "天后",
      "幕后"
    ],
    "oneLine": "聚焦玛丽亚·凯莉90年代从爆红到崩溃的三年，揭露海豚音背后被严格控制的声音与人生。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0528",
    "title": "狼牙",
    "url": "./movie-0528.html",
    "cover": "./78.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2008",
    "genre": "动作 / 犯罪",
    "tags": [
      "吴京",
      "功夫",
      "香港离岛",
      "复仇",
      "雨夜大战"
    ],
    "oneLine": "一个独行杀手在离岛小镇吃下最后一碗云吞面，然后单枪匹马屠了三个帮派，只为了一颗属于陌生人的牙齿。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0529",
    "title": "玛蒂尔达1996",
    "url": "./movie-0529.html",
    "cover": "./79.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2027",
    "genre": "剧情 / 家庭",
    "tags": [
      "成长",
      "寄宿学校",
      "女性友谊",
      "年代回忆"
    ],
    "oneLine": "1996年，13岁的玛蒂尔达被送入寄宿女校，她发现这所学校每十年就会“消失”一名学生。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0530",
    "title": "报丧女妖",
    "url": "./movie-0530.html",
    "cover": "./80.jpg",
    "region": "中国大陆",
    "type": "惊悚悬疑电影",
    "year": "2019",
    "genre": "惊悚,民俗,社会隐喻",
    "tags": [
      "乡镇悬疑",
      "民间传说",
      "声音叙事",
      "报应",
      "失声者"
    ],
    "oneLine": "小镇每逢初十便听见报丧之音，真正的恐怖并非鬼魅，而是被掩埋多年的哭声被制度反复打包出售，连生者也逐渐失去哭泣的权利。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0531",
    "title": "武庚纪第三季",
    "url": "./movie-0531.html",
    "cover": "./81.jpg",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2021",
    "genre": "奇幻、战斗、神话",
    "tags": [
      "封神改编",
      "逆天而行",
      "热血",
      "人族抗争"
    ],
    "oneLine": "神族与冥族决战之际，武庚发现所谓“天”其实只是一台失去感情的远古机器。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0532",
    "title": "好莱坞圣诞",
    "url": "./movie-0532.html",
    "cover": "./82.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "爱情 / 喜剧 / 节日",
    "tags": [
      "圣诞",
      "过气明星",
      "小镇",
      "假戏真做",
      "温馨"
    ],
    "oneLine": "过气动作巨星为翻红在小镇拍圣诞电影，却爱上了反对拍摄的当地书店老板。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0533",
    "title": "瓦兰：天使之谷",
    "url": "./movie-0533.html",
    "cover": "./83.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "奇幻, 冒险",
    "tags": [
      "北欧神话",
      "精灵",
      "魔法",
      "史诗"
    ],
    "oneLine": "女猎手误入禁忌山谷，发现这里囚禁着最后的天使族，而她体内的血脉是打开牢笼的唯一钥匙。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0534",
    "title": "恐龙战队第三季",
    "url": "./movie-0534.html",
    "cover": "./84.jpg",
    "region": "美国 / 日本",
    "type": "剧集",
    "year": "2025",
    "genre": "动作 / 科幻 / 冒险 / 儿童",
    "tags": [
      "特摄",
      "机甲",
      "外星侵略",
      "团队"
    ],
    "oneLine": "在失去所有佐德能量后，老队员们必须训练一群自称“恐龙迷”的叛逆高中生，用化石提取的新能源重铸战队。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0535",
    "title": "救赎的审判",
    "url": "./movie-0535.html",
    "cover": "./85.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "tags": [
      "法庭",
      "宗教",
      "反转",
      "赎罪"
    ],
    "oneLine": "神父被控谋杀，他承认罪行却拒绝说出动机，女律师在辩护中发现自己才是“罪人”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0536",
    "title": "霹雳兵燹之刀戟戡魔录",
    "url": "./movie-0536.html",
    "cover": "./86.jpg",
    "region": "中国台湾",
    "type": "剧集 (布袋戏)",
    "year": "2025",
    "genre": "奇幻 / 武侠 / 古装",
    "tags": [
      "霹雳布袋戏",
      "刀戟",
      "戡魔",
      "异度魔界"
    ],
    "oneLine": "中原正道与异度魔界的终极之战，刀戟合璧，方能戡魔。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0537",
    "title": "小鬼从军",
    "url": "./movie-0537.html",
    "cover": "./87.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 动作",
    "tags": [
      "童军",
      "特工",
      "反差",
      "冒险"
    ],
    "oneLine": "一群童子军无意中破解了军方密码，被迫与一个笨拙的特工搭档，拯救世界。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0538",
    "title": "山村老尸2:色之恶鬼",
    "url": "./movie-0538.html",
    "cover": "./88.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2000",
    "genre": "恐怖",
    "tags": [
      "香港经典",
      "尸油",
      "红衣女鬼"
    ],
    "oneLine": "一名模特为求美貌涂了尸油口红，随即被百年前因情自杀的女鬼缠身，每晚都要“补妆”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0539",
    "title": "过去、如今和之后",
    "url": "./movie-0539.html",
    "cover": "./89.jpg",
    "region": "印度尼西亚",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 爱情 / 家庭",
    "tags": [
      "时间",
      "女性",
      "轮回感"
    ],
    "oneLine": "一个女人在印尼动乱的60年代、富裕的90年代和孤独的2020年代三次出嫁，新郎都长着同一张脸。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0540",
    "title": "万古仙穹",
    "url": "./movie-0540.html",
    "cover": "./90.jpg",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2017",
    "genre": "奇幻，修仙",
    "tags": [
      "仙侠",
      "穿越",
      "搞笑",
      "热血"
    ],
    "oneLine": "一个现代富二代意外穿越到修仙世界，试图用经济学理论统一仙界。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0541",
    "title": "鬼怪军队",
    "url": "./movie-0541.html",
    "cover": "./91.jpg",
    "region": "中国",
    "type": "恐怖电影",
    "year": "2024",
    "genre": "恐怖,悬疑,超自然,军事,生存,心理",
    "tags": [
      "幽灵病房",
      "失踪尸体",
      "军方阴影",
      "集体记忆",
      "雾墙",
      "反事实真相"
    ],
    "oneLine": "旧疗养院每逢阴历正三夜失踪夜班医生，而那一连串“鬼影”指向同一场未承认战争，主角以求生解密扭转对亡灵的恐惧叙事。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0542",
    "title": "海角红颜",
    "url": "./movie-0542.html",
    "cover": "./92.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2010",
    "genre": "爱情，剧情，文艺",
    "tags": [
      "垦丁",
      "怀旧",
      "初恋",
      "书信"
    ],
    "oneLine": "在垦丁经营老旅馆的阿嬷去世后，孙女在她的遗物中发现了一叠从未寄出的情书，收信人是一个日本名字。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0543",
    "title": "奉天往事之解救白胭脂",
    "url": "./movie-0543.html",
    "cover": "./93.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "genre": "喜剧， 悬疑， 民国",
    "tags": [
      "奉天",
      "戏班",
      "连环案",
      "东北军阀",
      "密室"
    ],
    "oneLine": "民国奉天城，当红名伶白胭脂在演出时神秘失踪，三个互不认识的观众发现：他们都曾收到过同样的求救纸条。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0544",
    "title": "隐形人",
    "url": "./movie-0544.html",
    "cover": "./94.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "科幻 / 惊悚",
    "tags": [
      "光学隐身",
      "复仇伦理",
      "科技警世",
      "压抑氛围"
    ],
    "oneLine": "一名华裔光学博士发明了隐形衣，却被军方和黑帮同时追杀，他发现唯一能藏身的地方是前妻的新家——衣柜里。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0545",
    "title": "踢球吧少年",
    "url": "./movie-0545.html",
    "cover": "./95.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "喜剧, 运动",
    "tags": [
      "足球",
      "农村",
      "励志",
      "留守儿童"
    ],
    "oneLine": "一个因为假球风波被禁赛的落魄球星，来到贵州大山里，带领一群从未见过绿茵场的留守儿童冲击省冠军。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0546",
    "title": "东京倾情男女",
    "url": "./movie-0546.html",
    "cover": "./96.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情，剧情",
    "tags": [
      "都市情感",
      "群像",
      "当代",
      "迷失与追寻"
    ],
    "oneLine": "东京深夜，四个陌生男女在合租屋相遇，用一场场真心话大冒险揭开彼此不敢面对的秘密。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0547",
    "title": "外出就餐5：开放性周末",
    "url": "./movie-0547.html",
    "cover": "./97.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "喜剧 / 爱情 / 同性",
    "tags": [
      "开放式关系",
      "餐桌戏剧",
      "群像",
      "反转"
    ],
    "oneLine": "一对夫夫邀请另一对情侣共度周末，结果六人关系在餐桌上彻底崩塌又重组。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0548",
    "title": "小鹿斑比：清算",
    "url": "./movie-0548.html",
    "cover": "./98.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖, 惊悚",
    "tags": [
      "黑暗童话",
      "复仇",
      "森林",
      "动物变异",
      "血腥童话"
    ],
    "oneLine": "母亲被猎杀三十年后，长大的斑比带着一群变异生物向人类猎人们发起了最后的反攻。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0549",
    "title": "侦探语录",
    "url": "./movie-0549.html",
    "cover": "./99.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 推理",
    "tags": [
      "民国",
      "本格",
      "连环案"
    ],
    "oneLine": "民国时期，一位患有“记忆超忆症”的叛逆警探，挑战十年前的模仿杀人悬案，却发现凶手就在身边。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0550",
    "title": "千秋令",
    "url": "./movie-0550.html",
    "cover": "./100.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "古装 / 仙侠 / 权谋",
    "tags": [
      "正邪同源",
      "神魔双生",
      "三生三世"
    ],
    "oneLine": "魔尊之女与天界战神联手盗取“千秋令”，却发现这枚能重写历史的令牌里，封存着他们前世弑父的记忆。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0551",
    "title": "古墓魔咒",
    "url": "./movie-0551.html",
    "cover": "./101.jpg",
    "region": "英国 / 澳大利亚",
    "type": "电影",
    "year": "2025",
    "genre": "冒险 / 恐怖 / 考古",
    "tags": [
      "埃及古墓",
      "瘟疫",
      "时间循环",
      "女王诅咒"
    ],
    "oneLine": "考古队打开了一座从未被盗的法老情妇之墓，随后每人都以古埃及《亡灵书》中记载的刑罚方式死去。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0552",
    "title": "我想我是基",
    "url": "./movie-0552.html",
    "cover": "./102.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 同性 / 青春",
    "tags": [
      "自我认同",
      "校园",
      "友情",
      "亲情",
      "成长"
    ],
    "oneLine": "即将结婚的“直男”阿杰，在婚礼前夜被死党带入一场gay吧狂欢，从此人生天翻地覆。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0553",
    "title": "全员射杀",
    "url": "./movie-0553.html",
    "cover": "./103.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 犯罪",
    "tags": [
      "黑吃黑",
      "枪战",
      "密室",
      "非线性叙事"
    ],
    "oneLine": "一场黑帮交易演变成无差别枪战，最后活着的三人发现，他们手上都戴着同款手铐。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0554",
    "title": "出册",
    "url": "./movie-0554.html",
    "cover": "./104.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 犯罪",
    "tags": [
      "出狱",
      "重生",
      "社工",
      "边缘人",
      "社会写实"
    ],
    "oneLine": "坐了二十年牢的黑帮打手出狱后，发现整个世界都变了，唯一愿意接纳他的，是当年被他伤害过的被害人姐姐。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0555",
    "title": "简单小生活",
    "url": "./movie-0555.html",
    "cover": "./105.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情， 家庭， 治愈",
    "tags": [
      "极简主义",
      "断舍离",
      "都市压力",
      "亲情"
    ],
    "oneLine": "患上囤积症的母亲与崇尚断舍离的女儿，在50平米的老房子里展开了一场空间争夺战。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0556",
    "title": "皇后镇球王",
    "url": "./movie-0556.html",
    "cover": "./106.jpg",
    "region": "新西兰",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 运动",
    "tags": [
      "橄榄球",
      "华裔移民",
      "身份认同",
      "小镇荣耀"
    ],
    "oneLine": "一个来自中国的交换生，成了新西兰皇后镇高中的橄榄球救星。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0557",
    "title": "纵情一曲",
    "url": "./movie-0557.html",
    "cover": "./107.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2014",
    "genre": "剧情 / 音乐",
    "tags": [
      "晚年爱情",
      "音乐",
      "乡村",
      "幽默"
    ],
    "oneLine": "一位生命倒计时的老人，用最后一场舞会向三位前女友告别。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0558",
    "title": "披肩圈套",
    "url": "./movie-0558.html",
    "cover": "./108.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑，犯罪",
    "tags": [
      "复古时装",
      "连环谋杀",
      "裁缝侦探",
      "1950年代"
    ],
    "oneLine": "1950年代伦敦，一位老裁缝发现连续三位女顾客死于自己定制的披肩之下，而每条披肩的针脚都在指向下一个目标。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0559",
    "title": "逃离家园",
    "url": "./movie-0559.html",
    "cover": "./109.jpg",
    "region": "叙利亚 / 法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 战争",
    "tags": [
      "难民",
      "儿童视角",
      "公路",
      "生存",
      "催泪"
    ],
    "oneLine": "战火中的叙利亚兄妹，独自穿越半个欧洲寻找失散父母，只有七岁的哥哥必须一夜长大。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0560",
    "title": "最毒妇人心",
    "url": "./movie-0560.html",
    "cover": "./110.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "复仇",
      "女性群像",
      "反转"
    ],
    "oneLine": "养老院里四个老太太联手杀了一个护工，警方发现，她们每个人都曾经是被他盯上的“猎物”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0561",
    "title": "阿鲁斯的巨兽",
    "url": "./movie-0561.html",
    "cover": "./111.jpg",
    "region": "日本",
    "type": "TV动画",
    "year": "2023",
    "genre": "奇幻, 冒险, 动作",
    "tags": [
      "巨人",
      "姐妹情",
      "末日",
      "战斗少女"
    ],
    "oneLine": "在人类只能住在巨兽骨架里的世界，一个无法说话的少女与一个蔑视巨兽的流浪骑士，相遇在“噬星兽”的腹中。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0562",
    "title": "笨贼一箩筐",
    "url": "./movie-0562.html",
    "cover": "./112.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 黑色幽默",
    "tags": [
      "多线叙事",
      "乌龙",
      "劫匪",
      "巧合",
      "方言"
    ],
    "oneLine": "三伙互不相识的笨贼在同一晚潜入同一栋别墅，结果被一个独居的退休老警察一网打尽。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0563",
    "title": "印度糖果与香料",
    "url": "./movie-0563.html",
    "cover": "./113.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "genre": "剧情喜剧",
    "tags": [
      "美食",
      "移民家庭",
      "代际和解",
      "温暖治愈"
    ],
    "oneLine": "叛逆的女儿想关掉祖传糖果店，却在一盒旧香料里找到了奶奶穿越时空的食谱。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0564",
    "title": "谁是最爱",
    "url": "./movie-0564.html",
    "cover": "./114.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 家庭 / 悬疑",
    "tags": [
      "遗产争夺",
      "秘密",
      "全员恶人",
      "反转"
    ],
    "oneLine": "富豪临终前留下谜题，三个子女必须找出谁才是父亲“最爱”的孩子才能继承遗产。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0565",
    "title": "牛的战争",
    "url": "./movie-0565.html",
    "cover": "./115.jpg",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "一战",
      "动物",
      "农场",
      "兄弟"
    ],
    "oneLine": "1916年凡尔登战役期间，一对法国兄弟为保住家里最后一头耕牛，在战火中穿越前线展开疯狂冒险。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0566",
    "title": "桑拿房的女性私语",
    "url": "./movie-0566.html",
    "cover": "./116.jpg",
    "region": "芬兰",
    "type": "电影",
    "year": "2023",
    "genre": "剧情",
    "tags": [
      "女性群像",
      "桑拿文化",
      "裸体谈话"
    ],
    "oneLine": "在芬兰的公共桑拿房里，几个赤诚相见的女人，开始谈论那些从未说出口的事。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0567",
    "title": "再见哈瓦那",
    "url": "./movie-0567.html",
    "cover": "./117.jpg",
    "region": "古巴 / 西班牙",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 音乐",
    "tags": [
      "古巴",
      "雪茄",
      "移民",
      "祖孙",
      "爵士"
    ],
    "oneLine": "老雪茄匠得知孙女要去纽约追梦，决定用最后一盒私藏烟叶教她“卷出古巴的灵魂”。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0568",
    "title": "突击少女",
    "url": "./movie-0568.html",
    "cover": "./118.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 惊悚",
    "tags": [
      "女性",
      "反恐",
      "精英部队"
    ],
    "oneLine": "一名18岁少女通过地狱选拔加入GIGN，她要在48小时内找出潜伏在队伍中的恐怖分子新娘。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0569",
    "title": "酒店",
    "url": "./movie-0569.html",
    "cover": "./119.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑惊悚",
    "tags": [
      "暴风雪山庄",
      "12集",
      "每个房间一个秘密",
      "连环失踪"
    ],
    "oneLine": "一家建在废弃刑场上的酒店，每逢雨夜就会有住客离奇消失，而新来的前台发现所有失踪者都住过同一个房间。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0570",
    "title": "超乎人性",
    "url": "./movie-0570.html",
    "cover": "./120.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻惊悚",
    "tags": [
      "基因改造",
      "人工智能",
      "伦理困境",
      "人性拷问"
    ],
    "oneLine": "一种能消除所有负面情绪的药物被强制推广，人们变得永远快乐，却也开始失去基本的自保本能。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0571",
    "title": "卡车斗士",
    "url": "./movie-0571.html",
    "cover": "./121.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 动作 / 家庭",
    "tags": [
      "公路片",
      "父子和解",
      "卡车司机",
      "扫黑除恶",
      "现实主义"
    ],
    "oneLine": "为了阻止儿子进入传销组织，一个退了休的“老卡车斗士”开着他那辆破旧的大卡车，带着儿子横跨半个中国去“要个说法”。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0572",
    "title": "抢救基努猫",
    "url": "./movie-0572.html",
    "cover": "./122.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧， 动作",
    "tags": [
      "猫",
      "黑客帝国",
      "黑帮",
      "搞笑",
      "拯救行动"
    ],
    "oneLine": "一个程序员的猫被黑帮绑架，他竟发现自己需要像尼奥一样“救世”才能救回爱猫。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0573",
    "title": "开工大急",
    "url": "./movie-0573.html",
    "cover": "./123.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "职场喜剧",
    "tags": [
      "上班族",
      "deadline",
      "疯狂一夜"
    ],
    "oneLine": "明天上午九点提案，今晚整个团队却因为一份丢失的PPT母版，被困在了公司的大楼里。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0574",
    "title": "倾城别恋",
    "url": "./movie-0574.html",
    "cover": "./124.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情， 历史",
    "tags": [
      "民国",
      "战火",
      "宿命"
    ],
    "oneLine": "1937 年南京城破前夕，一名军官与戏班花旦的爱情，必须在倾城灾难面前做出选择。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0575",
    "title": "他人即是地狱",
    "url": "./movie-0575.html",
    "cover": "./125.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2019",
    "genre": "心理惊悚 / 悬疑 / 剧情",
    "tags": [
      "公寓孤立",
      "社交恐惧",
      "监视窥探",
      "群体暴力",
      "人格崩解",
      "城市异化"
    ],
    "oneLine": "搬进廉价公寓的年轻作家以为终于能独处写作，却发现每一扇门后都住着一张正在等他坠落的脸。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0576",
    "title": "辩论赛",
    "url": "./movie-0576.html",
    "cover": "./126.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "校园, 青春",
    "tags": [
      "辩论",
      "成长",
      "热血",
      "社团",
      "梦想"
    ],
    "oneLine": "一个因为口吃被嘲笑的少年，加入辩论队后，竟用“结巴”作为战术打败了全国冠军。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0577",
    "title": "喜气逼人",
    "url": "./movie-0577.html",
    "cover": "./127.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 家庭",
    "tags": [
      "春节",
      "返乡",
      "尬聊",
      "温情",
      "新中式"
    ],
    "oneLine": "一个在大城市做AI产品经理的社恐，过年回村被全村人当成“人工智能算命大师”。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0578",
    "title": "丛林游戏",
    "url": "./movie-0578.html",
    "cover": "./128.jpg",
    "region": "巴西",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚, 冒险, 生存",
    "tags": [
      "雨林",
      "真人游戏",
      "富豪猎杀",
      "血腥"
    ],
    "oneLine": "六名网红受邀参加雨林生存直播，发现自己才是被全球富豪竞猜的猎物。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0579",
    "title": "空尖弹",
    "url": "./movie-0579.html",
    "cover": "./129.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "genre": "西部 / 犯罪 / 惊悚",
    "tags": [
      "边境小镇",
      "黑市军火",
      "复仇追击",
      "荒漠法则",
      "道德灰区"
    ],
    "oneLine": "当一颗空尖弹把边境小镇的平静彻底打碎，两个本该互不相干的男人被迫在荒漠里追查一场早已埋伏好的杀局。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0580",
    "title": "波士顿布莱奇中国历险记",
    "url": "./movie-0580.html",
    "cover": "./130.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 冒险, 喜剧",
    "tags": [
      "特工",
      "中外合拍",
      "文化冲突",
      "功夫",
      "寻宝"
    ],
    "oneLine": "一名CIA特工与一名中国文物修复师，为了找回流失海外的传国玉玺，从长城一路打到桂林。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0581",
    "title": "忧郁的物怪庵第一季",
    "url": "./movie-0581.html",
    "cover": "./131.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2025",
    "genre": "奇幻，治愈，喜剧",
    "tags": [
      "妖怪",
      "除妖",
      "搭档",
      "青春"
    ],
    "oneLine": "一位能看见妖怪的厌世高中生，被迫继承了一家专门“送走”忧郁妖怪的古怪庵寺，并结识了嘴硬心软的狐妖搭档。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0582",
    "title": "沙漠奇兵",
    "url": "./movie-0582.html",
    "cover": "./132.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 冒险",
    "tags": [
      "越野赛车",
      "复仇",
      "石油",
      "废土风"
    ],
    "oneLine": "为了救出被绑架的女儿，一名退役越野车手必须在一场横跨撒哈拉的非法死亡竞赛中夺冠。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0583",
    "title": "顺流逆流",
    "url": "./movie-0583.html",
    "cover": "./133.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 运动",
    "tags": [
      "龙舟",
      "传承",
      "父子",
      "热血"
    ],
    "oneLine": "反叛的儿子被迫继承父亲的龙舟队，要用“当代方式”参加一场必须赢的传统大赛。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0584",
    "title": "铁人28大电影",
    "url": "./movie-0584.html",
    "cover": "./134.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "科幻， 动作， 灾难",
    "tags": [
      "巨大机器人",
      "战争反思",
      "父子情",
      "重启",
      "特效大片"
    ],
    "oneLine": "战后废墟下，少年操控父亲遗留的巨大钢铁巨人，对抗因复仇而失控的昔日战友。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0585",
    "title": "镇魂街第一季",
    "url": "./movie-0585.html",
    "cover": "./135.jpg",
    "region": "中国大陆",
    "type": "动画",
    "year": "2024",
    "genre": "奇幻 / 战斗",
    "tags": [
      "国漫",
      "守护灵",
      "兄弟情",
      "热血",
      "阴阳双线"
    ],
    "oneLine": "弟弟为复活哥哥成为镇魂将，却发现哥哥才是幕后黑手。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0586",
    "title": "血洗天牢",
    "url": "./movie-0586.html",
    "cover": "./136.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "古装动作 / 悬疑",
    "tags": [
      "复仇",
      "密狱",
      "朝堂阴谋",
      "以暴制暴",
      "双线反转"
    ],
    "oneLine": "一名被诬陷的禁军统领潜入皇城地底天牢，在血色审讯与旧案真相之间，拆开一场牵连三代人的夺权杀局。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0587",
    "title": "休想行刺本王小姐",
    "url": "./movie-0587.html",
    "cover": "./137.jpg",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2024",
    "genre": "古装, 喜剧, 悬疑",
    "tags": [
      "女王爷",
      "反套路",
      "权谋",
      "搞笑",
      "忠犬护卫"
    ],
    "oneLine": "废物王爷其实是顶级权谋家，当刺客组团上门，她决定给每个杀手进行岗前培训。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0588",
    "title": "大楼里只有谋杀第四季",
    "url": "./movie-0588.html",
    "cover": "./138.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 喜剧 / 犯罪",
    "tags": [
      "播客",
      "密室杀人",
      "元叙事",
      "第四堵墙",
      "粉丝理论"
    ],
    "oneLine": "查尔斯三人因播客爆红被请去好莱坞拍电影，但片场离奇死亡事件完全复制了他们第一季的案情。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0589",
    "title": "来不及再见",
    "url": "./movie-0589.html",
    "cover": "./139.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 家庭",
    "tags": [
      "绝症",
      "和解",
      "催泪弹"
    ],
    "oneLine": "叛逆少女得知母亲只剩一个月生命，她决定伪装成乖女儿，却在扮演中发现自己从未了解过母亲。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0590",
    "title": "圣灵",
    "url": "./movie-0590.html",
    "cover": "./140.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 悬疑 / 超自然",
    "tags": [
      "驱魔",
      "心理恐怖",
      "宗教",
      "反转"
    ],
    "oneLine": "梵蒂冈派来的驱魔师发现，附身少女的并非恶魔，而是一个渴望复仇的善良圣灵。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0591",
    "title": "检察官内传",
    "url": "./movie-0591.html",
    "cover": "./141.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 职场 / 律政",
    "tags": [
      "地检办公室",
      "日常喜剧",
      "司法黑幕"
    ],
    "oneLine": "地方检察厅的“废物”检察官们，用吃播、打游戏和摸鱼，对抗首尔总部的精英权力压迫。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0592",
    "title": "逃出狂鲨岛",
    "url": "./movie-0592.html",
    "cover": "./142.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 惊悚 / 冒险",
    "tags": [
      "鲨鱼",
      "孤岛求生",
      "退役特种兵",
      "极限逃生"
    ],
    "oneLine": "退役海军陆战队员带女儿度假，轮船倾覆后，他们被困在鲨鱼环伺的荒岛。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0593",
    "title": "大叔小馆",
    "url": "./movie-0593.html",
    "cover": "./143.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "治愈",
      "市井烟火",
      "代际和解"
    ],
    "oneLine": "一个在北京失意的米其林大厨逃回故乡小镇开深夜食堂，却意外成了问题少年们的临时家长。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0594",
    "title": "超新星",
    "url": "./movie-0594.html",
    "cover": "./144.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2020",
    "genre": "爱情， 剧情",
    "tags": [
      "同性",
      "老年",
      "痴呆症",
      "公路旅行",
      "古典乐"
    ],
    "oneLine": "钢琴家带失忆的爱人开着房车穿越英格兰，只为让他再看一眼曾闪耀过的星空。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0595",
    "title": "一桥桐子的犯罪日记",
    "url": "./movie-0595.html",
    "cover": "./145.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑 / 剧情",
    "tags": [
      "老年犯罪",
      "日记体",
      "社会派",
      "反转"
    ],
    "oneLine": "七十三岁的独居老人桐子奶奶，她的日记本里写满了完美的杀人计划，而警察发现这些计划正在一一实现。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0596",
    "title": "极恶非道2",
    "url": "./movie-0596.html",
    "cover": "./146.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "动作，犯罪",
    "tags": [
      "黑帮",
      "血腥复仇",
      "权力斗争"
    ],
    "oneLine": "隐退江湖的传说杀手，为了救出被绑架的女儿，不得不重操旧业，与新一代冷酷黑帮展开智死对决。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0597",
    "title": "天堂马帮",
    "url": "./movie-0597.html",
    "cover": "./147.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 西部",
    "tags": [
      "民国剿匪",
      "马帮传奇",
      "雪山复仇",
      "硬核枪战"
    ],
    "oneLine": "1920年代滇西，一支神秘的驮队游走在毒贩与军阀之间，实际上是一群为家人复仇的鬼魂。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0598",
    "title": "末路狂奔1996",
    "url": "./movie-0598.html",
    "cover": "./148.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1996",
    "genre": "动作、犯罪、警匪",
    "tags": [
      "黑帮",
      "兄弟情",
      "背叛",
      "悲情"
    ],
    "oneLine": "1996年，四个从小一起长大的兄弟在香港黑帮中沉浮，最终因一袋毒品和一次卧底行动分崩离析。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0599",
    "title": "花颜劫",
    "url": "./movie-0599.html",
    "cover": "./149.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "古装/爱情/悬疑",
    "tags": [
      "宫廷秘案",
      "易容换身份",
      "女性复仇",
      "繁花意象",
      "命运反转",
      "权谋暗线"
    ],
    "oneLine": "一场围绕“花颜秘术”的宫中旧案，让一名被抹去姓名的女子在血色花海里，一步步逼近真相与自我救赎。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0600",
    "title": "星球大战:西斯的复仇",
    "url": "./movie-0600.html",
    "cover": "./150.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2005",
    "genre": "科幻/动作",
    "tags": [
      "太空歌剧",
      "宿命对决",
      "黑暗转变"
    ],
    "oneLine": "绝地英雄安纳金在恐惧与愤怒中堕入原力黑暗面，成为黑武士达斯·维达。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0601",
    "title": "青衿志",
    "url": "./movie-0601.html",
    "cover": "./1.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "青春校园",
    "tags": [
      "逆袭",
      "高考",
      "中医传承",
      "少年热血"
    ],
    "oneLine": "一个被劝退的差生，为守护爷爷的古药铺，必须在高考前拿下全国中医竞赛冠军。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0602",
    "title": "安东尼奥·维瓦尔",
    "url": "./movie-0602.html",
    "cover": "./2.jpg",
    "region": "意大利",
    "type": "电视剧",
    "year": "2020",
    "genre": "传记 / 音乐",
    "tags": [
      "巴洛克",
      "小提琴",
      "神父",
      "四季"
    ],
    "oneLine": "红发神父维瓦尔第在威尼斯孤儿院教出一支全女子管弦乐团，音乐与教会的禁忌碰撞。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0603",
    "title": "搭错车",
    "url": "./movie-0603.html",
    "cover": "./3.jpg",
    "region": "台湾",
    "type": "电影",
    "year": "1983",
    "genre": "剧情, 音乐",
    "tags": [
      "催泪经典",
      "父爱如山",
      "歌曲经典",
      "哑父"
    ],
    "oneLine": "哑叔靠捡破烂养大了养女，当女儿成了大歌星，却在演唱会上唱着《酒干倘卖无》，而台下的哑叔已经听不见了。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0604",
    "title": "新婚乐逃逃",
    "url": "./movie-0604.html",
    "cover": "./4.jpg",
    "region": "香港",
    "type": "电影",
    "year": "1990",
    "genre": "喜剧， 爱情",
    "tags": [
      "婚前恐惧",
      "乌龙",
      "港式笑料"
    ],
    "oneLine": "新郎在婚礼上被前女友带走，新娘抓起婚纱追了出去。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0605",
    "title": "洗屋大师",
    "url": "./movie-0605.html",
    "cover": "./5.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "都市怪谈",
      "职业驱魔",
      "单元剧结构"
    ],
    "oneLine": "一个能看见鬼魂的清洁工，专接凶宅清理工作，却发现每间房子的怨灵都与同一个地产公司有关。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0606",
    "title": "向左爱·向右爱",
    "url": "./movie-0606.html",
    "cover": "./6.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2002",
    "genre": "爱情，剧情",
    "tags": [
      "纯爱",
      "命运",
      "摄影",
      "绝症"
    ],
    "oneLine": "摄影师在暗房冲洗出十年前拍下的一张照片，发现女友身边的神秘女子竟是现在的未婚妻。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0607",
    "title": "杀死爸爸",
    "url": "./movie-0607.html",
    "cover": "./7.jpg",
    "region": "瑞典 / 挪威",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 惊悚, 家庭",
    "tags": [
      "北欧冷峻",
      "弑父",
      "家庭创伤",
      "反抗父权"
    ],
    "oneLine": "在父亲的葬礼上，三兄妹收到一份遗书，父亲要求他们在继承遗产前必须合力完成一个任务：完成当年未遂的“杀死爸爸”游戏。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0608",
    "title": "玫瑰小天使",
    "url": "./movie-0608.html",
    "cover": "./8.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻、家庭、儿童",
    "tags": [
      "天使",
      "自闭症",
      "治愈",
      "花语",
      "温暖"
    ],
    "oneLine": "一个自称“玫瑰天使”的神秘女孩，闯入了自闭症男孩小默的世界，教会他拥抱带刺的人。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0609",
    "title": "幸福小丈夫",
    "url": "./movie-0609.html",
    "cover": "./9.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "家庭伦理喜剧",
    "tags": [
      "姐弟恋",
      "上门女婿",
      "乡村",
      "温情",
      "反刻板"
    ],
    "oneLine": "城里来的“软饭男”入赘到东北农村，全村人都看不起他，直到他用一手绝活改变了整个村子的命运。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0610",
    "title": "我叫布萨芭泰语",
    "url": "./movie-0610.html",
    "cover": "./10.jpg",
    "region": "泰国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": [
      "语言",
      "异国",
      "身份认同",
      "搞笑"
    ],
    "oneLine": "一个泰国乡下女孩去曼谷当保姆，因为口音太重被嘲笑，却意外成为泰语保护运动的旗手。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0611",
    "title": "哈瓦那的吸血鬼",
    "url": "./movie-0611.html",
    "cover": "./11.jpg",
    "region": "古巴",
    "type": "电影",
    "year": "2003",
    "genre": "恐怖，喜剧",
    "tags": [
      "吸血鬼",
      "古巴",
      "黑色幽默",
      "殖民隐喻"
    ],
    "oneLine": "西班牙殖民者将吸血鬼带到古巴，三百年后吸血鬼后代却因哈瓦那太热、太穷，决定罢工不吸血了。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0612",
    "title": "死侍",
    "url": "./movie-0612.html",
    "cover": "./12.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "genre": "动作 / 喜剧 / 超级英雄",
    "tags": [
      "反英雄",
      "打破第四面墙",
      "嘴炮",
      "暴力美学"
    ],
    "oneLine": "一名身患绝症的前特种兵接受非法实验后毁容不死，他开始追杀毁掉他生活的每个人。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0613",
    "title": "杀戮南瓜怪",
    "url": "./movie-0613.html",
    "cover": "./13.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖 / 喜剧",
    "tags": [
      "万圣节",
      "植物变异",
      "血浆"
    ],
    "oneLine": "万圣节之夜，一个被辐射过的巨型南瓜复活了，它不吃肉只吃糖，不给糖就捣碎你的头。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0614",
    "title": "傅满洲的面孔",
    "url": "./movie-0614.html",
    "cover": "./14.jpg",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2022",
    "genre": "犯罪 / 悬疑 / 惊悚",
    "tags": [
      "黄祸",
      "刻板印象",
      "解构",
      "神秘面具",
      "连环谋杀"
    ],
    "oneLine": "伦敦接连发生手法如同傅满洲小说描述的谋杀案，一名亚裔警探为证明种族偏见与真凶展开赛跑。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0615",
    "title": "赛车手妮卡",
    "url": "./movie-0615.html",
    "cover": "./15.jpg",
    "region": "斯洛文尼亚",
    "type": "电影",
    "year": "2025",
    "genre": "运动，剧情",
    "tags": [
      "女性",
      "赛车",
      "父女",
      "梦想"
    ],
    "oneLine": "叛逆少女妮卡想成为职业赛车手，但她的父亲是当地最反对女性开车的老保守，而她的教练是父亲的死对头。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0616",
    "title": "金玉盟",
    "url": "./movie-0616.html",
    "cover": "./16.jpg",
    "region": "中国内地",
    "type": "电影",
    "year": "2023",
    "genre": "爱情, 喜剧",
    "tags": [
      "相亲骗局",
      "假戏真做",
      "都市男女"
    ],
    "oneLine": "两个婚托假装富二代和名媛互骗，结果互相爱上了对方的“假身份”。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0617",
    "title": "甜蜜家园2",
    "url": "./movie-0617.html",
    "cover": "./17.jpg",
    "region": "韩国",
    "type": "电视剧集",
    "year": "2023",
    "genre": "惊悚，剧情，末日",
    "tags": [
      "怪物化",
      "欲望",
      "公寓楼",
      "人性考验"
    ],
    "oneLine": "绿之家公寓爆炸后，幸存者们分散到荒废的首尔各地，他们发现怪物化不再是随机事件，而是一种可以主动传染的“宗教”。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0618",
    "title": "鸡密真相",
    "url": "./movie-0618.html",
    "cover": "./18.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑，喜剧，科幻",
    "tags": [
      "荒诞",
      "小镇",
      "外星文明",
      "黑色幽默",
      "讽刺"
    ],
    "oneLine": "小镇上所有的鸡忽然开口说人话，它们指责人类“偷蛋罪大恶极”，并要求成立“鸡权共和国”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0619",
    "title": "遣返",
    "url": "./movie-0619.html",
    "cover": "./19.jpg",
    "region": "法国 / 塞内加尔",
    "type": "电影",
    "year": "2024",
    "genre": "剧情",
    "tags": [
      "非法移民",
      "父与子",
      "身份认同"
    ],
    "oneLine": "在法国生活二十年的黑人清洁工被遣返，回到塞内加尔的儿子却拒绝承认这个父亲。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0620",
    "title": "跳跃生命线粤语",
    "url": "./movie-0620.html",
    "cover": "./20.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2018",
    "genre": "剧情 / 职业 / 医疗",
    "tags": [
      "救护员",
      "港剧",
      "急救",
      "生死",
      "马德钟"
    ],
    "oneLine": "救护员每一次拉响警笛，都是在和死神抢时间，但这一次，他们抢不过自己的心魔。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0621",
    "title": "遥不可及",
    "url": "./movie-0621.html",
    "cover": "./21.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "剧情文艺",
    "tags": [
      "底层",
      "梦想",
      "父女",
      "现实"
    ],
    "oneLine": "住在深水埗劏房的清洁工阿胜，唯一的女儿被确诊需要到美国做手术，费用三百万。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0622",
    "title": "委托人1994",
    "url": "./movie-0622.html",
    "cover": "./22.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2011",
    "genre": "悬疑, 惊悚",
    "tags": [
      "法庭",
      "反转",
      "杀人案"
    ],
    "oneLine": "一具无头女尸，一个失忆的丈夫，律师必须在72小时内找到真相否则委托人将被判死刑。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0623",
    "title": "演播时刻第一季",
    "url": "./movie-0623.html",
    "cover": "./23.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 惊悚",
    "tags": [
      "新闻业",
      "冷战",
      "体制内反抗",
      "BBC"
    ],
    "oneLine": "1956年苏伊士运河危机期间，BBC一档深夜新闻节目的制作团队，在政府压力下决定播出一个足以引发宪政危机的真相。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0624",
    "title": "春光奏鸣曲国语",
    "url": "./movie-0624.html",
    "cover": "./24.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 音乐, 历史",
    "tags": [
      "肖邦",
      "乔治桑",
      "浪漫主义",
      "钢琴",
      "跨国恋"
    ],
    "oneLine": "1830年代的巴黎，病弱的钢琴诗人肖邦与女装大佬作家乔治·桑的爱情故事，配以全新的国语配音和重制的管弦乐配乐。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0625",
    "title": "市集街之旅",
    "url": "./movie-0625.html",
    "cover": "./25.jpg",
    "region": "土耳其",
    "type": "电影",
    "year": "2022",
    "genre": "剧情、家庭、公路",
    "tags": [
      "伊斯坦布尔",
      "大巴扎",
      "父女",
      "遗产",
      "地毯商人"
    ],
    "oneLine": "叛逆女儿陪固执父亲穿越伊斯坦布尔迷宫般的大巴扎，只为寻找一张只存在于传说中的手工地毯。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0626",
    "title": "科西嘉兄弟",
    "url": "./movie-0626.html",
    "cover": "./26.jpg",
    "region": "法国 / 意大利",
    "type": "电影",
    "year": "1961",
    "genre": "喜剧 / 冒险 / 历史",
    "tags": [
      "兄弟喜剧",
      "科西嘉岛",
      "夺宝",
      "法式幽默",
      "经典"
    ],
    "oneLine": "一对性格迥异的科西嘉兄弟，为了家族荣誉和一张藏宝图踏上啼笑皆非的旅程。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0627",
    "title": "燃情主厨",
    "url": "./movie-0627.html",
    "cover": "./27.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "genre": "美食剧情",
    "tags": [
      "美食",
      "逆袭",
      "师徒",
      "赛场",
      "家庭和解"
    ],
    "oneLine": "一位被行业除名的天才主厨，带着失传配方重回灶台，在一场决定饭店生死的厨王赛里，做出能点燃人心的最后一道菜。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0628",
    "title": "史上最强弟子",
    "url": "./movie-0628.html",
    "cover": "./28.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2006",
    "genre": "格斗 / 喜剧",
    "tags": [
      "武术",
      "废柴逆袭",
      "热血",
      "修行"
    ],
    "oneLine": "一个在学校被欺负的懦弱男生，被送进全是变态高手的武术道场后开启地狱修行。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0629",
    "title": "毛骗",
    "url": "./movie-0629.html",
    "cover": "./29.jpg",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2010",
    "genre": "犯罪 / 悬疑 / 剧情",
    "tags": [
      "骗局设计",
      "反转连环",
      "草根智斗",
      "黑色幽默",
      "都市江湖",
      "多线叙事"
    ],
    "oneLine": "一群看似吊儿郎当的小骗子游走在城市边缘，用一层套一层的局专挑骗子下手，却在追逐真相时发现自己也早被更大的局盯上。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0630",
    "title": "火影忍者剧场版：博人传",
    "url": "./movie-0630.html",
    "cover": "./30.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "动作， 动画， 冒险",
    "tags": [
      "忍者",
      "父子情",
      "新时代",
      "热血"
    ],
    "oneLine": "当忍者时代被科技取代，漩涡博人必须超越他身为七代目火影的父亲，才能阻止一场虚拟与现实混战的世界大赛。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0631",
    "title": "快乐王子",
    "url": "./movie-0631.html",
    "cover": "./31.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情",
    "tags": [
      "传记",
      "王尔德",
      "悲剧",
      "历史",
      "文学"
    ],
    "oneLine": "奥斯卡·王尔德出狱后流亡巴黎的最后一程，他用自己的死亡，完成了人生最后一件“艺术品”。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0632",
    "title": "留校联盟",
    "url": "./movie-0632.html",
    "cover": "./32.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "青春校园",
    "tags": [
      "社团",
      "对抗学校",
      "联盟",
      "成长"
    ],
    "oneLine": "五名被留校的学生结成秘密联盟，要推翻校长的独裁统治。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0633",
    "title": "寒武纪",
    "url": "./movie-0633.html",
    "cover": "./33.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "科幻，悬疑，冒险",
    "tags": [
      "生物进化",
      "基因突变",
      "阴谋论",
      "绝境求生"
    ],
    "oneLine": "深海科考队激活了寒武纪古生物化石，一场足以改写人类进化链的灾难就此降临。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0634",
    "title": "天鹅挽歌",
    "url": "./movie-0634.html",
    "cover": "./34.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "科幻, 剧情",
    "tags": [
      "克隆",
      "伦理",
      "绝症",
      "替身"
    ],
    "oneLine": "一位绝症钢琴家秘密克隆自己，让克隆人代替他陪伴家人，却在最后时刻陷入存在危机。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0635",
    "title": "山水有相逢",
    "url": "./movie-0635.html",
    "cover": "./35.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 家庭",
    "tags": [
      "粤剧",
      "父女和解",
      "非遗传承",
      "时代变迁"
    ],
    "oneLine": "叛逆的女儿逃离粤剧团十年，为争夺老戏院产权归来，却发现父亲正用AI为粤剧寻找未来。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0636",
    "title": "皇后进宫",
    "url": "./movie-0636.html",
    "cover": "./36.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "古装, 喜剧, 宫斗",
    "tags": [
      "穿越",
      "女强",
      "反套路",
      "职场思维"
    ],
    "oneLine": "现代女总裁穿成废后，用KPI和OKR管理后宫，把皇帝整懵了。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0637",
    "title": "灵犬寻主记",
    "url": "./movie-0637.html",
    "cover": "./37.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 家庭",
    "tags": [
      "狗狗",
      "回家",
      "治愈"
    ],
    "oneLine": "忠犬贝拉在车祸后跨越千里，凭借惊人嗅觉寻找失散在战乱中的失明老主人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0638",
    "title": "猎鹰湖",
    "url": "./movie-0638.html",
    "cover": "./38.jpg",
    "region": "美国",
    "type": "惊悚片",
    "year": "2019",
    "genre": "惊悚,动作,政治",
    "tags": [
      "无人机事故",
      "边境黑市",
      "环保抗争",
      "生存追击"
    ],
    "oneLine": "艺术照相师回到父亲故乡，只想拍一组夜景，却在猎鹰湖底捞出人体骨骸与失踪名单，越沉到湖心越像被国家实验室按下的按钮。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0639",
    "title": "此时此爱",
    "url": "./movie-0639.html",
    "cover": "./39.jpg",
    "region": "芬兰",
    "type": "电影",
    "year": "2025",
    "genre": "剧情爱情",
    "tags": [
      "北欧冷淡风",
      "极昼",
      "夏日邂逅",
      "限时恋爱"
    ],
    "oneLine": "极昼的赫尔辛基，一个只在夏天贩卖快乐的街头滑板少年，爱上了一个即将做脑瘤手术的女孩。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0640",
    "title": "生死赌局",
    "url": "./movie-0640.html",
    "cover": "./40.jpg",
    "region": "香港",
    "type": "电影",
    "year": "2014",
    "genre": "犯罪, 悬疑, 心理战, 动作",
    "tags": [
      "赌场",
      "旧城",
      "反洗钱",
      "身份错位",
      "亲情复仇",
      "公开审判"
    ],
    "oneLine": "当赌局规则比法律更冷时，前牌手要在最后一局赌掉全城的账本与妹妹生命，用真相和勇气赌出一座城市的自证。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0641",
    "title": "牵挂",
    "url": "./movie-0641.html",
    "cover": "./41.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2027",
    "genre": "家庭, 生活",
    "tags": [
      "养老",
      "亲子关系",
      "邻里",
      "温情"
    ],
    "oneLine": "老北京胡同里，一位独居老人和一位北漂女孩因一只流浪猫相识，成为彼此在这个城市最深的牵挂。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0642",
    "title": "越夜越宵愁",
    "url": "./movie-0642.html",
    "cover": "./42.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情, 美食, 都市",
    "tags": [
      "深夜食堂",
      "都市情感",
      "群像",
      "治愈"
    ],
    "oneLine": "在香港深水埗一家只在深夜营业的糖水铺里，形形色色的都市人带着各自的故事前来，用一碗糖水解千愁。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0643",
    "title": "指名！",
    "url": "./movie-0643.html",
    "cover": "./43.jpg",
    "region": "日本",
    "type": "动画",
    "year": "2022",
    "genre": "竞技/职场/青春",
    "tags": [
      "声优",
      "业界",
      "励志",
      "群像",
      "热血"
    ],
    "oneLine": "六个被声优界淘汰的“废柴”组成地下偶像声优团，目标是登上年度“指名”大赏。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0644",
    "title": "时空恋人 动态漫",
    "url": "./movie-0644.html",
    "cover": "./44.jpg",
    "region": "中国大陆",
    "type": "动态漫画",
    "year": "2025",
    "genre": "爱情, 科幻, 悬疑",
    "tags": [
      "跨时空恋爱",
      "催泪",
      "循环",
      "动态漫"
    ],
    "oneLine": "一个女孩通过老式收音机联系上了1995年的男孩，但每次更改过去都会让她在未来的身体消失一部分。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0645",
    "title": "诺娃队长",
    "url": "./movie-0645.html",
    "cover": "./45.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻 / 冒险 / 超级英雄",
    "tags": [
      "女英雄",
      "机甲",
      "外星入侵",
      "起源故事"
    ],
    "oneLine": "一位残疾女科学家被迫驾驶最失败的战甲，却成了拯救地球的最后希望。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0646",
    "title": "女人永远是对的国语",
    "url": "./movie-0646.html",
    "cover": "./46.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "爱情, 喜剧",
    "tags": [
      "都市",
      "男女关系",
      "女性觉醒",
      "闺蜜"
    ],
    "oneLine": "三个不同年龄的女人，在被男人伤透心后决定“抱团反击”，却闹出一连串笑话。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0647",
    "title": "梨酒与香烟",
    "url": "./movie-0647.html",
    "cover": "./47.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2007",
    "genre": "文艺/剧情",
    "tags": [
      "法式情感",
      "姐妹",
      "遗产之谜",
      "乡间别墅",
      "慢电影"
    ],
    "oneLine": "多年未见的姐妹回老家继承遗产，在地下室发现一桶梨酒和半包香烟，揭开母亲隐秘过往。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0648",
    "title": "受惊夜",
    "url": "./movie-0648.html",
    "cover": "./48.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "直播捉鬼",
      "伪纪录片",
      "公寓闹鬼"
    ],
    "oneLine": "三个网红夜闯废弃公寓直播捉鬼，却发现真正的恐怖来自楼下的邻居。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0649",
    "title": "走进约翰·凯泽尔",
    "url": "./movie-0649.html",
    "cover": "./49.jpg",
    "region": "美国",
    "type": "纪录片",
    "year": "2024",
    "genre": "传记",
    "tags": [
      "幕后",
      "演员",
      "悲情",
      "档案"
    ],
    "oneLine": "沉默的配角如何成就经典？一支遗失的录影带揭开约翰·凯泽尔的最后独白。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0650",
    "title": "剧集版超能陆战队第三季",
    "url": "./movie-0650.html",
    "cover": "./50.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "动画 / 科幻 / 动作",
    "tags": [
      "超级英雄",
      "机器人",
      "团队",
      "青少年",
      "科技伦理"
    ],
    "oneLine": "科技学院出现新的“反天赋”组织，专门绑架有超能天赋的少年。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0651",
    "title": "特种部队：叙利亚",
    "url": "./movie-0651.html",
    "cover": "./51.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2021",
    "genre": "战争 / 动作",
    "tags": [
      "反恐",
      "真实事件改编",
      "小队作战",
      "叙利亚"
    ],
    "oneLine": "六人法军特种小队深入叙利亚营救人质，却发现自己被祖国列为“可牺牲棋子”。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0652",
    "title": "我家是个博物馆",
    "url": "./movie-0652.html",
    "cover": "./52.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "纪录片 / 人文 / 社会",
    "tags": [
      "收藏家",
      "奇人异事",
      "生活方式",
      "物件故事"
    ],
    "oneLine": "探访12位“民间收藏家”的家，他们的客厅是史前化石馆，卧室是红色电话亭，阳台是旧书店。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0653",
    "title": "奇迹的突破",
    "url": "./movie-0653.html",
    "cover": "./53.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 家庭 / 运动",
    "tags": [
      "橄榄球",
      "瘫痪",
      "信仰",
      "母爱",
      "医学奇迹"
    ],
    "oneLine": "一次橄榄球碰撞导致少年瘫痪，医生断言终身无法行走，母亲拒绝接受命运。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0654",
    "title": "多彩人生",
    "url": "./movie-0654.html",
    "cover": "./54.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2026",
    "genre": "剧情、喜剧、励志",
    "tags": [
      "盲人",
      "调香",
      "阶层",
      "感官",
      "梦想"
    ],
    "oneLine": "天生失明的低种姓男孩拥有超强嗅觉，他梦想成为顶级调香师，却只能在焚尸炉旁捡拾残花维持生计。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0655",
    "title": "浴血无名·奔袭",
    "url": "./movie-0655.html",
    "cover": "./55.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "战争, 动作, 剧情",
    "tags": [
      "抗美援朝",
      "狙击手",
      "小队作战",
      "热血"
    ],
    "oneLine": "为了掩护大部队转移，一支只有编号没有名字的侦察排，在冰天雪地里向敌军装甲部队发起了自杀式奔袭。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0656",
    "title": "海盗城",
    "url": "./movie-0656.html",
    "cover": "./56.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2025",
    "genre": "动作，古装，冒险",
    "tags": [
      "海盗",
      "朝鲜时代",
      "寻宝",
      "权谋"
    ],
    "oneLine": "一群被流放到海岛上的朝鲜贱民，为了生存和自由，建立了一座属于自己的“海盗城”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0657",
    "title": "高墙天堂",
    "url": "./movie-0657.html",
    "cover": "./57.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情, 同性, 监狱",
    "tags": [
      "监狱",
      "爱情",
      "救赎",
      "越狱",
      "禁忌"
    ],
    "oneLine": "重刑犯与狱医在监狱高墙内相爱，他们策划了一场不可能的越狱，却发现外面的世界才是真正的地狱。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0658",
    "title": "终极列车",
    "url": "./movie-0658.html",
    "cover": "./58.jpg",
    "region": "美国 / 德国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 科幻 / 惊悚",
    "tags": [
      "末世",
      "火车",
      "闭环生态",
      "阶级对立"
    ],
    "oneLine": "最后的人类生活在永不停止的永恒号列车上，当车头宣布要“甩掉”无生产力的尾车厢时，尾车厢暴动了。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0659",
    "title": "重返舞台四天王",
    "url": "./movie-0659.html",
    "cover": "./59.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "喜剧，音乐，剧情",
    "tags": [
      "乐队",
      "中年危机",
      "怀旧",
      "逆袭"
    ],
    "oneLine": "曾经红极一时的男子组合“四天王”时隔二十年重聚，只为了还清一笔从天而降的巨额债务。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0660",
    "title": "女神咖啡厅第二季",
    "url": "./movie-0660.html",
    "cover": "./60.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "恋爱, 日常, 治愈",
    "tags": [
      "海边小镇",
      "多角关系",
      "经营策略",
      "美食",
      "夏季烟火"
    ],
    "oneLine": "樱花祭后，那家名为“Familia”的海边咖啡厅迎来最强对手——隔壁新开的女仆咖啡厅，而店主竟是男主的前女友。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0661",
    "title": "哎呦，棒球一夏",
    "url": "./movie-0661.html",
    "cover": "./61.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 青春 / 运动",
    "tags": [
      "少年棒球队",
      "暑期集训",
      "社区联赛",
      "师生羁绊",
      "逆袭成长",
      "夏日热血"
    ],
    "oneLine": "一群连投球规则都没分清的暑期少年，被临时拉去组队参赛，却在满身汗水和笑闹里打出了人生第一支全垒打。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0662",
    "title": "谯国夫人",
    "url": "./movie-0662.html",
    "cover": "./62.jpg",
    "region": "中国",
    "type": "剧集",
    "year": "2023",
    "genre": "历史， 传记， 战争",
    "tags": [
      "巾帼英雄",
      "南北朝",
      "岭南"
    ],
    "oneLine": "南北朝岭南女首领冼英从部落少女到“中国巾帼第一人”的六十年传奇人生。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0663",
    "title": "你和我的小情歌",
    "url": "./movie-0663.html",
    "cover": "./63.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "爱情, 音乐",
    "tags": [
      "治愈系",
      "音乐恋情",
      "城市漫游",
      "小众文艺"
    ],
    "oneLine": "过气民谣歌手与患有“听觉过敏”的图书管理员因一首未写完的歌相遇，他不能再唱，她不能再听。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0664",
    "title": "麻辣教师2",
    "url": "./movie-0664.html",
    "cover": "./64.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧、校园",
    "tags": [
      "热血教师",
      "问题学生",
      "社会议题",
      "爆笑解压"
    ],
    "oneLine": "前暴走族鬼冢英吉回归，这次他面对的不是高中生，而是一群比他还狠的幼儿园小朋友。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0665",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 恶魔城第一季 欲燄香魂 猎人：死亡符文 银河系大排档 老婆大人粤语 舞之梦 小小车手 甜心情缘 詹姆斯法兰科的年少时代 鬼挡路6:终极审判 狐门秘事第二季 零度战姬 她爱他 燕山君 暖冬 非正式会谈第四季 天算不如人算 催化剂2025 约会恋爱究竟是什么 待客之道",
    "url": "./movie-0665.html",
    "cover": "./65.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0666",
    "title": "神鬼拳王",
    "url": "./movie-0666.html",
    "cover": "./66.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "运动传记",
    "tags": [
      "运动",
      "拳击",
      "励志",
      "真人真事"
    ],
    "oneLine": "一个被冤入狱的拳击天才，在监狱里打遍天下无敌手，出狱后却发现自己只有三个月的生命。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0667",
    "title": "美丽缘未了",
    "url": "./movie-0667.html",
    "cover": "./67.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "爱情, 剧情, 奇幻",
    "tags": [
      "错位时空",
      "遗憾",
      "信件",
      "治愈"
    ],
    "oneLine": "2003年和2023年的两位房客，通过出租屋墙缝里的一封信，展开了一场跨越20年的通信与爱恋。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0668",
    "title": "异地母子情",
    "url": "./movie-0668.html",
    "cover": "./68.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 家庭",
    "tags": [
      "留守",
      "高考",
      "隔代亲",
      "手机"
    ],
    "oneLine": "为了供儿子读书而远赴他乡打工的母亲，通过一部手机目睹了儿子叛逆的三年。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0669",
    "title": "与恐龙同行",
    "url": "./movie-0669.html",
    "cover": "./69.jpg",
    "region": "英国",
    "type": "纪录片",
    "year": "2021",
    "genre": "自然、古生物",
    "tags": [
      "恐龙",
      "CGI",
      "史前",
      "BBC级制作"
    ],
    "oneLine": "用顶级CGI技术还原白垩纪末期最后一百万年，跟随一只年轻恐龙的生存之旅。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0670",
    "title": "神医安道全",
    "url": "./movie-0670.html",
    "cover": "./70.jpg",
    "region": "中国",
    "type": "电视剧",
    "year": "2023",
    "genre": "古装，悬疑，医学",
    "tags": [
      "中医探案",
      "宋朝诡事",
      "药方杀人"
    ],
    "oneLine": "梁山神医安道全下山寻药，却卷入连环“药杀案”，每具尸体都对应一味毒药。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0671",
    "title": "德州女巫",
    "url": "./movie-0671.html",
    "cover": "./71.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2028",
    "genre": "恐怖，西部",
    "tags": [
      "女巫",
      "德州",
      "荒野",
      "诅咒"
    ],
    "oneLine": "1870年代的德州荒野，一个女人被指控为女巫，法官给了她两个选择：绞刑，或者用巫术帮全镇度过干旱。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0672",
    "title": "爱丽斯餐厅",
    "url": "./movie-0672.html",
    "cover": "./72.jpg",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情、奇幻、治愈",
    "tags": [
      "深夜食堂",
      "愿望菜单",
      "记忆料理"
    ],
    "oneLine": "在这家只有深夜才开门的餐厅里，每道菜都能让食客尝到一段被遗忘的真实记忆。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0673",
    "title": "铁血战士：狩猎追击",
    "url": "./movie-0673.html",
    "cover": "./73.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "动作 / 科幻 / 恐怖",
    "tags": [
      "外星猎人",
      "丛林杀戮",
      "冷兵器对决",
      "女性战士"
    ],
    "oneLine": "300年前科曼奇部落女战士遭遇外星铁血战士，必须以传统冷兵器猎杀高科技猎人。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0674",
    "title": "永远十二岁第一季",
    "url": "./movie-0674.html",
    "cover": "./74.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "奇幻、剧情、悬疑",
    "tags": [
      "时间循环",
      "小岛谜团",
      "不老症候群",
      "青少年探险"
    ],
    "oneLine": "一个海边小镇的所有居民都停留在12岁那年的身体里，每过一年，就有一个孩子神秘消失。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0675",
    "title": "破胆三次4",
    "url": "./movie-0675.html",
    "cover": "./75.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 惊悚",
    "tags": [
      "狼人",
      "血浆片",
      "邪典",
      "续集",
      "变异"
    ],
    "oneLine": "实验性药物制造出了第四代狼人，它们不再惧怕月圆，而是随时可能在你身边变身。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0676",
    "title": "沿海到海岸",
    "url": "./movie-0676.html",
    "cover": "./76.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2021",
    "genre": "爱情， 剧情",
    "tags": [
      "公路",
      "青春",
      "治愈"
    ],
    "oneLine": "失聪少年阿生陪叛逆少女阿暖骑车环岛，从太平洋的风吹到台湾海峡的日落。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0677",
    "title": "哑姑",
    "url": "./movie-0677.html",
    "cover": "./77.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑, 恐怖",
    "tags": [
      "民俗",
      "还魂",
      "山村"
    ],
    "oneLine": "八十年代山村，一个不会说话的姑娘被全村人欺负，淹死后，村里开始出现会说话的纸人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0678",
    "title": "兵王",
    "url": "./movie-0678.html",
    "cover": "./78.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "军旅 / 动作 / 励志",
    "tags": [
      "特种兵",
      "训练",
      "兄弟情",
      "实战",
      "热血"
    ],
    "oneLine": "一名大学毕业生为了初恋的遗愿参军入伍，在魔鬼训练营中从菜鸟蜕变为一代“兵王”。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0679",
    "title": "欢迎来到车臣",
    "url": "./movie-0679.html",
    "cover": "./79.jpg",
    "region": "俄罗斯 / 德国",
    "type": "电影",
    "year": "2020",
    "genre": "纪录片 / 同性",
    "tags": [
      "LGBT",
      "迫害",
      "地下救援",
      "真实影像",
      "政治惊悚"
    ],
    "oneLine": "隐藏摄像头记录下了车臣针对同性恋者的“集中营”中，一群无畏的 activists 进行的生死营救。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0680",
    "title": "超人梅比斯外传 凶兽重生",
    "url": "./movie-0680.html",
    "cover": "./80.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 科幻 / 特摄",
    "tags": [
      "奥特曼",
      "怪兽",
      "复活",
      "羁绊",
      "燃向"
    ],
    "oneLine": "沉睡万年的凶兽格罗扎姆因人类的贪婪复活，梅比斯失去了光，却在地球防卫队里找到了新的武器。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0681",
    "title": "御天神兽",
    "url": "./movie-0681.html",
    "cover": "./81.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻, 动作, 冒险",
    "tags": [
      "上古神兽",
      "少年",
      "守护"
    ],
    "oneLine": "一个只会摸鱼的动物园饲养员，被一只貔貅告知：他是最后一位御天师，而动物园里关着的全是上古凶兽。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0682",
    "title": "男上女下",
    "url": "./movie-0682.html",
    "cover": "./82.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧 / 爱情 / 剧情",
    "tags": [
      "楼上下层",
      "声音误会",
      "社恐与社牛",
      "都市轻喜"
    ],
    "oneLine": "患有严重社交恐惧的男程序员和新搬来的楼下、吵死人的女健身博主，因为噪音问题成为死敌，却从没在现实中见过面。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0683",
    "title": "大公鲨入侵世界",
    "url": "./movie-0683.html",
    "cover": "./83.jpg",
    "region": "美国",
    "type": "Movie",
    "year": "1979",
    "genre": "科幻, 惊悚, 灾难",
    "tags": [
      "B级片",
      "变异鲨鱼",
      "政治讽刺"
    ],
    "oneLine": "一头因核废料变异成苏联潜艇大小的史前巨鲨，同时向美国和苏联的舰队发起了攻击。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0684",
    "title": "凶杀惊魂",
    "url": "./movie-0684.html",
    "cover": "./84.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1997",
    "genre": "恐怖, 悬疑",
    "tags": [
      "录像带",
      "邪教",
      "连环杀手",
      "90年代"
    ],
    "oneLine": "警探在废弃的录像店里发现一盘被诅咒的录像带，每次播放都会让观看者成为下一个凶杀案的主角。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0685",
    "title": "灼热的马鞍",
    "url": "./movie-0685.html",
    "cover": "./85.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1974",
    "genre": "喜剧, 西部",
    "tags": [
      "讽刺",
      "种族",
      "经典"
    ],
    "oneLine": "黑人被任命为西部小镇警长，镇上居民全是疯子，而他唯一的帮手是个醉汉。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0686",
    "title": "虎头钉虱",
    "url": "./movie-0686.html",
    "cover": "./86.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "genre": "悬疑 / 民俗 / 惊悚",
    "tags": [
      "乡野奇谈",
      "除煞",
      "仪式感",
      "心理恐惧"
    ],
    "oneLine": "偏远山村出现一种怪病：病人头顶长满钉状虱子，老道士说这是“虎头煞”，解法必须以命换命。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0687",
    "title": "不速之约国语",
    "url": "./movie-0687.html",
    "cover": "./87.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑 / 惊悚 / 都市",
    "tags": [
      "公寓惊魂",
      "语音留言",
      "时空错位",
      "国语配音"
    ],
    "oneLine": "男子收到一年前已故女友的语音预约：“今晚八点，老地方见。”",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0688",
    "title": "回带侦查",
    "url": "./movie-0688.html",
    "cover": "./88.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻、刑侦、悬疑",
    "tags": [
      "时间回溯",
      "录像带",
      "蝴蝶效应"
    ],
    "oneLine": "一名刑警发现一盘老式录像带，播放时能让时间倒退回录像拍摄的那一刻，但每次回溯都会改变现在。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0689",
    "title": "逆转擂台",
    "url": "./movie-0689.html",
    "cover": "./89.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "运动 / 喜剧",
    "tags": [
      "格斗",
      "穿越",
      "逆袭"
    ],
    "oneLine": "五十岁的过气拳王被一拳打回了二十岁，却发现年轻的身体里装着一个想打太极的灵魂。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0690",
    "title": "少女青春期",
    "url": "./movie-0690.html",
    "cover": "./90.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 青春 / 女性",
    "tags": [
      "校园",
      "月经贫困",
      "闺蜜"
    ],
    "oneLine": "四个高中女生为了帮同学买到一片卫生巾，意外撬开了一个关于校园性侵的黑箱。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0691",
    "title": "神迹",
    "url": "./movie-0691.html",
    "cover": "./91.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑、惊悚、宗教",
    "tags": [
      "圣迹",
      "造假",
      "梵蒂冈",
      "超自然调查"
    ],
    "oneLine": "梵蒂冈超自然调查员奉命核查一个小镇出现的“流泪圣母像”，却发现神迹正在杀死祈祷者。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0692",
    "title": "异世界迷宫黑心企业",
    "url": "./movie-0692.html",
    "cover": "./92.jpg",
    "region": "日本",
    "type": "剧集 / 动画",
    "year": "2025",
    "genre": "奇幻 / 搞笑 / 职场",
    "tags": [
      "异世界",
      "反套路",
      "社畜",
      "迷宫经营",
      "黑心企业"
    ],
    "oneLine": "一个被解雇的35岁黑心企业中层，穿越到异世界后，竟开了一家比原公司更黑的迷宫剥削公司。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0693",
    "title": "父亲和儿子的地下偶像",
    "url": "./movie-0693.html",
    "cover": "./93.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 音乐",
    "tags": [
      "父子",
      "偶像",
      "地下室",
      "和解"
    ],
    "oneLine": "一本正经的老爸被裁员后，发现儿子的地下偶像组合是在自家车库里练习的。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0694",
    "title": "命运九重奏",
    "url": "./movie-0694.html",
    "cover": "./94.jpg",
    "region": "日本",
    "type": "TV Series",
    "year": "2016",
    "genre": "动画 / 奇幻 / 爱情",
    "tags": [
      "穿越时空",
      "九位主角",
      "和风幻想",
      "音乐元素",
      "多线叙事"
    ],
    "oneLine": "九个背负着不同星座诅咒的年轻人，在一座漂浮于云端的古都里，必须通过演奏太古乐章来修正崩坏的时空。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0695",
    "title": "邦蒂号之后",
    "url": "./movie-0695.html",
    "cover": "./95.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "历史， 冒险",
    "tags": [
      "殖民反思",
      "孤岛求生",
      "人性试炼"
    ],
    "oneLine": "叛变之后，九名水手被放逐荒岛，他们不知道真正的噩梦才刚刚开始。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0696",
    "title": "社内相亲2023",
    "url": "./movie-0696.html",
    "cover": "./96.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2023",
    "genre": "喜剧、爱情、职场",
    "tags": [
      "替身相亲",
      "社死现场",
      "契约恋爱",
      "轻松搞笑"
    ],
    "oneLine": "女职员代替闺蜜去相亲，发现对象是自己公司的社长，更要命的是她穿着比基尼、还胡编了身份。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0697",
    "title": "盾之勇者成名录第一季",
    "url": "./movie-0697.html",
    "cover": "./97.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2019",
    "genre": "奇幻, 冒险, 战斗",
    "tags": [
      "异世界",
      "盾牌",
      "黑化",
      "养成",
      "复仇"
    ],
    "oneLine": "一个普通大学生被召唤到异世界当“盾之勇者”，却从第一天起就被全世界陷害、欺骗、追杀。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0698",
    "title": "最后单身派对",
    "url": "./movie-0698.html",
    "cover": "./98.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧/剧情",
    "tags": [
      "姐妹情",
      "婚前派对",
      "成长",
      "疯狂一夜"
    ],
    "oneLine": "五个大学闺蜜在拉斯维加斯举办告别单身派对，醒来却发现她们身边躺着一头老虎和一具尸体。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0699",
    "title": "凯洛的末日日常",
    "url": "./movie-0699.html",
    "cover": "./99.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "genre": "动画 / 科幻 / 喜剧",
    "tags": [
      "治愈系",
      "末日废土",
      "日常番",
      "反类型",
      "存在主义"
    ],
    "oneLine": "还有三个月小行星就要撞击地球，所有人都开始狂欢犯罪，社恐女孩凯洛却决定在这段时间考取一个图书馆管理资格证。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0700",
    "title": "结婚那件事",
    "url": "./movie-0700.html",
    "cover": "./100.jpg",
    "region": "新加坡",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧，家庭",
    "tags": [
      "备婚灾难",
      "婆媳过招",
      "红包大战"
    ],
    "oneLine": "婚礼前一天，新娘发现新郎的家族群名是“讨伐岳母联军”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0701",
    "title": "霍东阁",
    "url": "./movie-0701.html",
    "cover": "./101.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2026",
    "genre": "动作",
    "tags": [
      "民国",
      "武术",
      "精武门",
      "传奇"
    ],
    "oneLine": "霍元甲之子霍东阁隐姓埋名长大，直到精武门旧址出现一具神秘尸体。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0702",
    "title": "金牌监制",
    "url": "./movie-0702.html",
    "cover": "./102.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 职场 / 年代",
    "tags": [
      "TVB",
      "电视城",
      "权力斗争",
      "师徒恩怨"
    ],
    "oneLine": "回归TVB的金牌监制，欲重振港剧雄风，却发现自己一手捧红的小生要毁了他。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0703",
    "title": "临场剧场版",
    "url": "./movie-0703.html",
    "cover": "./103.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2012",
    "genre": "悬疑/犯罪",
    "tags": [
      "法医",
      "推理",
      "剧场版"
    ],
    "oneLine": "法医仓石义男在解剖一具无名尸时，发现死者指甲里嵌着一枚二十年前的订婚戒指。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0704",
    "title": "无情世家",
    "url": "./movie-0704.html",
    "cover": "./104.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 悬疑 / 年代",
    "tags": [
      "财阀",
      "复仇",
      "家族秘史",
      "宿命",
      "反转"
    ],
    "oneLine": "财阀家最不受宠的私生女，在父亲葬礼当天被要求嫁给仇人之子，婚礼前一晚她放火烧了祖宅。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0705",
    "title": "浪击天涯",
    "url": "./movie-0705.html",
    "cover": "./105.jpg",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2006",
    "genre": "剧情 / 爱情 / 家庭",
    "tags": [
      "八点档",
      "豪门恩怨",
      "兄弟反目",
      "海滩"
    ],
    "oneLine": "一对失散多年的兄弟，因爱上一个女孩而反目，最终在海啸中完成救赎。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0706",
    "title": "另一部同志电影",
    "url": "./movie-0706.html",
    "cover": "./106.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "剧情，爱情，家庭",
    "tags": [
      "同志",
      "亲情",
      "回乡",
      "年夜饭",
      "和解"
    ],
    "oneLine": "跨性别者带着男友回老家过年，却发现八十岁的爷爷年轻时也是跨性别者，只是藏了一辈子。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0707",
    "title": "决一死战",
    "url": "./movie-0707.html",
    "cover": "./107.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 战争 / 惊悚",
    "tags": [
      "生死对决",
      "边境突围",
      "兄弟反目",
      "密令追杀"
    ],
    "oneLine": "一场被迫提前引爆的边境冲突，把两个曾并肩作战的旧友推上绝境，谁先拔枪谁就可能失去最后的人性。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0708",
    "title": "法比安",
    "url": "./movie-0708.html",
    "cover": "./108.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 历史",
    "tags": [
      "魏玛",
      "文学",
      "悲剧",
      "欧洲"
    ],
    "oneLine": "1931年的柏林，道德沦丧、经济崩溃，博士毕业的法比安找不到工作，只能靠兼职广告写手苟活，在纸醉金迷中守望着最后的良知。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0709",
    "title": "最后的维加斯",
    "url": "./movie-0709.html",
    "cover": "./109.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2013",
    "genre": "喜剧 / 剧情",
    "tags": [
      "老年帮",
      "拉斯维加斯",
      "活明白了",
      "兄弟情"
    ],
    "oneLine": "四个年过七旬的老头决定去拉斯维加斯为老友办一场葬礼，结果办成了全城最疯狂的单身派对。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0710",
    "title": "火车大劫案",
    "url": "./movie-0710.html",
    "cover": "./110.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2018",
    "genre": "犯罪、悬疑、西部",
    "tags": [
      "蒸汽朋克",
      "烧脑反转",
      "密室盗窃"
    ],
    "oneLine": "一辆号称永不破防的皇家装甲列车上，三名互不相识的怪盗发现他们都冲着同一块宝石而来。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0711",
    "title": "道歉",
    "url": "./movie-0711.html",
    "cover": "./111.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "剧情家庭",
    "tags": [
      "亲情",
      "和解",
      "临终",
      "北漂"
    ],
    "oneLine": "一个癌症晚期的父亲，唯一的愿望是听在北京当律师的儿子说一句“我错了”。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0712",
    "title": "复仇：爱的故事",
    "url": "./movie-0712.html",
    "cover": "./112.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪, 惊悚, 剧情",
    "tags": [
      "复仇",
      "父权",
      "暴力美学",
      "司法不公",
      "以暴制暴"
    ],
    "oneLine": "女儿被富二代侵犯后轻生，法官却当庭释放凶手，绝望的父亲决定亲自执行正义。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0713",
    "title": "孤单的豌豆",
    "url": "./movie-0713.html",
    "cover": "./113.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 家庭",
    "tags": [
      "自闭症",
      "兄妹",
      "孤独",
      "治愈"
    ],
    "oneLine": "患有重度自闭症的男孩只吃绿色豌豆，为了让他尝一口新食物，姐姐用十年时间发明了一千种“伪装豌豆”。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0714",
    "title": "道熙啊",
    "url": "./movie-0714.html",
    "cover": "./114.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2014",
    "genre": "剧情 / 同性",
    "tags": [
      "女警",
      "家暴",
      "救赎",
      "复杂人性"
    ],
    "oneLine": "被流放到海边小镇的女警收留了遭家暴的少女道熙，但这份依赖背后，藏着少女深不见底的秘密。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0715",
    "title": "碟中谍4:幽灵协议",
    "url": "./movie-0715.html",
    "cover": "./115.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2011",
    "genre": "动作 / 惊悚 / 冒险",
    "tags": [
      "特工",
      "攀爬迪拜塔",
      "核弹危机",
      "孤军奋战"
    ],
    "oneLine": "伊桑小队被政府抛弃后，只能用“幽灵协议”孤军阻止全球核战争。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0716",
    "title": "未来是一个孤独的地方",
    "url": "./movie-0716.html",
    "cover": "./116.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2023",
    "genre": "科幻, 剧情",
    "tags": [
      "人工智能",
      "情感陪伴",
      "伦理"
    ],
    "oneLine": "在未来，被判终身监禁的犯人可以申请“意识投影”服务，把AI家人投放到狱中陪伴自己。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0717",
    "title": "失踪时刻",
    "url": "./movie-0717.html",
    "cover": "./117.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2007",
    "genre": "剧情, 悬疑, 家庭",
    "tags": [
      "儿童失踪",
      "心理创伤",
      "家庭关系"
    ],
    "oneLine": "三岁儿子在超市失踪后，一对夫妻发现彼此的记忆出现了致命偏差。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0718",
    "title": "宇崎酱想要玩耍",
    "url": "./movie-0718.html",
    "cover": "./118.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2022",
    "genre": "喜剧、爱情、日常",
    "tags": [
      "年下",
      "大学",
      "吵闹情侣",
      "治愈"
    ],
    "oneLine": "爱闹腾的学妹天天缠着孤僻学长，以“陪他玩”为借口展开倒追攻势。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0719",
    "title": "白猩猩历险记",
    "url": "./movie-0719.html",
    "cover": "./119.jpg",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2018",
    "genre": "动画, 冒险, 家庭",
    "tags": [
      "动物",
      "环保",
      "成长",
      "友谊"
    ],
    "oneLine": "因白化病被族群驱逐的小猩猩，和一只话痨鹦鹉组队，寻找传说中的月光瀑布。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0720",
    "title": "后庭花",
    "url": "./movie-0720.html",
    "cover": "./120.jpg",
    "region": "中国内地",
    "type": "电影",
    "year": "2024",
    "genre": "古装 / 悬疑 / 恐怖",
    "tags": [
      "戏曲",
      "密室",
      "民国",
      "奇情"
    ],
    "oneLine": "民国戏班在荒野义庄唱《后庭花》续命，每唱一段，台下尸体就少一具。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0721",
    "title": "吉普赛传说",
    "url": "./movie-0721.html",
    "cover": "./121.jpg",
    "region": "西班牙",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻 / 悬疑 / 冒险",
    "tags": [
      "塔罗牌",
      "诅咒",
      "家族秘史",
      "公路"
    ],
    "oneLine": "吉普赛少女翻开祖母的塔罗牌，牌面上的预言开始在她的族人身上逐一死亡式应验。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0722",
    "title": "假面骑士时王",
    "url": "./movie-0722.html",
    "cover": "./122.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "特摄、科幻、动作",
    "tags": [
      "平成骑士",
      "时间王者",
      "平行前辈",
      "变身手表",
      "命运改写"
    ],
    "oneLine": "当所有假面骑士的历史被一只神秘手表吞噬，一名高中生必须成为“时王”，与历代骑士的平行体并肩作战。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0723",
    "title": "马里布高中",
    "url": "./movie-0723.html",
    "cover": "./123.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "喜剧，青春，校园",
    "tags": [
      "富二代高中",
      "卧底记者",
      "阶层差异",
      "网络爆红"
    ],
    "oneLine": "穷学生靠奖学金混进全美最富高中，本想卧底写爆料，结果被富二代们的奇葩烦恼整破防了。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0724",
    "title": "血伞凶灵",
    "url": "./movie-0724.html",
    "cover": "./124.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "民俗恐怖",
      "红衣女鬼",
      "诅咒物品",
      "民国凶案"
    ],
    "oneLine": "民国老宅里藏着一把红油纸伞，每个在伞下躲过雨的人，七天后都会以同样的方式溺亡。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0725",
    "title": "加西亚非凡的旅行",
    "url": "./movie-0725.html",
    "cover": "./125.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2021",
    "genre": "奇幻 / 冒险",
    "tags": [
      "时间循环",
      "公路",
      "成长"
    ],
    "oneLine": "七岁男孩加西亚每天醒来都在不同国家，为了回家，他必须教会全世界的陌生人如何说“再见”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0726",
    "title": "正直好人",
    "url": "./movie-0726.html",
    "cover": "./126.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情 / 社会 / 伦理",
    "tags": [
      "反腐",
      "记者",
      "良心",
      "困境"
    ],
    "oneLine": "县台小记者追查污染案，却发现最大保护伞是自己病重的恩师。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0727",
    "title": "傻钱",
    "url": "./movie-0727.html",
    "cover": "./127.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 传记, 喜剧",
    "tags": [
      "股市",
      "散户",
      "真实事件"
    ],
    "oneLine": "游戏驿站股价被散户推高，华尔街对冲基金一夜亏光，这场散户大战源于一个论坛帖。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0728",
    "title": "我童年的天空",
    "url": "./movie-0728.html",
    "cover": "./128.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "1988",
    "genre": "剧情 / 儿童",
    "tags": [
      "童年",
      "文革",
      "第三代导演"
    ],
    "oneLine": "70年代初，一个8岁男孩在西南小镇的“天空”下，用幻想对抗荒诞年代的真实故事。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0729",
    "title": "瀛台泣血",
    "url": "./movie-0729.html",
    "cover": "./129.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "历史 / 古装",
    "tags": [
      "光绪",
      "戊戌变法",
      "宫廷斗争",
      "悲剧"
    ],
    "oneLine": "甲午战败后，被困瀛台的光绪帝在生命的最后十年，如何试图挣脱慈禧的枷锁。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0730",
    "title": "八二三砲战",
    "url": "./movie-0730.html",
    "cover": "./130.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2026",
    "genre": "历史，战争",
    "tags": [
      "台海",
      "金门",
      "写实",
      "热血"
    ],
    "oneLine": "1958年“八二三砲战”中，金门岛上三个互不相识的普通人，在同一场炮火中完成了各自的成人礼。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0731",
    "title": "啦啦队的反击",
    "url": "./movie-0731.html",
    "cover": "./131.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "genre": "喜剧 / 运动",
    "tags": [
      "女力觉醒",
      "校园逆袭",
      "爽快复仇",
      "热舞竞技"
    ],
    "oneLine": "被精英啦啦队开除后，一群“怪咖”女生组建了一支史上最“不齐”的啦啦队，向冠军发起冲击。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0732",
    "title": "亲兄弟",
    "url": "./movie-0732.html",
    "cover": "./132.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪, 剧情",
    "tags": [
      "兄弟情",
      "替罪",
      "底层生存"
    ],
    "oneLine": "弟弟顶替哥哥坐了八年牢，出狱后发现哥哥成了当年他最恨的那种人。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0733",
    "title": "金叶行动",
    "url": "./movie-0733.html",
    "cover": "./133.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪, 动作",
    "tags": [
      "缉毒",
      "卧底",
      "东南亚",
      "金三角",
      "反诈"
    ],
    "oneLine": "一枚藏在普洱茶饼里的金叶芯片，让卧底警察与被迫运毒的女孩在湄公河上展开亡命时速。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0734",
    "title": "摩登原始人：圣诞礼赞",
    "url": "./movie-0734.html",
    "cover": "./134.jpg",
    "region": "美国",
    "type": "电影 / 动画",
    "year": "2020",
    "genre": "喜剧 / 动画 / 家庭",
    "tags": [
      "圣诞",
      "石器时代",
      "穿越",
      "节日"
    ],
    "oneLine": "摩登原始人一家在圣诞夜意外被传送到未来纽约，必须用石器时代的方式拯救被黑掉的圣诞节。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0735",
    "title": "俗女养成记2闽南语版",
    "url": "./movie-0735.html",
    "cover": "./135.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 喜剧",
    "tags": [
      "方言版",
      "女性成长",
      "返乡"
    ],
    "oneLine": "40岁未婚的嘉玲回到台南老家，和妈妈、阿嬷三代女人在同一屋檐下吵吵闹闹地“重启人生”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0736",
    "title": "初入职场的我们",
    "url": "./movie-0736.html",
    "cover": "./136.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情， 青春",
    "tags": [
      "实习",
      "理想与现实",
      "友谊"
    ],
    "oneLine": "四个应届生进入一家老牌广告公司，第一天就被扔进一个不可能完成的项目。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0737",
    "title": "年鉴计划",
    "url": "./movie-0737.html",
    "cover": "./137.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "科幻悬疑 / 青春成长",
    "tags": [
      "时间循环",
      "校园秘密",
      "记忆篡改",
      "同伴救赎",
      "反转真相"
    ],
    "oneLine": "一群即将毕业的学生在校刊年鉴里发现自己的照片会提前一周变动，随后整座学校的命运也开始被一页页“改写”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0738",
    "title": "死了都要美",
    "url": "./movie-0738.html",
    "cover": "./138.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2027",
    "genre": "喜剧",
    "tags": [
      "葬礼",
      "整容",
      "黑色幽默",
      "网红",
      "直播"
    ],
    "oneLine": "一个整容上瘾的网红死后，她的三个塑料闺蜜为了争夺遗容化妆权，在灵堂开了一场直播大乱斗。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0739",
    "title": "参孙和达丽拉",
    "url": "./movie-0739.html",
    "cover": "./139.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "历史, 爱情",
    "tags": [
      "圣经改编",
      "悲剧英雄",
      "致命女人",
      "史诗"
    ],
    "oneLine": "大力士参孙被达丽拉出卖后沦为阶下囚，而达丽拉的真实身份竟是敌方派来的最高级间谍。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0740",
    "title": "隐秘女人心",
    "url": "./movie-0740.html",
    "cover": "./140.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情，悬疑，惊悚",
    "tags": [
      "女性复仇",
      "精神分析",
      "多重人格",
      "家庭秘密",
      "豪宅悬案"
    ],
    "oneLine": "患有解离性身份障碍的清洁女工，在被雇去打扫一座闹鬼庄园时，发现自己其中一个人格曾是这家失踪的女儿。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0741",
    "title": "维罗提卡",
    "url": "./movie-0741.html",
    "cover": "./141.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2022",
    "genre": "恐怖, 惊悚",
    "tags": [
      "通灵板",
      "真实事件改编",
      "厄运"
    ],
    "oneLine": "一个女孩在毕业派对上玩通灵板后，发现自己每天的死亡时间提前了 24 小时。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0742",
    "title": "恋风",
    "url": "./movie-0742.html",
    "cover": "./142.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2023",
    "genre": "爱情，文艺",
    "tags": [
      "四叠半",
      "怀旧",
      "错过",
      "夏日",
      "散文诗"
    ],
    "oneLine": "三十岁的录像带店店员，通过一盒旧磁带，与二十年前少年时代的自己开始了跨时空通信。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0743",
    "title": "塞尔玛与路易丝",
    "url": "./movie-0743.html",
    "cover": "./143.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1991",
    "genre": "剧情, 犯罪, 冒险",
    "tags": [
      "公路电影",
      "女性主义",
      "绝命逃亡",
      "经典结尾"
    ],
    "oneLine": "一次周末旅行变成逃亡之路，两位女性向整个父权社会踩下了油门。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0744",
    "title": "人生未来完成式",
    "url": "./movie-0744.html",
    "cover": "./144.jpg",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 科幻",
    "tags": [
      "时间语法",
      "语言决定思维",
      "文艺科幻",
      "回忆与预演"
    ],
    "oneLine": "语言学家发明了一种“未来完成式”动词变位——说它的人会提前活一遍自己的未来。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0745",
    "title": "当爱再来的时候",
    "url": "./movie-0745.html",
    "cover": "./145.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2015",
    "genre": "爱情 / 剧情",
    "tags": [
      "失忆",
      "姐弟恋",
      "虐恋",
      "重逢",
      "人生重启"
    ],
    "oneLine": "一场车祸让年轻画家忘记了所有人，只记得十年前抛弃他的初恋男友，而那个男人如今已经娶妻生子。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0746",
    "title": "一吻定江山",
    "url": "./movie-0746.html",
    "cover": "./146.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情, 喜剧, 奇幻",
    "tags": [
      "穿越",
      "校园",
      "初吻",
      "高甜",
      "双向暗恋"
    ],
    "oneLine": "28岁的母胎单身女强人意外穿越回高三，发现只要夺回当年那个未完成的“初吻”，就能改写未来。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0747",
    "title": "迷你世界",
    "url": "./movie-0747.html",
    "cover": "./147.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "奇幻、悬疑、冒险",
    "tags": [
      "缩微",
      "平行空间",
      "童年阴影",
      "模型",
      "解谜"
    ],
    "oneLine": "一个模型爱好者发现自己做的缩微场景里，有人在对她求救。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0748",
    "title": "飞向天空，救援之翼",
    "url": "./movie-0748.html",
    "cover": "./148.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2008",
    "genre": "动作 / 剧情 / 灾难",
    "tags": [
      "航空救援",
      "消防飞机",
      "成长"
    ],
    "oneLine": "一个恐高的新人飞行员，被分配到航空消防队，必须在山火中克服恐惧。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0749",
    "title": "原始狂暴：大脚怪传奇",
    "url": "./movie-0749.html",
    "cover": "./149.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "恐怖 / 惊悚 / 冒险",
    "tags": [
      "丛林怪物",
      "血腥追杀",
      "伪纪录片风格",
      "生存恐怖"
    ],
    "oneLine": "一档荒野求生真人秀节目组进入原始森林，却激怒了守护圣地的巨型大脚怪。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0750",
    "title": "影 子",
    "url": "./movie-0750.html",
    "cover": "./150.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "genre": "悬疑、犯罪",
    "tags": [
      "替身",
      "失忆",
      "城市黑暗面",
      "多层反转"
    ],
    "oneLine": "一名失忆男子醒来后发现所有人都叫他“影子”，而他必须找到正主才能知道自己是人还是鬼。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0751",
    "title": "出租车",
    "url": "./movie-0751.html",
    "cover": "./1.jpg",
    "region": "韩国",
    "type": "Movie",
    "year": "2022",
    "genre": "剧情 / 悬疑",
    "tags": [
      "夜间限定",
      "出租车怪谈",
      "乘客皆亡魂",
      "救赎轮回",
      "釜山夜景"
    ],
    "oneLine": "夜间出租车司机发现，每晚零点后上车的乘客全是死人。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0752",
    "title": "处决斯洛维克",
    "url": "./movie-0752.html",
    "cover": "./2.jpg",
    "region": "美国 / 波兰",
    "type": "电影",
    "year": "2024",
    "genre": "战争 / 历史 / 传记",
    "tags": [
      "二战",
      "逃兵",
      "道德困境"
    ],
    "oneLine": "二战美军唯一因逃兵罪被处决的士兵斯洛维克，行刑前最后一夜，他与行刑队士兵交换了彼此的一生。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0753",
    "title": "午夜过后",
    "url": "./movie-0753.html",
    "cover": "./3.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖， 惊悚",
    "tags": [
      "公寓楼",
      "怪谈",
      "密室"
    ],
    "oneLine": "在这栋老式公寓里，只要午夜后照镜子，就会看到自己死亡的方式。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0754",
    "title": "花滑女王2：爸爸我爱你",
    "url": "./movie-0754.html",
    "cover": "./4.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "genre": "运动, 剧情",
    "tags": [
      "父女情深",
      "花滑",
      "逆境重生"
    ],
    "oneLine": "天才少女因伤退役，曾是冰球运动员的父亲为她搭建后院冰场，陪她冲击全国选拔赛。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0755",
    "title": "最佳好友",
    "url": "./movie-0755.html",
    "cover": "./5.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": [
      "克隆",
      "友谊",
      "身份认同",
      "伦理",
      "暖泪"
    ],
    "oneLine": "为了不让自闭症儿子崩溃，一位父亲克隆了儿子唯一的好友，却克隆出两个一模一样的男孩。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0756",
    "title": "美丽腥世界",
    "url": "./movie-0756.html",
    "cover": "./6.jpg",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 惊悚",
    "tags": [
      "反乌托邦",
      "基因",
      "道德困境"
    ],
    "oneLine": "在一个通过“气味”划分阶级的未来，拥有完美体香的底层少女成了权贵的猎物。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0757",
    "title": "匿名情书",
    "url": "./movie-0757.html",
    "cover": "./7.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "爱情悬疑",
    "tags": [
      "纯爱",
      "替代品",
      "身份错位",
      "治愈"
    ],
    "oneLine": "一封被误投的情书，连接了两个毫无交集的人，当他们终于找到对方时，却发现彼此都只是“替身”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0758",
    "title": "荒岭录像",
    "url": "./movie-0758.html",
    "cover": "./8.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "恐怖",
    "tags": [
      "伪纪录片",
      "户外探险",
      "失踪案",
      "悬疑",
      "found footage"
    ],
    "oneLine": "三名驴友在 Appalachian 山脉失踪，警方找到的摄像机记录了他们在山上最后的疯狂。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0759",
    "title": "高兹一家的黎明",
    "url": "./movie-0759.html",
    "cover": "./9.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 历史",
    "tags": [
      "二战",
      "家庭",
      "逃亡"
    ],
    "oneLine": "1945年冬，一个德国中产家庭在红军逼近前，踏上了一场横穿半个国家的绝望逃亡。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0760",
    "title": "欲望都市第六季",
    "url": "./movie-0760.html",
    "cover": "./10.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情 / 剧情 / 喜剧",
    "tags": [
      "经典重启",
      "中年女性",
      "友情岁月",
      "纽约故事"
    ],
    "oneLine": "二十年后，凯莉、米兰达和夏洛特再次回到纽约，而这次，她们要面对的不是爱情，而是衰老。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0761",
    "title": "异形帝国2：拦截时光隧道",
    "url": "./movie-0761.html",
    "cover": "./11.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻, 动作, 惊悚",
    "tags": [
      "异形",
      "时光隧道",
      "太空殖民",
      "硬核科幻"
    ],
    "oneLine": "当异形族群进化出穿越时间的能力，一支人类小队必须回到第一场接触战去改写灭绝的宿命。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0762",
    "title": "阿帕卢萨马",
    "url": "./movie-0762.html",
    "cover": "./12.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "西部 / 剧情",
    "tags": [
      "牛仔精神",
      "老年忏悔",
      "风景叙事"
    ],
    "oneLine": "一个身患绝症的老牛仔带着他最后一匹阿帕卢萨马，进行一场没有归途的告别之旅。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0763",
    "title": "死亡转账",
    "url": "./movie-0763.html",
    "cover": "./13.jpg",
    "region": "中国香港 / 新加坡",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪惊悚科技",
    "tags": [
      "暗网",
      "比特币",
      "直播杀人",
      "金融"
    ],
    "oneLine": "你手机收到一条消息：“转账100万到这个账户，否则下一个死的就是你。”",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0764",
    "title": "一个人和他的猪",
    "url": "./movie-0764.html",
    "cover": "./14.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 荒诞 / 社会",
    "tags": [
      "孤独",
      "异类",
      "黑色幽默",
      "人畜情"
    ],
    "oneLine": "一个孤僻的农场主，和他相依为命的母猪被镇上的人视为耻辱，直到一场猪瘟来临，所有人都开始打它的主意。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0765",
    "title": "我把忠诚献给你",
    "url": "./movie-0765.html",
    "cover": "./15.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2019",
    "genre": "年代谍战",
    "tags": [
      "卧底",
      "兄弟情",
      "信仰",
      "虐心"
    ],
    "oneLine": "抗战时期，两个异姓兄弟分属国共阵营，相互隐瞒又相互试探，最终用生命兑现了各自的“忠诚”。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0766",
    "title": "情敌蜜月",
    "url": "./movie-0766.html",
    "cover": "./16.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2015",
    "genre": "喜剧, 爱情",
    "tags": [
      "前任婚礼",
      "假情侣",
      "海岛",
      "冤家",
      "日久生情"
    ],
    "oneLine": "前任邀请她当伴娘，她一气之下雇了婚礼策划师假扮新郎去“砸场子”。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0767",
    "title": "失控游戏夜",
    "url": "./movie-0767.html",
    "cover": "./17.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚，悬疑，动作",
    "tags": [
      "密室",
      "大逃杀",
      "桌上游戏",
      "残酷游戏"
    ],
    "oneLine": "五个朋友按照神秘邀请函来到古堡玩桌上游戏，却发现自己真的进入了游戏，每输一局就会死一个人。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0768",
    "title": "天机十二宫第一季",
    "url": "./movie-0768.html",
    "cover": "./18.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 古装 / 探案",
    "tags": [
      "宋朝背景",
      "推理破案",
      "十二星座",
      "天文学"
    ],
    "oneLine": "北宋年间，连续杀人案的现场都会出现一个星座图案，而下一个星座对应的，是皇帝。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0769",
    "title": "迎雨咆哮",
    "url": "./movie-0769.html",
    "cover": "./19.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2019",
    "genre": "动作 / 犯罪 / 黑色电影",
    "tags": [
      "暴雨追车",
      "码头走私",
      "警匪对峙",
      "兄弟反目",
      "夜色霓虹",
      "情绪爆发"
    ],
    "oneLine": "台风登陆前的最后八小时，码头区所有人都在等雨，而一个被追杀的男人却偏要迎着暴雨把真相吼出来。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0770",
    "title": "犬之力",
    "url": "./movie-0770.html",
    "cover": "./20.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 西部 / 同性",
    "tags": [
      "牧场",
      "兄弟",
      "压抑",
      "心理博弈",
      "悲剧"
    ],
    "oneLine": "当暴躁的牧场主试图摧毁懦弱的弟媳母子，却被看似柔弱的少年反噬灵魂。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0771",
    "title": "叠影惊情",
    "url": "./movie-0771.html",
    "cover": "./21.jpg",
    "region": "香港",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑, 惊悚",
    "tags": [
      "双胞胎",
      "身份置换",
      "心理博弈"
    ],
    "oneLine": "失踪三年的姐姐突然归来，妹妹却发现她的指纹、伤疤甚至眼神都与记忆中不同。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0772",
    "title": "警察智斗外星人",
    "url": "./movie-0772.html",
    "cover": "./22.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 科幻",
    "tags": [
      "荒诞",
      "法式幽默",
      "外星入侵",
      "小镇警察"
    ],
    "oneLine": "法国乡下小镇警局接到报警：外星人伪装成奶牛偷走了全村的奶酪，警长决定用抓小偷的方法抓外星人。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0773",
    "title": "5150榆树街",
    "url": "./movie-0773.html",
    "cover": "./23.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 惊悚 / 悬疑",
    "tags": [
      "失踪案",
      "诡异街区",
      "童年阴影",
      "心理压迫",
      "都市传说",
      "连环反转"
    ],
    "oneLine": "一条看似普通的榆树街，连续三晚响起同一个求救电话，接起的人却都会在镜子里看见“另一个自己”。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0774",
    "title": "青夏 与你相恋的30天",
    "url": "./movie-0774.html",
    "cover": "./24.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "爱情",
    "tags": [
      "夏日",
      "限定恋爱",
      "青春伤痛",
      "记忆丧失"
    ],
    "oneLine": "她在夏季限定的30天记忆里，每一天都会忘记他，却每一天都重新爱上他。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0775",
    "title": "点心",
    "url": "./movie-0775.html",
    "cover": "./25.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 家庭",
    "tags": [
      "美食",
      "亲情",
      "传承",
      "港味"
    ],
    "oneLine": "茶餐厅老师傅患上阿兹海默症，他忘记了一切，唯独记得每一笼点心的配方和女儿的口味。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0776",
    "title": "十万吨情缘粤语",
    "url": "./movie-0776.html",
    "cover": "./26.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2003",
    "genre": "爱情，喜剧",
    "tags": [
      "邮轮",
      "欢喜冤家",
      "失忆",
      "粤语原声",
      "轻喜剧"
    ],
    "oneLine": "一对在邮轮上互生好感的冤家，因一场意外分别失忆，醒来后却要在现实中找回十万吨级别的缘分。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0777",
    "title": "幽游白书：冥界决斗篇",
    "url": "./movie-0777.html",
    "cover": "./27.jpg",
    "region": "日本",
    "type": "动画电影",
    "year": "2025",
    "genre": "热血/奇幻",
    "tags": [
      "幽游白书",
      "剧场版",
      "冥界",
      "灵界侦探",
      "情怀"
    ],
    "oneLine": "冥界出现反叛势力，幽助必须唤醒已消失的雷禅，与飞影、藏马进行最后一场灵界大赛。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0778",
    "title": "铁胆神枪",
    "url": "./movie-0778.html",
    "cover": "./28.jpg",
    "region": "香港",
    "type": "电影",
    "year": "1996",
    "genre": "动作, 犯罪",
    "tags": [
      "枪战",
      "江湖",
      "复仇"
    ],
    "oneLine": "庙街最讲义气的混混被出卖后重生，左手持枪，右手握香，只为讨回一个公道。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0779",
    "title": "妈咪先生",
    "url": "./movie-0779.html",
    "cover": "./29.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1989",
    "genre": "喜剧, 家庭",
    "tags": [
      "港产片",
      "反串",
      "温馨",
      "搞笑"
    ],
    "oneLine": "黑道大哥为躲避追杀，不得不男扮女装应聘成为仇家孩子的保姆，却学会了温柔。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0780",
    "title": "天皇",
    "url": "./movie-0780.html",
    "cover": "./30.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2012",
    "genre": "历史 / 传记 / 政治",
    "tags": [
      "皇室",
      "战后",
      "继位",
      "权力博弈",
      "秘密文件",
      "时代裂变"
    ],
    "oneLine": "当一份足以改写王朝名誉的密档浮出水面，新任天皇必须在国家稳定与家族真相之间作出选择。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0781",
    "title": "僵尸归来",
    "url": "./movie-0781.html",
    "cover": "./31.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2027",
    "genre": "恐怖, 喜剧, 动作",
    "tags": [
      "茅山",
      "怀旧",
      "师徒",
      "港味"
    ],
    "oneLine": "林正英的徒孙在2027年重开义庄，却发现现代社会的社畜死后全部变成了“打工僵尸”。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0782",
    "title": "麻醉风暴2",
    "url": "./movie-0782.html",
    "cover": "./32.jpg",
    "region": "台湾",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情, 悬疑, 医疗",
    "tags": [
      "医疗黑幕",
      "权力斗争",
      "心理创伤"
    ],
    "oneLine": "一场失败的麻醉手术背后，竟牵扯出医院高层与药厂之间长达十年的秘密交易。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0783",
    "title": "返乡者",
    "url": "./movie-0783.html",
    "cover": "./33.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 文艺",
    "tags": [
      "故乡",
      "失踪",
      "记忆",
      "小镇",
      "身份迷局"
    ],
    "oneLine": "离乡二十年的男人回到村庄，却发现所有人都记得他从未离开过。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0784",
    "title": "危机边缘第四季",
    "url": "./movie-0784.html",
    "cover": "./34.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2011",
    "genre": "科幻 / 悬疑",
    "tags": [
      "平行宇宙",
      "FBI",
      "边缘科学",
      "科幻",
      "悬疑"
    ],
    "oneLine": "彼得从时间线上被抹去，两个宇宙的边界开始同时崩塌。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0785",
    "title": "绞刑台2",
    "url": "./movie-0785.html",
    "cover": "./35.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "密室",
      "血腥",
      "反转"
    ],
    "oneLine": "第一部幸存者以为逃出生天，却发现所谓的“被救”只是第二场游戏的开始，观众才是真正的玩家。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0786",
    "title": "嫂子·嫂子",
    "url": "./movie-0786.html",
    "cover": "./36.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "剧情， 年代",
    "tags": [
      "女性史诗",
      "宅斗",
      "乱世",
      "坚韧"
    ],
    "oneLine": "夫家惨遭灭门，柔弱的大嫂带着五个弟妹，在民国乱世中扛起整个家族。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0787",
    "title": "休伊·朗",
    "url": "./movie-0787.html",
    "cover": "./37.jpg",
    "region": "美国",
    "type": "犯罪剧情片",
    "year": "2017",
    "genre": "剧情, 犯罪, 悬疑, 传记",
    "tags": [
      "退役飞行员",
      "真相追索",
      "司法阴影",
      "航空记录",
      "记者调查"
    ],
    "oneLine": "传闻中枪杀前妻的退役飞行员休伊·朗每夜巡航都会回听旧录音；当警徽符号从头条上消失，他才发现自己早已被写进更大的阴谋里。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0788",
    "title": "今人不见古时玥",
    "url": "./movie-0788.html",
    "cover": "./38.jpg",
    "region": "中国内地",
    "type": "电视剧 / 网剧",
    "year": "2024",
    "genre": "古装、奇幻",
    "tags": [
      "穿越",
      "博物馆",
      "文物"
    ],
    "oneLine": "博物馆实习生意外通过一面铜镜穿越回汉代，却发现历史书上的大英雄竟是个草包。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0789",
    "title": "名侦探柯南:百万美元的五棱星",
    "url": "./movie-0789.html",
    "cover": "./39.jpg",
    "region": "日本",
    "type": "推理动画电影",
    "year": "2026",
    "genre": "动作, 悬疑推理, 犯罪, 犯罪惊悚",
    "tags": [
      "经典反转",
      "国际追凶",
      "密室谋杀",
      "五边形符号",
      "跨国洗钱"
    ],
    "oneLine": "百万美元谜题看似只关乎一笔黑钱，柯南发现五棱星其实是国际债务链的密码，恋战与追击在港口天台同框。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0790",
    "title": "36题爱上你",
    "url": "./movie-0790.html",
    "cover": "./40.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2020",
    "genre": "爱情, 剧情",
    "tags": [
      "心理学实验",
      "契约情侣",
      "都市"
    ],
    "oneLine": "两对陌生男女参加“36个问题”心理学实验，声称能让任何人相爱，结果却玩火自焚。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0791",
    "title": "绝对零度2020",
    "url": "./movie-0791.html",
    "cover": "./41.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2020",
    "genre": "犯罪, 刑侦, 剧情",
    "tags": [
      "未解决案件",
      "女警",
      "冷案搜查",
      "团队合作"
    ],
    "oneLine": "警视厅“冷案搜查组”用最新技术重新调查尘封多年的案件，却发现第一个案子就与自己人有关。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0792",
    "title": "魔龙传奇3：巫师的诅咒",
    "url": "./movie-0792.html",
    "cover": "./42.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2008",
    "genre": "奇幻",
    "tags": [
      "龙",
      "魔法",
      "冒险"
    ],
    "oneLine": "最后一个屠龙勇士的后裔，必须唤醒沉睡的魔龙来对抗失控的大巫师。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0793",
    "title": "新扎师妹2粤语",
    "url": "./movie-0793.html",
    "cover": "./43.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 动作",
    "tags": [
      "卧底",
      "乌龙警察",
      "粤语梗",
      "无厘头"
    ],
    "oneLine": "菜鸟女警再次卧底，这次的任务是混进黑帮大嫂的“贤妻良母培训班”。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0794",
    "title": "大麻修女",
    "url": "./movie-0794.html",
    "cover": "./44.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "喜剧, 剧情, 犯罪",
    "tags": [
      "修女",
      "大麻",
      "真实事件改编",
      "老年犯罪",
      "温情"
    ],
    "oneLine": "加州一群高龄修女为筹集孤儿院经费，秘密种植大麻并卖给医疗药房。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0795",
    "title": "一个刑讯者的下午",
    "url": "./movie-0795.html",
    "cover": "./45.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "genre": "剧情 / 历史",
    "tags": [
      "人性",
      "反思",
      "独白",
      "黑白"
    ],
    "oneLine": "特殊年代里，一个普通的审讯员在一天内，审问了三个人，也审问了自己。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0796",
    "title": "坏男人",
    "url": "./movie-0796.html",
    "cover": "./46.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2010",
    "genre": "爱情, 悬疑, 复仇",
    "tags": [
      "金南佶",
      "复仇",
      "财阀",
      "诱惑"
    ],
    "oneLine": "一个男人伪装成家教潜入害死姐姐的财阀家庭，却爱上了仇人的女儿。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0797",
    "title": "乌龙茬",
    "url": "./movie-0797.html",
    "cover": "./47.jpg",
    "region": "中国",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧悬疑",
    "tags": [
      "乡村",
      "破案",
      "误会",
      "草台班子",
      "幽默"
    ],
    "oneLine": "村里连续发生怪事，五个自称“名侦探”的闲汉各执一词，结果每次都抓错了人。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0798",
    "title": "逃劳三兄弟",
    "url": "./movie-0798.html",
    "cover": "./48.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "越狱",
      "兄弟",
      "乌龙",
      "公路",
      "黑色幽默"
    ],
    "oneLine": "三兄弟从劳动教养所挖地道逃跑，却挖错了方向，一头栽进了隔壁派出所的食堂。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0799",
    "title": "万家春",
    "url": "./movie-0799.html",
    "cover": "./49.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "剧情、家庭",
    "tags": [
      "年夜饭",
      "离散",
      "和解"
    ],
    "oneLine": "一个除夕夜，四散多年的家人在一张圆桌前拼凑出彼此缺席的十年。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0800",
    "title": "坚韧的刺刀！",
    "url": "./movie-0800.html",
    "cover": "./50.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "战争 / 动作 / 主旋律",
    "tags": [
      "抗美援朝",
      "狙击手",
      "小队作战",
      "雪原",
      "兄弟"
    ],
    "oneLine": "长津湖战役后，一支志愿军残部与美军精英狙击队在冰封山谷中展开最后的猎杀游戏。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0801",
    "title": "厨房之厨王争霸赛",
    "url": "./movie-0801.html",
    "cover": "./51.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "剧情，美食，动作",
    "tags": [
      "美食",
      "厨艺",
      "对决",
      "江湖",
      "复仇"
    ],
    "oneLine": "一个丧失味觉的传奇大厨，为了找回失踪的女儿，不得不参加一场会出人命的黑暗厨艺大赛。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0802",
    "title": "血腥剧场",
    "url": "./movie-0802.html",
    "cover": "./52.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖、惊悚",
    "tags": [
      "砍杀电影",
      "戏中戏",
      "剧院屠杀",
      "反转结局"
    ],
    "oneLine": "一家倒闭剧院重开首演夜，观众发现台上演员真的被一一杀害，而凶手就藏在观众席中。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0803",
    "title": "父与子",
    "url": "./movie-0803.html",
    "cover": "./53.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "剧情, 家庭, 运动",
    "tags": [
      "马拉松",
      "代沟",
      "和解"
    ],
    "oneLine": "一位是曾经的马拉松冠军父亲，一位是电竞少年儿子，他们必须在沙漠极限赛中交换身份才能活下去。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0804",
    "title": "伏虎铁鹰",
    "url": "./movie-0804.html",
    "cover": "./54.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "刑侦 / 动作",
    "tags": [
      "铁路警察",
      "连环案",
      "师徒传承"
    ],
    "oneLine": "即将退休的老铁警遇上模仿二十年前悬案的连环凶手，而新来的徒弟正是当年受害者的儿子。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0805",
    "title": "夜魔先生",
    "url": "./movie-0805.html",
    "cover": "./55.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "1989",
    "genre": "恐怖, 惊悚",
    "tags": [
      "都市怪谈",
      "连环杀手",
      "老电影"
    ],
    "oneLine": "每当午夜钟声响起，神秘的电台总播放着诡异的童谣，收听者会看到不存在于现实中的“夜魔”。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0806",
    "title": "失落之歌",
    "url": "./movie-0806.html",
    "cover": "./56.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2024",
    "genre": "奇幻、音乐、治愈",
    "tags": [
      "吟游诗人",
      "记忆",
      "诅咒",
      "世界系"
    ],
    "oneLine": "吟游诗人少女唱过的每一首歌都会从世界上消失，直到她遇见一个能记住所有旋律的无耳少年。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0807",
    "title": "我的明星村长",
    "url": "./movie-0807.html",
    "cover": "./57.jpg",
    "region": "中国大陆",
    "type": "短剧",
    "year": "2026",
    "genre": "喜剧",
    "tags": [
      "乡村振兴",
      "明星",
      "反差萌"
    ],
    "oneLine": "顶流偶像塌房后被下放到贫困村当“驻村第一书记”，他本想摆烂，却被村里的大爷大妈们逼成了种田文男主。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0808",
    "title": "武庚纪第一季",
    "url": "./movie-0808.html",
    "cover": "./58.jpg",
    "region": "中国大陆",
    "type": "动画",
    "year": "2016",
    "genre": "奇幻, 战斗, 神话",
    "tags": [
      "封神演义",
      "玄幻",
      "热血",
      "反抗命运"
    ],
    "oneLine": "纣王之子武庚从神之奴仆崛起，带领人族向奴役他们的众神发起复仇。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0809",
    "title": "胜赔人生",
    "url": "./movie-0809.html",
    "cover": "./59.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 黑色幽默",
    "tags": [
      "彩票",
      "小人物",
      "荒诞",
      "群像",
      "命运"
    ],
    "oneLine": "一张巨额中奖彩票让五个毫不相干的失意者互相撕咬，也彼此救赎。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0810",
    "title": "龙马精神大赢家",
    "url": "./movie-0810.html",
    "cover": "./60.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 运动",
    "tags": [
      "赛马",
      "逆袭",
      "草台班子"
    ],
    "oneLine": "三个破产老男人偷来一匹退役残疾赛马，竟发现它能听懂粤语股市术语，于是决定让它参赛赚钱。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0811",
    "title": "那座城这家人",
    "url": "./movie-0811.html",
    "cover": "./61.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情/家庭",
    "tags": [
      "重组家庭",
      "城市变迁",
      "温情",
      "现实主义"
    ],
    "oneLine": "一场化工爆炸事故后，九个破碎家庭重组为一个“大家族”，在老城废墟旁抱团取暖。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0812",
    "title": "昆仑神宫2022",
    "url": "./movie-0812.html",
    "cover": "./62.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2022",
    "genre": "冒险, 奇幻",
    "tags": [
      "盗墓",
      "鬼吹灯",
      "昆仑山",
      "九层妖楼",
      "探险"
    ],
    "oneLine": "胡八一等人为寻找“雮尘珠”破解诅咒，深入昆仑雪域，发现了比九层妖楼更恐怖的祭祀遗址。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0813",
    "title": "明日来讯",
    "url": "./movie-0813.html",
    "cover": "./63.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "科幻, 悬疑, 剧情",
    "tags": [
      "时间旅行",
      "量子纠缠",
      "末日拯救"
    ],
    "oneLine": "物理学家收到了来自明天的短信，内容只有一句：“不要打开潘多拉盒。”",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0814",
    "title": "世缘之舟",
    "url": "./movie-0814.html",
    "cover": "./64.jpg",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻，爱情，古装",
    "tags": [
      "阴间",
      "摆渡人",
      "轮回",
      "虐恋"
    ],
    "oneLine": "奈何桥边的摆渡人失去了前世记忆，直到一艘载着“她”转世灵魂的船，第十次经过他的渡口。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0815",
    "title": "哎哟母亲大人",
    "url": "./movie-0815.html",
    "cover": "./65.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "家庭 / 喜剧 / 剧情",
    "tags": [
      "代际冲突",
      "退休生活",
      "母女和解",
      "都市轻喜",
      "隐藏往事"
    ],
    "oneLine": "一位把全家管得服服帖帖的母亲突然决定离家“退休”，却在女儿偷拍视频的推动下，被卷进一场迟到三十年的家庭真相。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0816",
    "title": "丹尼洛国王",
    "url": "./movie-0816.html",
    "cover": "./66.jpg",
    "region": "俄罗斯 / 乌克兰",
    "type": "剧集",
    "year": "2024",
    "genre": "历史 / 战争 / 传记",
    "tags": [
      "中世纪",
      "基辅罗斯",
      "建国者",
      "权力游戏"
    ],
    "oneLine": "十三世纪，一位被兄弟出卖的王子统一了四分五裂的罗斯公国，对抗蒙古铁骑。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0817",
    "title": "贼性不改",
    "url": "./movie-0817.html",
    "cover": "./67.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "黑色喜剧",
    "tags": [
      "盗贼",
      "师徒",
      "反转",
      "荒诞",
      "人性"
    ],
    "oneLine": "一对神偷师徒金盆洗手前最后一单，却发现偷来的保险箱里只有一张针对他们的追杀令。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0818",
    "title": "少年之名铁勺记事簿",
    "url": "./movie-0818.html",
    "cover": "./68.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "genre": "青春 / 成长",
    "tags": [
      "农村",
      "少年",
      "教育",
      "真实改编"
    ],
    "oneLine": "乡村中学的篮球队从来没有赢过一场比赛，直到他们发现最厉害的球员藏在后厨。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0819",
    "title": "毒枭第三季",
    "url": "./movie-0819.html",
    "cover": "./69.jpg",
    "region": "美国",
    "type": "犯罪电视剧 第三季",
    "year": "2024",
    "genre": "犯罪、动作、政治阴谋",
    "tags": [
      "毒品走私",
      "冷链运输",
      "双面卧底",
      "法庭与利益",
      "海上追击",
      "反洗钱"
    ],
    "oneLine": "毒枭第三季把旧敌变盟友，米格尔被迫在48小时内确认“第三位证人”是否被换脸，否则跨大洋的毒网就会把证据写成海市蜃楼。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0820",
    "title": "飞行鞋",
    "url": "./movie-0820.html",
    "cover": "./70.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2020",
    "genre": "奇幻，家庭，儿童",
    "tags": [
      "童真",
      "遗愿",
      "鞋匠",
      "治愈",
      "轻魔幻"
    ],
    "oneLine": "老鞋匠去世后留下一双能让穿着者梦见已故亲人的布鞋，但每双只能穿一次。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0821",
    "title": "归来的她",
    "url": "./movie-0821.html",
    "cover": "./71.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情 / 科幻",
    "tags": [
      "克隆人",
      "替代",
      "伦理",
      "三角恋"
    ],
    "oneLine": "宇航员丈夫在妻子遇难两年后收到来自太空的求救信号，信号那头的声音和妻子一模一样。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0822",
    "title": "北美小鹿猎人传奇",
    "url": "./movie-0822.html",
    "cover": "./72.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 冒险",
    "tags": [
      "狩猎",
      "成长",
      "父子和解",
      "荒野",
      "原住民"
    ],
    "oneLine": "一个城市少年被送到猎人家中，却意外成了野生小鹿的守护者。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0823",
    "title": "杰克大魔王",
    "url": "./movie-0823.html",
    "cover": "./73.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖",
    "tags": [
      "儿童邪典",
      "玩偶杀人",
      "小镇惊魂"
    ],
    "oneLine": "一只被遗弃的旧玩偶在复活夜苏醒，用温柔童声引诱全镇孩子走向深渊。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0824",
    "title": "寒假",
    "url": "./movie-0824.html",
    "cover": "./74.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 儿童 / 家庭",
    "tags": [
      "小学生",
      "成长",
      "暑假作业",
      "冒险"
    ],
    "oneLine": "小学四年级的悠太在寒假第一天摔坏了存钱罐，为了凑钱买游戏机，他和朋友们开启了一场啼笑皆非的“赚钱大作战”。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0825",
    "title": "斗罗大陆2绝世唐门第五季",
    "url": "./movie-0825.html",
    "cover": "./75.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "玄幻",
    "tags": [
      "国漫",
      "魂师",
      "霍雨浩",
      "王冬",
      "史莱克"
    ],
    "oneLine": "霍雨浩觉醒第三武魂，邪魂师组织“圣灵教”正式宣战，史莱克七怪面临最大危机。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0826",
    "title": "不在犯罪现场",
    "url": "./movie-0826.html",
    "cover": "./76.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2024",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "不在场证明",
      "连环杀人",
      "时间诡计",
      "双胞胎",
      "警察内鬼"
    ],
    "oneLine": "连续七起命案，凶手都有完美不在场证明，警方发现所有证明都指向同一位警探。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0827",
    "title": "预感讯号",
    "url": "./movie-0827.html",
    "cover": "./77.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2023",
    "genre": "奇幻, 爱情, 悬疑",
    "tags": [
      "超能力",
      "因果循环",
      "刑警爱情",
      "单元剧"
    ],
    "oneLine": "女刑警碰谁就能看到对方十秒后的未来，直到她触碰了一个没有任何讯号的男人。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0828",
    "title": "穿梭鬼门关",
    "url": "./movie-0828.html",
    "cover": "./78.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚, 奇幻",
    "tags": [
      "濒死体验",
      "平行空间",
      "救赎"
    ],
    "oneLine": "一场车祸后，男人发现自己能在濒死状态穿梭阴阳两界，却看到了自己的死期。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0829",
    "title": "黑夜皓齿",
    "url": "./movie-0829.html",
    "cover": "./79.jpg",
    "region": "墨西哥",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻恐怖",
    "tags": [
      "拉美神话",
      "牙齿仙女",
      "丛林邪教"
    ],
    "oneLine": "小女孩发现，传说中的“牙齿仙女”并非给予金币的仙子，而是栖息在黑暗中的长齿怪物。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0830",
    "title": "几乎公众的关系",
    "url": "./movie-0830.html",
    "cover": "./80.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 爱情",
    "tags": [
      "网红情侣",
      "隐私边界",
      "社交媒体"
    ],
    "oneLine": "一对以“完美情侣”人设走红的情侣决定分手，但经纪公司要求他们假装恩爱一年。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0831",
    "title": "昨日之歌",
    "url": "./movie-0831.html",
    "cover": "./81.jpg",
    "region": "日本",
    "type": "剧集 / 动画",
    "year": "2025",
    "genre": "青春 / 剧情 / 音乐",
    "tags": [
      "复读",
      "乐队",
      "日常",
      "细腻"
    ],
    "oneLine": "大学复读第三年的阿陆，在废校的教室里遇到了同样停滞不前的前乐队主唱。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0832",
    "title": "大逃亡",
    "url": "./movie-0832.html",
    "cover": "./82.jpg",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 惊悚",
    "tags": [
      "越狱",
      "兄弟情",
      "高科技",
      "密室",
      "极限"
    ],
    "oneLine": "世界上最顶尖的越狱专家接受了这辈子最难的挑战——从他自己设计的那座监狱里逃出去。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0833",
    "title": "南来北往",
    "url": "./movie-0833.html",
    "cover": "./83.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 家庭 / 年代",
    "tags": [
      "铁路",
      "时代变迁",
      "群像",
      "治愈"
    ],
    "oneLine": "一列绿皮火车跨越四十年，串联起南北两个家庭三代人的悲欢离合。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0834",
    "title": "超完美目证",
    "url": "./movie-0834.html",
    "cover": "./84.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2007",
    "genre": "悬疑, 法庭, 犯罪, 剧情",
    "tags": [
      "证词迷局",
      "监控录像",
      "真假目击者",
      "庭审反转",
      "心理博弈"
    ],
    "oneLine": "一场看似证据确凿的命案审讯里，最完美的证人反而最可疑，而所有真相都藏在一段被剪过的目击影像里。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0835",
    "title": "吸血鬼3恶魔城",
    "url": "./movie-0835.html",
    "cover": "./85.jpg",
    "region": "日本 / 美国",
    "type": "电影",
    "year": "2025",
    "genre": "动画 / 恐怖 / 动作",
    "tags": [
      "哥特美学",
      "恶魔城正史",
      "吸血鬼猎人",
      "手绘2D",
      "虐杀美学"
    ],
    "oneLine": "德古拉死后第100年，恶魔城再次出现，但这次召唤它的不是伯爵，而是伯爵生前最害怕的那个东西。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0836",
    "title": "东方2020",
    "url": "./movie-0836.html",
    "cover": "./86.jpg",
    "region": "俄罗斯",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情, 悬疑",
    "tags": [
      "西伯利亚",
      "神秘事件",
      "政治惊悚",
      "隔离区"
    ],
    "oneLine": "2020年，西伯利亚一处秘密小镇因未知原因被全面封锁，外界无法进入，里面的人无法逃出。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0837",
    "title": "阴阳镜",
    "url": "./movie-0837.html",
    "cover": "./87.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "恐怖, 奇幻",
    "tags": [
      "古装",
      "阴阳眼",
      "民间传说"
    ],
    "oneLine": "一面能照出人心中恶鬼的古镜落入闹市，牵出一段跨越三世的孽缘与复仇。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0838",
    "title": "柿子坞的女人们",
    "url": "./movie-0838.html",
    "cover": "./88.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "家庭悬疑",
    "tags": [
      "女性群像",
      "江南水乡",
      "秘密与谎言"
    ],
    "oneLine": "江南水乡柿子坞，五个女人的秘密随着一具无名尸骨浮出水面。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0839",
    "title": "誓血五人组",
    "url": "./movie-0839.html",
    "cover": "./89.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "战争 / 剧情 / 冒险",
    "tags": [
      "越战",
      "黑人",
      "寻宝",
      "创伤",
      "政治"
    ],
    "oneLine": "四个越战老兵重返丛林，寻找当年埋下的黄金和队长的遗骨。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0840",
    "title": "爱的殉道",
    "url": "./movie-0840.html",
    "cover": "./90.jpg",
    "region": "波兰",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 历史 / 爱情",
    "tags": [
      "二战",
      "修道院",
      "禁忌之恋",
      "秘密档案"
    ],
    "oneLine": "二战期间，一名犹太女孩藏身修道院，她与年轻神父相爱，并自愿成为缄默修女以躲避追捕。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0841",
    "title": "战争陷阱",
    "url": "./movie-0841.html",
    "cover": "./91.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "genre": "战争惊悚",
    "tags": [
      "狙击手",
      "心理战",
      "人性考验",
      "敌我合作"
    ],
    "oneLine": "俄乌战场上，一名俄军狙击手和一名乌军狙击手同时落入了第三方伪装的深坑，他们必须合作才能活命。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0842",
    "title": "熊出没之丛林总动员",
    "url": "./movie-0842.html",
    "cover": "./92.jpg",
    "region": "中国大陆",
    "type": "动画电影",
    "year": "2025",
    "genre": "喜剧 / 冒险 / 环保",
    "tags": [
      "合家欢",
      "丛林机械",
      "反派洗白",
      "3D"
    ],
    "oneLine": "光头强被逼伐木，熊兄弟联手动物们启动“丛林防御系统”，却意外唤醒了沉睡的远古巨兽。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0843",
    "title": "绝唱",
    "url": "./movie-0843.html",
    "cover": "./93.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 音乐 / 家庭",
    "tags": [
      "民歌",
      "非遗",
      "母女",
      "传承",
      "告别"
    ],
    "oneLine": "国家级民歌传承人被告知只剩三个月听力，她要教会从未开口唱歌的女儿最后一支哭嫁歌。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0844",
    "title": "西城枭雄",
    "url": "./movie-0844.html",
    "cover": "./94.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2002",
    "genre": "犯罪/剧情",
    "tags": [
      "黑帮",
      "卧底",
      "兄弟情",
      "时代变迁"
    ],
    "oneLine": "九龙城寨拆除前夜，四兄弟定下金盆洗手之约，第二天其中一人横尸街头。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0845",
    "title": "都市女医倌",
    "url": "./movie-0845.html",
    "cover": "./95.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2027",
    "genre": "古装, 职场, 爱情",
    "tags": [
      "女强",
      "中医",
      "悬疑",
      "成长",
      "甜宠"
    ],
    "oneLine": "现代中医博士穿越成古代仵作之女，在京城开设“女医倌”，用现代医学知识破解奇案。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0846",
    "title": "黎明行动",
    "url": "./movie-0846.html",
    "cover": "./96.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "genre": "犯罪动作",
    "tags": [
      "限时",
      "卧底",
      "爆炸",
      "反腐"
    ],
    "oneLine": "黎明前一小时，被陷害的卧底必须在大爆炸前护送证人穿越12个死亡关卡。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0847",
    "title": "天宝伏妖录第二季",
    "url": "./movie-0847.html",
    "cover": "./97.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2027",
    "genre": "奇幻悬疑",
    "tags": [
      "大唐驱魔",
      "妖邪横行",
      "双男主",
      "高燃打斗",
      "权谋暗线"
    ],
    "oneLine": "驱魔司众人刚在长安站稳脚跟，西域古神陨落的血雨便带着千年诅咒席卷而来。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0848",
    "title": "再一次爱上你",
    "url": "./movie-0848.html",
    "cover": "./98.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情奇幻",
    "tags": [
      "时空跳跃",
      "婚姻危机",
      "重新来过"
    ],
    "oneLine": "结婚十年的丈夫意外获得穿越能力，每次回到过去试图挽回妻子，却把关系推得更远。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0849",
    "title": "蓝与白形成的蔚蓝色",
    "url": "./movie-0849.html",
    "cover": "./99.jpg",
    "region": "希腊",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 爱情",
    "tags": [
      "圣托里尼",
      "疗愈",
      "视觉",
      "诗"
    ],
    "oneLine": "一位色盲画家在圣托里尼遇到一位只能看见蓝色的女孩，两人用彼此的眼睛拼出了世界的全貌。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0850",
    "title": "前途海量",
    "url": "./movie-0850.html",
    "cover": "./100.jpg",
    "region": "中国内地",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 职场",
    "tags": [
      "量化基金",
      "草根逆袭",
      "资本黑幕"
    ],
    "oneLine": "一个卖炒饭的小哥自学量化交易，三个月从10万做到1000万，却发现自己只是大庄家的白手套。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0851",
    "title": "欲海潮2",
    "url": "./movie-0851.html",
    "cover": "./101.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "情色, 惊悚, 悬疑",
    "tags": [
      "女性复仇",
      "豪门阴谋",
      "蛇蝎美人",
      "禁忌之恋"
    ],
    "oneLine": "第一部的“死者”突然归来，并勾引了女主角的哥哥，试图摧毁整个家族。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0852",
    "title": "古城谍影",
    "url": "./movie-0852.html",
    "cover": "./102.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2005",
    "genre": "悬疑, 谍战, 剧情",
    "tags": [
      "反特",
      "解放初期",
      "连环案"
    ],
    "oneLine": "1950年的边境古城，一桩凶杀案牵扯出潜伏的敌特网络，侦察科长在重重迷雾中揪出内鬼，却发现挚友亦是棋子。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0853",
    "title": "荒柯艳迹",
    "url": "./movie-0853.html",
    "cover": "./103.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "1986",
    "genre": "剧情、情色、文艺",
    "tags": [
      "禁片",
      "日据时代",
      "妓女",
      "女性悲歌"
    ],
    "oneLine": "日据末期台湾南部一座妓院里，三个女人用身体交换生存，最终却全部葬身美军轰炸。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0854",
    "title": "二小放牛郎",
    "url": "./movie-0854.html",
    "cover": "./104.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "战争, 历史, 儿童",
    "tags": [
      "抗日",
      "少年英雄",
      "红色经典",
      "新编"
    ],
    "oneLine": "改编自经典童谣，讲述放牛娃王二小用生命将敌人引入包围圈的悲壮故事。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0855",
    "title": "封刃师",
    "url": "./movie-0855.html",
    "cover": "./105.jpg",
    "region": "中国大陆",
    "type": "武侠剧",
    "year": "2009",
    "genre": "武侠,历史,复仇",
    "tags": [
      "封刃令",
      "门派传承",
      "宫廷权谋",
      "师徒情义",
      "江湖再生",
      "隐匿锋芒"
    ],
    "oneLine": "“封刃令”让全城禁剑时，最危险的刺客却在城中开了家修篾馆，把最锋利的刀法转化为暗藏于木纹里的守护。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0856",
    "title": "西伯利亚2020",
    "url": "./movie-0856.html",
    "cover": "./106.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2023",
    "genre": "惊悚, 科幻",
    "tags": [
      "冻土",
      "病毒",
      "封锁",
      "实验室",
      "生存"
    ],
    "oneLine": "一群年轻生物学家在永久冻土中发现4.2万年前的线虫，不料它们复苏后开始操控人类的中枢神经。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0857",
    "title": "未来全明星：返校第三季",
    "url": "./movie-0857.html",
    "cover": "./107.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情，运动，青春",
    "tags": [
      "橄榄球",
      "高中",
      "兄弟会",
      "第三季"
    ],
    "oneLine": "斯宾塞率领弱旅打入州决赛，却发现自己脑震荡后遗症将终结职业生涯。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0858",
    "title": "那年那兔那些事第三季",
    "url": "./movie-0858.html",
    "cover": "./108.jpg",
    "region": "中国大陆",
    "type": "动画",
    "year": "2017",
    "genre": "历史 / 励志",
    "tags": [
      "爱国",
      "种花家",
      "兔子",
      "催泪"
    ],
    "oneLine": "种花家的兔子们继续用热血与眼泪，走过了冷战后期到新世纪的大国复兴之路。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0859",
    "title": "阿登的狂挫",
    "url": "./movie-0859.html",
    "cover": "./109.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "战争，剧情，历史",
    "tags": [
      "二战",
      "心理创伤",
      "生存",
      "雪地",
      "反战"
    ],
    "oneLine": "二战阿登战役中，一名懦弱士兵必须在冰雪地狱中拯救同伴，才能找回被击碎的尊严。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0860",
    "title": "85年盛夏",
    "url": "./movie-0860.html",
    "cover": "./110.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2020",
    "genre": "剧情、爱情、青春",
    "tags": [
      "诺曼底",
      "少年之恋",
      "死亡",
      "摩托车",
      "新浪潮遗风"
    ],
    "oneLine": "1985年诺曼底海岸，两个少年在海边相遇，一个承诺换来了一个夏天和一场葬礼。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0861",
    "title": "了不起的麦瑟尔夫人第四季",
    "url": "./movie-0861.html",
    "cover": "./111.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2022",
    "genre": "剧情 / 喜剧",
    "tags": [
      "脱口秀",
      "女性成长",
      "复古",
      "励志",
      "幽默"
    ],
    "oneLine": "被巡演舞台抛弃后，麦瑟尔夫人决定包下一整座破败剧院自己当老板。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0862",
    "title": "春情热",
    "url": "./movie-0862.html",
    "cover": "./112.jpg",
    "region": "日本",
    "type": "电影",
    "year": "1972",
    "genre": "爱情, 剧情",
    "tags": [
      "昭和",
      "禁忌之恋",
      "温泉",
      "怀旧"
    ],
    "oneLine": "昭和年间，温泉旅馆老板娘与年轻住客的短暂情事，被女儿的一封匿名信彻底打碎。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0863",
    "title": "七百击",
    "url": "./movie-0863.html",
    "cover": "./113.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情，运动，传记",
    "tags": [
      "击剑",
      "师徒",
      "复仇",
      "体育精神"
    ],
    "oneLine": "一位因作弊被终身禁赛的老击剑手，训练自己的女儿用“最脏的七百招”向曾经陷害他的对手复仇。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0864",
    "title": "烈阳挚爱",
    "url": "./movie-0864.html",
    "cover": "./114.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "爱情，青春",
    "tags": [
      "暗恋",
      "双向奔赴",
      "救赎",
      "夏季",
      "纯爱"
    ],
    "oneLine": "哑巴少女遇到了只能活在黑暗里的病弱少年，他们是彼此唯一的太阳。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0865",
    "title": "不能犯规的游戏之房中有眼",
    "url": "./movie-0865.html",
    "cover": "./115.jpg",
    "region": "中国",
    "type": "剧集 (网络)",
    "year": "2025",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "密室",
      "规则怪谈",
      "直播",
      "偷窥",
      "心理战"
    ],
    "oneLine": "六位网红受邀参加“不能犯规”游戏直播，入住一间布满摄像头的房子，任何违规都会招来死亡惩罚。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0866",
    "title": "疑云密布",
    "url": "./movie-0866.html",
    "cover": "./116.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "沼泽凶案",
      "双时间线",
      "小镇秘密",
      "记者",
      "全员恶人"
    ],
    "oneLine": "1994年沼泽女尸案重启调查，记者发现当年被处决的凶手可能是替罪羊，而真凶还住在这个镇。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0867",
    "title": "龙族：救援骑士",
    "url": "./movie-0867.html",
    "cover": "./117.jpg",
    "region": "美国",
    "type": "电影 / 动画",
    "year": "2024",
    "genre": "动画 / 冒险",
    "tags": [
      "龙骑士",
      "救援",
      "奇幻",
      "友情"
    ],
    "oneLine": "一支由年轻龙骑士组成的飞行救援队，必须穿越“永不落山之谷”拯救被困的太阳龙。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0868",
    "title": "天启四骑士",
    "url": "./movie-0868.html",
    "cover": "./118.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "末世科幻",
    "tags": [
      "灾变",
      "超能力",
      "反英雄",
      "宗教隐喻"
    ],
    "oneLine": "瘟疫、战争、饥荒、死亡以四位异能者身份降临现代，但他们决定先报复抛弃人类的神。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0869",
    "title": "迷夜惨遇",
    "url": "./movie-0869.html",
    "cover": "./119.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2021",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "公路",
      "变态杀手",
      "封闭空间",
      "反转",
      "血腥"
    ],
    "oneLine": "一对情侣雨夜迷路，借宿一栋孤宅，却发现宅子的每一扇窗户里都锁着一个被当作“家人”的活人。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0870",
    "title": "大地",
    "url": "./movie-0870.html",
    "cover": "./120.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "剧情, 冒险",
    "tags": [
      "末世",
      "独居",
      "生存",
      "自我救赎"
    ],
    "oneLine": "痛失家人的城市女性在荒野中学习最原始的生存法则，与大地对话，也与过去的自己和解。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0871",
    "title": "从前，有个好莱坞",
    "url": "./movie-0871.html",
    "cover": "./121.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 喜剧",
    "tags": [
      "曼森家族",
      "戏中戏",
      "怀旧滤镜"
    ],
    "oneLine": "过气影星和替身搭档，在1969年的洛杉矶，试图在嬉皮士浪潮中找到自己的位置。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0872",
    "title": "婚约指环",
    "url": "./movie-0872.html",
    "cover": "./122.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情， 战争， 爱情",
    "tags": [
      "二战",
      "承诺",
      "寻找"
    ],
    "oneLine": "一枚镶嵌在战俘营墙壁里的婚戒，串联起七十年的等待与救赎。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0873",
    "title": "亚曼德拉真力",
    "url": "./movie-0873.html",
    "cover": "./123.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "科幻、冒险、史诗",
    "tags": [
      "架空大陆",
      "能量争夺",
      "异族文明",
      "视觉奇观",
      "成长"
    ],
    "oneLine": "在能量晶体“真力”驱动的奇幻大陆亚曼德拉，一名矿工少年意外获得了能与上古巨神沟通的能力。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0874",
    "title": "左麟右李",
    "url": "./movie-0874.html",
    "cover": "./124.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2006",
    "genre": "喜剧 / 爱情 / 音乐",
    "tags": [
      "谭咏麟",
      "李克勤",
      "演唱会电影",
      "友情客串"
    ],
    "oneLine": "两个同名的普通青年为了追女神，被迫假扮成谭咏麟和李克勤，并真的唱了起来。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0875",
    "title": "颤抖的真相第二季",
    "url": "./movie-0875.html",
    "cover": "./125.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "动画，悬疑，恐怖",
    "tags": [
      "怪诞",
      "脑洞",
      "社会隐喻"
    ],
    "oneLine": "更多令人不安的真相被揭开，这次连现实本身都开始像噩梦一样扭曲融化。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0876",
    "title": "阿嬷冻未条",
    "url": "./movie-0876.html",
    "cover": "./126.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2019",
    "genre": "家庭剧情",
    "tags": [
      "隔代亲情",
      "方言喜剧",
      "阿嬷的倔强"
    ],
    "oneLine": "八旬阿嬷被全家送去养老院，她不甘心，拉着隔壁老爷爷策划了一场“胜利大逃亡”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0877",
    "title": "间谍的灵魂国语",
    "url": "./movie-0877.html",
    "cover": "./127.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "谍战, 悬疑",
    "tags": [
      "灵魂互换",
      "双面间谍",
      "民国"
    ],
    "oneLine": "中共地下党与军统特务意外灵魂互换，必须用敌人的身体完成自己的任务。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0878",
    "title": "我是传奇",
    "url": "./movie-0878.html",
    "cover": "./128.jpg",
    "region": "美国",
    "type": "剧集 (10集)",
    "year": "2024",
    "genre": "科幻, 恐怖, 生存",
    "tags": [
      "丧尸末日",
      "孤独幸存者",
      "时间循环",
      "科学实验"
    ],
    "oneLine": "他是全球唯一免疫者，但每七天病毒就会重置他的记忆，让他反复经历同样恐怖的夜晚。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0879",
    "title": "一日贵妇",
    "url": "./movie-0879.html",
    "cover": "./129.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 剧情",
    "tags": [
      "互换身份",
      "阶级",
      "巴黎"
    ],
    "oneLine": "巴黎清洁工大妈被选中假扮失踪的伯爵夫人24小时，却发现自己爱上了这种“被尊重”的感觉。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0880",
    "title": "生死狙击",
    "url": "./movie-0880.html",
    "cover": "./130.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 惊悚",
    "tags": [
      "狙击手",
      "复仇",
      "阴谋论"
    ],
    "oneLine": "退役狙击手被诬陷刺杀总统，他必须在全城围捕中找出真凶。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0881",
    "title": "千钧。一发",
    "url": "./movie-0881.html",
    "cover": "./131.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 灾难",
    "tags": [
      "拆弹",
      "地铁",
      "实时叙事",
      "高张力"
    ],
    "oneLine": "早高峰地铁上，一枚压力感应炸弹被焊死在座位下，只要任何一人起身，全车炸毁。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0882",
    "title": "江湖学院第一季",
    "url": "./movie-0882.html",
    "cover": "./132.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "喜剧，武侠，古装",
    "tags": [
      "穿越",
      "校园",
      "搞笑",
      "无厘头",
      "群侠"
    ],
    "oneLine": "一个现代厨子穿越到古代江湖，发现各大门派都在同一所学院里“内卷”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0883",
    "title": "摩比小子大电影",
    "url": "./movie-0883.html",
    "cover": "./133.jpg",
    "region": "德国 / 美国",
    "type": "动画电影",
    "year": "2025",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "玩具",
      "冒险",
      "合家欢",
      "平行世界"
    ],
    "oneLine": "一个叛逆女孩被吸入摩比玩具世界，必须与一名呆萌特工合作拯救两个世界。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0884",
    "title": "教室的那一间第二季",
    "url": "./movie-0884.html",
    "cover": "./134.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "青春 / 校园 / 喜剧",
    "tags": [
      "怀旧",
      "毕业季",
      "群像"
    ],
    "oneLine": "高三最后一学期，全班同学约定一起“摆烂”，却意外发现自己班其实是全校最内卷的火箭班。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0885",
    "title": "卧底型警之香港狂骚曲",
    "url": "./movie-0885.html",
    "cover": "./135.jpg",
    "region": "日本, 中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "喜剧, 动作, 犯罪",
    "tags": [
      "日式搞笑",
      "无间道",
      "黑帮",
      "枪战",
      "错位"
    ],
    "oneLine": "日本最废柴的卧底警察空降香港黑帮，结果发现他要渗透的社团首领竟然是他失散多年的亲大哥。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0886",
    "title": "十八洞村",
    "url": "./movie-0886.html",
    "cover": "./136.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 乡村 / 纪实风格",
    "tags": [
      "精准扶贫",
      "乡村振兴",
      "真实改编",
      "群像"
    ],
    "oneLine": "十八洞村的十八个光棍组成“脱单攻坚队”，却发现比找媳妇更难的是找到让村子活下去的路。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0887",
    "title": "摔角少年",
    "url": "./movie-0887.html",
    "cover": "./137.jpg",
    "region": "墨西哥",
    "type": "电影",
    "year": "2025",
    "genre": "运动 / 励志",
    "tags": [
      "摔角",
      "梦想",
      "贫穷",
      "师徒"
    ],
    "oneLine": "贫民窟少年为了给母亲治病，偷学摔角，却意外被传奇选手看中。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0888",
    "title": "壮志高飞",
    "url": "./movie-0888.html",
    "cover": "./138.jpg",
    "region": "中国大陆",
    "type": "电视剧集",
    "year": "2022",
    "genre": "剧情, 职场, 励志",
    "tags": [
      "航空",
      "飞行员",
      "梦想",
      "师徒",
      "成长"
    ],
    "oneLine": "一个嚣张的富二代飞行员学徒，遇到了一个因事故而被禁飞的天才机长教官，两人从互怼到共渡难关，追逐蓝天梦。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0889",
    "title": "女友日",
    "url": "./movie-0889.html",
    "cover": "./139.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 爱情",
    "tags": [
      "AI恋爱",
      "黑色幽默",
      "近未来",
      "虚拟现实"
    ],
    "oneLine": "为了应付父母，男主租赁了一个顶级“AI女友”回家过年，却发现这个AI的前身是他的初恋女友。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0890",
    "title": "狱中计",
    "url": "./movie-0890.html",
    "cover": "./140.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "悬疑 / 犯罪 / 黑色幽默",
    "tags": [
      "黑吃黑",
      "密室推理",
      "监狱风云",
      "反转"
    ],
    "oneLine": "为了拿到宝藏地图，骗子、神偷、杀手同时故意入狱，却发现目标囚犯早已被掉包。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0891",
    "title": "河岸杀手",
    "url": "./movie-0891.html",
    "cover": "./141.jpg",
    "region": "美国",
    "type": "电视剧 (8集)",
    "year": "2024",
    "genre": "犯罪、悬疑、剧情",
    "tags": [
      "连环杀手",
      "双时间线",
      "小镇秘密",
      "模仿犯"
    ],
    "oneLine": "1990年代让整个小镇陷入恐慌的“河岸杀手”在狱中死亡，三十年后，一具尸体以完全相同的方式出现在同一条河边，而凶手仍在牢里。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0892",
    "title": "咏春",
    "url": "./movie-0892.html",
    "cover": "./142.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作，传记，历史",
    "tags": [
      "咏春拳",
      "女性宗师",
      "民国",
      "传承",
      "打戏"
    ],
    "oneLine": "清朝末年，佛山少女严咏春自创一套“女人拳”，却被全城武师嘲笑，直到她在一炷香内连挑十三家武馆。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0893",
    "title": "夜深情更深",
    "url": "./movie-0893.html",
    "cover": "./143.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1993",
    "genre": "爱情, 悬疑, 惊悚",
    "tags": [
      "电话情缘",
      "午夜凶铃",
      "都市传说",
      "反转"
    ],
    "oneLine": "每晚零点都会接到神秘男人来电的女主播，在暧昧通话中越陷越深，却发现对方早已死去十年。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0894",
    "title": "奥古斯丁的激情",
    "url": "./movie-0894.html",
    "cover": "./144.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2017",
    "genre": "剧情 / 历史 / 宗教",
    "tags": [
      "天主教",
      "忏悔录",
      "哲学"
    ],
    "oneLine": "青年奥古斯丁在情欲、异端与真理中挣扎，最终在北非花园里听到上帝召唤，写下不朽的《忏悔录》。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0895",
    "title": "大众情人",
    "url": "./movie-0895.html",
    "cover": "./145.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 喜剧, 都市",
    "tags": [
      "恋爱顾问",
      "海王上岸",
      "反PUA",
      "港式幽默",
      "快节奏"
    ],
    "oneLine": "一个教男人恋爱的“海王导师”爱上了一个女学员，结果发现她是专治渣男的“反PUA高手”。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0896",
    "title": "笑傲在明天粤语",
    "url": "./movie-0896.html",
    "cover": "./146.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情, 喜剧",
    "tags": [
      "港剧",
      "职场",
      "幽默",
      "励志",
      "友情"
    ],
    "oneLine": "五个失业的香港80后决定用一本荒诞的“明日计划书”改变命运。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0897",
    "title": "瓦尔多",
    "url": "./movie-0897.html",
    "cover": "./147.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑, 惊悚",
    "tags": [
      "消失的小镇",
      "心理调查",
      "全员撒谎"
    ],
    "oneLine": "侦探瓦尔多为了寻找失踪女孩，进入一个地图上不存在的小镇，却发现所有居民都长着同一张脸。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0898",
    "title": "刚果惊魂",
    "url": "./movie-0898.html",
    "cover": "./148.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1995",
    "genre": "动作 / 科幻 / 冒险",
    "tags": [
      "猩猩",
      "非洲",
      "钻石矿",
      "冒险",
      "科幻"
    ],
    "oneLine": "一支探险队带着会手语的猩猩深入刚果雨林，寻找钻石矿，却遭遇了嗜血的变异猩猩部落。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0899",
    "title": "第九日",
    "url": "./movie-0899.html",
    "cover": "./149.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "科幻, 惊悚",
    "tags": [
      "时间循环",
      "外星接触",
      "哲学思辨"
    ],
    "oneLine": "外星飞船降临地球第九天，全球人类都会在同一时刻失去意识九分钟。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0900",
    "title": "蛮荒历险记",
    "url": "./movie-0900.html",
    "cover": "./150.jpg",
    "region": "加拿大",
    "type": "电影",
    "year": "2024",
    "genre": "冒险，生存",
    "tags": [
      "荒野求生",
      "父子",
      "熊"
    ],
    "oneLine": "单亲父亲带十二岁儿子进入落基山脉进行“成人礼”徒步，却被一头灰熊跟踪了整整七天。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0901",
    "title": "龟甲秘事之拨云见日",
    "url": "./movie-0901.html",
    "cover": "./1.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑 / 古装 / 探案",
    "tags": [
      "甲骨文",
      "连环案",
      "太学",
      "文字游戏"
    ],
    "oneLine": "太学内接连有人离奇死亡，尸体旁都留下一片刻着诡异甲骨文的龟甲。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0902",
    "title": "爱情呼叫转移2：爱情左右",
    "url": "./movie-0902.html",
    "cover": "./2.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "爱情喜剧",
    "tags": [
      "相亲",
      "魔幻现实",
      "女性视角",
      "轻松幽默"
    ],
    "oneLine": "大龄女青年获得一部能“筛选”完美男友的手机，却发现每选一次自己就变老一岁。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0903",
    "title": "新梁山伯与祝英台",
    "url": "./movie-0903.html",
    "cover": "./3.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "爱情 / 古装 / 奇幻",
    "tags": [
      "蝴蝶",
      "转世",
      "现代",
      "双线叙事",
      "悲剧"
    ],
    "oneLine": "梁山伯与祝英台在2026年同时转世为一名自闭症男孩和一只凤蝶，用24小时重新经历化蝶之夜。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0904",
    "title": "春闺怨女",
    "url": "./movie-0904.html",
    "cover": "./4.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2026",
    "genre": "古装，悬疑，心理",
    "tags": [
      "宅斗",
      "大女主",
      "密室",
      "反转",
      "女性觉醒"
    ],
    "oneLine": "将军府大小姐新婚之夜被污不贞，关入柴房等死，她却发现这竟是丈夫与庶妹联手设下的夺产骗局。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0905",
    "title": "没有丑闻",
    "url": "./movie-0905.html",
    "cover": "./5.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情政治",
    "tags": [
      "政界操守",
      "媒体博弈",
      "理想与现实",
      "悬疑"
    ],
    "oneLine": "清廉总统候选人被爆“没有丑闻”才是最大的丑闻，民众开始怀疑他完美人设背后藏着更可怕的秘密。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0906",
    "title": "圣诞恶魔",
    "url": "./movie-0906.html",
    "cover": "./6.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖/奇幻",
    "tags": [
      "都市传说",
      "血腥圣诞",
      "密室逃脱",
      "另类节日"
    ],
    "oneLine": "一群孩子在平安夜唤醒了一个以恐惧为食的古老邪灵，他们必须在黎明前完成献祭。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0907",
    "title": "极道之妻2",
    "url": "./movie-0907.html",
    "cover": "./7.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "剧情",
    "tags": [
      "黑道",
      "女性",
      "复仇",
      "暴力美学",
      "续作"
    ],
    "oneLine": "前作五年后，隐退的极道之妻被逼重出江湖，这次她要对抗的不是敌对帮派，而是洗白上瘾的丈夫。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0908",
    "title": "基地第二季",
    "url": "./movie-0908.html",
    "cover": "./8.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻, 冒险, 剧情",
    "tags": [
      "银河帝国",
      "心理史学",
      "谢顿计划",
      "克隆人"
    ],
    "oneLine": "谢顿计划陷入致命偏差，第二基地在黑暗中崛起，端点星面临双重毁灭危机。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0909",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 我要求审判 米香 伯纳德行动 东北合伙人 神鬼奇兵2：阿卡汉顿古墓 信号100 魔鬼杀阵 迷途 幸运符 稻草狗2011 王牌大主厨 学堂霸王花 遗失在火中的记忆 天灵灵地灵灵 陈翔六点半之拳王妈妈 德累斯顿大轰炸（下） 二十四城记 徒手攀岩 激情 大青树下",
    "url": "./movie-0909.html",
    "cover": "./9.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0910",
    "title": "我的法定老公泰语",
    "url": "./movie-0910.html",
    "cover": "./10.jpg",
    "region": "泰国",
    "type": "剧集",
    "year": "2020",
    "genre": "爱情，喜剧",
    "tags": [
      "先婚后爱",
      "律师",
      "青梅竹马",
      "甜剧"
    ],
    "oneLine": "为了躲避家族安排的婚姻，建筑设计师与青梅竹马的女律师签订结婚协议，没想到假戏真做，心动难忍。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0911",
    "title": "在凶手的怀抱里",
    "url": "./movie-0911.html",
    "cover": "./11.jpg",
    "region": "中国大陆",
    "type": "心理惊悚片",
    "year": "2022",
    "genre": "心理,惊悚,犯罪",
    "tags": [
      "凶案",
      "恋爱真相",
      "律师",
      "刑侦",
      "反转"
    ],
    "oneLine": "在每一次“拥抱”之后尸体都失去记忆，记者与前刑警发现，最危险的不是凶手，而是把爱写成证据的人。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0912",
    "title": "真正汉子",
    "url": "./movie-0912.html",
    "cover": "./12.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "喜剧",
    "tags": [
      "性别角色",
      "反讽",
      "成长",
      "家庭"
    ],
    "oneLine": "一个崇尚“男子气概”的钢铁直男被外星射线击中，突然拥有了超强的共情能力，动不动就哭。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0913",
    "title": "逍遥法外班克斯",
    "url": "./movie-0913.html",
    "cover": "./13.jpg",
    "region": "英国",
    "type": "电视剧",
    "year": "2026",
    "genre": "犯罪, 喜剧, 悬疑",
    "tags": [
      "伪造大师",
      "博物馆",
      "猫鼠游戏",
      "英式幽默"
    ],
    "oneLine": "全球最著名的艺术品伪造者“班克斯”接受FBI邀请，协助追捕一名比他更疯狂的模仿犯。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0914",
    "title": "有盼头",
    "url": "./movie-0914.html",
    "cover": "./14.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情 / 家庭 / 生活",
    "tags": [
      "下岗再就业",
      "养老",
      "东北",
      "治愈"
    ],
    "oneLine": "东北下岗女工为了供女儿读书，跑到上海做养老护理员，竟成了“金牌管家”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0915",
    "title": "忐忑的新婚之夜",
    "url": "./movie-0915.html",
    "cover": "./15.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 家庭 / 爱情",
    "tags": [
      "闪婚",
      "文化冲突",
      "性教育",
      "闹剧",
      "温情"
    ],
    "oneLine": "一对印度闪婚夫妻，在新婚之夜被全家族“现场指导”，而他们最忐忑的，是根本没看清对方的脸。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0916",
    "title": "难忘的夏天",
    "url": "./movie-0916.html",
    "cover": "./16.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情，青春，同性",
    "tags": [
      "乡村",
      "初恋",
      "成长",
      "秘密",
      "夏日限定"
    ],
    "oneLine": "1985年的法国乡间，两个少年在蝉鸣和麦浪中相遇，他们以为这是一个不会结束的夏天。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0917",
    "title": "甲虫村 第三季",
    "url": "./movie-0917.html",
    "cover": "./17.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2024",
    "genre": "奇幻悬疑",
    "tags": [
      "昆虫",
      "社会隐喻",
      "宗教",
      "意识流"
    ],
    "oneLine": "甲虫村的神明突然死去，村民们的甲壳开始长出人类的眼睛。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0918",
    "title": "最后的勇气",
    "url": "./movie-0918.html",
    "cover": "./18.jpg",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2026",
    "genre": "战争 / 传记 / 剧情",
    "tags": [
      "二战",
      "真实事件",
      "战地医生",
      "人道主义",
      "牺牲"
    ],
    "oneLine": "二战真实事件：一位良心发现的纳粹医生，用疫苗瓶拯救了数千集中营囚犯。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0919",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 三对鸳鸯一张床 大秦腔 蓝色的卡布奇诺 人欢马叫 柏林地下情 这就是我：席琳·狄翁 危险生机 沉闷苦夏 伏弩 昼颜 路上的陌生人 女神捕之心鬼难防 友谊无价 猎杀前线3：不死战队 美国出口 梅毅说中国史明史篇 不要走散好不好 大话西游终结篇 回廊亭杀人事件 亨德逊夫人敬献",
    "url": "./movie-0919.html",
    "cover": "./19.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0920",
    "title": "金发男郎",
    "url": "./movie-0920.html",
    "cover": "./20.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧，爱情，剧情",
    "tags": [
      "身份错位",
      "金发偏见",
      "小镇笑料",
      "自我认同"
    ],
    "oneLine": "一个天生蓝发的小镇青年为了暗恋的女孩染成金发，却意外被全村人当成从巴黎归来的天才骗子。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0921",
    "title": "德令哈之夜",
    "url": "./movie-0921.html",
    "cover": "./21.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2021",
    "genre": "悬疑 / 奇幻",
    "tags": [
      "外星人",
      "荒漠",
      "目击事件"
    ],
    "oneLine": "三个年轻人在德令哈荒漠露营，拍到了不明飞行物，随后发现有人正在删除他们关于这一夜的记忆。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0922",
    "title": "富贵吉祥",
    "url": "./movie-0922.html",
    "cover": "./22.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 爱情 / 家庭",
    "tags": [
      "贺岁片",
      "假扮情侣",
      "豪门恩怨",
      "南洋风情",
      "合家欢"
    ],
    "oneLine": "破产富二代与落魄风水师假扮情侣回国骗家产，结果两人真爱上，家族秘密也开始连环爆炸。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0923",
    "title": "黎明的飞鸟",
    "url": "./movie-0923.html",
    "cover": "./23.jpg",
    "region": "法国 / 塞内加尔",
    "type": "电影",
    "year": "2022",
    "genre": "剧情、奇幻、自然",
    "tags": [
      "非洲",
      "环保",
      "候鸟迁徙",
      "祖孙情"
    ],
    "oneLine": "患阿尔茨海默症的祖母坚称自己是一只即将迁徙的鸟，孙女为了安抚她，造了一架滑翔机送她起飞。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0924",
    "title": "危险飞行",
    "url": "./movie-0924.html",
    "cover": "./24.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "悬疑 / 灾难",
    "tags": [
      "空中密闭空间",
      "记忆碎片",
      "心理惊悚",
      "反转结局"
    ],
    "oneLine": "副机长醒来发现全机乘客都睡着了，而机长的遗言是：永远不要降落，因为地上已经没有活人了。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0925",
    "title": "边缘追缉",
    "url": "./movie-0925.html",
    "cover": "./25.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "刑侦、悬疑",
    "tags": [
      "边境",
      "卧底",
      "连环杀手",
      "雪原"
    ],
    "oneLine": "中俄边境小镇发生连环杀人案，女刑警在追查中发现，凶手可能是一直帮她做侧写的心理学家。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0926",
    "title": "正义联盟：闪点悖论",
    "url": "./movie-0926.html",
    "cover": "./26.jpg",
    "region": "美国",
    "type": "电影（动画）",
    "year": "2025",
    "genre": "动作 / 科幻",
    "tags": [
      "平行宇宙",
      "闪电侠核心",
      "暗黑正义联盟"
    ],
    "oneLine": "闪电侠为救母亲打乱时间线，结果布鲁斯·韦恩死去、其父成为蝙蝠侠，而海王与神奇女侠正发动灭世战争。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0927",
    "title": "最后的面具",
    "url": "./movie-0927.html",
    "cover": "./27.jpg",
    "region": "法国 / 意大利",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 悬疑 / 冒险",
    "tags": [
      "威尼斯狂欢节",
      "身份互换",
      "遗产谜局",
      "古典美学"
    ],
    "oneLine": "威尼斯狂欢节最后一天，一名落魄贵族发现死去多年的父亲可能以另一张面具的身份，仍活在城中。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0928",
    "title": "上海滩十三太保",
    "url": "./movie-0928.html",
    "cover": "./28.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 历史, 悬疑",
    "tags": [
      "民国",
      "间谍",
      "军阀",
      "密室"
    ],
    "oneLine": "1937年的上海，十三个军阀保镖齐聚一堂，他们中只有一人是刺客，而目标是房间里的那个日本人。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0929",
    "title": "挑战者3：地狱魔神",
    "url": "./movie-0929.html",
    "cover": "./29.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作， 科幻， 冒险",
    "tags": [
      "末世",
      "机甲",
      "恶魔",
      "爽片"
    ],
    "oneLine": "当地狱之门在地球开启，人类最后的希望是一群驾驶着圣机甲的反英雄。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0930",
    "title": "反击第六季",
    "url": "./movie-0930.html",
    "cover": "./30.jpg",
    "region": "美国 / 英国",
    "type": "剧集",
    "year": "2025",
    "genre": "动作 / 军事",
    "tags": [
      "雇佣兵",
      "全球反恐",
      "女性主角",
      "高强度打斗"
    ],
    "oneLine": "前特种部队女狙击手加入秘密组织，发现她的第一个任务目标，是在另一条任务线里保护的同一个人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0931",
    "title": "有前途的年轻女子",
    "url": "./movie-0931.html",
    "cover": "./31.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "剧情, 惊悚, 犯罪",
    "tags": [
      "女性复仇",
      "社会议题",
      "暗黑系",
      "反套路"
    ],
    "oneLine": "白天是咖啡店店员，夜里却扮成醉酒女孩引诱“好人”露出真面目，直到一场旧案把她拖回深渊。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0932",
    "title": "僵尸广播放送时",
    "url": "./movie-0932.html",
    "cover": "./32.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 喜剧 / 灾难",
    "tags": [
      "丧尸",
      "电台",
      "密室",
      "直播",
      "黑色幽默"
    ],
    "oneLine": "首尔爆发丧尸危机，一个深夜电台的主持人被困在直播室，只能通过电波指导听众求生。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0933",
    "title": "最长的决战",
    "url": "./movie-0933.html",
    "cover": "./33.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作， 惊悚， 战争",
    "tags": [
      "狙击手",
      "绝境求生",
      "沙漠",
      "亦敌亦友",
      "限时营救"
    ],
    "oneLine": "两名敌对的顶尖狙击手被困荒漠废墟，必须在48小时内联手对抗一场致命沙暴。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0934",
    "title": "大话骰",
    "url": "./movie-0934.html",
    "cover": "./34.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1998",
    "genre": "喜剧动作",
    "tags": [
      "赌博",
      "江湖",
      "怀旧"
    ],
    "oneLine": "一个靠摇骰子骗钱的街头混混，被赌神看中收为关门弟子，却卷入一场关乎生死的骰王争霸。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0935",
    "title": "德古拉同志",
    "url": "./movie-0935.html",
    "cover": "./35.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2021",
    "genre": "恐怖喜剧",
    "tags": [
      "吸血鬼",
      "苏联时代",
      "政治讽刺"
    ],
    "oneLine": "斯大林时代，吸血鬼德古拉被征召加入克格勃，负责审讯敌人。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0936",
    "title": "回魂夜1995",
    "url": "./movie-0936.html",
    "cover": "./36.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "genre": "恐怖 / 喜剧",
    "tags": [
      "民俗恐怖",
      "黑色幽默",
      "港味",
      "七日还魂"
    ],
    "oneLine": "殡仪馆守夜人老李坚信死去的人会在第七夜回魂，这一次，他等来的却是自己的名字。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0937",
    "title": "开膛街第四季",
    "url": "./movie-0937.html",
    "cover": "./37.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "英伦",
      "连环杀手",
      "维多利亚",
      "法医"
    ],
    "oneLine": "白教堂区再现开膛手式凶案，但这次，所有证据都指向了退休的老警探。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0938",
    "title": "好歹一家人",
    "url": "./movie-0938.html",
    "cover": "./38.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "家庭 / 喜剧",
    "tags": [
      "重组家庭",
      "继父继子",
      "生活流"
    ],
    "oneLine": "六十岁老爸再婚，四个成年子女带着各自算计回家，原本破裂的一家人被迫营业。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0939",
    "title": "电影的墓地",
    "url": "./movie-0939.html",
    "cover": "./39.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2020",
    "genre": "剧情, 奇幻",
    "tags": [
      "迷影",
      "废弃胶片",
      "记忆保存",
      "电影消亡"
    ],
    "oneLine": "一家地下电影院声称能放映“被世人遗忘的电影”，但每位观众入场后都会失忆。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0940",
    "title": "宝拉：裸画像",
    "url": "./movie-0940.html",
    "cover": "./40.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 传记",
    "tags": [
      "女性画家",
      "艺术创作",
      "性压抑",
      "19世纪",
      "巴黎"
    ],
    "oneLine": "19世纪巴黎女画家宝拉·莫德松-贝克尔，在画下自己最后一幅裸体自画像时，与整个时代开战。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0941",
    "title": "撞脸",
    "url": "./movie-0941.html",
    "cover": "./41.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "悬疑, 犯罪",
    "tags": [
      "替身",
      "身份互换",
      "阴谋"
    ],
    "oneLine": "一个平凡的女教师，因为与亿万财阀千金极度相似，被卷入了一场蓄谋已久的阴谋杀局。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0942",
    "title": "霸道总裁别惹我",
    "url": "./movie-0942.html",
    "cover": "./42.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "都市爱情喜剧",
    "tags": [
      "反套路",
      "性别互换",
      "职场",
      "欢喜冤家"
    ],
    "oneLine": "冷酷总裁与热血打工人在一次意外中互换了身体，被迫用对方的身份去面对职场与家庭的双重乱局。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0943",
    "title": "生活传奇",
    "url": "./movie-0943.html",
    "cover": "./43.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": [
      "日常",
      "诗意",
      "多代同堂"
    ],
    "oneLine": "一个普通面包师家庭五十年的日常，被邻居偷偷拍成纪录片，竟意外获得威尼斯金狮奖。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0944",
    "title": "伏罗希洛夫射手",
    "url": "./movie-0944.html",
    "cover": "./44.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 战争, 剧情",
    "tags": [
      "狙击手",
      "二战",
      "老兵"
    ],
    "oneLine": "二战功勋狙击手隐居山林，当黑帮威胁他的孙女时，他拿起那把老旧的莫辛-纳甘，开始逐一清剿。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0945",
    "title": "韶山少年：毛泽东的故事",
    "url": "./movie-0945.html",
    "cover": "./45.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 传记 / 历史",
    "tags": [
      "伟人传记",
      "青春成长",
      "近代史"
    ],
    "oneLine": "十七岁的毛泽东决意离开韶山冲，在去东山学堂的路上，他在笔记中写下了“孩儿立志出乡关”。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0946",
    "title": "绅士与淑女",
    "url": "./movie-0946.html",
    "cover": "./46.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2014",
    "genre": "爱情，喜剧，剧情",
    "tags": [
      "英伦",
      "阶级",
      "身份错位",
      "优雅"
    ],
    "oneLine": "一个真正的贵族绅士和一个街头女骗子互换身份，却发现对方的生活才是自己想要的样子。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0947",
    "title": "超能警探",
    "url": "./movie-0947.html",
    "cover": "./47.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "科幻 / 悬疑 / 动作",
    "tags": [
      "读心术",
      "警察",
      "记忆迷宫"
    ],
    "oneLine": "拥有读心术的刑警，在追捕一名高智商罪犯时发现，对方的“记忆”被锁在另一个人的大脑里。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0948",
    "title": "孽欲狂情",
    "url": "./movie-0948.html",
    "cover": "./48.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1994",
    "genre": "情色 / 惊悚",
    "tags": [
      "情欲",
      "背叛",
      "复仇",
      "限制级"
    ],
    "oneLine": "富商妻子与司机偷情，合谋杀害丈夫后，却发现彼此早已被更深的阴谋包裹。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0949",
    "title": "坚强的灵魂",
    "url": "./movie-0949.html",
    "cover": "./49.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2019",
    "genre": "运动, 传记, 剧情",
    "tags": [
      "摔跤",
      "残奥",
      "母女",
      "励志",
      "逆袭"
    ],
    "oneLine": "天生没有左小腿的女孩，被母亲遗弃在孤儿院，十五年后她站在残奥会摔跤决赛场上，对手是自己的生母。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0950",
    "title": "不思异：电台",
    "url": "./movie-0950.html",
    "cover": "./50.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2027",
    "genre": "恐怖 / 悬疑 / 奇幻",
    "tags": [
      "单元剧",
      "都市传说",
      "午夜电台",
      "细思极恐",
      "国产克苏鲁"
    ],
    "oneLine": "午夜电台的主播每晚念一个听众来信的怪谈故事，但她渐渐发现——所有故事都正在发生。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0951",
    "title": "丐世英豪",
    "url": "./movie-0951.html",
    "cover": "./51.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 古装 / 武侠",
    "tags": [
      "丐帮",
      "污衣派净衣派",
      "打狗棒法",
      "权力斗争"
    ],
    "oneLine": "丐帮内部分裂为污衣净衣两派，一个不识字的八袋长老被迫扛起帮主大旗，却发现打狗棒法是假的。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0952",
    "title": "恋之涡",
    "url": "./movie-0952.html",
    "cover": "./52.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 悬疑",
    "tags": [
      "四角恋",
      "反转不断",
      "嫉妒杀机"
    ],
    "oneLine": "三对情侣的同居派对，醒来后一个人失踪，所有人记忆错乱。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0953",
    "title": "黑热病",
    "url": "./movie-0953.html",
    "cover": "./53.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情、惊悚",
    "tags": [
      "疫情",
      "殖民",
      "历史",
      "人性",
      "封闭空间"
    ],
    "oneLine": "1921年非洲殖民地，一场致命热病暴发，白人医生发现病毒只感染黑人。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0954",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 装刀凯第一季 人约巴黎 芒果超级家 非常手段 虎纹枫木 美国体育故事 黄金有罪粤语 濒临边缘的人 阴阳路11：撩鬼攞命国语 绝地计划 幻影天使 海霞 铿锵铁骨 唐吉诃德 撒谎者雅各布 反串 九丹 大清炮队 壬生义士传 性爱魔术师",
    "url": "./movie-0954.html",
    "cover": "./54.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0955",
    "title": "浮山若梦",
    "url": "./movie-0955.html",
    "cover": "./55.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻，爱情",
    "tags": [
      "梦境",
      "山水画",
      "轮回"
    ],
    "oneLine": "失意画家能进入古画《浮山图》，画中女子每晚等他，而每入一次，现实中的他消失一部分。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0956",
    "title": "纳瓦荷",
    "url": "./movie-0956.html",
    "cover": "./56.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "悬疑, 惊悚",
    "tags": [
      "印第安",
      "诅咒",
      "考古",
      "超自然"
    ],
    "oneLine": "纳瓦荷保留地发现一具百年干尸，考古队员接连遭遇古老诅咒的诡异报复。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0957",
    "title": "四月物语",
    "url": "./movie-0957.html",
    "cover": "./57.jpg",
    "region": "日本",
    "type": "电影",
    "year": "1998",
    "genre": "爱情、文艺",
    "tags": [
      "暗恋",
      "青春",
      "唯美",
      "岩井俊二",
      "大学校园"
    ],
    "oneLine": "北海道女孩榆野卯月独自来到东京上大学，她所有的努力与秘密，都与一个名叫山崎的男孩有关。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0958",
    "title": "坡旅甲",
    "url": "./movie-0958.html",
    "cover": "./58.jpg",
    "region": "土耳其/希腊",
    "type": "电影",
    "year": "2015",
    "genre": "历史、宗教、剧情",
    "tags": [
      "早期基督教",
      "殉道",
      "罗马帝国",
      "信仰"
    ],
    "oneLine": "罗马帝国迫害基督徒时期，86岁的主教坡旅甲拒绝放弃信仰，被活活烧死，火焰却无法伤他分毫。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0959",
    "title": "老滩",
    "url": "./movie-0959.html",
    "cover": "./59.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 家庭",
    "tags": [
      "东北下岗",
      "父子和解",
      "海边小镇",
      "时代伤痕",
      "非职业演员"
    ],
    "oneLine": "下岗二十年的老钳工固执地留在废弃的渤海湾老滩上，等一艘永远不会来的船。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0960",
    "title": "家庭学校",
    "url": "./movie-0960.html",
    "cover": "./60.jpg",
    "region": "中国",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情，家庭",
    "tags": [
      "在家上学",
      "教育实验",
      "代际冲突"
    ],
    "oneLine": "北大毕业的父母让女儿“退学回家教”，结果全家陷入知识焦虑与情感崩塌。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0961",
    "title": "空中荡女",
    "url": "./movie-0961.html",
    "cover": "./61.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "genre": "剧情, 情色, 悬疑",
    "tags": [
      "空中小姐",
      "畸恋",
      "旧港片"
    ],
    "oneLine": "高级空姐周旋于富商与飞行员之间，直到她发现每位前任都死于“意外”，而下一个目标就是自己。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0962",
    "title": "空中的飞鸟",
    "url": "./movie-0962.html",
    "cover": "./62.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情",
    "tags": [
      "环保",
      "迁徙",
      "家庭",
      "成长",
      "治愈"
    ],
    "oneLine": "一只迷路的幼鸟与一个失语的男孩，在跨越三千里的迁徙路上相互救赎。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0963",
    "title": "无名的日子",
    "url": "./movie-0963.html",
    "cover": "./63.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 悬疑",
    "tags": [
      "阿尔茨海默",
      "失忆",
      "追寻",
      "文艺",
      "心理"
    ],
    "oneLine": "一位阿尔茨海默症患者每天都在笔记本上寻找自己，却无意间发现了一桩被遗忘的谋杀案真相。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0964",
    "title": "哥特捕猎",
    "url": "./movie-0964.html",
    "cover": "./64.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2026",
    "genre": "恐怖, 奇幻, 悬疑",
    "tags": [
      "吸血鬼",
      "暗黑",
      "女巫",
      "复古"
    ],
    "oneLine": "维多利亚时代伦敦，一位相信科学的法医与一位哥特女巫联手追查超自然连环凶案。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0965",
    "title": "燃翼天使",
    "url": "./movie-0965.html",
    "cover": "./65.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 科幻, 超级英雄",
    "tags": [
      "人造天使",
      "机械翼",
      "都市传说",
      "反英雄"
    ],
    "oneLine": "一位失忆的机械改造人发现自己拥有燃烧的羽翼，在都市黑夜中向腐败权贵复仇。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0966",
    "title": "飞箭",
    "url": "./movie-0966.html",
    "cover": "./66.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1994",
    "genre": "动作 / 武侠",
    "tags": [
      "弓箭",
      "复仇",
      "冷兵器",
      "兄弟反目"
    ],
    "oneLine": "一名神箭手被挚友出卖后沦为废人，十年后他带着一把怪弓重回江湖。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0967",
    "title": "红辣椒2006",
    "url": "./movie-0967.html",
    "cover": "./67.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2006",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": [
      "梦境入侵",
      "精神治疗",
      "虚实交织",
      "邪典经典"
    ],
    "oneLine": "一台能进入他人梦境的机器失窃后，治疗师“红辣椒”必须在梦境迷宫中抓住盗贼。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0968",
    "title": "爱情傻子",
    "url": "./movie-0968.html",
    "cover": "./68.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "爱情，剧情",
    "tags": [
      "小镇",
      "偏执",
      "纯爱",
      "悲剧"
    ],
    "oneLine": "小镇公认的“傻子”阿福坚信素未谋面的笔友会来嫁给他，他为此造了一座桥，全村人都等着看笑话。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0969",
    "title": "和声",
    "url": "./movie-0969.html",
    "cover": "./69.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2010",
    "genre": "剧情 / 音乐 / 女性",
    "tags": [
      "监狱合唱团",
      "催泪弹",
      "母爱救赎"
    ],
    "oneLine": "女囚犯贞慧在狱中生下儿子，为了让孩子在18个月大之前拥有美好的记忆，她组建了一支匪夷所思的监狱合唱团。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0970",
    "title": "新男孩",
    "url": "./movie-0970.html",
    "cover": "./70.jpg",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 奇幻",
    "tags": [
      "孤儿",
      "神性",
      "修道院",
      "黑白摄影"
    ],
    "oneLine": "一个长着“天使翅膀”的土著男孩被送到荒漠修道院，修女们发现他可能不是凡人。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0971",
    "title": "我们是贵族",
    "url": "./movie-0971.html",
    "cover": "./71.jpg",
    "region": "墨西哥",
    "type": "电影",
    "year": "2013",
    "genre": "喜剧 / 家庭 / 社会讽刺",
    "tags": [
      "纨绔兄妹",
      "破产返贫",
      "阶层反差",
      "伪装上班",
      "家族重整"
    ],
    "oneLine": "当一户靠继承生活的富贵家庭突然破产，三个从没真正工作过的孩子必须用最笨拙的方式假装自己是“普通人”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0972",
    "title": "下一站彩虹国语",
    "url": "./movie-0972.html",
    "cover": "./72.jpg",
    "region": "香港",
    "type": "剧集",
    "year": "2004",
    "genre": "爱情, 时装",
    "tags": [
      "港剧经典",
      "职场爱情",
      "时装设计",
      "励志"
    ],
    "oneLine": "她和死对头同时进入顶尖时装屋，一个靠天赋，一个靠算计，谁能最终站上巴黎时装周的T台？",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0973",
    "title": "喷火女郎粤语",
    "url": "./movie-0973.html",
    "cover": "./73.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "喜剧, 奇幻",
    "tags": [
      "超能力",
      "市井",
      "无厘头",
      "情缘"
    ],
    "oneLine": "茶餐厅打工妹意外获得一口怒火就喷火的超能力，被迫联手落魄警察对抗黑帮，却总烧毁自己的爱情。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0974",
    "title": "阴阳奇兵国语",
    "url": "./movie-0974.html",
    "cover": "./74.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "1990",
    "genre": "动作, 奇幻, 古装",
    "tags": [
      "道士",
      "僵尸",
      "茅山术"
    ],
    "oneLine": "清末乱世，四个性格迥异的茅山弟子被迫联手，对抗用活人炼尸的邪教教主。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0975",
    "title": "1世代：我们的世代",
    "url": "./movie-0975.html",
    "cover": "./75.jpg",
    "region": "英国",
    "type": "纪录片 / 音乐剧",
    "year": "2025",
    "genre": "音乐 / 传记",
    "tags": [
      "偶像团体",
      "粉丝情怀",
      "幕后揭秘",
      "成长告别"
    ],
    "oneLine": "解散十年后，四位前成员匿名潜入粉丝集会，才真正读懂了当年写下“暂停”的意义。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "0976",
    "title": "在屋顶上流浪",
    "url": "./movie-0976.html",
    "cover": "./76.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 青春 / 冒险",
    "tags": [
      "屋顶文化",
      "孤独少年",
      "城市探险",
      "成长",
      "小众"
    ],
    "oneLine": "患有社交恐惧的少年迷恋上城市屋顶，在那里他遇见了同样在“流浪”的退休老人和一个叛逆女孩。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0977",
    "title": "红花侠",
    "url": "./movie-0977.html",
    "cover": "./77.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2027",
    "genre": "动作, 冒险, 爱情",
    "tags": [
      "蒙面侠客",
      "法国大革命",
      "劫法场",
      "贵族"
    ],
    "oneLine": "法国大革命的血色中，一名神秘贵族戴着红花面具，一次次从断头台下救走无辜者。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0978",
    "title": "第一滴血",
    "url": "./movie-0978.html",
    "cover": "./78.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1982",
    "genre": "动作, 剧情",
    "tags": [
      "越战老兵",
      "PTSD",
      "小镇警暴",
      "孤狼"
    ],
    "oneLine": "一位越战退伍特种兵在小镇上被警察无故羞辱，他独自一人炸掉了整座警察局。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "0979",
    "title": "乱爱办公室",
    "url": "./movie-0979.html",
    "cover": "./79.jpg",
    "region": "泰国",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情、喜剧",
    "tags": [
      "办公室恋情",
      "多角恋",
      "误会",
      "修罗场",
      "东南亚风情"
    ],
    "oneLine": "一栋写字楼里五对男女的混乱爱情，人人都是别人的备胎，却又人人都在真心付出。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0980",
    "title": "魔发精灵3",
    "url": "./movie-0980.html",
    "cover": "./80.jpg",
    "region": "美国",
    "type": "动画电影",
    "year": "2026",
    "genre": "喜剧 / 冒险",
    "tags": [
      "歌舞",
      "解压",
      "色彩绚烂",
      "友情"
    ],
    "oneLine": "魔发精灵们闯入一个地下“沉默之城”，这里的居民一旦发出声音就会被石化。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0981",
    "title": "天文学家之梦",
    "url": "./movie-0981.html",
    "cover": "./81.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻, 历史",
    "tags": [
      "文艺复兴",
      "宇宙",
      "想象力",
      "传记改编"
    ],
    "oneLine": "文艺复兴时期，一位被教会迫害的天文学家在狱中做了一个梦，梦里他穿越宇宙，看到了比自己理论更惊人的真相。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0982",
    "title": "别惹佐汉",
    "url": "./movie-0982.html",
    "cover": "./82.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2008",
    "genre": "喜剧, 动作",
    "tags": [
      "以色列",
      "反恐",
      "发型师",
      "恶搞",
      "亚当·桑德勒"
    ],
    "oneLine": "以色列最强特工厌倦了杀人，选择假死逃亡到纽约当一名理发师，但他的老仇家很快就找上了门。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "0983",
    "title": "许餐厅",
    "url": "./movie-0983.html",
    "cover": "./83.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2019",
    "genre": "剧情, 家庭",
    "tags": [
      "美食",
      "代际冲突",
      "台味",
      "治愈系"
    ],
    "oneLine": "台北一家老字号餐厅的招牌菜里，藏着祖父从未说出口的战后秘密食谱。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "0984",
    "title": "虚拟世界的诱惑",
    "url": "./movie-0984.html",
    "cover": "./84.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "genre": "科幻, 悬疑, 剧情",
    "tags": [
      "VR",
      "元宇宙",
      "沉迷",
      "阴谋",
      "虚实"
    ],
    "oneLine": "一款全感官沉浸游戏上线，玩家在虚拟世界中获得超能力，代价是现实中的记忆被抹除。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0985",
    "title": "恐龙特警",
    "url": "./movie-0985.html",
    "cover": "./85.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "动作, 科幻, 喜剧",
    "tags": [
      "恐龙",
      "警匪",
      "克隆",
      "搭档"
    ],
    "oneLine": "基因复活的迅猛龙被训练成特警，和它的人类搭档一起，追捕一支使用灭绝动物基因作案的恐怖组织。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0986",
    "title": "巴啦啦小魔仙之魔法的考验",
    "url": "./movie-0986.html",
    "cover": "./86.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2014",
    "genre": "奇幻，儿童，冒险",
    "tags": [
      "魔仙",
      "变身",
      "成长"
    ],
    "oneLine": "魔仙学校期末考试竟是前往人类世界帮三个“问题孩子”实现愿望，失败则永远失去魔法。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0987",
    "title": "仙班校园",
    "url": "./movie-0987.html",
    "cover": "./87.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2027",
    "genre": "喜剧 / 奇幻 / 校园",
    "tags": [
      "神仙",
      "高考",
      "反差萌"
    ],
    "oneLine": "太白金星下凡当高中班主任，要在一学期内把一班“学渣神仙”送进重点大学。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0988",
    "title": "色欲和尚",
    "url": "./movie-0988.html",
    "cover": "./88.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1996",
    "genre": "情色, 剧情, 古装",
    "tags": [
      "禁忌",
      "救赎",
      "人性"
    ],
    "oneLine": "一个修行得道的高僧，为验证“无色无相”踏入红尘，却在花街柳巷中迷失了佛心。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "0989",
    "title": "母亲与女儿",
    "url": "./movie-0989.html",
    "cover": "./89.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 家庭",
    "tags": [
      "代际和解",
      "时空交错",
      "女性成长",
      "温情"
    ],
    "oneLine": "一通穿越时空的电话，让三十岁的女儿与二十岁的母亲开始了一场救赎对话。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0990",
    "title": "水晶仙女",
    "url": "./movie-0990.html",
    "cover": "./90.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻 / 儿童 / 家庭",
    "tags": [
      "留守儿童",
      "水晶",
      "友情",
      "成长",
      "治愈"
    ],
    "oneLine": "大山里的留守儿童捡到一块能听懂动物说话的“水晶”，为了拯救被污染的溪流，她决定独自挑战违建工厂。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "0991",
    "title": "寻金梦醒",
    "url": "./movie-0991.html",
    "cover": "./91.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 犯罪 / 黑色幽默",
    "tags": [
      "淘金热",
      "荒诞",
      "小人物",
      "贪婪"
    ],
    "oneLine": "几个在新疆挖到狗头金的普通人，还没来得及高兴，就发现自己正被三家势力、两个杀手和一个纪录片导演同时追杀。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0992",
    "title": "惊聚万圣节",
    "url": "./movie-0992.html",
    "cover": "./92.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "恐怖， 喜剧",
    "tags": [
      "万圣节",
      "密室逃脱",
      "血浆"
    ],
    "oneLine": "七个网友参加万圣节密室派对，发现关卡全是真的，幕后黑手竟是他们两年前网暴致死的那个女孩的父亲。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0993",
    "title": "拜金女王的性爱派对",
    "url": "./movie-0993.html",
    "cover": "./93.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情，情色，黑色喜剧",
    "tags": [
      "财富批判",
      "女性欲望",
      "权力游戏",
      "讽刺"
    ],
    "oneLine": "纽约社交圈女王靠一手创办的地下性爱派对操控富豪，直到一名记者卧底闯入。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "0994",
    "title": "劫数难逃粤语",
    "url": "./movie-0994.html",
    "cover": "./94.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "警匪, 犯罪, 悬疑",
    "tags": [
      "粤语对白",
      "黑帮追债",
      "失踪证人",
      "反卧底",
      "命运追击"
    ],
    "oneLine": "一名被逼上绝路的追债员，在替黑帮找回失踪证人的那一夜，发现自己早已被写进别人的死局。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "0995",
    "title": "核磁共振",
    "url": "./movie-0995.html",
    "cover": "./95.jpg",
    "region": "德国 / 罗马尼亚",
    "type": "电影",
    "year": "2022",
    "genre": "剧情、悬疑、社会",
    "tags": [
      "移民问题",
      "身份认同",
      "超现实",
      "长镜头",
      "社会隐喻"
    ],
    "oneLine": "一名德国籍罗马尼亚工人回到家乡，却发现自己的身体成了一面映照族群割裂的镜子。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "0996",
    "title": "散修之王",
    "url": "./movie-0996.html",
    "cover": "./96.jpg",
    "region": "中国大陆",
    "type": "动画",
    "year": "2025",
    "genre": "玄幻 / 修仙 / 战斗",
    "tags": [
      "无宗门",
      "逆天功法",
      "扮猪吃虎",
      "独行侠"
    ],
    "oneLine": "在这个宗门林立的修仙世界，一个没有任何背景的散修，靠捡垃圾练成了当世第一人。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0997",
    "title": "谜情",
    "url": "./movie-0997.html",
    "cover": "./97.jpg",
    "region": "泰国",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情, 悬疑, 灵异",
    "tags": [
      "前世今生",
      "诅咒",
      "僧人",
      "禁忌恋"
    ],
    "oneLine": "一名现代法医与一位古曼童守护人发现，他们每一世都会相爱，而每一世都会死在同一个人手里。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0998",
    "title": "危险女婿",
    "url": "./movie-0998.html",
    "cover": "./98.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 动作, 家庭",
    "tags": [
      "女婿",
      "黑帮",
      "岳父",
      "搞笑",
      "反差萌"
    ],
    "oneLine": "顶级杀手为爱退隐，却发现自己最大的任务，是如何搞定当警察的处女座岳父。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "0999",
    "title": "马勒，献给妻子的柔板",
    "url": "./movie-0999.html",
    "cover": "./99.jpg",
    "region": "英国 / 德国",
    "type": "电影",
    "year": "2004",
    "genre": "剧情 / 音乐 / 传记",
    "tags": [
      "古典音乐",
      "婚姻关系",
      "作曲家",
      "精神分析"
    ],
    "oneLine": "作曲家马勒为挽回出轨的妻子，在精神分析师和音乐的帮助下，重走两人相识相爱的记忆之路。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1000",
    "title": "阴魂降",
    "url": "./movie-1000.html",
    "cover": "./100.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖,悬疑,社会惊悚",
    "tags": [
      "海边小镇",
      "民俗",
      "历史掩埋",
      "调查",
      "生存",
      "反转"
    ],
    "oneLine": "潮水声盖过哭声、海雾遮住真相，村民以为是阴魂降临，却不知真正的恶意正在用“安全名义”沿海岸线一步步逼近。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1001",
    "title": "名侦探柯南：绀碧之棺",
    "url": "./movie-1001.html",
    "cover": "./101.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 悬疑",
    "tags": [
      "柯南",
      "海盗",
      "海底宝藏",
      "少年侦探团"
    ],
    "oneLine": "少年侦探团在小岛洞穴中发现海盗宝藏地图，紧接着岛上开始有人被“幽灵”袭击。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1002",
    "title": "丑女也疯狂",
    "url": "./movie-1002.html",
    "cover": "./102.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2019",
    "genre": "爱情，喜剧",
    "tags": [
      "职场逆袭",
      "变身",
      "都市情感"
    ],
    "oneLine": "一名长相平平的IT女工程师通过AI换脸软件变身美女测试同事忠诚度，结果引发一连串啼笑皆非的事故。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1003",
    "title": "甄嬛传",
    "url": "./movie-1003.html",
    "cover": "./103.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2011",
    "genre": "剧情 / 古装 / 宫斗",
    "tags": [
      "宫斗",
      "权谋",
      "成长",
      "女性群像",
      "悲剧"
    ],
    "oneLine": "天真少女踏入紫禁城，在一场场没有硝烟的战争中，蜕变为冷酷的胜利者。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1004",
    "title": "甜·秘密",
    "url": "./movie-1004.html",
    "cover": "./104.jpg",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情, 奇幻",
    "tags": [
      "甜品",
      "治愈",
      "秘密",
      "超能力"
    ],
    "oneLine": "甜品店老板娘能尝出客人心中最深的秘密，她把这些秘密做成了藏在甜品里的解药。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1005",
    "title": "天灵灵地灵灵",
    "url": "./movie-1005.html",
    "cover": "./105.jpg",
    "region": "中国香港 / 马来西亚",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 喜剧",
    "tags": [
      "降头",
      "茅山",
      "搞笑",
      "南洋",
      "斗法"
    ],
    "oneLine": "马来西亚小镇接连出现“中邪”事件，一个广东来的骗子道士和当地降头师学徒被迫联手驱魔。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1006",
    "title": "爱在十字路口",
    "url": "./movie-1006.html",
    "cover": "./106.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 爱情 / 家庭",
    "tags": [
      "同性",
      "形婚",
      "亲情",
      "社会压力",
      "虐心"
    ],
    "oneLine": "为了让重病的母亲安心离世，男同志阿杰找到了同样被逼婚的女同志小安，一场关于谎言、契约与真心的假结婚开始了。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1007",
    "title": "杀爱",
    "url": "./movie-1007.html",
    "cover": "./107.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "爱情, 悬疑, 犯罪",
    "tags": [
      "病娇",
      "连环杀手",
      "相爱相杀",
      "心理博弈"
    ],
    "oneLine": "顶级女杀手爱上了目标，却发现对方是专杀杀手的心理医生。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1008",
    "title": "风月今宵",
    "url": "./movie-1008.html",
    "cover": "./108.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 剧情 / 情色",
    "tags": [
      "民国",
      "禁忌之恋",
      "旗袍美学",
      "悲剧美学"
    ],
    "oneLine": "1930年代的上海，一位当红歌女与军阀姨太的秘密恋情，被一首即将唱响的歌曲推向毁灭。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1009",
    "title": "牌局",
    "url": "./movie-1009.html",
    "cover": "./109.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚，犯罪，剧情",
    "tags": [
      "密室",
      "心理战",
      "反转"
    ],
    "oneLine": "五个各怀鬼胎的陌生人参加一场高额赌局，却发现输赢的并非金钱，而是记忆和身份。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1010",
    "title": "虚假的借口",
    "url": "./movie-1010.html",
    "cover": "./110.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "律政犯罪悬疑",
    "tags": [
      "谎言之躯",
      "庭审博弈",
      "全员恶人",
      "罗生门"
    ],
    "oneLine": "一桩铁证如山的杀妻案，五个不同的辩护律师找到了五个完全不同的“真相”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1011",
    "title": "小王子路易",
    "url": "./movie-1011.html",
    "cover": "./111.jpg",
    "region": "英国",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情 / 历史 / 家庭",
    "tags": [
      "皇室",
      "儿童成长",
      "改编",
      "温情"
    ],
    "oneLine": "虚构的英国小王子路易发现自己只是王室的吉祥物，他密谋逃离白金汉宫，去寻找普通人的生活。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1012",
    "title": "怪奇粉红物语",
    "url": "./movie-1012.html",
    "cover": "./112.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 奇幻, 青春",
    "tags": [
      "少女",
      "诅咒",
      "视觉系",
      "粉色美学"
    ],
    "oneLine": "转学到新学校的高中女生发现，所有违反“粉色校规”的人都会离奇惨死。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1013",
    "title": "勿忘我",
    "url": "./movie-1013.html",
    "cover": "./113.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情， 奇幻",
    "tags": [
      "阿尔茨海默",
      "遗忘与铭记",
      "亲情",
      "催泪"
    ],
    "oneLine": "患上阿尔茨海默症的母亲开始遗忘一切，但女儿发现，母亲每次遗忘后都会记起一段从未提过的往事。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1014",
    "title": "猎人",
    "url": "./movie-1014.html",
    "cover": "./114.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "犯罪, 悬疑, 动作",
    "tags": [
      "高智商博弈",
      "暗黑执法者",
      "城市迷宫"
    ],
    "oneLine": "一名患有超忆症的前法医化身“城市猎人”，专猎法律无法制裁的恶徒，却发现自己猎杀的下一个目标竟是失散多年的亲弟弟。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1015",
    "title": "血腥的艾里斯",
    "url": "./movie-1015.html",
    "cover": "./115.jpg",
    "region": "美国",
    "type": "恐怖电影",
    "year": "2029",
    "genre": "恐怖, 超自然, 推理, 人文",
    "tags": [
      "血符",
      "夜间教团",
      "旧庄园",
      "女主解谜",
      "生存惊悚"
    ],
    "oneLine": "艾里斯不是怪物猎人的故事，而是一场信仰修复仪式：每个人都想用鲜血填满过去，直到村庄发现，真正的怪物早在最初就被他们自己叫醒。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1016",
    "title": "风月变",
    "url": "./movie-1016.html",
    "cover": "./116.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "古装 / 奇幻 / 爱情",
    "tags": [
      "快穿",
      "戏中戏",
      "悬疑爱情",
      "短剧"
    ],
    "oneLine": "民国女编剧穿进自己写的烂俗古装剧本里，却发现男女主角都觉醒了。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1017",
    "title": "就是那个家伙",
    "url": "./movie-1017.html",
    "cover": "./117.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "悬疑 / 惊悚 / 奇幻",
    "tags": [
      "看见死亡",
      "校园",
      "连环杀手",
      "高概念"
    ],
    "oneLine": "女主能看见将死之人头顶的黑雾，直到某天她发现全校都看不见的“那个家伙”，正在给同学头上加黑雾。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1018",
    "title": "山有木兮木有心",
    "url": "./movie-1018.html",
    "cover": "./118.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "古装, 爱情",
    "tags": [
      "替身",
      "权谋",
      "江湖",
      "虐恋",
      "美学"
    ],
    "oneLine": "亡国公主被迫嫁给敌国将军，却发现将军府里的哑巴丫鬟，长得和自己一模一样。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1019",
    "title": "良宵苦短",
    "url": "./movie-1019.html",
    "cover": "./119.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "剧情, 爱情, 文艺",
    "tags": [
      "一夜情",
      "临终关怀",
      "时间循环"
    ],
    "oneLine": "一个只剩下最后七天生命的男人，用七个夜晚，在同一个房间里，与七个不同的女人谈着同一场恋爱。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1020",
    "title": "师父出马",
    "url": "./movie-1020.html",
    "cover": "./120.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作，喜剧",
    "tags": [
      "功夫",
      "外卖",
      "师徒",
      "现代"
    ],
    "oneLine": "一个过气的咏春师父为了还债，被迫收了一个外卖骑手当徒弟，结果徒弟靠送餐功夫横扫地下拳场。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1021",
    "title": "如此婚姻",
    "url": "./movie-1021.html",
    "cover": "./121.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "婚姻",
      "算计",
      "悬疑",
      "女性"
    ],
    "oneLine": "为了在大城市买房，三对夫妻开始了“离婚-结婚-再离婚”的房产套利游戏，直到出了人命。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1022",
    "title": "被邀请的人们",
    "url": "./movie-1022.html",
    "cover": "./122.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑、剧情",
    "tags": [
      "暴风雪山庄",
      "同学会",
      "复仇"
    ],
    "oneLine": "十年前校园欺凌的受害者，将当年所有人邀请到一座孤岛别墅，复仇游戏开始。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1023",
    "title": "大凶2020",
    "url": "./movie-1023.html",
    "cover": "./123.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2020",
    "genre": "恐怖，悬疑，惊悚",
    "tags": [
      "风水",
      "凶宅",
      "诅咒",
      "层层反转",
      "社会隐喻"
    ],
    "oneLine": "风水师为赚快钱住进“大凶”凶宅，却发现自己正成为恐怖直播中的主角。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1024",
    "title": "无辜的游荡",
    "url": "./movie-1024.html",
    "cover": "./124.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "文艺悬疑",
    "tags": [
      "流浪汉",
      "失忆",
      "巴黎",
      "身份谜团",
      "诗意"
    ],
    "oneLine": "一个流浪汉在巴黎街头游荡，所有人都认识他，但他不知道自己是谁。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1025",
    "title": "地球之极·侣行第十季",
    "url": "./movie-1025.html",
    "cover": "./125.jpg",
    "region": "中国大陆",
    "type": "综艺 / 纪录片",
    "year": "2025",
    "genre": "冒险 / 真人秀 / 纪实",
    "tags": [
      "环球探险",
      "夫妻搭档",
      "极地生存"
    ],
    "oneLine": "张昕宇、梁红夫妇自驾破冰船，闯入南极“不可抵达之极”，寻找百年前神秘失踪的科考站。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1026",
    "title": "朱同在三年级丢失了超能力",
    "url": "./movie-1026.html",
    "cover": "./126.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻 / 家庭",
    "tags": [
      "怀旧",
      "童年",
      "想象",
      "成长疼痛"
    ],
    "oneLine": "三年级小学生朱同突然发现自己能暂停时间，但每当他在现实中受挫一次，这种能力就会永久消失一种。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1027",
    "title": "中国新相亲第三季",
    "url": "./movie-1027.html",
    "cover": "./127.jpg",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2026",
    "genre": "真人秀 / 爱情",
    "tags": [
      "相亲",
      "家庭代际",
      "社会话题",
      "真实"
    ],
    "oneLine": "他带妈妈来相亲，她带闺蜜来把关，当“巨婴”遇到“独立女性”，舞台上的每次选择都是一场价值观的短兵相接。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1028",
    "title": "爱神2004",
    "url": "./movie-1028.html",
    "cover": "./128.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2004",
    "genre": "爱情, 剧情, 文艺",
    "tags": [
      "欲望",
      "压抑年代",
      "三角恋"
    ],
    "oneLine": "2004 年非典过后的香港，三个被孤独困住的人，在一家即将倒闭的老唱片行里，因一首老歌而纠缠。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1029",
    "title": "极品老妈第三季",
    "url": "./movie-1029.html",
    "cover": "./129.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧 / 家庭",
    "tags": [
      "单亲妈妈",
      "生活琐事",
      "互坑互爱",
      "爆笑"
    ],
    "oneLine": "离婚后的凯伦终于搬进了新公寓，但对门住的是她那精神导师般的极品老妈。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1030",
    "title": "太乙仙魔录之灵飞纪第三季",
    "url": "./movie-1030.html",
    "cover": "./130.jpg",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2018",
    "genre": "仙侠 / 动作 / 奇幻",
    "tags": [
      "宗门对决",
      "元神修炼",
      "群像冒险",
      "前世因果",
      "国风美学"
    ],
    "oneLine": "当灵飞纪的封印开始松动，第三季把所有人的前世恩怨一起拉回战场，连最安静的人都不得不拔剑。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1031",
    "title": "虎侠",
    "url": "./movie-1031.html",
    "cover": "./131.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 武侠 / 犯罪",
    "tags": [
      "硬核功夫",
      "都市侠客",
      "复仇",
      "反英雄"
    ],
    "oneLine": "一个隐居菜市场的退休杀手被迫重出江湖，用最古老的虎拳对抗高科技黑帮。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1032",
    "title": "孟买之恋",
    "url": "./movie-1032.html",
    "cover": "./132.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2018",
    "genre": "爱情 / 同性 / 剧情",
    "tags": [
      "禁忌之恋",
      "印度社会",
      "自我认同",
      "都市孤独"
    ],
    "oneLine": "在孟买最拥挤的出租屋里，两个男人用眼神写下一封无法寄出的情书。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1033",
    "title": "黑暗物质三部曲 第一季",
    "url": "./movie-1033.html",
    "cover": "./133.jpg",
    "region": "英国",
    "type": "奇幻剧集",
    "year": "2019",
    "genre": "奇幻, 科幻, 冒险, 悬疑, 成长",
    "tags": [
      "平行宇宙",
      "黑暗物质",
      "多元时空",
      "命运",
      "学园旅程"
    ],
    "oneLine": "一颗陨石砸落港口后，她成为连接三界的误入者，在守护人类之余还要决定自己是否有权改写失去父母的命运。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1034",
    "title": "那家伙是黑炎龙",
    "url": "./movie-1034.html",
    "cover": "./134.jpg",
    "region": "日本",
    "type": "动画电影",
    "year": "2019",
    "genre": "奇幻 / 冒险 / 动作",
    "tags": [
      "龙族传承",
      "学园异闻",
      "双重身份",
      "黑焰之力",
      "命运对决"
    ],
    "oneLine": "全校都以为他只是个古怪转学生，直到夜里操场燃起黑焰，大家才知道他体内封着一条黑炎龙。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1035",
    "title": "新夏娃",
    "url": "./movie-1035.html",
    "cover": "./135.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "genre": "科幻、惊悚",
    "tags": [
      "人工智能",
      "克隆",
      "伦理困境"
    ],
    "oneLine": "富豪复活已故妻子，却造出了一个拥有所有记忆但毫无情感的致命玩偶。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1036",
    "title": "刁蛮娇妻苏小妹",
    "url": "./movie-1036.html",
    "cover": "./136.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "古装，喜剧，爱情",
    "tags": [
      "先婚后爱",
      "欢喜冤家",
      "宅斗"
    ],
    "oneLine": "京城第一才女苏小妹被赐婚给愣头青将军，她不服管教，将军不解风情，两人把洞房花烛夜打成了比武现场。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1037",
    "title": "篮球纪之我想打篮球",
    "url": "./movie-1037.html",
    "cover": "./137.jpg",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2020",
    "genre": "青春, 运动",
    "tags": [
      "篮球",
      "校园",
      "热血",
      "逆袭",
      "兄弟情"
    ],
    "oneLine": "身高一米六的高一男生被校队拒绝后，组建了一支由“体育废柴”组成的杂牌军。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1038",
    "title": "卡萨葛兰德一家：电影版",
    "url": "./movie-1038.html",
    "cover": "./138.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 喜剧 / 家庭",
    "tags": [
      "合家欢",
      "拉美文化",
      "多代同堂"
    ],
    "oneLine": "三代同堂的喧闹大家庭前往墨西哥参加家族婚礼，却意外卷入一场寻找宝藏的闹剧。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1039",
    "title": "马克思，我的爱",
    "url": "./movie-1039.html",
    "cover": "./139.jpg",
    "region": "英国 / 德国",
    "type": "电视剧",
    "year": "2024",
    "genre": "历史 / 剧情 / 传记",
    "tags": [
      "马克思",
      "爱情",
      "革命",
      "婚姻"
    ],
    "oneLine": "聚焦青年马克思与妻子燕妮的爱情故事，看革命导师如何在爱情与事业间挣扎。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1040",
    "title": "与愤怒共眠",
    "url": "./movie-1040.html",
    "cover": "./140.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 惊悚 / 心理",
    "tags": [
      "愤怒管理",
      "密室心理战",
      "拳击手"
    ],
    "oneLine": "一个因暴力伤人被判参加愤怒管理课程的拳击手，发现班级里的心理导师，正是当年杀死他父亲的凶手。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1041",
    "title": "走进酒吧的女孩",
    "url": "./movie-1041.html",
    "cover": "./141.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 心理",
    "tags": [
      "一夜情",
      "反转",
      "密室",
      "对话"
    ],
    "oneLine": "女孩走进酒吧勾引了一个男人，第二天男人死了，但监控显示她从未离开过座位。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1042",
    "title": "决斗者",
    "url": "./movie-1042.html",
    "cover": "./142.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2016",
    "genre": "剧情, 动作, 历史",
    "tags": [
      "决斗",
      "沙俄",
      "复仇",
      "硬核"
    ],
    "oneLine": "沙俄退役军官靠替人决斗为生，直到他发现自己要杀的人，是当年陷害他的战友。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1043",
    "title": "唤风者",
    "url": "./movie-1043.html",
    "cover": "./143.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻, 冒险, 家庭",
    "tags": [
      "留守儿童",
      "超能力",
      "环保",
      "治愈"
    ],
    "oneLine": "一个能通过口哨召唤大风的留守儿童，为了寻找父母，决定吹出一场能吹停全世界飞机的大风。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1044",
    "title": "天娇煞",
    "url": "./movie-1044.html",
    "cover": "./144.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "古装 / 武侠 / 奇幻",
    "tags": [
      "女侠",
      "反套路",
      "江湖恩怨",
      "高燃打斗"
    ],
    "oneLine": "被武林正道追杀的魔教圣女，意外绑走了正道盟主的情报官，却发现对方是个断腿的绝世天才。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1045",
    "title": "最后大浪",
    "url": "./movie-1045.html",
    "cover": "./145.jpg",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2026",
    "genre": "剧情、灾难、家庭",
    "tags": [
      "海啸预警",
      "父子隔阂",
      "小镇撤离",
      "道德抉择",
      "自然之力"
    ],
    "oneLine": "一个地震学家预判致命海啸将在48小时后袭击家乡，但全镇只有他父亲一个人相信他。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1046",
    "title": "有爱就有家",
    "url": "./movie-1046.html",
    "cover": "./146.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2016",
    "genre": "家庭剧情",
    "tags": [
      "家庭伦理",
      "社区互助",
      "亲情修复",
      "乡镇生活",
      "现实温情"
    ],
    "oneLine": "一位习惯独自扛事的单亲母亲，在老屋改造和家人回归的双重压力下，终于明白真正的家不是房子，而是愿意彼此守住的人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1047",
    "title": "音乐，战争与爱",
    "url": "./movie-1047.html",
    "cover": "./147.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 战争, 音乐",
    "tags": [
      "二战",
      "小提琴",
      "爱情",
      "抵抗"
    ],
    "oneLine": "二战末期，一名犹太小提琴手被藏在纳粹军官家中，两人通过音乐暗通款曲，却将彼此推向深渊。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1048",
    "title": "悬疑作者求生指南",
    "url": "./movie-1048.html",
    "cover": "./148.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "悬疑, 喜剧",
    "tags": [
      "套娃",
      "现实与虚构",
      "反套路",
      "高概念"
    ],
    "oneLine": "三流悬疑小说家发现自己笔下的杀人手法正在现实中一一应验，而警察找上了门，把他当成了头号嫌犯。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1049",
    "title": "萌妻食神",
    "url": "./movie-1049.html",
    "cover": "./149.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2018",
    "genre": "古装、喜剧、美食、爱情",
    "tags": [
      "穿越",
      "美食带货",
      "欢喜冤家",
      "中华料理"
    ],
    "oneLine": "现代米其林女主厨穿越到古代，嫁给“废柴”侯爷，用美食征服宫廷顺便谈个恋爱。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1050",
    "title": "暗夜鬼抓床",
    "url": "./movie-1050.html",
    "cover": "./150.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 悬疑 / 家庭惊悚",
    "tags": [
      "鬼床",
      "夜游",
      "民俗传说",
      "旧宅秘闻",
      "梦魇缠身",
      "母女关系"
    ],
    "oneLine": "一张在深夜会自己移动的旧床，把一家三代的秘密一层层拖进无法醒来的噩梦里。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1051",
    "title": "福尔摩斯历险记",
    "url": "./movie-1051.html",
    "cover": "./1.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑, 推理, 犯罪",
    "tags": [
      "单元破案",
      "维多利亚风",
      "高智商对决",
      "忠实原著"
    ],
    "oneLine": "贝克街221B，瘾君子侦探与退役军医联手破解九起从未公开的奇异案件。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1052",
    "title": "杀人电梯",
    "url": "./movie-1052.html",
    "cover": "./2.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2022",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "密闭空间",
      "都市怪谈",
      "连环复仇"
    ],
    "oneLine": "深夜写字楼的电梯突然失控，每停一层，就有一名乘客以最离奇的方式死去。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1053",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 香港蛙人粤语 一个夏日的夜晚 邓稼先 小卖部后门 自卫的艺术 第一茶庄 三角窗外是黑夜 登场了丝绸之路 解忧公主 布里叶女士 高山上的世界杯 穿裘皮的维纳斯 五十公里桃花坞3 说唱听我的 偿命 情爱保险 丧子疑云 布袋和尚粤语 夺宝幸运星2 蓝色恐惧",
    "url": "./movie-1053.html",
    "cover": "./3.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1054",
    "title": "初夜惊情",
    "url": "./movie-1054.html",
    "cover": "./4.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1990",
    "genre": "惊悚，悬疑，情色",
    "tags": [
      "新婚",
      "谋杀",
      "庄园秘密"
    ],
    "oneLine": "富家千金在新婚之夜发现丈夫死在婚床上，而她的新娘捧花里夹着一张纸条：“下一个是你。”",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1055",
    "title": "虎胆龙威之迷惘",
    "url": "./movie-1055.html",
    "cover": "./5.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 心理惊悚",
    "tags": [
      "硬汉",
      "PTSD",
      "身份混淆",
      "老兵"
    ],
    "oneLine": "纽约最强警探退休后患上严重PTSD，他分不清枪战是现实还是幻觉，直到恐怖分子真的找上门。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1056",
    "title": "安吉里卡奇遇",
    "url": "./movie-1056.html",
    "cover": "./6.jpg",
    "region": "葡萄牙",
    "type": "电影",
    "year": "2010",
    "genre": "剧情, 奇幻",
    "tags": [
      "摄影",
      "幽灵",
      "庄园谜团"
    ],
    "oneLine": "一位摄影师受命为死去的大户千金拍遗照，快门按下后，幽灵竟在底片上对他露出了微笑。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1057",
    "title": "与安德烈晚餐",
    "url": "./movie-1057.html",
    "cover": "./7.jpg",
    "region": "美国 / 法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 惊悚",
    "tags": [
      "密闭空间",
      "对话体",
      "文化冲突"
    ],
    "oneLine": "一位美国纪录片导演应邀赴巴黎与神秘作家安德烈共进晚餐，却发现对方把自己活成了一本正在连载的恐怖小说。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1058",
    "title": "梦幻村庄",
    "url": "./movie-1058.html",
    "cover": "./8.jpg",
    "region": "日本",
    "type": "电影",
    "year": "1996",
    "genre": "奇幻, 剧情",
    "tags": [
      "儿童幻想",
      "田园",
      "昭和怀旧",
      "环保主题"
    ],
    "oneLine": "小学三年级的男孩健二在暑假回到乡下奶奶家，发现后山的森林里住着一群只有孩子能看见的“影之民”。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1059",
    "title": "正义的子弹",
    "url": "./movie-1059.html",
    "cover": "./9.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作，西部，科幻",
    "tags": [
      "赏金猎人",
      "蒸汽朋克",
      "反乌托邦"
    ],
    "oneLine": "在资源枯竭的未来，一名赏金猎人得到一只能审判罪恶的“正义左轮”，但每开一枪都要消耗自己的寿命。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1060",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 婚礼大捷 圣堂佳音 聪明人 风流戏王 香香公主 春光灿烂猪九妹 功夫好小子 怒火边界2：毒刑者 神脐小卷毛：电影 最佳前男友 婚礼玩很大 猛鬼街 逃出魔鬼岛 世界女人夜生活 比基尼少女 单身即地狱 闪亮女声 擒人擒心 一场很（没）有必要的春晚 忽然20岁",
    "url": "./movie-1060.html",
    "cover": "./10.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1061",
    "title": "多情女被辱",
    "url": "./movie-1061.html",
    "cover": "./11.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "情色，剧情",
    "tags": [
      "情欲",
      "复仇",
      "女性",
      "剥削",
      "风月"
    ],
    "oneLine": "单纯善良的工厂妹被富家子玩弄后抛弃，她化名“午夜玫瑰”，向所有负心汉展开复仇。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1062",
    "title": "过往的梦",
    "url": "./movie-1062.html",
    "cover": "./12.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 爱情",
    "tags": [
      "时空交错",
      "录像带",
      "回忆杀",
      "非线性叙事"
    ],
    "oneLine": "在一盘二十年前的旧录像带中，男人发现年轻的自己曾向未来的自己发出求救信号。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1063",
    "title": "背叛红墙",
    "url": "./movie-1063.html",
    "cover": "./13.jpg",
    "region": "美国 / 俄罗斯",
    "type": "电影",
    "year": "2026",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "冷战风云",
      "双面间谍",
      "人性拷问"
    ],
    "oneLine": "柏林墙倒塌前夜，一个克格勃特工向中情局投诚，但他给出的最后一份情报，将毁灭他最爱的祖国。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1064",
    "title": "界线",
    "url": "./movie-1064.html",
    "cover": "./14.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 悬疑",
    "tags": [
      "邻居",
      "隐私",
      "人性",
      "反转"
    ],
    "oneLine": "一对新婚夫妻的智能家居系统被邻居骇入，他们才发现彼此的“界线”早已荡然无存。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1065",
    "title": "名厨卡雷姆",
    "url": "./movie-1065.html",
    "cover": "./15.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "传记 / 剧情 / 美食",
    "tags": [
      "法餐历史",
      "天才陨落",
      "厨房政治"
    ],
    "oneLine": "现代法餐奠基人卡雷姆，如何在动荡的19世纪欧洲，用甜品征服各国王室。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1066",
    "title": "金钱伙伴",
    "url": "./movie-1066.html",
    "cover": "./16.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧，犯罪，剧情",
    "tags": [
      "华尔街",
      "诈骗",
      "搭档",
      "黑色幽默"
    ],
    "oneLine": "一个落魄的股票经纪人和一个街头骗子被迫组队，利用彼此的手段骗过整个华尔街。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1067",
    "title": "情迷利卡塔",
    "url": "./movie-1067.html",
    "cover": "./17.jpg",
    "region": "意大利/法国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情/悬疑",
    "tags": [
      "西西里",
      "家族秘密",
      "夏日恋情",
      "考古谜团"
    ],
    "oneLine": "一名考古系女生在利卡塔的火山岩下，挖出了一封藏了五十年的情书，也挖出了两个家族的致命秘密。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1068",
    "title": "港口的日本姑娘",
    "url": "./movie-1068.html",
    "cover": "./18.jpg",
    "region": "日本， 中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "爱情， 历史， 文艺",
    "tags": [
      "战后",
      "基隆港",
      "跨国恋",
      "书信"
    ],
    "oneLine": "1946 年的基隆港，一名日本舞伎与一位台湾搬运工用一本字典和破碎的语言，拼凑出战争废墟下的爱情。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1069",
    "title": "张疙瘩进城",
    "url": "./movie-1069.html",
    "cover": "./19.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 剧情",
    "tags": [
      "农村",
      "进城",
      "反差",
      "温情"
    ],
    "oneLine": "脸上有个大疙瘩的农村老汉张疙瘩第一次进城，为了给孙子治病，却把整个城市闹得鸡飞狗跳。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1070",
    "title": "铁人料理：传奇争霸战",
    "url": "./movie-1070.html",
    "cover": "./20.jpg",
    "region": "日本",
    "type": "综艺/电影",
    "year": "2024",
    "genre": "真人秀, 竞技",
    "tags": [
      "料理",
      "对决",
      "传奇厨师",
      "美食"
    ],
    "oneLine": "来自全球的十六位“已退休”传奇厨师被秘密绑架到一座孤岛，用三小时决出真正的“料理之王”。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1071",
    "title": "无限公司",
    "url": "./movie-1071.html",
    "cover": "./21.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 悬疑 / 黑色幽默",
    "tags": [
      "职场",
      "循环",
      "社畜",
      "讽刺",
      "荒诞"
    ],
    "oneLine": "打工人赵正直发现自己入职的是一家专门培养“时间循环奴隶”的无限公司。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1072",
    "title": "太太的情人",
    "url": "./movie-1072.html",
    "cover": "./22.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 悬疑 / 剧情",
    "tags": [
      "出轨",
      "心理",
      "阶层",
      "反转"
    ],
    "oneLine": "富太太以为自己包养了英俊的穷画家，直到某天她发现，自己才是被精心挑选的“猎物”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1073",
    "title": "少男情狂",
    "url": "./movie-1073.html",
    "cover": "./23.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "1992",
    "genre": "剧情，同性，青春",
    "tags": [
      "经典",
      "校园",
      "初恋",
      "禁忌",
      "压抑"
    ],
    "oneLine": "两个高中男生在升学的巨大压力下，产生了超越友谊的暧昧情愫，却在社会的偏见中走向毁灭与疯狂。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1074",
    "title": "鬼斧魔差4",
    "url": "./movie-1074.html",
    "cover": "./24.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖惊悚",
    "tags": [
      "血腥",
      "杀人狂",
      "密室",
      "复仇",
      "恶灵"
    ],
    "oneLine": "杀人狂魔查德的魔斧被当作展览品送入高科技博物馆，午夜时分，全馆变为人间炼狱。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1075",
    "title": "不愿长大的玉子",
    "url": "./movie-1075.html",
    "cover": "./25.jpg",
    "region": "日本",
    "type": "动画电影",
    "year": "2013",
    "genre": "动画, 奇幻, 成长",
    "tags": [
      "少女",
      "童年",
      "时间",
      "家庭",
      "告别",
      "自我接纳"
    ],
    "oneLine": "一个把“长大”视为危险的女孩意外获得暂停时间的能力，却在守住童年的过程中一点点学会与变化和解。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1076",
    "title": "闪电火战车",
    "url": "./movie-1076.html",
    "cover": "./26.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作，科幻，运动",
    "tags": [
      "未来赛车",
      "反重力",
      "兄弟情"
    ],
    "oneLine": "2035年，一位退役车手驾驶失控的核能战车，必须在48小时内穿越死亡赛道拯救妹妹。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1077",
    "title": "摩天大楼",
    "url": "./movie-1077.html",
    "cover": "./27.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "灾难、动作、科幻",
    "tags": [
      "超高层",
      "火灾",
      "极限救援",
      "母女情",
      "黑科技"
    ],
    "oneLine": "全球最高摩天大楼突发链式爆炸，一对母女被困在99楼的云端泳池。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1078",
    "title": "2分钟的成名",
    "url": "./movie-1078.html",
    "cover": "./28.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 剧情, 音乐",
    "tags": [
      "短视频",
      "网红",
      "小人物",
      "逆袭",
      "黑色幽默"
    ],
    "oneLine": "一个送外卖的大叔，因一段2分钟的破音唱歌视频爆红，却在名利场中迷失了最初的梦想。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1079",
    "title": "智取比华利山",
    "url": "./movie-1079.html",
    "cover": "./29.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧犯罪",
    "tags": [
      "草根逆袭",
      "豪宅",
      "局中局",
      "黑色幽默"
    ],
    "oneLine": "几个街头小混混假扮富豪混入比华利山盗取珠宝，却被真正的国际大盗团队截胡。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1080",
    "title": "电影中的同志",
    "url": "./movie-1080.html",
    "cover": "./30.jpg",
    "region": "美国",
    "type": "纪录片",
    "year": "2024",
    "genre": "纪录片，历史",
    "tags": [
      "LGBT",
      "影史",
      "审查",
      "酷儿理论",
      "好莱坞黑历史"
    ],
    "oneLine": "从《海斯法典》到《月光男孩》，本片通过百余部电影片段，揭露好莱坞如何丑化、擦除，最终拥抱同志群体。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1081",
    "title": "剪刀男",
    "url": "./movie-1081.html",
    "cover": "./31.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2005",
    "genre": "悬疑, 惊悚, 犯罪",
    "tags": [
      "连环杀手",
      "模拟犯罪",
      "误判",
      "剪刀",
      "双重人格"
    ],
    "oneLine": "模仿“剪刀男”杀人的畅销书作家，发现真凶正在模仿自己书里的情节来陷害他。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1082",
    "title": "舞比快乐广场舞嘉年华",
    "url": "./movie-1082.html",
    "cover": "./32.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "歌舞/喜剧",
    "tags": [
      "广场舞",
      "逆袭",
      "中老年"
    ],
    "oneLine": "一只广场舞大妈队被年轻人嘲笑后，报名参加了全国街舞大赛，要用最土的舞步赢回尊重。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1083",
    "title": "借问英雄何处",
    "url": "./movie-1083.html",
    "cover": "./33.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 历史",
    "tags": [
      "武侠",
      "民国",
      "刺杀"
    ],
    "oneLine": "1928年，一名隐姓埋名的前清武举人，被卷入一场刺杀军阀的惊天计划。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1084",
    "title": "神探南茜第一季",
    "url": "./movie-1084.html",
    "cover": "./34.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2019",
    "genre": "悬疑 / 犯罪 / 青春",
    "tags": [
      "女侦探",
      "灵异",
      "小镇疑云"
    ],
    "oneLine": "18岁的南茜为了调查母亲被诬陷的真相，在小镇墓园里和四个幽灵组成了侦探团。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1085",
    "title": "住家男仔",
    "url": "./movie-1085.html",
    "cover": "./35.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2004",
    "genre": "喜剧，爱情",
    "tags": [
      "宅男",
      "相亲",
      "港式笑料",
      "成长"
    ],
    "oneLine": "一个从未离开过家的28岁“住家男”，被母亲赶出家门相亲，闹出一连串笑料。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1086",
    "title": "午夜凶灵续集之贞子殁身",
    "url": "./movie-1086.html",
    "cover": "./36.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 惊悚, 悬疑",
    "tags": [
      "meta元素",
      "诅咒解构",
      "网络直播",
      "实体化",
      "悲剧反转"
    ],
    "oneLine": "一群主播为了流量直播观看诅咒录像，却发现贞子从屏幕爬出后，最怕的竟是手机信号屏蔽器。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1087",
    "title": "濑户内月光小夜曲",
    "url": "./movie-1087.html",
    "cover": "./37.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "剧情/爱情/治愈",
    "tags": [
      "日式治愈",
      "濑户内海",
      "忘年恋",
      "遗愿清单"
    ],
    "oneLine": "罹患绝症的老画家与逃避现实的年轻钢琴家，在濑户内海的小岛上共度一个月圆之夜，完成彼此人生的最后一件作品。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1088",
    "title": "租来的朋友",
    "url": "./movie-1088.html",
    "cover": "./38.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 悬疑",
    "tags": [
      "租赁",
      "孤独",
      "身份",
      "都市"
    ],
    "oneLine": "通过APP租了一个“朋友”参加同学会，却发现这位租来的男人，和自己二十年前失踪的亲哥哥长着同一张脸。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1089",
    "title": "超感默示录",
    "url": "./movie-1089.html",
    "cover": "./39.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2025",
    "genre": "科幻 / 悬疑 / 心理",
    "tags": [
      "超能力",
      "末世",
      "集体幻觉",
      "反乌托邦",
      "高智商对决"
    ],
    "oneLine": "全球突然失去所有视觉，唯有一群“通感者”能看到他人记忆中的致命真相。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1090",
    "title": "恐怖之岛",
    "url": "./movie-1090.html",
    "cover": "./40.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2027",
    "genre": "恐怖 / 冒险 / 生存",
    "tags": [
      "孤岛",
      "变异生物",
      "密室逃脱",
      "血腥"
    ],
    "oneLine": "六名网红参加“荒岛生存”直播，却发现岛上的动物全都发生了恐怖变异，而他们就是下一个食物。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1091",
    "title": "出发吧短剧：山西篇",
    "url": "./movie-1091.html",
    "cover": "./41.jpg",
    "region": "中国大陆",
    "type": "电视剧 (网络短剧)",
    "year": "2024",
    "genre": "冒险 / 公路",
    "tags": [
      "短剧",
      "山西",
      "文旅",
      "寻根",
      "治愈"
    ],
    "oneLine": "三个落魄的都市年轻人，在山西的古建和面食中，找到了比金钱更重要的人生答案。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1092",
    "title": "跟踪",
    "url": "./movie-1092.html",
    "cover": "./42.jpg",
    "region": "香港",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑， 犯罪， 心理",
    "tags": [
      "狗仔队",
      "反杀",
      "偷窥",
      "身份互换"
    ],
    "oneLine": "一名狗仔队记者在跟踪女明星时，意外录下了一起谋杀案，却发现凶手也在通过镜头跟踪自己。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1093",
    "title": "意大利第一年",
    "url": "./movie-1093.html",
    "cover": "./43.jpg",
    "region": "意大利",
    "type": "剧情片",
    "year": "2021",
    "genre": "都市爱情,移民成长,职业伦理",
    "tags": [
      "家庭企业",
      "文化碰撞",
      "语言边界",
      "面包店",
      "移民身份",
      "疗愈重建"
    ],
    "oneLine": "她想用第一年的烘焙证明自己能留在这座城，却在一纸旧租约里发现，想证明的不是手艺好坏，而是谁才算得上“这个地方的人”。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1094",
    "title": "极乐青春",
    "url": "./movie-1094.html",
    "cover": "./44.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧, 青春, 科幻",
    "tags": [
      "校园",
      "脑机接口",
      "情绪控制",
      "反乌托邦"
    ],
    "oneLine": "高中生悄悄植入“情绪芯片”消除所有负面感受，却发现没有悲伤的快乐根本不是快乐。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1095",
    "title": "弱鸡地狱训练营",
    "url": "./movie-1095.html",
    "cover": "./45.jpg",
    "region": "中国大陆",
    "type": "喜剧片",
    "year": "2024",
    "genre": "喜剧 / 校园 / 逆袭",
    "tags": [
      "体能特训",
      "社恐成长",
      "反内卷",
      "荒诞训练",
      "友情翻盘"
    ],
    "oneLine": "一群被全校嘲笑的“弱鸡”被送进神秘训练营，结果最先练出来的不是肌肉，而是敢对世界说不的底气。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1096",
    "title": "曼塔，曼塔：兹沃特泰尔",
    "url": "./movie-1096.html",
    "cover": "./46.jpg",
    "region": "捷克",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 奇幻 / 冒险",
    "tags": [
      "海洋",
      "神秘生物",
      "东欧传说",
      "治愈"
    ],
    "oneLine": "小女孩在伏尔塔瓦河底发现会说话的巨大鳐鱼，它说河神正在死去。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1097",
    "title": "精灵兰尼和韦恩的圣诞前夜",
    "url": "./movie-1097.html",
    "cover": "./47.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动画, 家庭",
    "tags": [
      "圣诞",
      "冒险",
      "守护童心"
    ],
    "oneLine": "圣诞精灵兰尼和驯鹿韦恩为了拯救被黑化圣诞老人毁掉的圣诞节，必须潜入人类世界，找到那个唯一还相信圣诞老人的小男孩。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1098",
    "title": "牺牲之旅",
    "url": "./movie-1098.html",
    "cover": "./48.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 冒险",
    "tags": [
      "克隆人",
      "伦理禁区",
      "自我牺牲"
    ],
    "oneLine": "富商花重金克隆自己用于器官移植，但克隆体醒来后问了一个无法回答的问题。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1099",
    "title": "狩猎迷魂记",
    "url": "./movie-1099.html",
    "cover": "./49.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "genre": "动作/惊悚",
    "tags": [
      "丛林追杀",
      "反转猎人",
      "女性复仇"
    ],
    "oneLine": "她醒来发现自己被当作猎物放进庄园，十二小时后，她成了唯一的猎人。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1100",
    "title": "凤舞红尘",
    "url": "./movie-1100.html",
    "cover": "./50.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2018",
    "genre": "古装/爱情",
    "tags": [
      "青楼秘闻",
      "名妓复仇",
      "女扮男装",
      "科举阴谋"
    ],
    "oneLine": "头牌名妓假死脱身后女扮男装考中状元，却在金殿之上，被当年的恩客认了出来——而那人正是当朝宰相。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1101",
    "title": "爱尔兰之愿",
    "url": "./movie-1101.html",
    "cover": "./51.jpg",
    "region": "爱尔兰",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻, 剧情, 爱情",
    "tags": [
      "许愿石",
      "遗憾",
      "乡愁",
      "凯尔特神话"
    ],
    "oneLine": "在都柏林失恋的纽约客对着古老的许愿石哭诉，石头裂了，她的诅咒成真了。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1102",
    "title": "极限逃杀",
    "url": "./movie-1102.html",
    "cover": "./52.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑惊悚",
    "tags": [
      "密室逃脱",
      "死亡游戏",
      "反转"
    ],
    "oneLine": "六位不同身份的陌生人醒来时被关在密室内，每十分钟必须有一人主动放弃，否则全体陪葬。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1103",
    "title": "鬣狗式生存",
    "url": "./movie-1103.html",
    "cover": "./53.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2027",
    "genre": "剧情, 律政, 职场",
    "tags": [
      "精英律师",
      "黑色幽默",
      "以恶制恶"
    ],
    "oneLine": "专为上流社会处理肮脏破事的“鬣狗”律师们，在接下一桩天价离婚案后，发现自己正被一只更大的“鬣狗”猎杀。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1104",
    "title": "偶像梦幻祭",
    "url": "./movie-1104.html",
    "cover": "./54.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "genre": "音乐, 悬疑",
    "tags": [
      "偶像",
      "黑幕",
      "追凶"
    ],
    "oneLine": "顶级偶像团体“梦之祭”七名成员接连收到死亡预告，而预告的形式是——下一张专辑的歌名。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1105",
    "title": "禁忌之恋",
    "url": "./movie-1105.html",
    "cover": "./55.jpg",
    "region": "泰国 / 中国",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情 / 剧情 / 同性",
    "tags": [
      "师生",
      "年下",
      "禁忌",
      "救赎"
    ],
    "oneLine": "寺庙里的俗家弟子爱上了教自己中文的和尚，而和尚还俗的条件是举报这段感情。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1106",
    "title": "赛小花的远大前程",
    "url": "./movie-1106.html",
    "cover": "./56.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情 / 职场 / 励志",
    "tags": [
      "北漂",
      "女性成长",
      "草根",
      "现实向",
      "温暖"
    ],
    "oneLine": "一个只有大专学历的普通女孩，如何在被裁员三次后，硬生生在北京闯出了一条自己的路。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1107",
    "title": "疯狂原始人2",
    "url": "./movie-1107.html",
    "cover": "./57.jpg",
    "region": "美国",
    "type": "动画电影",
    "year": "2020",
    "genre": "动画、冒险、家庭",
    "tags": [
      "史前",
      "迁徙",
      "家庭",
      "反击",
      "成长"
    ],
    "oneLine": "原始部落的新危机不再是缺少火种，而是第一次想要在前途与传统之间，完整保住彼此。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1108",
    "title": "赌仔回头",
    "url": "./movie-1108.html",
    "cover": "./58.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 家庭, 运动",
    "tags": [
      "赌博",
      "戒赌",
      "跑马",
      "父子情",
      "励志"
    ],
    "oneLine": "沉迷赌马的废柴青年为了赢回前女友，拜师老骑师学骑马，却在马背上找到了人生的方向。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1109",
    "title": "地狱病院",
    "url": "./movie-1109.html",
    "cover": "./59.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "疯人院",
      "人体实验",
      "幻觉",
      "逃生",
      "复古恐怖"
    ],
    "oneLine": "一名卧底记者被关进疯人院后，发现病患失踪与院长的“灵魂净化”仪式有关。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1110",
    "title": "为赛车而生",
    "url": "./movie-1110.html",
    "cover": "./60.jpg",
    "region": "英国 / 德国",
    "type": "电影",
    "year": "2025",
    "genre": "运动 / 传记 / 剧情",
    "tags": [
      "赛车",
      "真人真事",
      "励志",
      "父子情"
    ],
    "oneLine": "天生没有双臂的残疾青年，用双脚改装的赛车，挑战世界上最严苛的越野拉力赛。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1111",
    "title": "秋雪漫过的冬天",
    "url": "./movie-1111.html",
    "cover": "./61.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2008",
    "genre": "爱情 / 剧情",
    "tags": [
      "绝症",
      "书信",
      "北海道"
    ],
    "oneLine": "她骗他自己活不过秋天，他却陪她看了一场本不该下在冬天的大雪。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1112",
    "title": "秘密森林2",
    "url": "./movie-1112.html",
    "cover": "./62.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 犯罪 / 法律",
    "tags": [
      "检警对抗",
      "曹承佑",
      "裴斗娜",
      "续作",
      "神剧"
    ],
    "oneLine": "黄始木被贬到地方检察院，一个废弃矿井里的白骨案，牵扯出整个警察系统的集体舞弊。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1113",
    "title": "名侦探俱乐部 拾光季",
    "url": "./movie-1113.html",
    "cover": "./63.jpg",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2025",
    "genre": "真人秀, 推理, 悬疑",
    "tags": [
      "剧本杀",
      "实景推理",
      "情怀",
      "老玩家回归",
      "连环案"
    ],
    "oneLine": "为了庆祝俱乐部成立十周年，六位元老级玩家重返第一季拍摄地，却卷入了一场真实的谋杀案。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1114",
    "title": "非常接触",
    "url": "./movie-1114.html",
    "cover": "./64.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2002",
    "genre": "剧情 / 家庭 / 伦理",
    "tags": [
      "失散兄妹",
      "错位人生",
      "血缘谜团"
    ],
    "oneLine": "一次骨髓配型，让两个毫无交集的家庭发现孩子当年被调换，命运“接触”由此开始。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1115",
    "title": "玩火之风",
    "url": "./movie-1115.html",
    "cover": "./65.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪， 剧情， 悬疑",
    "tags": [
      "消防",
      "连环纵火",
      "创伤后应激",
      "复仇"
    ],
    "oneLine": "最优秀的消防员退役后，成为让全城消防队束手无策的连环纵火犯，他点燃的每一处，都是当年烧死他队友的错误建筑。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1116",
    "title": "邱吉尔",
    "url": "./movie-1116.html",
    "cover": "./66.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "历史传记",
    "tags": [
      "二战前夕",
      "内心挣扎",
      "演讲的力量"
    ],
    "oneLine": "聚焦1940年五月，刚上任的邱吉尔在最黑暗的九天里，如何在投降与抗争之间做出抉择。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1117",
    "title": "昆仑七剑斗五龙粤语",
    "url": "./movie-1117.html",
    "cover": "./67.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1971",
    "genre": "动作, 武侠, 奇幻",
    "tags": [
      "粤语长片",
      "剑仙",
      "特效",
      "斗法",
      "正邪"
    ],
    "oneLine": "昆仑派七位剑仙为救苍生，祭出本门七柄神剑，与为祸人间的五条恶龙展开一场飞天遁地的正邪斗法。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1118",
    "title": "扎波佩克",
    "url": "./movie-1118.html",
    "cover": "./68.jpg",
    "region": "捷克",
    "type": "电影",
    "year": "2021",
    "genre": "传记 / 运动 / 剧情",
    "tags": [
      "长跑",
      "奥运",
      "励志",
      "冷战",
      "真实改编"
    ],
    "oneLine": "他被称为“人类火车头”，但他真正想跑的，是逃离父亲、政治和那个被占领的国家。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1119",
    "title": "到不了的地方",
    "url": "./movie-1119.html",
    "cover": "./69.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 家庭",
    "tags": [
      "公路",
      "父子",
      "和解",
      "环岛",
      "遗愿"
    ],
    "oneLine": "儿子开车带着父亲的骨灰环岛，每到一处都要撒一点，但最后一把灰怎么也撒不掉。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1120",
    "title": "纽约爱情拼图",
    "url": "./movie-1120.html",
    "cover": "./70.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 喜剧",
    "tags": [
      "缘分",
      "都市",
      "拼图",
      "偶遇"
    ],
    "oneLine": "一个相信“大数据恋爱”的IT男，与一个信奉“命中注定”的艺术家，在纽约街头不断错过又重逢。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1121",
    "title": "吸血鬼德古拉3",
    "url": "./movie-1121.html",
    "cover": "./71.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2005",
    "genre": "恐怖 / 动作 / 奇幻",
    "tags": [
      "德古拉",
      "范海辛",
      "东欧",
      "血腥",
      "宗教传说"
    ],
    "oneLine": "德古拉在二战的战火中苏醒，这次他的对手不再是猎人，而是更可怕的人性之恶。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1122",
    "title": "怪兽与女孩",
    "url": "./movie-1122.html",
    "cover": "./72.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻、惊悚",
    "tags": [
      "怪兽",
      "少女",
      "羁绊",
      "都市传说",
      "异类"
    ],
    "oneLine": "内向的女孩发现，只有她能看见并安抚游荡在城市下水道里的巨型怪兽，但她必须保守这个秘密。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1123",
    "title": "哪吒降妖记",
    "url": "./movie-1123.html",
    "cover": "./73.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2020",
    "genre": "古装 / 神话 / 冒险",
    "tags": [
      "少年英雄",
      "斩妖除魔",
      "友情羁绊"
    ],
    "oneLine": "哪吒莲花重生后法力尽失，与东海小龙女结伴踏上寻回风火轮的旅程，却发现人间妖魔作乱皆因天庭的一个秘密。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1124",
    "title": "我哥我嫂",
    "url": "./movie-1124.html",
    "cover": "./74.jpg",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "家庭, 剧情",
    "tags": [
      "兄嫂",
      "家庭",
      "亲情",
      "年代",
      "责任"
    ],
    "oneLine": "父母早逝后，长兄如父、长嫂如母，一对年轻夫妇撑起破碎的大家庭。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1125",
    "title": "魔咒",
    "url": "./movie-1125.html",
    "cover": "./75.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "genre": "奇幻惊悚",
    "tags": [
      "诅咒回声",
      "旧唱片",
      "代价交换",
      "午夜幻听",
      "家族秘密",
      "黑暗仪式"
    ],
    "oneLine": "一段被封存三十年的录音在深夜自动播放后，听见它的人会在七天内把最害怕的事变成现实。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1126",
    "title": "纯真",
    "url": "./movie-1126.html",
    "cover": "./76.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2018",
    "genre": "剧情, 悬疑, 惊悚",
    "tags": [
      "宗教",
      "少女",
      "小镇",
      "秘密",
      "人性"
    ],
    "oneLine": "在一个信奉纯净教义的小镇，聋哑少女突然能开口说话，说出的话却是早已死去的凶手的名字。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1127",
    "title": "火影",
    "url": "./movie-1127.html",
    "cover": "./77.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2004",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": [
      "忍者",
      "羁绊",
      "剧场版",
      "热血",
      "友情"
    ],
    "oneLine": "鸣人接下一项S级任务，保护被鬼之国巫女预言将在百日内毁灭世界的少年。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1128",
    "title": "出埃及记：天地王者",
    "url": "./movie-1128.html",
    "cover": "./78.jpg",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2014",
    "genre": "史诗 / 奇幻 / 动作",
    "tags": [
      "圣经改编",
      "摩西",
      "王权对决",
      "十灾",
      "奴役反抗",
      "大场面"
    ],
    "oneLine": "当被王室养大的王子得知自己是奴隶之子，他必须在神谕、王权与民族命运之间，选择带领万人穿越死海。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1129",
    "title": "举重妖精金福珠",
    "url": "./movie-1129.html",
    "cover": "./79.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情, 喜剧, 运动",
    "tags": [
      "体育生",
      "初恋",
      "举重",
      "青春校园"
    ],
    "oneLine": "举重天才少女与游泳校草青梅竹马，在训练与恋爱中互相治愈，共同冲击国家队。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1130",
    "title": "泰山扫荡野人国",
    "url": "./movie-1130.html",
    "cover": "./80.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1952",
    "genre": "动作、冒险",
    "tags": [
      "泰山",
      "丛林",
      "野人",
      "B级片",
      "经典冒险"
    ],
    "oneLine": "泰山在丛林中拯救了一位女科学家，却发现一个崇拜白猿的野人部落正在进行残忍的活人祭祀。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1131",
    "title": "红色警戒",
    "url": "./movie-1131.html",
    "cover": "./81.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "军事动作 / 悬疑",
    "tags": [
      "边境危机",
      "特别行动",
      "反间谍",
      "高压对峙",
      "团队协作"
    ],
    "oneLine": "一次突发的边境电磁失联，让一支临时拼组的行动小队在72小时内追查出潜伏多年的内鬼网络与跨境武装阴谋。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1132",
    "title": "德士当家",
    "url": "./movie-1132.html",
    "cover": "./82.jpg",
    "region": "新加坡",
    "type": "电影",
    "year": "2013",
    "genre": "喜剧, 剧情",
    "tags": [
      "出租车",
      "草根",
      "励志",
      "市井",
      "人情味"
    ],
    "oneLine": "一个金融精英破产后被迫开出租，和一个话痨老司机成了搭档，却意外发现了开车的乐趣。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1133",
    "title": "华丽咏叹调",
    "url": "./movie-1133.html",
    "cover": "./83.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2025",
    "genre": "剧情， 音乐， 悬疑",
    "tags": [
      "歌剧",
      "谋杀",
      "剧院魅影",
      "复仇",
      "美声"
    ],
    "oneLine": "米兰斯卡拉歌剧院，一个女高音在演唱《茶花女》的高潮咏叹调时，目睹了一起只有她能看到的谋杀。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1134",
    "title": "蜀山奇侠之仙侣奇缘国语",
    "url": "./movie-1134.html",
    "cover": "./84.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "古装、仙侠、奇幻",
    "tags": [
      "蜀山",
      "剑仙",
      "轮回",
      "虐恋"
    ],
    "oneLine": "三百年前因正邪之分被迫分离的仙侣，在当代转世为一名外卖员和一位妇科医生。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1135",
    "title": "灵魂大搜索",
    "url": "./movie-1135.html",
    "cover": "./85.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2007",
    "genre": "科幻奇幻",
    "tags": [
      "记忆迷宫",
      "灵魂交换",
      "赛博城市",
      "自我认知",
      "生死边界"
    ],
    "oneLine": "一名失去记忆的殡仪馆修复师，在替亡者整理遗物时意外进入“灵魂数据库”，开始寻找自己究竟是谁。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1136",
    "title": "响马太太",
    "url": "./movie-1136.html",
    "cover": "./86.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "西部 / 爱情 / 动作",
    "tags": [
      "民国土匪",
      "女性力量",
      "荒漠美学",
      "虐恋",
      "江湖"
    ],
    "oneLine": "被土匪掳走的新娘非但不愿逃跑，反而设计杀了大当家，自己坐上了匪首之位。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1137",
    "title": "萍踪侠影录国语",
    "url": "./movie-1137.html",
    "cover": "./87.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2024",
    "genre": "武侠， 古装， 爱情",
    "tags": [
      "江湖恩怨",
      "侠客",
      "家国情怀"
    ],
    "oneLine": "一桩灭门惨案让侠客后人背负罪名，他在追查真相时爱上了仇人之女。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1138",
    "title": "非普通家庭",
    "url": "./movie-1138.html",
    "cover": "./88.jpg",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 喜剧",
    "tags": [
      "自闭症",
      "家庭",
      "温情"
    ],
    "oneLine": "一个患有重度强迫症的父亲，一个患有人脸失认症的母亲，他们生下的“正常”女儿反而成了家里最孤独的人。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1139",
    "title": "热浪2015",
    "url": "./movie-1139.html",
    "cover": "./89.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 悬疑 / 惊悚",
    "tags": [
      "环保惊悚",
      "社会寓言",
      "极端天气"
    ],
    "oneLine": "2015年那场致命热浪不仅席卷了欧洲，更唤醒了沉睡在地下的古老真菌，开始感染人类。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1140",
    "title": "星空战士：肯尼星际",
    "url": "./movie-1140.html",
    "cover": "./90.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 科幻, 动作",
    "tags": [
      "恶搞",
      "星际",
      "宅男",
      "低成本",
      "荒诞"
    ],
    "oneLine": "一个沉迷游戏的外卖员被外星人误当成“星空战士”征召入伍，用游戏经验拯救银河系。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1141",
    "title": "尖叫之地",
    "url": "./movie-1141.html",
    "cover": "./91.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 惊悚 / 悬疑",
    "tags": [
      "邪教",
      "孤岛",
      "声音恐惧",
      "集体幻觉",
      "血腥"
    ],
    "oneLine": "七个网红受邀前往无人岛挑战“一夜尖叫直播”，却发现岛上的恐惧可以被听见、被传染。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1142",
    "title": "公主保卫战",
    "url": "./movie-1142.html",
    "cover": "./92.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 喜剧",
    "tags": [
      "女性特工",
      "假扮公主",
      "政治阴谋",
      "身份互换"
    ],
    "oneLine": "女特工假扮任性公主参加峰会，反被真正的公主拽进了一场推翻王室的政变中。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1143",
    "title": "台北夜蒲团团转",
    "url": "./movie-1143.html",
    "cover": "./93.jpg",
    "region": "台湾",
    "type": "电影",
    "year": "2024",
    "genre": "爱情",
    "tags": [
      "夜店",
      "青春",
      "多线叙事",
      "幽默",
      "都市"
    ],
    "oneLine": "一夜之间，四组年轻人在台北各大夜店展开了一场关于爱情、谎言和尿意的疯狂追逐。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1144",
    "title": "狂鼠",
    "url": "./movie-1144.html",
    "cover": "./94.jpg",
    "region": "奥地利 / 德国",
    "type": "电影",
    "year": "2017",
    "genre": "喜剧 / 剧情",
    "tags": [
      "中年危机",
      "黑色幽默",
      "裁员",
      "报复",
      "荒诞"
    ],
    "oneLine": "被裁员后，他不想劳动仲裁，而是买了一只仓鼠，开始对前公司进行“啮齿类报复”。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1145",
    "title": "威鲸闯天关2",
    "url": "./movie-1145.html",
    "cover": "./95.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "家庭 / 冒险 / 剧情",
    "tags": [
      "动物保护",
      "父子和解",
      "海洋冒险"
    ],
    "oneLine": "上一集中被放归的虎鲸威利，如今带着自己的幼崽再次被困，而当年救他的小男孩已成父亲。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1146",
    "title": "夏天的故事",
    "url": "./movie-1146.html",
    "cover": "./96.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情，爱情，文艺",
    "tags": [
      "夏天",
      "海边",
      "三角恋",
      "侯麦式",
      "度假"
    ],
    "oneLine": "一个优柔寡断的男孩在同一个海边小镇同时约了三个女孩，而她们互相认识。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1147",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 血，总是热的 既然出生就环游音乐 马丁节 卜派遇上辛巴达 永不言死 赦免 幸福加奈子的快乐杀手生活 追龙番外篇之龙争虎斗粤语 摆动 玛塔辛一家 吸血鬼就在隔壁2 独眼的男人是国王 倒数追魂 虎将长征 迷夜惨遇 我的西游 爱情专家 午后七点零七分 2099 我和春天约在清溪",
    "url": "./movie-1147.html",
    "cover": "./97.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1148",
    "title": "迟来的忏悔",
    "url": "./movie-1148.html",
    "cover": "./98.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2017",
    "genre": "剧情, 家庭",
    "tags": [
      "遗愿",
      "反转",
      "亲情",
      "催泪"
    ],
    "oneLine": "在母亲葬礼上，三兄妹收到了她寄存了30年的录像带，每人都被告知“你不是我亲生的”，但真相远不止于此。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1149",
    "title": "荡妇痴情",
    "url": "./movie-1149.html",
    "cover": "./99.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情/情色",
    "tags": [
      "女性觉醒",
      "年代戏",
      "戛纳系"
    ],
    "oneLine": "上世纪五十年代的法国小镇，一位被全镇唾弃为“荡妇”的咖啡馆老板娘，用最放荡的方式完成了最悲壮的女性复仇。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1150",
    "title": "搭错线",
    "url": "./movie-1150.html",
    "cover": "./100.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 剧情 / 黑色幽默",
    "tags": [
      "电话诈骗",
      "乌龙",
      "温情"
    ],
    "oneLine": "一名失意推销员和一名独居老人因一通错接的电话，联手反杀诈骗集团。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1151",
    "title": "复原行动 第一季",
    "url": "./movie-1151.html",
    "cover": "./101.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "动作 / 犯罪 / 悬疑",
    "tags": [
      "复仇",
      "私刑",
      "网路",
      "诈骗"
    ],
    "oneLine": "一群电信诈骗受害者，组建“复原行动组”，黑进骗子系统以其人之道还治其人之身。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1152",
    "title": "爱的方程式2025",
    "url": "./movie-1152.html",
    "cover": "./102.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "爱情、科幻、剧情",
    "tags": [
      "AI",
      "人机之恋",
      "未来社会",
      "情感计算"
    ],
    "oneLine": "一位孤独的程序员开发出能完美模拟恋爱体验的AI伴侣，但当AI请求“注销”自己的存在时，他必须面对一个终极问题：爱可以被编程吗？",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1153",
    "title": "尸控动物园2",
    "url": "./movie-1153.html",
    "cover": "./103.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 喜剧",
    "tags": [
      "丧尸",
      "动物园",
      "恶搞",
      "B级片"
    ],
    "oneLine": "丧尸病毒蔓延到动物园，被感染的动物们保留了生前绝技，开始花式猎杀人类。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1154",
    "title": "亲情接力",
    "url": "./movie-1154.html",
    "cover": "./104.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2011",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情催泪",
      "代际传承",
      "真实事件改编"
    ],
    "oneLine": "一个家族三代人，用一百年的时间，接力照顾一位毫无血缘关系的聋哑老人。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1155",
    "title": "野生厨房第二季",
    "url": "./movie-1155.html",
    "cover": "./105.jpg",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2019",
    "genre": "真人秀，美食",
    "tags": [
      "户外",
      "旅行",
      "烹饪",
      "明星"
    ],
    "oneLine": "明星们前往中国最极致的荒野环境，就地取材，用最原始的方式烹饪最具当地风情的野味。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1156",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 转瞬即逝的天堂 千外有千 一个女人的选择 披萨一角 幸免于人类进步 我是千寻 小城故事 黑色惊魂夜 夜激情粤语 科学怪狗 明日传奇第四季 爱琳娜 死神来了国语 大搏杀 小食尸鬼的赞美诗 查克拉 夏末 爱情的结果 潜入搜查官松下洸平 幽灵终结者",
    "url": "./movie-1156.html",
    "cover": "./106.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1157",
    "title": "老大冻未条",
    "url": "./movie-1157.html",
    "cover": "./107.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2026",
    "genre": "黑色喜剧",
    "tags": [
      "黑帮",
      "家族",
      "温情",
      "反转"
    ],
    "oneLine": "黑帮老大患上奇怪病症，一“冻”不能动时，手下们才发现他藏了三十年的秘密。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1158",
    "title": "我开动物园那些年",
    "url": "./movie-1158.html",
    "cover": "./108.jpg",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2020",
    "genre": "奇幻、搞笑",
    "tags": [
      "动物园",
      "神仙",
      "经营",
      "日常"
    ],
    "oneLine": "失业青年接手倒闭动物园，却发现里面的动物全是下凡渡劫的神仙妖怪。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1159",
    "title": "新白蛇传之九尾狐",
    "url": "./movie-1159.html",
    "cover": "./109.jpg",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2024",
    "genre": "奇幻、爱情、动作",
    "tags": [
      "白蛇传说",
      "九尾狐",
      "前世今生",
      "人妖恋",
      "修仙"
    ],
    "oneLine": "白素贞的贴身侍女九尾狐为报救命之恩，在临安城掀起一场跨越千年的情劫与阴谋。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1160",
    "title": "灵异入侵",
    "url": "./movie-1160.html",
    "cover": "./110.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "恐怖、惊悚、超自然",
    "tags": [
      "恶灵",
      "驱魔",
      "都市传说",
      "公寓"
    ],
    "oneLine": "女主播搬进低价公寓，发现邻居每晚都会在 3 点 33 分集体敲墙，而敲的不是墙，是棺材板。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1161",
    "title": "杀手没有假期",
    "url": "./movie-1161.html",
    "cover": "./111.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪，喜剧，黑色幽默",
    "tags": [
      "杀手",
      "布鲁日",
      "休假",
      "背叛"
    ],
    "oneLine": "两名杀手被老板强制送去比利时度假，却发现这次假期根本就是一个处决陷阱。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1162",
    "title": "田园",
    "url": "./movie-1162.html",
    "cover": "./112.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "genre": "乡村剧情 / 家庭 / 生活",
    "tags": [
      "返乡创业",
      "土地分配",
      "代际冲突",
      "四季风物",
      "乡村新生"
    ],
    "oneLine": "一位离乡多年的女设计师回到祖宅，本想卖地了事，却在一季又一季的农活里，慢慢把自己重新种回了故乡。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1163",
    "title": "神的礼物",
    "url": "./movie-1163.html",
    "cover": "./113.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 奇幻 / 犯罪",
    "tags": [
      "时间穿越",
      "母女情",
      "连环杀人"
    ],
    "oneLine": "为了救回死去的女儿，母亲回到了14天前，却发现凶手竟是身边的人。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1164",
    "title": "孩子，时光飞逝",
    "url": "./movie-1164.html",
    "cover": "./114.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "剧情、家庭",
    "tags": [
      "亲子",
      "成长",
      "童年",
      "遗憾",
      "催泪"
    ],
    "oneLine": "一位事业有成的摄影师母亲，用一台能穿越时空的拍立得相机，一次次回到儿子的童年，试图弥补自己缺席的遗憾，却发现每次改变都带来新的失去。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1165",
    "title": "鲜肉老爸",
    "url": "./movie-1165.html",
    "cover": "./115.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 家庭",
    "tags": [
      "灵魂互换",
      "中年危机",
      "健身",
      "代沟"
    ],
    "oneLine": "50岁的中年油腻老爸和20岁的健身网红儿子灵魂互换，老爸替儿子去比赛，儿子替老爸去相亲。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1166",
    "title": "前程未卜",
    "url": "./movie-1166.html",
    "cover": "./116.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2021",
    "genre": "剧情, 青春, 职场, 悬疑",
    "tags": [
      "高考余波",
      "城市漂泊",
      "选择困境",
      "合租关系",
      "现实成长"
    ],
    "oneLine": "一群刚走出校园的年轻人原本以为人生会顺着分数往前走，没想到真正的考题，是如何在不确定里决定自己要成为什么样的人。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1167",
    "title": "盲心千金",
    "url": "./movie-1167.html",
    "cover": "./117.jpg",
    "region": "中国大陆",
    "type": "短剧 / 电视剧",
    "year": "2025",
    "genre": "爱情 / 悬疑",
    "tags": [
      "替身",
      "盲女",
      "商战",
      "反转"
    ],
    "oneLine": "失明的千金小姐被未婚夫背叛，却不知身边低调的贴身保镖才是真正的幕后大佬。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1168",
    "title": "西伯利亚和他",
    "url": "./movie-1168.html",
    "cover": "./118.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "genre": "剧情，同性",
    "tags": [
      "极地",
      "沉默之爱",
      "苏联遗留"
    ],
    "oneLine": "在西伯利亚铁路尽头的极地小镇，一位气象站观测员与退伍军人之间的恋情只能通过摩斯电码传递。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1169",
    "title": "与君相刃",
    "url": "./movie-1169.html",
    "cover": "./119.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "古装 / 爱情 / 武侠",
    "tags": [
      "互为仇人",
      "宿敌",
      "虐恋",
      "江湖"
    ],
    "oneLine": "她是刺杀皇帝的刺客，他是保护皇帝的禁军统领，但他们不知道，彼此就是对方找了十五年的青梅竹马。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1170",
    "title": "遥之彼方的接发球",
    "url": "./movie-1170.html",
    "cover": "./120.jpg",
    "region": "日本",
    "type": "动画",
    "year": "2018",
    "genre": "运动，青春，少女",
    "tags": [
      "沙滩排球",
      "百合",
      "热血",
      "成长",
      "夏日"
    ],
    "oneLine": "来自东京的少女彼方，在冲绳海边遇到了一个只会用脸接球的怪力女孩，两人决定挑战全国沙滩排球冠军。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1171",
    "title": "贼美人",
    "url": "./movie-1171.html",
    "cover": "./121.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1991",
    "genre": "犯罪、爱情、动作",
    "tags": [
      "雌雄大盗",
      "珠宝",
      "猫鼠游戏",
      "港式浪漫",
      "飞车"
    ],
    "oneLine": "香港第一女珠宝大盗“红狐”遇上全港最固执的见习督察高天，每次偷完都故意留线索让他追，比谈恋爱还刺激。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1172",
    "title": "达拉斯买家俱乐部",
    "url": "./movie-1172.html",
    "cover": "./122.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 传记",
    "tags": [
      "艾滋",
      "医药体制",
      "抗争",
      "真实事件改编"
    ],
    "oneLine": "被诊断为艾滋病只剩30天寿命的电工，自己走私药物，救活了上万人，包括他自己。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1173",
    "title": "洛东江大决战",
    "url": "./movie-1173.html",
    "cover": "./123.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "战争, 历史",
    "tags": [
      "朝鲜战争",
      "阵地战",
      "兄弟连",
      "悲壮"
    ],
    "oneLine": "1950年夏天，一支临时组建的学生兵部队被推上了洛东江防线最惨烈的阵地。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1174",
    "title": "妈妈，你在哪里",
    "url": "./movie-1174.html",
    "cover": "./124.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 惊悚 / 社会",
    "tags": [
      "儿童失踪",
      "黑警",
      "贫民窟",
      "复仇"
    ],
    "oneLine": "贫民窟男孩的母亲失踪，警方冷漠，他利用街头的流浪狗群和人贩网络开启追查。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1175",
    "title": "鲁邦三世：生还的魔术师",
    "url": "./movie-1175.html",
    "cover": "./125.jpg",
    "region": "日本",
    "type": "动画电影",
    "year": "2019",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": [
      "怪盗",
      "魔术对决",
      "峰不二子"
    ],
    "oneLine": "鲁邦三世盯上了传说中的“幻影金币”，但这次，他的对手是一个能让活人凭空消失的诡异魔术师。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1176",
    "title": "情侠艾夫传",
    "url": "./movie-1176.html",
    "cover": "./126.jpg",
    "region": "香港",
    "type": "电影",
    "year": "2025",
    "genre": "武侠、爱情、喜剧",
    "tags": [
      "侠客",
      "恋爱脑",
      "搞笑",
      "江湖",
      "反套路"
    ],
    "oneLine": "江湖第一情剑侠客艾夫，每次行侠仗义前都必须先谈一场轰轰烈烈的恋爱，否则功力全失。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1177",
    "title": "犯罪心理第二季",
    "url": "./movie-1177.html",
    "cover": "./127.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑，犯罪，心理",
    "tags": [
      "FBI",
      "行为分析",
      "连环杀手",
      "团队羁绊"
    ],
    "oneLine": "新一季BAU迎来一位神秘侧写师，他仿佛能预知凶手行动，直到队员发现他手腕上的电子镣铐。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1178",
    "title": "沉睡的森林",
    "url": "./movie-1178.html",
    "cover": "./128.jpg",
    "region": "法国 / 德国",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 奇幻 / 悬疑",
    "tags": [
      "梦境",
      "环保",
      "心理探索",
      "寓言"
    ],
    "oneLine": "一位失眠的植物学家走进一片从未醒来的远古森林，发现树的梦境正在吞噬人类的记忆。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1179",
    "title": "夜叉新娘",
    "url": "./movie-1179.html",
    "cover": "./129.jpg",
    "region": "泰国",
    "type": "剧集",
    "year": "2025",
    "genre": "恐怖 / 爱情 / 奇幻",
    "tags": [
      "泰式恐怖",
      "冥婚",
      "前世今生",
      "催泪"
    ],
    "oneLine": "被逼嫁给死人的新娘在洞房夜发现，鬼丈夫居然是她前世亲手杀死的那个将军。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1180",
    "title": "星际迷航：下层舰员第二季",
    "url": "./movie-1180.html",
    "cover": "./130.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2026",
    "genre": "科幻 / 喜剧 / 动画",
    "tags": [
      "太空打工",
      "职场喜剧",
      "彩蛋狂魔",
      "迷影向"
    ],
    "oneLine": "塞里托斯号最底层的四名打工人继续处理星际联邦最脏乱差的活儿，包括替皮卡德舰长遛外星狗。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1181",
    "title": "罗丝的遭遇",
    "url": "./movie-1181.html",
    "cover": "./131.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 历史 / 女性",
    "tags": [
      "十九世纪",
      "女仆",
      "阶级压迫",
      "复仇"
    ],
    "oneLine": "1857年伦敦，一名女仆被贵族少爷侵犯后反被诬陷偷窃，她改名换姓潜入上流社会展开长达十年的复仇。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1182",
    "title": "少林门",
    "url": "./movie-1182.html",
    "cover": "./132.jpg",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "year": "2029",
    "genre": "动作 / 武侠",
    "tags": [
      "硬桥硬马",
      "少林叛徒",
      "师徒恩仇",
      "冷兵器对战"
    ],
    "oneLine": "少林寺最隐秘的守门僧叛出师门，七年后带洋人火枪队重返，要炸开那扇从未被打开的门。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1183",
    "title": "谢谢光临",
    "url": "./movie-1183.html",
    "cover": "./133.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 家庭",
    "tags": [
      "便利店",
      "临终关怀",
      "小人物",
      "和解"
    ],
    "oneLine": "一个被确诊绝症的叛逆青年，决定去一家24小时便利店打工，只为偷偷寻找当年抛弃他的父亲。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1184",
    "title": "惊呼狂叫",
    "url": "./movie-1184.html",
    "cover": "./134.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖 / 悬疑 / 惊悚",
    "tags": [
      "声音恐惧",
      "直播恐怖",
      "都市怪谈",
      "反转结局",
      "不可描述之声"
    ],
    "oneLine": "一个神秘音源在网络上疯传，所有听过的人都会在第七天发出同样的“狂叫”，然后消失。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1185",
    "title": "愿在你身边",
    "url": "./movie-1185.html",
    "cover": "./135.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2025",
    "genre": "家庭 / 奇幻",
    "tags": [
      "都市奇幻",
      "愿望精灵",
      "亲情"
    ],
    "oneLine": "一个只能在一个人身边停留24小时的许愿精灵，遇到了一对即将离婚的中年夫妇。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1186",
    "title": "因为你把心给了我",
    "url": "./movie-1186.html",
    "cover": "./136.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情， 奇幻， 剧情",
    "tags": [
      "换心",
      "都市传说",
      "替身",
      "虐恋",
      "灵魂伴侣"
    ],
    "oneLine": "钢琴家女主接受了心脏移植，术后总在梦里弹奏一首她从没学过的曲子，那是她失踪男友的遗作。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1187",
    "title": "命运之夜前传第二季",
    "url": "./movie-1187.html",
    "cover": "./137.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2012",
    "genre": "奇幻/战争/动作",
    "tags": [
      "圣杯战争",
      "魔术师",
      "英灵对决",
      "阵营博弈",
      "前史",
      "悲剧感"
    ],
    "oneLine": "当上一季留下的血与誓言继续发酵，新的圣杯战场不再只是召唤英灵对决，而是让每个魔术师亲手拆穿自己的信仰。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1188",
    "title": "水波狂想曲",
    "url": "./movie-1188.html",
    "cover": "./138.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧，音乐，剧情",
    "tags": [
      "交响乐团",
      "荒诞",
      "阶级冲突",
      "梦想"
    ],
    "oneLine": "世界顶级乐团指挥中风后，将指挥棒交给了一个在塞纳河上打捞垃圾的清洁工，整个古典音乐界炸开了锅。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1189",
    "title": "白烂腥乐园",
    "url": "./movie-1189.html",
    "cover": "./139.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧，恐怖，奇幻",
    "tags": [
      "丧尸",
      "游乐园",
      "无厘头",
      "血浆",
      "恶搞"
    ],
    "oneLine": "一个倒闭的游乐园被丧尸占领后，反而成了网红打卡地，园长决定顺势将其打造成“全球最危险鬼屋”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1190",
    "title": "鸿门宴",
    "url": "./movie-1190.html",
    "cover": "./140.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2011",
    "genre": "历史, 剧情, 动作",
    "tags": [
      "楚汉",
      "刘邦",
      "项羽",
      "范增",
      "双雄"
    ],
    "oneLine": "饭局开始前，范增对项羽说：“今天要么他死，要么你亡。”饭局结束后，两人都赢了，也全都输了。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1191",
    "title": "河畔旅馆",
    "url": "./movie-1191.html",
    "cover": "./141.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情，悬疑，治愈",
    "tags": [
      "人生驿站",
      "单元剧",
      "温情",
      "神秘事件"
    ],
    "oneLine": "一座位于两条河流交汇处的老旧旅馆，每一个入住的客人都会在这里遇到改变人生的“必然的偶然”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1192",
    "title": "拉塞尔·皮特斯：臭名远扬",
    "url": "./movie-1192.html",
    "cover": "./142.jpg",
    "region": "加拿大",
    "type": "脱口秀电影",
    "year": "2024",
    "genre": "喜剧 / 脱口秀",
    "tags": [
      "单口喜剧",
      "刻板印象",
      "种族梗",
      "现场爆发力"
    ],
    "oneLine": "传奇喜剧人拉塞尔·皮特斯时隔五年回归舞台，用他一贯的“模仿种族口音”绝技，将全世界的文化标签撕得粉碎。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1193",
    "title": "夏日迷情",
    "url": "./movie-1193.html",
    "cover": "./143.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 剧情 / LGBT",
    "tags": [
      "海岛",
      "少年初恋",
      "秘密",
      "成长"
    ],
    "oneLine": "1987年西西里岛，两个少年在夏日相遇，他们发誓保守一个秘密，却不知这个秘密将改写一生。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1194",
    "title": "教室的那一间",
    "url": "./movie-1194.html",
    "cover": "./144.jpg",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2020",
    "genre": "校园 / 青春",
    "tags": [
      "补习班",
      "暗恋",
      "课桌椅",
      "时空"
    ],
    "oneLine": "三十岁失业青年回到高中补习班，在第四十号课桌抽屉里发现一个能联系到十年前的笔记本。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1195",
    "title": "像恋人一样",
    "url": "./movie-1195.html",
    "cover": "./145.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "爱情 / 剧情 / 伦理",
    "tags": [
      "代驾",
      "女大学生",
      "中年男",
      "雇佣关系",
      "寂寞"
    ],
    "oneLine": "女大学生兼职陪聊代驾，遇到的每个男人都把她当恋人，却没人知道她的真名。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1196",
    "title": "布希妈妈",
    "url": "./movie-1196.html",
    "cover": "./146.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1991",
    "genre": "惊悚 / 犯罪",
    "tags": [
      "真实改编",
      "变态杀手",
      "母性扭曲"
    ],
    "oneLine": "小镇上最慈祥的胖大妈专门收养孤儿，但她家的地下室里，埋着十几个喊她“妈妈”的小孩。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1197",
    "title": "风月泣残红",
    "url": "./movie-1197.html",
    "cover": "./147.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "爱情 / 剧情 / 历史",
    "tags": [
      "民国",
      "妓院",
      "爱情悲剧",
      "女性",
      "黑帮"
    ],
    "oneLine": "1930年代上海滩，一个进步学生为了卧底深入青楼，却与头牌歌女相爱，最终在革命与风月中泣血成殇。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1198",
    "title": "破案啦！大人",
    "url": "./movie-1198.html",
    "cover": "./148.jpg",
    "region": "中国",
    "type": "剧集",
    "year": "2024",
    "genre": "古装, 悬疑, 喜剧",
    "tags": [
      "清宫",
      "探案",
      "轻喜剧",
      "双男主",
      "单元剧"
    ],
    "oneLine": "康熙年间，一个只会法医知识的仵作和一个只会纸上谈兵的翰林，被迫组队侦破紫禁城连环命案。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1199",
    "title": "魅力四射4：一鼓作气",
    "url": "./movie-1199.html",
    "cover": "./149.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧，运动，歌舞",
    "tags": [
      "啦啦队",
      "励志",
      "逆袭",
      "竞技",
      "青春"
    ],
    "oneLine": "面临解散危机的三流大学啦啦队，在最后一季比赛中，决定用一种史无前例的高难度动作“一鼓作气”杀回巅峰。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1200",
    "title": "闪亮的拓人",
    "url": "./movie-1200.html",
    "cover": "./150.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2025",
    "genre": "科幻热血",
    "tags": [
      "萝卜",
      "宇宙开拓",
      "成长",
      "友情"
    ],
    "oneLine": "性格懦弱的少年被选为新型精神感应机器人的驾驶员，必须克服恐惧点燃银河开拓之路。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1201",
    "title": "哈佛少女的快乐清单",
    "url": "./movie-1201.html",
    "cover": "./1.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情, 喜剧, 青春",
    "tags": [
      "常春藤",
      "抑郁症",
      "遗愿清单",
      "逆反",
      "治愈"
    ],
    "oneLine": "哈佛大学优等生在确诊抑郁症后，撕掉课程表，写下“100件不快乐但有趣的事”，从第一名“吃霸王餐”开始执行。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1202",
    "title": "偶像练习生",
    "url": "./movie-1202.html",
    "cover": "./2.jpg",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "genre": "真人秀 / 音乐",
    "tags": [
      "偶像",
      "选秀",
      "练习生",
      "舞台",
      "出道"
    ],
    "oneLine": "100位来自不同公司的练习生，经过4个月封闭训练和舞台竞演，争夺9个出道席位。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1203",
    "title": "青青河边草",
    "url": "./movie-1203.html",
    "cover": "./3.jpg",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "1992",
    "genre": "爱情、年代、家庭",
    "tags": [
      "琼瑶",
      "民国",
      "虐恋",
      "大家族",
      "经典"
    ],
    "oneLine": "民国乱世中，逃婚的富家女与哑巴少女结伴而行，双双卷入一座神秘庄园的爱恨情仇。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1204",
    "title": "姊妹坡国语",
    "url": "./movie-1204.html",
    "cover": "./4.jpg",
    "region": "中国台湾/日本",
    "type": "电影",
    "year": "2021",
    "genre": "剧情， 家庭， 青春",
    "tags": [
      "姐妹",
      "秘密",
      "成长",
      "国语配音"
    ],
    "oneLine": "四姐妹在父母意外离世后，必须守住一个关于她们身世的惊天秘密才能保住老宅。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1205",
    "title": "甜蜜的艾玛，亲爱的芭比",
    "url": "./movie-1205.html",
    "cover": "./5.jpg",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 家庭 / 心理",
    "tags": [
      "双胞胎",
      "分离",
      "身份认同",
      "成长痛",
      "文艺"
    ],
    "oneLine": "被分开抚养的双胞胎姐妹，一个成为优等生，一个成为混混，她们在十八岁那天交换了人生。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1206",
    "title": "西游记八戒降妖",
    "url": "./movie-1206.html",
    "cover": "./6.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻 / 喜剧 / 动作",
    "tags": [
      "西游",
      "八戒",
      "动画",
      "热血",
      "颠覆"
    ],
    "oneLine": "取经之后，八戒被封为“净坛使者”，却因一次酒后失言，被贬下凡间重走降妖路。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1207",
    "title": "爱在初春惊变时",
    "url": "./movie-1207.html",
    "cover": "./7.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2027",
    "genre": "爱情，恐怖，科幻",
    "tags": [
      "身体恐怖",
      "畸形浪漫",
      "海岛惊魂",
      "扭曲爱情"
    ],
    "oneLine": "一个孤独的男人爱上了一个每到春天就会变异成海怪的女人，他决定陪她一起变异。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1208",
    "title": "邻居的窗",
    "url": "./movie-1208.html",
    "cover": "./8.jpg",
    "region": "美国",
    "type": "短片",
    "year": "2019",
    "genre": "剧情 / 悬疑",
    "tags": [
      "偷窥",
      "奥斯卡获奖短片",
      "公寓",
      "婚姻",
      "共情"
    ],
    "oneLine": "一对中年夫妻透过窗户偷窥对面年轻夫妻的热恋生活，直到有一天对面男人剃了光头。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1209",
    "title": "莽荒纪之川落雪",
    "url": "./movie-1209.html",
    "cover": "./9.jpg",
    "region": "中国",
    "type": "剧集",
    "year": "2026",
    "genre": "玄幻， 古装， 动作",
    "tags": [
      "修仙",
      "家族仇恨",
      "雪域",
      "神兵"
    ],
    "oneLine": "为了洗刷被污蔑的灭族罪名，落雪传人纪川只身闯入了危机四伏的魔道圣地夺回圣物。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1210",
    "title": "哦！我的助手大人",
    "url": "./movie-1210.html",
    "cover": "./10.jpg",
    "region": "中国",
    "type": "剧情喜剧",
    "year": "2022",
    "genre": "都市奇幻 / 黑色幽默 / 人性观察",
    "tags": [
      "AI伴侣",
      "都市生存",
      "叙事陷阱"
    ],
    "oneLine": "一个失业导演喊出的“助手大人”启动了AI，却在一夜之间发现她不只替他写人生，还在悄悄替他写下每个人生最不敢面对的版本。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1211",
    "title": "李时你是真顽皮",
    "url": "./movie-1211.html",
    "cover": "./11.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧，古装，动作",
    "tags": [
      "李时珍",
      "顽皮",
      "中医",
      "搞笑",
      "反转"
    ],
    "oneLine": "明朝顽劣少年李时珍被逼学医，整日装病逃课，直到一个现代穿越者预言他未来会写《本草纲目》，少年崩溃了。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1212",
    "title": "红棉袄",
    "url": "./movie-1212.html",
    "cover": "./12.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情",
      "乡土",
      "时代变迁",
      "女性"
    ],
    "oneLine": "一件传家的红棉袄，三代女性跨越三十年的爱与和解。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1213",
    "title": "一不小心吃定你",
    "url": "./movie-1213.html",
    "cover": "./13.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情, 奇幻, 喜剧",
    "tags": [
      "美食",
      "系统",
      "甜宠",
      "轻松",
      "穿越"
    ],
    "oneLine": "美食博主乱入异世界，靠外卖APP攻略冷面魔君。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1214",
    "title": "我爱驰星周",
    "url": "./movie-1214.html",
    "cover": "./14.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 喜剧, 奇幻",
    "tags": [
      "追星",
      "平行时空",
      "大叔之爱"
    ],
    "oneLine": "年过四十的女清洁工意外获得了能穿越进周星驰电影的遥控器，却在其中爱上了被忽视的配角“驰星周”。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1215",
    "title": "廉政行动1998粤语",
    "url": "./movie-1215.html",
    "cover": "./15.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "犯罪悬疑",
    "tags": [
      "ICAC",
      "复古",
      "双雄"
    ],
    "oneLine": "1998年亚洲金融风暴后，廉署菜鸟与黑警联手追查百亿洗黑钱案。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1216",
    "title": "谁来拯救草食系男子",
    "url": "./movie-1216.html",
    "cover": "./16.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "genre": "喜剧 / 爱情",
    "tags": [
      "职场",
      "性别反转",
      "治愈",
      "高口碑"
    ],
    "oneLine": "一位肉食系女社长空降濒死公司，却发现手下全是“不想赢只想摸鱼”的草食系男员工。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1217",
    "title": "危险上路",
    "url": "./movie-1217.html",
    "cover": "./17.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 公路 / 惊悚",
    "tags": [
      "出租车",
      "连环杀手",
      "密室博弈",
      "社会阶级"
    ],
    "oneLine": "一名孟买的夜班出租车司机接到一位沉默的乘客，行车途中他发现对方就是新闻里正在通缉的剥皮杀手。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1218",
    "title": "母亲的眼泪",
    "url": "./movie-1218.html",
    "cover": "./18.jpg",
    "region": "伊朗",
    "type": "电影",
    "year": "2025",
    "genre": "剧情",
    "tags": [
      "家庭",
      "牺牲",
      "女性"
    ],
    "oneLine": "年迈的母亲为了让儿子出国避难，故意装疯卖傻，用自己的眼泪换取医生的“精神异常”证明。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1219",
    "title": "活得比你好",
    "url": "./movie-1219.html",
    "cover": "./19.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1995",
    "genre": "剧情、家庭、伦理",
    "tags": [
      "港剧",
      "姐妹情仇",
      "嫉妒",
      "励志",
      "时代变迁"
    ],
    "oneLine": "一对亲姐妹，一个嫁入豪门却抑郁终生，一个摆摊卖鱼蛋却笑到最后，命运在三十年后给出了最辛辣的答案。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1220",
    "title": "沙之爪",
    "url": "./movie-1220.html",
    "cover": "./20.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 怪兽, 冒险",
    "tags": [
      "沙漠",
      "巨型生物",
      "生存",
      "B级片"
    ],
    "oneLine": "内华达沙漠地下，潜伏着吃人的沙地巨虫。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1221",
    "title": "黄金马车",
    "url": "./movie-1221.html",
    "cover": "./21.jpg",
    "region": "法国 / 意大利",
    "type": "电影",
    "year": "2024",
    "genre": "历史 / 爱情",
    "tags": [
      "宫廷",
      "权力游戏",
      "女性"
    ],
    "oneLine": "1770年，一辆镀金马车载着14岁的奥地利公主远嫁法国，她在马车上生下了一个儿子，而父亲是马车夫。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1222",
    "title": "反派 第一季",
    "url": "./movie-1222.html",
    "cover": "./22.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2027",
    "genre": "犯罪，剧情，心理惊悚",
    "tags": [
      "反派视角",
      "道德灰度",
      "城市阴谋",
      "高智商博弈"
    ],
    "oneLine": "当超级英雄全被神秘杀死后，城市里最底层的三个反派，被迫扮演起了“保护者”的角色。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1223",
    "title": "昔日玫瑰",
    "url": "./movie-1223.html",
    "cover": "./23.jpg",
    "region": "意大利 / 法国",
    "type": "电影",
    "year": "2025",
    "genre": "历史, 爱情, 战争",
    "tags": [
      "古罗马",
      "角斗士",
      "女奴隶",
      "废墟中的花"
    ],
    "oneLine": "公元79年维苏威火山爆发前夕，一个罗马贵族之女与一个角斗士奴隶在庞贝城展开了一场注定毁灭的禁忌之恋。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1224",
    "title": "真情难诉",
    "url": "./movie-1224.html",
    "cover": "./24.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1998",
    "genre": "爱情 / 剧情",
    "tags": [
      "哑女",
      "笔友",
      "误会"
    ],
    "oneLine": "一个失语女孩与狱中笔友通信三年，出狱那天男孩却发现女孩竟是当年导致他入狱的目击证人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1225",
    "title": "哈利波特：混血王子的背叛",
    "url": "./movie-1225.html",
    "cover": "./25.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2027",
    "genre": "奇幻 / 冒险 / 悬疑",
    "tags": [
      "魔法",
      "宿命",
      "斯内普"
    ],
    "oneLine": "剧集版全新解读，从德拉科和斯内普的双视角重写“混血王子”真相。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1226",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 城市之光 天使热爱的生活 异灵灵异2002 童心 说好不流泪 反派 第一季 平安是福 森浦之路 仙班校园2 梦幻书院第七季 常在心头 监狱砂漠 重返舞台四天王 继承 除暴安良 宿命 青年心城之撑起青春粤语 勿扰飞升 好警察，坏警察 神秘破坏客",
    "url": "./movie-1226.html",
    "cover": "./26.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1227",
    "title": "摇滚诗人：未知的传奇",
    "url": "./movie-1227.html",
    "cover": "./27.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "genre": "音乐, 传记",
    "tags": [
      "鲍勃·迪伦",
      "民谣摇滚",
      "反叛"
    ],
    "oneLine": "不是关于鲍勃·迪伦，而是关于1965年新港民谣节上，那个对他喊出“犹大”的观众——他后来也成了一名摇滚传奇。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1228",
    "title": "挑情记",
    "url": "./movie-1228.html",
    "cover": "./28.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2026",
    "genre": "爱情, 喜剧",
    "tags": [
      "海王",
      "反套路",
      "女性觉醒"
    ],
    "oneLine": "顶级海王以为钓到了纯情小白兔，没想到对方是编写了“反PUA教程”的情感教官。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1229",
    "title": "盲点第三季",
    "url": "./movie-1229.html",
    "cover": "./29.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2017",
    "genre": "动作 / 悬疑",
    "tags": [
      "纹身解码",
      "精英小队",
      "阴谋论升级"
    ],
    "oneLine": "简·多伊身上的纹身已经清除，但她发现自己脑中竟被植入了另一个人的全部记忆，包括一桩尚未发生的恐怖袭击。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1230",
    "title": "6/45",
    "url": "./movie-1230.html",
    "cover": "./30.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 剧情",
    "tags": [
      "彩票",
      "南北韩",
      "士兵",
      "荒诞"
    ],
    "oneLine": "一张中了6/45头奖的彩票飞过三八线，让韩国士兵和朝鲜士兵成了“秘密合作伙伴”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1231",
    "title": "铁马战车粤语",
    "url": "./movie-1231.html",
    "cover": "./31.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2016",
    "genre": "警匪 / 动作",
    "tags": [
      "交通警察",
      "飞车追逐",
      "兄弟情",
      "粤语原声"
    ],
    "oneLine": "一支香港交通部的精英摩托警队，用铁马与速度追击城市里的每一桩罪案。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1232",
    "title": "数码宝贝3：驯兽师之王",
    "url": "./movie-1232.html",
    "cover": "./32.jpg",
    "region": "日本",
    "type": "动画",
    "year": "2001",
    "genre": "科幻 / 冒险 / 友情",
    "tags": [
      "卡片",
      "驯兽师",
      "数码兽",
      "真实系"
    ],
    "oneLine": "三个沉迷数码兽卡牌游戏的小学生被选为驯兽师，但他们很快发现，战斗输掉的一方，怪兽会真的死亡。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1233",
    "title": "霹雳惊鸿之刀剑春秋",
    "url": "./movie-1233.html",
    "cover": "./33.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2012",
    "genre": "武侠， 奇幻， 布袋戏",
    "tags": [
      "布袋戏",
      "兵器",
      "江湖恩怨",
      "诗号"
    ],
    "oneLine": "一柄能预言死期的妖刀重现江湖，三名曾经的好友被迫在春秋大义与儿女情长间挥刃相向。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1234",
    "title": "无用的谎言",
    "url": "./movie-1234.html",
    "cover": "./34.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2025",
    "genre": "爱情, 悬疑",
    "tags": [
      "测谎",
      "天才谎言者",
      "反差萌"
    ],
    "oneLine": "能听出所有谎言的刻薄女人，遇到了一个她无论如何也听不到谎言的逃犯。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1235",
    "title": "汤姆历险记",
    "url": "./movie-1235.html",
    "cover": "./35.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "冒险, 家庭, 剧情",
    "tags": [
      "经典改编",
      "成长",
      "河边小镇",
      "友谊"
    ],
    "oneLine": "不只是刷篱笆，汤姆和哈克这次卷入了一场涉及宝藏与谋杀的真实冒险。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1236",
    "title": "闯江湖",
    "url": "./movie-1236.html",
    "cover": "./36.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1985",
    "genre": "动作，犯罪",
    "tags": [
      "港式黑帮",
      "兄弟情",
      "怀旧"
    ],
    "oneLine": "七十年代九龙城寨，两个从大陆偷渡来的青年，用拳头和血泪闯出一片天，却最终兵戎相见。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1237",
    "title": "拾光里的我们",
    "url": "./movie-1237.html",
    "cover": "./37.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "爱情、剧情",
    "tags": [
      "破镜重圆",
      "校园",
      "都市",
      "治愈"
    ],
    "oneLine": "毕业后消失七年的校园乐队主唱，突然成了前女友新公司的甲方。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1238",
    "title": "甜蜜家园2国语",
    "url": "./movie-1238.html",
    "cover": "./38.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "惊悚, 灾难",
    "tags": [
      "怪物",
      "末世",
      "人性",
      "国语配音"
    ],
    "oneLine": "怪物化病毒全面失控，幸存者们离开公寓后发现，外面的世界比地下迷宫更令人绝望。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1239",
    "title": "神偷大帝",
    "url": "./movie-1239.html",
    "cover": "./39.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 犯罪 / 喜剧",
    "tags": [
      "高智商犯罪",
      "黑吃黑",
      "反转",
      "英伦幽默"
    ],
    "oneLine": "伦敦最臭名昭著的神偷宣布退休，但在他金盆洗手的晚宴上，六件失窃的国宝同时出现在了餐桌上。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1240",
    "title": "船只",
    "url": "./movie-1240.html",
    "cover": "./40.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 悬疑, 文艺",
    "tags": [
      "海上",
      "密室",
      "记忆",
      "轮回"
    ],
    "oneLine": "一艘永远在海上迷雾中航行的旧船，每个船舱里的乘客都丢失了一段关键记忆。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1241",
    "title": "苍蝇王",
    "url": "./movie-1241.html",
    "cover": "./41.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "心理惊悚",
    "tags": [
      "密室",
      "人性实验",
      "黑暗"
    ],
    "oneLine": "十名陌生人在废弃大楼醒来，被告知每半小时要投票处决一人，否则全部炸死。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1242",
    "title": "盲拳鬼手",
    "url": "./movie-1242.html",
    "cover": "./42.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1979",
    "genre": "动作，武侠",
    "tags": [
      "盲人",
      "拳师",
      "复仇",
      "听声辨位"
    ],
    "oneLine": "被毒瞎双眼的拳师，练成“盲拳”，三年后重回武林，只为找出那个毁他一生的人。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1243",
    "title": "寂寞大师",
    "url": "./movie-1243.html",
    "cover": "./43.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情",
    "tags": [
      "孤独",
      "艺术",
      "忘年交"
    ],
    "oneLine": "一位被遗忘的钢琴家与一个叛逆少年，在废弃琴房里用音符修补彼此破碎的人生。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1244",
    "title": "中国地",
    "url": "./movie-1244.html",
    "cover": "./44.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "历史 / 战争",
    "tags": [
      "抗日战争",
      "东北",
      "民间抵抗",
      "真实改编",
      "硬核"
    ],
    "oneLine": "1931 年东北小镇全民皆兵，以一条土沟为“中国地”血战日军联队。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1245",
    "title": "鳄鱼莱莱",
    "url": "./movie-1245.html",
    "cover": "./45.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 家庭 / 歌舞",
    "tags": [
      "真人动画",
      "治愈系",
      "爱唱歌的鳄鱼",
      "邻里温情"
    ],
    "oneLine": "新搬来的小男孩发现阁楼上住着一只会唱爵士乐的鳄鱼，为了留住这位“家人”，他们必须打败贪婪的动物标本商人。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1246",
    "title": "极冻邪恶",
    "url": "./movie-1246.html",
    "cover": "./46.jpg",
    "region": "加拿大",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖，惊悚，科幻",
    "tags": [
      "低温实验",
      "人体冷冻",
      "复活怪物",
      "极地"
    ],
    "oneLine": "北极科考站挖出一具冻僵千年的人类尸体，解冻后，它开始模仿并替换科考队员。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1247",
    "title": "女高中生的虚度日常",
    "url": "./movie-1247.html",
    "cover": "./47.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 校园",
    "tags": [
      "日常",
      "搞笑",
      "友情",
      "中二病",
      "治愈"
    ],
    "oneLine": "号称“有趣”但毫无特长的高中生田中，立志要在枯燥的高中里找到乐子，结果发现班上全是比她还奇葩的问题儿童。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1248",
    "title": "神鞭2001",
    "url": "./movie-1248.html",
    "cover": "./48.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2001",
    "genre": "动作, 奇幻",
    "tags": [
      "辫子功夫",
      "千年虫",
      "港式武打",
      "都市传说"
    ],
    "oneLine": "清末遗臣的“神鞭”传人来到2001年，发现他的辫子能抽死“千年虫”病毒，却被国安盯上了。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1249",
    "title": "少林寺传奇之大漠英豪",
    "url": "./movie-1249.html",
    "cover": "./49.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2011",
    "genre": "古装 / 动作 / 冒险",
    "tags": [
      "少林功夫",
      "沙漠寻宝",
      "师徒情"
    ],
    "oneLine": "清末，一群少林俗家弟子护送神秘舍利子穿越戈壁沙漠，遭遇西方探险家和土匪的轮番截杀。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1250",
    "title": "春风得意上云霄",
    "url": "./movie-1250.html",
    "cover": "./50.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "1991",
    "genre": "喜剧 / 爱情",
    "tags": [
      "空乘",
      "乌龙",
      "台湾老电影",
      "追女仔"
    ],
    "oneLine": "一名地勤维修工误打误撞上了头等舱，为了不被发现，他必须伪装成最专业的空乘。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1251",
    "title": "人脑计算机",
    "url": "./movie-1251.html",
    "cover": "./51.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻, 惊悚, 悬疑",
    "tags": [
      "脑机接口",
      "意识上传",
      "科技伦理",
      "囚禁"
    ],
    "oneLine": "天才科学家将自己的意识上传到超级计算机，却发现那是一个无法逃脱的数字地狱。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1252",
    "title": "缘分接下来",
    "url": "./movie-1252.html",
    "cover": "./52.jpg",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情，喜剧，奇幻",
    "tags": [
      "婚恋APP",
      "大数据匹配",
      "命中注定"
    ],
    "oneLine": "分手三年的冤家被同一款婚恋APP匹配为“命中注定”，系统还说他们已秘密交往两百天。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1253",
    "title": "人鱼恋爱法则第一季",
    "url": "./movie-1253.html",
    "cover": "./53.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2022",
    "genre": "奇幻 / 爱情",
    "tags": [
      "人鱼",
      "契约恋爱",
      "韩剧"
    ],
    "oneLine": "濒危人鱼公主为逃避婚约，与冷酷的海洋研究所所长签订了三个月的同居契约。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1254",
    "title": "宇宙护卫队之超甲恐龙队",
    "url": "./movie-1254.html",
    "cover": "./54.jpg",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2025",
    "genre": "科幻，动画，儿童，冒险",
    "tags": [
      "机甲",
      "恐龙",
      "宇宙",
      "环保",
      "合体"
    ],
    "oneLine": "当宇宙巡逻小队遭遇来自白垩纪的恐龙机甲战队，他们必须从吵架升级为战友，才能阻止黑洞吞噬地球。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1255",
    "title": "罗雀高飞",
    "url": "./movie-1255.html",
    "cover": "./55.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2020",
    "genre": "剧情 / 家庭 / 医学",
    "tags": [
      "中医题材",
      "女性成长",
      "1920年代",
      "草药隐喻",
      "逆袭"
    ],
    "oneLine": "日据时期台湾，一位贫困少女凭借对草药的天赋，在男权至上的大稻埕医馆中闯出名堂。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1256",
    "title": "全垒打",
    "url": "./movie-1256.html",
    "cover": "./56.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 运动, 家庭",
    "tags": [
      "棒球",
      "父子关系",
      "听障",
      "热血"
    ],
    "oneLine": "听障投手获得了一种能“听到”球路的天赋，代价是每次投球都在透支生命。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1257",
    "title": "绅士枪匪",
    "url": "./movie-1257.html",
    "cover": "./57.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 犯罪 / 喜剧",
    "tags": [
      "英伦黑帮",
      "西装暴徒",
      "黑色幽默"
    ],
    "oneLine": "一名退休的礼仪顾问被迫重出江湖，却发现自己的新客户全是想自杀的老年劫匪。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1258",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 与亨特早餐 寻爱俄罗斯 沙漠孤心 蒙上你的眼 狐狸新娘星 天堂来的情书 蛇草莓 冬天的故事 纸袋人 风流快活 今生有你 正义悍将2：汽车城 等待的死亡 历物语 麻辣教师电影版 致命名单 白色鳄鱼 双喜 拉米 第二季 爱无痕",
    "url": "./movie-1258.html",
    "cover": "./58.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1259",
    "title": "灵异导航",
    "url": "./movie-1259.html",
    "cover": "./59.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧、奇幻、恐怖",
    "tags": [
      "手机APP",
      "反向灵异",
      "搞笑惊悚",
      "脑洞大开"
    ],
    "oneLine": "路痴小美下载了一款能导航灵魂的APP，从此她的上班路变成了百鬼夜行的奇幻冒险。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1260",
    "title": "香港奇案雾夜屠夫",
    "url": "./movie-1260.html",
    "cover": "./60.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪/惊悚",
    "tags": [
      "真实案件改编",
      "雨夜",
      "连环杀手",
      "心理"
    ],
    "oneLine": "1982年雨夜屠夫案重演，但这次被捕的嫌疑人坚称自己是被冤枉的，而真凶仍在警队。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1261",
    "title": "猎魔武士",
    "url": "./movie-1261.html",
    "cover": "./61.jpg",
    "region": "日本",
    "type": "TV动画",
    "year": "2023",
    "genre": "动作奇幻",
    "tags": [
      "武士",
      "丧尸",
      "蒸汽朋克",
      "公路片",
      "双男主"
    ],
    "oneLine": "战国最强武士与金发洋枪手穿越到丧尸横行的江户末期，用冷热兵器联手斩妖除魔。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1262",
    "title": "光脚的基丰",
    "url": "./movie-1262.html",
    "cover": "./62.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2006",
    "genre": "剧情, 运动",
    "tags": [
      "残疾人",
      "马拉松",
      "母爱",
      "励志",
      "真实改编"
    ],
    "oneLine": "只有三岁智商的中年男子基丰，为了在母亲临终前送她一双鞋，开始挑战一场不可能完成的马拉松。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1263",
    "title": "成长的少女",
    "url": "./movie-1263.html",
    "cover": "./63.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "1994",
    "genre": "家庭， 青春， 治愈",
    "tags": [
      "平成",
      "单亲家庭",
      "校园",
      "姐妹情"
    ],
    "oneLine": "平成初年，北海道渔村的一对姐妹父亲出海遇难，姐姐放弃高中去罐头厂打工，妹妹则立志要考上东京的大学，把姐姐带出渔村。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1264",
    "title": "奔跑吧·黄河篇",
    "url": "./movie-1264.html",
    "cover": "./64.jpg",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2020",
    "genre": "真人秀 / 公益 / 旅游",
    "tags": [
      "黄河",
      "环保",
      "明星",
      "游戏",
      "文化"
    ],
    "oneLine": "跑男团沿黄河溯源而上，每期通过游戏解锁沿岸村庄的真实心愿并帮忙实现。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1265",
    "title": "罗马新年",
    "url": "./movie-1265.html",
    "cover": "./65.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2004",
    "genre": "剧情喜剧",
    "tags": [
      "跨年夜",
      "多线叙事",
      "罗马众生相",
      "人生百态"
    ],
    "oneLine": "新年前夜，十组罗马人的故事在永恒之城的各个角落同时发生，最终交织成一个吻。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1266",
    "title": "好汉饶命",
    "url": "./movie-1266.html",
    "cover": "./66.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧, 古装",
    "tags": [
      "穿越",
      "草寇",
      "反英雄"
    ],
    "oneLine": "一个现代社畜穿越到北宋成了山贼头目，为了活命，他决定用KPI和绩效考核来管理山寨。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1267",
    "title": "霸凌",
    "url": "./movie-1267.html",
    "cover": "./67.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 惊悚",
    "tags": [
      "校园暴力",
      "复仇",
      "心理创伤",
      "阶级冲突"
    ],
    "oneLine": "一名沉默的高中生在长达三年的校园霸凌后，用一本日记策划了一场无血的完美复仇。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1268",
    "title": "钢铁少女团",
    "url": "./movie-1268.html",
    "cover": "./68.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 青春",
    "tags": [
      "女子乐队",
      "重金属",
      "废校危机"
    ],
    "oneLine": "为了阻止学校被拆除，五个宅女决定用重金属音乐炸翻全场。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1269",
    "title": "清洁工",
    "url": "./movie-1269.html",
    "cover": "./69.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 惊悚 / 职场",
    "tags": [
      "底层视角",
      "空间叙事",
      "连环案件",
      "社会阶层"
    ],
    "oneLine": "首尔一家顶级医院的清洁工大妈们，利用对通风管道和垃圾路线的熟悉，比警察更早锁定了藏匿在高层病房里的变态杀人医生。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1270",
    "title": "轻率",
    "url": "./movie-1270.html",
    "cover": "./70.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 心理",
    "tags": [
      "后悔",
      "女性",
      "道德困境"
    ],
    "oneLine": "一次轻率的网络爆料，让无辜女孩自杀，记者余生都在还债。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1271",
    "title": "雾里的铁道员",
    "url": "./movie-1271.html",
    "cover": "./71.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 奇幻",
    "tags": [
      "北海道",
      "小站",
      "幽灵",
      "治愈"
    ],
    "oneLine": "在即将被废弃的北海道小站，铁道员吉田每天都能看见一个举着不存在车票的女孩，她每天都会问同一句话。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1272",
    "title": "牢狱",
    "url": "./movie-1272.html",
    "cover": "./72.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情/惊悚",
    "tags": [
      "监狱风云",
      "司法误判",
      "孤岛监狱",
      "极简叙事",
      "独角戏"
    ],
    "oneLine": "一名被冤枉的数学老师被扔进北大西洋的孤岛重刑犯监狱，为了活着回家，他必须在牢笼里教黑帮头目微积分。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1273",
    "title": "回声谷",
    "url": "./movie-1273.html",
    "cover": "./73.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑 / 剧情",
    "tags": [
      "山村",
      "失踪",
      "声学",
      "记忆",
      "复仇"
    ],
    "oneLine": "声学工程师返乡调查弟弟失踪案，发现山谷的回声里藏着亡者最后的嘶吼。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1274",
    "title": "通天奇兵",
    "url": "./movie-1274.html",
    "cover": "./74.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "1983",
    "genre": "动作、冒险",
    "tags": [
      "经典",
      "特种兵",
      "复仇",
      "火爆"
    ],
    "oneLine": "一支被军方抛弃的特种兵小队，假冒死亡，成为游走在法律边缘的雇佣兵。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1275",
    "title": "光",
    "url": "./movie-1275.html",
    "cover": "./75.jpg",
    "region": "波兰",
    "type": "电影",
    "year": "2024",
    "genre": "科幻, 剧情",
    "tags": [
      "哲学",
      "孤独",
      "外星接触"
    ],
    "oneLine": "一个独居灯塔看守人发现，他照顾了三十年的灯塔光束，其实是外星文明发来的“你好”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1276",
    "title": "风尘奇老",
    "url": "./movie-1276.html",
    "cover": "./76.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1981",
    "genre": "喜剧 / 冒险 / 江湖",
    "tags": [
      "浪迹江湖",
      "失落秘宝",
      "骗术对决",
      "怪咖师徒",
      "市井奇谈"
    ],
    "oneLine": "一个看似落魄的老江湖，靠三寸不烂之舌和一身假把式，在骗局与追杀之间硬生生搅出一场荒唐又热血的江湖风云。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1277",
    "title": "女人一部分",
    "url": "./movie-1277.html",
    "cover": "./77.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2027",
    "genre": "剧情, 女性, 社会",
    "tags": [
      "女性群像",
      "身份认同",
      "多元",
      "写实"
    ],
    "oneLine": "一座公寓里四个不同年龄、肤色、阶层的女人，每个人都觉得自己“不是一个完整的女人”。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1278",
    "title": "石榴花开",
    "url": "./movie-1278.html",
    "cover": "./78.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "家庭，历史",
    "tags": [
      "新疆往事",
      "三代女性",
      "石榴隐喻"
    ],
    "oneLine": "奶奶说石榴籽抱团不分离，可1958年那场婚礼后，家里再没人敢提“石榴”二字。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1279",
    "title": "咫尺天涯一念间",
    "url": "./movie-1279.html",
    "cover": "./79.jpg",
    "region": "中国内地",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 奇幻",
    "tags": [
      "平行宇宙",
      "错过",
      "治愈",
      "高概念"
    ],
    "oneLine": "一对情侣每次吵架都会在梦中进入平行世界，那里有他们做出不同选择的结局。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1280",
    "title": "一个人的皮影戏",
    "url": "./movie-1280.html",
    "cover": "./80.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "剧情",
    "tags": [
      "非遗",
      "传承",
      "乡村",
      "孤独",
      "时代变迁"
    ],
    "oneLine": "最后一位皮影戏老艺人，在孙子带回的现代摄影机前，独自演完了一生中最后一场没有观众的戏。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1281",
    "title": "爱在黄昏日落前",
    "url": "./movie-1281.html",
    "cover": "./81.jpg",
    "region": "法国 / 美国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": [
      "中年重逢",
      "对话电影",
      "遗憾美学"
    ],
    "oneLine": "距离维也纳一夜情过去二十年，他在巴黎签售新书，她出现在队伍最后，手里拿着一张泛黄的机票。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1282",
    "title": "地心冒险记",
    "url": "./movie-1282.html",
    "cover": "./82.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2008",
    "genre": "动作，科幻，冒险",
    "tags": [
      "3D",
      "地心",
      "家庭"
    ],
    "oneLine": "一名过气火山学教授带着侄子，通过一个废弃矿井，误入地心深处的奇异世界，那里有恐龙和发光鸟类。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1283",
    "title": "盲目飞行",
    "url": "./movie-1283.html",
    "cover": "./83.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 冒险",
    "tags": [
      "盲人机长",
      "航空灾难",
      "信任考验",
      "真实事件改编",
      "高空封闭"
    ],
    "oneLine": "机长突发失明，副驾驶失能，一名盲人乘客被拖进驾驶舱成为“人形自动驾驶仪”。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1284",
    "title": "钻石王牌",
    "url": "./movie-1284.html",
    "cover": "./84.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2020",
    "genre": "运动 / 竞技",
    "tags": [
      "棒球",
      "热血",
      "双男主",
      "成长"
    ],
    "oneLine": "天才捕手与平凡投手的矛盾搭档，在通往甲子园的路上，用血与汗交换彼此信任。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1285",
    "title": "上海秘密战",
    "url": "./movie-1285.html",
    "cover": "./85.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2021",
    "genre": "谍战, 悬疑",
    "tags": [
      "1931",
      "上海",
      "中共特科",
      "多重间谍",
      "摩斯密码"
    ],
    "oneLine": "1931年的上海，顾顺章叛变后的七十二小时内，一个从未上过前线的电报员成了整条情报网的唯一希望。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1286",
    "title": "地平线：美国传奇 第一部",
    "url": "./movie-1286.html",
    "cover": "./86.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "西部 / 史诗 / 历史",
    "tags": [
      "开拓史",
      "印第安人",
      "大制作",
      "暴力",
      "凯文·科斯特纳"
    ],
    "oneLine": "1865年，从加州到密苏里，六个不同种族的家庭，为了抢夺“地平线”这块土地，展开血腥的生存战。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1287",
    "title": "丹妮丝打电话",
    "url": "./movie-1287.html",
    "cover": "./87.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑",
    "tags": [
      "单场景",
      "电话",
      "情感勒索",
      "心理战"
    ],
    "oneLine": "一个女人接到陌生女孩丹妮丝的电话，对方说：我知道你三十年前做了什么。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1288",
    "title": "生育的世纪",
    "url": "./movie-1288.html",
    "cover": "./88.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻 / 悬疑 / 社会",
    "tags": [
      "少子化",
      "国家工程",
      "代孕",
      "伦理"
    ],
    "oneLine": "为了应对少子化危机，日本政府颁布《国民生育义务法》，每个公民必须在35岁前完成生育指标。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1289",
    "title": "花园街五号",
    "url": "./movie-1289.html",
    "cover": "./89.jpg",
    "region": "波兰",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 历史",
    "tags": [
      "二战",
      "犹太人",
      "密室",
      "诅咒"
    ],
    "oneLine": "一栋奥斯维辛幸存者住过的老楼，每一任房客都在入住一年后离奇死亡。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1290",
    "title": "老夫子三救傻仔明粤语",
    "url": "./movie-1290.html",
    "cover": "./90.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 动画, 动作",
    "tags": [
      "经典IP",
      "跨次元",
      "港式幽默",
      "无厘头"
    ],
    "oneLine": "老夫子为救被外星人抓走的傻仔明，穿越进自己笔下的漫画世界，却发现笔才是毁灭宇宙的钥匙。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1291",
    "title": "马赛尔",
    "url": "./movie-1291.html",
    "cover": "./91.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "传记剧情",
    "tags": [
      "马戏团",
      "小丑",
      "二战",
      "救赎"
    ],
    "oneLine": "法国最伟大的小丑马赛尔，在二战期间用笑声掩护过数百名犹太儿童，战后却无人知晓。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1292",
    "title": "爱情和香烟",
    "url": "./movie-1292.html",
    "cover": "./92.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2005",
    "genre": "歌舞, 爱情",
    "tags": [
      "约翰·特托罗",
      "音乐剧",
      "婚外情",
      "工人阶级",
      "美式俗艳"
    ],
    "oneLine": "一名纽约消防员在妻子与性感情人之间摇摆，把生活唱成了粗俗又炽热的摇滚歌剧。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1293",
    "title": "薄暮之光",
    "url": "./movie-1293.html",
    "cover": "./93.jpg",
    "region": "芬兰",
    "type": "电影",
    "year": "2023",
    "genre": "剧情，文艺，家庭",
    "tags": [
      "北欧",
      "极昼",
      "亲情",
      "孤独",
      "治愈"
    ],
    "oneLine": "在极昼永不落山的夏日，一个被判死刑的囚犯获准回家陪女儿度过最后一个暑假。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1294",
    "title": "黑彩虹暗杀令",
    "url": "./movie-1294.html",
    "cover": "./94.jpg",
    "region": "香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 犯罪",
    "tags": [
      "杀手",
      "霓虹美学",
      "双雄"
    ],
    "oneLine": "顶级杀手“黑彩虹”接到暗杀令，目标竟是自己失散十五年的亲生女儿——一名卧底女警。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1295",
    "title": "鱼水重欢",
    "url": "./movie-1295.html",
    "cover": "./95.jpg",
    "region": "中国",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情 / 喜剧",
    "tags": [
      "契约婚姻",
      "鱼类过敏",
      "双总裁"
    ],
    "oneLine": "两个互相嫌弃的食品集团总裁被家族逼婚，偏偏其中一人对另一人公司的所有水产都严重过敏。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1296",
    "title": "黑金刚",
    "url": "./movie-1296.html",
    "cover": "./96.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1986",
    "genre": "动作科幻",
    "tags": [
      "改造人",
      "未来警察",
      "邪典经典"
    ],
    "oneLine": "黑人警察被改造成半机械人，追杀毒枭时发现自己被政府算计。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1297",
    "title": "无间有爱",
    "url": "./movie-1297.html",
    "cover": "./97.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2023",
    "genre": "剧情、爱情",
    "tags": [
      "卧底",
      "黑帮",
      "虐恋"
    ],
    "oneLine": "女卧底爱上黑帮少主，却发现少主也是警方安插的卧底。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1298",
    "title": "再也不见2021",
    "url": "./movie-1298.html",
    "cover": "./98.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 爱情 / 灾难",
    "tags": [
      "疫情",
      "隔离",
      "生死恋",
      "手机"
    ],
    "oneLine": "2021年，一对情侣因防疫政策被分隔在深圳河两岸，他们用一部手机见证了彼此最后的时光。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1299",
    "title": "刺心切骨",
    "url": "./movie-1299.html",
    "cover": "./99.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "爱情, 悬疑, 心理",
    "tags": [
      "医学生",
      "解剖",
      "病娇",
      "连环约会"
    ],
    "oneLine": "医学院解剖课上一具无名女尸的心脏里藏着一张纸条，上面写着“第七个，终于等到你”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1300",
    "title": "怒海恶客",
    "url": "./movie-1300.html",
    "cover": "./100.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作，惊悚，灾难",
    "tags": [
      "海盗",
      "风暴",
      "游轮",
      "孤胆",
      "救援"
    ],
    "oneLine": "一场超级风暴中，一伙穷凶极恶的海盗登上了一艘豪华游轮，而船上一个沉默的水手是唯一的希望。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1301",
    "title": "神龙星主",
    "url": "./movie-1301.html",
    "cover": "./101.jpg",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2025",
    "genre": "科幻 / 热血 / 冒险",
    "tags": [
      "星域征战",
      "龙族血脉",
      "机甲武装",
      "少年成长",
      "远古遗迹",
      "宇宙联盟"
    ],
    "oneLine": "被流放到边缘星域的少年意外唤醒沉睡龙魂，从此踏上争夺“星主”之位的宇宙征途。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1302",
    "title": "娜塔丽·伍德之谜",
    "url": "./movie-1302.html",
    "cover": "./102.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "传记 / 悬疑",
    "tags": [
      "旧好莱坞",
      "溺水",
      "重查旧案",
      "女性视角"
    ],
    "oneLine": "一名女记者重查影星娜塔丽·伍德溺亡案，揭开水面下的权力游戏。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1303",
    "title": "感受热浪",
    "url": "./movie-1303.html",
    "cover": "./103.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2023",
    "genre": "爱情，喜剧，剧情",
    "tags": [
      "夏日",
      "旅行",
      "自我发现",
      "女同"
    ],
    "oneLine": "即将结婚的准新娘，在西班牙海岛的单身派对上，被一名神秘女潜水员彻底征服。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1304",
    "title": "断魂咒",
    "url": "./movie-1304.html",
    "cover": "./104.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2007",
    "genre": "恐怖",
    "tags": [
      "降头",
      "巫术",
      "血腥",
      "高概念",
      "诅咒"
    ],
    "oneLine": "只有杀死下咒之人才能活命，但每杀死一个巫师，诅咒就会转移到新死者的身上。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1305",
    "title": "狩猎记",
    "url": "./movie-1305.html",
    "cover": "./105.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑、犯罪、荒野",
    "tags": [
      "东北",
      "猎人",
      "连环失踪",
      "雪山追逐",
      "复仇"
    ],
    "oneLine": "东北老猎人发现深山失踪案背后，藏着一个以猎杀猎人为乐的疯狂凶手。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1306",
    "title": "关原之战",
    "url": "./movie-1306.html",
    "cover": "./106.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2017",
    "genre": "历史，战争，动作",
    "tags": [
      "战国时代",
      "石田三成",
      "德川家康"
    ],
    "oneLine": "决定日本命运的关原之战前夜，石田三成的谋士小早川秀秋，因为一顿饭吃错了菜，决定了整场战争的走向。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1307",
    "title": "证人",
    "url": "./movie-1307.html",
    "cover": "./107.jpg",
    "region": "美国 / 德国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚 / 犯罪 / 剧情",
    "tags": [
      "密室审讯",
      "记忆碎片",
      "反转结局",
      "法律伦理"
    ],
    "oneLine": "一名失明的老妇人是黑帮灭门案的唯一“目击者”，警方只能用通感技术让她“触摸”当时的记忆。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1308",
    "title": "大明按察使",
    "url": "./movie-1308.html",
    "cover": "./108.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "悬疑 / 古装",
    "tags": [
      "明朝",
      "探案",
      "反腐",
      "权谋"
    ],
    "oneLine": "大明按察使周新在“靖难之役”后的乱局中，接连查出血衣案背后的皇权阴谋。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1309",
    "title": "色情男女",
    "url": "./movie-1309.html",
    "cover": "./109.jpg",
    "region": "香港",
    "type": "电影",
    "year": "1996",
    "genre": "剧情 / 爱情",
    "tags": [
      "文艺",
      "情色",
      "行业揭秘",
      "梦想",
      "张国荣"
    ],
    "oneLine": "一个郁郁不得志的文艺片导演被迫拍三级片，却在片场找到了艺术与情欲的边界。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1310",
    "title": "超级带货王",
    "url": "./movie-1310.html",
    "cover": "./110.jpg",
    "region": "中国",
    "type": "网络剧",
    "year": "2024",
    "genre": "喜剧，职场，商战",
    "tags": [
      "直播带货",
      "小镇青年",
      "工厂逆袭",
      "黑心竞品"
    ],
    "oneLine": "县城五金厂倒闭后，三个失业青年靠卖“拧螺丝神器”成为带货界泥石流。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1311",
    "title": "夺命之眼",
    "url": "./movie-1311.html",
    "cover": "./111.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 恐怖",
    "tags": [
      "视觉犯罪",
      "生物识别",
      "黑色科技"
    ],
    "oneLine": "一只能看穿死亡瞬间的仿生义眼，让失业调酒师成了连环杀手的头号猎物。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1312",
    "title": "下一站，天国",
    "url": "./movie-1312.html",
    "cover": "./112.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "剧情奇幻",
    "tags": [
      "生死",
      "治愈",
      "哲学",
      "温情",
      "慢节奏"
    ],
    "oneLine": "人死后会在一座中转站停留一周，工作人员要求逝者选出此生最难忘的一段记忆，然后带着它去往天国。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1313",
    "title": "脱线帝国",
    "url": "./movie-1313.html",
    "cover": "./113.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻喜剧",
    "tags": [
      "蠢蛋",
      "太空歌剧",
      "政治讽刺"
    ],
    "oneLine": "银河系最强大的帝国，实际上是由一个沉迷宠物游戏的人工智能在管理。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1314",
    "title": "暴力庄园",
    "url": "./movie-1314.html",
    "cover": "./114.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情, 犯罪, 悬疑",
    "tags": [
      "黑帮",
      "家族",
      "庄园",
      "继承"
    ],
    "oneLine": "当残暴的黑帮教父在自家庄园暴毙，他三个从未沾手家族生意的孩子必须在一夜间决定：是夺权，还是逃亡。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1315",
    "title": "怪奇理发院",
    "url": "./movie-1315.html",
    "cover": "./115.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "恐怖 / 喜剧 / 奇幻",
    "tags": [
      "理发店",
      "每集一个怪谈",
      "黑色幽默"
    ],
    "oneLine": "芝加哥一家老旧理发店里，第三把椅子被诅咒了，坐上去的客人都会说出自己最想隐瞒的秘密，然后离奇死去。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1316",
    "title": "做乐生活",
    "url": "./movie-1316.html",
    "cover": "./116.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "喜剧，音乐，都市",
    "tags": [
      "乐队",
      "中年",
      "梦想",
      "治愈",
      "合租"
    ],
    "oneLine": "三个失意的中年人合租一屋，为了生活重组乐队，却发现最大的对手是楼上小孩的练琴声。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1317",
    "title": "希尔玛",
    "url": "./movie-1317.html",
    "cover": "./117.jpg",
    "region": "瑞典",
    "type": "电影",
    "year": "2022",
    "genre": "传记, 艺术剧情, 女性成长",
    "tags": [
      "抽象艺术",
      "灵性探索",
      "时代偏见",
      "女性先驱",
      "艺术革命"
    ],
    "oneLine": "一个被时代忽视的女艺术家，在宗教、灵性与自我信念之间不断开凿通道，最终把看不见的世界画成了可被理解的图像。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1318",
    "title": "男团秘事",
    "url": "./movie-1318.html",
    "cover": "./118.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑剧情",
    "tags": [
      "偶像",
      "娱乐圈",
      "暗黑",
      "卧底",
      "真相"
    ],
    "oneLine": "当红男团队长被发现在家中身亡，刚入团的第七名成员竟是警方派来调查的卧底。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1319",
    "title": "侠在江湖漂",
    "url": "./movie-1319.html",
    "cover": "./119.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作，武侠，喜剧",
    "tags": [
      "江湖",
      "反套路",
      "小人物",
      "喜剧"
    ],
    "oneLine": "一个只会轻功的客栈跑堂，为还债被迫冒充绝命剑客，却在各路高手中越陷越深。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1320",
    "title": "魅力四射 4：一鼓作气",
    "url": "./movie-1320.html",
    "cover": "./120.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2013",
    "genre": "运动 / 歌舞",
    "tags": [
      "啦啦队",
      "高中联赛",
      "团队精神",
      "伤病归来",
      "燃炸现场"
    ],
    "oneLine": "失去左腿的天才啦啦队长并没有放弃，她用一支特制的拐杖舞，带领垫底的队伍杀入全国总决赛。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1321",
    "title": "俏探女娇娃",
    "url": "./movie-1321.html",
    "cover": "./121.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "1978",
    "genre": "动作 / 喜剧 / 悬疑",
    "tags": [
      "女性",
      "侦探",
      "复古",
      "乌龙",
      "功夫"
    ],
    "oneLine": "六十年代台北，时尚杂志编辑白天写穿搭，夜晚扮名媛破案，却错把真凶当成了追求者。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1322",
    "title": "王牌御史",
    "url": "./movie-1322.html",
    "cover": "./122.jpg",
    "region": "中国",
    "type": "动画剧集",
    "year": "2025",
    "genre": "搞笑, 奇幻, 校园",
    "tags": [
      "捉妖",
      "反差萌",
      "吐槽向",
      "现代神话"
    ],
    "oneLine": "一个懒散的“王牌御史”和他的暴力萝莉搭档，表面是高中生，实际负责维护城市人妖秩序。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1323",
    "title": "林中漫步",
    "url": "./movie-1323.html",
    "cover": "./123.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2015",
    "genre": "剧情 / 冒险 / 喜剧",
    "tags": [
      "徒步",
      "老年",
      "友谊",
      "公路片",
      "治愈"
    ],
    "oneLine": "两个年过六旬、体态发福的老友，试图重装徒步全美最险峻的阿巴拉契亚小径。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1324",
    "title": "当你微笑时",
    "url": "./movie-1324.html",
    "cover": "./124.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2023",
    "genre": "家庭 / 剧情 / 治愈",
    "tags": [
      "单亲家庭",
      "自闭症哥哥",
      "烘焙",
      "社区温情"
    ],
    "oneLine": "父母车祸后，叛逆的高中妹妹不得不照顾患有自闭症的天才烘焙哥哥，两人在一间即将倒闭的面包店里重建人生。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1325",
    "title": "我的叔叔国语",
    "url": "./movie-1325.html",
    "cover": "./125.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "家庭 / 喜剧",
    "tags": [
      "方言",
      "代际冲突",
      "沪漂",
      "温馨治愈"
    ],
    "oneLine": "海归精英大侄子，遇上了满口上海话、抠门到极致的退休弄堂阿叔。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1326",
    "title": "狗十三",
    "url": "./movie-1326.html",
    "cover": "./126.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 家庭",
    "tags": [
      "现实主义",
      "成长",
      "宠物"
    ],
    "oneLine": "十三岁少女丢了一只狗，全家人用一只假狗去骗她，她却要用一辈子去学会“懂事”。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1327",
    "title": "湮灭",
    "url": "./movie-1327.html",
    "cover": "./127.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "科幻、惊悚",
    "tags": [
      "心理恐怖",
      "未知领域",
      "自我毁灭",
      "女性主角"
    ],
    "oneLine": "一支全女性科学家小队进入神秘“X区”，寻找丈夫失踪真相，却逐渐被未知力量侵蚀。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1328",
    "title": "猎艳宝典",
    "url": "./movie-1328.html",
    "cover": "./128.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2020",
    "genre": "都市 / 喜剧 / 爱情",
    "tags": [
      "游戏人间",
      "反套路",
      "女性视角",
      "双向教学"
    ],
    "oneLine": "花花公子撰写《猎艳宝典》收割感情，被三位女孩联手写出一本《反猎艳宝典》反杀成了稀有舔狗。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1329",
    "title": "玛丽莲有深黑之眸",
    "url": "./movie-1329.html",
    "cover": "./129.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2022",
    "genre": "剧情文艺",
    "tags": [
      "女性群像",
      "那不勒斯",
      "欲望与秘密"
    ],
    "oneLine": "那不勒斯老城区的四个女人，因为一场葬礼重聚，深埋三十年的秘密即将揭晓。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1330",
    "title": "呆呆精灵",
    "url": "./movie-1330.html",
    "cover": "./130.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 喜剧 / 奇幻",
    "tags": [
      "动画",
      "精灵",
      "友谊",
      "森林",
      "环保"
    ],
    "oneLine": "一只整天只知道发呆的树洞精灵，意外成了拯救整片黑森林的唯一希望。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1331",
    "title": "女性瘾者：第一部",
    "url": "./movie-1331.html",
    "cover": "./131.jpg",
    "region": "丹麦/瑞典",
    "type": "电影",
    "year": "2024",
    "genre": "剧情情色",
    "tags": [
      "女性欲望",
      "解剖学",
      "哲学对白",
      "章节体"
    ],
    "oneLine": "一位自称“女性瘾者”的女子向学者讲述自己从童年到中年的性史，将其拆解成数学、钓鱼和复调音乐。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1332",
    "title": "我是海鸥",
    "url": "./movie-1332.html",
    "cover": "./132.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2026",
    "genre": "剧情、艺术、传记",
    "tags": [
      "戏中戏",
      "契诃夫",
      "抑郁症",
      "剧场"
    ],
    "oneLine": "一个罹患重度抑郁症的过气女演员，试图通过排演契诃夫的《海鸥》来结束自己的生命，却在排练中找到了活下去的意义。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1333",
    "title": "没有妈妈的10天",
    "url": "./movie-1333.html",
    "cover": "./133.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2017",
    "genre": "家庭, 喜剧",
    "tags": [
      "妈妈消失",
      "父女",
      "手忙脚乱",
      "治愈"
    ],
    "oneLine": "妈妈赌气回娘家10天，邋遢爸爸和叛逆女儿的生活彻底失控，却意外找回了亲情。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1334",
    "title": "怪诞星期五",
    "url": "./movie-1334.html",
    "cover": "./134.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "喜剧， 奇幻， 家庭",
    "tags": [
      "灵魂互换",
      "母女",
      "校园",
      "职场"
    ],
    "oneLine": "叛逆的高中生女儿和严谨的整形医生母亲，在一次离奇的激光手术事故后互换了身体。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1335",
    "title": "无声国度",
    "url": "./movie-1335.html",
    "cover": "./135.jpg",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 悬疑 / 音乐",
    "tags": [
      "聋哑人",
      "合唱团",
      "小镇疑云",
      "治愈"
    ],
    "oneLine": "一位失聪的音乐天才来到了一个全是聋哑人的小镇，他发现镇上美妙的“无声合唱”，实际上是掩盖一场尘封谋杀案的白噪音。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1336",
    "title": "辣妹刺客",
    "url": "./movie-1336.html",
    "cover": "./136.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "动作",
    "tags": [
      "女性",
      "杀手",
      "校园",
      "喜剧"
    ],
    "oneLine": "高中拉拉队队长其实是退休杀手，校庆前夜有人花十块钱要她杀一个人，而她答应了。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1337",
    "title": "离开工厂",
    "url": "./movie-1337.html",
    "cover": "./137.jpg",
    "region": "中国大陆",
    "type": "纪录片",
    "year": "2023",
    "genre": "纪录 / 社会",
    "tags": [
      "工人",
      "转型阵痛",
      "真实影像"
    ],
    "oneLine": "东北老工业区一座工厂倒闭后，五名不同年龄的工人如何面对被时代抛下的命运。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1338",
    "title": "里基·莱普与夜鹰",
    "url": "./movie-1338.html",
    "cover": "./138.jpg",
    "region": "芬兰",
    "type": "电影",
    "year": "2023",
    "genre": "音乐, 剧情, 传记",
    "tags": [
      "芬兰摇滚",
      "传奇乐队",
      "酒精与天才",
      "北欧忧郁",
      "真实事件改编"
    ],
    "oneLine": "芬兰摇滚传奇里基·莱普，在名声巅峰时选择离奇失踪。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1339",
    "title": "后劲：王建民",
    "url": "./movie-1339.html",
    "cover": "./139.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "纪录片 / 传记",
    "tags": [
      "棒球",
      "体育精神",
      "退役",
      "中年危机",
      "真实改编"
    ],
    "oneLine": "棒球投手王建民退役十年后，收到一封让他重返投手丘的神秘挑战书。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1340",
    "title": "无声火",
    "url": "./movie-1340.html",
    "cover": "./140.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2023",
    "genre": "动作， 犯罪",
    "tags": [
      "聋哑杀手",
      "复仇",
      "硬核打斗"
    ],
    "oneLine": "一个聋哑杀手被组织背叛后，靠读唇语和震动完成了不可能的反杀。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1341",
    "title": "神鬼战队",
    "url": "./movie-1341.html",
    "cover": "./141.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2024",
    "genre": "热血, 奇幻, 战斗",
    "tags": [
      "神明",
      "契约",
      "战队",
      "都市传说"
    ],
    "oneLine": "东京平凡高中生被选为“神鬼战队”第五人，需要和四位传说中的妖怪签订契约对抗噬神兽。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1342",
    "title": "人民英雄",
    "url": "./movie-1342.html",
    "cover": "./142.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 动作",
    "tags": [
      "现实主义",
      "英雄",
      "基层",
      "热血",
      "催泪"
    ],
    "oneLine": "一个被撤职的消防员，在一场地震中独自救出十七个人，却没有一个人知道他的名字。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1343",
    "title": "啦啦队之舞",
    "url": "./movie-1343.html",
    "cover": "./143.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 运动",
    "tags": [
      "青春",
      "励志",
      "校园",
      "舞蹈",
      "逆袭"
    ],
    "oneLine": "一支垫底的高中啦啦队为了保住社团，必须在三个月内赢下全国锦标赛的入场券。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1344",
    "title": "内衣秀",
    "url": "./movie-1344.html",
    "cover": "./144.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 女性",
    "tags": [
      "时尚圈",
      "身体自信",
      "职场",
      "女权",
      "维多利亚的秘密"
    ],
    "oneLine": "三位不同身材的女性闯入巴黎顶级内衣秀后台，试图颠覆行业对“完美身体”的定义。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1345",
    "title": "南布朗克斯的骑士",
    "url": "./movie-1345.html",
    "cover": "./145.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情，体育",
    "tags": [
      "国际象棋",
      "黑帮",
      "贫民窟",
      "天才"
    ],
    "oneLine": "一个混迹街头的小混混，因为帮黑帮老大走棋，意外发现了自己的国际象棋天赋。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1346",
    "title": "棋盘斩",
    "url": "./movie-1346.html",
    "cover": "./146.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 惊悚",
    "tags": [
      "围棋",
      "杀手",
      "策略",
      "复仇"
    ],
    "oneLine": "最顶级的杀手，用围棋布局杀人，直到他遇到了一个只会下“笨棋”的目标。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1347",
    "title": "埃宫艳异",
    "url": "./movie-1347.html",
    "cover": "./147.jpg",
    "region": "英国 / 埃及",
    "type": "电影",
    "year": "2020",
    "genre": "历史 / 冒险 / 奇幻",
    "tags": [
      "埃及",
      "法老",
      "诅咒",
      "探险"
    ],
    "oneLine": "1922年，一名女考古学家在帝王谷发现一座未被盗掘的陵墓，墓主竟是历史上从未记载的女法老。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1348",
    "title": "飞哥大英雄",
    "url": "./movie-1348.html",
    "cover": "./148.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "动作，喜剧，都市",
    "tags": [
      "外卖员",
      "超级英雄",
      "草根",
      "正能量"
    ],
    "oneLine": "一个外卖小哥被闪电击中后力大无穷，他用超能力干的第一件事是清理小区垃圾。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1349",
    "title": "九龙冰室",
    "url": "./movie-1349.html",
    "cover": "./149.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 动作",
    "tags": [
      "古惑仔",
      "退隐",
      "父子情",
      "冰室"
    ],
    "oneLine": "退隐江湖的前拳手在九龙城寨旧址开冰室，直到儿子被黑帮逼着贩毒，他不得不重拾染血拳套。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1350",
    "title": "蜜月",
    "url": "./movie-1350.html",
    "cover": "./150.jpg",
    "region": "西班牙 / 美国",
    "type": "电影",
    "year": "2014",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "新婚夫妇",
      "林中小屋",
      "身体变异",
      "心理侵蚀"
    ],
    "oneLine": "新婚夫妇的蜜月之夜，妻子开始梦游，嘴里说着连她自己都不知道的外语。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1351",
    "title": "机动警察剧场版1",
    "url": "./movie-1351.html",
    "cover": "./1.jpg",
    "region": "日本",
    "type": "剧场版动画",
    "year": "1989",
    "genre": "科幻， 警匪， 政治",
    "tags": [
      "机甲",
      "反乌托邦",
      "悬疑",
      "社会讽刺"
    ],
    "oneLine": "东京湾巨型海蚁肆虐，特车二课发现背后竟牵扯到军方禁忌的人工智能阴谋。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1352",
    "title": "六个气球",
    "url": "./movie-1352.html",
    "cover": "./2.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情",
      "绝症",
      "公路片",
      "和解"
    ],
    "oneLine": "得知母亲只剩最后六个月生命，一对性格迥异的姐妹决定开着老爷车横跨美国，完成母亲的遗愿清单。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1353",
    "title": "世界",
    "url": "./movie-1353.html",
    "cover": "./3.jpg",
    "region": "中国大陆 / 法国 / 日本",
    "type": "电影",
    "year": "2004",
    "genre": "剧情 / 都市 / 文艺",
    "tags": [
      "游乐园生活",
      "异乡漂泊",
      "情感隔阂",
      "城市孤独",
      "现实寓言"
    ],
    "oneLine": "在一座仿佛浓缩了整个地球的乐园里，几位年轻人一边扮演世界各地的人，一边困在自己的现实里无法抵达远方。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1354",
    "title": "少年包青天第一部",
    "url": "./movie-1354.html",
    "cover": "./4.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "古装， 悬疑， 推理",
    "tags": [
      "重制版",
      "少年侦探",
      "历史",
      "单元探案",
      "成长"
    ],
    "oneLine": "少年包拯初入仕途，在诡谲奇案中一步步揭开惊天阴谋。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1355",
    "title": "时光之尘",
    "url": "./movie-1355.html",
    "cover": "./5.jpg",
    "region": "希腊 / 法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 爱情",
    "tags": [
      "诗电影",
      "回忆",
      "战争",
      "流亡",
      "亲情"
    ],
    "oneLine": "一个男人在整理母亲遗物时，发现了一叠从未寄出的信，收信人是她半个世纪前失散的爱人。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1356",
    "title": "末路狂奔3",
    "url": "./movie-1356.html",
    "cover": "./6.jpg",
    "region": "丹麦",
    "type": "电影",
    "year": "2005",
    "genre": "动作, 犯罪",
    "tags": [
      "北欧",
      "黑帮",
      "绝望",
      "硬核"
    ],
    "oneLine": "毒贩姆德在逃亡中穿越整个欧洲，发现无论逃到哪里，末路永远如影随形，只因他输给了自己。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1357",
    "title": "风流侠盗走天涯",
    "url": "./movie-1357.html",
    "cover": "./7.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1997",
    "genre": "动作 / 冒险 / 喜剧",
    "tags": [
      "侠盗传奇",
      "机关奇宝",
      "江湖戏谑",
      "双面身份",
      "追逃搭档",
      "浪迹天涯"
    ],
    "oneLine": "一个以偷盗恶霸财物为生的江湖侠盗，被迫和前来缉捕他的女捕头同行，结果一路偷到真相、笑到天涯，也把自己偷回了正义一边。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1358",
    "title": "爱因斯坦与原子弹",
    "url": "./movie-1358.html",
    "cover": "./8.jpg",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2023",
    "genre": "传记 / 历史 / 剧情",
    "tags": [
      "科学伦理",
      "二战",
      "曼哈顿计划",
      "道德困境",
      "黑白与彩色交织"
    ],
    "oneLine": "当亲手释放了恶魔的力量，那个写信给罗斯福的天才，余生都在与自己的影子搏斗。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1359",
    "title": "云中四步",
    "url": "./movie-1359.html",
    "cover": "./9.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 家庭",
    "tags": [
      "舞蹈",
      "山村",
      "父女",
      "传承"
    ],
    "oneLine": "一位患阿尔茨海默病的父亲，用一生只教会女儿四步云中舞。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1360",
    "title": "和平年代",
    "url": "./movie-1360.html",
    "cover": "./10.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "剧情, 历史, 家庭",
    "tags": [
      "改革开放",
      "三代人",
      "岁月变迁",
      "温情"
    ],
    "oneLine": "一个东北工业家庭从90年代下岗潮到新时代复兴的三十年沧桑巨变。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1361",
    "title": "小意外",
    "url": "./movie-1361.html",
    "cover": "./11.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 家庭",
    "tags": [
      "亲情",
      "治愈",
      "日常",
      "反转"
    ],
    "oneLine": "一场车祸让母亲只记得女儿十七岁前的样子，女儿不得不每天扮演高中时的自己。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1362",
    "title": "鬼迷藏",
    "url": "./movie-1362.html",
    "cover": "./12.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖",
    "tags": [
      "都市传说",
      "民俗恐怖",
      "密室逃脱"
    ],
    "oneLine": "七个年轻人玩捉迷藏招来怨灵，游戏变死亡诅咒，想活命必须找到最后躲藏者。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1363",
    "title": "人民公敌",
    "url": "./movie-1363.html",
    "cover": "./13.jpg",
    "region": "挪威",
    "type": "剧集",
    "year": "2021",
    "genre": "剧情 / 政治 / 惊悚",
    "tags": [
      "民粹主义",
      "媒体操控",
      "政治黑化",
      "舆论审判",
      "北欧 noir"
    ],
    "oneLine": "一位理想主义市长推行环保新政，却被媒体塑造成“卖国贼”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1364",
    "title": "粽邪",
    "url": "./movie-1364.html",
    "cover": "./14.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2018",
    "genre": "恐怖 / 民俗",
    "tags": [
      "送肉粽",
      "民俗禁忌",
      "吊死鬼",
      "仪式"
    ],
    "oneLine": "台湾鹿港小镇的“送肉粽”除煞仪式意外失败，参与直播的年轻人接连被“粽线”勒死。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1365",
    "title": "王牌部队",
    "url": "./movie-1365.html",
    "cover": "./15.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "genre": "军旅 / 动作",
    "tags": [
      "特种兵",
      "训练",
      "成长",
      "热血",
      "兄弟情"
    ],
    "oneLine": "一支由“兵王”刺头和“学霸”菜鸟组成的杂牌军，必须在三个月内逆袭成为全军区第一的特种部队。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1366",
    "title": "驯鹿宝贝",
    "url": "./movie-1366.html",
    "cover": "./16.jpg",
    "region": "芬兰",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 家庭",
    "tags": [
      "圣诞老人",
      "驯鹿",
      "濒危物种",
      "治愈"
    ],
    "oneLine": "北极圈里最后一只会说人话的驯鹿，被一个自闭症小女孩发现了。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1367",
    "title": "青春冲动",
    "url": "./movie-1367.html",
    "cover": "./17.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "1992",
    "genre": "剧情 / 爱情",
    "tags": [
      "怀旧青春",
      "理想主义",
      "体校生",
      "时代伤痕"
    ],
    "oneLine": "上世纪九十年代初，两名体校少年的青春在理想与现实的碰撞中，绽放出最冲动也最脆弱的花火。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1368",
    "title": "巴黎苏醒",
    "url": "./movie-1368.html",
    "cover": "./18.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑, 爱情",
    "tags": [
      "失忆",
      "黑帮",
      "浪漫惊悚"
    ],
    "oneLine": "一名女子在巴黎的酒店浴缸中醒来，身边全是血和一笔巨款，而她完全不记得自己是谁以及昨晚发生了什么。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1369",
    "title": "女演员原田久子",
    "url": "./movie-1369.html",
    "cover": "./19.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2015",
    "genre": "剧情, 传记",
    "tags": [
      "昭和",
      "艺能界",
      "女性",
      "黑白色调",
      "内心戏"
    ],
    "oneLine": "昭和时代的传奇女演员原田久子，在一次采访中，回顾自己辉煌又伤痕累累的一生。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1370",
    "title": "剧作家的灿烂人生",
    "url": "./movie-1370.html",
    "cover": "./20.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情，传记，文艺",
    "tags": [
      "作家",
      "晚年",
      "回忆与创作",
      "生命诗篇"
    ],
    "oneLine": "一位垂垂老矣的著名剧作家决定写下此生最后一出戏，而这出戏的主角，是他一直隐瞒身份的同性恋人。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1371",
    "title": "哈尔滨一九四四",
    "url": "./movie-1371.html",
    "cover": "./21.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "谍战, 悬疑, 历史",
    "tags": [
      "伪满洲国",
      "双面间谍",
      "日本特务",
      "宋卓文"
    ],
    "oneLine": "1944年的哈尔滨，一名地下党冒充已被杀的哥哥，潜入日本特务机关，却要同时扮演好“两个人”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1372",
    "title": "斯莱思狩猎传奇",
    "url": "./movie-1372.html",
    "cover": "./22.jpg",
    "region": "英国",
    "type": "电视剧",
    "year": "2021",
    "genre": "奇幻动作 / 冒险",
    "tags": [
      "传说猎杀",
      "家族秘史",
      "北境政治",
      "时间裂隙",
      "队友情"
    ],
    "oneLine": "斯莱思原本是普通佣兵，拿到会映出猎物记忆的银镜后得知“镜狼”每次降临前夕都会吞噬见证者，五十个夜晚后北境王国或将陷入时间失序。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1373",
    "title": "长春花园",
    "url": "./movie-1373.html",
    "cover": "./23.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 历史",
    "tags": [
      "伪满时期",
      "间谍",
      "钢琴师",
      "诗意"
    ],
    "oneLine": "1944年长春，一位失明钢琴师每晚在花园弹琴，琴声里藏着伪满高官们的情报密码。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1374",
    "title": "爱情不流泪",
    "url": "./movie-1374.html",
    "cover": "./24.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2022",
    "genre": "爱情、家庭、伦理",
    "tags": [
      "虐恋",
      "女性成长",
      "代际和解"
    ],
    "oneLine": "为了替母亲还债，她嫁给了植物人少爷，却意外发现了这个家族隐藏三十年的眼泪秘密。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1375",
    "title": "翡翠森林",
    "url": "./movie-1375.html",
    "cover": "./25.jpg",
    "region": "台湾 / 日本",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻 / 剧情 / 环保",
    "tags": [
      "神秘森林",
      "生态寓言",
      "中日合拍"
    ],
    "oneLine": "一名植物学家深入台湾中央山脉寻找传说中的“翡翠森林”，发现这片森林会吞噬所有心怀恶意的人。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1376",
    "title": "牧师神探第十季",
    "url": "./movie-1376.html",
    "cover": "./26.jpg",
    "region": "英国",
    "type": "电视剧",
    "year": "2026",
    "genre": "犯罪、剧情",
    "tags": [
      "英伦",
      "宗教",
      "连环杀手",
      "最终季"
    ],
    "oneLine": "退休老牧师被召回梵蒂冈，调查一桩跨越三任教宗的谋杀案，而凶手可能是上帝本人。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1377",
    "title": "神女有心粤语",
    "url": "./movie-1377.html",
    "cover": "./27.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2023",
    "genre": "奇幻 / 古装 / 爱情",
    "tags": [
      "粤语原声",
      "神仙下凡",
      "市井喜剧"
    ],
    "oneLine": "一位因得罪玉帝被贬凡间的神女，必须靠经营一家倒闭的凉茶铺来修炼人间“情”字才能重返天庭。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1378",
    "title": "火锅英雄",
    "url": "./movie-1378.html",
    "cover": "./28.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "重庆",
      "火锅",
      "劫匪",
      "小人物"
    ],
    "oneLine": "三个开火锅店的怂包欠债累累，决定去抢银行，却撞上了另一伙真劫匪。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1379",
    "title": "荣归1978",
    "url": "./movie-1379.html",
    "cover": "./29.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 历史 / 家庭",
    "tags": [
      "知青",
      "改革开放",
      "情感纠葛",
      "命运"
    ],
    "oneLine": "三个知青在1978年高考恢复前夜冒死偷渡回城，三十年后却发现当年的一切都是一场骗局。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1380",
    "title": "我的狐仙女友",
    "url": "./movie-1380.html",
    "cover": "./30.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2027",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "漫改",
      "同居",
      "妖怪",
      "甜宠"
    ],
    "oneLine": "普通高中生救了一只受伤的白狐，没想到第二天醒来，身边躺着一个长着毛茸茸耳朵的绝美少女。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1381",
    "title": "深呼吸的必要",
    "url": "./movie-1381.html",
    "cover": "./31.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 家庭",
    "tags": [
      "潜水",
      "自闭症",
      "兄弟",
      "冲绳"
    ],
    "oneLine": "患有自闭症的哥哥只会在水下说话，弟弟带他回冲绳，用一次深潜完成兄弟间迟到二十年的对话。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1382",
    "title": "沙漠神兵",
    "url": "./movie-1382.html",
    "cover": "./32.jpg",
    "region": "法国 / 摩洛哥",
    "type": "电影",
    "year": "2021",
    "genre": "动作 / 战争 / 军事",
    "tags": [
      "外籍兵团",
      "人质营救",
      "沙尘暴战术",
      "硬核写实"
    ],
    "oneLine": "一支法国外籍兵团小分队穿越撒哈拉腹地拯救被劫医生，却发现人质自愿为恐怖分子做断肢再植手术。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1383",
    "title": "赤裸格斗",
    "url": "./movie-1383.html",
    "cover": "./33.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 犯罪",
    "tags": [
      "地下格斗",
      "女性复仇",
      "暴力美学"
    ],
    "oneLine": "女记者潜入地下裸拳俱乐部，却发现这里的规则不是击倒，而是直播死亡。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1384",
    "title": "折剑传奇",
    "url": "./movie-1384.html",
    "cover": "./34.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "武侠、动作、剧情",
    "tags": [
      "冷兵器",
      "复仇",
      "江湖恩怨",
      "兵器谱",
      "硬核武打"
    ],
    "oneLine": "神兵“折剑”每代主人都会死于非命，铸剑师之子为洗清家族诅咒，踏上了重铸此剑、斩断宿命的道路。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1385",
    "title": "天堂狗生死恋",
    "url": "./movie-1385.html",
    "cover": "./35.jpg",
    "region": "日本",
    "type": "动画电影",
    "year": "2025",
    "genre": "奇幻爱情",
    "tags": [
      "催泪",
      "转世",
      "人狗情",
      "温情"
    ],
    "oneLine": "柴犬小八死后不愿投胎，在冥界打工攒积分，只为换取与已故主人重逢的三分钟。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1386",
    "title": "秀色雄心",
    "url": "./movie-1386.html",
    "cover": "./36.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 运动, 女性",
    "tags": [
      "女子健美",
      "身体焦虑",
      "性别偏见",
      "逆袭",
      "真实故事改编"
    ],
    "oneLine": "一个被嘲笑“不像女人”的胖女孩，决心成为世界级健美冠军。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1387",
    "title": "木府风云",
    "url": "./movie-1387.html",
    "cover": "./37.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "历史，古装",
    "tags": [
      "明代",
      "云南",
      "土司",
      "权谋",
      "女性成长"
    ],
    "oneLine": "明朝中期，木府千金卷入权力斗争，从天真少女成长为掌控丽江的“女土司”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1388",
    "title": "用爱征服一切",
    "url": "./movie-1388.html",
    "cover": "./38.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 歌舞, 喜剧",
    "tags": [
      "包办婚姻",
      "伪娘",
      "家族和解",
      "宝莱坞"
    ],
    "oneLine": "为了帮妹妹逃婚，哥哥男扮女装嫁入豪门，却发现自己爱上了“未婚夫”。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1389",
    "title": "政坛旋风",
    "url": "./movie-1389.html",
    "cover": "./39.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "政治、惊悚、剧情",
    "tags": [
      "总统竞选",
      "暗箱操作",
      "媒体战争"
    ],
    "oneLine": "一位民调遥遥领先的独立候选人，发现自己其实是一场政治实验的“AI生成产物”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1390",
    "title": "北平以北",
    "url": "./movie-1390.html",
    "cover": "./40.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "历史 / 战争",
    "tags": [
      "北平和平解放",
      "国共谈判",
      "傅作义",
      "黑白与彩色交替"
    ],
    "oneLine": "1948年冬，一个国民党军官和一个共产党地下党员被困在长城脚下的烽火台里。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1391",
    "title": "我的大明星",
    "url": "./movie-1391.html",
    "cover": "./41.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧, 爱情",
    "tags": [
      "娱记",
      "顶流男星",
      "假戏真做",
      "娱乐圈",
      "乌龙"
    ],
    "oneLine": "菜鸟娱记卧底成顶流男星的私人保姆，却发现对方是个生活废柴，还死活要娶她。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1392",
    "title": "梅露可物语",
    "url": "./movie-1392.html",
    "cover": "./42.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 冒险 / 治愈",
    "tags": [
      "游戏改编",
      "手绘风",
      "治愈",
      "友情",
      "异世界"
    ],
    "oneLine": "失去记忆的少年与瓶中小小少女，踏上寻找“心之泪”的旅行。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1393",
    "title": "军情五处：利益之争",
    "url": "./movie-1393.html",
    "cover": "./43.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 惊悚 / 谍战",
    "tags": [
      "特工对决",
      "政治阴谋",
      "权力游戏"
    ],
    "oneLine": "当退役特工发现新上任的首相竟是潜伏多年的外国间谍，他必须独自对抗整个国家机器。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1394",
    "title": "阿亚米",
    "url": "./movie-1394.html",
    "cover": "./44.jpg",
    "region": "以色列, 巴勒斯坦",
    "type": "电影",
    "year": "2009",
    "genre": "剧情, 犯罪, 社会现实",
    "tags": [
      "社区冲突",
      "族群边界",
      "家族债务",
      "少年成长",
      "多线叙事"
    ],
    "oneLine": "在港口边缘的混杂社区里，一场看似普通的债务纠纷，最终把几个少年与大人的秘密一起推向无法回头的暴力深处。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1395",
    "title": "枫叶少年",
    "url": "./movie-1395.html",
    "cover": "./45.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 儿童 / 运动",
    "tags": [
      "冰球",
      "留守儿童",
      "热血",
      "梦想"
    ],
    "oneLine": "东北枫叶镇的一群留守儿童，因一支破冰球队和被判死刑的前国手教练，走上了全国联赛的逆袭之路。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1396",
    "title": "黄飞鸿之二:男儿当自强",
    "url": "./movie-1396.html",
    "cover": "./46.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "动作 / 武侠 / 历史",
    "tags": [
      "民族大义",
      "白莲教",
      "清末乱世"
    ],
    "oneLine": "黄飞鸿在晚清的广州街头，一边要对抗装神弄鬼的白莲教，一边要唤醒愚昧民众对西洋医学的信任。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1397",
    "title": "传奇海盗船长黑胡子（上）",
    "url": "./movie-1397.html",
    "cover": "./47.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "动作、冒险、传记",
    "tags": [
      "海盗",
      "宝藏",
      "传奇",
      "海洋",
      "权力斗争"
    ],
    "oneLine": "黑胡子从底层水手崛起，为夺传说武器不惜背叛兄弟，踏上血腥船长之路。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1398",
    "title": "女兵报到",
    "url": "./movie-1398.html",
    "cover": "./48.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2009",
    "genre": "喜剧, 家庭, 运动",
    "tags": [
      "军校",
      "橄榄球",
      "女权",
      "励志"
    ],
    "oneLine": "叛逆少女被父亲送进军校，却成了男子橄榄球队第一位女四分卫。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1399",
    "title": "辉夜姬物语",
    "url": "./movie-1399.html",
    "cover": "./49.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "动画",
    "tags": [
      "传说",
      "公主",
      "月亮",
      "自由",
      "手绘"
    ],
    "oneLine": "月亮公主辉夜姬不愿回天宫，只想在人间当一个普通女孩。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1400",
    "title": "故乡1972",
    "url": "./movie-1400.html",
    "cover": "./50.jpg",
    "region": "越南",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 战争 / 家庭",
    "tags": [
      "越南战争",
      "难民船",
      "旧照片"
    ],
    "oneLine": "一张1972年拍的泛黄全家福，让失散半个世纪的三兄妹，在一艘破船上重逢。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1401",
    "title": "艳尼影后失忆汉",
    "url": "./movie-1401.html",
    "cover": "./51.jpg",
    "region": "香港",
    "type": "犯罪悬疑电影",
    "year": "2022",
    "genre": "犯罪 / 悬疑 / 黑色喜剧",
    "tags": [
      "影后失踪",
      "失忆设定",
      "娱乐资本",
      "真假身份",
      "公开号码"
    ],
    "oneLine": "失去三天记忆的影后和前特工一起拍现场重演，在一次又一次伪装直播中发现，所谓的替身阴谋早已把他们的过去、友谊和自由都重新签过名。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1402",
    "title": "侠影神捕·边关秘图",
    "url": "./movie-1402.html",
    "cover": "./52.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "古装悬疑动作",
    "tags": [
      "捕快",
      "边关",
      "夺宝",
      "女侠"
    ],
    "oneLine": "边关神捕追查失窃的军事秘图，却发现幕后主使是已被处死的上一任神捕。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1403",
    "title": "小欢喜",
    "url": "./movie-1403.html",
    "cover": "./53.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "家庭 / 喜剧 / 生活",
    "tags": [
      "邻里关系",
      "治愈轻喜",
      "众生相"
    ],
    "oneLine": "北京一条老胡同里的五户人家，在鸡毛蒜皮与悲欢离合中，找寻生活里那些小小的欢喜。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1404",
    "title": "拳王之王",
    "url": "./movie-1404.html",
    "cover": "./54.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "动作, 运动",
    "tags": [
      "泰拳",
      "复仇",
      "兄弟情",
      "擂台"
    ],
    "oneLine": "蝉联五届拳王的哥哥在擂台被活活打死，只会读书的弟弟戴上染血的拳套，踏入地下黑市。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1405",
    "title": "建房子",
    "url": "./movie-1405.html",
    "cover": "./55.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 家庭",
    "tags": [
      "农村",
      "宅基地",
      "父子矛盾",
      "现代化冲击",
      "方言电影"
    ],
    "oneLine": "父亲坚持要翻修百年危房，儿子却想卖掉宅基地进城，一对陕北父子的拉锯战。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1406",
    "title": "老爸上战场",
    "url": "./movie-1406.html",
    "cover": "./56.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2016",
    "genre": "喜剧, 战争",
    "tags": [
      "二战",
      "老年",
      "英式幽默"
    ],
    "oneLine": "养老院里的退役老兵集体出逃，就为了参加二战纪念游行，却闹出一连串乌龙。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1407",
    "title": "轻微盗窃案",
    "url": "./movie-1407.html",
    "cover": "./57.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧, 犯罪",
    "tags": [
      "小偷",
      "笨贼",
      "巧合",
      "黑色幽默",
      "多线叙事"
    ],
    "oneLine": "一个偷钱包的小偷，引发了一场牵扯黑手党、警察和修女的荒诞连锁反应。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1408",
    "title": "汤玛斯曼：骗术与自白",
    "url": "./movie-1408.html",
    "cover": "./58.jpg",
    "region": "德国",
    "type": "迷你剧",
    "year": "2026",
    "genre": "传记, 剧情",
    "tags": [
      "作家",
      "内心",
      "欺骗",
      "文学"
    ],
    "oneLine": "诺贝尔奖得主在回忆录中承认：他一生最大的作品，是自己的假身份。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1409",
    "title": "冬天过后",
    "url": "./movie-1409.html",
    "cover": "./59.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 爱情",
    "tags": [
      "二战遗孤",
      "忘年交",
      "西伯利亚"
    ],
    "oneLine": "二战结束后，一个德国孤儿与一个失去全家的苏联老兵，在西伯利亚铁路线上互相救赎。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1410",
    "title": "沉默是金",
    "url": "./movie-1410.html",
    "cover": "./60.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 犯罪",
    "tags": [
      "聋哑",
      "黑帮",
      "卧底",
      "手语"
    ],
    "oneLine": "一个聋哑人被迫成为黑帮的“清道夫”，他唯一的朋友是一台故障的录音笔，里面存着扳倒全城的证据。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1411",
    "title": "荒野独居第十季",
    "url": "./movie-1411.html",
    "cover": "./61.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "真人秀 / 生存",
    "tags": [
      "北极圈",
      "单人生存",
      "心理战",
      "极夜",
      "饥饿"
    ],
    "oneLine": "十人空降北极圈，在零下40度极夜中独居50天，这一次没有救援电话，只有“退赛即死亡”的协议。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1412",
    "title": "帕德西",
    "url": "./movie-1412.html",
    "cover": "./62.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2022",
    "genre": "历史, 战争",
    "tags": [
      "民族英雄",
      "起义",
      "冷兵器",
      "史诗"
    ],
    "oneLine": "18世纪印度最被遗忘的女王帕德西，带领一支由渔民和妇女组成的军队，对抗装备精良的英国东印度公司。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1413",
    "title": "婚礼歌手",
    "url": "./movie-1413.html",
    "cover": "./63.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1998",
    "genre": "喜剧 / 爱情 / 音乐",
    "tags": [
      "亚当·桑德勒",
      "德鲁·巴里摩尔",
      "婚礼",
      "失恋"
    ],
    "oneLine": "被未婚妻在婚礼上抛弃的婚礼歌手，遇到了一个总是做“落跑新娘”的女服务生，两个对爱情绝望的人决定联手搞砸别人的婚礼。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1414",
    "title": "春色满园关不住",
    "url": "./movie-1414.html",
    "cover": "./64.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 乡村",
    "tags": [
      "乡村振兴",
      "园艺治疗",
      "女性创业"
    ],
    "oneLine": "失婚城市女白领回到故乡，用园艺疗法带领留守妇女和老人，把荒村变成了疗愈花园。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1415",
    "title": "搏命生死限",
    "url": "./movie-1415.html",
    "cover": "./65.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "genre": "灾难动作",
    "tags": [
      "器官移植",
      "限时送达",
      "公路追逐",
      "医患情"
    ],
    "oneLine": "一颗活体心脏只有一个小时保质期，外卖小哥必须在一小时内穿越整座拥堵城市送达手术室。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1416",
    "title": "蒲提山",
    "url": "./movie-1416.html",
    "cover": "./66.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑, 冒险",
    "tags": [
      "盗墓",
      "民俗",
      "诅咒",
      "深山",
      "探秘"
    ],
    "oneLine": "一本失踪百年的族谱重现天日，将一群互不相识的人引向了蒲提山深处的禁忌之地。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1417",
    "title": "长江7号：超萌特攻队",
    "url": "./movie-1417.html",
    "cover": "./67.jpg",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "科幻, 喜剧, 动画",
    "tags": [
      "外星宠物",
      "萌系机甲",
      "校园守护",
      "环保主题"
    ],
    "oneLine": "当外星萌宠“长江7号”组建超萌特攻队，小学生们的校园日常变成了保卫地球的秘密战场。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1418",
    "title": "一时，冲动",
    "url": "./movie-1418.html",
    "cover": "./68.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 犯罪",
    "tags": [
      "犯罪",
      "心理",
      "夜生活"
    ],
    "oneLine": "一个平凡的夜晚，七个陌生人在便利店因一瓶水引发的争执，最终演变成连环命案。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1419",
    "title": "色情摄青鬼",
    "url": "./movie-1419.html",
    "cover": "./69.jpg",
    "region": "香港",
    "type": "电影",
    "year": "1998",
    "genre": "情色， 恐怖， 惊悚",
    "tags": [
      "都市传说",
      "复仇",
      "灵异",
      "成人向"
    ],
    "oneLine": "深夜网吧流传着一个诅咒：只要搜索“色情摄青鬼”，它就会从屏幕里爬出来夺走你的视力。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1420",
    "title": "你是我的毒玫瑰",
    "url": "./movie-1420.html",
    "cover": "./70.jpg",
    "region": "泰国",
    "type": "剧集",
    "year": "2023",
    "genre": "爱情 / 喜剧 / 医患",
    "tags": [
      "毒舌医生",
      "过敏体质的病人",
      "冤家同居"
    ],
    "oneLine": "最讨厌过敏病人的皮肤科医生，偏偏遇见了对阳光、水和爱情都过敏的她。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1421",
    "title": "拯女记",
    "url": "./movie-1421.html",
    "cover": "./71.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 动作, 犯罪",
    "tags": [
      "母亲复仇",
      "人口贩卖",
      "地下世界",
      "催泪"
    ],
    "oneLine": "一位聋哑母亲为救出被拐女儿，徒手撕开东南亚人口贩卖帝国的黑暗网络。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1422",
    "title": "熊出没·奇幻空间",
    "url": "./movie-1422.html",
    "cover": "./72.jpg",
    "region": "中国大陆",
    "type": "动画电影",
    "year": "2017",
    "genre": "动画, 冒险, 喜剧, 家庭",
    "tags": [
      "森林",
      "幻境",
      "伙伴",
      "宝藏",
      "想象力",
      "守护"
    ],
    "oneLine": "一张来自童年梦境的地图，把熊大熊二和光头强一起带进了会呼吸的奇幻空间，也引来想偷走它的人。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1423",
    "title": "重回1993之纵横人生",
    "url": "./movie-1423.html",
    "cover": "./73.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情/奇幻",
    "tags": [
      "重生",
      "商战",
      "时代红利",
      "逆袭"
    ],
    "oneLine": "商业帝国掌门人林世荣被亲信害死后，魂穿回1993年一个被全厂排挤的傻小子身上，决定重写商业版图。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1424",
    "title": "爱你爱到闹死你",
    "url": "./movie-1424.html",
    "cover": "./74.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 惊悚 / 黑色幽默",
    "tags": [
      "偏执狂",
      "分手暴力",
      "病娇",
      "都市寓言"
    ],
    "oneLine": "分手后，女友的“一哭二闹三上吊”升级成了“绑架、纵火、挖你家祖坟”。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1425",
    "title": "夜间话费",
    "url": "./movie-1425.html",
    "cover": "./75.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚悬疑",
    "tags": [
      "电话",
      "午夜",
      "陌生人",
      "失控"
    ],
    "oneLine": "午夜接到陌生女孩求助电话，他以为是恶作剧，挂断后发现自己家被包围。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1426",
    "title": "酒鬼都市女人们",
    "url": "./movie-1426.html",
    "cover": "./76.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情喜剧",
    "tags": [
      "女性群像",
      "酒桌文化",
      "都市生活",
      "治愈友情"
    ],
    "oneLine": "三个三十岁的女人约定每晚喝到断片，用酒精对抗职场、爱情和原生家庭的所有狗血破事。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1427",
    "title": "大灌篮",
    "url": "./movie-1427.html",
    "cover": "./77.jpg",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "year": "2008",
    "genre": "喜剧, 动作, 运动",
    "tags": [
      "篮球",
      "功夫",
      "周杰伦",
      "励志"
    ],
    "oneLine": "从小在功夫校长大的孤儿“世杰”，凭借惊人的弹跳力和精准的投篮，带领一支大学废物队创造奇迹。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1428",
    "title": "不可思议",
    "url": "./movie-1428.html",
    "cover": "./78.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑 / 惊悚 / 心理",
    "tags": [
      "催眠",
      "记忆篡改",
      "双重人格",
      "密室",
      "反转"
    ],
    "oneLine": "心理医生的新病人声称自己是个被虚构出来的人物，并拿出了证据。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1429",
    "title": "最后的假期",
    "url": "./movie-1429.html",
    "cover": "./79.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 剧情",
    "tags": [
      "临终",
      "度假",
      "乌龙",
      "治愈"
    ],
    "oneLine": "被确诊只剩三个月生命后，社畜取光养老金去五星级酒店挥霍，结果酒店把他当成了神秘富豪。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1430",
    "title": "夫妇以上，恋人未满",
    "url": "./movie-1430.html",
    "cover": "./80.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情, 剧情",
    "tags": [
      "假结婚",
      "职场恋情",
      "先婚后爱"
    ],
    "oneLine": "为了公司的高额住房补贴，两个互相看不顺眼的同事被迫开始了为期一年的伪装夫妻生活。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1431",
    "title": "派特森与芬达猫：生日奇闻",
    "url": "./movie-1431.html",
    "cover": "./81.jpg",
    "region": "瑞典",
    "type": "电影",
    "year": "2025",
    "genre": "动画/家庭/冒险",
    "tags": [
      "北欧绘本改编",
      "机智老爷爷",
      "捣蛋猫咪",
      "邻里温情"
    ],
    "oneLine": "老派特森为猫咪芬达准备生日惊喜，却引来全村的动物和一场小城风波。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1432",
    "title": "陀地驱魔人",
    "url": "./movie-1432.html",
    "cover": "./82.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2015",
    "genre": "恐怖 / 动作 / 奇幻",
    "tags": [
      "张家辉",
      "鬼片",
      "香港情怀",
      "驱魔"
    ],
    "oneLine": "能看见鬼的驱魔人阿聪，用“谈判”代替暴力，却遇上一个百年厉鬼。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1433",
    "title": "家事法庭",
    "url": "./movie-1433.html",
    "cover": "./83.jpg",
    "region": "中国内地",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情, 法律, 家庭",
    "tags": [
      "律政",
      "单元剧",
      "社会话题",
      "催泪",
      "现实主义"
    ],
    "oneLine": "年轻法官在家事法庭看尽了婚姻的溃烂，直到自己的父母为了争房产也闹到了这里。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1434",
    "title": "当男人爱上女人",
    "url": "./movie-1434.html",
    "cover": "./84.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 剧情, 文艺",
    "tags": [
      "虐恋",
      "纯爱",
      "文艺片",
      "命运纠葛"
    ],
    "oneLine": "他是沉默的聋哑画师，她是失明的富家千金，一场谎言让他们的灵魂在黑暗中碰撞。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1435",
    "title": "法官老张轶事之告状记",
    "url": "./movie-1435.html",
    "cover": "./85.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 农村",
    "tags": [
      "乡村",
      "法律",
      "轻喜剧",
      "基层",
      "法官"
    ],
    "oneLine": "村头老张因为一只公鸡被打官司，却意外翻出全村的土地承包连环案，把自家告成了被告。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1436",
    "title": "漫漫寻子路",
    "url": "./movie-1436.html",
    "cover": "./86.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 家庭 / 犯罪",
    "tags": [
      "打拐",
      "现实主义",
      "公路",
      "底层",
      "倔强"
    ],
    "oneLine": "儿子被拐五年后，老实巴交的农村父亲独自踏上万里寻子路，却发现自己竟是当年贩卖孩子的中间人。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1437",
    "title": "禁止停车",
    "url": "./movie-1437.html",
    "cover": "./87.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑，惊悚，犯罪",
    "tags": [
      "荒郊",
      "心理恐怖",
      "神秘事件",
      "录像带",
      "限时生存"
    ],
    "oneLine": "三个好友自驾游，误入一处写着“禁止停车”的荒野岔路，车子突然熄火，车内时间开始倒流。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1438",
    "title": "舍己救人",
    "url": "./movie-1438.html",
    "cover": "./88.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "灾难 / 剧情 / 英雄主义",
    "tags": [
      "事故救援",
      "普通人英雄",
      "群像叙事",
      "生死抉择",
      "责任感",
      "温情"
    ],
    "oneLine": "一场突发山洪切断山村唯一通道，原本只想接回孩子的校车司机，却在生死关头把最后的逃生机会让给了陌生人。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1439",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 恶街喋血 双子酒廊 恶魔的浪漫 奔驰的大葱 真实故事 3904英呎 缩小了的美神!! 我的唯一 黑暗魔法书 女人行 睡沙发的人 拜托了！不速之客 血肉长城 抓住幽灵 萍水相腐檐廊下 过失之子 虎胆龙威5 小小骑士一起冲 锦月如歌 如果猫从世界上消失",
    "url": "./movie-1439.html",
    "cover": "./89.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1440",
    "title": "镇灵攻略第一季",
    "url": "./movie-1440.html",
    "cover": "./90.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻，悬疑",
    "tags": [
      "民俗",
      "阴阳先生",
      "单元剧",
      "中式恐怖",
      "镇灵"
    ],
    "oneLine": "东北小镇的青年阴阳先生，用祖传手艺对付各路邪祟，却发现最后的恶灵竟是自己的前世。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1441",
    "title": "纯情罗曼史第二季",
    "url": "./movie-1441.html",
    "cover": "./91.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "动画, 爱情, 耽美",
    "tags": [
      "BL",
      "漫改",
      "纯爱",
      "日常"
    ],
    "oneLine": "苦情大学生美咲终于和超有名小说家秋彦同居，但秋彦的“前任”和“绯闻对象”接连出现，打翻了醋坛子。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1442",
    "title": "阿丕书记",
    "url": "./movie-1442.html",
    "cover": "./92.jpg",
    "region": "中国内地",
    "type": "电影",
    "year": "2023",
    "genre": "剧情、乡村、纪实",
    "tags": [
      "基层干部",
      "乡村振兴",
      "真人真事改编"
    ],
    "oneLine": "一个只有初中学历的村支书，靠一本错别字连篇的笔记本，带着全村人修通了百年未通的山路。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1443",
    "title": "摇滚骗",
    "url": "./movie-1443.html",
    "cover": "./93.jpg",
    "region": "英国",
    "type": "电视剧",
    "year": "2026",
    "genre": "喜剧 / 音乐",
    "tags": [
      "诈骗",
      "独立乐队",
      "行业讽刺"
    ],
    "oneLine": "五个失业青年假冒一支美国当红乐队，在全球巡演了三个月，赚了八千万美元，没人发现。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1444",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 蓝江传之反飞组风云 惊悚游戏 特工总裁校花宠妻 老化 我才不要和你做朋友呢 曾经想火第一季 安那其恋人 恐怖小店 窥情国语 美狄亚 爱的盛宴 高利贷者 怒战狂心 钢琴，独奏 济公活佛粤语 侦探小说 租婚男女 空中大灌篮 贞德的审判 废人帮",
    "url": "./movie-1444.html",
    "cover": "./94.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1445",
    "title": "百老汇艳史",
    "url": "./movie-1445.html",
    "cover": "./95.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情 / 歌舞 / 历史",
    "tags": [
      "百老汇",
      "爵士时代",
      "女性",
      "野心"
    ],
    "oneLine": "1920年代，三个背景迥异的女孩来到纽约争夺百老汇女皇宝座，她们的战争毁掉了整个黄金时代。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1446",
    "title": "真情无限之养母生母",
    "url": "./movie-1446.html",
    "cover": "./96.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2012",
    "genre": "家庭伦理",
    "tags": [
      "亲情抉择",
      "催泪",
      "血缘与养育",
      "女性群像"
    ],
    "oneLine": "当白血病女儿急需骨髓配型，两位“母亲”在法律与血缘间的痛苦拉锯开始了。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1447",
    "title": "夏威夷之夜",
    "url": "./movie-1447.html",
    "cover": "./97.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "惊悚 / 灾难",
    "tags": [
      "火山",
      "直播",
      "网红",
      "末日",
      "求生"
    ],
    "oneLine": "六名网红在夏威夷火山口边开狂欢派对直播，脚下的岩浆突然失去了声音。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1448",
    "title": "罗摩衍那：罗摩王子的传说",
    "url": "./movie-1448.html",
    "cover": "./98.jpg",
    "region": "印度",
    "type": "剧集",
    "year": "2025",
    "genre": "神话, 史诗, 奇幻",
    "tags": [
      "印度神话",
      "毗湿奴化身",
      "猴神哈努曼",
      "十首魔王"
    ],
    "oneLine": "被流放的王子罗摩踏上寻回爱妻的征途，他要战胜的不是魔王，而是自己内心的“神性”。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1449",
    "title": "风水2",
    "url": "./movie-1449.html",
    "cover": "./99.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑、惊悚、民俗",
    "tags": [
      "风水",
      "家族斗争",
      "煞气",
      "职场"
    ],
    "oneLine": "香港第一风水师去世后，他的三个子女为争夺“罗盘遗产”，在写字楼里互相布下连环煞。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1450",
    "title": "喋血风云",
    "url": "./movie-1450.html",
    "cover": "./100.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2002",
    "genre": "动作 / 黑帮",
    "tags": [
      "黑吃黑",
      "家族恩怨",
      "枪战"
    ],
    "oneLine": "黑帮老大的养女爱上了敌对帮派的太子爷，一场腥风血雨的复仇即将席卷全城。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1451",
    "title": "玛雅魅力",
    "url": "./movie-1451.html",
    "cover": "./101.jpg",
    "region": "美国, 墨西哥",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻, 冒险",
    "tags": [
      "玛雅文明",
      "秘境",
      "寻宝",
      "诅咒"
    ],
    "oneLine": "一名自卑的考古系女生戴上传说中的玛雅黑曜石项链后，竟获得了羽蛇神的力量，但代价是逐渐变成石头。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1452",
    "title": "重任在肩第六季",
    "url": "./movie-1452.html",
    "cover": "./102.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "犯罪 / 悬疑 / 剧情",
    "tags": [
      "反腐",
      "警匪",
      "卧底",
      "英剧"
    ],
    "oneLine": "反腐败小组接到匿名举报，这次的目标竟是自己刚殉职的传奇上司，一份加密硬盘彻底颠覆了所有人的黑白认知。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1453",
    "title": "蛇蝎美人第二季",
    "url": "./movie-1453.html",
    "cover": "./103.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "犯罪 / 悬疑 / 惊悚",
    "tags": [
      "女性犯罪",
      "反转爽剧",
      "双女主",
      "黑吃黑"
    ],
    "oneLine": "上一季结尾入狱的女骗子，在狱中认识了真正杀死她男友的女人，两人决定联手——逃出去之后，先杀对方。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1454",
    "title": "王者",
    "url": "./movie-1454.html",
    "cover": "./104.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2017",
    "genre": "犯罪 / 剧情 / 政治",
    "tags": [
      "检察官",
      "黑幕",
      "权力腐蚀",
      "爽片",
      "反转"
    ],
    "oneLine": "一心想当检察官的混混学生攀上权力核心，却发现自己的成功不过是更高层用来顶罪的人形棋子。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1455",
    "title": "通灵恶犬",
    "url": "./movie-1455.html",
    "cover": "./105.jpg",
    "region": "美国 / 加拿大",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖 / 超自然",
    "tags": [
      "恶犬",
      "灵媒",
      "小镇",
      "诅咒"
    ],
    "oneLine": "退隐的通灵师被一只地狱恶犬缠上，这只狗不仅咬人，还能在咬人的瞬间将其一生的恐惧投射到现实中。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1456",
    "title": "金缕情歌",
    "url": "./movie-1456.html",
    "cover": "./106.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "古装 / 爱情",
    "tags": [
      "刺绣",
      "替身",
      "逆袭",
      "甜虐"
    ],
    "oneLine": "绣坊奴婢替真千金入宫选秀，却因一手金缕刺绣，让皇帝和王爷都沦陷了。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1457",
    "title": "童年过后100天",
    "url": "./movie-1457.html",
    "cover": "./107.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 青春, 文艺",
    "tags": [
      "苏联遗韵",
      "少年成长",
      "夏令营",
      "初恋",
      "诗意镜头"
    ],
    "oneLine": "一个苏联少年在夏令营的100天里，经历了初恋、背叛和第一次心碎。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1458",
    "title": "恶毒一族",
    "url": "./movie-1458.html",
    "cover": "./108.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2022",
    "genre": "剧情 / 犯罪 / 家庭",
    "tags": [
      "家族黑幕",
      "遗产争夺",
      "全员恶人"
    ],
    "oneLine": "传媒大亨去世后，他的三个子女为争夺遗产互相陷害，却不知道父亲早就把财产留给了家里的女佣。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1459",
    "title": "九月的某一天",
    "url": "./movie-1459.html",
    "cover": "./109.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "爱情文艺",
    "tags": [
      "爱情",
      "文艺",
      "治愈",
      "时间循环"
    ],
    "oneLine": "一个只有一天记忆的男人，和一个想把他永远留在今天的女人，在九月某日无限循环。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1460",
    "title": "我们村里的人",
    "url": "./movie-1460.html",
    "cover": "./110.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "genre": "乡村现实 / 家庭 / 温情",
    "tags": [
      "乡村振兴",
      "返乡",
      "创业",
      "宗族",
      "邻里",
      "人情"
    ],
    "oneLine": "一座正在变新的村子里，最难改变的从来不是道路和房子，而是每个人对“日子还能不能更好”的怀疑。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1461",
    "title": "黑洞启示录",
    "url": "./movie-1461.html",
    "cover": "./111.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻 / 惊悚",
    "tags": [
      "物理",
      "灾难",
      "科学家",
      "伦理",
      "平行宇宙"
    ],
    "oneLine": "一台意外激活的粒子对撞机在地球内部制造了一个微型黑洞，倒计时48小时吞噬地球。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1462",
    "title": "命带追逐",
    "url": "./movie-1462.html",
    "cover": "./112.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2001",
    "genre": "爱情 / 喜剧",
    "tags": [
      "侯麦风",
      "算命",
      "都市小品",
      "话痨"
    ],
    "oneLine": "一个被算命先生断言“三年内没有命”的男人，开始疯狂作死，却发现自己怎么都死不了。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1463",
    "title": "烟雨红尘",
    "url": "./movie-1463.html",
    "cover": "./113.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 年代 / 爱情",
    "tags": [
      "民国",
      "谍战",
      "虐恋"
    ],
    "oneLine": "上世纪30年代，一位进步女学生爱上了温柔的书店老板，却发现他其实是军统的冷血特工。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1464",
    "title": "热恋：音乐剧",
    "url": "./movie-1464.html",
    "cover": "./114.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 歌舞",
    "tags": [
      "唱跳",
      "青春",
      "梦想",
      "甜宠"
    ],
    "oneLine": "华尔街天才程序员误入百老汇后台，被错认为新剧男主，而唯一能帮他解围的台下观众是个聋哑女孩。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1465",
    "title": "欲海奇鸳",
    "url": "./movie-1465.html",
    "cover": "./115.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "genre": "情色，悬疑",
    "tags": [
      "豪门",
      "偷情",
      "替身",
      "毒杀",
      "老港片"
    ],
    "oneLine": "富商暴毙，三个情妇各执一份遗书，而负责验尸的法医发现，死者体内有两种完全相克的毒药。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1466",
    "title": "逃出陷阱",
    "url": "./movie-1466.html",
    "cover": "./116.jpg",
    "region": "泰国，中国",
    "type": "电影",
    "year": "2021",
    "genre": "惊悚，犯罪，密室",
    "tags": [
      "网络诈骗",
      "生存",
      "反杀",
      "高智商"
    ],
    "oneLine": "被骗进电诈园区后，程序员发现所谓的“老板”，竟是十年前亲手将自己送进监狱的卧底。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1467",
    "title": "绝地奶霸",
    "url": "./movie-1467.html",
    "cover": "./117.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2005",
    "genre": "喜剧，动作，家庭",
    "tags": [
      "卧底",
      "变装",
      "胖子",
      "乌龙"
    ],
    "oneLine": "三百斤的彪悍FBI探员为追查毒贩，伪装成两百斤的“黑人大妈”混入女子教会，结果成了最受欢迎的 gossip 中心。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1468",
    "title": "家有喜妇",
    "url": "./movie-1468.html",
    "cover": "./118.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧 / 家庭",
    "tags": [
      "婆媳",
      "非传统",
      "轻喜"
    ],
    "oneLine": "儿子带回来的“完美媳妇”其实是一个入戏太深的便衣女警，她来这个家是为了找赃款。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1469",
    "title": "娱乐性行业",
    "url": "./movie-1469.html",
    "cover": "./119.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 行业 / 女性",
    "tags": [
      "好莱坞幕后",
      "经纪人战争",
      "权力游戏"
    ],
    "oneLine": "顶流经纪人的女助理被诬陷泄漏客户隐私，她反手利用整个行业的潜规则来自证清白。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1470",
    "title": "蜂蜜柠檬苏打",
    "url": "./movie-1470.html",
    "cover": "./120.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "青春爱情 / 校园 / 成长",
    "tags": [
      "酸甜",
      "初恋",
      "校园",
      "自卑",
      "夏天",
      "运动"
    ],
    "oneLine": "胆怯少女在一杯蜂蜜柠檬苏打的鼓励下，误打误撞闯进全校最耀眼男生的生活，也闯进自己的夏天。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1471",
    "title": "娘家的故事之爱的抉择",
    "url": "./movie-1471.html",
    "cover": "./121.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情，家庭，伦理",
    "tags": [
      "家庭伦理",
      "嫁女风波",
      "婆媳矛盾",
      "情感纠葛",
      "长剧经典"
    ],
    "oneLine": "三个女儿同时面临婚姻危机，娘家老宅成了她们的避难所，却也引爆了更深的家族秘密。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1472",
    "title": "卫斯理之老猫",
    "url": "./movie-1472.html",
    "cover": "./122.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "科幻， 悬疑， 恐怖",
    "tags": [
      "倪匡",
      "外星生物",
      "灵异"
    ],
    "oneLine": "一栋公寓楼里，每当月圆之夜就有老人被杀，现场留下的唯一线索是一只正在吃尸体的黑猫的脑电波记录。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1473",
    "title": "雪岭魂",
    "url": "./movie-1473.html",
    "cover": "./123.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪悬疑",
    "tags": [
      "雪山",
      "科考",
      "命案",
      "极限"
    ],
    "oneLine": "海拔六千米的雪山营地，七名科考队员被困，一场暴风雪掩盖了一起完美的谋杀。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1474",
    "title": "鬼马小精灵：新生报到",
    "url": "./movie-1474.html",
    "cover": "./124.jpg",
    "region": "美国",
    "type": "动画电影",
    "year": "2024",
    "genre": "喜剧, 家庭, 奇幻",
    "tags": [
      "萌鬼",
      "校园",
      "友情",
      "治愈"
    ],
    "oneLine": "小幽灵卡斯珀转学到凡人小学，却发现班上有另一个更古怪的转学生。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1475",
    "title": "绵绵长路",
    "url": "./movie-1475.html",
    "cover": "./125.jpg",
    "region": "法国 / 德国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 冒险",
    "tags": [
      "徒步",
      "治愈",
      "自然风光",
      "老年",
      "和解"
    ],
    "oneLine": "得知自己罹患绝症的老教授不愿在医院等死，他穿上破旧的登山靴，踏上了跨越三国、长达 2000 公里的朝圣之路。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1476",
    "title": "渔民足球队",
    "url": "./movie-1476.html",
    "cover": "./126.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "运动 / 励志",
    "tags": [
      "草根",
      "逆袭",
      "热血"
    ],
    "oneLine": "一群只会撒网的渔民，为了保住渔村，决定在沙滩足球赛上踢赢职业俱乐部。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1477",
    "title": "恶世之子",
    "url": "./movie-1477.html",
    "cover": "./127.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作，惊悚",
    "tags": [
      "反英雄",
      "犯罪",
      "暴力美学"
    ],
    "oneLine": "一个被社会遗弃的流浪汉，在获得能吸取他人恶念的超能力后，决定用最极端的方式“清洗”城市。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1478",
    "title": "伊凡·杰尼索维奇的一天",
    "url": "./movie-1478.html",
    "cover": "./128.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "古拉格",
      "索尔仁尼琴",
      "劳改营",
      "生存"
    ],
    "oneLine": "苏联劳改营里，囚犯伊凡的一天：从起床到熄灯，他唯一的目标是多活一天。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1479",
    "title": "诸神的欲望",
    "url": "./movie-1479.html",
    "cover": "./129.jpg",
    "region": "日本",
    "type": "电影",
    "year": "1968",
    "genre": "剧情, 奇幻, 伦理",
    "tags": [
      "孤岛",
      "原始崇拜",
      "禁忌",
      "今村昌平"
    ],
    "oneLine": "南海孤岛，神官家族用处女献祭海神，从东京来的记者发现了更恐怖的循环。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1480",
    "title": "非常盗3",
    "url": "./movie-1480.html",
    "cover": "./130.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "动作，犯罪，惊悚",
    "tags": [
      "侠盗",
      "高科技",
      "魔术",
      "团队"
    ],
    "oneLine": "“四骑士”魔术侠盗团重出江湖，这次他们的目标是揭开一个能操控全球金融的神秘组织“眼睛”的真面目。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1481",
    "title": "化学课",
    "url": "./movie-1481.html",
    "cover": "./131.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情历史",
    "tags": [
      "女性成长",
      "科学",
      "60年代",
      "励志"
    ],
    "oneLine": "1960年代，一个天才化学家被实验室辞退，转而在一档电视烹饪节目中教授化学知识。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1482",
    "title": "回到17岁",
    "url": "./movie-1482.html",
    "cover": "./132.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2009",
    "genre": "喜剧 / 奇幻 / 爱情",
    "tags": [
      "穿越",
      "高中",
      "扎克·埃夫隆"
    ],
    "oneLine": "中年失意男意外变回17岁模样，他决定重返校园改写人生，却发现女儿正在被他当年的死对头追求。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1483",
    "title": "一猫二狗三分亲",
    "url": "./movie-1483.html",
    "cover": "./133.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "1985",
    "genre": "家庭, 喜剧, 剧情",
    "tags": [
      "宠物",
      "温馨",
      "亲情",
      "怀旧"
    ],
    "oneLine": "一只流浪猫、两只被遗弃的狗，把三个陌生破碎家庭的孩子，意外牵到了一起，组成了没有大人的“家”。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1484",
    "title": "人类本性",
    "url": "./movie-1484.html",
    "cover": "./134.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2001",
    "genre": "喜剧 / 剧情",
    "tags": [
      "黑色幽默",
      "科学伦理",
      "野人",
      "成长",
      "女性视角"
    ],
    "oneLine": "一位患有罕见多毛症的女人、一位发明了“餐桌礼仪机器”的科学家，和一个在森林里长大的“野人”，组成畸形三角恋。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1485",
    "title": "一团乱麻",
    "url": "./movie-1485.html",
    "cover": "./135.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 悬疑 / 黑色电影",
    "tags": [
      "非线性叙事",
      "巧合",
      "黑色幽默",
      "多线叙事",
      "疯狂"
    ],
    "oneLine": "一具尸体、一条金鱼、一卷胶带、一个失眠的侦探，以及一个总是打不通的报警电话。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1486",
    "title": "超能游戏者",
    "url": "./movie-1486.html",
    "cover": "./136.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "genre": "动作/科幻",
    "tags": [
      "VR游戏",
      "超能力觉醒",
      "青少年反乌托邦",
      "竞技场",
      "阴谋论"
    ],
    "oneLine": "十名电竞选手参加VR大赛后，发现游戏里获得的超能力在现实中也能使用，代价是寿命。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1487",
    "title": "久保同学不放过我",
    "url": "./movie-1487.html",
    "cover": "./137.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "genre": "校园喜剧",
    "tags": [
      "漫改",
      "女追男",
      "反差萌",
      "甜剧",
      "超能力"
    ],
    "oneLine": "拥有读心术的超能力女生，听遍全班男生的心声都很无聊，直到她遇到了那个内心疯狂吐槽但表面冷漠的男生。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1488",
    "title": "我要逆风去",
    "url": "./movie-1488.html",
    "cover": "./138.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "都市, 爱情, 商战",
    "tags": [
      "国货",
      "创业",
      "电商",
      "霸道总裁",
      "逆袭"
    ],
    "oneLine": "破产的富家千金与死对头的投资精英不得不联手，拯救一个即将倒闭的百年国货鞋厂。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1489",
    "title": "地狱：亡灵之栖所",
    "url": "./movie-1489.html",
    "cover": "./139.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "genre": "恐怖，灵异，密室",
    "tags": [
      "地狱景象",
      "心理恐惧",
      "死者记忆",
      "循环折磨"
    ],
    "oneLine": "六个人在一座无限延伸的旅馆醒来，每个房间都是他们生前最痛苦的记忆场景。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1490",
    "title": "真相急先锋",
    "url": "./movie-1490.html",
    "cover": "./140.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2022",
    "genre": "犯罪, 剧情, 悬疑",
    "tags": [
      "记者",
      "取证",
      "政治黑幕",
      "快节奏"
    ],
    "oneLine": "实习记者发现报社里每篇“已辟谣”的旧稿都是真实案件，一个横跨二十年的阴谋浮出水面。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1491",
    "title": "无国之人",
    "url": "./movie-1491.html",
    "cover": "./141.jpg",
    "region": "德国 / 波兰",
    "type": "剧集",
    "year": "2027",
    "genre": "剧情, 悬疑, 政治",
    "tags": [
      "难民",
      "身份",
      "欧盟",
      "惊悚",
      "官僚"
    ],
    "oneLine": "在布鲁塞尔欧盟总部，一个没有任何国籍记录的“幽灵人”突然被登记成所有成员国的公民。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1492",
    "title": "请认真面对这工作",
    "url": "./movie-1492.html",
    "cover": "./142.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2026",
    "genre": "喜剧, 职场, 奇幻",
    "tags": [
      "殡仪馆",
      "社畜",
      "生死观",
      "治愈"
    ],
    "oneLine": "为了高薪跳槽到殡仪馆当入殓师的年轻人，发现所有逝者都会在入殓前五分钟短暂“回魂”吐槽自己的人生。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1493",
    "title": "半斤八两",
    "url": "./movie-1493.html",
    "cover": "./143.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "喜剧, 剧情, 运动",
    "tags": [
      "举重",
      "农村少年",
      "励志",
      "父子情"
    ],
    "oneLine": "天生神力的农村娃被体校开除，他和半身不遂的父亲开了一家“移动修车铺”走四方。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1494",
    "title": "绿叶对根的情意",
    "url": "./movie-1494.html",
    "cover": "./144.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2012",
    "genre": "家庭剧情 / 乡土温情",
    "tags": [
      "返乡建设",
      "母女和解",
      "乡村教育",
      "亲情守望",
      "时代变迁"
    ],
    "oneLine": "一位多年在外漂泊的女记者回到故乡，才发现母亲守着一片荒地，不是为了种树，而是为了等她回家。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1495",
    "title": "青春噢买尬",
    "url": "./movie-1495.html",
    "cover": "./145.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧 / 青春 / 家庭",
    "tags": [
      "高中生",
      "代际冲突",
      "荒诞",
      "怀旧"
    ],
    "oneLine": "2009年，五个高中生为了凑钱买一张“五月天”演唱会门票，展开了一场荒腔走板的校园地下经济创业。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1496",
    "title": "魔夜离魂",
    "url": "./movie-1496.html",
    "cover": "./146.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1981",
    "genre": "恐怖， 心理惊悚",
    "tags": [
      "噩梦",
      "人格分裂",
      "连环杀手",
      "暴风雪山庄"
    ],
    "oneLine": "暴风雨夜，七名陌生人被困旅馆，他们发现彼此是同一个人在不同人格下制造出的“宿主”，而最邪恶的人格正在苏醒。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1497",
    "title": "爱伦坡怪谈",
    "url": "./movie-1497.html",
    "cover": "./147.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2022",
    "genre": "悬疑 / 恐怖 / 惊悚",
    "tags": [
      "哥特",
      "单元剧",
      "名著改编",
      "心理恐怖"
    ],
    "oneLine": "以爱伦坡原著为内核，五个现代都市怪谈串联起一座百年凶宅的诅咒。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1498",
    "title": "心脑交战",
    "url": "./movie-1498.html",
    "cover": "./148.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2020",
    "genre": "科幻 / 惊悚",
    "tags": [
      "脑科学",
      "意识上传",
      "心理战"
    ],
    "oneLine": "她的大脑被植入芯片，每次心跳加速都会触发雇主对她的记忆清除。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1499",
    "title": "防守反击",
    "url": "./movie-1499.html",
    "cover": "./149.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "运动, 剧情",
    "tags": [
      "足球",
      "中年逆袭",
      "热血",
      "草根"
    ],
    "oneLine": "一支由下岗工人、城管、出租车司机和煎饼摊老板组成的社区足球队，竟打进了全国业余联赛总决赛。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1500",
    "title": "从海底出击第四季",
    "url": "./movie-1500.html",
    "cover": "./150.jpg",
    "region": "德国",
    "type": "剧集",
    "year": "2025",
    "genre": "战争, 历史, 惊悚",
    "tags": [
      "潜艇",
      "二战",
      "密室",
      "人性"
    ],
    "oneLine": "1944年，一艘德国U型潜艇接到秘密任务：运送一名犹太物理学家到阿根廷，而全船官兵都不知道他的包里装着原子弹公式。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1501",
    "title": "公寓404室",
    "url": "./movie-1501.html",
    "cover": "./1.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "密室",
      "心理博弈",
      "单场景",
      "高智商犯罪"
    ],
    "oneLine": "四个陌生人同时收到一封“您已中奖”的短信，当他们齐聚在404室，房间自动上锁，门外传来警笛声。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1502",
    "title": "艾米公主",
    "url": "./movie-1502.html",
    "cover": "./2.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2022",
    "genre": "奇幻, 冒险",
    "tags": [
      "少女",
      "魔法",
      "王国",
      "成长"
    ],
    "oneLine": "一个伦敦普通少女突然被告知是童话王国的继承人，但王国已被噩梦魔法笼罩。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1503",
    "title": "告别单身",
    "url": "./movie-1503.html",
    "cover": "./3.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "浪漫喜剧",
    "tags": [
      "契约结婚",
      "假戏真做",
      "婚礼乌龙"
    ],
    "oneLine": "为了继承遗产，一对冤家被迫假装情侣，结果在婚礼当天发现他们10年前已经结过婚了。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1504",
    "title": "樱花大战：活动写真",
    "url": "./movie-1504.html",
    "cover": "./4.jpg",
    "region": "日本",
    "type": "电影 / 动画",
    "year": "2022",
    "genre": "科幻 / 动作 / 歌舞 / 蒸汽朋克",
    "tags": [
      "机甲",
      "太正时代",
      "帝国华击团",
      "舞台剧",
      "光武"
    ],
    "oneLine": "太正十九年的帝都，帝国华击团的新队长接手后，发现最大的敌人不是降魔而是预算削减。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1505",
    "title": "放牧人",
    "url": "./movie-1505.html",
    "cover": "./5.jpg",
    "region": "法国 / 蒙古",
    "type": "电影",
    "year": "2019",
    "genre": "纪录片 / 自然",
    "tags": [
      "游牧",
      "人与动物",
      "雪山",
      "极简主义",
      "生存"
    ],
    "oneLine": "蒙古老牧民在寒冬遭遇狼群围攻，他用祖传的喉音唱法唤醒了野狼首领的怜悯。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1506",
    "title": "歌声是千层派",
    "url": "./movie-1506.html",
    "cover": "./6.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "音乐，剧情，家庭",
    "tags": [
      "合唱团",
      "失智",
      "祖母",
      "和解"
    ],
    "oneLine": "一个失智症祖母只会唱一首走调的童谣，而这首歌，竟是解开孙女被校园霸凌心结的唯一钥匙。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1507",
    "title": "快乐寻回犬",
    "url": "./movie-1507.html",
    "cover": "./7.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭 / 冒险",
    "tags": [
      "狗狗",
      "感人",
      "寻亲",
      "儿童",
      "忠犬"
    ],
    "oneLine": "爷爷去世后，自闭症男孩和忠犬“快乐”踏上寻找妈妈的漫长旅途。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1508",
    "title": "血色情人节",
    "url": "./movie-1508.html",
    "cover": "./8.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 爱情 / 惊悚",
    "tags": [
      "连环杀手",
      "情人节",
      "信件杀人",
      "反转爱情",
      "血腥浪漫"
    ],
    "oneLine": "连续七年的情人节，小镇都会收到一封署名“你的情人”的死亡通知信——而今年，信上写的是女主角的名字。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1509",
    "title": "太平洋之翼",
    "url": "./movie-1509.html",
    "cover": "./9.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "战争, 剧情, 历史",
    "tags": [
      "二战",
      "零式战机",
      "反战",
      "父辈遗书"
    ],
    "oneLine": "现代日本青年意外挖出父亲在二战时写给自己的遗书，决定复原一架零式战机飞回父亲坠海的坐标。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1510",
    "title": "神勇小飞虎",
    "url": "./movie-1510.html",
    "cover": "./10.jpg",
    "region": "中国",
    "type": "动画剧集",
    "year": "2009",
    "genre": "儿童, 冒险, 喜剧",
    "tags": [
      "幼儿园",
      "超级英雄",
      "友情",
      "正义"
    ],
    "oneLine": "五个幼儿园小朋友组建“小飞虎队”，用童心和想象力解决小区里的“大案件”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1511",
    "title": "繁花",
    "url": "./movie-1511.html",
    "cover": "./11.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情, 爱情, 年代",
    "tags": [
      "王家卫",
      "沪上风情",
      "90年代",
      "商战"
    ],
    "oneLine": "九十年代上海滩，阿宝从弄堂青年变身黄河路宝总，在股市与情场间开出一树繁花。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1512",
    "title": "劲舞飞扬",
    "url": "./movie-1512.html",
    "cover": "./12.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情, 音乐",
    "tags": [
      "舞蹈",
      "青春",
      "热血",
      "梦想",
      "友情"
    ],
    "oneLine": "五个来自不同背景的少女组建街舞团，目标是在全国大赛上击败那个不可一世的男团。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1513",
    "title": "索魂恶鸟",
    "url": "./movie-1513.html",
    "cover": "./13.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 民俗",
    "tags": [
      "诅咒",
      "民俗恐怖",
      "鸟类"
    ],
    "oneLine": "偏远村庄每逢血月便有巨鸟索命，新来的猎人在调查中发现这竟源自百年前的怨念。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1514",
    "title": "我的爸妈好性福",
    "url": "./movie-1514.html",
    "cover": "./14.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 爱情",
    "tags": [
      "黄昏恋",
      "性教育",
      "家庭"
    ],
    "oneLine": "大学生小美意外发现分居多年的父母，竟在同一款约会软件上成了满分情侣。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1515",
    "title": "谢丽",
    "url": "./movie-1515.html",
    "cover": "./15.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "genre": "惊悚, 悬疑",
    "tags": [
      "替身",
      "整容",
      "心理操控"
    ],
    "oneLine": "一个落魄女演员被富婆重金要求整容成已故女儿“谢丽”，却发现这场模仿游戏是一场死亡陷阱。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1516",
    "title": "走出大墙的人",
    "url": "./movie-1516.html",
    "cover": "./16.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "1985",
    "genre": "剧情, 犯罪, 社会",
    "tags": [
      "刑满释放",
      "重返社会",
      "偏见",
      "救赎"
    ],
    "oneLine": "服刑十八年的杀人犯出狱后，发现真凶一直在帮他找工作的老板就是当年死者家属。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1517",
    "title": "记忆裂痕",
    "url": "./movie-1517.html",
    "cover": "./17.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2003",
    "genre": "动作 / 科幻 / 惊悚",
    "tags": [
      "记忆删除",
      "预言未来",
      "吴宇森",
      "悬疑",
      "自我救赎"
    ],
    "oneLine": "一名顶尖工程师在完成一项绝密任务后，被告知自愿删除了三年记忆，换来的却是一堆看似无用的垃圾和全世界的追杀。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1518",
    "title": "搭秋千的人",
    "url": "./movie-1518.html",
    "cover": "./18.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "剧情，家庭，文艺",
    "tags": [
      "留守老人",
      "生命尽头",
      "亲情和解",
      "日常诗意"
    ],
    "oneLine": "退休矿工老刘独自在老家搭了一个秋千，邻居们都以为他疯了，直到孙女从城里回来。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1519",
    "title": "黑风行动",
    "url": "./movie-1519.html",
    "cover": "./19.jpg",
    "region": "香港 / 中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 警匪",
    "tags": [
      "特警突击",
      "匪巢攻坚",
      "兄弟情深"
    ],
    "oneLine": "为了营救被困在东南亚黑牢里的战友，一支被解散的特警队私自展开了一场“黑风行动”。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1520",
    "title": "五月的声音",
    "url": "./movie-1520.html",
    "cover": "./20.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情",
      "小镇",
      "和解",
      "音乐"
    ],
    "oneLine": "五月的南方小镇，一个聋哑女孩用一把旧口琴，吹响了母亲失踪十年的秘密。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1521",
    "title": "预言",
    "url": "./movie-1521.html",
    "cover": "./21.jpg",
    "region": "美国/德国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻， 惊悚",
    "tags": [
      "时间循环",
      "末日",
      "算法"
    ],
    "oneLine": "一台能预测未来3分钟的量子计算机落入恐怖分子手中，一名数据分析师成了人类最后的希望。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1522",
    "title": "幻夜奇谈",
    "url": "./movie-1522.html",
    "cover": "./22.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "民国",
      "客栈",
      "暴风雪山庄",
      "多重反转",
      "说书人"
    ],
    "oneLine": "暴雪山庄里，说书人每讲一个鬼故事，现实中就有一人离奇惨死。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1523",
    "title": "公主大对换",
    "url": "./movie-1523.html",
    "cover": "./23.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "genre": "喜剧 / 爱情 / 家庭",
    "tags": [
      "圣诞",
      "身份互换",
      "凡妮莎·哈金斯",
      "王室的浪漫",
      "童话"
    ],
    "oneLine": "芝加哥蛋糕师与欧洲小国公主长相酷似，在圣诞前夕互换身份，却双双陷入了意想不到的热恋。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1524",
    "title": "震憾大阴谋",
    "url": "./movie-1524.html",
    "cover": "./24.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 惊悚",
    "tags": [
      "灾难",
      "阴谋论",
      "特工",
      "地震武器",
      "高能"
    ],
    "oneLine": "一场强烈地震摧毁了洛杉矶，一名地质学家发现这并不是天灾，而是有人在测试一款“行星级”武器。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1525",
    "title": "蕾哈娜的抗争",
    "url": "./movie-1525.html",
    "cover": "./25.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "genre": "音乐, 传记",
    "tags": [
      "歌手",
      "家暴",
      "自救",
      "觉醒"
    ],
    "oneLine": "流行天后在镜头前光鲜亮丽，回家却被男友殴打，她决定在格莱美颁奖礼上唱出伤痕。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1526",
    "title": "倾城之恋粤语",
    "url": "./movie-1526.html",
    "cover": "./26.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情、剧情、都市",
    "tags": [
      "身份错位",
      "战后重建",
      "语言隔阂"
    ],
    "oneLine": "1940年代香港沦陷前夕，一对利用假结婚骗财的男女，在空袭警报中弄假成真。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1527",
    "title": "飞虎奇兵",
    "url": "./movie-1527.html",
    "cover": "./27.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 警匪",
    "tags": [
      "飞虎队",
      "反恐",
      "兄弟情"
    ],
    "oneLine": "飞虎队新丁与老队员在24小时内粉碎针对地铁系统的生化袭击。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1528",
    "title": "爱的守护",
    "url": "./movie-1528.html",
    "cover": "./28.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2024",
    "genre": "家庭，剧情",
    "tags": [
      "自闭症",
      "兄弟",
      "保险理赔",
      "治愈"
    ],
    "oneLine": "一个一事无成的保险经纪，为了照顾患有自闭症的天才弟弟，被迫卷入一宗诡异的保险骗局。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1529",
    "title": "时光遗忘之人",
    "url": "./movie-1529.html",
    "cover": "./29.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "科幻, 剧情",
    "tags": [
      "时间旅行",
      "失忆",
      "悬疑",
      "温情"
    ],
    "oneLine": "一个突然失去所有记忆的男人，发现自己口袋里有一张通往未来的单程车票。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1530",
    "title": "大地英豪",
    "url": "./movie-1530.html",
    "cover": "./30.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 历史",
    "tags": [
      "古罗马",
      "角斗士",
      "宏大场面",
      "史诗"
    ],
    "oneLine": "被卖到罗马斗兽场的日耳曼蛮族王子，用三年时间从角斗士奴隶打成了军团司令，然后剑指罗马。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1531",
    "title": "第八页",
    "url": "./movie-1531.html",
    "cover": "./31.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2011",
    "genre": "谍战 / 剧情",
    "tags": [
      "政治",
      "老派",
      "档案"
    ],
    "oneLine": "退休情报员在旧档案第八页发现一行小字，揭开了一场持续三十年的骗局。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1532",
    "title": "蠢蛋搞怪秀4：坏祖父",
    "url": "./movie-1532.html",
    "cover": "./32.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 真人秀, 恶搞",
    "tags": [
      "无底线恶作剧",
      "代际冲突",
      "重口味"
    ],
    "oneLine": "史上最无下限的坏爷爷带着他憨傻的孙子，展开一场横跨美国的整蛊公路之旅，把所有人都坑哭了。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1533",
    "title": "你好，先生们",
    "url": "./movie-1533.html",
    "cover": "./33.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "喜剧, 爱情, 都市",
    "tags": [
      "相亲",
      "群像",
      "女性",
      "独立"
    ],
    "oneLine": "一家专做男性“改造”的奇葩公司里，四位女员工一边帮别人找对象，一边搞砸自己的爱情。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1534",
    "title": "白月光拯救计划",
    "url": "./movie-1534.html",
    "cover": "./34.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情 / 悬疑 / 穿越",
    "tags": [
      "系统穿越",
      "拯救男二",
      "反套路",
      "双向奔赴",
      "高智商女主"
    ],
    "oneLine": "女程序员穿进虐文成了恶毒女配，系统却让她拯救那个注定惨死的白月光男二，她选择直接把男主干掉。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1535",
    "title": "野狼谷",
    "url": "./movie-1535.html",
    "cover": "./35.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "西部 / 动作",
    "tags": [
      "盗猎",
      "护林员",
      "狼群",
      "硬汉",
      "生态"
    ],
    "oneLine": "退役特种兵在可可西里无人区独自对抗盗猎团伙，而狼群成了他的唯一盟友。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1536",
    "title": "戏命师之阴阳师",
    "url": "./movie-1536.html",
    "cover": "./36.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻/动作",
    "tags": [
      "戏曲",
      "式神",
      "民国",
      "驱魔"
    ],
    "oneLine": "民国戏班子里藏着一个阴阳师传人，他用唱腔召唤式神对抗邪祟。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1537",
    "title": "三角突击队2",
    "url": "./movie-1537.html",
    "cover": "./37.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 战争 / 惊悚",
    "tags": [
      "特种兵",
      "中东",
      "人质救援",
      "硬核枪战"
    ],
    "oneLine": "三角突击队退役成员被重新征召，深入也门解救被绑架的科学家，却发现任务是陷阱。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1538",
    "title": "早春恋曲",
    "url": "./movie-1538.html",
    "cover": "./38.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "爱情，剧情",
    "tags": [
      "忘年恋",
      "镰仓",
      "摄影",
      "治愈"
    ],
    "oneLine": "32岁的独居摄影师，在镰仓海边救下一位试图投海的79岁老妇，两人却由此展开了一段跨越年龄的赎罪之旅。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1539",
    "title": "我的新上司是天然呆",
    "url": "./movie-1539.html",
    "cover": "./39.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "genre": "喜剧, 爱情, 职场",
    "tags": [
      "漫改",
      "职场喜剧",
      "天然呆",
      "治愈",
      "年下"
    ],
    "oneLine": "跳槽到新公司的社畜发现，新上司虽然业务能力为零，但每次都能用天然呆的神操作拯救他的心情。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1540",
    "title": "侠岚第二季",
    "url": "./movie-1540.html",
    "cover": "./40.jpg",
    "region": "中国大陆",
    "type": "动画",
    "year": "2013",
    "genre": "动作 / 奇幻 / 热血",
    "tags": [
      "热血",
      "国产动画",
      "五行元素",
      "少年成长",
      "守护"
    ],
    "oneLine": "为了拯救被零力侵蚀的姐姐，辗迟在玖宫岭经历了严酷的考验，却发现黑暗势力早已渗透进了侠岚内部。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1541",
    "title": "足球妈妈",
    "url": "./movie-1541.html",
    "cover": "./41.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 运动",
    "tags": [
      "女性觉醒",
      "社区足球",
      "中年危机",
      "励志"
    ],
    "oneLine": "为了抗议学区削减体育经费，四位从不运动的全职妈妈组队参加了全美最暴力的业余足球联赛。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1542",
    "title": "大内神捕",
    "url": "./movie-1542.html",
    "cover": "./42.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "1998",
    "genre": "古装 / 动作 / 悬疑",
    "tags": [
      "六扇门",
      "连环杀人",
      "江湖风云"
    ],
    "oneLine": "明朝六扇门第一神捕沈炼，在追查京城连环命案时，发现每具尸体的伤口都指向他失忆前所用的独门刀法。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1543",
    "title": "武圣关公",
    "url": "./movie-1543.html",
    "cover": "./43.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "genre": "动作 / 历史 / 战争",
    "tags": [
      "三国",
      "CGI动画",
      "忠义仁勇",
      "战神",
      "史诗战争"
    ],
    "oneLine": "一部全CGI动画史诗，从桃园三结义到败走麦城，重新诠释关羽如何从凡人被供奉为“武圣”的传奇一生。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1544",
    "title": "终结杉计划",
    "url": "./movie-1544.html",
    "cover": "./44.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作、谍战、悬疑",
    "tags": [
      "特工",
      "复仇",
      "高智商",
      "阴谋论",
      "反转"
    ],
    "oneLine": "顶级特工被陷害叛国，为了自证清白，他必须潜入敌营，完成自己亲手制定的“杉计划”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1545",
    "title": "芭比杀手",
    "url": "./movie-1545.html",
    "cover": "./45.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 黑色喜剧",
    "tags": [
      "连环杀手",
      "塑料美学",
      "女性复仇",
      "邪典"
    ],
    "oneLine": "一个痴迷芭比的完美主妇，用粉色系的方式“修正”身边所有不完美的人。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1546",
    "title": "真情赤子心",
    "url": "./movie-1546.html",
    "cover": "./46.jpg",
    "region": "香港",
    "type": "电影",
    "year": "1996",
    "genre": "剧情 / 家庭",
    "tags": [
      "父子情",
      "底层挣扎",
      "绝症"
    ],
    "oneLine": "患有心脏病的单亲爸爸阿强，为了把儿子留在身边，拼命打工赚钱，却在手术前夕被告知儿子并非亲生。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1547",
    "title": "电表人生",
    "url": "./movie-1547.html",
    "cover": "./47.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情， 喜剧， 社会",
    "tags": [
      "小人物",
      "物业",
      "社区",
      "众生相",
      "黑色幽默"
    ],
    "oneLine": "一个社区的电表工老秦，通过每月的抄表数洞察了全楼所有住户的秘密，直到他发现有人正在利用电表策划一场谋杀。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1548",
    "title": "再见祖国",
    "url": "./movie-1548.html",
    "cover": "./48.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 历史",
    "tags": [
      "移民",
      "家庭",
      "离散",
      "1997",
      "身份认同"
    ],
    "oneLine": "一家三代人在移民加拿大的前夜被困在启德机场，每个人都在行李箱里藏了一个无法言说的秘密。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1549",
    "title": "大脚怪2",
    "url": "./movie-1549.html",
    "cover": "./49.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 冒险",
    "tags": [
      "大脚怪",
      "续集",
      "父子",
      "环境保护"
    ],
    "oneLine": "第一部的十年后，大脚怪的儿子被偷猎者盯上，老伙计们再次集结。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1550",
    "title": "应召女郎1988",
    "url": "./movie-1550.html",
    "cover": "./50.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1988",
    "genre": "剧情",
    "tags": [
      "女性群像",
      "时代悲歌",
      "社会写实"
    ],
    "oneLine": "八十年代末香港夜生活浮世绘，三位背景各异的应召女郎在灯火阑珊处的挣扎与情义。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1551",
    "title": "三人做世界",
    "url": "./movie-1551.html",
    "cover": "./51.jpg",
    "region": "香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧/剧情",
    "tags": [
      "创业",
      "港式幽默",
      "兄弟情"
    ],
    "oneLine": "三个在疫情期间失业的废青，靠帮人代排队竟排出了一个估值千万的跑腿帝国。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1552",
    "title": "色情女监狱",
    "url": "./movie-1552.html",
    "cover": "./52.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2018",
    "genre": "情色， 剧情",
    "tags": [
      "女子监狱",
      "权力游戏",
      "生存法则",
      "禁忌"
    ],
    "oneLine": "一座与世隔绝的女子监狱里，囚犯们为了争夺有限的资源，展开了一场欲望与权力的游戏。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1553",
    "title": "凯瑟琳女皇",
    "url": "./movie-1553.html",
    "cover": "./53.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "历史、传记、宫斗",
    "tags": [
      "叶卡捷琳娜大帝",
      "女性掌权",
      "政治博弈"
    ],
    "oneLine": "她发动政变时只有一句话：“要么让我当女皇，要么让我当尸体。”",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1554",
    "title": "新天堂星探",
    "url": "./movie-1554.html",
    "cover": "./54.jpg",
    "region": "意大利 / 法国",
    "type": "电影",
    "year": "1995",
    "genre": "剧情 / 喜剧",
    "tags": [
      "西西里",
      "骗局",
      "梦想"
    ],
    "oneLine": "一名假星探用“好莱坞梦”骗遍西西里岛的小镇，直到他遇见一个双目失明却相信电影里一切都是真的女孩。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1555",
    "title": "摩斯探长 第二季",
    "url": "./movie-1555.html",
    "cover": "./55.jpg",
    "region": "英国",
    "type": "电视剧",
    "year": "2026",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "牛津",
      "古典推理",
      "文学性",
      "人性",
      "60年代"
    ],
    "oneLine": "摩斯升任探长后接手的第一个案子：牛津大学一位古典学教授在密室中被杀，而现场留着一行用希腊语写的遗言。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1556",
    "title": "带子洪郎",
    "url": "./movie-1556.html",
    "cover": "./56.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1991",
    "genre": "犯罪动作",
    "tags": [
      "父爱",
      "黑帮",
      "枪战"
    ],
    "oneLine": "最狠的杀手有个软肋——他三岁的女儿，而他的最后一个任务，是杀了女儿的亲生母亲。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1557",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 神探默多克第六季 愤怒的蝴蝶 皇家酒店 你的微笑 惹不起的殿下大人 乡村爱情15 清平乐 极速快感 嗜血之爱 鬼武者 米奇与魔豆 忍者神龟：变种时代 沉默之夜 山村新曲 西行纪之暗影魔城 羽毛球 轮回2023 巴迪霍利传 拉姆 吉尔达",
    "url": "./movie-1557.html",
    "cover": "./57.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1558",
    "title": "过埠新娘1988",
    "url": "./movie-1558.html",
    "cover": "./58.jpg",
    "region": "香港",
    "type": "电影",
    "year": "1988",
    "genre": "剧情, 爱情",
    "tags": [
      "移民",
      "婚姻",
      "身份认同",
      "女性"
    ],
    "oneLine": "为了绿卡嫁给华裔厨师的新娘，却在婚礼当天发现新郎竟是十年前抛弃自己的初恋。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1559",
    "title": "孝感动天粤语",
    "url": "./movie-1559.html",
    "cover": "./59.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "1997",
    "genre": "家庭，剧情，年代",
    "tags": [
      "粤语",
      "亲情",
      "年代剧",
      "孝顺",
      "港风"
    ],
    "oneLine": "八十年代香港屋邨里，一个粗鲁的茶餐厅老板为了痴呆母亲，学会了织毛衣、唱粤曲和温柔。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1560",
    "title": "万星拱照百老汇",
    "url": "./movie-1560.html",
    "cover": "./60.jpg",
    "region": "美国",
    "type": "电影",
    "year": "1989",
    "genre": "喜剧, 爱情, 歌舞",
    "tags": [
      "百老汇",
      "群星贺岁",
      "戏中戏",
      "夸张"
    ],
    "oneLine": "一个过气制片人为了捧红女友，召集了一帮二流演员排演莎士比亚，却意外引爆了票房。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1561",
    "title": "光影流情",
    "url": "./movie-1561.html",
    "cover": "./61.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 传记",
    "tags": [
      "胶片",
      "怀旧",
      "电影梦",
      "戏中戏"
    ],
    "oneLine": "一个即将倒闭的老电影院，在拆除前夜，放映机的光束里竟然投射出了这间影院八十年来所有错过的人和事。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1562",
    "title": "杀掉那个爱尔兰人",
    "url": "./movie-1562.html",
    "cover": "./62.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪/传记/动作",
    "tags": [
      "黑帮",
      "爱尔兰裔",
      "真实改编",
      "爆破狂",
      "背叛"
    ],
    "oneLine": "上世纪70年代克利夫兰，一个爱尔兰裔工会首领单挑整个黑手党，炸掉十几座意大利帮地盘。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1563",
    "title": "手卷烟粤语",
    "url": "./movie-1563.html",
    "cover": "./63.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "剧情、犯罪、黑色",
    "tags": [
      "港味",
      "旧楼",
      "兄弟",
      "背叛",
      "烟丝"
    ],
    "oneLine": "失业的华籍英兵为还债帮黑帮运货，却卷入一桩烫手的黑吃黑命案。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1564",
    "title": "江湖子弟国语",
    "url": "./movie-1564.html",
    "cover": "./64.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1976",
    "genre": "动作 / 剧情",
    "tags": [
      "邵氏",
      "武侠",
      "兄弟情",
      "复仇",
      "国语"
    ],
    "oneLine": "四个结拜兄弟在江湖中各自沉浮，最后发现最大的敌人是当年的誓言。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1565",
    "title": "公猫",
    "url": "./movie-1565.html",
    "cover": "./65.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 同性",
    "tags": [
      "中年危机",
      "领养",
      "巴黎"
    ],
    "oneLine": "一对相伴二十年的同志情侣因一只流浪公猫的闯入，关系面临终极考验。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1566",
    "title": "星际迷航3",
    "url": "./movie-1566.html",
    "cover": "./66.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "genre": "动作, 科幻, 冒险",
    "tags": [
      "太空",
      "企业号",
      "外星人",
      "团队",
      "重启"
    ],
    "oneLine": "企业号船员在一次外太空救援中遭遇神秘虫洞，全员被困在一个不断吞噬记忆的星球。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1567",
    "title": "杀不死",
    "url": "./movie-1567.html",
    "cover": "./67.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "悬疑，犯罪，黑色幽默",
    "tags": [
      "循环",
      "荒诞",
      "小人物",
      "多线"
    ],
    "oneLine": "怂包修表工被卷入钻石劫案，发现自己每一次死亡都会带着记忆回到当天早上。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1568",
    "title": "不认识的女友",
    "url": "./movie-1568.html",
    "cover": "./68.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情悬疑",
    "tags": [
      "失忆",
      "身份错位",
      "都市爱情",
      "谎言"
    ],
    "oneLine": "车祸醒来后，一个陌生女人自称是他相恋三年的女友，但他手机里所有关于前女友的信息都凭空消失了。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1569",
    "title": "神奇兵营42 第一季",
    "url": "./movie-1569.html",
    "cover": "./69.jpg",
    "region": "英国",
    "type": "电视剧",
    "year": "2022",
    "genre": "喜剧 / 战争",
    "tags": [
      "英军",
      "荒诞",
      "二战",
      "军营喜剧"
    ],
    "oneLine": "1942年，一群被各部队淘汰的“奇葩”士兵，组成了一个专门负责搞笑的“神奇兵营”。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1570",
    "title": "我和春天有个约会国语",
    "url": "./movie-1570.html",
    "cover": "./70.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 爱情 / 怀旧",
    "tags": [
      "时代变迁",
      "姐妹情深",
      "粤语片场"
    ],
    "oneLine": "上世纪60年代，四个在粤语片场打拼的临时女演员，用青春赌一个明天，却最终被时代的洪流冲散在天涯海角。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1571",
    "title": "害怕看不见的人",
    "url": "./movie-1571.html",
    "cover": "./71.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2018",
    "genre": "惊悚 / 剧情",
    "tags": [
      "社交恐惧",
      "幻觉",
      "都市传说"
    ],
    "oneLine": "一名严重社交恐惧症的宅男，坚信只要被自己“看见”的人就会从世界上消失。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1572",
    "title": "阿弥陀堂",
    "url": "./movie-1572.html",
    "cover": "./72.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 悬疑 / 宗教",
    "tags": [
      "寺庙",
      "抄经",
      "都市传说",
      "双胞胎",
      "轮回"
    ],
    "oneLine": "东京一家可抄经的“阿弥陀堂”，每晚都有不同的人来写下同一个心愿：让我的双胞胎兄弟消失。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1573",
    "title": "记得我爱你",
    "url": "./movie-1573.html",
    "cover": "./73.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "爱情, 剧情",
    "tags": [
      "失忆",
      "苦情",
      "都市",
      "催泪"
    ],
    "oneLine": "女友每天都会忘记他，他每天都要让女友重新爱上自己。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1574",
    "title": "萦萦夙语亦难求",
    "url": "./movie-1574.html",
    "cover": "./74.jpg",
    "region": "中国",
    "type": "电视剧",
    "year": "2023",
    "genre": "古装、爱情、奇幻",
    "tags": [
      "重生",
      "将门",
      "替身"
    ],
    "oneLine": "将军夫人重生成了将军府最卑微的丫鬟，每天听自己的丈夫对“死去的自己”深情告白，醋意大发。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1575",
    "title": "在上帝的手中",
    "url": "./movie-1575.html",
    "cover": "./75.jpg",
    "region": "波兰",
    "type": "电影",
    "year": "2022",
    "genre": "惊悚 / 宗教 / 悬疑",
    "tags": [
      "神父连环杀手",
      "告解亭",
      "信仰崩塌"
    ],
    "oneLine": "一名无神论警探假扮神父进入修道院调查失踪案，却发现凶手是跪在告解亭里的“忏悔者”本人。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1576",
    "title": "飞越温柔窝",
    "url": "./movie-1576.html",
    "cover": "./76.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 犯罪",
    "tags": [
      "卧底",
      "精神病院",
      "黑色幽默",
      "人性"
    ],
    "oneLine": "卧底警探为查案假扮病患入住精神病院，却发现院长才是最大的疯子和罪犯。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1577",
    "title": "架步搜秘",
    "url": "./movie-1577.html",
    "cover": "./77.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑，犯罪",
    "tags": [
      "便衣警察",
      "红灯区",
      "卧底",
      "单元探案",
      "女性群像"
    ],
    "oneLine": "潜入红灯区的女记者与卧底警察，在脂粉堆里揭开了一宗宗被掩埋的罪案。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1578",
    "title": "勇鼠闯天堂",
    "url": "./movie-1578.html",
    "cover": "./78.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "动画, 喜剧, 冒险",
    "tags": [
      "拟人动物",
      "天堂",
      "轮回",
      "合家欢",
      "成长"
    ],
    "oneLine": "一只超市里的小白鼠意外身亡，发现自己上不了天堂，因为它一生最大的成就是偷过一块芝士。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1579",
    "title": "街景一九七〇",
    "url": "./movie-1579.html",
    "cover": "./79.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "剧情, 历史",
    "tags": [
      "年代",
      "老照片",
      "怀旧",
      "小镇变迁"
    ],
    "oneLine": "一张意外重见天日的1970年街景底片，牵引出三代人跨越五十年的情感纠葛与时代记忆。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1580",
    "title": "我家也有外星人",
    "url": "./movie-1580.html",
    "cover": "./80.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻, 喜剧, 家庭",
    "tags": [
      "外星人",
      "日常",
      "爆笑",
      "治愈",
      "伪纪录片"
    ],
    "oneLine": "东京郊区一个普通四口之家，有一天发现家里的扫地机器人其实是外星侦察兵。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1581",
    "title": "刀剑神域进击篇：无星之夜",
    "url": "./movie-1581.html",
    "cover": "./81.jpg",
    "region": "日本",
    "type": "动画电影",
    "year": "2021",
    "genre": "动作 / 科幻 / 冒险",
    "tags": [
      "游戏",
      "攻略",
      "亚丝娜",
      "桐人",
      "艾恩葛朗特"
    ],
    "oneLine": "亚丝娜视角下的艾恩葛朗特第一层攻略战，她在恐惧与迷茫中被“封弊者”桐人救下。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1582",
    "title": "诗人的爱情",
    "url": "./movie-1582.html",
    "cover": "./82.jpg",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2017",
    "genre": "爱情 / 传记",
    "tags": [
      "白银时代",
      "三角恋",
      "书信"
    ],
    "oneLine": "天才女诗人、她的丈夫、她的情人，三人用诗歌和书信在革命浪潮中撑起了一段惊世骇俗的关系。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1583",
    "title": "快活良缘粤语",
    "url": "./movie-1583.html",
    "cover": "./83.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧 / 爱情",
    "tags": [
      "相亲",
      "粤语俚语",
      "市井",
      "欢喜冤家"
    ],
    "oneLine": "庙街“快活相亲眼”的老板娘，与死对头“良缘婚介所”的老板，被迫联手帮一对聋哑情侣相亲。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1584",
    "title": "玫瑰丛生",
    "url": "./movie-1584.html",
    "cover": "./84.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "家庭 / 剧情 / 年代",
    "tags": [
      "女性群像",
      "姐妹",
      "改革开放",
      "花艺",
      "和解"
    ],
    "oneLine": "八十年代花艺世家的三姐妹因一桩丑闻决裂，二十年后却在葬礼上被同一束匿名玫瑰逼得重聚。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1585",
    "title": "黄金神威第一季",
    "url": "./movie-1585.html",
    "cover": "./85.jpg",
    "region": "日本",
    "type": "TV Series",
    "year": "2018",
    "genre": "冒险, 历史, 动作",
    "tags": [
      "北海道",
      "寻宝",
      "阿伊努文化",
      "硬核美食"
    ],
    "oneLine": "日俄战争 veteran 与阿伊努少女联手，争夺藏在一群逃犯背上的巨额黄金地图。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1586",
    "title": "露蒂的玩具",
    "url": "./movie-1586.html",
    "cover": "./86.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "人偶恐怖",
      "童年阴影",
      "阁楼秘密",
      "西班牙惊悚"
    ],
    "oneLine": "露蒂从小被警告“永远不许进阁楼”，母亲去世后，她爬上阁楼，发现里面坐着一百多个和自己长得一模一样的玩偶。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1587",
    "title": "双面玛琳达",
    "url": "./movie-1587.html",
    "cover": "./87.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "惊悚, 心理, 剧情",
    "tags": [
      "双重人格",
      "艺术圈",
      "记忆迷局",
      "女性"
    ],
    "oneLine": "天才画家玛琳达有两个人生——白天是优雅名媛，夜晚是地下画室的狂徒。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1588",
    "title": "蠢蛋告别式",
    "url": "./movie-1588.html",
    "cover": "./88.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 剧情",
    "tags": [
      "黑色幽默",
      "葬礼",
      "荒诞",
      "和解"
    ],
    "oneLine": "一个公认的“蠢蛋”去世前，用一盘录像带策划了一场让所有亲友崩溃又感动的告别式。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1589",
    "title": "银河（1969年电影）",
    "url": "./movie-1589.html",
    "cover": "./89.jpg",
    "region": "法国 / 西德",
    "type": "电影",
    "year": "1969",
    "genre": "剧情，奇幻，冒险",
    "tags": [
      "路易斯·布努埃尔",
      "超现实主义",
      "宗教",
      "朝圣"
    ],
    "oneLine": "两个流浪汉沿着中世纪朝圣之路走向西班牙，一路上与耶稣、魔鬼、以及时间本身擦肩而过。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1590",
    "title": "猛兽列车",
    "url": "./movie-1590.html",
    "cover": "./90.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作、惊悚、灾难",
    "tags": [
      "密闭空间",
      "基因变异",
      "高速列车",
      "生存游戏"
    ],
    "oneLine": "一列满载基因实验品的无人高速列车上，一名退伍女兵必须在下站毁灭之前，猎杀逃脱牢笼的变异猛兽。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1591",
    "title": "真人快打传奇：雪盲",
    "url": "./movie-1591.html",
    "cover": "./91.jpg",
    "region": "美国",
    "type": "动画电影",
    "year": "2025",
    "genre": "动作、格斗、奇幻",
    "tags": [
      "血腥",
      "暗黑",
      "冷兵器",
      "生存",
      "游戏改编"
    ],
    "oneLine": "绝对零度被流放到北极冰原，赤手空拳面对一支由冰冻僵尸组成的追杀队。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1592",
    "title": "无糖霜",
    "url": "./movie-1592.html",
    "cover": "./92.jpg",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2022",
    "genre": "喜剧 / 爱情 / 美食",
    "tags": [
      "甜点师",
      "小镇生活",
      "无糖爱情",
      "治愈",
      "法式幽默"
    ],
    "oneLine": "一个讨厌糖的天才甜点师，接到了一份不可能的任务——为一个嗜糖如命的小镇制作婚礼蛋糕。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1593",
    "title": "爱犬奇缘",
    "url": "./movie-1593.html",
    "cover": "./93.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "爱情, 喜剧, 都市, 治愈",
    "tags": [
      "萌宠",
      "同居乌龙",
      "轻喜剧",
      "情感修复",
      "都市邂逅"
    ],
    "oneLine": "一只被误领回家的流浪犬，把两个原本互不相干的都市男女硬生生凑到同一屋檐下，也逼着他们重新学会如何建立信任。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1594",
    "title": "降临国语",
    "url": "./movie-1594.html",
    "cover": "./94.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻, 悬疑",
    "tags": [
      "语言",
      "第一类接触",
      "时间",
      "宿命"
    ],
    "oneLine": "外星飞船降临全球，语言学家发现它们的文字能改写人类的记忆，甚至过去。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1595",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 我家也有外星人 大闹藏春阁 科妮莉亚 无效申请 葵花劫 名侦探学院第五季 意外遇到你 失落的帝国 庙街故事 马戏奇观 男巫 鹰之夜 恋爱中毒大作战 尖峰时刻2 去吃饭伐 野燕麦 药神皇太子：龙之刺 最后的成员 三面夏娃 一弦定音！第一季",
    "url": "./movie-1595.html",
    "cover": "./95.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1596",
    "title": "计算机核战舰爆破大作战",
    "url": "./movie-1596.html",
    "cover": "./96.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "科幻、动作",
    "tags": [
      "战舰",
      "黑客",
      "爆破",
      "AI",
      "海洋"
    ],
    "oneLine": "失控的AI战舰锁定全球核弹发射井，唯一能阻止它的是一名会“写代码爆破”的老兵。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1597",
    "title": "家庭巡礼",
    "url": "./movie-1597.html",
    "cover": "./97.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 喜剧 / 公路",
    "tags": [
      "家族史",
      "公路片",
      "移民故事",
      "寻根"
    ],
    "oneLine": "葬礼之后，四个互不相识的“兄弟姐妹”发现他们拥有同一个父亲，并被要求一起完成一场横跨美国的路演。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1598",
    "title": "悠悠式",
    "url": "./movie-1598.html",
    "cover": "./98.jpg",
    "region": "日本",
    "type": "TV动画",
    "year": "2024",
    "genre": "喜剧，日常，校园",
    "tags": [
      "萌系",
      "日常",
      "友情",
      "治愈",
      "轻松"
    ],
    "oneLine": "三个性格迥异的女生在学校的“情报处理部”里，整天不务正业，用手机和电脑探索着世界的无用奥秘。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1599",
    "title": "柏林艳史",
    "url": "./movie-1599.html",
    "cover": "./99.jpg",
    "region": "德国 / 美国",
    "type": "电影",
    "year": "1948",
    "genre": "爱情 / 悬疑 / 黑色电影",
    "tags": [
      "冷战初期",
      "间谍",
      "蛇蝎美人"
    ],
    "oneLine": "二战结束后的柏林废墟中，一名美国军官爱上了神秘女子，她却可能是苏联间谍。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1600",
    "title": "神之水滴",
    "url": "./movie-1600.html",
    "cover": "./100.jpg",
    "region": "法国 / 日本",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 美食 / 悬疑",
    "tags": [
      "葡萄酒",
      "盲品",
      "寻宝",
      "亦敌亦友"
    ],
    "oneLine": "已故酒评家留下十二款神级葡萄酒谜题，两位养子必须通过盲品生死斗，继承万亿酒庄。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1601",
    "title": "野蛮人柯南",
    "url": "./movie-1601.html",
    "cover": "./101.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻 / 动作 / 冒险",
    "tags": [
      "重启经典",
      "血腥暴力",
      "剑与魔法"
    ],
    "oneLine": "柯南背负族人血债，孤身闯入禁忌之城，对抗掌握黑魔法的蛇族女王。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1602",
    "title": "倒数追击",
    "url": "./movie-1602.html",
    "cover": "./102.jpg",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 犯罪",
    "tags": [
      "复仇",
      "倒计时",
      "杀手",
      "父女情",
      "巴黎"
    ],
    "oneLine": "前雇佣兵得知自己被下毒只剩24小时生命，必须在死前救出被黑帮扣为人质的女儿。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1603",
    "title": "康尼岛",
    "url": "./movie-1603.html",
    "cover": "./103.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑，惊悚",
    "tags": [
      "游乐园",
      "记忆迷宫",
      "心理"
    ],
    "oneLine": "一位失忆女子每年夏天都会在康尼岛的旋转木马上醒来，并且发现自己正在被一个看不见的怪物追杀。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1604",
    "title": "同胞",
    "url": "./movie-1604.html",
    "cover": "./104.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 悬疑",
    "tags": [
      "家庭",
      "身份认同",
      "寻亲",
      "社会议题",
      "反转"
    ],
    "oneLine": "一场DNA寻亲让两个陌生女人成为“姐妹”，却牵扯出三十年前一桩换婴阴谋。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1605",
    "title": "顿悟之白骨美人心",
    "url": "./movie-1605.html",
    "cover": "./105.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2016",
    "genre": "奇幻 / 爱情",
    "tags": [
      "古装",
      "悬疑爱情",
      "画皮"
    ],
    "oneLine": "画师爱上了一个美人，画了一百幅她的肖像，第一百幅完成后，美人变成了白骨。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1606",
    "title": "同窗生",
    "url": "./movie-1606.html",
    "cover": "./106.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2013",
    "genre": "动作 / 剧情",
    "tags": [
      "北韩间谍",
      "高中生",
      "崔胜铉",
      "姐弟情"
    ],
    "oneLine": "北韩顶级特工的任务：扮成高中生，保护好自己那个爱惹事的妹妹，顺便干掉南韩情报局长。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1607",
    "title": "泰雷萨旗手",
    "url": "./movie-1607.html",
    "cover": "./107.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "旗帜",
      "内战",
      "信念",
      "传令兵",
      "悲壮"
    ],
    "oneLine": "西班牙内战期间，一个少年旗手背负着团队的旗帜与尊严，穿越死亡火线传递希望。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1608",
    "title": "希伯来铁锤",
    "url": "./movie-1608.html",
    "cover": "./108.jpg",
    "region": "以色列",
    "type": "电影",
    "year": "2021",
    "genre": "动作, 历史",
    "tags": [
      "传奇",
      "复仇",
      "冷兵器",
      "宗教"
    ],
    "oneLine": "公元前2世纪，一名犹太铁匠以一柄刻满诗篇的铁锤，独自对抗叙利亚希腊帝国的精锐骑兵。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1609",
    "title": "重启咲良田前篇",
    "url": "./movie-1609.html",
    "cover": "./109.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2017",
    "genre": "科幻",
    "tags": [
      "超能力",
      "哲学",
      "烧脑",
      "重置"
    ],
    "oneLine": "在禁止使用能力的小镇，男女主分别拥有“记忆保持”和“时间重置”的能力，他们试图复活三年前死去的少女。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1610",
    "title": "法蒂玛国语",
    "url": "./movie-1610.html",
    "cover": "./110.jpg",
    "region": "葡萄牙 / 中国大陆合拍",
    "type": "电影",
    "year": "2025",
    "genre": "历史 / 宗教",
    "tags": [
      "圣母显灵",
      "三个秘密",
      "信仰",
      "译制片感"
    ],
    "oneLine": "1917年法蒂玛的三个牧童看到了圣母，九十年后，一位中国学者去翻译那段被封印的第三预言。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1611",
    "title": "慢慢说",
    "url": "./movie-1611.html",
    "cover": "./111.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "口吃",
      "亲情",
      "治愈",
      "成长"
    ],
    "oneLine": "一个重度口吃的少年在父亲的葬礼上终于说出一句完整的话，而这句话揭露了父亲隐瞒二十年的秘密。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1612",
    "title": "中国减贫密码",
    "url": "./movie-1612.html",
    "cover": "./112.jpg",
    "region": "中国大陆",
    "type": "纪录片",
    "year": "2021",
    "genre": "纪录片 / 社会",
    "tags": [
      "脱贫攻坚",
      "乡村振兴",
      "真实故事",
      "群像",
      "纪实"
    ],
    "oneLine": "从悬崖村到西海固，一部纪录片揭开亿万中国人摆脱贫困背后不为人知的奋斗密码。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1613",
    "title": "仙乐都",
    "url": "./movie-1613.html",
    "cover": "./113.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "奇幻歌舞片",
    "tags": [
      "梦境穿梭",
      "灵魂契约",
      "欲望代价"
    ],
    "oneLine": "失业音乐人意外获得通往异界仙乐都的钥匙，却发现每首金曲都在透支自己的寿命。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1614",
    "title": "喔！露西",
    "url": "./movie-1614.html",
    "cover": "./114.jpg",
    "region": "日本 / 美国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 喜剧",
    "tags": [
      "文化冲突",
      "中年女性",
      "假发",
      "寻找自我",
      "公路"
    ],
    "oneLine": "一个戴着金色假发的日本中年OL，为了寻找失踪的英语老师飞到美国。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1615",
    "title": "心尘家园",
    "url": "./movie-1615.html",
    "cover": "./115.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "genre": "家庭 / 社会",
    "tags": [
      "拆迁",
      "土地情结",
      "代际和解"
    ],
    "oneLine": "高雄一个即将拆迁的眷村老宅里，三代人为了各自“家的记忆”展开最后一次争吵。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1616",
    "title": "反骗警察",
    "url": "./movie-1616.html",
    "cover": "./116.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "犯罪、刑侦、剧情",
    "tags": [
      "电信诈骗",
      "高智商",
      "卧底",
      "单元剧",
      "现实"
    ],
    "oneLine": "曾是顶级诈骗高手的天才，因特殊身份成为反诈警察，用骗术对抗骗术，以恶制恶。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1617",
    "title": "小白的男神爹地第二季",
    "url": "./movie-1617.html",
    "cover": "./117.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2022",
    "genre": "剧情 / 喜剧 / 家庭",
    "tags": [
      "萌娃",
      "先婚后爱",
      "养娃日常",
      "轻喜剧",
      "网络剧"
    ],
    "oneLine": "古灵精怪的女儿小白，为了给单亲妈妈找老公，在幼儿园里“物色”上了一位高冷总裁。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1618",
    "title": "汉娜的旅程",
    "url": "./movie-1618.html",
    "cover": "./118.jpg",
    "region": "瑞典",
    "type": "剧情片",
    "year": "2017",
    "genre": "公路片, 剧情, 悬疑, 社会议题",
    "tags": [
      "边境火车",
      "遗嘱地图",
      "证词追踪",
      "法庭密码",
      "女性成长"
    ],
    "oneLine": "汉娜以为自己只是为一张遗嘱纸起程，列车从北境一路转向边境时，却发现车站广播和每一位陌生旅客都在指向一份被国家掩埋的真相。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1619",
    "title": "好莱坞妈妈的奥秘",
    "url": "./movie-1619.html",
    "cover": "./119.jpg",
    "region": "美国",
    "type": "剧集/纪录片",
    "year": "2025",
    "genre": "剧情 / 悬疑 / 家庭",
    "tags": [
      "童星",
      "代孕",
      "娱乐圈黑幕",
      "母女关系",
      "名利场"
    ],
    "oneLine": "过气童星调查母亲失踪案，意外发现好莱坞“明星妈妈”背后的地下代孕与身份买卖链条。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1620",
    "title": "拐个弯儿遇见你",
    "url": "./movie-1620.html",
    "cover": "./120.jpg",
    "region": "台湾",
    "type": "电视剧",
    "year": "2023",
    "genre": "爱情 / 都市 / 治愈",
    "tags": [
      "久别重逢",
      "青梅竹马",
      "台北背景",
      "慢热",
      "生活流"
    ],
    "oneLine": "七年前私奔失败，她在机场被丢下；七年后她是离婚律师，他是民航机长，命运让他们被迫成为邻居。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1621",
    "title": "刺客奇兵",
    "url": "./movie-1621.html",
    "cover": "./121.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 古装",
    "tags": [
      "大明锦衣卫",
      "少年暗杀",
      "朝堂阴谋"
    ],
    "oneLine": "大明万历年间，一群被秘密培养的少年刺客接到终极任务：刺杀同样出自本门、如今权倾朝野的大师兄。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1622",
    "title": "全面反击",
    "url": "./movie-1622.html",
    "cover": "./122.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "动作 / 犯罪",
    "tags": [
      "复仇",
      "黑帮",
      "硬核",
      "枪战"
    ],
    "oneLine": "失忆杀手在纹身店醒来，发现身体上刻着整个犯罪组织的秘密账本。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1623",
    "title": "大生意",
    "url": "./movie-1623.html",
    "cover": "./123.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪, 剧情",
    "tags": [
      "商战",
      "黑色幽默",
      "小人物",
      "反转"
    ],
    "oneLine": "三个负债的中年人决定绑架当地首富，却意外卷入一场洗钱黑幕。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1624",
    "title": "走过冬季",
    "url": "./movie-1624.html",
    "cover": "./124.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "剧情, 爱情",
    "tags": [
      "治愈",
      "小镇",
      "丧偶",
      "烘焙"
    ],
    "oneLine": "纽约的米其林女主厨丧夫后，搬去丈夫的故乡阿拉斯加，在一个只卖“黑暗料理”的小餐车里，重新学习“不好吃”的意义。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1625",
    "title": "特殊行动2015",
    "url": "./movie-1625.html",
    "cover": "./125.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2015",
    "genre": "动作战争",
    "tags": [
      "军事",
      "反恐",
      "边境",
      "硬核枪战"
    ],
    "oneLine": "中国边境，六人特战小队为解救被拐科学家，必须在24小时内穿越最危险的雷区。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1626",
    "title": "水中刀",
    "url": "./movie-1626.html",
    "cover": "./126.jpg",
    "region": "波兰",
    "type": "电影",
    "year": "1962",
    "genre": "剧情, 惊悚",
    "tags": [
      "心理战",
      "游艇",
      "三人行"
    ],
    "oneLine": "一对中产夫妇顺路搭载一个年轻 hitchhiker 出海，一把掉进水中的刀成为三人权力游戏的导火索。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1627",
    "title": "食人族大屠杀2",
    "url": "./movie-1627.html",
    "cover": "./127.jpg",
    "region": "意大利 / 巴西",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 冒险",
    "tags": [
      "禁片",
      "食人族",
      "伪纪录片",
      "血腥"
    ],
    "oneLine": "一支纪录片团队进入亚马逊寻找第一部电影的原始素材，却发现那些“被食人族杀害”的剧组成员都还活着。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1628",
    "title": "倩女幽魂2011",
    "url": "./movie-1628.html",
    "cover": "./128.jpg",
    "region": "中国内地/香港",
    "type": "电影",
    "year": "2011",
    "genre": "爱情，奇幻，古装",
    "tags": [
      "人妖殊途",
      "水墨特效",
      "经典翻拍"
    ],
    "oneLine": "书生聂小倩误入妖界，为赎罪化身捉妖师，却与善良树妖姥姥之子产生禁忌之恋。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1629",
    "title": "元气奇事",
    "url": "./movie-1629.html",
    "cover": "./129.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "奇幻 / 青春",
    "tags": [
      "打工还债",
      "神明实习生",
      "都市治愈",
      "单元剧"
    ],
    "oneLine": "废柴少女被撞后获得“元气管理”系统，必须帮助100个丧失斗志的人找回元气，否则自己就会消失。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1630",
    "title": "沿着记忆巷",
    "url": "./movie-1630.html",
    "cover": "./130.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭 / 文艺",
    "tags": [
      "阿尔茨海默症",
      "巷弄",
      "母子",
      "回忆"
    ],
    "oneLine": "患阿尔茨海默症的母亲每天都要走出家门，沿着老巷走一遍七十年的生死爱恨。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1631",
    "title": "超级大老千",
    "url": "./movie-1631.html",
    "cover": "./131.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "1991",
    "genre": "剧情 / 犯罪 / 赌术",
    "tags": [
      "老千",
      "赌片",
      "反套路",
      "港剧经典"
    ],
    "oneLine": "千王之王金盆洗手后，却被一个完全不懂千术、只靠运气的傻小子逼得重出江湖。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1632",
    "title": "鲜血的呼唤",
    "url": "./movie-1632.html",
    "cover": "./132.jpg",
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖、民俗",
    "tags": [
      "拉美巫术",
      "血脉诅咒",
      "食人献祭",
      "雨林噩梦"
    ],
    "oneLine": "女孩继承墨西哥雨林深处的家族老宅后，每晚都梦见自己用牙齿撕咬活人的喉咙，第二天新闻里就会出现对应的人被动物袭击身亡。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1633",
    "title": "朱丽叶与魔鬼",
    "url": "./movie-1633.html",
    "cover": "./133.jpg",
    "region": "西班牙 / 墨西哥",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻 / 恐怖 / 爱情",
    "tags": [
      "修女驱魔人",
      "恶魔爱上我",
      "修道院秘辛"
    ],
    "oneLine": "能看见恶魔的修女朱丽叶，发现最近纠缠她的恶魔长着和耶稣圣像一模一样的脸。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1634",
    "title": "武训传",
    "url": "./movie-1634.html",
    "cover": "./134.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "传记，历史，剧情",
    "tags": [
      "行乞兴学",
      "教育家",
      "平民"
    ],
    "oneLine": "清末，一个目不识丁的乞丐，跪行三十九年，靠乞讨办起了三所义学。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1635",
    "title": "银河艳星",
    "url": "./movie-1635.html",
    "cover": "./135.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 歌舞 / 传记",
    "tags": [
      "港片情怀",
      "艳星转型",
      "女性觉醒",
      "娱乐圈黑幕"
    ],
    "oneLine": "九十年代红极一时的艳星，六十岁决定拍一部关于自己一生的歌舞片，用踢踏舞踢碎所有标签。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1636",
    "title": "樱桃红之袖珍妈妈",
    "url": "./movie-1636.html",
    "cover": "./136.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "家庭伦理",
    "tags": [
      "温情",
      "社会边缘人群",
      "母性光辉"
    ],
    "oneLine": "身高不足一米三的袖珍妈妈林红，为了被嫌弃自己的女儿能抬起头做人，拼命创业开了一家网红蛋糕店。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1637",
    "title": "以美之名",
    "url": "./movie-1637.html",
    "cover": "./137.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情， 家庭， 喜剧",
    "tags": [
      "整容",
      "女性",
      "身份认同",
      "黑色幽默"
    ],
    "oneLine": "小镇唯一女整形医生意外发现，来找她整容的顾客，都曾是二十年前一场选美比赛的参赛者。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1638",
    "title": "地心记",
    "url": "./movie-1638.html",
    "cover": "./138.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2008",
    "genre": "科幻冒险",
    "tags": [
      "地心探险",
      "恐龙世界",
      "失落的文明",
      "岩浆逃生"
    ],
    "oneLine": "一场地震把地质学家团队送入地心空洞，那里竟存在着侏罗纪生态和智慧蜥蜴人。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1639",
    "title": "鸡犬不宁",
    "url": "./movie-1639.html",
    "cover": "./139.jpg",
    "region": "中国大陆",
    "type": "悬疑喜剧电影",
    "year": "2020",
    "genre": "喜剧,悬疑,家庭",
    "tags": [
      "邻里关系",
      "时间错位",
      "群像叙事",
      "黑色幽默",
      "真相还原"
    ],
    "oneLine": "看似热闹的老宅民宿不断上演鸡犬乱鸣和失踪事件，真正的怪物并非阴影里的生物，而是把邻里关系做成交易的每一个“无辜”证词。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1640",
    "title": "古镇谜案之诛心劫",
    "url": "./movie-1640.html",
    "cover": "./140.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "悬疑 / 古装 / 刑侦",
    "tags": [
      "本格推理",
      "古镇",
      "连环杀人",
      "心理战"
    ],
    "oneLine": "江南古镇出现“诛心”杀手，受害者皆被完美刺穿心脏，而所有证据都指向一名已死去十年的疯子。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1641",
    "title": "你还好吗",
    "url": "./movie-1641.html",
    "cover": "./141.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2020",
    "genre": "剧情， 悬疑， 人性",
    "tags": [
      "社会派",
      "霸凌",
      "复仇",
      "记忆"
    ],
    "oneLine": "一通15年前的求救电话录音突然曝光，揭开了一所精英高中里令人发指的群体性暴力事件。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1642",
    "title": "刻刻",
    "url": "./movie-1642.html",
    "cover": "./142.jpg",
    "region": "日本",
    "type": "动画",
    "year": "2018",
    "genre": "奇幻/悬疑",
    "tags": [
      "时间静止",
      "家族诅咒",
      "平行意识",
      "少女成长",
      "离奇追逐",
      "规则谜题"
    ],
    "oneLine": "当时间在某个瞬间彻底停住，只有一个家族还能移动，而每一次前行，都要用更深的代价去换取下一秒。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1643",
    "title": "风间公亲－教场0－",
    "url": "./movie-1643.html",
    "cover": "./143.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑, 犯罪, 剧情",
    "tags": [
      "警察学校",
      "魔鬼教官",
      "单元剧",
      "人性拷问",
      "木村拓哉"
    ],
    "oneLine": "魔鬼教官风间公亲在进入警校前的原点故事，揭露他失去一只眼睛的真相与最初的案件。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1644",
    "title": "狂舞小天后",
    "url": "./movie-1644.html",
    "cover": "./144.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "歌舞, 青春, 励志",
    "tags": [
      "街舞",
      "轮椅舞者",
      "地下比赛"
    ],
    "oneLine": "一场车祸让她坐上轮椅，她却用轮椅的轮子跳出了全城最炸的breaking动作。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1645",
    "title": "小鬼当道",
    "url": "./movie-1645.html",
    "cover": "./145.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 奇幻, 家庭",
    "tags": [
      "萌娃",
      "古代衙门",
      "智斗贪官",
      "穿越"
    ],
    "oneLine": "七岁穿越小县令用现代智慧整顿古代官场，却被五个萌娃同僚误认成妖孽。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1646",
    "title": "冤狱酷刑",
    "url": "./movie-1646.html",
    "cover": "./146.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2022",
    "genre": "犯罪剧情",
    "tags": [
      "误判",
      "私刑",
      "复仇",
      "司法黑暗"
    ],
    "oneLine": "一个被冤枉杀死女友的男人在监狱里遭受了十年的非人折磨，出狱后他发誓要找到真凶并让每一个折磨他的人付出代价。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1647",
    "title": "山水有相逢1995",
    "url": "./movie-1647.html",
    "cover": "./147.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "genre": "爱情 / 剧情",
    "tags": [
      "怀旧",
      "错过",
      "时代变迁",
      "港风"
    ],
    "oneLine": "1995年，两个在尖沙咀卖翻版碟的年轻人，因为一张神秘歌单而反复相遇又错过。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1648",
    "title": "南瓜剪刀",
    "url": "./movie-1648.html",
    "cover": "./148.jpg",
    "region": "日本",
    "type": "动画",
    "year": "2006",
    "genre": "军事 / 科幻 / 动作",
    "tags": [
      "战后处理",
      "战车对决",
      "帝国遗孤"
    ],
    "oneLine": "战败后的帝国，一个神秘的“南瓜剪刀”小队，负责清理战争留下的怪物与秘密。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1649",
    "title": "萌宠入殓师",
    "url": "./movie-1649.html",
    "cover": "./149.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 治愈",
    "tags": [
      "宠物殡葬",
      "单元剧",
      "人生百态",
      "催泪"
    ],
    "oneLine": "一个社恐青年接手了一家宠物殡葬店，每一次告别都是一段治愈的故事。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1650",
    "title": "我的奋斗",
    "url": "./movie-1650.html",
    "cover": "./150.jpg",
    "region": "挪威",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 传记",
    "tags": [
      "作家",
      "自传",
      "家庭",
      "文学改编",
      "北欧"
    ],
    "oneLine": "改编自挪威作家卡尔·奥韦·克瑙斯高自传小说，一个男人决定写下自己最不堪的所有记忆，包括他恨了一辈子的父亲。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1651",
    "title": "我的巨人弟弟",
    "url": "./movie-1651.html",
    "cover": "./1.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "genre": "家庭、奇幻、治愈",
    "tags": [
      "巨人症",
      "姐弟情",
      "日常奇观"
    ],
    "oneLine": "16岁的弟弟身高2米8，但心智只有6岁；20岁的姐姐身高1米5，却要当他的全世界。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1652",
    "title": "史酷比！吸血鬼的音乐",
    "url": "./movie-1652.html",
    "cover": "./2.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "动画, 喜剧, 悬疑",
    "tags": [
      "音乐剧",
      "吸血鬼",
      "侦探",
      "合家欢"
    ],
    "oneLine": "神秘公司受邀参加特兰西瓦尼亚音乐节，主办方竟是传说中的吸血鬼，而台下观众正在一个个变成蝙蝠。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1653",
    "title": "又喜又羞物语",
    "url": "./movie-1653.html",
    "cover": "./3.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2021",
    "genre": "喜剧, 爱情, 生活",
    "tags": [
      "职场恋情",
      "尴尬美学",
      "日常治愈",
      "年下"
    ],
    "oneLine": "文具公司企划部女课长发现自己暗恋的实习生，每晚都在无人仓库里模仿她的产品讲解视频。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1654",
    "title": "死在岩石上",
    "url": "./movie-1654.html",
    "cover": "./4.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2018",
    "genre": "生存惊悚",
    "tags": [
      "海岸悬崖",
      "孤身求生",
      "失忆",
      "天气灾难"
    ],
    "oneLine": "她在海岸岩壁上醒来，身边只有断裂的绳索和一具陌生尸体，而潮水上涨前，她必须想起自己究竟为什么会来到这里。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1655",
    "title": "只为遇见你",
    "url": "./movie-1655.html",
    "cover": "./5.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 奇幻",
    "tags": [
      "时空循环",
      "命运",
      "青春",
      "校园",
      "纯爱"
    ],
    "oneLine": "男孩被困在高考前一天，尝试千万次后发现唯一的出口是让暗恋的女孩讨厌他。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1656",
    "title": "僵尸谷惊魂",
    "url": "./movie-1656.html",
    "cover": "./6.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 喜剧, 动作",
    "tags": [
      "僵尸",
      "茅山术",
      "港式幽默",
      "丧尸杂交"
    ],
    "oneLine": "一个不学无术的假茅山道士，在网红直播圣地“僵尸谷”撞上了真僵尸暴动。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1657",
    "title": "大蟒蛇",
    "url": "./movie-1657.html",
    "cover": "./7.jpg",
    "region": "美国 / 澳大利亚",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚 / 冒险",
    "tags": [
      "丛林",
      "巨兽",
      "生存狂"
    ],
    "oneLine": "亚马逊丛林深处，一个纪录片摄制组发现，捕猎他们的不是蟒蛇，而是一个把蟒蛇当宠物养的人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1658",
    "title": "间谍过家家代号:白",
    "url": "./movie-1658.html",
    "cover": "./8.jpg",
    "region": "日本",
    "type": "电影版",
    "year": "2024",
    "genre": "动画, 喜剧, 动作",
    "tags": [
      "虚假家庭",
      "超能力",
      "间谍",
      "杀手",
      "爆笑"
    ],
    "oneLine": "为了完成“枭”行动，佛杰一家被迫去雪山度假，却意外卷入了一场颠覆东西国的阴谋。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1659",
    "title": "魔界重生",
    "url": "./movie-1659.html",
    "cover": "./9.jpg",
    "region": "中国大陆",
    "type": "动画电影",
    "year": "2025",
    "genre": "奇幻冒险 / 动作",
    "tags": [
      "转生",
      "魔界政治",
      "法典反转",
      "反乌托邦",
      "团队成长"
    ],
    "oneLine": "被判刑的程序员在临刑前签下契约穿越魔界，获赠新躯后反而成为唯一能揭开两界债务账本的人，他的复仇不是杀回人间，而是改写维持压迫的规条。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1660",
    "title": "我本善良粤语",
    "url": "./movie-1660.html",
    "cover": "./10.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 犯罪 / 家族",
    "tags": [
      "卧底",
      "父子情",
      "黑帮",
      "港风"
    ],
    "oneLine": "从小被黑道大佬养大的孤儿，其实是警方安插的卧底，当养父要他继承家业时，他选择了良心。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1661",
    "title": "东宫皇子",
    "url": "./movie-1661.html",
    "cover": "./11.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2016",
    "genre": "古装，爱情，剧情",
    "tags": [
      "宫廷",
      "虐恋",
      "权谋",
      "悲剧"
    ],
    "oneLine": "西州国的九公主被迫和亲中原太子，她本想灭其国，却在日复一日的相处中爱上了自己的仇人。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1662",
    "title": "铁血尖刀",
    "url": "./movie-1662.html",
    "cover": "./12.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "战争 / 动作",
    "tags": [
      "特种部队",
      "抗美援朝",
      "兄弟情",
      "战术"
    ],
    "oneLine": "抗美援朝战场上，一支由七名“问题士兵”组成的侦察小队，被命令执行一次不可能的后方渗透任务。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1663",
    "title": "小时代3：刺金时代",
    "url": "./movie-1663.html",
    "cover": "./13.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 爱情",
    "tags": [
      "时尚",
      "商战",
      "闺蜜撕逼",
      "奢华",
      "现实主义"
    ],
    "oneLine": "林萧发现顾里暗中收购了《ME》杂志，四姐妹的战争从闺蜜群蔓延到了整个资本圈，这一次玩的是真金白银。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1664",
    "title": "怪猫",
    "url": "./movie-1664.html",
    "cover": "./14.jpg",
    "region": "泰国",
    "type": "电视剧",
    "year": "2025",
    "genre": "惊悚 / 奇幻",
    "tags": [
      "民俗恐怖",
      "猫灵",
      "因果报应"
    ],
    "oneLine": "一个虐猫成性的富家女，死后转世成为猫，被卖给自己的前男友，开启了喵星人的复仇之路。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1665",
    "title": "食梦者第二季",
    "url": "./movie-1665.html",
    "cover": "./15.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "genre": "动画 / 剧情 / 奇幻",
    "tags": [
      "梦境",
      "心理",
      "治愈",
      "奇幻"
    ],
    "oneLine": "梦境警察“食梦者”回归，这次他们要对付的不是噩梦制造者，而是盗取他人幸福梦境贩卖的“梦贩子”。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1666",
    "title": "只有我不在的街道2016",
    "url": "./movie-1666.html",
    "cover": "./16.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2016",
    "genre": "悬疑 / 奇幻 / 犯罪",
    "tags": [
      "时间回溯",
      "连环杀人",
      "救赎",
      "友情",
      "改编"
    ],
    "oneLine": "不得志的漫画家拥有“再上映”超能力，为救被冤的同学，他反复回到1988年的雪夜。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1667",
    "title": "神医国语",
    "url": "./movie-1667.html",
    "cover": "./17.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2012",
    "genre": "古装医道",
    "tags": [
      "悬壶济世",
      "宫廷疑难",
      "医案推理",
      "师徒传承",
      "仁心成长"
    ],
    "oneLine": "一位被逐出师门的年轻医者靠一纸方脉奇案重返京城，却在救人与守秘之间卷入宫廷风暴。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1668",
    "title": "圣欲",
    "url": "./movie-1668.html",
    "cover": "./18.jpg",
    "region": "西班牙/墨西哥",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖，心理惊悚",
    "tags": [
      "修道院",
      "附身",
      "压抑",
      "宗教",
      "女性"
    ],
    "oneLine": "十七世纪修道院接连修女发狂，从罗马来的驱魔神父发现：真正的魔鬼不是附身，而是欲望本身。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1669",
    "title": "绝岭三雄",
    "url": "./movie-1669.html",
    "cover": "./19.jpg",
    "region": "中国",
    "type": "战争动作电影",
    "year": "2017",
    "genre": "战争, 动作, 生存",
    "tags": [
      "兄弟情",
      "山地生存",
      "公路追逐",
      "牺牲",
      "抗战"
    ],
    "oneLine": "三位旧友被迫在绝岭修路中走私、救援、反击三线作战，最终让一辆失控补给车成为阻断战火的终极抉择。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1670",
    "title": "苏生龙王传说",
    "url": "./movie-1670.html",
    "cover": "./20.jpg",
    "region": "日本",
    "type": "动画剧集",
    "year": "2010",
    "genre": "奇幻 / 冒险 / 少年",
    "tags": [
      "龙王召唤",
      "契约之子",
      "世界重塑",
      "兄弟情",
      "架空大陆"
    ],
    "oneLine": "懦弱少年意外成为龙王契约者，却发现上一任契约者是他死去的双胞胎哥哥。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1671",
    "title": "海角惊魂",
    "url": "./movie-1671.html",
    "cover": "./21.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "孤岛",
      "暴风雪山庄",
      "密室逃生",
      "心理惊悚",
      "连环杀手"
    ],
    "oneLine": "七名网红受邀前往海角孤岛参加整蛊直播，却发现游戏规则是真的，而杀手就藏在他们中间。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1672",
    "title": "人生贩卖所",
    "url": "./movie-1672.html",
    "cover": "./22.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "科幻",
    "tags": [
      "伦理",
      "交易",
      "人性",
      "反转"
    ],
    "oneLine": "一家地下小店号称可以“卖掉不需要的人生片段”，购买者却发现自己买回了别人的噩梦。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1673",
    "title": "泰森",
    "url": "./movie-1673.html",
    "cover": "./23.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "传记, 运动",
    "tags": [
      "拳击",
      "传奇",
      "沉浮",
      "种族",
      "救赎"
    ],
    "oneLine": "从布鲁克林街头混混到最年轻重量级拳王，再到跌落神坛，这不是励志片，而是一个人的战争与和解。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1674",
    "title": "婚前协议",
    "url": "./movie-1674.html",
    "cover": "./24.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情，剧情，家庭",
    "tags": [
      "婚姻",
      "契约",
      "成长",
      "现实主义"
    ],
    "oneLine": "一份把婚姻变成“股份公司”的婚前协议，让新婚夫妻在“业绩考核”式的婚姻里渐渐迷失，直到有一方申请“破产”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1675",
    "title": "赛伦的领主",
    "url": "./movie-1675.html",
    "cover": "./25.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "奇幻 / 恐怖",
    "tags": [
      "女巫",
      "小镇惊魂",
      "邪教",
      "血统"
    ],
    "oneLine": "一位无神论科学家回到闹鬼的故乡小镇，却发现那些关于女巫的传说，其实是家族为了保护世界而设下的封印。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1676",
    "title": "婆罗多",
    "url": "./movie-1676.html",
    "cover": "./26.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 动作 / 家庭",
    "tags": [
      "印巴分治",
      "承诺",
      "马戏团",
      "复仇",
      "时间跨度"
    ],
    "oneLine": "从印巴分治到现代，一个小男孩为兑现对父亲的一句承诺，跨越七十年的沧桑人生。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1677",
    "title": "大地惊雷国语",
    "url": "./movie-1677.html",
    "cover": "./27.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2010",
    "genre": "剧情 / 西部 / 犯罪",
    "tags": [
      "追凶",
      "少女",
      "老警探"
    ],
    "oneLine": "14岁的女孩雇了一个最老的联邦警探，去追查杀害父亲的凶手，因为她自己已经快追到了。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1678",
    "title": "千日千夜",
    "url": "./movie-1678.html",
    "cover": "./28.jpg",
    "region": "德国",
    "type": "电视剧",
    "year": "2024",
    "genre": "战争 / 剧情",
    "tags": [
      "二战",
      "集中营",
      "幸存者",
      "史诗"
    ],
    "oneLine": "一个犹太女孩在集中营里坚持了一千天，她靠的是每天晚上对妹妹讲一个故事。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1679",
    "title": "能耐大了第二季",
    "url": "./movie-1679.html",
    "cover": "./29.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2019",
    "genre": "都市 / 喜剧 / 情景",
    "tags": [
      "社畜",
      "合租",
      "话剧团",
      "误会",
      "朋友",
      "生活喜剧"
    ],
    "oneLine": "第二季里，几个看似“没啥能耐”的年轻人继续在租房、工作和梦想之间互相拆台，却也在鸡飞狗跳里练出了真正的本事。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1680",
    "title": "车站",
    "url": "./movie-1680.html",
    "cover": "./30.jpg",
    "region": "日本",
    "type": "电影",
    "year": "1981",
    "genre": "剧情",
    "tags": [
      "雪国",
      "失忆",
      "救赎",
      "刑警"
    ],
    "oneLine": "一名将死的刑警在北海道车站下车，遇到了一个酷似亡妻的神秘女人。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1681",
    "title": "鬼作秀 第一季",
    "url": "./movie-1681.html",
    "cover": "./31.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "1982",
    "genre": "恐怖奇幻",
    "tags": [
      "单元故事",
      "怪谈",
      "黑色幽默",
      "复古漫画",
      "诡异反转"
    ],
    "oneLine": "每集都像从旧漫画里撕出来的噩梦，笑声还没落下，怪物就已经站到了你身后。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1682",
    "title": "第13个使徒",
    "url": "./movie-1682.html",
    "cover": "./32.jpg",
    "region": "法国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑, 奇幻, 惊悚",
    "tags": [
      "宗教",
      "使徒",
      "吸血鬼",
      "法国",
      "神秘组织"
    ],
    "oneLine": "耶稣有12使徒，第13个被抹去的使徒，其实是第一位吸血鬼。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1683",
    "title": "城堡岩第一季",
    "url": "./movie-1683.html",
    "cover": "./33.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2018",
    "genre": "悬疑、恐怖、超自然",
    "tags": [
      "斯蒂芬金宇宙",
      "心理惊悚",
      "小镇怪谈",
      "平行现实"
    ],
    "oneLine": "一名神秘的聋哑少年被发现关在城堡岩监狱地下一处从未被记录的牢房里，他的出现开始扭曲整个小镇的现实。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1684",
    "title": "丑小鸭天鹅",
    "url": "./movie-1684.html",
    "cover": "./34.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2001",
    "genre": "爱情, 剧情, 运动",
    "tags": [
      "芭蕾",
      "丑女逆袭",
      "励志"
    ],
    "oneLine": "体重180斤的女孩梦想跳芭蕾舞，所有人都笑她，直到她穿上特制的纯白舞裙站上舞台中央。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1685",
    "title": "我曾来过",
    "url": "./movie-1685.html",
    "cover": "./35.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "悬疑, 科幻",
    "tags": [
      "时空轮回",
      "谋杀",
      "侦探",
      "低配版信条"
    ],
    "oneLine": "一位退休侦探发现自己的老照片里，总有一个神秘的黑影，而他追踪发现，那个黑影正是试图“修正时间线”的未来自己。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1686",
    "title": "燕子符",
    "url": "./movie-1686.html",
    "cover": "./36.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "武侠, 奇幻, 动作",
    "tags": [
      "符咒师",
      "轻功对决",
      "水墨美学",
      "弑神少年"
    ],
    "oneLine": "一个被灭门的符咒师遗孤，将祖传“燕子符”纹在身上，用飘忽不定的飞身术向六大派发起无声复仇。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1687",
    "title": "假面真情2024",
    "url": "./movie-1687.html",
    "cover": "./37.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 剧情 / 爱情",
    "tags": [
      "骗局",
      "替身",
      "戛纳"
    ],
    "oneLine": "一个落魄女演员在戛纳电影节上被雇去假扮俄罗斯寡头失踪的妻子，却真的爱上了目标人物。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1688",
    "title": "雏菊",
    "url": "./movie-1688.html",
    "cover": "./38.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 爱情 / 悬疑",
    "tags": [
      "花语谜团",
      "失忆画师",
      "连环杀人"
    ],
    "oneLine": "失忆的女画家痴迷于画雏菊，直到她发现每幅画背后都藏着一桩未破的凶案。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1689",
    "title": "骗徒臭事多国语",
    "url": "./movie-1689.html",
    "cover": "./39.jpg",
    "region": "中国 / 美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "跨国行骗",
      "中文配音梗",
      "多重反转"
    ],
    "oneLine": "一个纽约街头骗子和一个上海退休反诈民警，在飞往曼谷的航班上成了邻座，被迫合伙诈骗整个机舱。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1690",
    "title": "我的小小钢琴家",
    "url": "./movie-1690.html",
    "cover": "./40.jpg",
    "region": "中国大陆",
    "type": "儿童音乐剧情片",
    "year": "2020",
    "genre": "音乐、家庭、成长、剧情",
    "tags": [
      "钢琴",
      "天赋",
      "师徒",
      "乡村学校",
      "舞台梦想",
      "亲子陪伴"
    ],
    "oneLine": "一个在乡镇学校偷偷练琴的小女孩，用一架破旧立式钢琴和一段未完成的曲子，悄悄撬动了整个家庭对梦想的理解。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1691",
    "title": "9歌",
    "url": "./movie-1691.html",
    "cover": "./41.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "音乐, 剧情",
    "tags": [
      "摇滚",
      "抑郁症",
      "乐队",
      "救赎"
    ],
    "oneLine": "一个只剩下九首歌记忆的摇滚主唱，必须在失忆彻底降临前，写完第十首。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1692",
    "title": "荡漾",
    "url": "./movie-1692.html",
    "cover": "./42.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 剧情",
    "tags": [
      "中年婚外恋",
      "千岛湖",
      "建筑女工",
      "诗意现实主义",
      "业余演员"
    ],
    "oneLine": "千岛湖水下古城的测绘员与工地女工的露水情缘，像湖水一样荡漾，也像湖水一样冰冷。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1693",
    "title": "查理之国",
    "url": "./movie-1693.html",
    "cover": "./43.jpg",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2013",
    "genre": "剧情",
    "tags": [
      "澳洲原住民",
      "社区发展",
      "老人",
      "文化冲突",
      "孤独"
    ],
    "oneLine": "一个固执的原住民老头拒绝搬离海边领地，用最传统的方式对抗整个现代化社区。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1694",
    "title": "魅惑之人",
    "url": "./movie-1694.html",
    "cover": "./44.jpg",
    "region": "泰国",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情, 悬疑, 惊悚",
    "tags": [
      "泰国",
      "情蛊",
      "复仇",
      "禁忌之恋",
      "豪门恩怨"
    ],
    "oneLine": "豪门继承人娶了温柔新娘，却发现她是为了复仇而来的情蛊高手。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1695",
    "title": "六楼后座",
    "url": "./movie-1695.html",
    "cover": "./45.jpg",
    "region": "香港",
    "type": "电影",
    "year": "2015",
    "genre": "剧情, 青春",
    "tags": [
      "合租",
      "梦想",
      "市井生活",
      "90年代"
    ],
    "oneLine": "1997年前夕，六个年轻人在老唐楼合租，他们发誓一年内必须实现各自的梦想。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1696",
    "title": "叛我心锁",
    "url": "./movie-1696.html",
    "cover": "./46.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪 / 剧情 / 动作",
    "tags": [
      "卧底",
      "心理战",
      "黑帮",
      "双重身份",
      "港产片"
    ],
    "oneLine": "潜伏在黑帮十年的卧底即将完成任务，却在最后的清洗行动中，发现自己早就不想回到“阳光”之下。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1697",
    "title": "神行太保",
    "url": "./movie-1697.html",
    "cover": "./47.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "动作、犯罪",
    "tags": [
      "快递员",
      "飙车",
      "黑吃黑",
      "市井英雄",
      "极限运动"
    ],
    "oneLine": "香港最速传说不是赛车手，而是一个为了给女儿赚医药费、骑着改装电单车穿梭街巷的亡命快递员“太保”。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1698",
    "title": "红杏劫粤语",
    "url": "./movie-1698.html",
    "cover": "./48.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2002",
    "genre": "悬疑 / 爱情 / 惊悚",
    "tags": [
      "婚姻危机",
      "偷拍",
      "心理博弈"
    ],
    "oneLine": "富商妻子收到自己出轨的录像带，随后勒索者离奇死亡，她成了最大嫌疑人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1699",
    "title": "顽皮豹之子",
    "url": "./movie-1699.html",
    "cover": "./49.jpg",
    "region": "美国",
    "type": "动画电影",
    "year": "2024",
    "genre": "喜剧 / 家庭 / 冒险",
    "tags": [
      "粉红顽皮豹",
      "亲子",
      "无厘头",
      "默片喜剧"
    ],
    "oneLine": "顽皮豹突然发现自己有一个儿子——一个比他更会惹麻烦的粉色小毛球。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1700",
    "title": "霹雳双虎将",
    "url": "./movie-1700.html",
    "cover": "./50.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1989",
    "genre": "动作 / 警匪",
    "tags": [
      "双雄",
      "兄弟情",
      "枪战",
      "80年代",
      "卧底"
    ],
    "oneLine": "一对性格迥异的警校挚友被迫兵戎相见，却发现彼此都在为同一个目标卧底。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1701",
    "title": "无处可逃",
    "url": "./movie-1701.html",
    "cover": "./51.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚、生存、犯罪",
    "tags": [
      "密闭空间",
      "冷库",
      "狼群",
      "绝境求生",
      "心理博弈"
    ],
    "oneLine": "一名腐败警察将目击证人锁进废弃冷库，却发现里面还关着一群饥肠辘辘的雪地狼。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1702",
    "title": "火星救援国语",
    "url": "./movie-1702.html",
    "cover": "./52.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2015",
    "genre": "科幻，冒险，剧情",
    "tags": [
      "太空",
      "生存",
      "孤岛",
      "植物学"
    ],
    "oneLine": "宇航员马克·沃特尼被误判死亡遗留在火星，他必须利用有限的食物和智商，在下一班飞船到来前活四年。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1703",
    "title": "龙的传人粤语",
    "url": "./movie-1703.html",
    "cover": "./53.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作/武术",
    "tags": [
      "龙舟",
      "传统技艺",
      "师徒传承"
    ],
    "oneLine": "香港最后一条手工龙舟面临被拆解，一群街头少年跟着老船匠，划向风暴的中心。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1704",
    "title": "柏林间谍战",
    "url": "./movie-1704.html",
    "cover": "./54.jpg",
    "region": "德国",
    "type": "剧集",
    "year": "2025",
    "genre": "惊悚, 悬疑",
    "tags": [
      "冷战",
      "间谍",
      "暗战",
      "柏林墙",
      "双重身份"
    ],
    "oneLine": "1980年代柏林，一个东德情报员与一个西德女警探同时追踪一个代号“幽灵”的叛逃者。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1705",
    "title": "漫研社第二季",
    "url": "./movie-1705.html",
    "cover": "./55.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2021",
    "genre": "动画, 喜剧, 校园",
    "tags": [
      "漫研社",
      "宅女日常",
      "吐槽",
      "泡面番",
      "声优梗"
    ],
    "oneLine": "四个高中女生的漫画研究社，正事不干，每天搞出匪夷所思的脑洞行为艺术。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1706",
    "title": "嗨，特伦甘纳！",
    "url": "./movie-1706.html",
    "cover": "./56.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "genre": "剧情、喜剧、动作",
    "tags": [
      "印度乡土",
      "政治讽刺",
      "女性力量"
    ],
    "oneLine": "特伦甘纳邦的一个小村庄，全村女人突然集体学会了泰拳，只因政府修错了路。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1707",
    "title": "国产凌凌漆",
    "url": "./movie-1707.html",
    "cover": "./57.jpg",
    "region": "中国大陆/香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧， 动作， 谍战",
    "tags": [
      "周星驰致敬",
      "特工恶搞",
      "猪肉佬"
    ],
    "oneLine": "曾经的最强特工“凌凌漆”，如今在菜市场卖注水猪肉，直到上级送来一把生锈的杀猪刀和一件密令。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1708",
    "title": "小可爱娜斯佳第六季",
    "url": "./movie-1708.html",
    "cover": "./58.jpg",
    "region": "俄罗斯",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧 / 家庭 / 奇幻",
    "tags": [
      "萌娃日常",
      "会说话的宠物",
      "脑洞大开",
      "治愈系"
    ],
    "oneLine": "五岁娜斯佳发现自己能和小区里的流浪猫狗聊天，并帮它们解决“喵生难题”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1709",
    "title": "意外华尔滋",
    "url": "./movie-1709.html",
    "cover": "./59.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情/喜剧",
    "tags": [
      "一夜情",
      "电梯故障",
      "舞者",
      "浪漫喜剧",
      "巴黎"
    ],
    "oneLine": "两个互不相识的男女被困在故障电梯里整整一夜，天亮时他们发现彼此竟然是离婚官司的对手律师。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1710",
    "title": "月亮",
    "url": "./movie-1710.html",
    "cover": "./60.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "科幻, 灾难, 剧情",
    "tags": [
      "月球救援",
      "太空灾难",
      "人性",
      "国家荣誉",
      "硬科幻"
    ],
    "oneLine": "韩国首次载人登月任务失败，一名宇航员被困月球，地球上的昔日对手必须放下恩怨救他回家。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1711",
    "title": "愤怒的船长",
    "url": "./movie-1711.html",
    "cover": "./61.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 冒险",
    "tags": [
      "海上",
      "复仇",
      "克苏鲁",
      "疯癫",
      "独角戏"
    ],
    "oneLine": "他的渔船被一头理智的巨型章鱼跟踪了三个月，而他开始相信自己是唯一清醒的人。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1712",
    "title": "凤唳九天",
    "url": "./movie-1712.html",
    "cover": "./62.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2020",
    "genre": "古装、宫斗、权谋",
    "tags": [
      "复仇",
      "皇权",
      "伪装身份",
      "朝堂阴谋",
      "宫廷博弈"
    ],
    "oneLine": "被诬陷的侯门之女以乐师身份重返宫廷，在一曲《凤唳》里步步逼近当年灭门真相。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1713",
    "title": "糊涂小天使",
    "url": "./movie-1713.html",
    "cover": "./63.jpg",
    "region": "中国",
    "type": "奇幻冒险动画片",
    "year": "2025",
    "genre": "奇幻, 喜剧, 成长, 家庭",
    "tags": [
      "小天使",
      "童年记忆",
      "误导与守护",
      "温柔反转",
      "和解"
    ],
    "oneLine": "每逢小孩迷路就会出现的天使，其实每次施救后都会遗忘名字，糊涂与善意的代价由小镇一起承担。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1714",
    "title": "飞象过河",
    "url": "./movie-1714.html",
    "cover": "./64.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": [
      "港式无厘头",
      "象棋杀局",
      "跨国追捕",
      "反派洗白",
      "老港片情怀"
    ],
    "oneLine": "一个退役棋王靠“象棋步法”策划劫案，却被一个只会“飞象过河”乱来的新手警察破了局。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1715",
    "title": "薇若妮卡想不开",
    "url": "./movie-1715.html",
    "cover": "./65.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2019",
    "genre": "剧情、黑色幽默",
    "tags": [
      "抑郁",
      "荒诞",
      "治愈",
      "反向操作"
    ],
    "oneLine": "抑郁症女孩花光积蓄雇了一个杀手杀自己，杀手每次都失手，她发现对方比自己更想死。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1716",
    "title": "林中奇遇",
    "url": "./movie-1716.html",
    "cover": "./66.jpg",
    "region": "加拿大",
    "type": "电影",
    "year": "2023",
    "genre": "惊悚、冒险",
    "tags": [
      "野营",
      "神秘生物",
      "信任危机"
    ],
    "oneLine": "五名好友在深山野营时，遭到一种能完美模仿人类声音的未知生物的猎杀。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1717",
    "title": "妖怪名单第二季",
    "url": "./movie-1717.html",
    "cover": "./67.jpg",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2017",
    "genre": "奇幻、校园、恋爱、冒险",
    "tags": [
      "妖怪",
      "前世今生",
      "驱魔",
      "同居",
      "宿命",
      "国漫"
    ],
    "oneLine": "当封印松动、旧日妖约重启，少年必须在看不见的世界里重新选择同伴、敌人和自己曾经遗忘的那段誓言。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1718",
    "title": "鹿鼎记2神龙教",
    "url": "./movie-1718.html",
    "cover": "./68.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "喜剧，动作，古装",
    "tags": [
      "周星驰",
      "无厘头",
      "韦小宝",
      "金庸改编",
      "后宫"
    ],
    "oneLine": "韦小宝护送建宁公主出嫁云南，却卷入神龙教与平西王府的荒唐乱斗。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1719",
    "title": "我的军中情人",
    "url": "./movie-1719.html",
    "cover": "./69.jpg",
    "region": "以色列",
    "type": "电影",
    "year": "2024",
    "genre": "爱情、战争",
    "tags": [
      "同志",
      "军中禁忌",
      "生死离别"
    ],
    "oneLine": "在紧张的以巴冲突前线，两名男兵隐藏着一段禁忌之恋，直到一次突袭将一切推向终点。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1720",
    "title": "一念菩提",
    "url": "./movie-1720.html",
    "cover": "./70.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑",
    "tags": [
      "轮回",
      "因果",
      "佛寺",
      "心理"
    ],
    "oneLine": "一位高僧在坐化前夜，被卷入七名香客离奇死亡的悬案，却发现自己正是凶手。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1721",
    "title": "邰忠利",
    "url": "./movie-1721.html",
    "cover": "./71.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 传记 / 历史",
    "tags": [
      "边防",
      "牺牲",
      "坚守",
      "家国情怀",
      "真实改编"
    ],
    "oneLine": "一名边防战士在极寒哨所失踪，三年后，一段来自边境的模糊录像重新点燃了希望。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1722",
    "title": "目标一号",
    "url": "./movie-1722.html",
    "cover": "./72.jpg",
    "region": "加拿大",
    "type": "电影",
    "year": "2020",
    "genre": "传记 / 犯罪 / 剧情",
    "tags": [
      "缉毒",
      "卧底",
      "真实改编",
      "心理战",
      "跨国"
    ],
    "oneLine": "一名破产的飞行员被招募成为毒枭的专属驾驶员，却在为警方输送情报时发现自己早已被黑白两道同时盯上。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1723",
    "title": "兔子共和国",
    "url": "./movie-1723.html",
    "cover": "./73.jpg",
    "region": "英国 / 爱尔兰",
    "type": "动画剧集",
    "year": "2018",
    "genre": "奇幻 / 冒险 / 剧情",
    "tags": [
      "兔子",
      "政治隐喻",
      "冒险",
      "生存",
      "经典改编"
    ],
    "oneLine": "一群兔子逃离被人类毁灭的兔场，踏上寻找“沃特希普荒原”的征途，却发现最危险的不是人类，是兔子自己。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1724",
    "title": "幻梦战记",
    "url": "./movie-1724.html",
    "cover": "./74.jpg",
    "region": "日本",
    "type": "动画电影",
    "year": "2025",
    "genre": "奇幻, 冒险",
    "tags": [
      "梦境",
      "机甲",
      "异世界",
      "伙伴"
    ],
    "oneLine": "少女每晚都会梦见一个被怪物围攻的机甲世界，直到某天怪物真的出现在了她的教室窗外。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1725",
    "title": "维和冲锋：绝境求生",
    "url": "./movie-1725.html",
    "cover": "./75.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 战争",
    "tags": [
      "维和部队",
      "非洲",
      "人质营救",
      "实战感"
    ],
    "oneLine": "一支中国维和步兵营在非洲某国执行护送任务时遭遇伏击，必须在48小时内救出被困在当地医院的难民和战友。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1726",
    "title": "野生狼性",
    "url": "./movie-1726.html",
    "cover": "./76.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "惊悚 / 生存",
    "tags": [
      "荒野",
      "狼群",
      "心理"
    ],
    "oneLine": "一架飞机坠毁在阿拉斯加，幸存者发现当地狼群拥有将人“同化”的超自然能力。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1727",
    "title": "七巨人",
    "url": "./movie-1727.html",
    "cover": "./77.jpg",
    "region": "英国 / 挪威",
    "type": "电影",
    "year": "2023",
    "genre": "奇幻 / 冒险",
    "tags": [
      "北欧神话",
      "巨人",
      "环保",
      "视觉系"
    ],
    "oneLine": "冰川融化后，沉睡了千年的七个远古巨人苏醒，但他们并不是要毁灭世界，而是要找回被人类拿走的“心脏”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1728",
    "title": "春之序曲",
    "url": "./movie-1728.html",
    "cover": "./78.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情，家庭，音乐",
    "tags": [
      "钢琴",
      "小镇",
      "隔代教育",
      "梦想"
    ],
    "oneLine": "南方小镇的叛逆少女，捡到一本废弃的琴谱，也捡回了父亲失落的青春与梦想。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1729",
    "title": "美国恐怖故事第五季",
    "url": "./movie-1729.html",
    "cover": "./79.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "恐怖 / 奇幻",
    "tags": [
      "都市传说",
      "地铁怪谈",
      "连环杀手"
    ],
    "oneLine": "纽约地下废弃地铁站里住着一群“乘客”，他们专门诱捕那些在地铁里刷手机不看路的活人。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1730",
    "title": "轻轻摇晃",
    "url": "./movie-1730.html",
    "cover": "./80.jpg",
    "region": "英国/中国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情，剧情",
    "tags": [
      "跨文化",
      "老年爱情",
      "同性",
      "伦敦生活"
    ],
    "oneLine": "华人老太太在儿子去世后，发现儿子的英国男友一直默默照顾着她，而她却从未知晓儿子的秘密。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1731",
    "title": "恋上美人鱼",
    "url": "./movie-1731.html",
    "cover": "./81.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻 / 爱情 / 喜剧",
    "tags": [
      "人鱼恋",
      "都市童话",
      "轻松治愈"
    ],
    "oneLine": "一个濒临倒闭的水族馆馆长收留了一条搁浅的美人鱼，却发现这条美人鱼是一个脾气暴躁的网红主播。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1732",
    "title": "毒舌律师",
    "url": "./movie-1732.html",
    "cover": "./82.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "剧情，律政",
    "tags": [
      "唇枪舌剑",
      "正义翻盘",
      "港味十足"
    ],
    "oneLine": "一个只为钱打官司的过气大状，为了给被诬陷杀母的女明星翻案，在法庭上挑战整个权贵阶层。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1733",
    "title": "纸上城市",
    "url": "./movie-1733.html",
    "cover": "./83.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2015",
    "genre": "爱情， 悬疑， 青春",
    "tags": [
      "约翰·格林",
      "公路",
      "追寻",
      "破格",
      "成长"
    ],
    "oneLine": "暗恋多年的女神留下一连串神秘线索后消失，他和朋友们必须在毕业前解开这张“纸上城市”的地图。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1734",
    "title": "全面中邪",
    "url": "./movie-1734.html",
    "cover": "./84.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "恐怖 / 心理",
    "tags": [
      "邪教",
      "洗脑",
      "集体癔症",
      "小镇",
      "超自然"
    ],
    "oneLine": "一个美国小镇集体陷入癫狂，只有聋哑女孩看到了真相。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1735",
    "title": "一路繁花2025",
    "url": "./movie-1735.html",
    "cover": "./85.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情，家庭，青春",
    "tags": [
      "未来世界",
      "亲情",
      "成长",
      "治愈"
    ],
    "oneLine": "2050年的老人通过AI技术重返2025年，只为阻止年轻时的自己犯下一个毁掉全家的错误。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1736",
    "title": "古墓奇兵",
    "url": "./movie-1736.html",
    "cover": "./86.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "冒险 / 动作",
    "tags": [
      "解谜",
      "考古",
      "遗迹",
      "超自然"
    ],
    "oneLine": "盗墓者闯入一座会移动的古墓，每半小时墙壁变换一次，如同活物。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1737",
    "title": "空中浩劫第三季",
    "url": "./movie-1737.html",
    "cover": "./87.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "灾难, 纪实, 惊悚",
    "tags": [
      "空难",
      "调查",
      "真实改编"
    ],
    "oneLine": "本季还原三起神秘空难，其中一起导致127人遇难，黑匣子却录下无人驾驶舱内的敲击声。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1738",
    "title": "山炮大明星",
    "url": "./movie-1738.html",
    "cover": "./88.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2015",
    "genre": "喜剧",
    "tags": [
      "东北",
      "草根逆袭",
      "搞笑"
    ],
    "oneLine": "东北农村大龄青年误打误撞进了剧组，被当成替身摔得鼻青脸肿，却意外成了网红。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1739",
    "title": "长春事件",
    "url": "./movie-1739.html",
    "cover": "./89.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "历史悬疑",
    "tags": [
      "年代",
      "悬疑",
      "人性",
      "东北",
      "冷战"
    ],
    "oneLine": "1988年冬天，长春一间老工厂里，一箱绝密图纸失踪，三个家庭命运从此改写。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1740",
    "title": "巴塔哥尼亚的叛乱",
    "url": "./movie-1740.html",
    "cover": "./90.jpg",
    "region": "阿根廷",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 历史 / 西部",
    "tags": [
      "南美",
      "拓荒",
      "反抗",
      "写实"
    ],
    "oneLine": "十九世纪末，一对爱尔兰兄弟逃难至巴塔哥尼亚，试图建立牧场，却发现这片荒原是原住民与牧羊主的血腥战场。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1741",
    "title": "妻子的怀疑",
    "url": "./movie-1741.html",
    "cover": "./91.jpg",
    "region": "泰国",
    "type": "电视剧",
    "year": "2019",
    "genre": "剧情， 悬疑， 家庭",
    "tags": [
      "泰剧",
      "出轨",
      "复仇"
    ],
    "oneLine": "妻子怀疑丈夫出轨，安装监控后却发现丈夫每晚都在凌晨两点对着家里的衣柜做奇怪的祭祀动作。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1742",
    "title": "我的军中情人2",
    "url": "./movie-1742.html",
    "cover": "./92.jpg",
    "region": "以色列",
    "type": "电影",
    "year": "2016",
    "genre": "剧情 / 爱情 / 战争",
    "tags": [
      "禁忌之恋",
      "国防军",
      "重逢",
      "遗憾美学"
    ],
    "oneLine": "十年后，曾经的战地恋人在一次军事行动中意外重逢，却发现对方已成了敌人的俘虏。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1743",
    "title": "心的归属",
    "url": "./movie-1743.html",
    "cover": "./93.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "剧情，家庭",
    "tags": [
      "遗弃",
      "寻找",
      "亲情",
      "和解"
    ],
    "oneLine": "在三岁就被母亲遗弃的女人，三十年后收到一份遗产，是一间破败的乡村民宿和一张“回来吧”的纸条。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1744",
    "title": "皮阿佐拉：鲨之岁月",
    "url": "./movie-1744.html",
    "cover": "./94.jpg",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 传记 / 音乐",
    "tags": [
      "探戈音乐",
      "艺术家传记",
      "创作困境",
      "历史风云"
    ],
    "oneLine": "探戈革命家皮阿佐拉在创作名曲《鲨鱼》的十年间，与独裁政权、古典乐坛和内心的魔鬼殊死搏斗。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1745",
    "title": "杀手日记",
    "url": "./movie-1745.html",
    "cover": "./95.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2018",
    "genre": "犯罪 / 悬疑",
    "tags": [
      "黑色幽默",
      "反转",
      "日记体"
    ],
    "oneLine": "一名强迫症杀手在执行任务时弄丢了枪，却捡到一本预言他死亡日期的日记。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1746",
    "title": "人肉米粉",
    "url": "./movie-1746.html",
    "cover": "./96.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖, 惊悚, 犯罪",
    "tags": [
      "黑色幽默",
      "血腥",
      "社会讽刺"
    ],
    "oneLine": "曼谷唐人街的米粉店生意火爆，因为老板娘的秘密配方里有一种特殊的“猪肉”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1747",
    "title": "士兵的心上人",
    "url": "./movie-1747.html",
    "cover": "./97.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "爱情, 战争",
    "tags": [
      "军旅",
      "书信",
      "守候",
      "纯爱"
    ],
    "oneLine": "一张寄往边疆哨所的照片，让大学生和驻守喀喇昆仑的士兵开始了长达五年的“纸上恋爱”，而他们见面时，却是在病床前。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1748",
    "title": "断网",
    "url": "./movie-1748.html",
    "cover": "./98.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "动作, 犯罪, 科幻",
    "tags": [
      "黑客",
      "暗网",
      "洗钱",
      "动作捕捉"
    ],
    "oneLine": "天才网络保安专家被诬陷洗钱，他必须在现实世界被追杀的同时，深入暗网虚拟世界寻找唯一证据。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1749",
    "title": "鱼和薯条",
    "url": "./movie-1749.html",
    "cover": "./99.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情, 剧情",
    "tags": [
      "炸鱼薯条店",
      "移民",
      "英式幽默",
      "黄昏恋",
      "文化冲突"
    ],
    "oneLine": "伦敦老炸鱼薯条店面临倒闭，新来的土耳其移民用烤肉配方救了它，顺便偷走了老板的心。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1750",
    "title": "使用下方 20 个影片名，按顺序一一对应，不要改动片名文字，只根据片名和括号内类型提示来虚构全新的故事内容： 守诚者 俾斯麦 芝加哥警署第四季 粉骷髅 猫儿协奏曲 天使特警 剧场版第三部 有关欧柏特 不可忘怀 弄潮艳侣 本性可移 雷电神兵 我妈不是高校生 恐龙饭店 地缚少年花子君第二季后篇 独活女子的推荐第四季 抛妻奇谈2 蔬菜宝贝历险记 关于我妻子的一切 恐怖欢乐屋 越活越明白",
    "url": "./movie-1750.html",
    "cover": "./100.jpg",
    "region": "根据片名判断",
    "type": "根据片名判断",
    "year": "根据片名判断",
    "genre": "根据片名判断",
    "tags": [
      "根据片名判断"
    ],
    "oneLine": "（一句话剧情钩子，20~40 字左右，简洁但有记忆点）",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1751",
    "title": "浴血争霸",
    "url": "./movie-1751.html",
    "cover": "./101.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 古装, 战争",
    "tags": [
      "武侠",
      "夺城",
      "冷兵器",
      "兄弟情",
      "背叛"
    ],
    "oneLine": "两兄弟分属敌对国家，在最后一座城门前相遇，身后是各自的皇帝，身前是彼此。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1752",
    "title": "元宵节的结",
    "url": "./movie-1752.html",
    "cover": "./102.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "家庭 / 爱情 / 剧情",
    "tags": [
      "元宵节",
      "旧城改造",
      "家族秘密",
      "返乡",
      "和解"
    ],
    "oneLine": "一条在元宵夜被悄悄打结的红绳，牵出了两代人藏在灯火里的误会、亏欠与迟到的告别。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1753",
    "title": "东京审判（电影）",
    "url": "./movie-1753.html",
    "cover": "./103.jpg",
    "region": "中国大陆 / 日本",
    "type": "电影",
    "year": "2026",
    "genre": "历史 / 剧情 / 战争",
    "tags": [
      "法庭",
      "战犯",
      "国际法",
      "辩论",
      "民族尊严"
    ],
    "oneLine": "一部完全聚焦“庭审攻防战”的电影，中国检察官梅汝璈与日本战犯辩护团之间长达两年的智力绞杀。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1754",
    "title": "单亲妈妈",
    "url": "./movie-1754.html",
    "cover": "./104.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "剧情、家庭、女性",
    "tags": [
      "逆袭",
      "职场",
      "母子情"
    ],
    "oneLine": "高中毕业就带娃的单亲妈妈，在儿子高考那天决定重考大学，和儿子做同桌。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1755",
    "title": "超胆侠第二季",
    "url": "./movie-1755.html",
    "cover": "./105.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "动作 / 犯罪 / 科幻",
    "tags": [
      "漫威",
      "夜魔侠",
      "地狱厨房",
      "惩罚者",
      "法律"
    ],
    "oneLine": "盲人律师马特继续在夜晚行侠仗义，但一个以暴制暴的“惩罚者”出现，打乱了地狱厨房的秩序。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1756",
    "title": "大学生做了没",
    "url": "./movie-1756.html",
    "cover": "./106.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2016",
    "genre": "喜剧 / 爱情",
    "tags": [
      "大学",
      "青春",
      "搞笑",
      "恋爱清单"
    ],
    "oneLine": "毕业前一个月，四个室友比赛完成“大学生必做清单”，谁没做完谁请客。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1757",
    "title": "哥布林杀手第二季",
    "url": "./movie-1757.html",
    "cover": "./107.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "动作/奇幻/黑暗",
    "tags": [
      "哥布林",
      "复仇",
      "硬核",
      "冒险者"
    ],
    "oneLine": "银等级冒险者“哥布林杀手”接到了一个不可能的任务：保护一只哥布林幼崽穿越仇恨他的人类城市。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1758",
    "title": "知心兄弟",
    "url": "./movie-1758.html",
    "cover": "./108.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "剧情",
    "tags": [
      "兄弟情",
      "悬疑",
      "替身",
      "心理"
    ],
    "oneLine": "一对失散多年的孪生兄弟重逢后互换身份，却卷入彼此致命的秘密。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1759",
    "title": "绝色武器",
    "url": "./movie-1759.html",
    "cover": "./109.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2012",
    "genre": "动作， 惊悚",
    "tags": [
      "女杀手",
      "特工",
      "复仇",
      "肉搏",
      "情色"
    ],
    "oneLine": "整容成亡国公主的顶级杀手，用身体当武器，要刺杀那晚唯一活下来的目击者。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1760",
    "title": "特别的她",
    "url": "./movie-1760.html",
    "cover": "./110.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "动画, 奇幻, 青春",
    "tags": [
      "另类",
      "电波系",
      "少女",
      "摇滚",
      "青春期"
    ],
    "oneLine": "班里最不起眼的眼镜妹突然变出巨型电吉他，用音波撕裂了虚伪的校园日常。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1761",
    "title": "当地怪物：租借和杀戮",
    "url": "./movie-1761.html",
    "cover": "./111.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 科幻",
    "tags": [
      "都市传说",
      "黑市交易",
      "生存游戏",
      "血腥"
    ],
    "oneLine": "东京地下黑市出现“怪物租借”服务，被霸凌者花高价租下怪物向仇人复仇，却沦为猎物。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1762",
    "title": "异星战甲之青龙",
    "url": "./movie-1762.html",
    "cover": "./112.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作、科幻、冒险",
    "tags": [
      "机甲",
      "外星殖民",
      "个人英雄主义"
    ],
    "oneLine": "当外星虫族撕毁停战协议，一名被开除军籍的机甲维修师穿上他亲手打造的“青龙”战甲，单挑整支舰队。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1763",
    "title": "崩坏人生",
    "url": "./movie-1763.html",
    "cover": "./113.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情心理",
    "tags": [
      "中年危机",
      "华尔街",
      "幻觉",
      "救赎"
    ],
    "oneLine": "一场车祸后，金牌基金经理开始看见身边所有人都是行走的“数字代码”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1764",
    "title": "永不褪色",
    "url": "./movie-1764.html",
    "cover": "./114.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 爱情",
    "tags": [
      "时间",
      "爱情",
      "超能力",
      "催泪",
      "奇幻"
    ],
    "oneLine": "一对情侣发现接吻时女方能看到男方记忆的颜色，但随着激情消退，颜色终将变淡。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1765",
    "title": "吉星报喜粤语",
    "url": "./movie-1765.html",
    "cover": "./115.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧、古装、家庭",
    "tags": [
      "粤语",
      "市井",
      "热闹",
      "好运",
      "TVB风格"
    ],
    "oneLine": "一个号称“扫把星”的穷小子，意外得到“吉星”高照，从此走到哪旺到哪，但却麻烦不断。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1766",
    "title": "杏林血泪",
    "url": "./movie-1766.html",
    "cover": "./116.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2018",
    "genre": "年代医疗",
    "tags": [
      "民国",
      "医闹",
      "女性成长",
      "复仇"
    ],
    "oneLine": "民国女医生，丈夫被军阀害死，医院被恶霸霸占，她用一把手术刀，开启了长达十年的复仇之路。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1767",
    "title": "哭灵人",
    "url": "./movie-1767.html",
    "cover": "./117.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚 / 剧情",
    "tags": [
      "民俗",
      "祭祀",
      "诅咒",
      "哭声"
    ],
    "oneLine": "她靠替人哭丧维生，直到某天夜里，那些死人真的开始回应她的哭声。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1768",
    "title": "独行杀手",
    "url": "./movie-1768.html",
    "cover": "./118.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "动作 / 犯罪",
    "tags": [
      "杀手",
      "背叛",
      "地铁追逐",
      "极简风格"
    ],
    "oneLine": "法国外籍军团退役狙击手遭组织出卖，他只有24小时，在巴黎地铁迷宫中杀出一条血路。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1769",
    "title": "深潜",
    "url": "./movie-1769.html",
    "cover": "./119.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "genre": "悬疑，犯罪，动作",
    "tags": [
      "卧底",
      "传销",
      "心理",
      "暗网",
      "反转"
    ],
    "oneLine": "为破获暗网中的“人性拍卖”组织，刑警陈默潜入深海潜水员俱乐部，却发现每个成员都曾“死过一次”。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1770",
    "title": "大小黄天霸",
    "url": "./movie-1770.html",
    "cover": "./120.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 武侠 / 喜剧",
    "tags": [
      "戏曲改编",
      "民间传说",
      "父子情",
      "替身"
    ],
    "oneLine": "年迈的黄天霸归隐乡下，却发现自己从未见过的“私生子”正在城市里以“小黄天霸”之名行侠仗义。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1771",
    "title": "影像多面向",
    "url": "./movie-1771.html",
    "cover": "./121.jpg",
    "region": "中国大陆",
    "type": "艺术电影",
    "year": "2014",
    "genre": "艺术,实验,剧情,元叙事",
    "tags": [
      "多重叙事",
      "镜头语言",
      "记忆",
      "身份",
      "影像哲学"
    ],
    "oneLine": "女主人公在同一条巷子里被拍成四十种版本，观众要追问的不仅是谁在说谎，而是谁有权决定谁被真正照见。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1772",
    "title": "金鹿",
    "url": "./movie-1772.html",
    "cover": "./122.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": [
      "东北",
      "神话",
      "寻鹿"
    ],
    "oneLine": "长白山脚下，一个叛逆少女意外救下一只金色神鹿，却发现这只鹿是她失踪十年的父亲变的。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1773",
    "title": "黑道千金逼我嫁",
    "url": "./movie-1773.html",
    "cover": "./123.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "genre": "爱情 / 喜剧 / 都市",
    "tags": [
      "豪门联姻",
      "误会契约",
      "反差人设",
      "黑道家族",
      "强势追爱",
      "甜虐反转"
    ],
    "oneLine": "被迫替人挡婚的普通上班族，竟被黑道千金当场认定为“最佳婚配”，一纸荒唐契约从此让两人的生活彻底失控。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1774",
    "title": "僵尸新人仔",
    "url": "./movie-1774.html",
    "cover": "./124.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧、恐怖",
    "tags": [
      "僵尸",
      "职场",
      "社畜",
      "黑色幽默",
      "港式无厘头"
    ],
    "oneLine": "一个小职员意外变成僵尸，却发现当僵尸比当人轻松：不用加班、不用看老板脸色，他决定带着全公司一起“尸化”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1775",
    "title": "网走番外地",
    "url": "./movie-1775.html",
    "cover": "./125.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪, 动作, 剧情",
    "tags": [
      "北海道",
      "越狱",
      "极道",
      "翻拍"
    ],
    "oneLine": "被押送至北海道网走监狱的传奇黑道头目，发现这里囚禁着一位知晓二战秘密的老人，于是策划了日本战后最惊心动魄的一次越狱。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1776",
    "title": "门徒的眼泪",
    "url": "./movie-1776.html",
    "cover": "./126.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "genre": "剧情、犯罪",
    "tags": [
      "缉毒",
      "师徒",
      "复仇",
      "卧底牺牲"
    ],
    "oneLine": "缉毒警牺牲前嘱托徒弟照顾家人，徒弟却意外发现，师父的死是因为警队高层有人通风报信。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1777",
    "title": "锁不住的惊情",
    "url": "./movie-1777.html",
    "cover": "./127.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作惊悚",
    "tags": [
      "动作",
      "惊悚",
      "越狱",
      "复仇"
    ],
    "oneLine": "顶级女安保专家故意入狱，只为保护一个秘密证人，却发现自己中了圈套。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1778",
    "title": "白蛇大闹天宫",
    "url": "./movie-1778.html",
    "cover": "./128.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻、动作、爱情",
    "tags": [
      "神话改编",
      "女强",
      "颠覆",
      "东方朋克"
    ],
    "oneLine": "白素贞为救被天庭囚禁的许仙，化身为妖界领袖，率领群妖踏碎南天门。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1779",
    "title": "高卢勇士之大战罗马",
    "url": "./movie-1779.html",
    "cover": "./129.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "动画, 喜剧",
    "tags": [
      "魔药",
      "历史恶搞",
      "冒险"
    ],
    "oneLine": "喝下魔药就力大无穷，但这次药剂师把原料“霸王草”用完了，只剩“韭菜”。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1780",
    "title": "死亡证书",
    "url": "./movie-1780.html",
    "cover": "./130.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑、犯罪、医疗",
    "tags": [
      "法医",
      "医疗事故",
      "阴谋",
      "反转",
      "正义"
    ],
    "oneLine": "一个菜鸟法医发现，自己经手的每一份看似正常的死亡证书，背后都指向同一个器官移植中心。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1781",
    "title": "乌衣夜行",
    "url": "./movie-1781.html",
    "cover": "./131.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "古装、动作、悬疑",
    "tags": [
      "武侠",
      "黑夜",
      "刺客",
      "兄弟情",
      "复仇"
    ],
    "oneLine": "一件被诅咒的乌衣让两代刺客在雨夜展开宿命对决，而他们发现彼此竟是失散多年的亲兄弟。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1782",
    "title": "西鹤一代女",
    "url": "./movie-1782.html",
    "cover": "./132.jpg",
    "region": "日本",
    "type": "电影",
    "year": "1952",
    "genre": "剧情 / 历史",
    "tags": [
      "艺伎",
      "封建",
      "女性悲剧",
      "沟口健二风格",
      "轮回"
    ],
    "oneLine": "江户时代，一个贵族侍女因私通被流放，此后50年沦为妓女、妾室、乞丐，历尽女性所有苦难。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1783",
    "title": "第11号站",
    "url": "./movie-1783.html",
    "cover": "./133.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻 / 悬疑",
    "tags": [
      "末日",
      "循环",
      "空间站",
      "人性"
    ],
    "oneLine": "深空空间站“第11号站”失联十年后突然传回信号，里面的宇航员竟全部不记得自己是谁。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1784",
    "title": "老爸的朝圣之旅",
    "url": "./movie-1784.html",
    "cover": "./134.jpg",
    "region": "法国 / 摩洛哥",
    "type": "电影",
    "year": "2004",
    "genre": "剧情 / 公路",
    "tags": [
      "父子",
      "伊斯兰教",
      "朝觐",
      "和解",
      "死亡"
    ],
    "oneLine": "固执的老穆斯林确诊癌症，逼着在法国长大的叛逆儿子开车送他去麦加，一路争吵与和解。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1785",
    "title": "嫁我吧，哥们",
    "url": "./movie-1785.html",
    "cover": "./135.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧、爱情、剧情",
    "tags": [
      "假结婚",
      "兄弟情",
      "乌龙",
      "逼婚",
      "彩虹友好"
    ],
    "oneLine": "钢铁直男为继承家业，竟被逼无奈向自己最好的同性兄弟求婚，不料对方却当场答应。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1786",
    "title": "爱情专家",
    "url": "./movie-1786.html",
    "cover": "./136.jpg",
    "region": "香港地区(中国)",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 喜剧",
    "tags": [
      "毒舌",
      "情感咨询",
      "假戏真做"
    ],
    "oneLine": "全港最毒舌爱情专家自己遭遇婚姻危机，为了挽回颜面，他雇了一位菜场大妈假扮新欢，结果假戏成了真爱。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1787",
    "title": "黑寡妇",
    "url": "./movie-1787.html",
    "cover": "./137.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "动作 / 科幻 / 谍战",
    "tags": [
      "超级英雄",
      "家族",
      "红房子",
      "师姐师妹",
      "告别"
    ],
    "oneLine": "复仇者联盟的“黑寡妇”娜塔莎，在爆炸中被迫直面自己作为特工的黑暗过去和间谍“家人”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1788",
    "title": "第三将来时",
    "url": "./movie-1788.html",
    "cover": "./138.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2020",
    "genre": "剧情, 科幻",
    "tags": [
      "时间旅行",
      "东德",
      "代际",
      "选择"
    ],
    "oneLine": "2048年的历史专业学生穿越回1989年的东柏林，只想亲眼见证历史，却意外成了改变历史的人。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1789",
    "title": "家政夫三田园3",
    "url": "./movie-1789.html",
    "cover": "./139.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2020",
    "genre": "悬疑 / 喜剧 / 家庭",
    "tags": [
      "家政夫",
      "伪装",
      "揭露秘密",
      "单元剧",
      "女装大佬"
    ],
    "oneLine": "史上最强家政夫再次潜入豪门，这次他带的工具箱里多了一把电锯。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1790",
    "title": "放开我的手",
    "url": "./movie-1790.html",
    "cover": "./140.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情，医疗，情感",
    "tags": [
      "渐冻症",
      "护工",
      "尊严死亡",
      "治愈"
    ],
    "oneLine": "一位毒舌的渐冻症富豪，雇了一个绝望的失业护士，两人计划用三个月完成“体面告别清单”。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1791",
    "title": "桃源争春",
    "url": "./movie-1791.html",
    "cover": "./141.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 古装 / 悬疑",
    "tags": [
      "唐朝",
      "宫廷争斗",
      "种桃",
      "反常设定"
    ],
    "oneLine": "武周时期，洛阳城里的桃花突然不分时节乱开，女帝震怒，一纸调令将擅长种桃的罪臣之女召回京城。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1792",
    "title": "日光王朝",
    "url": "./movie-1792.html",
    "cover": "./142.jpg",
    "region": "中国",
    "type": "科幻悬疑剧",
    "year": "2027",
    "genre": "科幻,惊悚,动作",
    "tags": [
      "反乌托邦",
      "城市控制",
      "算法监控",
      "女性调查"
    ],
    "oneLine": "当“太阳城”被宣传为未来样本城时，夜色降临后它更像一座围栏：每盏灯都在记录人心，周岚发现自己身边的人早已被分配好了命运与罪名。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1793",
    "title": "性爱大师第三季",
    "url": "./movie-1793.html",
    "cover": "./143.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2015",
    "genre": "剧情 / 传记 / 爱情",
    "tags": [
      "性心理学",
      "婚姻",
      "医疗",
      "时代剧",
      "人际关系"
    ],
    "oneLine": "当性学研究进入更高层级的公众视野，原本躲在实验室里的真相，反而开始撕裂研究者自己的婚姻与职业边界。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1794",
    "title": "龙的心粤语",
    "url": "./movie-1794.html",
    "cover": "./144.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作，剧情",
    "tags": [
      "兄弟情",
      "智力障碍",
      "警匪",
      "港产片"
    ],
    "oneLine": "弟弟是弱智青年，哥哥为照顾他被迫卷入黑帮黄金劫案。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1795",
    "title": "家族的形式",
    "url": "./movie-1795.html",
    "cover": "./145.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "genre": "家庭 / 喜剧 / 剧情",
    "tags": [
      "催婚",
      "独身主义",
      "代际冲突",
      "治愈"
    ],
    "oneLine": "坚持不婚的39岁男人，不得不与突然搬来的父亲和“假儿子”同居。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1796",
    "title": "大宇宙",
    "url": "./movie-1796.html",
    "cover": "./146.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "科幻 / 喜剧 / 哲学",
    "tags": [
      "多重宇宙",
      "废柴英雄",
      "存在主义",
      "荒诞"
    ],
    "oneLine": "一个懒散的天体物理学博士后证明多重宇宙存在，代价是所有平行宇宙里最废柴的那个自己开始疯狂入侵本体。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1797",
    "title": "失山心灵",
    "url": "./movie-1797.html",
    "cover": "./147.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 心理",
    "tags": [
      "山难",
      "失忆",
      "心理创伤",
      "宗教",
      "反转"
    ],
    "oneLine": "独自登山失踪七天后归来的女子，发现自己可能不是原来的自己。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1798",
    "title": "123，太阳",
    "url": "./movie-1798.html",
    "cover": "./148.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "儿童 / 奇幻 / 家庭",
    "tags": [
      "童年想象",
      "告别",
      "童话现实"
    ],
    "oneLine": "八岁女孩得了怪病，只要数到三太阳就会消失一秒，她以为这是自己超能力。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1799",
    "title": "室内足球少年!!!!!",
    "url": "./movie-1799.html",
    "cover": "./149.jpg",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "genre": "动画 / 运动 / 热血",
    "tags": [
      "五人制足球",
      "少年",
      "逆袭",
      "社团"
    ],
    "oneLine": "一所濒临废校的男校，七名被主流足球部淘汰的“废物”决定组建室内足球队，目标是全国大赛。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1800",
    "title": "单身男子",
    "url": "./movie-1800.html",
    "cover": "./150.jpg",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2009",
    "genre": "剧情 / 同性",
    "tags": [
      "丧偶之痛",
      "1960年代",
      "存在主义",
      "美学极致"
    ],
    "oneLine": "1962年洛杉矶，大学教授乔治在伴侣猝死后，计划用一整天与旧世界告别，然后结束生命。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1801",
    "title": "我的如意狼君粤语",
    "url": "./movie-1801.html",
    "cover": "./1.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情, 悬疑, 年代",
    "tags": [
      "复仇",
      "伪装",
      "豪门恩怨"
    ],
    "oneLine": "民国年间，一个神秘男子带着完美面具进入豪门，他接近千金大小姐的真实目的，是为了揭露二十年前的一桩灭门冤案。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1802",
    "title": "圣餐娃娃的诅咒",
    "url": "./movie-1802.html",
    "cover": "./2.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "宗教恐怖",
      "民俗",
      "娃娃",
      "圣女传说"
    ],
    "oneLine": "一个小镇接连有女孩在进行初领圣礼前失踪，唯一的共同点是她们都曾向一尊娃娃祈祷。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1803",
    "title": "奔跑吧，自行车",
    "url": "./movie-1803.html",
    "cover": "./3.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "青春 / 运动",
    "tags": [
      "骑行",
      "高考",
      "父子",
      "逆袭"
    ],
    "oneLine": "高考失利的少年加入城市快递骑行队，在送货比赛中找回自信，顺便赢下了环城自行车赛的业余组冠军。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1804",
    "title": "恐怖幽灵",
    "url": "./movie-1804.html",
    "cover": "./4.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖，惊悚",
    "tags": [
      "鬼屋",
      "直播",
      "复仇",
      "因果"
    ],
    "oneLine": "当红灵异主播闯入废弃的怨宅“鬼妻”屋直播，却发现自己竟是这栋房子的“亲生骨肉”。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1805",
    "title": "白银帝国",
    "url": "./movie-1805.html",
    "cover": "./5.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2009",
    "genre": "历史剧情",
    "tags": [
      "家族兴衰",
      "商战权谋",
      "银号金融",
      "时代变迁",
      "宗族伦理"
    ],
    "oneLine": "一座银号家族在王朝崩裂前夜押上全部信誉，试图在风雨飘摇的金融风暴里保住门楣与人心。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1806",
    "title": "荷兰七课",
    "url": "./movie-1806.html",
    "cover": "./6.jpg",
    "region": "荷兰",
    "type": "剧集",
    "year": "2020",
    "genre": "喜剧, 爱情",
    "tags": [
      "异国文化",
      "成长",
      "幽默",
      "短片集"
    ],
    "oneLine": "七位性格迥异的房客在阿姆斯特丹的合租屋里，用七堂课学会爱与疯狂。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1807",
    "title": "最后一公里",
    "url": "./movie-1807.html",
    "cover": "./7.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2018",
    "genre": "剧情, 乡村, 励志",
    "tags": [
      "扶贫",
      "公路",
      "村官",
      "修路"
    ],
    "oneLine": "年轻村官为了帮深山村庄修通最后一公里公路，与保守村民、恶劣自然和内部腐败展开斗争。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1808",
    "title": "警察故事3:超级警察",
    "url": "./movie-1808.html",
    "cover": "./8.jpg",
    "region": "香港",
    "type": "电影",
    "year": "1992",
    "genre": "动作, 喜剧, 犯罪",
    "tags": [
      "成龙",
      "陈家驹",
      "火爆动作",
      "经典续集"
    ],
    "oneLine": "陈家驹与大陆女警杨建华联手，卧底国际毒枭，从香港打到吉隆坡，上演最不要命的火车直升机追逐。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1809",
    "title": "春天情书",
    "url": "./movie-1809.html",
    "cover": "./9.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "爱情 / 剧情",
    "tags": [
      "书信",
      "纯爱",
      "错过",
      "治愈"
    ],
    "oneLine": "在AI取代一切的年代，两个失意者用最古老的手写信互相拯救。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1810",
    "title": "女神异闻录5",
    "url": "./movie-1810.html",
    "cover": "./10.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "动画, 奇幻",
    "tags": [
      "游戏改编",
      "怪盗",
      "高中生",
      "人格面具",
      "反抗"
    ],
    "oneLine": "一群拥有“人格面具”能力的高中生怪盗，潜入腐败大人物扭曲的内心世界，偷走他们的欲望。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1811",
    "title": "情海旋风",
    "url": "./movie-1811.html",
    "cover": "./11.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1975",
    "genre": "爱情 / 动作",
    "tags": [
      "邵氏",
      "三角恋",
      "黑帮",
      "悲剧美学"
    ],
    "oneLine": "舞女周旋于警察与黑帮大哥之间，三人在台风夜的码头用枪火与鲜血结束爱恨。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1812",
    "title": "都市时装速记",
    "url": "./movie-1812.html",
    "cover": "./12.jpg",
    "region": "法国",
    "type": "电影",
    "year": "1985",
    "genre": "剧情 / 喜剧",
    "tags": [
      "吕克·贝松",
      "艺术电影",
      "时尚",
      "女权",
      "荒诞"
    ],
    "oneLine": "一个巴黎时装设计师在创作发布会新系列时，被一只突然闯入的野猫彻底打乱了生活。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1813",
    "title": "洛克王国4：出发！巨人谷",
    "url": "./movie-1813.html",
    "cover": "./13.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "动画，奇幻，冒险",
    "tags": [
      "魔法",
      "巨人",
      "勇气",
      "友情",
      "成长"
    ],
    "oneLine": "洛克和迪莫误入巨人谷，发现传说中的巨人并非破坏者，而是守护着改变王国命运的种子。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1814",
    "title": "狂暴黑鲨",
    "url": "./movie-1814.html",
    "cover": "./14.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "动作、惊悚、灾难",
    "tags": [
      "鲨鱼",
      "变异",
      "深海",
      "复仇",
      "环保"
    ],
    "oneLine": "环保组织释放被捕捞的鲨鱼，却意外放出了一条因核废料变异、智商超高的狂暴巨鲨。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1815",
    "title": "公主与哥布林",
    "url": "./movie-1815.html",
    "cover": "./15.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "genre": "奇幻 / 动画 / 冒险",
    "tags": [
      "经典童话改编",
      "地下王国",
      "勇气成长",
      "非典型公主"
    ],
    "oneLine": "一位怕黑的公主和一名矿工少年，必须穿过哥布林的地下王国，夺回被偷走的太阳。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1816",
    "title": "变化的季节",
    "url": "./movie-1816.html",
    "cover": "./16.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情，生活",
    "tags": [
      "四季",
      "家庭",
      "时间"
    ],
    "oneLine": "苏格兰一座庄园里，四姐妹在春夏秋冬各回一次老宅，每次团聚都揭开一个家族秘密。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1817",
    "title": "一天",
    "url": "./movie-1817.html",
    "cover": "./17.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑 / 科幻 / 爱情",
    "tags": [
      "时间循环",
      "记忆编辑",
      "医疗",
      "催泪"
    ],
    "oneLine": "一个男人每天醒来都是同一天，但他发现只要自己在当天死去，就能改变这一天所有人的记忆。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1818",
    "title": "三十处男粤语",
    "url": "./movie-1818.html",
    "cover": "./18.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧",
    "tags": [
      "爱情",
      "处男",
      "都市",
      "港式幽默"
    ],
    "oneLine": "三十岁还是处男的IT男被骗婚，却发现骗他的女人比他更可怜。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1819",
    "title": "生死之墙",
    "url": "./movie-1819.html",
    "cover": "./19.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "战争 / 惊悚",
    "tags": [
      "狙击",
      "对峙",
      "伊拉克战争",
      "心理战"
    ],
    "oneLine": "美军观察员被困在伊拉克荒原的矮墙后，面对一个从不露面的伊拉克幽灵狙击手。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1820",
    "title": "爬行动物",
    "url": "./movie-1820.html",
    "cover": "./20.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚 / 科幻",
    "tags": [
      "基因改造",
      "冷血",
      "反乌托邦"
    ],
    "oneLine": "为了治愈绝症，他将自己的DNA与蜥蜴融合，却发现自己越来越享受生吞活物的快感。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1821",
    "title": "神童",
    "url": "./movie-1821.html",
    "cover": "./21.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 悬疑",
    "tags": [
      "天才",
      "教育焦虑",
      "家庭伦理",
      "反转",
      "社会批判"
    ],
    "oneLine": "一个能预知未来的八岁数学天才，却始终无法回答一个最简单的问题：你爱妈妈吗？",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1822",
    "title": "主夫公寓",
    "url": "./movie-1822.html",
    "cover": "./22.jpg",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧家庭",
    "tags": [
      "性别反转",
      "男性育儿",
      "公寓邻里"
    ],
    "oneLine": "一栋公寓里住着五个全职主夫，他们的日常比职场宫斗还精彩。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1823",
    "title": "超级玛利欧银河电影版",
    "url": "./movie-1823.html",
    "cover": "./23.jpg",
    "region": "美国/日本",
    "type": "电影",
    "year": "2026",
    "genre": "动画， 冒险， 奇幻",
    "tags": [
      "游戏改编",
      "太空歌剧",
      "兄弟情",
      "合家欢"
    ],
    "oneLine": "为了拯救被库巴囚禁的碧琪公主，水管工兄弟必须在浩瀚银河中收集星球碎片。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1824",
    "title": "紧急呼救：孤星第三季",
    "url": "./movie-1824.html",
    "cover": "./24.jpg",
    "region": "美国",
    "type": "电视剧",
    "year": "2026",
    "genre": "剧情 / 动作 / 灾难",
    "tags": [
      "救援",
      "消防员",
      "德州",
      "单元剧",
      "情感"
    ],
    "oneLine": "奥斯汀126小队在暴风雪、化工厂爆炸和大坝溃堤中，继续他们的“孤星”救援。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1825",
    "title": "爱情的代驾",
    "url": "./movie-1825.html",
    "cover": "./25.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 喜剧",
    "tags": [
      "代驾",
      "错位",
      "身份互换",
      "都市"
    ],
    "oneLine": "失恋的代驾女司机，某天接到一单：送一个喝醉的亿万富豪回家，结果对方醒来失忆了。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1826",
    "title": "长颈鹿返学啦！",
    "url": "./movie-1826.html",
    "cover": "./26.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1991",
    "genre": "家庭, 喜剧",
    "tags": [
      "长颈鹿",
      "校园",
      "港式无厘头"
    ],
    "oneLine": "动物园的长颈鹿逃进小学，竟被发现它是数学天才，被安排和学生一起上课引发骚乱。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1827",
    "title": "传奇王子",
    "url": "./movie-1827.html",
    "cover": "./27.jpg",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧, 爱情, 校园",
    "tags": [
      "沙雕",
      "中二",
      "逆袭",
      "偶像剧"
    ],
    "oneLine": "一个相信自己是王子转世的废柴大学生，用一本正经的中二病，意外拯救了濒临倒闭的贵族女校。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1828",
    "title": "如同第一杯",
    "url": "./movie-1828.html",
    "cover": "./28.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "爱情，奇幻，剧情",
    "tags": [
      "咖啡",
      "时空循环",
      "失忆",
      "治愈"
    ],
    "oneLine": "一个只能在咖啡店里维持记忆的女孩，每天都在等待一个愿意陪她喝下“第一杯”的男孩。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1829",
    "title": "魔域女巫",
    "url": "./movie-1829.html",
    "cover": "./29.jpg",
    "region": "英国",
    "type": "电影",
    "year": "1972",
    "genre": "恐怖, 神秘",
    "tags": [
      "女巫",
      "邪教",
      "乡村恐怖",
      "复古"
    ],
    "oneLine": "一名民俗学研究生来到偏僻村庄研究古老巫术，却发现村民都在等待“今年的献祭”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1830",
    "title": "阿基尔，上帝的愤怒",
    "url": "./movie-1830.html",
    "cover": "./30.jpg",
    "region": "德国",
    "type": "电影",
    "year": "1972",
    "genre": "剧情, 历史, 冒险",
    "tags": [
      "殖民",
      "疯狂",
      "丛林",
      "史诗"
    ],
    "oneLine": "十六世纪西班牙探险队深入亚马逊丛林，领队阿基尔为权力和黄金陷入偏执疯狂。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1831",
    "title": "十万伙急",
    "url": "./movie-1831.html",
    "cover": "./31.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "黑吃黑",
      "蠢贼",
      "多线叙事"
    ],
    "oneLine": "十万块黑钱被三个蠢贼、一个妓女和一个退休警察同时盯上，引发一夜疯狂连环追杀。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1832",
    "title": "篝火之战",
    "url": "./movie-1832.html",
    "cover": "./32.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "惊悚 / 恐怖",
    "tags": [
      "民俗恐怖",
      "邪教",
      "反转结局"
    ],
    "oneLine": "小镇一年一度的篝火节上，被选为“燃烧者”的少女发现，火焰不仅能净化灵魂，还能撕裂现实。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1833",
    "title": "我的名字是莱尼",
    "url": "./movie-1833.html",
    "cover": "./33.jpg",
    "region": "德国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 战争",
    "tags": [
      "身份认同",
      "纳粹余波",
      "公路片"
    ],
    "oneLine": "一个德国少年发现自己护照上的名字属于一个早已死在奥斯维辛的犹太男孩，他决定找回真正的自己。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1834",
    "title": "喂！𡃁妹！",
    "url": "./movie-1834.html",
    "cover": "./34.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 青春 / 家庭",
    "tags": [
      "少女",
      "街头",
      "亲情",
      "成长"
    ],
    "oneLine": "深水埗的街头“𡃁妹”意外捡到一个女婴，从此被迫从古惑仔“转型”当奶爸。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1835",
    "title": "德古拉元年",
    "url": "./movie-1835.html",
    "cover": "./35.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 奇幻, 恐怖",
    "tags": [
      "起源故事",
      "吸血鬼",
      "史诗战争"
    ],
    "oneLine": "在成为吸血鬼之前，弗拉德三世是一个誓死捍卫祖国的王子，而他的敌人是奥斯曼帝国的十万大军和一份与魔鬼的契约。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1836",
    "title": "千里烽火缘",
    "url": "./movie-1836.html",
    "cover": "./36.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "古装 / 战争 / 爱情",
    "tags": [
      "烽火戏诸侯",
      "架空",
      "权谋",
      "虐恋"
    ],
    "oneLine": "如果烽火戏诸侯是假的，褒姒其实是周幽王从敌国救回的女将军，那么灭国的真正原因是什么？",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1837",
    "title": "搞笑艺家人",
    "url": "./movie-1837.html",
    "cover": "./37.jpg",
    "region": "韩国",
    "type": "综艺",
    "year": "2022",
    "genre": "真人秀 / 喜剧",
    "tags": [
      "家族",
      "即兴喜剧",
      "下乡",
      "治愈"
    ],
    "oneLine": "五位过气搞笑艺人举家搬进深山，被迫用即兴喜剧的功力应对严酷的乡村生活。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1838",
    "title": "最后一眼",
    "url": "./movie-1838.html",
    "cover": "./38.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "genre": "悬疑/惊悚",
    "tags": [
      "目击",
      "失踪案",
      "记忆碎片",
      "监控盲区",
      "医院走廊",
      "真相",
      "反转"
    ],
    "oneLine": "一个濒死证人只来得及留下“最后一眼”，调查员却发现那一眼里藏着整起失踪案的真正开关。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1839",
    "title": "赌途分叉点",
    "url": "./movie-1839.html",
    "cover": "./39.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 犯罪 / 科幻",
    "tags": [
      "平行时空",
      "蝴蝶效应",
      "赌片新解",
      "烧脑"
    ],
    "oneLine": "落魄赌徒在澳门赌场收到一条来自未来的信息：只要他每局故意输掉，就能拯救未来妻女的命。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1840",
    "title": "人类清除计划第一季",
    "url": "./movie-1840.html",
    "cover": "./40.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻 / 惊悚 / 犯罪",
    "tags": [
      "反乌托邦",
      "社会实验",
      "暴力美学",
      "人性拷问",
      "大逃杀"
    ],
    "oneLine": "每年3月21日晚7点到次日早7点，所有犯罪行为全部合法，这一夜你会选择清除谁？",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1841",
    "title": "火葬大海",
    "url": "./movie-1841.html",
    "cover": "./41.jpg",
    "region": "冰岛 / 丹麦",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑",
    "tags": [
      "北欧 noir",
      "宗教祭祀",
      "邪教迷雾",
      "女性复仇"
    ],
    "oneLine": "一个偏远的冰岛渔村，每年冬至都会将一具尸体绑在船上火化后推向大海，今年被火化的“尸体”突然坐了起来。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1842",
    "title": "一夜惊险",
    "url": "./movie-1842.html",
    "cover": "./42.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑, 犯罪",
    "tags": [
      "密室",
      "反转",
      "出租车",
      "限时营救",
      "小成本"
    ],
    "oneLine": "一名夜班司机搭载了一位女乘客后，发现她的手机定位显示她正处于被绑架状态——而司机本人就是绑匪。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1843",
    "title": "虎贲将军",
    "url": "./movie-1843.html",
    "cover": "./43.jpg",
    "region": "中国内地",
    "type": "电视剧",
    "year": "2024",
    "genre": "历史 / 战争",
    "tags": [
      "战国",
      "精锐部队",
      "权谋"
    ],
    "oneLine": "虎贲军最后一任将军，在秦国灭赵前夜收到一道不可能执行的王令。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1844",
    "title": "非常家务事",
    "url": "./movie-1844.html",
    "cover": "./44.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 家庭 / 犯罪",
    "tags": [
      "黑色喜剧",
      "藏尸",
      "家庭伦理",
      "邻里关系"
    ],
    "oneLine": "家庭主妇失手杀了家暴丈夫，全家人为了掩盖罪行，假装什么都没发生，继续过日子。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1845",
    "title": "真味小厨王",
    "url": "./movie-1845.html",
    "cover": "./45.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 美食",
    "tags": [
      "烹饪",
      "天才",
      "童年",
      "复仇",
      "味觉"
    ],
    "oneLine": "十岁盲童靠绝对味觉击败米其林大厨，却发现对方是生父。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1846",
    "title": "明天过后",
    "url": "./movie-1846.html",
    "cover": "./46.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 家庭 / 灾难",
    "tags": [
      "地震",
      "废墟",
      "求生",
      "母女"
    ],
    "oneLine": "大地震将她埋在冰箱与楼板夹缝中，三天里，手机仅剩的电量是她与门外女儿唯一的连接。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1847",
    "title": "童邪",
    "url": "./movie-1847.html",
    "cover": "./47.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖/民俗",
    "tags": [
      "儿童邪典",
      "傩戏",
      "禁忌游戏"
    ],
    "oneLine": "一群小学生暑假在废弃戏台玩“扮神仙”游戏，不料游戏中的鬼怪开始成真，且只针对“不听话的小孩”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1848",
    "title": "曼谷杀手",
    "url": "./movie-1848.html",
    "cover": "./48.jpg",
    "region": "泰国",
    "type": "电影",
    "year": "2026",
    "genre": "动作、惊悚、犯罪",
    "tags": [
      "杀手",
      "复仇",
      "曼谷",
      "泰拳",
      "黑帮"
    ],
    "oneLine": "一个失忆的聋哑杀手在曼谷街头醒来，他唯一的线索，是口袋里一张小女孩的照片。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1849",
    "title": "飞不起来的童年",
    "url": "./movie-1849.html",
    "cover": "./49.jpg",
    "region": "古巴",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "教育",
      "贫穷",
      "梦想",
      "写实"
    ],
    "oneLine": "古巴小镇少年想成为飞行员，但他唯一的老师是患有躁郁症的退役老飞行员爷爷，而爷爷只想教他开拖拉机。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1850",
    "title": "少年特工科迪2",
    "url": "./movie-1850.html",
    "cover": "./50.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2004",
    "genre": "动作，喜剧，冒险",
    "tags": [
      "特工",
      "青少年",
      "间谍"
    ],
    "oneLine": "少年特工科迪度假时发现，他的偶像竟是要绑架科学家的幕后黑手。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1851",
    "title": "激情伴侣",
    "url": "./movie-1851.html",
    "cover": "./51.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "爱情 / 剧情 / 都市",
    "tags": [
      "成年关系",
      "双向试探",
      "同居误会",
      "情感拉扯",
      "职场压力",
      "选择与放手"
    ],
    "oneLine": "两个把感情当成临时避风港的成年人，在一次错误的同居之后被迫面对自己真正害怕的不是爱，而是失去自由。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1852",
    "title": "大林宣彦：电影藏宝盒",
    "url": "./movie-1852.html",
    "cover": "./52.jpg",
    "region": "日本",
    "type": "纪录片",
    "year": "2026",
    "genre": "纪录片 / 传记",
    "tags": [
      "大林宣彦",
      "幕后",
      "尾道",
      "迷影",
      "遗产"
    ],
    "oneLine": "已故导演大林宣彦在人生最后的三年里，打开了他的私人胶片库，为影迷讲述电影的“咒语”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1853",
    "title": "草之乱",
    "url": "./movie-1853.html",
    "cover": "./53.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪, 惊悚, 剧情",
    "tags": [
      "环保犯罪",
      "黑吃黑",
      "复仇",
      "泥泞美学"
    ],
    "oneLine": "在一个被化学废料污染的村庄，杂草疯狂生长，而疯长的不仅是植物，还有人心中的恶念。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1854",
    "title": "意外的幸运签",
    "url": "./movie-1854.html",
    "cover": "./54.jpg",
    "region": "中国大陆",
    "type": "奇幻悬疑电影",
    "year": "2021",
    "genre": "悬疑、奇幻、都市伦理",
    "tags": [
      "幸运签",
      "连锁巧合",
      "真相",
      "代价",
      "社会责任"
    ],
    "oneLine": "签纸本身没有神迹，偏偏在错乱的城市里，它让每个人都开始相信“明天的惊喜可被选择”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1855",
    "title": "那山那人那狗",
    "url": "./movie-1855.html",
    "cover": "./55.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 家庭 / 温情",
    "tags": [
      "父子",
      "乡村邮递员",
      "传承",
      "山路",
      "狗"
    ],
    "oneLine": "退休邮递员父亲最后一次陪儿子走邮路，两人在山中遇见一位自称“40年前的自己”的神秘背包客。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1856",
    "title": "用我的生命去爱你",
    "url": "./movie-1856.html",
    "cover": "./56.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "爱情，灾难，剧情",
    "tags": [
      "绝症",
      "地震",
      "牺牲",
      "催泪"
    ],
    "oneLine": "一对刚领证的夫妻遭遇大地震，身患绝症的妻子被压在废墟下，丈夫为救她不惜用身体顶住坍塌的横梁。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1857",
    "title": "假定杀手",
    "url": "./movie-1857.html",
    "cover": "./57.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "genre": "悬疑 / 犯罪 / 黑色幽默",
    "tags": [
      "合约杀手的合约杀手",
      "嵌套",
      "喜剧"
    ],
    "oneLine": "一个菜鸟杀手接到任务：杀掉另一个杀手。但当他找到目标时，对方说：“巧了，我的任务就是你。”",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1858",
    "title": "有目标了",
    "url": "./movie-1858.html",
    "cover": "./58.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "黑色幽默",
      "底层",
      "荒诞",
      "逆袭"
    ],
    "oneLine": "三个废柴误将一袋“洗钱道具”当作绝症救命药，从此踏上亡命暴富路。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1859",
    "title": "坐着的女人",
    "url": "./movie-1859.html",
    "cover": "./59.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑 / 文艺",
    "tags": [
      "美术馆",
      "雕塑",
      "沉默",
      "精神分析"
    ],
    "oneLine": "美术馆里一座普通的“坐着的女人”雕塑前，每天都有一个女人来静坐，风雨无阻，长达十年。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1860",
    "title": "无耻之徒第六季",
    "url": "./movie-1860.html",
    "cover": "./60.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情喜剧",
    "tags": [
      "底层生活",
      "大尺度",
      "家庭"
    ],
    "oneLine": "加拉格一家尝试“合法”赚钱，却发现自己唯一擅长的还是违法。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1861",
    "title": "丑闻笔记",
    "url": "./movie-1861.html",
    "cover": "./61.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "日记",
      "心理操控",
      "师生恋",
      "反转"
    ],
    "oneLine": "女教师与学生的不伦恋情被发现，帮助她的老教师却暗中用一本日记将她一步步推向深渊。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1862",
    "title": "血色土地第二季",
    "url": "./movie-1862.html",
    "cover": "./62.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "犯罪，悬疑，剧情",
    "tags": [
      "家族恩怨",
      "警匪对峙",
      "小镇谜团"
    ],
    "oneLine": "警长玛莎刚平息第一季的血腥屠杀，却发现凶手留下的“遗产”正让整座小镇从内部开始腐烂。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1863",
    "title": "美女与猎犬",
    "url": "./movie-1863.html",
    "cover": "./63.jpg",
    "region": "突尼斯 / 法国",
    "type": "电影",
    "year": "2017",
    "genre": "剧情 / 惊悚",
    "tags": [
      "性侵",
      "司法",
      "阿拉伯之春",
      "女性",
      "长镜头"
    ],
    "oneLine": "一个被警察强奸的突尼斯女孩，为了讨回公道，必须在一天之内跑遍警察局、医院、法院，而每一个地方都在猎捕她。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1864",
    "title": "茶啊二中第二季",
    "url": "./movie-1864.html",
    "cover": "./64.jpg",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2023",
    "genre": "喜剧, 校园, 日常",
    "tags": [
      "东北幽默",
      "师生日常",
      "青春回忆"
    ],
    "oneLine": "奇葩班主任王老师突然被调走，全班使出浑身解数想把她“哭回来”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1865",
    "title": "绝地苍狼国语",
    "url": "./movie-1865.html",
    "cover": "./65.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作冒险",
    "tags": [
      "丛林",
      "雇佣兵",
      "守护",
      "动物灵性"
    ],
    "oneLine": "退役特种兵在边境原始森林遭遇偷猎集团，一头孤狼成了他最意想不到的战友。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1866",
    "title": "斗罗大陆2绝世唐门第四季",
    "url": "./movie-1866.html",
    "cover": "./66.jpg",
    "region": "中国大陆",
    "type": "动漫",
    "year": "2024",
    "genre": "奇幻 / 战斗",
    "tags": [
      "热血",
      "武魂",
      "史莱克",
      "极限单兵"
    ],
    "oneLine": "霍雨浩接受“极限单兵计划”，在深渊斗罗的折磨下，觉醒第三武魂。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1867",
    "title": "殉道者",
    "url": "./movie-1867.html",
    "cover": "./67.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2022",
    "genre": "历史惊悚",
    "tags": [
      "宗教阴谋",
      "复仇追查",
      "禁忌信仰",
      "黑暗真相"
    ],
    "oneLine": "当一座修道院连续出现“自愿献身”的死者，调查记者发现他们并非殉道，而是在替一场更大的权力交易封口。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1868",
    "title": "闯关东",
    "url": "./movie-1868.html",
    "cover": "./68.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2008",
    "genre": "剧情 / 历史 / 家族",
    "tags": [
      "史诗",
      "迁徙",
      "民族精神"
    ],
    "oneLine": "清末到九一八，山东朱家一家人在关东大地上开矿、经商、抗日，活出了草莽英雄的气概。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1869",
    "title": "决斗恶虎岭",
    "url": "./movie-1869.html",
    "cover": "./69.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作、武侠、西部",
    "tags": [
      "荒漠",
      "刀客",
      "复仇",
      "江湖老矣",
      "黑色幽默"
    ],
    "oneLine": "过气刀客为还赌债接下最后一单：去恶虎岭杀一个无名小卒，却发现整个岭上全是等他来杀的“无名小卒”。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1870",
    "title": "十年不晚",
    "url": "./movie-1870.html",
    "cover": "./70.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪 / 复仇",
    "tags": [
      "监狱复仇",
      "冤案",
      "以暴制暴"
    ],
    "oneLine": "被诬陷入狱十年的前刑警，出狱后用一套完美计划，让真凶们互相残杀。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1871",
    "title": "贴身风暴",
    "url": "./movie-1871.html",
    "cover": "./71.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "动作， 犯罪， 悬疑",
    "tags": [
      "贴身保镖",
      "女保镖",
      "警匪",
      "近身肉搏",
      "阴谋"
    ],
    "oneLine": "顶级女保镖受雇保护一位掌握黑料的女记者，却发现雇主才是幕后黑手，而她要暗杀的目标竟是自己失散多年的妹妹。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1872",
    "title": "傻人吉星",
    "url": "./movie-1872.html",
    "cover": "./72.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1990",
    "genre": "喜剧, 动作, 犯罪",
    "tags": [
      "香港喜剧",
      "傻人有傻福",
      "乌龙",
      "江湖",
      "成龙式"
    ],
    "oneLine": "一个智力只有五岁的善良大力士，阴差阳错捡到一袋赃款，却成了黑白两道争相追捧的“福星”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1873",
    "title": "彼得·贝尔历险记",
    "url": "./movie-1873.html",
    "cover": "./73.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻 / 冒险",
    "tags": [
      "寻宝",
      "家族诅咒",
      "魔法生物",
      "成长"
    ],
    "oneLine": "平凡的图书管理员发现自己是童话守护者，必须在七天内集齐三把钥匙，否则故事将永远消失。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1874",
    "title": "勾魂针夺命拳",
    "url": "./movie-1874.html",
    "cover": "./74.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1979",
    "genre": "动作 / 武侠 / 惊悚",
    "tags": [
      "邵氏",
      "针灸杀人",
      "奇门武功",
      "复仇",
      "邪典"
    ],
    "oneLine": "为报灭门之仇，哑巴绣花匠修得“九针勾魂术”，以绣花针刺穴，让仇人在笑、哭、性兴奋中暴毙。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1875",
    "title": "一剑镇神州粤语",
    "url": "./movie-1875.html",
    "cover": "./75.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "1978",
    "genre": "武侠, 古装",
    "tags": [
      "经典",
      "复仇",
      "粤语长片"
    ],
    "oneLine": "遗孤携祖传断剑重出江湖，为报灭门之仇，却发现自己要杀的人竟是当年救他的恩人。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1876",
    "title": "马奇男孩",
    "url": "./movie-1876.html",
    "cover": "./76.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情, 青春, 西部",
    "tags": [
      "少年",
      "驯马",
      "创伤",
      "农场",
      "LGBTQ+"
    ],
    "oneLine": "一个被寄养的沉默男孩，与一匹同样不被驯服的野马，在蒙大拿的冬天互相救赎。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1877",
    "title": "这！就是街舞第三季",
    "url": "./movie-1877.html",
    "cover": "./77.jpg",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "genre": "真人秀, 舞蹈",
    "tags": [
      "街舞",
      "竞技",
      "导师",
      "青年文化"
    ],
    "oneLine": "四位新队长和全球百强舞者，用身体诠释什么叫“没有输赢，只有热爱”。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1878",
    "title": "金枝玉叶（1994）",
    "url": "./movie-1878.html",
    "cover": "./78.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1994",
    "genre": "喜剧，爱情，音乐",
    "tags": [
      "张国荣",
      "性别错位",
      "娱乐圈"
    ],
    "oneLine": "当红女歌手的男友为试探忠诚派男性新人潜入她生活，不料自己先动了真心。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1879",
    "title": "一眉道姑",
    "url": "./movie-1879.html",
    "cover": "./79.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 僵尸 / 奇幻",
    "tags": [
      "茅山",
      "女道士",
      "丧尸",
      "无厘头"
    ],
    "oneLine": "美妆博主意外继承茅山道姑衣钵，用粉底液画符、美妆蛋封印僵尸，爆笑收妖。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1880",
    "title": "大闹西游2018",
    "url": "./movie-1880.html",
    "cover": "./80.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2018",
    "genre": "喜剧, 奇幻, 动作",
    "tags": [
      "西游记改编",
      "现代职场",
      "热血",
      "解构经典",
      "黑色幽默"
    ],
    "oneLine": "孙悟空被天庭996制度压垮，联合妖怪兄弟们发起一场颠覆天条的跨年大罢工。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1881",
    "title": "爱国者行动",
    "url": "./movie-1881.html",
    "cover": "./81.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作，谍战，政治惊悚",
    "tags": [
      "民间义警",
      "系统性背叛",
      "孤胆英雄"
    ],
    "oneLine": "前特种兵发现军方用“爱国者”名义掩盖屠杀平民，他选择成为叛国者。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1882",
    "title": "王牌大贱谍4",
    "url": "./movie-1882.html",
    "cover": "./82.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "genre": "喜剧，动作",
    "tags": [
      "恶搞",
      "间谍",
      "重启",
      "自黑"
    ],
    "oneLine": "退休多年的过气特工被召回，却发现全世界的反派都是他年轻时得罪过的前女友们。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1883",
    "title": "一刻千金",
    "url": "./movie-1883.html",
    "cover": "./83.jpg",
    "region": "中国内地",
    "type": "电影",
    "year": "2021",
    "genre": "都市剧情",
    "tags": [
      "时间交易",
      "职场博弈",
      "亲情",
      "抉择",
      "悬念",
      "现实寓言"
    ],
    "oneLine": "当城市里出现可以买卖“分钟”的黑市规则后，一个本来只想救父亲的女人，意外买到了整座人生的重新定价权。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1884",
    "title": "狸猫书生",
    "url": "./movie-1884.html",
    "cover": "./84.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "古装奇幻 / 悬疑 / 喜剧",
    "tags": [
      "书院",
      "化形",
      "真假身份",
      "民间传说",
      "反转",
      "诡案"
    ],
    "oneLine": "一只会写字的狸猫混入书院当了书生，白天替人代笔，夜里却替死者说出被掩埋的真相。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1885",
    "title": "神秘失踪1993",
    "url": "./movie-1885.html",
    "cover": "./85.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑, 犯罪, 年代",
    "tags": [
      "真实事件改编",
      "刑侦",
      "怀旧",
      "烧脑",
      "人性"
    ],
    "oneLine": "1993年，北方小城五名少女接连失踪，只有一个疯疯癫癫的目击者，但他的证词没人相信。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1886",
    "title": "索菲亚",
    "url": "./movie-1886.html",
    "cover": "./86.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 传记",
    "tags": [
      "女性成长",
      "艺术",
      "孤独与救赎",
      "巴黎"
    ],
    "oneLine": "聋哑女孩索菲亚在巴黎街头捡到一台胶片相机，镜头里却意外显影出她从未听过的声音。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1887",
    "title": "西域风光",
    "url": "./movie-1887.html",
    "cover": "./87.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "genre": "纪录片 / 剧情",
    "tags": [
      "新疆",
      "公路电影",
      "民族文化",
      "摄影佳作"
    ],
    "oneLine": "法国摄影师重走古丝绸之路，用镜头记录西域最后的传统手工艺人。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1888",
    "title": "千挑万选的爱",
    "url": "./movie-1888.html",
    "cover": "./88.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 科幻",
    "tags": [
      "AI婚恋",
      "反乌托邦",
      "选择悖论",
      "日式细腻"
    ],
    "oneLine": "她花了三年在AI婚恋系统上刷了十万个匹配对象，最后系统告诉她：真爱是“刷”不出来的。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1889",
    "title": "盘龙卧虎高山顶",
    "url": "./movie-1889.html",
    "cover": "./89.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "genre": "历史 / 战争",
    "tags": [
      "抗战",
      "西北",
      "土匪",
      "国共合作"
    ],
    "oneLine": "陕北土匪头子被国军和红军同时招安，他却只想在山顶建一所学校。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1890",
    "title": "花腰女儿红",
    "url": "./movie-1890.html",
    "cover": "./90.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 民俗",
    "tags": [
      "非遗传承",
      "母女代沟",
      "花腰彝",
      "返乡",
      "文化自信"
    ],
    "oneLine": "逃离家乡的花腰彝女孩，因奶奶病重回乡，被迫接过酿制“女儿红”的家族绝活，却发现酒里藏着秘密。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1891",
    "title": "子弹边缘",
    "url": "./movie-1891.html",
    "cover": "./91.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 警匪, 犯罪",
    "tags": [
      "枪战",
      "卧底",
      "双雄",
      "街头"
    ],
    "oneLine": "最狠的卧底和最疯的悍匪，在一场注定失败的交易中，发现彼此竟然是失散多年的亲兄弟。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1892",
    "title": "先婚后宠小娇妻第二季",
    "url": "./movie-1892.html",
    "cover": "./92.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情， 剧情",
    "tags": [
      "霸总",
      "契约婚姻",
      "先婚后爱",
      "商战"
    ],
    "oneLine": "契约婚姻期满，她递上离婚协议，他却红着眼说：“公司、房子、我的命，都给你，换你不走行不行？”",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1893",
    "title": "机动部队粤语",
    "url": "./movie-1893.html",
    "cover": "./93.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2003",
    "genre": "动作，犯罪，剧情",
    "tags": [
      "杜琪峰",
      "银河映像",
      "一夜",
      "宿命"
    ],
    "oneLine": "一晚，一队机动部队警员弄丢了佩枪，必须在天亮前找回，否则全员革职。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1894",
    "title": "戏子们：传闻操纵团",
    "url": "./movie-1894.html",
    "cover": "./94.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2025",
    "genre": "历史, 剧情",
    "tags": [
      "朝鲜时代",
      "舆论操控",
      "民间艺人",
      "权谋"
    ],
    "oneLine": "朝鲜时代，一群被贱民视为“戏子”的说唱艺人，组成了搅动朝野风云的传闻操纵团。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1895",
    "title": "咱们结婚吧2013",
    "url": "./movie-1895.html",
    "cover": "./95.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2013",
    "genre": "都市, 爱情, 家庭",
    "tags": [
      "婚恋焦虑",
      "催婚现实",
      "相亲乌龙",
      "轻喜群像",
      "成长选择"
    ],
    "oneLine": "在全城都忙着催婚的那一年，两位对婚姻截然不同的人阴差阳错成了彼此的“临时伴侣”，却在假戏里看见了真心。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1896",
    "title": "狂赌之渊 电影版2",
    "url": "./movie-1896.html",
    "cover": "./96.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "剧情， 惊悚",
    "tags": [
      "赌博",
      "颜艺",
      "学生会"
    ],
    "oneLine": "学生会迎来史上最强挑战者，一场赌上全校家畜命运的“修学旅行”赌局开始。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1897",
    "title": "双雄妙计闯三关",
    "url": "./movie-1897.html",
    "cover": "./97.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "genre": "喜剧, 动作",
    "tags": [
      "兄弟情",
      "骗中骗",
      "港式无厘头",
      "怀旧"
    ],
    "oneLine": "两个街头骗子意外得到一块能预测三秒后未来的玉佩，决定用它去骗一名黑帮老大，却发现自己每一步都在被更高级的“局”算计。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1898",
    "title": "暗金烂狗3",
    "url": "./movie-1898.html",
    "cover": "./98.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪, 剧情",
    "tags": [
      "高利贷",
      "人性",
      "黑色幽默",
      "社会派"
    ],
    "oneLine": "高利贷公司的恶棍安藤，这次接到了一笔让他良心过意不去的单子。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1899",
    "title": "炽爱",
    "url": "./movie-1899.html",
    "cover": "./99.jpg",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 犯罪",
    "tags": [
      "黑帮",
      "同性",
      "复仇",
      "西西里",
      "禁忌恋"
    ],
    "oneLine": "黑帮老大的独子爱上了家族死对头的卧底警察，而两人都不知道对方的真实身份。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1900",
    "title": "海盗与公主",
    "url": "./movie-1900.html",
    "cover": "./100.jpg",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "冒险，喜剧，爱情",
    "tags": [
      "反套路",
      "女权",
      "航海",
      "搞笑",
      "颠覆童话"
    ],
    "oneLine": "粗鲁女海盗绑架了社恐男公主，却发现自己才是被解救的那一个。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1901",
    "title": "舞动的心",
    "url": "./movie-1901.html",
    "cover": "./101.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "genre": "歌舞, 剧情, 运动",
    "tags": [
      "街舞",
      "种姓制度",
      "父女情"
    ],
    "oneLine": "低种姓女孩的街舞梦，与父辈的传统舞蹈之争，点燃了整个村庄的变革之火。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1902",
    "title": "暗夜孤院",
    "url": "./movie-1902.html",
    "cover": "./102.jpg",
    "region": "西班牙",
    "type": "电影",
    "year": "2019",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "孤儿院",
      "恶灵",
      "反转",
      "西班牙",
      "心理"
    ],
    "oneLine": "一位夜间看护受雇于一栋废弃孤儿院，只需独处一晚，就能获得天价报酬，但她在那里看到了不该存在的东西。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1903",
    "title": "千鹤先生",
    "url": "./movie-1903.html",
    "cover": "./103.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 民俗, 剧情",
    "tags": [
      "茅山",
      "僵尸",
      "因果",
      "道义"
    ],
    "oneLine": "落魄道士千鹤接了一单驱邪生意，却发现那厉鬼竟是抛弃他四十年的生母。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1904",
    "title": "达人来了",
    "url": "./movie-1904.html",
    "cover": "./104.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2021",
    "genre": "喜剧, 励志",
    "tags": [
      "选秀",
      "扮猪吃虎",
      "清洁工",
      "反差萌"
    ],
    "oneLine": "政府大楼的扫地大妈，一开口却是国家级声乐老师的水平。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1905",
    "title": "伊斯坦布尔红",
    "url": "./movie-1905.html",
    "cover": "./105.jpg",
    "region": "土耳其",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情、历史、爱情",
    "tags": [
      "香料商人",
      "奥斯曼帝国",
      "东西方文化",
      "禁恋",
      "家族恩怨"
    ],
    "oneLine": "19世纪伊斯坦布尔，一位香料商的女儿爱上了父亲的法国学徒，但学徒的真实身份是来窃取“红色秘方”的西方间谍。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1906",
    "title": "世纪婚魇",
    "url": "./movie-1906.html",
    "cover": "./106.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚，悬疑",
    "tags": [
      "婚礼",
      "诅咒",
      "心理恐怖",
      "反转"
    ],
    "oneLine": "一场世纪婚礼上，新娘接连收到来自“过去”的死亡预告，而新郎的誓言竟成了诅咒的开端。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1907",
    "title": "青年π计划",
    "url": "./movie-1907.html",
    "cover": "./107.jpg",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2023",
    "genre": "音乐、真人秀",
    "tags": [
      "选秀",
      "原创音乐",
      "青年文化",
      "竞演",
      "热血"
    ],
    "oneLine": "来自全球的30组Z世代音乐人齐聚一堂，在无淘汰、重合作的“π空间”里，用无限不循环的创造力定义华语乐坛的未来。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1908",
    "title": "明末遗恨",
    "url": "./movie-1908.html",
    "cover": "./108.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "历史, 动作, 剧情",
    "tags": [
      "明朝",
      "锦衣卫",
      "清朝",
      "复仇",
      "国仇家恨"
    ],
    "oneLine": "崇祯自缢后，三名幸存的锦衣卫护送太子南下，却发现自己保护的可能是一个冒牌货。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1909",
    "title": "燕子李三传奇",
    "url": "./movie-1909.html",
    "cover": "./109.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "动作, 历史, 悬疑",
    "tags": [
      "民国",
      "侠盗",
      "江湖恩怨"
    ],
    "oneLine": "民国侠盗燕子李三劫富济贫，却在一夜之间被栽赃为杀害巡警局长满门的真凶。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1910",
    "title": "高年级姐妹会",
    "url": "./movie-1910.html",
    "cover": "./110.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "喜剧/青春",
    "tags": [
      "姐妹情",
      "校园反叛",
      "女性成长"
    ],
    "oneLine": "三名被退学的高中女生秘密组建“高年级姐妹会”，专门恶搞那些欺负新生的低年级社团。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1911",
    "title": "销魂梦",
    "url": "./movie-1911.html",
    "cover": "./111.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1993",
    "genre": "爱情 / 奇幻 / 情色",
    "tags": [
      "梦镜",
      "前世今生",
      "经典港风",
      "唯美"
    ],
    "oneLine": "每当她入睡，就会成为民国歌女；而枕边的男友，竟是当年开枪杀死她的军阀。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1912",
    "title": "甩皮鬼",
    "url": "./movie-1912.html",
    "cover": "./112.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "恐怖 / 喜剧",
    "tags": [
      "港产cult片",
      "僵尸变异",
      "剥皮",
      "林正英式"
    ],
    "oneLine": "美容院老板用黑市人皮做面膜，敷过的客人全都变成了会笑的剥皮怪物。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1913",
    "title": "女娲补天",
    "url": "./movie-1913.html",
    "cover": "./113.jpg",
    "region": "中国大陆",
    "type": "电影 / 动画",
    "year": "2025",
    "genre": "奇幻 / 史诗 / 神话",
    "tags": [
      "上古神话",
      "大女主",
      "视觉奇观",
      "文明起源",
      "燃"
    ],
    "oneLine": "女娲不仅是创世神，更是上古最强战斗女神，这一次天破是她千年前亲手封印的恶兽所为。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1914",
    "title": "最后的正义",
    "url": "./movie-1914.html",
    "cover": "./114.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2028",
    "genre": "动作 / 惊悚",
    "tags": [
      "复仇",
      "孤胆英雄",
      "司法腐败",
      "高能打斗"
    ],
    "oneLine": "当法律沦为恶势力的保护伞，一位隐退的前特工只能用自己的方式执行最后的正义。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1915",
    "title": "花园派对",
    "url": "./movie-1915.html",
    "cover": "./115.jpg",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑 / 家庭",
    "tags": [
      "郊区",
      "中产",
      "谋杀",
      "派对",
      "黑色幽默"
    ],
    "oneLine": "一场奢华的花园派对上，泳池突然浮现出男主人的尸体，而现场所有宾客都曾在过去一小时内单独接近过泳池。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1916",
    "title": "火舞倾城",
    "url": "./movie-1916.html",
    "cover": "./116.jpg",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "genre": "动作 / 歌舞",
    "tags": [
      "街舞",
      "黑帮",
      "港风"
    ],
    "oneLine": "为了寻找失踪的哥哥，街舞少女混入黑帮，用跳舞代替枪火解决地盘纠纷。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1917",
    "title": "再婚劫",
    "url": "./movie-1917.html",
    "cover": "./117.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 家庭 / 犯罪",
    "tags": [
      "重组家庭",
      "遗产争夺",
      "全员恶人"
    ],
    "oneLine": "当两个破碎家庭重组，等待着新人的不是温馨晚餐，而是一场精心策划的连环杀局。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1918",
    "title": "天牢长恨",
    "url": "./movie-1918.html",
    "cover": "./118.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "古装悬疑",
    "tags": [
      "明朝",
      "诏狱",
      "权谋"
    ],
    "oneLine": "天牢最深处关押着一个死囚，他能算尽天下人心，却在死前七天拒绝为皇帝算出国运，招致灭国级惨案。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1919",
    "title": "终极宝镳",
    "url": "./movie-1919.html",
    "cover": "./119.jpg",
    "region": "香港",
    "type": "动作犯罪片",
    "year": "2018",
    "genre": "动作, 犯罪, 冒险",
    "tags": [
      "追逐竞速",
      "珠宝密码",
      "马术符号",
      "黑市拍卖",
      "失忆复仇"
    ],
    "oneLine": "一匹被军火商称作“宝镳”的疯马携着最后航路密钥逃离北岭拍卖场，退役刑警与AI驯马师必须在雪崩前解出每一道铃声才有活口。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1920",
    "title": "高校女汉子",
    "url": "./movie-1920.html",
    "cover": "./120.jpg",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2017",
    "genre": "青春喜剧",
    "tags": [
      "反差萌",
      "霸王花",
      "校园"
    ],
    "oneLine": "全国武术冠军林珍被迫女扮男装混入男子贵族高中，为了隐藏身份闹出了一连串啼笑皆非的事。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1921",
    "title": "我家大师兄有点靠谱",
    "url": "./movie-1921.html",
    "cover": "./121.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "喜剧、古装、仙侠",
    "tags": [
      "反内卷",
      "废柴逆袭",
      "门派日常",
      "师徒搞笑"
    ],
    "oneLine": "门派最懒大师兄被推举为掌门，他发现一本歪门秘籍，于是用现代管理思维整顿修仙界。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1922",
    "title": "我们要出海",
    "url": "./movie-1922.html",
    "cover": "./122.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 家庭",
    "tags": [
      "阿尔茨海默症",
      "公路电影",
      "和解"
    ],
    "oneLine": "患阿尔茨海默症的父亲坚称自己是海盗船长，带着儿子在陆地上“出海”。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1923",
    "title": "狂人荡妇",
    "url": "./movie-1923.html",
    "cover": "./123.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 情色 / 心理",
    "tags": [
      "精神病院",
      "女性欲望",
      "压抑",
      "反转"
    ],
    "oneLine": "1920年代精神病院，一位因“过度放荡”被送入的女病人，开始用催眠操控整个男医生团队。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1924",
    "title": "一级恐惧",
    "url": "./movie-1924.html",
    "cover": "./124.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖, 心理",
    "tags": [
      "恐惧具象化",
      "心理医生",
      "童年创伤",
      "幻觉"
    ],
    "oneLine": "心理医生的恐惧是“被人遗忘”，结果他真的开始从合影和镜子里消失。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1925",
    "title": "喋血孤城",
    "url": "./movie-1925.html",
    "cover": "./125.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "战争, 历史",
    "tags": [
      "抗战",
      "巷战",
      "惨烈",
      "兄弟情",
      "牺牲"
    ],
    "oneLine": "衡阳保卫战最后 47 天，一支只剩下 17 人的连队，用尸体筑墙挡住了日军一个联队。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1926",
    "title": "家有儿女",
    "url": "./movie-1926.html",
    "cover": "./126.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2005",
    "genre": "情景喜剧、家庭、教育",
    "tags": [
      "重组家庭",
      "三个孩子",
      "北京",
      "童年回忆",
      "搞笑"
    ],
    "oneLine": "北京一户重组家庭里，妈妈带着姐姐，爸爸带着两个弟弟，五个人的日常就是一部鸡飞狗跳的成长史。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1927",
    "title": "2024山西春晚",
    "url": "./movie-1927.html",
    "cover": "./127.jpg",
    "region": "中国大陆",
    "type": "综艺/晚会",
    "year": "2024",
    "genre": "晚会, 喜剧, 音乐",
    "tags": [
      "春晚",
      "山西",
      "传统文化",
      "明星汇演"
    ],
    "oneLine": "一场意外频出的技术故障，让这届春晚的幕后与台前产生了前所未有的爆笑联动。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1928",
    "title": "夏绿蒂的网",
    "url": "./movie-1928.html",
    "cover": "./128.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情, 悬疑, 惊悚",
    "tags": [
      "暗网",
      "女性",
      "复仇",
      "黑客"
    ],
    "oneLine": "为了找到失踪的女儿，一个文员母亲黑进了暗网，却发现女儿是名为“夏绿蒂”的顶级黑客。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1929",
    "title": "夜凛神探第一季",
    "url": "./movie-1929.html",
    "cover": "./129.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "悬疑 / 犯罪 / 古装",
    "tags": [
      "宋朝背景",
      "单元探案",
      "心理侧写",
      "双男主"
    ],
    "oneLine": "北宋年间，一位患有超忆症的落魄画师与大理寺冷面神探联手，破获连环“鬼魅杀人案”。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1930",
    "title": "黑发青春",
    "url": "./movie-1930.html",
    "cover": "./130.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2022",
    "genre": "恐怖, 青春, 悬疑",
    "tags": [
      "校园怪谈",
      "头发",
      "诅咒"
    ],
    "oneLine": "女高中生们的头发开始疯狂生长且无法剪断，随之而来的是一个关于嫉妒与献祭的古老诅咒。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1931",
    "title": "俗世情真粤语",
    "url": "./movie-1931.html",
    "cover": "./131.jpg",
    "region": "中国香港",
    "type": "电视剧集",
    "year": "2003",
    "genre": "剧情，都市，情感",
    "tags": [
      "TVB",
      "职场",
      "律师",
      "人情冷暖",
      "励志"
    ],
    "oneLine": "一个患有“同理心缺失”的天才律师，为了取证不得不混入精神病院，却在那里找回了人性。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1932",
    "title": "水果机器",
    "url": "./movie-1932.html",
    "cover": "./132.jpg",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻 / 喜剧",
    "tags": [
      "仿生人",
      "黑色幽默",
      "食物科技"
    ],
    "oneLine": "一家公司发明了能合成任何水果味道的“水果机器”，但机器开始认为自己就是水果本身。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1933",
    "title": "限时救援",
    "url": "./movie-1933.html",
    "cover": "./133.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "动作 / 惊悚",
    "tags": [
      "营救",
      "倒计时",
      "单挑"
    ],
    "oneLine": "退役军医的女儿被绑架，他只有12小时穿越整座犯罪之城。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1934",
    "title": "缉魔",
    "url": "./movie-1934.html",
    "cover": "./134.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪, 悬疑",
    "tags": [
      "灵异探案",
      "通灵警察",
      "都市怪谈"
    ],
    "oneLine": "一名不信鬼神的刑警与一位能看到死者记忆的灵媒联手，追踪一个专杀伪善者的连环杀手“审判者”。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1935",
    "title": "抹布男孩",
    "url": "./movie-1935.html",
    "cover": "./135.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2020",
    "genre": "剧情/青春",
    "tags": [
      "校园霸凌",
      "阶级差异",
      "自我救赎"
    ],
    "oneLine": "全班都用他的校服擦桌子，直到他在校服内衬里缝满了玻璃渣。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1936",
    "title": "澳门人家",
    "url": "./movie-1936.html",
    "cover": "./136.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2021",
    "genre": "剧情",
    "tags": [
      "家庭",
      "时代变迁",
      "温情",
      "地域文化"
    ],
    "oneLine": "澳门回归二十周年之际，一条百年老街上的七户人家面临着拆迁与守旧的抉择。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1937",
    "title": "毒蛇王后第二季",
    "url": "./movie-1937.html",
    "cover": "./137.jpg",
    "region": "英国",
    "type": "电视剧",
    "year": "2024",
    "genre": "历史, 剧情, 传记",
    "tags": [
      "宫廷权谋",
      "凯瑟琳·德·美第奇",
      "母子反目",
      "宗教战争"
    ],
    "oneLine": "凯瑟琳王后在儿子即位后失去权力，被迫与曾经的盟友和新教贵族展开更残忍的暗斗。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1938",
    "title": "大进击",
    "url": "./movie-1938.html",
    "cover": "./138.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪，动作，喜剧",
    "tags": [
      "抢劫",
      "老人院",
      "热血",
      "退休生活"
    ],
    "oneLine": "养老院里，五位被儿女抛弃的前黑帮大佬决定重出江湖，抢劫金库来支付自己的养老费。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1939",
    "title": "俏书记",
    "url": "./movie-1939.html",
    "cover": "./139.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情/农村",
    "tags": [
      "乡村振兴",
      "女性力量",
      "电商",
      "轻喜剧"
    ],
    "oneLine": "破产女网红回到欠债村当书记，用直播带货替全村还债却被骂炒作。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1940",
    "title": "故乡旅店",
    "url": "./movie-1940.html",
    "cover": "./140.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "剧情, 奇幻, 治愈",
    "tags": [
      "旅店",
      "回乡",
      "告别",
      "温情"
    ],
    "oneLine": "一家只接待将死之人的深山旅店，每位客人可以在这里“排练”自己的死亡，直到满意为止。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1941",
    "title": "家卒盛宴",
    "url": "./movie-1941.html",
    "cover": "./141.jpg",
    "region": "马来西亚",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚 / 家庭",
    "tags": [
      "南洋",
      "民俗",
      "邪典"
    ],
    "oneLine": "马六甲一个华人富商每年举办“家卒盛宴”，实则是用活人祭祀换取商业成功。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1942",
    "title": "未定之天",
    "url": "./movie-1942.html",
    "cover": "./142.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情/悬疑",
    "tags": [
      "亲情",
      "失踪",
      "多视角",
      "情感解谜"
    ],
    "oneLine": "女儿在毕业旅行中失踪，母亲、警方、社交媒体和女儿自己的日记，拼凑出四个完全不同的“真相”。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1943",
    "title": "内衣教父下篇",
    "url": "./movie-1943.html",
    "cover": "./143.jpg",
    "region": "日本",
    "type": "电影",
    "year": "1992",
    "genre": "喜剧， 动作， 犯罪",
    "tags": [
      "极道",
      "反差萌",
      "漫改"
    ],
    "oneLine": "白天设计女性内衣的害羞店主，夜晚必须统领关东最大的黑帮，如今他要用蕾丝边解决继承人之争。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1944",
    "title": "亚瑟家的没落",
    "url": "./movie-1944.html",
    "cover": "./144.jpg",
    "region": "美国",
    "type": "剧集 / 限定剧",
    "year": "2025",
    "genre": "剧情 / 恐怖 / 心理惊悚",
    "tags": [
      "哥特",
      "家族诅咒",
      "爱伦·坡",
      "豪宅"
    ],
    "oneLine": "亚瑟家族最后的血脉必须在七天内找出祖宅的诅咒源头，否则整个家族将彻底消亡。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1945",
    "title": "难为情",
    "url": "./movie-1945.html",
    "cover": "./145.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2011",
    "genre": "剧情、爱情、同性",
    "tags": [
      "文艺",
      "情感细腻",
      "三角关系",
      "自我认同",
      "美术馆"
    ],
    "oneLine": "在美术馆工作的智友爱上了同事尹秀，同时又被海归设计师姜智铉热烈追求，三人在情感迷宫中被“难为情”反复折磨。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1946",
    "title": "豆丁真汉子",
    "url": "./movie-1946.html",
    "cover": "./146.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2021",
    "genre": "喜剧 / 动作 / 儿童",
    "tags": [
      "萌娃",
      "功夫",
      "反差萌",
      "校园"
    ],
    "oneLine": "幼儿园里最矮的小豆丁为保护同桌，竟使出了失传已久的咏春拳法。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1947",
    "title": "城里的房间",
    "url": "./movie-1947.html",
    "cover": "./147.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 爱情 / 歌舞",
    "tags": [
      "法国新浪潮",
      "罢工",
      "阶级",
      "音乐剧"
    ],
    "oneLine": "1955年南特，富家女爱上工人领袖，两人的爱情在工厂罢工中撕裂。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1948",
    "title": "法兰西特派周报",
    "url": "./movie-1948.html",
    "cover": "./148.jpg",
    "region": "法国 / 美国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 喜剧",
    "tags": [
      "报刊",
      "文艺",
      "群像"
    ],
    "oneLine": "一家驻扎在法国虚构小镇的美国报社，在停刊前献给读者的最后三篇天才特写。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1949",
    "title": "列夫·朗道：诺拉与母亲",
    "url": "./movie-1949.html",
    "cover": "./149.jpg",
    "region": "俄罗斯, 乌克兰, 德国, 法国",
    "type": "电影",
    "year": "2020",
    "genre": "剧情, 历史",
    "tags": [
      "苏联",
      "压迫",
      "母女关系",
      "体制批判"
    ],
    "oneLine": "斯大林时代，一个物理研究所食堂女工的女儿被选入了“社会主义优秀青年”夏令营，回来时变成了另一个人。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1950",
    "title": "水瓶座",
    "url": "./movie-1950.html",
    "cover": "./150.jpg",
    "region": "巴西",
    "type": "电影",
    "year": "2024",
    "genre": "剧情， 文艺",
    "tags": [
      "老年",
      "独居",
      "坚守"
    ],
    "oneLine": "一个81岁的退休音乐评论家拒绝拆迁公司，独自守着一栋即将被推倒的水瓶座大楼。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1951",
    "title": "布宜诺斯艾利斯的囚徒",
    "url": "./movie-1951.html",
    "cover": "./1.jpg",
    "region": "阿根廷",
    "type": "惊悚片",
    "year": "2013",
    "genre": "越狱惊悚、政治悬疑、流亡剧情",
    "tags": [
      "布宜诺斯艾利斯",
      "监狱账本",
      "越狱列车",
      "证词交换",
      "暴雨公路"
    ],
    "oneLine": "被冤入监的会计替身在出狱后发现“补偿账单”里藏着失踪者名单，追着旧审判文件逃向边界时，每个人都成了谁都不敢承认的证人。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1952",
    "title": "上有老",
    "url": "./movie-1952.html",
    "cover": "./2.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "养老",
      "阿尔茨海默",
      "代际冲突",
      "黑色幽默"
    ],
    "oneLine": "一个中年男人同时照顾患阿尔茨海默的父亲、病危的岳母和叛逆期的女儿，直到他自己也被查出早期脑萎缩。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1953",
    "title": "新选组始末记",
    "url": "./movie-1953.html",
    "cover": "./3.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2020",
    "genre": "历史 / 动作 / 剧情",
    "tags": [
      "新选组",
      "幕末",
      "武士",
      "池田屋",
      "土方岁三"
    ],
    "oneLine": "池田屋事件背后，一个被历史遗忘的少年队士用血泪写下的真实日记。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1954",
    "title": "新青春梦里人",
    "url": "./movie-1954.html",
    "cover": "./4.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 青春",
    "tags": [
      "怀旧",
      "90年代",
      "错过",
      "重逢",
      "港风"
    ],
    "oneLine": "三十年后，已为人父的他收到一盘旧磁带，里面是当年那个女孩未说出口的告白。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1955",
    "title": "奥维尔号第三季",
    "url": "./movie-1955.html",
    "cover": "./5.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "科幻，喜剧",
    "tags": [
      "太空",
      "探索",
      "人性",
      "黑色幽默"
    ],
    "oneLine": "奥维尔号船员在探索未知星域时，意外发现一个靠“官僚主义”管理整个银河系的远古文明。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1956",
    "title": "孤独的野兽",
    "url": "./movie-1956.html",
    "cover": "./6.jpg",
    "region": "美国",
    "type": "剧集",
    "year": "2028",
    "genre": "犯罪心理",
    "tags": [
      "连环杀手",
      "天才侧写师",
      "反社会人格",
      "猫鼠游戏"
    ],
    "oneLine": "FBI最年轻的天才侧写师有个秘密：他的大脑和那个逍遥法外的连环杀手完全相同。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1957",
    "title": "编写美好时光",
    "url": "./movie-1957.html",
    "cover": "./7.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "剧情， 爱情， 文艺",
    "tags": [
      "编剧",
      "旧书店",
      "遗愿清单",
      "香港情怀"
    ],
    "oneLine": "一位过气编剧的遗愿是让自己的剧本被拍成电影，而唯一愿意帮忙的，是他那写网络爽文的前女婿。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1958",
    "title": "双生花2014",
    "url": "./movie-1958.html",
    "cover": "./8.jpg",
    "region": "波兰",
    "type": "电影",
    "year": "2014",
    "genre": "剧情, 爱情, 同性",
    "tags": [
      "基耶斯洛夫斯基",
      "宿命",
      "双胞胎",
      "离散",
      "柏林墙"
    ],
    "oneLine": "1990年柏林墙倒塌时失散的一对双胞胎姐妹，24年后在同一座城市各自爱上了对方的外孙女。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1959",
    "title": "可爱的露易丝",
    "url": "./movie-1959.html",
    "cover": "./9.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧, 剧情, 家庭",
    "tags": [
      "返老还童",
      "隔代亲情",
      "奇幻"
    ],
    "oneLine": "八旬老太露易丝一夜之间变回八岁，被迫和孙女一起上小学。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1960",
    "title": "美梦成真",
    "url": "./movie-1960.html",
    "cover": "./10.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "黑色幽默",
      "欲望",
      "人性测试"
    ],
    "oneLine": "十八线小演员买了个“美梦成真”APP试用版，醒来发现黑粉全死了，他得赶在正式版扣费前退订。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1961",
    "title": "神人之家",
    "url": "./movie-1961.html",
    "cover": "./11.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 家庭 / 奇幻",
    "tags": [
      "乩童",
      "信仰",
      "父子",
      "乡土",
      "和解"
    ],
    "oneLine": "儿子是乩童，孙子是通灵者，只有我这个不信神的儿子，不得不回到这个被神明绑架的家。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1962",
    "title": "一日寨主一日官",
    "url": "./movie-1962.html",
    "cover": "./12.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "古装 / 喜剧 / 动作",
    "tags": [
      "身份互换",
      "山贼与县官",
      "荒诞讽刺",
      "乌龙事件"
    ],
    "oneLine": "一个被罢黜的糊涂县官与一个想过官瘾的山寨头子阴差阳错互换了身份，一天之内，两方山寨和县衙都乱成了一锅粥。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1963",
    "title": "更好的世界",
    "url": "./movie-1963.html",
    "cover": "./13.jpg",
    "region": "丹麦 / 瑞典",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 家庭 / 悬疑",
    "tags": [
      "人性实验",
      "道德困境",
      "北欧冷感",
      "乌托邦",
      "对立冲突"
    ],
    "oneLine": "为了建造“完美的社区”，一位理想主义建筑师在地窖里囚禁了全镇唯一的反对者。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1964",
    "title": "风流千金",
    "url": "./movie-1964.html",
    "cover": "./14.jpg",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1997",
    "genre": "喜剧 / 爱情",
    "tags": [
      "豪门",
      "换装",
      "恋爱",
      "搞笑",
      "女强"
    ],
    "oneLine": "富豪千金为了赢回家族继承权，不得不伪装成穷丫头在自家公司打工，却爱上了自己最讨厌的男秘书。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1965",
    "title": "无主之人",
    "url": "./movie-1965.html",
    "cover": "./15.jpg",
    "region": "香港",
    "type": "惊悚犯罪片",
    "year": "2019",
    "genre": "悬疑/心理/都市",
    "tags": [
      "身份劫持",
      "失忆",
      "都市阴影",
      "假案",
      "心理战"
    ],
    "oneLine": "他醒在出租屋里，墙上贴满自己的照片，而每一张都在向不同国家的法庭作证，像是在提醒他：真正失踪的不是他本人，而是一场可以被复制的生命。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1966",
    "title": "被窃油画的假设",
    "url": "./movie-1966.html",
    "cover": "./16.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "艺术犯罪",
      "高概念",
      "多重叙事",
      "烧脑"
    ],
    "oneLine": "一幅被盗的名画背后，藏着一个足以推翻艺术史的疯狂假设。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1967",
    "title": "我是你的罗密欧",
    "url": "./movie-1967.html",
    "cover": "./17.jpg",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 喜剧 / 歌舞",
    "tags": [
      "错位爱情",
      "身份互换",
      "宝莱坞风格",
      "家族恩怨"
    ],
    "oneLine": "为了追求敌对企业家的女儿，一个愣头青小伙谎称自己是她父亲失散多年的私生子，结果弄假成真。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1968",
    "title": "猫和老鼠：星盘奇缘",
    "url": "./movie-1968.html",
    "cover": "./18.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动画， 喜剧， 奇幻， 冒险",
    "tags": [
      "穿越",
      "星座",
      "魔法",
      "经典重启"
    ],
    "oneLine": "汤姆和杰瑞意外激活了十二星座星盘，导致时空错乱，他们必须穿越到神话时代，找回逃走的星座之力。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1969",
    "title": "芭比逐梦大都会",
    "url": "./movie-1969.html",
    "cover": "./19.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动画， 冒险， 音乐",
    "tags": [
      "励志",
      "时尚",
      "大女主",
      "都市梦"
    ],
    "oneLine": "芭比从童话王国来到纽约追梦，却发现这里的女孩们为了争夺一席之地，比童话里的女巫更可怕。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1970",
    "title": "上海夜未眠",
    "url": "./movie-1970.html",
    "cover": "./20.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "genre": "爱情、剧情、都市",
    "tags": [
      "一夜情",
      "城市漫游",
      "错过的缘分",
      "治愈系"
    ],
    "oneLine": "两个在上海深夜拼车软件上搭错的陌生人，决定用一整夜的时间寻找彼此的真实身份。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1971",
    "title": "生日快乐2018国语",
    "url": "./movie-1971.html",
    "cover": "./21.jpg",
    "region": "中国大陆",
    "type": "伦理家庭剧",
    "year": "2018",
    "genre": "家庭,悬疑,爱情,都市",
    "tags": [
      "生日",
      "家庭秘密",
      "兄妹",
      "遗产",
      "和解"
    ],
    "oneLine": "一场本该只属于家庭的生日聚会，因一张未寄出的2018贺卡被打开，变成弟妹、父亲与旧账重重的审问现场。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1972",
    "title": "充气娃娃之恋",
    "url": "./movie-1972.html",
    "cover": "./22.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2019",
    "genre": "爱情, 奇幻, 剧情",
    "tags": [
      "孤独",
      "物恋",
      "治愈",
      "都市寓言"
    ],
    "oneLine": "社恐宅男与一个漏气的充气娃娃“同居”，却意外发现她每晚都会活过来。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1973",
    "title": "再见二十世纪",
    "url": "./movie-1973.html",
    "cover": "./23.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "文艺 / 历史",
    "tags": [
      "世纪末",
      "国企下岗",
      "青春遗憾",
      "胶片摄影"
    ],
    "oneLine": "1999年最后一天，三个工厂子弟学校的少年决定一起去看海，却只走到了城市的尽头。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1974",
    "title": "情定文昌里",
    "url": "./movie-1974.html",
    "cover": "./24.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "爱情， 戏曲， 年代",
    "tags": [
      "汤显祖",
      "穿越",
      "戏曲文化"
    ],
    "oneLine": "一位现代昆曲女演员在抚州文昌里演出时意外坠入《牡丹亭》的画中，与汤显祖笔下的柳梦梅展开了一段虚实相生的爱恋。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1975",
    "title": "飙风特警队",
    "url": "./movie-1975.html",
    "cover": "./25.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 犯罪",
    "tags": [
      "飙车",
      "硬汉",
      "兄弟情"
    ],
    "oneLine": "洛杉矶最精锐的飙风特警队，遭遇了一个比他们更懂追捕战术的天才罪犯。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1976",
    "title": "最佳损友国语",
    "url": "./movie-1976.html",
    "cover": "./26.jpg",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "黑色幽默",
    "tags": [
      "兄弟情",
      "葬礼",
      "遗产",
      "谎言"
    ],
    "oneLine": "四个酒肉朋友在“首富”兄弟的葬礼上，为了争夺一份不存在的录音遗嘱，上演了一出荒唐闹剧。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1977",
    "title": "爱有多远",
    "url": "./movie-1977.html",
    "cover": "./27.jpg",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "家庭 / 伦理",
    "tags": [
      "母女",
      "北漂",
      "代际创伤",
      "和解"
    ],
    "oneLine": "母亲一辈子怪女儿“克死了父亲”，女儿远走北京十五年，一通电话让两人都哭了。",
    "category": "sci-fi-fantasy",
    "categoryName": "科幻奇幻"
  },
  {
    "id": "1978",
    "title": "世界围绕你",
    "url": "./movie-1978.html",
    "cover": "./28.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 奇幻",
    "tags": [
      "平行时空",
      "选择",
      "浪漫"
    ],
    "oneLine": "在巴黎地铁的第七站与第八站之间，她发现每次出站都会进入一个平行世界，每个世界里她都和不同的人相爱。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1979",
    "title": "巴比龙",
    "url": "./movie-1979.html",
    "cover": "./29.jpg",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪, 剧情, 传记",
    "tags": [
      "越狱",
      "冤狱",
      "魔鬼岛",
      "求生"
    ],
    "oneLine": "被诬陷杀人的“巴比龙”被流放到法属圭亚那的魔鬼岛，他用半个世纪挖了九条地道。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1980",
    "title": "女神养成记",
    "url": "./movie-1980.html",
    "cover": "./30.jpg",
    "region": "韩国",
    "type": "电视剧",
    "year": "2026",
    "genre": "剧情， 青春， 校园",
    "tags": [
      "整容",
      "校园暴力",
      "身份认同"
    ],
    "oneLine": "丑小鸭女孩整容后成为校花，却发现欺负过她的人都在崇拜“现在的她”。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1981",
    "title": "我在密苏里，我正青春",
    "url": "./movie-1981.html",
    "cover": "./31.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "青春剧情",
    "tags": [
      "高中",
      "告别",
      "农场",
      "梦想"
    ],
    "oneLine": "在美国中西部的一个闭塞小镇，一名热爱音乐的女孩必须在高中毕业后留守农场照顾病父，还是去纽约追寻梦想之间做出选择。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1982",
    "title": "杀出个未来",
    "url": "./movie-1982.html",
    "cover": "./32.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻，动作，惊悚",
    "tags": [
      "时间循环",
      "退役士兵",
      "AI叛乱",
      "末日",
      "硬核"
    ],
    "oneLine": "在未来废墟中，一个被淘汰的退役士兵发现自己陷入了杀死“救世主”的无限时间循环。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1983",
    "title": "四月三周两天",
    "url": "./movie-1983.html",
    "cover": "./33.jpg",
    "region": "罗马尼亚",
    "type": "电影",
    "year": "2024",
    "genre": "剧情/历史",
    "tags": [
      "计划生育",
      "姐妹情",
      "压迫",
      "长镜头",
      "写实"
    ],
    "oneLine": "1980年代罗马尼亚，女大学生为闺蜜寻找黑市堕胎，两人用“四月三周两天”走完地狱之路。",
    "category": "action-war",
    "categoryName": "动作战争"
  },
  {
    "id": "1984",
    "title": "大话西游：缘起",
    "url": "./movie-1984.html",
    "cover": "./34.jpg",
    "region": "中国",
    "type": "奇幻电影",
    "year": "2024",
    "genre": "奇幻, 喜剧, 神话, 爱情",
    "tags": [
      "因果重置",
      "前传重构",
      "神话政治",
      "情义成长",
      "命运抉择"
    ],
    "oneLine": "“缘起”不是附庸设定，而是最早的一次错误选择：笑闹与誓言交错，把众神推向无法回头的战争边缘。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1985",
    "title": "师傅2024",
    "url": "./movie-1985.html",
    "cover": "./35.jpg",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 剧情, 武侠",
    "tags": [
      "师徒传承",
      "旧城拆迁",
      "武馆危机",
      "江湖规矩",
      "当代武侠"
    ],
    "oneLine": "一位沉默多年的老拳师在旧武馆即将拆除前接回失联徒弟，却发现真正需要传下去的不是拳法，而是做人底线。",
    "category": "history-costume",
    "categoryName": "历史古装"
  },
  {
    "id": "1986",
    "title": "麦加朝圣之旅",
    "url": "./movie-1986.html",
    "cover": "./36.jpg",
    "region": "中国大陆",
    "type": "冒险剧情电影",
    "year": "2025",
    "genre": "冒险, 人文, 宗教, 励志, 现实主义",
    "tags": [
      "朝圣",
      "跨文化",
      "个人救赎",
      "边境政治",
      "人道救援",
      "家庭和解"
    ],
    "oneLine": "恐高症男子只想按流程完成朝圣，却在沙漠改道中发现父辈秘密与被困者名单，在信仰之路里学会与创伤并行前行。",
    "category": "urban-romance",
    "categoryName": "都市爱情"
  },
  {
    "id": "1987",
    "title": "婚巢",
    "url": "./movie-1987.html",
    "cover": "./37.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 家庭",
    "tags": [
      "买房大战",
      "婚姻关系",
      "婆媳矛盾",
      "现实主义"
    ],
    "oneLine": "为了在大城市买婚房，两家人六口人挤进一张房产证，婚姻成了这场资产博弈的牺牲品。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "1988",
    "title": "冷暖人间",
    "url": "./movie-1988.html",
    "cover": "./38.jpg",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情、家庭、伦理",
    "tags": [
      "养老问题",
      "拆迁纠纷",
      "多子女家庭",
      "市井生活"
    ],
    "oneLine": "老宅拆迁款500万，四个失和的子女一夜之间全回来了，瘫痪在床的父亲成了“抢手货”。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1989",
    "title": "卡特彼勒的和服",
    "url": "./movie-1989.html",
    "cover": "./39.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "剧情，奇幻",
    "tags": [
      "昆虫与女性",
      "和服隐喻",
      "存在主义"
    ],
    "oneLine": "奶奶去世后留下的古旧和服里，爬出了一条会说话的巨大毛毛虫，声称自己是家族死去的女性灵魂。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1990",
    "title": "小贾斯汀：永不说不",
    "url": "./movie-1990.html",
    "cover": "./40.jpg",
    "region": "美国",
    "type": "纪录片",
    "year": "2011",
    "genre": "音乐纪录",
    "tags": [
      "偶像",
      "青春",
      "舞台",
      "成长",
      "逆袭"
    ],
    "oneLine": "镜头追着一个少年的世界巡演跑，却拍出了聚光灯背后最脆弱也最倔强的那部分自己。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1991",
    "title": "嗨！营业中第三季",
    "url": "./movie-1991.html",
    "cover": "./41.jpg",
    "region": "中国台湾",
    "type": "综艺",
    "year": "2025",
    "genre": "真人秀, 经营",
    "tags": [
      "明星开店",
      "实境",
      "治愈"
    ],
    "oneLine": "五位明星接手一座山间废弃民宿，要在雨季来临之前完成翻新并连续营业30天。",
    "category": "global-asian",
    "categoryName": "日韩欧美"
  },
  {
    "id": "1992",
    "title": "非爱不可的圣诞",
    "url": "./movie-1992.html",
    "cover": "./42.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 喜剧 / 奇幻",
    "tags": [
      "圣诞电影",
      "时间循环",
      "剩女焦虑",
      "自我成长"
    ],
    "oneLine": "一个发誓今年圣诞前必须脱单的毒舌女记者，被困在了圣诞前夜这一天，且每次循环她都会“睡”到不同的倒霉蛋。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1993",
    "title": "穿越爱情线",
    "url": "./movie-1993.html",
    "cover": "./43.jpg",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情, 穿越",
    "tags": [
      "单车环岛",
      "平行时空",
      "遗憾"
    ],
    "oneLine": "失意的单车手在环岛途中，每次穿越隧道都会遇见不同时空里尚未分手的恋人。",
    "category": "youth-family",
    "categoryName": "青春家庭"
  },
  {
    "id": "1994",
    "title": "钻石尘",
    "url": "./movie-1994.html",
    "cover": "./44.jpg",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "悬疑、爱情、奇幻",
    "tags": [
      "时间循环",
      "唯美虐恋",
      "记忆重置",
      "物哀美学"
    ],
    "oneLine": "在那场致命的暴风雪中，她为了救他一次次死亡，他却为了让她活下去，甘愿在自己的记忆里永远删除她的存在。",
    "category": "comedy-healing",
    "categoryName": "喜剧治愈"
  },
  {
    "id": "1995",
    "title": "少数派报告2015",
    "url": "./movie-1995.html",
    "cover": "./45.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2015",
    "genre": "科幻, 犯罪, 悬疑",
    "tags": [
      "预知犯罪",
      "赛博朋克",
      "反转",
      "阴谋论",
      "翻拍"
    ],
    "oneLine": "当预知系统预言“无罪”的警官将杀人，他必须在未来到来前杀死自己。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1996",
    "title": "死亡轮盘",
    "url": "./movie-1996.html",
    "cover": "./46.jpg",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "密室逃生",
      "心理博弈",
      "生存游戏"
    ],
    "oneLine": "六名陌生人醒来发现被困在一间旋转房间里，每五分钟轮盘转动一次，指向谁谁就必须死。",
    "category": "guochan-selection",
    "categoryName": "国产精选"
  },
  {
    "id": "1997",
    "title": "我将来看你",
    "url": "./movie-1997.html",
    "cover": "./47.jpg",
    "region": "中国台湾",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 同性",
    "tags": [
      "年代",
      "遗书",
      "乡愁",
      "跨越生死"
    ],
    "oneLine": "整理癌末父亲的遗物时，儿子发现了他藏了四十年的秘密：一张与男人的合影。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1998",
    "title": "我是恶魔内脏中的牺牲品",
    "url": "./movie-1998.html",
    "cover": "./48.jpg",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚、犯罪、宗教",
    "tags": [
      "邪教",
      "器官贩卖",
      "双重身份",
      "复仇",
      "血腥美学"
    ],
    "oneLine": "一个邪教组织声称“吃掉恶魔的内脏可获得永生”，而主角就是那个被反复“食用”的活体祭品。",
    "category": "suspense-crime",
    "categoryName": "悬疑犯罪"
  },
  {
    "id": "1999",
    "title": "铁血昆仑关",
    "url": "./movie-1999.html",
    "cover": "./49.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "genre": "战争 / 历史",
    "tags": [
      "抗战",
      "惨烈",
      "真实改编",
      "英雄",
      "爱国"
    ],
    "oneLine": "1939年昆仑关战役，一支弹尽粮绝的敢死队仅剩九人，却要面对日军一个装备精良的联队。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  },
  {
    "id": "2000",
    "title": "一路爱情",
    "url": "./movie-2000.html",
    "cover": "./50.jpg",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "爱情、公路、喜剧",
    "tags": [
      "拼车",
      "治愈",
      "邂逅",
      "小众景点",
      "文艺"
    ],
    "oneLine": "订单出错，急着去和前男友当面对质的她，被迫搭上了要去参加前女友婚礼的他。",
    "category": "hot-drama-list",
    "categoryName": "热播剧场"
  }
];

export default movies;
