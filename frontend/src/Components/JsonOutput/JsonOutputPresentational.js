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
            <div class="parse-data_output"><pre>${
              this.parsedJsonInput ? JSON.stringify(this.parsedJsonInput) : "" //값이 없을때 null로 뜨길래 일단 이렇게 처리해뒀는데 괜찮을까요 ?
            }</pre></div>
        </section> 
        `;
    $target.insertAdjacentHTML("beforeend", $outputSection);
  }
}

export default JsonOutputPresentational;
