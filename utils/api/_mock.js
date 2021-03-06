Mock.mock(/getImageTextDatta/,{
        message: "查询成功",
        success: 0,
        entity: {
            projectEdit: { },
            businessEdit: { },
            resourceEdit: { },
            introEdit: {
                logo: "https://oe75tqwfd.qnssl.com/tmp/wxd3981676414fcf99.o6zAJs6RbWiQmVKAKNcO4u0glI3M.e7d11ce8c0f419f3dc1074c693990fb7.png",
                title: "北京中和黄埔教育科技有限公司",
                companyLabel: [ ],
                Intro: [
                    {
                        text: "123"
                    },
                    {
                        image: "https://oe75tqwfd.qnssl.com/tmp/wxd3981676414fcf99.o6zAJs9Pq8jeunlg_KgPlxHB95mE.4kUlveMajMdk7ac12bab7cff8ab619399556e64759a4.png"
                    }
                ],
                coreTeam: "100%",
                contactProgress: "0%",
                applyClient: "100%",
                value: "100%",
                caseProgress: "0%"
            }
        }
    }
)
Mock.mock(/messageList/,{
        message: "查询成功",
        success: 0,
        entity: {
            messageList: [
                {
                    userId: 90,
                    type: "项目提醒",
                    orderBy: 1,
                    messageId:1,
                    isOk:0,
                    content:'12312312312321321312123123123123213213123123121231231231232132131231231212312312312321321312312312312312'
                },
                {
                    userId: 90,
                    type: "投资提醒",
                    orderBy: 1,
                    messageId:1,
                    isOk:0,
                    content:'12312312312321321312312312',

                },
                {
                    userId: 90,
                    type: "资源留言",
                    orderBy: 1,
                    messageId:1,
                    isOk:0,
                    content:'12312312312321321312312312'
                },
                {
                    userId: 90,
                    type: "需求留言",
                    orderBy: 1
                },
                {
                    userId: 90,
                    type: "活动报名",
                    orderBy: 1
                }
            ],
        }
    })
Mock.mock(/ownMessageList/,{
        message: "查询成功",
        success: 0,
        entity: {
            messageList: [
                {
                    leaveTime: "2018-01-18 15:17:38",
                    leaveName: "北京中和黄埔教育科技有限公司11111111111111",
                    leaveContactName: "支付宝",
                    messageCount: 4,
                    leaveContactMobile: "15814852852",
                    objectContent: [
                        {
                            text: "所有人才都需要"
                        }
                    ],
                    leaveContent: "自己给他留的言",
                    linkManLogo: "https://oe75tqwfd.qnssl.com/tmp_39a9b0843640a870c8faf1074af7df7f.png",
                    cardId: 153,
                    objectName: "招人",
                    cardIsDel: 0,
                    objectId: 1231,
                    subjectName: "人才需求",
                    projectName:"项目名称：双智大屏",
                    intro:"项目概述一款服务于企业，为企业打造自己的智能产品...",
                    type:'2',
                    logo:'https://oe75tqwfd.qnssl.com/tmp_39a9b0843640a870c8faf1074af7df7f.png',

                    //下表
                },
                {
                    leaveTime: "2018-01-18 14:55:00",
                    leaveName: "北京中和黄埔教育科技有限公司",
                    leaveContactName: "支付宝",
                    messageCount: 4,
                    leaveContactMobile: "15814852852",
                    objectContent: [
                        {
                            text: "所有人才都需要"
                        }
                    ],
                    leaveContent: "支付宝招人",
                    linkManLogo: "https://oe75tqwfd.qnssl.com/tmp_39a9b0843640a870c8faf1074af7df7f.png",
                    cardId: 153,
                    objectName: "招人",
                    cardIsDel: 0,
                    objectId: 1231,
                    subjectName: "人才需求",
                    type:'1'
                },
                {
                    leaveTime: "2018-01-18 14:50:28",
                    leaveName: "北京中和黄埔教育科技有限公司",
                    leaveContactName: "支付宝",
                    messageCount: 4,
                    leaveContactMobile: "15814852852",
                    objectContent: [
                        {
                            text: "中和黄埔创始人陈明亮老师到创东方总部拜访肖水龙先生2016年12月19日中国著名投资人，创东方资本董事长，深圳众筹公会会长，中国最佳私募机构和投资人荣誉获得者肖水龙先生，以3亿估值投资中和黄埔，正式成为中和黄埔合伙人。关于肖水龙先生在肖水龙先生的带领下，创东方管理的创投基金、并购基金、产业基金累计超过150亿人民币，主要投资领域包括大IT、大消费、大健康、新制造（新材料制造和新智能制造）等四大主要板块，专注和擅长于“高科技、高成长、创新型、中小型”优秀企业的股权投资。创东方累计投资企业超过150家，其中近40家企业已经成功通过国内外IPO、新三板、并购方式退出。 现与我们合作双智大屏的各位合作商，我提供公司的销售渠道，帮助大家共同将双智大屏推广到更多领域"
                        }
                    ],
                    leaveContent: "支付宝到账1000000元",
                    linkManLogo: "https://oe75tqwfd.qnssl.com/tmp_39a9b0843640a870c8faf1074af7df7f.png",
                    cardId: 153,
                    objectName: "中和黄埔成长吧项目诚邀您合作",
                    cardIsDel: 0,
                    objectId: 1193,
                    subjectName: "资金需求"
                },
                {
                    leaveTime: "2018-01-17 15:29:11",
                    leaveName: "",
                    leaveContactName: "问问饿",
                    messageCount: 2,
                    leaveContactMobile: "18612235566",
                    objectContent: [
                        {
                            text: "您电脑附加费ID即佛为爱疯唧唧复唧唧及及护肤的晒黑覅U盾舒服舒服汇大海恢复还回复很对啊hi妇代会副挥洒 副is恢复还是会返回似乎发生负挥洒胡幅度和覅胡覅活动时会怀素护士会返回为啊US返回后湿地恢复死啊回复随货发牛您电脑附加费ID即佛为爱疯唧唧复唧唧及及护肤的晒黑覅U盾舒服舒服汇大海恢复还回复很对啊hi妇代会副挥洒 副is恢复还是会返回似乎发生负挥洒胡幅度和覅胡覅活动时会怀素护士会返回为啊US返回后湿地恢复死啊回复随货发牛您电脑附加费ID即佛为爱疯唧唧复唧唧及及护肤的晒黑覅U盾舒服舒服汇大海恢复还回复很对啊hi妇代会副挥洒 副is恢复还是会返回似乎发生负挥洒胡幅度和覅胡覅活动时会怀素护士会返回为啊US返回后湿地恢复死啊回复随货发牛您电脑附加费ID即佛为爱疯唧唧复唧唧及及护肤的晒黑覅U盾舒服舒服汇大海恢复还回复很对啊hi妇代会副挥洒 副is恢复还是会返回似乎发生负挥洒胡幅度和覅胡覅活动时会怀素护士会返回为啊US返回后湿地恢复死啊回复随货发牛您电脑附加费ID即佛为爱疯唧唧复唧唧及及护肤的晒黑覅U盾舒服舒服汇大海恢复还回复很对啊hi妇代会副挥洒 副is恢复还是会返回似乎发生负挥洒胡幅度和覅胡覅"
                        }
                    ],
                    leaveContent: "哦哦哦",
                    linkManLogo: "",
                    cardId: 145,
                    objectName: "1253",
                    cardIsDel: 1,
                    objectId: 1236,
                    subjectName: "资金需求"
                },
                {
                    leaveTime: "2018-01-17 15:26:39",
                    leaveName: "",
                    leaveContactName: "问问饿",
                    messageCount: 2,
                    leaveContactMobile: "18612235566",
                    objectContent: [
                        {
                            text: "您电脑附加费ID即佛为爱疯唧唧复唧唧及及护肤的晒黑覅U盾舒服舒服汇大海恢复还回复很对啊hi妇代会副挥洒 副is恢复还是会返回似乎发生负挥洒胡幅度和覅胡覅活动时会怀素护士会返回为啊US返回后湿地恢复死啊回复随货发牛您电脑附加费ID即佛为爱疯唧唧复唧唧及及护肤的晒黑覅U盾舒服舒服汇大海恢复还回复很对啊hi妇代会副挥洒 副is恢复还是会返回似乎发生负挥洒胡幅度和覅胡覅活动时会怀素护士会返回为啊US返回后湿地恢复死啊回复随货发牛您电脑附加费ID即佛为爱疯唧唧复唧唧及及护肤的晒黑覅U盾舒服舒服汇大海恢复还回复很对啊hi妇代会副挥洒 副is恢复还是会返回似乎发生负挥洒胡幅度和覅胡覅活动时会怀素护士会返回为啊US返回后湿地恢复死啊回复随货发牛您电脑附加费ID即佛为爱疯唧唧复唧唧及及护肤的晒黑覅U盾舒服舒服汇大海恢复还回复很对啊hi妇代会副挥洒 副is恢复还是会返回似乎发生负挥洒胡幅度和覅胡覅活动时会怀素护士会返回为啊US返回后湿地恢复死啊回复随货发牛您电脑附加费ID即佛为爱疯唧唧复唧唧及及护肤的晒黑覅U盾舒服舒服汇大海恢复还回复很对啊hi妇代会副挥洒 副is恢复还是会返回似乎发生负挥洒胡幅度和覅胡覅"
                        }
                    ],
                    leaveContent: "噢噢噢哦哦",
                    linkManLogo: "",
                    cardId: 145,
                    objectName: "1253",
                    cardIsDel: 1,
                    objectId: 1236,
                    subjectName: "资金需求"
                },
                {
                    leaveTime: "2018-01-17 15:21:07",
                    leaveName: "",
                    leaveContactName: "问问饿",
                    messageCount: 4,
                    leaveContactMobile: "18612235566",
                    objectContent: [
                        {
                            text: "所有人才都需要"
                        }
                    ],
                    leaveContent: "龙",
                    linkManLogo: "",
                    cardId: 145,
                    objectName: "招人",
                    cardIsDel: 1,
                    objectId: 1231,
                    subjectName: "人才需求"
                },
                {
                    leaveTime: "2018-01-17 15:20:17",
                    leaveName: "",
                    leaveContactName: "问问饿",
                    messageCount: 1,
                    leaveContactMobile: "18612235566",
                    objectContent: [
                        {
                            text: "发斯蒂芬斯蒂芬水电费"
                        }
                    ],
                    leaveContent: "的",
                    linkManLogo: "",
                    cardId: 145,
                    objectName: "textlogo",
                    cardIsDel: 1,
                    objectId: 1242,
                    subjectName: "资金需求"
                },
                {
                    leaveTime: "2018-01-16 10:10:20",
                    leaveName: "中和黄埔cc",
                    leaveContactName: "陈天霸",
                    messageCount: 4,
                    leaveContactMobile: "18233560441",
                    objectContent: [
                        {
                            text: "所有人才都需要"
                        }
                    ],
                    leaveContent: "你好 ",
                    linkManLogo: "https://touch.hopechina.cc/1001_image_1512704120500.jpg",
                    cardId: 34,
                    objectName: "招人",
                    cardIsDel: 0,
                    objectId: 1231,
                    subjectName: "人才需求"
                },
                {
                    leaveTime: "2018-01-16 09:37:35",
                    leaveName: "",
                    leaveContactName: "李四",
                    messageCount: 8,
                    leaveContactMobile: "13652487548",
                    objectContent: [
                        {
                            text: "你你是男是女"
                        },
                        {
                            image: "https://oe75tqwfd.qnssl.com/tmp_9c542ade9be0f9170ba6f8728b4fb61ff1f46a4012d4218f.jpg"
                        }
                    ],
                    leaveContent: "极乐空间快了家里",
                    linkManLogo: "",
                    cardId: 144,
                    objectName: "看着就着急",
                    cardIsDel: 1,
                    objectId: 1180,
                    subjectName: "资金需求"
                },
                {
                    leaveTime: "2018-01-12 17:20:59",
                    leaveName: "木艺居家具有限公司北京分部",
                    leaveContactName: "杨柳",
                    messageCount: 1,
                    leaveContactMobile: "187302",
                    objectContent: [
                        {
                            text: "给哈哈哈哈 "
                        },
                        {
                            image: "https://oe75tqwfd.qnssl.com/tmp_3b99e6d1a1438461aeab286f3bb1aa4d.jpg"
                        }
                    ],
                    leaveContent: "骨灰盒",
                    linkManLogo: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkqxY5Wm9DNZKINo5Xia10UKnyfb7updZOKkOkswxz1ibvZT8HNk7xwX6uoHLfqmV07efCNej1vSeg/0",
                    cardId: 74,
                    objectName: "将就将就",
                    cardIsDel: 0,
                    objectId: 1226,
                    subjectName: "智慧需求"
                }

            ],
        }
    }
)
