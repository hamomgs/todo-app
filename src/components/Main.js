import React, {Component} from 'react'
import * as S from '../assets/styles/styles.js'
import { ToDoItem } from './ToDoItem.js'

export default class Main extends Component {
  state = {
    task: '',
    taskList:
      localStorage.getItem('taskList') !== null
        ? JSON.parse(localStorage.getItem('taskList'))
        : [
            {
              task: 'Passear com o dog',
              id: 9181829373,
              completed: false
            },
            {
              task: 'Levar o lixo',
              id: 1746848554,
              completed: true
            },
            {
              task: 'Tomar banho',
              id: 68468434554,
              completed: true
            },
            {
              task: 'Ler livro',
              id: 2368423554,
              completed: false
            }
          ],
    order: localStorage.getItem('order') !== null ? JSON.parse(localStorage.getItem('order')) : 'column',
    edit: '',
    draggable: true
  }

  updateLocalStorage = () => {
    localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
    localStorage.setItem('order', JSON.stringify(this.state.order))
  }

  handleChangeNewTask = e => {
    this.setState({
      task: e.target.value
    })
    let alert = document.querySelector('#alert')
    let input = document.querySelector('.createTaskInput')
    alert.innerHTML = ''
    input.style.borderColor =  '#7f5af0'
  }

  handleClickAddTask = () => {
    const {task} = this.state
    if (!task.match(/^[ \t]+$/) && task !== '') {
      this.setState({
        taskList: this.state.taskList.concat({
          task: this.state.task.trim(),
          id: Math.random(),
          completed: false
        }),
        task: ''
      })
      this.updateLocalStorage()
    } else {
      let alert = document.querySelector('#alert')
      let input = document.querySelector('.createTaskInput')
      alert.innerHTML = 'Você não pode criar tarefas vazias.'
      input.style.borderColor =  '#f00c'
    }
  }

  handleClickClearAll = () => {
    this.setState({
      taskList: []
    })
  }

  handleClickDeleteTask = id => {
    this.setState(state => {
      return {taskList: state.taskList.filter(item => item.id !== id)}
    })
  }

  handleClickCheck = (index, item, id) => {
    const {taskList} = this.state
    taskList[index].completed = !item.completed
    this.setState({
      taskList: taskList
    })
    this.select()
  }

  handleClickFilterCompleted = () => {
    this.state.taskList.forEach(item => {
      if (!item.completed) {
        document.getElementById(item.id).style.display = 'none'
      } else if (item.completed) {
        document.getElementById(item.id).style.display = 'flex'
      }
    })
  }

  handleClickFilterUncompleted = () => {
    this.state.taskList.forEach(item => {
      if (!item.completed) {
        document.getElementById(item.id).style.display = 'flex'
      } else if (item.completed) {
        document.getElementById(item.id).style.display = 'none'
      }
    })
  }

  filtrarTodas = () => {
    this.state.taskList.forEach(item => {
      document.getElementById(item.id).style.display = 'flex'
    })
  }

  handleClickChangeOrder = () => {
    const {order} = this.state
    if (order === 'column-reverse') {
      this.setState({
        order: 'column'
      })
    } else {
      this.setState({
        order: 'column-reverse'
      })
    }
  }

  handleClickClearCompleted = () => {
    this.setState({
      taskList: this.state.taskList.filter(item => !item.completed)
    })
    this.updateLocalStorage()
  }

  handleChangeEditValue = e => {
    this.setState({
      edit: e.target.value
    })
  }

  handleClickEditTask = (index, task, e) => {
    const {edit} = this.state
    if (!edit.match(/^[ \t]+$/) && edit !== '') {
      task = this.state.edit
      const {taskList} = this.state
      taskList[index].task = task
      this.setState({taskList, edit: ''})
      this.handleClickCloseModal(index)
    } else {
      this.setState({edit: ''})
      this.handleClickCloseModal(index)
    }
    this.updateLocalStorage()
  }

  handleClickOpenModal = (id, index) => {
    this.setState({draggable: false})
    this.state.taskList.forEach(item => {
      if (item.id === id) {
        document.getElementById(index).style.display = 'flex'
      }
    })
  }

  handleClickCloseModal = index => {
    this.setState({edit: '', draggable: true})
    document.getElementById(index).style.display = 'none'
  }
  
  // drag start
  handleChangeDragStarted = (e, idItem) => {
    e.stopPropagation()

    // definir id como id da task
    e.dataTransfer.setData('id', idItem)
  }

  // drag over
  handleChangeDragging = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  // drag drop
  handleChangeDrop = (e, idItem) => {
    e.preventDefault()
    e.stopPropagation()

    // pegar o id da task que vai ser a "dropzone"
    let currentId = idItem
    // pegar id da task que esta sendo arrastada
    let id = Number(e.dataTransfer.getData('id'))

    if (id !== 0 && id !== null && id !== undefined) {
      // encontrar index
    let fromIndex = this.state.taskList.findIndex(t => t.id === id) 
    let toIndex = this.state.taskList.findIndex(t => t.id === currentId) 

    // encontrar tarefas nas suas devidas indices
    const itemOne = this.state.taskList[fromIndex]
    const itemTwo = this.state.taskList[toIndex] 
  
    // trocar os valores entre eles e atualizar state
    this.setState(state => {
      state.taskList[fromIndex] = itemTwo
      state.taskList[toIndex] = itemOne
      return {taskList: state.taskList}
    })
    }

    e.target.classList.remove('over')
  }

  handleDragEntered = e => {
    e.target.classList.add('over');
  }

  handleDragLeave = e => {
    e.target.classList.remove('over');
  }


  handleChangeFilter = () => {
    let select = document.querySelector('#filterList');
	  let value = select.options[select.selectedIndex].value;
    if (value === '0'){
      this.filtrarTodas()
    } else if (value === '1') {
      this.handleClickFilterCompleted()
    } else if (value === '2') {
      this.handleClickFilterUncompleted()
    }
  }

  render = () => {
    return (
      <S.Container onMouseOver={() => {this.updateLocalStorage()}}>
        <S.FormAddTask onSubmit={e => {e.preventDefault(e)}}>
          <input
            value={this.state.task}
            onChange={e => {this.handleChangeNewTask(e)}}
            className='createTaskInput'
            autoFocus
          />
          
          <button 
            onClick={() => {this.handleClickAddTask()}}
            className='createTaskBtn'
            title='Criar nova tarefa'
          >
            Criar <S.AddIcon className="fa-regular fa-plus"></S.AddIcon>
          </button>
          <S.AlertError id='alert'></S.AlertError>
        </S.FormAddTask>

        <S.ToDoFilterContainer>
            <S.ShowContainer>
              <select defaultValue="none" id="filterList" onChange={() => {this.handleChangeFilter()}}>
                <option value="none" disabled>Filtrar tarefas</option>
                <option value="0">Todas</option>
                <option value="1">Concluídas</option>
                <option value="2">Não concluídas</option>
              </select>
            </S.ShowContainer>
          <S.DeleteOrderContainer>
            <S.DeleteBtn
              onClick={() => {this.handleClickClearAll()}}
              className="fa-solid fa-trash clearAll"
              title='Apagar todas as tarefas'
            ></S.DeleteBtn>
            <S.DeleteBtn
              onClick={() => {this.handleClickClearCompleted()}}
              className="fa-solid fa-trash-check clearAll"
              title='Apagar todas as tarefas feitas'
            ></S.DeleteBtn>
          <S.ChangeOrder 
            onClick={() => {this.handleClickChangeOrder()}}
            className={this.state.order === 'column' ? 'fa-regular fa-arrow-down reverse' : 'fa-regular fa-arrow-down'}
            title='Inverter ordem das tarefas'
            ></S.ChangeOrder>
            </S.DeleteOrderContainer>
        </S.ToDoFilterContainer>
        
        <S.TaskList
          order={this.state.order}
          onDragOver={e => {this.handleChangeDragging(e)}}
        >
          {this.state.taskList.map((item, index) => (
            <ToDoItem
              key={index}
              indexValue={index}
              id={item.id}
              draggableOnOff={this.state.draggable}
              dragdrop={e => {this.handleChangeDrop(e, item.id)}}
              dragstart={e => {this.handleChangeDragStarted(e, item.id)}}
              dragenter={e => {this.handleDragEntered(e)}}
              dragleave={e => {this.handleDragLeave(e)}}
              completed={item.completed}
              handleClickCheck={() => {this.handleClickCheck(index, item, item.id)}}
              task={item.task}
              openModal={() => {this.handleClickOpenModal(item.id, index)}}
              closeModal={() => {this.handleClickCloseModal(index)}}
              deleteTask={() => {this.handleClickDeleteTask(item.id)}}
              editInputValue={this.state.edit}
              editValue={e => {this.handleClickEditTask(index, item.task, e)}}
              changeEditValue={e => {this.handleChangeEditValue(e)}}
              onsubmit={e => {e.preventDefault()}}
            />
          ))}
        </S.TaskList>
      </S.Container>
    )
  }
}
