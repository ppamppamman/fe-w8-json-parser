import JsonOutputPresentational from "./JsonOutputPresentational.js";

class JsonOutputContainer {
  constructor({ $target }) {
    //
    this.$target = $target;

    this.state;
    this.setState({ $target });
    const $parseBtn = document.querySelector(".json-data__button");
    const $jsonInput = document.querySelector(".json-data__input");
    $parseBtn.addEventListener("click", () => {
      console.log($jsonInput.value);
      //여기에서의 input값을 POST할때 body에 넣어야할것같습니다.
      this.postString();
    });
  }
  init() {
    // output
    this.postString({}).then((res) => {
      console.log(res);
      this.setState({ nextState: res });
      // input에서 넘김=> 버튼누르면 input value가 post body로 넘어감 => 서버에서 파싱작업 해줌=> response오면 seState를 실행시켜서 리렌더링함
    });
  }
  setState({ $target, nextState }) {
    this.state = nextState;
    //여기서 target, 파싱된 데이터를 받아서 presentational에 렌더시 보내줄듯
    this.render({ $target });
  }
  render({ $target }) {
    // 렌더가 쫘라락 된다.
    new JsonOutputPresentational({ $target });
  }

  async postString(body) {
    const response = await fetch("http://localhost:3030/parser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return response.json();
  }
}

export default JsonOutputContainer;
