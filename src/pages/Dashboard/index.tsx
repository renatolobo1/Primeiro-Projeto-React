import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import {Title, Form, Repositories} from './styles';

const Dashboard: React.FunctionComponent = () => {
  return (
  <>
    <img src={logoImg} alt="Github Explorer"/>
    <Title>Explore repositórios no Github</Title>

    <Form >
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/33937166?s=460&u=26a01f6748c2d7594cd999eca5ba640b0972d72c&v=4" alt="Renato Lôbo" />
     
        <div>
          <strong> repository/git/tal</strong>
          <p>Descrição do repository</p>
        </div>

        <FiChevronRight size={20}/>
      </a>

      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/33937166?s=460&u=26a01f6748c2d7594cd999eca5ba640b0972d72c&v=4" alt="Renato Lôbo" />
     
        <div>
          <strong> repository/git/tal</strong>
          <p>Descrição do repository</p>
        </div>

        <FiChevronRight size={20}/>
      </a>

      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/33937166?s=460&u=26a01f6748c2d7594cd999eca5ba640b0972d72c&v=4" alt="Renato Lôbo" />
     
        <div>
          <strong> repository/git/tal</strong>
          <p>Descrição do repository</p>
        </div>

        <FiChevronRight size={20}/>
      </a>

      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/33937166?s=460&u=26a01f6748c2d7594cd999eca5ba640b0972d72c&v=4" alt="Renato Lôbo" />
     
        <div>
          <strong> repository/git/tal</strong>
          <p>Descrição do repository</p>
        </div>

        <FiChevronRight size={20}/>
      </a>
    </Repositories>
  </>
);}

export default Dashboard;