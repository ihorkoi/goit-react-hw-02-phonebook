import { Component } from 'react';
export class Filter extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <label>
        Filter
        <input type="tel" onChange={onChange} />
      </label>
    );
  }
}
