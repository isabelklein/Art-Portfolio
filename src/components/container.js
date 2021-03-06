import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import '../App.css';
import About from '../components/about';
import Contact from '../components/contact';
import Portfolio from '../components/portfolio';
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Container({ location }) {
    return (
        <Wrapper>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="fade"
                >
                <section className="route-section">
                    <Switch location={location}>
                        <Route path={process.env.PUBLIC_URL + "/"} exact component={Portfolio} />
                        <Route path={process.env.PUBLIC_URL + "/about"} exact component={About} />
                        <Route path={process.env.PUBLIC_URL + "/contact"} exact component={Contact} />
                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>
    </Wrapper>
    )
}

const Wrapper = styled.div`
.fade-enter {
    opacity: 0.01;
}

.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
}

.fade-exit {
    opacity: 1;
}

.fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
}    

div.transition-group {
        position: relative;
   }

   section.route-section {
     position: absolute;
     width: 100%;
     top: 0;
     left: 0;
   }
`;

export default withRouter(Container);