<template>
  <section class="quiz-list-section">

    <md-table class="quiz-list-card" md-card>
      <md-table-toolbar>
        <div class="table-header">
          <h2 class="md-display-3">Lista Quizów</h2>
          <md-field class="select-fieldset">
            <label for="search">Sortuj po kategorii</label>
            <md-select v-model="selectedCategory" name="search" id="search">
              <md-option v-for="(category, index) in categories" :key="index" :value="category.name">{{category.name}}</md-option>
            </md-select>
            </md-field>
        </div>        
      </md-table-toolbar>


      <div class="errors-box">
        <span v-if="quizzesfilterBy(selectedCategory).length === 0" class="md-display-1">Brak wyników :/</span>
      </div>


      <md-table-row v-if="quizzesfilterBy(selectedCategory).length > 0">
        <md-table-head class="hide-cell-md" md-numeric>Numer</md-table-head>
        <md-table-head>Nazwa</md-table-head>
        <md-table-head>Kategoria</md-table-head>
        <md-table-head class="hide-cell-md">Ilość pytań</md-table-head>
        <md-table-head></md-table-head>
      </md-table-row>

      <md-table-row v-for="(quiz, index) in quizzesfilterBy(selectedCategory)" :key="quiz._id">
        <md-table-cell class="hide-cell-md" md-numeric>{{index+1}}</md-table-cell>
        <md-table-cell>{{quiz.name}}</md-table-cell>
        <md-table-cell class="hide-cell-md">{{quiz.category}}</md-table-cell>
        <md-table-cell class="hide-cell-md">{{quiz.questions.length}}</md-table-cell>
        <md-table-cell><router-link style="text-decoration: none" :to="`/quiz-detail/${quiz._id}`" ><md-button type="button" class="md-raised md-accent">Rozwiąż</md-button></router-link></md-table-cell>
      </md-table-row>
    </md-table>
  </section>
</template>

<script>
  export default {
    name: 'QuizList',
    data: function() {
      return {
        selectedCategory: '',
        quizzes:[],
        categories: []
      }
    },
    mounted: function() {
        this.getQuizList();
        this.getCategoryList();
    },
    methods: {
      getCategoryList: function() {
        this.$http.get('http://80.211.200.144:3000/category/list/').then(function(response){
          this.categories = response.body;
        });
      },
      getQuizList: function() {
        this.$http.get('http://80.211.200.144:3000/quiz/list/').then(function(response){
          this.quizzes = response.body;
        });
      },
      quizzesfilterBy(category) {
        if(!category){
          return this.quizzes;
        }
        return this.quizzes.filter(quiz => quiz.category === category)
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

    .select-fieldset{
      width: 280px;
      // border: 1px solid red;
      margin: 50px 0;
      display: block;
      // width: 100%;
    }

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

    .errors-box{
      padding: 12px;
    }
  }
</style>
