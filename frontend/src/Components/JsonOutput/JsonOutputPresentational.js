class JsonOutputPresentational {
  constructor({ $target, parsedJsonInput, onDataParseBtnClick }) {
    this.render({ $target, parsedJsonInput, onDataParseBtnClick });
  }

  render({ $target, parsedJsonInput, onDataParseBtnClick }) {
    $target.innerHTML = ""; // 초기화
    const $outputSection = /* html */ `
      <section class="parse-data__section">
          <h1>분석결과</h1>
          <div class="parse-data_output"><pre>${
            parsedJsonInput ? parsedJsonInput : "" //값이 없을때 null로 뜨길래 일단 이렇게 처리해뒀는데 괜찮을까요 ?
          }</pre></div>
      </section> 
    `;
    $target.insertAdjacentHTML("beforeend", $outputSection);

    const $dataParseBtn = document.querySelector(".json-data-parse__button");
    $dataParseBtn.addEventListener("click", () => {
      onDataParseBtnClick();
    });
  }
}

export default JsonOutputPresentational;
