import { createStore } from 'vuex'

export default createStore({
  state: {
    news: [
      {
        id: 1,
        category: 'BOLA',
        date: 'Rabu, 30 Maret 2020',
        title: 'Gara-Gara Santiago Bernabeu, El Real Batal Datangkan Cristiano Ronaldo',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        specialTag: '',
        pic: 'Rectangle_55.png',
        isMedia: 'video'
      },
      {
        id: 2,
        category: 'BOLA',
        date: 'Rabu, 30 Maret 2020',
        title: 'Pangeran Biru Ingin Terus Ikuti Piala Menpora',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        specialTag: 'persib vs persiraja',
        pic: 'MaskGroup.png',
        isMedia: ''
      },
      {
        id: 3,
        category: 'SPORTAINMENT',
        date: 'Rabu, 30 Maret 2020',
        title: 'Bambang Pamungkas, Legenda Sepanjang Masa Persija dan Timnas Indonesia',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        specialTag: '',
        pic: 'Rectangle_286.png',
        isMedia: ''
      },
      {
        id: 4,
        category: 'PHOTO',
        date: 'Rabu, 28 Maret 2020',
        title: 'Ketenaran Pevoli Cantik Sabina Altynbekova Sempat Bikin Khawatir',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        specialTag: '',
        pic: 'Rectangle_287.png',
        isMedia: 'picture'
      },
      {
        id: 5,
        category: 'BALAP',
        date: 'Rabu, 29 Maret 2020',
        title: 'Jelang Seri Kedua MotoGP 2021: Rossi Sibuk',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        specialTag: '',
        pic: 'Rectangle_288.png',
        isMedia: ''
      },
      {
        id: 6,
        category: 'VIDEO',
        date: 'Rabu, 29 Maret 2020',
        title: 'Phoenix Suns Pecundangi Hornets',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        specialTag: '',
        pic: 'Rectangle_289.png',
        isMedia: 'video'
      }
    ]
  },
  getters: {
    getNews (state) {
      return state.news
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
