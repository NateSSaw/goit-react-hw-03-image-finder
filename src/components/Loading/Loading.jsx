import { Loading } from 'notiflix';
import { Component } from 'react';

export default class Load extends Component {
  componentDidUnmount() {
    Loading.remove();
  }
  render() {
    return Loading.standard();
  }
}
