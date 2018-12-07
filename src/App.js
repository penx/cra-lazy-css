import React, { Component, Suspense } from 'react';
import './App.css';
import { Component1 } from './some-components';

const LazySection = React.lazy(() => import('./lazy'));

class App extends Component {
  state = {
    showSubSection: false
  }

  handleClick = () => {
    this.setState({showSubSection: true});
  }
  render() {
    const { showSubSection } = this.state;

    return (
      <div className="App">
        <Component1 />
        <button onClick={this.handleClick}>Load subsection</button>
        {showSubSection && <Suspense fallback={<div>Loading...</div>}>
          <LazySection />
        </Suspense>}
      </div>
    );
  }
}

export default App;
