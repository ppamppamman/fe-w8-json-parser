import JsonOutputPresentational from "./JsonOutputPresentational.js";
import "./jsonOutput.scss";

class JsonOutputContainer {
  constructor({ $target }) {
    // 돔
    // this.$target = $target;
    const $JsonOutputArea = document.createElement("div");
    this.$target = $JsonOutputArea;
    $target.append(this.$target);

    // 컴포넌트
    this.JsonOutputPresentational = null;

    // 상태
    this.state = {
      jsonInput: null, // 유저가 입력한 json처럼 생긴 스트링 => 버튼 클릭시 넘어옴
      parsedJsonInput: null, // this.state.jsonInput => 파서를 통해서 파싱하고 return 된 결과 값
      // isFirstRender: true,
    };

    // this.setState({ isFirstRender: this.state.isFirstRender });
    this.setState({});
  }

  setState(nextState) {
    console.log(nextState);
    if (nextState.type === "JSON_INPUT") {
      this.state.jsonInput = nextState.value;
      this.onParseButtonClicked(); // 보낸다.
      // this.state.isFirstRender = false;
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
      // isFirstRender: this.state.isFirstRender,
    });
  }

  onParseButtonClicked() {
    // output
    this.postString(this.state.jsonInput).then((res) => {
      console.log(res);
      this.setState({ nextState: res });
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
