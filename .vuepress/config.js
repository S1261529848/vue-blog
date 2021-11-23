module.exports = {
  "title": "幽淼淼",
  "description": "日常闲谈",
  "base": "/vue-blog/",
  "dest": "public",
  "port": "8083",
  "head": [
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }],
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "留言",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "关于",
        "icon": "reco-faq",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "待定",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "???",
        "link": "???"
      },
      {
        "title": "CSDN",
        "desc": "专业开发者社区",
        "avatar": "https://www.csdn.net/",
        "link": "https://www.csdn.net/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "幽淼淼",
    "authorAvatar": "/avatar.png",
    "record": "鲁ICP备2021037118号",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'whiteCat', 'miku', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
        ],
        clean: false,
        messages: { 
          welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。' 
        },
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ],
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      title: '公告',
      body: [
        {
          type: 'title',
          content: '欢迎加我的QQ/vx 🎉🎉🎉',
          style: 'text-aligin: center;',
        },
        {
          type: 'text',
          content: 'QQ/VX：1261529848/syh170208',
          style: 'text-align: center;'
        },
        {
          type: 'text',
          content: '喜欢的主题特效可以去个人信息',
          style: 'text-align: center;'
        },
        {
          type: 'text',
          content: '友链或疑问均可在留言板给我留言',
          style: 'text-align: center;'
        }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/blog/donate'
        },
      ]
    }],
     // 音乐播放器
     [
      "vuepress-plugin-meting",
      {
        meting: {
          // 网易
          server: "netease",
          // 读取歌单列表
          type: "playlist",
          mid: "3117118311",
        },
        // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded: true,
          // 颜色
          theme: "#f9bcdd",
          // 播放顺序为随机
          order: "random",
          // 初始音量
          volume: 0.1,
          // 关闭歌词显示
          lrcType: 0,
        },
        mobile: {
          // 手机端去掉cover图
          cover: false,
        },
      },
    ],
    //丝带效果
    [
      'ribbon',
      {
         size: 90, // width of the ribbon, default: 90
         opacity: 0.8, // opacity of the ribbon, default: 0.3
         zIndex: -1, // z-index property of the background, default: -1
      },
    ]
  ]

}