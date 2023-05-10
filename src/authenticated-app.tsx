import React from "react";
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";
import styled from '@emotion/styled';

export const AutheticatedApp = () => {
    const {logout} = useAuth();
    return (
    <Container>
        <Header>
            <HeaderLeft>
                <h3>Logo</h3>
                <h3>Project</h3>
                <h3>User</h3>
            </HeaderLeft>
            <HeaderRight>
                <button onClick={logout}>Log out</button>
            </HeaderRight>
        </Header>
        <Nav>Nav</Nav>
        <Main>
           <ProjectListScreen/> 
        </Main>
        <Aside>aside</Aside>
        <Footer>footer</Footer>
    </Container>
    );
};

const Container =styled.div`
    display: grid;
    grid-template-rows: 6rem 1fr 3rem;
    grid-template-columns: 20rem 1fr 20rem;
    grid-template-areas: 
    "h h h"
    "n m a"
    "f f f";
    height: 100vh;
    grid-gap: 3rem;
`
// grid-area 用于给grid子元素命名
const Header = styled.header`
grid-area: h;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
const HeaderLeft = styled.div`
display:flex;
align-items: center;
`
const HeaderRight = styled.div``
const Main = styled.main`grid-area: m`
const Nav = styled.nav`grid-area: n`
const Aside = styled.aside`grid-area: a`
const Footer = styled.footer`grid-area: f`