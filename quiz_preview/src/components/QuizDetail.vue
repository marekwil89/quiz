<template>
  <section class="quiz-detail-section">
   
<md-dialog :md-active.sync="showScore">
      <md-dialog-title>Twój wynik to:</md-dialog-title>
      <md-dialog-content class="dialog-content">
        <h2 class="md-display-3">{{score}}/{{quizDetail.questions.length}}</h2>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showScore = false">Zamknij</md-button>
        <router-link to="/"><md-button class="md-accent">Zobacz inne Quizy</md-button></router-link>
      </md-dialog-actions>
    </md-dialog>

   <md-card class="quiz-detail-card">
      <md-card-header>
        <h3 class="md-title">Nazwa quizu: {{quizDetail.name}}</h3>
        <h4 class="md-subheading">Kategoria: {{quizDetail.category}}</h4>
        <h4 v-if="quizDetail.questions" class="md-subheading">Pytanie nr: {{selectedTab+1}}/{{quizDetail.questions.length}}</h4>
      </md-card-header>
      <md-card-content>
        <form v-on:submit="onSubmit()" name="quiz-form">
          <article v-if="selectedTab === index" v-for="(question, index) in quizDetail.questions" :key="question._id" class="question-box">
            <h2 class="md-display-2">{{question.text}}</h2>
            <fieldset class="radio-box">
						  <md-radio class="radio-input" v-for="answer in question.answers" :key="answer._id" :id="answer._id" :value="JSON.stringify(answer)" v-model="question.selectedAnswer" >{{ answer.text }}</md-radio>
            </fieldset>
            <div class="buttons-box">
              <md-button type="button" v-if="selectedTab !== 0" @click="backTab()" class="md-raised md-primary">Poprzednie pytanie</md-button>
              <md-button type="button" :disabled="!question.selectedAnswer" v-if="selectedTab !== quizDetail.questions.length-1"  @click="nextTab()" class="md-raised md-accent">Następne pytanie</md-button>
              <md-button type="submit" :disabled="!question.selectedAnswer" v-if="selectedTab === quizDetail.questions.length-1" class="md-raised md-accent">Sprawdź odpowiedzi</md-button>
            </div>
          </article>
        </form>
      </md-card-content>
    </md-card>
  </section>
</template>

<script>
  export default {
    name: 'QuizDetail',
    data() {
      return {
        selectedTab: 0,
        quizDetail: {},
        showScore: false,
        score: 0
      }
    },
    mounted: function() {
        this.getDetail();
    },
    methods: {
      calculateScore(){
        this.score = 0;
        if(this.quizDetail.questions){
          this.quizDetail.questions.forEach((value) => {
            let answer = JSON.parse(value.selectedAnswer);
            if(answer.correct){
              this.score++;
            }
          })
        }
      },
      onSubmit: function(e){
        e.preventDefault()
        this.calculateScore();
        this.showScore = true;
        this.selectedTab = 0;
      },
      getDetail: function() {
        var paramId = this.$route.params.id;
        this.$http.get('http://localhost:3000/quiz/detail/' + paramId).then(function(response){
          this.quizDetail = response.data;
        });
      },
      nextTab() {
        if (this.selectedTab < this.quizDetail.questions.length - 1) {
          this.selectedTab++
        }
      },
      backTab() {
        if (this.selectedTab > 0) {
          this.selectedTab--
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .quiz-detail-section{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .quiz-detail-card{
      width: 1000px;
      margin: 100px 0;

      @media(max-width: 1020px){
        width: 100%;
        padding: 20px;
        margin: 20px;
      }

      .radio-box{
        display: flex;
        flex-direction: column;


        .radio-input{
          margin: 20px 0;
        }        
      }

      .buttons-box{
        margin: 50px 0 0 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
    }
  }
</style>
