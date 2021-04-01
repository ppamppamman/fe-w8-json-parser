class JsonInputPresentational {
  constructor({ $target }) {
    this.init({ $target });
  }
  init({ $target }) {
    this.render({ $target });
  }
  render({ $target }) {
    const $inputSection =
      /*html*/
      `<section class="json-data__section">
    <h1>JSON 데이터를 추가해주세요</h1>
    <textarea class="json-data__input"></textarea>
    <button class="json-data__button">분석하기</button>
  </section>`;

    $target.insertAdjacentHTML("beforeend", $inputSection);
  }
}

export default JsonInputPresentational;
