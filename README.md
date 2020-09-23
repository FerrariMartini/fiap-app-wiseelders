# WiseElders App

## Visão geral
Projeto criado em `react-native`, utilizando **React Native CLI**.

### Principais bibliotecas utilizadas

- [React Navigation](https://reactnavigation.org/): roteamento e navegação entre telas da aplicação
- [Redux](https://redux.js.org/) e [React Redux](https://react-redux.js.org/) : gerenciamento do estado da aplicação
- [Redux Thunk](https://github.com/reduxjs/redux-thunk): middleware para implementação de fluxos de dados assíncronos no Redux, tais como chamadas a API's.
- [React Native Elements](https://reactnativeelements.com/): UI toolkit para criação de aplicativos em React Native
- [Superagent](https://visionmedia.github.io/superagent/): biblioteca para realização de chamadas HTTP
- [moment](https://momentjs.com/) para manipulação de datas

## Organização do projeto

Principais, componentes, arquivos e diretórios do projeto:

- Chamadas HTTP implementadas na classe **WiseEldersAPI** no arquivo `/api/WiseEldersAPI.js`
- Componentes de navegação em `/navigation`
- Telas da aplicação em `/screens`
- Componentes de uso geral em`/components`
- Redux 
	- Actions no diretório `/store/actions`
	- Reducers no diretório `/store/reducers` 

## Padrões para realização de chamadas HTTP

Classe para encapsular as chamadas HTTP ao *backend*:

```javascript
import client from 'superagent';

class WiseEldersAPI {
    constructor(baseAddress) {
        this.baseAddress = baseAddress;
        console.log(`API base address: ${this.baseAddress}`);
    }

    getActivities() {
        const url = `${this.baseAddress}/activities`;
        return client.get(url)
            .then(res => Promise.resolve(res.body), err => Promise.reject(err));
    }
}
```

Chamadas assíncronas utilizando Redux e Redux Thunk:

```javascript
import * as actionTypes from './actionTypes';
import wiseEldersClient from '../../api/WiseEldersAPI';

/* GET ACTIVITIES
*******************************************************************/
const getActivitiesStart = () => {
    return {
        type: actionTypes.GET_ACTIVITIES_START,
    };
};

const getActivitiesSuccess = entries => {
    return {
        type: actionTypes.GET_ACTIVITIES_SUCCESS,
        entries: entries,
    };
};

const getActivitiesFail = error => {
    return {
        type: actionTypes.GET_ACTIVITIES_FAIL,
        error: error,
    };
};

export const getActivities = () => {
    return dispatch => {
        dispatch(getActivitiesStart());
        return wiseEldersClient.getActivities()
            .then(data => {
                dispatch(getActivitiesSuccess(data));
            }, error => {
                dispatch(getActivitiesFail(error));
            });
    };
};
```

## Observações

Não foi possível testar o aplicativo em iOS, pois o grupo não dispunha de uma estação de trabalho com macOS.