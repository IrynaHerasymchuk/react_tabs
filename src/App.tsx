import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { title, id, content } = this.state.selectedTab;

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${title}`}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={id}
          onTabSelected={this.onTabSelected}
        />

        <p className="tabs__content">
          {content}
        </p>
      </div>
    );
  }
}

export default App;
