import React from "react";
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";
import {ReactComponent as SoftwareLogo} from "assets/software-logo.svg";
import styled from '@emotion/styled';
import { Row } from './components/lib';
import { Dropdown, Menu } from "antd";

export const AutheticatedApp = () => {
    const {logout, user} = useAuth();
    return (
    <Container>
        <Header between = {true} marginBottom={2}>
            <HeaderLeft gap = {true}>
                <SoftwareLogo width={'18rem'} color={'rgb(38, 132, 255)'}/>
                <h2>Project</h2>
                <h2>User</h2>
            </HeaderLeft>
            <HeaderRight>
                <Dropdown overlay={<Menu>
                    <Menu.Item key={'logout'}>
                        <a onClick={logout}>Log out</a>
                    </Menu.Item>
                </Menu>}>
                    <a onClick={e => e.preventDefault()}>
                        Hi, {user?.name}
                    </a>
                </Dropdown>
                {/* <button onClick={logout}>Log out</button> */}
            </HeaderRight>
        </Header>
        <Main>
           <ProjectListScreen/> 
        </Main>
    </Container>
    );
};

const Container =styled.div`
    height: 100vh;
    `
// grid-area 用于给grid子元素命名
/* 下面的Row 在lib.tsx 中同过自定义的方式构建出所需的argument */
const Header = styled(Row)`
padding: 2rem;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;