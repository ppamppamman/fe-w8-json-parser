import JsonInputPresentational from "./JsonInputPresentational.js";
import "./jsonInput.scss";

class JsonInputContainer {
  constructor({ $target }) {
    this.JsonInputPresentational = null;

    const $JsonInputArea = document.createElement("div");
    this.$target = $JsonInputArea;
    $target.append(this.$target);

    this.render();
  }

  // 만약 모델이 있었으면, 모델을 옵저버하는게 베스트

  render() {
    this.JsonInputPresentational = new JsonInputPresentational({
      $target: this.$target,
      onParseBunttonClick: this.postJsonInputString,
      // onParseBunttonClick: this.onParseBunttonClick,
    });
  }

  async postJsonInputString(body) {
    const response = await fetch("http://localhost:3333/data/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: body }),
    });
    return response.json();
  }
}

export default JsonInputContainer;
