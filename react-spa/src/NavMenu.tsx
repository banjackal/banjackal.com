import React, {Component} from 'react';
import './NavMenu.css';

export class NavMenu extends Component{
    isExpanded = false;
  
    collapse() {
      this.isExpanded = false;
    }
  
    toggle() {
      this.isExpanded = !this.isExpanded;
    }
    render() {
        return(
            <header>
                <nav
                    class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"
                >
                    <div class="container">
                    <a class="navbar-brand">banjackal.com</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse"
                    >
                        <ul class="navbar-nav flex-grow">
                        <li
                            class="nav-item"
                        >
                            <a class="nav-link text-dark">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark">About</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </header>
        )
    }
}