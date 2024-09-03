import styled from 'styled-components'

import Paragraf from '../Paragraf'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragraf tipo="secondary">Lista de tarefas feita com VueJS</Paragraf>
    <LinkBotao>Ver no Github</LinkBotao>
  </Card>
)

export default Projeto
