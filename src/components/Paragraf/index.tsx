import { P } from './styles'

export type Props = {
  children: string
  fontSize?: number
  tipo?: string
}

const Paragraf = ({ children = '', tipo = 'principal', fontSize = 0 }) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragraf
