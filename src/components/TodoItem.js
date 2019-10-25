import React from 'react'
import styled from 'styled-components'
import ActionButton from './ActionButton'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  background: white;
`

const WrapperItem = styled.div`
  overflow: scroll;
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
