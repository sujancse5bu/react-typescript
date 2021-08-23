import { ChildAsFC } from './Child'

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
      something child text
    </ChildAsFC>
  )
}

export default Parent
