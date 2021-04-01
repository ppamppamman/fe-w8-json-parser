import JsonOutputPresentational from "./JsonOutputPresentational.js";

class JsonOutputContainer {
  constructor({ $target }) {
    // 돔
    this.$target = $target;

    // 컴포넌트
    this.JsonOutputPresentational = null;

    // 상태
    this.state = {
      jsonInput: null, // 유저가 입력한 json처럼 생긴 스트링 => 버튼 클릭시 넘어옴
      parsedJsonInput: null, // this.state.jsonInput => 파서를 통해서 파싱하고 return 된 결과 값
    };

    this.setState({});

    // 레거시
    // const $parseBtn = document.querySelector(".json-data__button");
    // const $jsonInput = document.querySelector(".json-data__input");
    // $parseBtn.addEventListener("click", () => {
    //   console.log($jsonInput.value);
    //   //여기에서의 input값을 POST할때 body에 넣어야할것같습니다.
    //   this.postString();
    // });
  }

  setState(nextState) {
    console.log(nextState);
    if (nextState.type === "JSON_INPUT") {
      this.state.jsonInput = nextState.value;
      this.onParseButtonClicked(); // 보낸다.
    } else if (nextState.type === "PARSED_JSON_INPUT") {
      this.state.parsedJsonInput = nextState.value;
    }

    //여기서 target, 파싱된 데이터를 받아서 presentational에 렌더시 보내줄듯
    this.render();
  }

  render() {
    // 렌더가 쫘라락 된다.
    this.JsonOutputPresentational = new JsonOutputPresentational({
      $target: this.$target,
      parsedJsonInput: this.state.parsedJsonInput,
    });
  }

  onParseButtonClicked() {
    // output
    this.postString(this.state.jsonInput).then((res) => {
      console.log(res);

      this.setState({ nextState: res });
      // input에서 넘김=> 버튼누르면 input value가 post body로 넘어감 => 서버에서 파싱작업 해줌=> response오면 seState를 실행시켜서 리렌더링함
    });
  }

  async postString(body) {
    console.log(body);
    const response = await fetch("http://localhost:3030/parser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return response.json();
  }
}

export default JsonOutputContainer;
