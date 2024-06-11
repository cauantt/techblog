import React from 'react'
import './Content.css'
import Img1 from '../../Assets/img/img1.jpeg'
import Img2 from '../../Assets/img/img2.jpeg'
import Img3 from '../../Assets/img/img3.jpeg'
import Img4 from '../../Assets/img/img4.jpeg'
import Img5 from '../../Assets/img/img5.jpeg'
import Img6 from '../../Assets/img/img6.jpeg'

import Card from '../content/Card'

function Content() {
  return (
    <div className='content'>
        <div className='contentlayout'>
            <h2>Artigos recomendados</h2>
             <div className='cards'> 
                <Card 
                img={Img1}
                title="O que é linguagem de programação? Conheça as principais"
                text="Uma das mais populares vertentes da tecnologia da informação, a área de..."/>

                <Card 
                img={Img2}
                title="Python: por que a linguagem é tão usada para Data Science e finanças?"
                text="O mundo da programação conta com algumas opções de linguagem para..."
                />
                    
                <Card 
                img={Img3}
                title="GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários"
                text="O popular serviço de repositório de código GitHub foi adquirido pela..."/>

                <Card 
                img={Img4}
                title="15 comandos no GIT que os desenvolvedores precisam saber"
                text="Dominar os comandos GIT é uma habilidade que se conquista com..."/>

                <Card 
                img={Img5}
                title="GIT e GitHub: o que são e quais as diferenças entre eles?"
                text="Git e GibHub são dois softwares de controle de versão essenciais para..."/>

                <Card 
                img={Img6}
                title="GitHub Copilot ganha integração com GPT-4 e interface conversacional"
                text="O GitHub Copilot, ferramenta de desenvolvimento baseada em IA..."/>

             </div>   
                
                </div>

    </div>
  )
}

export default Content
