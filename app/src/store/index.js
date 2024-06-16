// src/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personalInfo: [
      { column: "姓名", value: "林子鈞 - JimmyLin" },
      { column: "職位", value: "軟體工程師 (4年)" },
      { column: "年紀", value: "27歲" },
      { column: "E-mail", value: "jimmy5217123@gmail.com" },
      { column: "電話", value: "0987560128" },
      { column: "地址", value: "桃園市中壢區山東一路25號4樓" }
    ],
    experiences: [
      {
        company: '進金生能源有限股份公司',
        role: '前端工程師',
        duration: '2020 -2022',
        frontend: "Vue",
        backEnd: "Node.js, Express",
        project: [
          {
            name: "太陽能雲端監控中心",
            depiction: "現場維修人員查看系統，得知設備有無故障，故障點為何，客戶可得知盈利狀況"
          },
          {
            name: "士林區區域電能管理系統",
            depiction: "台北市政府產業發展局，使士林場域使用人員，可透過網站至台電需量競價平台，參與投標，可透過投標試算，預估投標價格，查詢最近執行紀錄(執行率(%)，回饋金額)"
          }
        ]
      },
      {
        company: '緯創軟體股份有限公司',
        role: '軟體工程師',
        duration: '2022-仍在職',
        frontend: "Angular, React",
        backEnd: "Node.js, Loopback, Python, Django",
        project: [
          {
            name: "IOT平台",
            depiction: "IOT公司產線機台，得知運行狀況"
          },
          {
            name: "問卷系統",
            depiction: "為了公司內部機敏資料，開發類似於Microsoft問卷表單系統"
          },
          {
            name: "ipm",
            depiction: ""
          },
          {
            name: "Issue copilot",
            depiction: "公司人員發現issue，填寫時可透過AI來幫你完成故障描述及分類"
          }
        ]
      }
    ],
    education: [
      { school: '元智大學', degree: '電機工程學系', year: '2015-2019' }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getPersonalInfo: state => state.personalInfo,
    getExperiences: state => state.experiences,
    getEducation: state => state.education
  }
});
