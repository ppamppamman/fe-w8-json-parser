import JsonOutputPresentational from "./JsonOutputPresentational.js";

class JsonOutputContainer {
  constructor({ $target }) {
    //
    this.$target = $target;
    this.setState({ $target });
    const parseBtn = document.querySelector(".json-data__button");
    const jsonInput = document.querySelector(".json-data__input");
    parseBtn.addEventListener("click", () => {
      console.log(jsonInput.value);
      //여기에서의 input값을 POST할때 body에 넣어야할것같습니다.
    });
  }
  init() {
    // output
    this.postString().then((res) => {
      console.log(res);
      this.setState({ nextState: res }); // O
    });
  }
  setState({ $target }) {
    // this.state = nextState;
    this.render({ $target });
  }
  render({ $target }) {
    // 렌더가 쫘라락 된다.
    new JsonOutputPresentational({ $target });
  }

  async postString() {
    const response = await fetch("http://localhost:3030/parser");
    return response.json();
  }
}

export default JsonOutputContainer;
