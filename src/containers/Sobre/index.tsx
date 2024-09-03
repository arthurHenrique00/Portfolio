import Titulo from '../../components/Titulo'
import Paragraf from '../../components/Paragraf'
import { GithubSect } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragraf tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quidem
      assumenda, necessitatibus facilis vitae omnis, provident pariatur maxime
      quos fuga asperiores distinctio nobis iste optio sapiente exercitationem
      labore quis voluptas.
    </Paragraf>
    <GithubSect>
      <img src="https://github-readme-stats.vercel.app/api?username=arthurHenrique00&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=arthurHenrique00&layout=compact&langs_count=7&theme=dracula" />
    </GithubSect>
  </section>
)

export default Sobre
