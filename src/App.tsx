import React from 'react';
import './main.global.css'
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout/Layout';
import {Header} from './shared/Header/Header';
import {Content} from './shared/Content/Content';
import {CardsList} from './shared/CardsList/CardsList';
// import { Dropdown } from "./shared/Dropdown/Dropdown";
import {EColors, Text} from "./shared/Text/Text";
import {Break} from "./shared/Break/Break";

function AppComponent() {
        const [isVisible, setIsVisible] = React.useState(false);
        const [title, setTitle] = React.useState('');
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <CardsList />
            </Content>
            {/*<br/>*/}
            {/*<Text size={20} mobileSize={28} bold>Label1</Text>*/}
            {/*<Break size={20} inline/>*/}
            {/*<Text size={20} color={EColors.green} >Label2</Text>*/}
            {/*<Break size={20} inline/>*/}
            {/*<Text size={20} mobileSize={16} >Label3</Text>*/}
        </Layout>
    );
};

export const App = hot(() => <AppComponent />);