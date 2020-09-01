import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FunctionComponent = () => {
  const {params} = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explrorer" />
        <Link to="/">
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header> 
      <RepositoryInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/11760617?s=460&u=47cd33f9c3dde468081dca7e6a6e8c3c54667191&v=4" alt="Rubem"/>
          <div>
           <strong>Rubens/algo</strong> 
           <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo> 

      <Issues>
        <Link to="dasdasd">           
          <div>
            <strong>"dasdasd"</strong>
            <p>"dasdasd"</p>
          </div>
          <FiChevronRight size={20}/>
        </Link>
      </Issues>
    </>
  );
};

export default Repository;