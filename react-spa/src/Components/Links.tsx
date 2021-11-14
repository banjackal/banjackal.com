import {Component} from 'react';
import './Links.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faReddit, faSteam} from '@fortawesome/free-brands-svg-icons';

export class Links extends Component {
  public goToLink(url: string) {
    window.open(url);
  }

  render() {
    return (
      <div className="wrapper menu-links">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x"/>
        <FontAwesomeIcon icon={faReddit} size="2x"/>
        <FontAwesomeIcon icon={faSteam} size="2x"/>
      </div>
    )
  }
}
