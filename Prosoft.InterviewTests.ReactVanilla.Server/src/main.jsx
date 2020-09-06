import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from './Components/HomeComponent'
import { StylingComponent } from './Components/StylingComponent';

async function boot() {

    const body = (
        <div style={{ height: '100%' }}>
            <BrowserRouter basename={window.baseUrl}>
                <div style={{ height: '100%' }}>
                    <Route path={'([/]+)'} component={HomePage} />
                    <Route
                        exact
                        path={'/styling'}
                        component={StylingComponent}
                    />
                </div>
            </BrowserRouter>
        </div>
    );

    ReactDOM.render(body, document.getElementById('app'));
}

boot();