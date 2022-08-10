import React from 'react'
import * as S from '../assets/styles/styles.js'

export const ToDoItem = ({
  indexValue,
  id,
  draggableOnOff,
  dragdrop,
  dragstart,
  dragenter,
  dragleave,
  completed,
  handleClickCheck,
  task,
  onsubmit,
  openModal,
  deleteTask,
  closeModal,
  editValue,
  changeEditValue,
  editInputValue
}) => {
  return (
    <S.TaskContainer
      id={id}
      draggable={draggableOnOff}
      onDrop={dragdrop}
      onDragStart={dragstart}
      onDragEnter={dragenter}
      onDragLeave={dragleave}
    >
      <S.TaskBox>
        <S.CheckIcon 
          onClick={handleClickCheck}
          className={completed ? 'taskChecked' : ''}
          title={completed ? 'Desmarcar tarefa' : 'Marcar tarefa'}
        ></S.CheckIcon>
      
        <S.Task className={completed ? 'checked' : ''}>{task}</S.Task>
      </S.TaskBox>

      <S.BtnContainer className='BtnContainer'>
        <S.EditBtn onClick={openModal} className="fa-solid fa-pen" title='Editar tarefa'></S.EditBtn>
        <S.DeleteBtn onClick={deleteTask} className="fa-solid fa-xmark-large" title='Apagar tarefa'></S.DeleteBtn>
      </S.BtnContainer>

      <S.EditTaskModal
        id={indexValue}
      >
        <S.EditContainer onSubmit={onsubmit}>
          <h3>Editar Tarefa</h3>
          <S.EditInput
            onChange={changeEditValue}
            value={editInputValue}
          />
          <S.ContainerBtn>
            <S.CancelConfirmEdit type='button' onClick={closeModal}>CANCELAR</S.CancelConfirmEdit>
            <S.CancelConfirmEdit onClick={editValue}>OK</S.CancelConfirmEdit>
          </S.ContainerBtn>
        </S.EditContainer>
        
      </S.EditTaskModal>
    </S.TaskContainer>
  )
}
