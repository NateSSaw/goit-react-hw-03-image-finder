import { Loading } from 'notiflix';
import { Component } from 'react';

export default class Load extends Component {
  componentDidUpdate() {
    Loading.remove();
  }
  render() {
    return Loading.standard();
  }
}
