import Titulo from '../../components/Titulo'
import Paragraf from '../../components/Paragraf'
import { GithubSect } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragraf tipo="secundario">
      Olá! Meu nome é Arthur Henrique, tenho 18 anos e sou um estudante
      apaixonado por desenvolvimento full stack. Atualmente, estou aprofundando
      meus conhecimentos em tecnologias como React, TypeScript, JavaScript,
      Node.js e SCSS. Adoro resolver problemas complexos e criar soluções
      inovadoras que possam impactar positivamente a vida das pessoas. No meu
      tempo livre, gosto de explorar novas ferramentas e frameworks, além de
      colaborar em projetos open-source. Estou sempre em busca de novos desafios
      e oportunidades para crescer na área de desenvolvimento web.
    </Paragraf>
    <GithubSect>
      <img src="https://github-readme-stats.vercel.app/api?username=arthurHenrique00&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=arthurHenrique00&layout=compact&langs_count=7&theme=dracula" />
    </GithubSect>
  </section>
)

export default Sobre
