import JsonInputPresentational from "./JsonInputPresentational.js";

class JsonInputContainer {
  constructor({ $target, onParseBunttonClick }) {
    this.JsonInputPresentational = null;
    this.onParseBunttonClick = onParseBunttonClick;

    this.init({ $target });
  }

  init({ $target }) {
    this.render({ $target });
  }

  // 만약 모델이 있었으면, 모델을 옵저버하는게 베스트

  render({ $target }) {
    this.JsonInputPresentational = new JsonInputPresentational({
      $target,
      onParseBunttonClick: this.onParseBunttonClick,
    });
  }
}

export default JsonInputContainer;
