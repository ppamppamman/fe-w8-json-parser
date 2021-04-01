class App {
  constructor({ $target }) {
    this.$target = $target;
    this.setState();
  }
  setState() {
    this.render();
  }
  render() {
    const $testApp = `
      <div class="section-container">
        <section class="json-data__section">
          <h1>JSON 데이터를 추가해주세요</h1>
          <textarea class="json-data__input"></textarea>
          <button class="json-data__button">분석하기</button>
        </section>
        <section class="arrow__section">👉</section>
        <section class="parse-data">
          <h1>분석결과</h1>
          <textarea class="parsed-data_output"></textarea>
        </section>
      </div>
    `;

    this.$target.insertAdjacentHTML("beforeend", $testApp);
  }
}

export default App;
