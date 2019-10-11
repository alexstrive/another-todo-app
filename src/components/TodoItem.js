import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-bottom: 10px; */
  align-items: center;
  background: white;
`

const WrapperItem = styled.div`
  overflow: scroll;
`

const ActionButton = styled.button`
  font-size: 2rem;
  padding: 10px 0;
  border: 0;
  background: none;
  width: 100%;
  cursor: pointer;
`

const TodoItem = ({ title, onComplete }) => {
  return (
    <Wrapper>
      <WrapperItem>{title}</WrapperItem>
      <WrapperItem style={{ minWidth: 45, textAlign: 'right' }}>
        <ActionButton onClick={onComplete}>☑️</ActionButton>
      </WrapperItem>
    </Wrapper>
  )
}

export default TodoItem
