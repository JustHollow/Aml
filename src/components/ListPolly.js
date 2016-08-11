import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
/**
 * Sortable List module
 * A sortable list component using html5 drag and drop api.
**/
export default class SortableList extends Component {

  constructor (props) {
    super(props)
    let placeholder = document.createElement('li');
    placeholder.className = 'placeholder';
    this.state = { data: this.props.data, placeholder: placeholder, edit:false }
  }

  /**
   * On drag start, set data.
  **/
  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget);
  }

  /**
   * On drag end, update the data state.
  **/
  dragEnd() {
    this.dragged.style.display = 'block';
    this.dragged.parentNode.removeChild(this.state.placeholder);
    let data = this.state.data;
    let from = Number(this.dragged.dataset.id);
    let to = Number(this.over.dataset.id);
    if(from < to) to--;
    if(this.nodePlacement == 'after') to++;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});
    localStorage.setItem('Colors', data);
  }

  /**
   * On drag over, update items.
  **/
  dragOver(e) {
    e.preventDefault();
    this.dragged.style.display = 'none';
    if(e.target.className == 'placeholder') return;
    this.over = e.target;
    let relY = e.clientY - this.over.offsetTop;
    let height = this.over.offsetHeight / 2;
    let parent = e.target.parentNode;
    if(relY > height) {
      this.nodePlacement = 'after';
      parent.insertBefore(this.state.placeholder, e.target.nextElementSibling);
    }
    else if(relY < height) {
      this.nodePlacement = 'before'
      parent.insertBefore(this.state.placeholder, e.target);
    }
  }
  DoubleClick(target){
    console.log(target);

  }

  Edit(){
    this.state.edit? this.setState({edit:false}) : this.setState({edit:true});
  }

  handleChange(target, e){
    let data = this.state.data;
    data[target] = e.target.value;
    this.setState({data: data});
    localStorage.setItem('Colors', data);
  }

  render() {
    const { data } = this.state;
    const listItems = data.map((item, i) => {
      return (
        <li className='list-group-item' data-id={i} key={i}
          draggable='true'
          onDragEnd={this.dragEnd.bind(this)}
          onDragStart={this.dragStart.bind(this)}
          onDoubleClick={this.DoubleClick.bind(this)}>
          {item}
        </li>
      )
    })
    const listItemsEdit = data.map((item, i) => {
      return (
        <li className='list-group-item' data-id={i} key={i}
          draggable='true'
          onDragEnd={this.dragEnd.bind(this)}
          onDragStart={this.dragStart.bind(this)}
          onDoubleClick={this.DoubleClick.bind(this)}>
          <input className='form-control' ref={'inp'+i} data-id={i} key={i} value={item} onChange={this.handleChange.bind(this, i)}/>
        </li>
      )
    })

    return (
      <div>
        <ul className='list-group' onDragOver={this.dragOver.bind(this)}>
          {this.state.edit ? listItemsEdit: listItems}
        </ul>
        <Button  bsStyle='success' onClick={this.Edit.bind(this)}>Edit</Button>
      </div>
    )
  }
}
