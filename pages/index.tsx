import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import General from '../layouts/general';
import ProposalDetails from '../layouts/proposaldetails';
import Proposals from '../layouts/proposals';

const Home: NextPage = () => {
    return (
        <Flex>
            <General>
                <Proposals category="Stakbank" />
                <ProposalDetails />
            </General>
        </Flex>
    );
};

export default Home;
