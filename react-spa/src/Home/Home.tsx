import {Component} from 'react';

export class Home extends Component {
    render() {
        return (
            <div className="home">
              <h1>Banjackal.com</h1>
              <p><span>
                This is my webpage, here's the github repo: </span>
                <a href="https://github.com/banjackal/banjackal.com" target="_blank" rel="noreferrer">https://github.com/banjackal/banjackal.com</a>
              </p>
            </div>
          );
    }
}