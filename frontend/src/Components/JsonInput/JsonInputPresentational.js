class JsonInputPresentational {
  constructor({ $target, onParseBunttonClick }) {
    this.init({ $target, onParseBunttonClick });
  }
  init({ $target, onParseBunttonClick }) {
    this.render({ $target });

    const $parseBtn = $target.querySelector(".json-data__button");
    const $jsonInput = $target.querySelector(".json-data__input");

    $parseBtn.addEventListener("click", () => {
      // console.log($jsonInput.value);
      //여기에서의 input값을 POST할때 body에 넣어야할것같습니다.

      // this.postString(); // postString으로 함수를 전달
      onParseBunttonClick($jsonInput.value); // postString으로 함수를 전달
    });
  }

  render({ $target }) {
    const $inputSection = /*html*/ `
      <section class="json-data__section">
        <h1>JSON 데이터를 추가해주세요</h1>
        <textarea class="json-data__input"></textarea>
        <button class="json-data__button">분석하기</button>
      </section>
    `;

    $target.insertAdjacentHTML("beforeend", $inputSection);
  }
}

export default JsonInputPresentational;
