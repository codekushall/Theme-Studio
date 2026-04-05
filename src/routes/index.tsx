import { createFileRoute } from '@tanstack/react-router'
import styled from 'styled-components'


export const Content = styled.div`
 height:100%;
 width:60%;
 border: 1px solid red;
`;
export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Content>This is Main Content</Content>
}
