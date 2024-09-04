import Avatar from '../../components/Avatar'
import Paragraf from '../../components/Paragraf'
import Titulo from '../../components/Titulo'

import { BotaoTema, Desc, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Arthur Henrique</Titulo>
      <Paragraf tipo="secondary" fontSize={16}>
        arthurHenrique00
      </Paragraf>
      <Desc tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Desc>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
