import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value="Add to todo list" />
        </form>
      </div>
    );
  }

  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = event => {
    //ページ遷移を止める
    event.preventDefault();
    //親コンポーネントから受けとったstateを変更するメソッドを実行する
    //受け取ったものなのでpropsの中にある
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}
