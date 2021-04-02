class JsonInputPresentational {
  constructor({ $target, onParseBunttonClick }) {
    this.init({ $target, onParseBunttonClick });
  }
  init({ $target, onParseBunttonClick }) {
    this.render({ $target });

    const $dataAddBtn = $target.querySelector(".json-data-input__button");
    const $dataParseBtn = $target.querySelector(".json-data-parse__button");

    const $jsonInput = $target.querySelector(".json-data__input");

    $dataAddBtn.addEventListener("click", () => {
      onParseBunttonClick($jsonInput.value);
      // $dataParseBtn.style.display = "block";
      $dataParseBtn.disabled = false;
    });

    $jsonInput.addEventListener("change", () => {
      $dataParseBtn.disabled = true;
    });
  }

  render({ $target }) {
    const $inputSection = /*html*/ `
      <section class="json-data__section">
        <h1>JSON 데이터를 추가해주세요</h1>
        <textarea class="json-data__input"></textarea>
        <button class="json-data-input__button">데이터 추가하기</button>
        <button class="json-data-parse__button">데이터 분석하기</button>
      </section>
    `;

    $target.insertAdjacentHTML("beforeend", $inputSection);
  }
}

export default JsonInputPresentational;
