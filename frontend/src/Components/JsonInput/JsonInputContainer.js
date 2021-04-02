import API from "../../util/api/api.js";

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
    });
  }

  async postJsonInputString(body) {
    API.post.JsonInputString(body);
  }
}

export default JsonInputContainer;
