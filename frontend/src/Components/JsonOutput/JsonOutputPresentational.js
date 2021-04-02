class JsonOutputPresentational {
  constructor({ $target, parsedJsonInput }) {
    // isFirstRender }) {
    this.parsedJsonInput = parsedJsonInput;
    // this.init({ $target }); //, isFirstRender });
    this.render({ $target });
  }

  // init({ $target }) {
  //, isFirstRender }) {
  // if (isFirstRender) this.render({ $target });
  // else console.log("멈춰!");
  // }
  render({ $target }) {
    $target.innerHTML = ""; // 초기화
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
