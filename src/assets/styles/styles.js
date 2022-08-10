import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;

  .over {
    background-color: #0e0f1c;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  color: #ccc;
  padding-bottom: 20px;
  background-color: #010101;

  .doColor {
    color: #7f5af0;
    padding-right: 15px;
  }

  .toColor {
    color: #baa6f7;
  }
`;

export const FormAddTask = styled.form`
  position: relative;
  top: -20px;
  display: flex;
  width: 100%;
  max-width: 540px;

  input {
    width: 80%;
    height: 40px;
    border: solid 2px #7f5af0;
    background-color: #161722;
    font-size: 20px;
    border-radius: 8px 0 0 8px;
    padding: 10px;
    color: #ccc;
  }

  button {
    border: none;
    border-radius: 0 8px 8px 0;
    border: solid 2px #7f5af0;
    background-color: #7f5af0;
    font-weight: bold;
    color: #fffc;
    width: 20%;
    cursor: pointer;
    overflow: hidden;

    &:hover{
      color: #fff;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 0 30px;
  }
`

export const AddIcon = styled.i`
  color: #fffc;
  transition: all 0.4s ease;
  .createTaskBtn:hover & {
    transform: rotate(180deg);
    color: #fff;
  }
`

export const AlertError = styled.p`
  position: absolute;
  top: -22px;
  left: 5px;
  color: #f00c;
  font-weight: 500;
`

export const ToDoFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 540px;
  margin-top: -10px;
  padding-right: 10px;

  @media screen and (max-width: 650px) {
    padding: 0 30px;
  }
`

export const ShowContainer = styled.div`
  position: relative;
  width: 165px;

  select::-ms-expand {
    display: none;
  }

  &:after {
    content: '<>';
    position: absolute;
    font: 14px "Consolas", monospace;
    color: #fffc;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 11px;
    top: 10px;
    padding: 0 0 2px;
    border-bottom: 1px solid #999;
  }

  select {
    display: block;
    cursor: pointer;
    outline: none;
    width: 100%;
    max-width: 320px;
    height: 30px;
    margin: 5px 0px;
    padding: 0px 15px;
    font-size: 14px;
    font-weight: 500;
    color: #fffc;
    border: none;
    border-radius: 8px;
    -ms-word-break: normal;
    word-break: normal;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #7f5af0;
  }
`

export const DeleteOrderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ChangeOrder = styled.i`
  color: #7f5af0;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  .reverse& {
    transform: rotate(180deg);
  }

  &:hover {
    color: #7f5af0;
    text-shadow: 0 0 15px #7f5af0,
    0 0 15px #7f5af0,
    0 0 15px #7f5af0;
  }
`

export const TaskList = styled.div`
  display: flex;
  flex-direction: ${({ order }) => order};
  gap: 15px;
  width: 100%;
  max-width: 540px;
  margin: 15px 0 50px 0;

  @media screen and (max-width: 650px) {
    padding: 0 30px;
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;
  padding: 10px 15px 10px 10px;
  background-color: #25273c;

  &:hover .BtnContainer {
    opacity: 1;
  }
`;

export const TaskBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Task = styled.span`
  position: relative;
  max-width: 415px;
  text-align: start;
  overflow: hidden;
  cursor: default;
  transition: all 0.3s ease;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    top: 50%;
    margin-top: -0.5px;
    background: #ddd;
  }

  &:before {
    left: -2.5px;
  }
  
  &:after {
    right: 2.5px;
    background: #ddd;
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  .checked& {
    color: #ccc;
  }

  .checked&:before {
    background: #ddd;
    width: 100%;
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  .checked&:after {
    background: transparent;
    width: 100%;
    transition: 0s;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  opacity: 0;
  transition: opacity 0.4s ease;
`;

export const EditBtn = styled.i`
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease;

  &:hover {
    color: #501eeb;
    text-shadow: 0 0 15px #501eeb,
    0 0 15px #501eeb,
    0 0 15px #501eeb;
  }
`;

export const DeleteBtn = styled.i`
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease;

  &:hover {
    color: #f00f43;
    text-shadow: 0 0 15px #f00f43,
    0 0 15px #f00f43,
    0 0 15px #f00f43;
  }

  .clearAll& {
    color: #7f5af0;
    font-size: 20px;

    &:hover {
      color: #f00f43;
      text-shadow: 0 0 15px #f00f43,
      0 0 5px #f00f43;
    }
  }
`;

export const EditTaskModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #0008;
`;

export const EditContainer  = styled.form`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  height: 200px;
  border-radius: 8px;
  background-color: #16161a;

  h3 {
    width: 89%;
    text-align: start;
    color: #ccc;
  }

  @media screen and (max-width: 650px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const EditInput = styled.input`
  width: 90%;
  height: 40px;
  border: solid 2px #7f5af0;
  border-radius: 5px;
  color: #ccc;
  font-size: 20px;
  padding: 10px;
  background-color: transparent;
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  width: 88%;
`;

export const CancelConfirmEdit = styled.button`
  color: #7f5af0;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;

  &:hover {
    color: #501eeb;
  }
`;

export const CheckIcon = styled.span`
  display: inline-block;
  position: relative;
  background-color: transparent;
  width: 25px;
  height: 25px;
  transform-origin: center;
  border: 2px solid #7f5af0;
  border-radius: 50%;
  transition: background-color 150ms 200ms,
  transform 350ms cubic-bezier(.78,-1.22,.17,1.89);
  cursor: pointer;

  &:before {
    content: "";
    width: 0px;
    height: 2px;
    border-radius: 2px;
    background: #7f5af0;
    position: absolute;
    transform: rotate(45deg);
    top: 11px;
    left: 7px;
    transition: width 50ms ease 50ms;
    transform-origin: 0% 0%;
  }

  &:after {
    content: "";
    width: 0;
    height: 2px;
    border-radius: 2px;
    background: #7f5af0;
    position: absolute;
    transform: rotate(305deg);
    top: 15px;
    left: 8px; 
    transition: width 50ms ease;
    transform-origin: 0% 0%;
  }

  &:hover {
    &:before {
      width: 5px;
      transition: width 150ms ease;
    }
      
    &:after {
      width: 10px;
      transition: width 150ms ease 100ms;
    }
  }

  .taskChecked& {
    background-color: #7f5af0;
    transform: scale(1.1);
  }

  .taskChecked&:before {
      width: 5px;
      background: #fff;
      transition: width 150ms ease 100ms;
  }

  .taskChecked&:after {
      width: 10px;
      background: #fff;
      transition: width 150ms ease 100ms;
  }
  
`;

export const Footer = styled.footer`
  position: absolute;
  bottom:  10px;
  left: 0;
  right: 0;
  width: 100%;

  p {
    color: #ccc;
    font-weight: 500;
    text-align: center;

    a {
      color: #7f5af0;
      text-decoration: none;
    }
  }
`