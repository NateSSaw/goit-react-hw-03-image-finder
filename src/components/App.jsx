import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    isShowModal: false,
    searchImage: '',
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  handleSearch = searchImage => {
    this.setState({ searchImage });
  };

  render() {
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
      </>
    );
  }
}
