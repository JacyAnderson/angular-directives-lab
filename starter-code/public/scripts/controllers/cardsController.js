angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);


CardsController.$inject('$http');
function CardsController($http){
  var vm = this;
  vm.questionsList = []

  function getCards() {
    console.log('in getCards');
    $http
      .get('https://shielded-forest-41789.herokuapp.com/api/flashcards')
      .then(function(response.data) {
        console.log(response.data);
        vm.questionsList = response.data;
      });
  }



  //   {question: "What is Batman's guilty pleasure?"},
  //   {question: "I'm sorry professor, I couldn't complete my homework because _________."},
  //   {question: "I get by with a little help from _________."},
  //   {question: "_________. It's a trap!"},
  //   {question: "The class field trip was completely ruined by _________."},
  //   {question: "What's my secret power?"}
  // ]
}
