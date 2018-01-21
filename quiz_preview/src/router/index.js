import Vue from 'vue'
import Router from 'vue-router'
import QuizList from '@/components/QuizList'
import QuizDetail from '@/components/QuizDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QuizList',
      component: QuizList
    },
    {
      path: '/quiz-detail/:id',
      name: 'QuizDetail',
      component: QuizDetail
    }
  ]
})
