import * as React from 'react';
import { Component } from 'react';
import { reactify } from '@extjs/reactor';

const Panel = reactify('panel') as any

type State = { content: string }

export default class App extends Component<any, State> {
  constructor(p, c) {
    super(p, c)

    this.state = {
      content: "Splitter on left. Wait 5 seconds..."
    }

    setTimeout(() => this.setState({
      content: "Splitter now on right"
    }), 5000)
  }

  render() {
    return (
      <Panel layout="border">
        <Panel region="center"/>
        <Panel
          region="east"
          collapsible={true}
          split={true}
          minWidth={400}>East: {this.state.content}</Panel>
        <Panel
          region="west"
          collapsible={true}
          split={true}
          minWidth={400}>West: not affected.</Panel>
      </Panel>
    )
  }
}

