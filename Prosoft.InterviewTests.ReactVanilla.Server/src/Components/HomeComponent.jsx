import * as React from 'react';
import { withRouter } from 'react-router-dom';

const buttonStyle = { width: 300 };

class HomeComponent extends React.Component {

    navigate = (path) => () => this.props.history.push(path);

    render() {
        return (
            <div>
                <div>
                    <button
                        onClick={this.navigate('/Styling')}
                        style={buttonStyle}
                    >
                        Styling
                </button>
                </div>
                <div>
                    <button
                        onClick={this.navigate('/DataLoading')}
                        style={buttonStyle}
                    >
                        Data loading
                </button>
                </div>
            </div>
        );
    }

}

export const HomePage = withRouter(HomeComponent);