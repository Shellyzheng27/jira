import React from "react";
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";
import styled from '@emotion/styled';
import { Row } from './components/lib';

export const AutheticatedApp = () => {
    const {logout} = useAuth();
    return (
    <Container>
        <Header between = {true}>
            <HeaderLeft gap = {true}>
                <h2>Logo</h2>
                <h2>Project</h2>
                <h2>User</h2>
            </HeaderLeft>
            <HeaderRight>
                <button onClick={logout}>Log out</button>
            </HeaderRight>
        </Header>
        <Main>
           <ProjectListScreen/> 
        </Main>
    </Container>
    );
};

const HeaderItem = styled.h3`margin-right: 3rem`

const Container =styled.div`
    height: 100vh;
    `
// grid-area 用于给grid子元素命名
/* 下面的Row 在lib.tsx 中同过自定义的方式构建出所需的argument */
const Header = styled(Row)``
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``
const Main = styled.main`grid-area: m`