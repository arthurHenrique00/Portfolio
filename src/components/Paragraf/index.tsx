import { P } from './styles'

export type Props = {
  children: string
  fontSize?: number
  tipo?: string
}

const Paragraf = ({ children = '', tipo = 'principal' }) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragraf
