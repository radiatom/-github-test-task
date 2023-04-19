import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './../../../reactRedux/redux';
import '@testing-library/jest-dom'
import CardIssues from './CardIssues';


it('renders without crashing CardsIssues', () => {
    const board = {
        id: 1,
        title: 'abc',
        items: [{
            id: 1,
            title: 'dfg',
            number: 2,
            created_at: 'klm',
            login: 'wrt',
            comments: 3
        }]
    }
    
    const { getByText } = render(
        <Provider store={store}>
            <CardIssues board={board}/>
        </Provider>
    );
    const LinkElement = getByText(/abc/i);
    expect(LinkElement).toBeInTheDocument()

});