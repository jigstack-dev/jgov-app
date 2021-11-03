import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import SideMenu from './sidemenu';

const General: NextPage = props => {
    const { children } = props;
    return (
        <Flex w="100vw">
            <SideMenu />
            <Flex backgroundColor="background.700" w="100%">
                {children}
            </Flex>
        </Flex>
    );
};

export default General;
