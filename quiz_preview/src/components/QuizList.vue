<template>
  <section class="quiz-list-section">



    <md-table class="quiz-list-card" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Lista Quizów</h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head class="hide-cell-md" md-numeric>Numer</md-table-head>
        <md-table-head>Nazwa</md-table-head>
        <md-table-head>Kategoria</md-table-head>
        <md-table-head class="hide-cell-md">Ilość pytań</md-table-head>
        <md-table-head></md-table-head>
      </md-table-row>

      <md-table-row v-for="(quiz, index) in quizData" :key="quiz._id">
        <md-table-cell class="hide-cell-md" md-numeric>{{index+1}}</md-table-cell>
        <md-table-cell>{{quiz.name}}</md-table-cell>
        <md-table-cell class="hide-cell-md">{{quiz.category}}</md-table-cell>
        <md-table-cell class="hide-cell-md">{{quiz.questions.length}}</md-table-cell>
        <md-table-cell><md-button type="button" class="md-raised md-accent"><router-link style="text-decoration: none" :to="`/quiz-detail/${quiz._id}`" >Rozwiąż</router-link></md-button></md-table-cell>
      </md-table-row>
    </md-table>

    <!-- <ul>
      <li v-for="quiz in quizData" :key="quiz._id"><router-link :to="`/quiz-detail/${quiz._id}`" >{{quiz.name}} {{quiz._id}}</router-link></li>
    </ul> -->

  </section>
</template>

<script>
  export default {
    name: 'QuizList',
    data: function() {
      return {
        quizData:[]
      }
    },
    mounted: function() {
        this.getList();
    },
    methods: {
      getList: function() {
        this.$http.get('http://localhost:3000/quiz/list/').then(function(response){
          this.quizData = response.body;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .quiz-list-section{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .quiz-list-card{
      width: 1200px;
      margin: 100px 0;

      @media(max-width: 1220px){
        width: 100%;
        padding: 20px;
        margin: 20px;
      }
    }

    .hide-cell-md{
      @media(max-width: 730px){
        display: none;
      }
    }
  }
</style>
