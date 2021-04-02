import JsonOutputPresentational from "./JsonOutputPresentational.js";
import "./jsonOutput.scss";

import analyze from "../../util/analyzer.js";

class JsonOutputContainer {
  constructor({ $target }) {
    // 돔
    const $JsonOutputArea = document.createElement("div");
    this.$target = $JsonOutputArea;
    $target.append(this.$target);

    // 컴포넌트
    this.JsonOutputPresentational = null;

    // 상태
    this.state = {
      jsonInput: null, // 유저가 입력한 json처럼 생긴 스트링 => 버튼 클릭시 넘어옴
      parsedJsonInput: null, // this.state.jsonInput => 파서를 통해서 파싱하고 return 된 결과 값
    };

    this.setState({});
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
    this.JsonOutputPresentational = new JsonOutputPresentational({
      $target: this.$target,
      parsedJsonInput: this.state.parsedJsonInput,
      onDataParseBtnClick: this.onDataParseBtnClick.bind(this),
    });
  }

  async onDataParseBtnClick() {
    const response = await fetch("http://localhost:3333/data/").then(
      async (res) => {
        return await res.json();
      }
    );
    const parseTarget = response.data;
    this.setState({ type: "PARSED_JSON_INPUT", value: analyze(parseTarget) });
  }
}

export default JsonOutputContainer;
