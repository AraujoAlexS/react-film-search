import React from  'react';
import {calcTime, convertMoney} from '../../helpers';
import {Wrapper, Content} from './MovieInfoBar.styles';

const MovieInfoBar = ({time, budget, revenue}) => (
    <Wrapper>
        <Content>
        <div className='column'>
            <p>Duração: {calcTime(time)}</p>
        </div>
        
        <div className='column'>
            <p>Custo de produção: {convertMoney(budget)}</p>
        </div>
        
        <div className='column'>
            <p>Bilheteria: {convertMoney(revenue)}</p>
        </div>
        </Content>
    </Wrapper>
)

export default MovieInfoBar;