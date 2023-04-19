import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './../../../../reactRedux/redux';
import '@testing-library/jest-dom'
import Issue from './Issue';


it('renders without crashing CardsIssues', () => {
    const item= {
        id: 1,
        title: 'string',
        number: 2,
        created_at: 'string2',
        login: 'string3',
        comments: 3
    }
    const { getByText } = render(
        <Provider store={store}>
            <Issue item={item}/>
        </Provider>
    );
    const LinkElement = getByText('string');
    expect(LinkElement).toBeInTheDocument()
    const LinkElement2 = getByText(/time of last activity:/i);
    expect(LinkElement2).toBeInTheDocument()
    const LinkElement3 = getByText(/coments:/i);
    expect(LinkElement3).toBeInTheDocument()
    const LinkElement4 = getByText(/string2/i);
    expect(LinkElement4).toBeInTheDocument()
    const LinkElement5 = getByText(/string3/i);
    expect(LinkElement5).toBeInTheDocument()
    const LinkElement6 = getByText(/2/i);
    expect(LinkElement6).toBeInTheDocument()
   
});