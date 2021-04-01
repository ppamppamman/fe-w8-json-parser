class JsonOutputPresentational {
  constructor({ $target }) {
    this.init({ $target });
  }
  init({ $target }) {
    this.render({ $target });
  }
  render({ $target }) {
    //
    const $outputSection = /* html */ `
        <section class="parse-data__section">
            <h1>분석결과</h1>
            <textarea class="parse-data_output"></textarea>
        </section> 
        `;
    $target.insertAdjacentHTML("beforeend", $outputSection);
  }
}

export default JsonOutputPresentational;
