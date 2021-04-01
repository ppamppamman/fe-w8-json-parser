import JsonInputContainer from "../src/Components/JsonInput/JsonInputContainer.js";
import JsonOutputContainer from "../src/Components/JsonOutput/JsonOutputContainer.js";
import "./app.scss";

class App {
  constructor({ $target }) {
    this.$target = $target;
    this.setState({ $target });
  }
  setState({ $target }) {
    this.render({ $target });
  }
  render({ $target }) {
    const $arrowSection =
      /*html*/
      `<section class="arrow__section">👉</section>`;

    new JsonInputContainer({ $target });
    $target.insertAdjacentHTML("beforeend", $arrowSection);
    //beforeend => element 안에 가장 마지막 child. 약간 append 하는걸까?
    new JsonOutputContainer({ $target });
  }
}

export default App;
