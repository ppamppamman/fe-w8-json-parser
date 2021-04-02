import JsonInputContainer from "../src/Components/JsonInput/JsonInputContainer.js";
import JsonOutputContainer from "../src/Components/JsonOutput/JsonOutputContainer.js";
import "./app.scss";

class App {
  constructor({ $target }) {
    this.$target = $target;

    // 컴포넌트 영역
    this.JsonInputContainer = null;
    this.JsonOutputContainer = null;

    this.setState({ $target });
  }

  init() {}

  setState({ $target }) {
    this.render({ $target });
  }

  render({ $target }) {
    const $arrowSection = /*html*/ `
      <section class="arrow__section">👉</section>
    `;

    this.JsonInputContainer = new JsonInputContainer({ $target });

    $target.insertAdjacentHTML("beforeend", $arrowSection);
    //beforeend => element 안에 가장 마지막 child. 약간 append 하는걸까?
    this.JsonOutputContainer = new JsonOutputContainer({ $target });
  }

}

export default App;
