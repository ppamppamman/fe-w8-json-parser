import JsonInputPresentational from "./JsonInputPresentational.js";

class JsonInputContainer {
  constructor({ $target }) {
    this.JsonInputPresentational = null;
    this.init({ $target });
  }
  init({ $target }) {
    this.render({ $target });
  }

  render({ $target }) {
    this.JsonInputPresentational = new JsonInputPresentational({ $target });
  }
}

export default JsonInputContainer;
