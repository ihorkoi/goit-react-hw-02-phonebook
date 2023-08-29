import { Component } from 'react';
import { Input } from './Filter.styled';

export class Filter extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <h2>Find your contacts by name</h2>
        <Input type="tel" onChange={onChange} />
      </>
    );
  }
}
