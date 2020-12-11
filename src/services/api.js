import axios from "axios";

export const getAllCards = function () {
  axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
    res.data.results.map((questionItem, index) => {
      const answer = questionItem.correct_answer;
      const options = [...questionItem.incorrect_answers, answer];
      return {
        id: `${index}-${Date.now()}`,
        question: questionItem.question,
        answer: answer,
        options: options.sort(() => Math.random() - 0.5),
      };
    });
  });
};

// const api = {
//   cards: {
//     getAllCards: () => axios.get("https://opentdb.com/api.php?amount=10"),
//   },
// };

// console.log(api.cards.getAllCards());
