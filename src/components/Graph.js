import React, { Component } from 'react'
import {LineChart, BarChart} from 'react-d3-basic'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {GRAPH_BAR, GRAPH_LINE} from '../actions/PageActions'
import { Button } from 'react-bootstrap'



export default class Graph extends Component {
  constructor(){
    super()
    this.state = {type: 'line'};
  }
  handleClick(){
    let { GRAPH_BAR, GRAPH_LINE } = this.props.pageActions
    const { graph } = this.props;
    graph.type == 'line' ? GRAPH_BAR() : GRAPH_LINE()
  }
  toGraph(Array) {
    let total = [], i=0;
    for (let item of Array) {
      total[i] = {value: item, index: i};
      i++;
    }
    return total
  }
  render() {
    const { graph } = this.props;
    let chartData = this.toGraph([5,10,7,11,5,13,10,5,11,5,12,8]),
      width = 700,
      height = 300,
      margins = {left: 100, right: 100, top: 50, bottom: 50},
      title = 'User sample',
      // chart series,
      // field: is what field your data want to be selected
      // name: the name of the field that display in legend
      // color: what color is the line
      chartSeries = [
        {
          field: 'value',
          name: 'Graph',
          color: '#ff7f0e'
        }
      ],
      // your x accessor
      x = function(d) {
        return d.index;
      },
      xScale = 'ordinal',
      xLabel = 'index',
      yLabel = 'value',
      yTicks = [10, ''];
    return (
      <div>
        {graph.type == 'line' ?
          <LineChart
            showXGrid= {false}
            showYGrid= {false}
            margins= {margins}
            title={title}
            data={chartData}
            width={width}
            height={height}
            chartSeries={chartSeries}
            x={x}
          />
          :
            <BarChart
              title= {title}
              data= {chartData}
              width= {width}
              height= {height}
              chartSeries = {chartSeries}
              x= {x}
              xLabel= {xLabel}
              xScale= {xScale}
              yTicks= {yTicks}
              yLabel = {yLabel}
            />}
        <Button bsStyle='success' onClick={this.handleClick.bind(this)}>Change view</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    graph: state.graph
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators({GRAPH_BAR, GRAPH_LINE}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph)
