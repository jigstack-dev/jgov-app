import { Flex, Text, Button, Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';
import ProposalsComponent from '../components/proposal';
import { IProposal } from '../types/proposal';

interface ProposalsProps {
    category: string;
}

const Proposals: NextPage<ProposalsProps> = props => {
    const { category } = props;
    const [selected, setSelected] = useState('Open');

    const proposals: IProposal[] = [
        {
            number: 1,
            title: '1',
            timestamp: 1635992028,
            description: 'DASDDSDDADADADADADASDAS',
            percentage: {
                yes: 49,
                no: 20,
            },
        },
    ];

    return (
        <Flex w="70%" h="100vh" flexDirection="column" mx="50px">
            <Text color="white" fontSize="2xl" mt="3" mb="9">
                {category} Governance
            </Text>
            <Flex color="white" fontSize="xl">
                <Button
                    mr="8"
                    backgroundColor={
                        selected === 'Open'
                            ? 'background.500'
                            : 'background.700'
                    }
                    _hover={{ backgroundColor: 'blue.500' }}
                    _focus={{ backgroundColor: 'background.500' }}
                    _active={{ backgroundColor: 'background.500' }}
                    onClick={() => setSelected('Open')}
                >
                    <Text>Open proposals</Text>
                </Button>
                <Button
                    mr="8"
                    backgroundColor={
                        selected === 'Closed'
                            ? 'background.500'
                            : 'background.700'
                    }
                    _hover={{ backgroundColor: 'blue.500' }}
                    _focus={{ backgroundColor: 'background.500' }}
                    _active={{ backgroundColor: 'background.500' }}
                    onClick={() => setSelected('Closed')}
                >
                    <Text>Closed proposals</Text>
                </Button>
            </Flex>
            <Flex
                w="100%"
                flex={1}
                mt="5"
                h="100%"
                flexFlow="row wrap"
                justifyContent="space-between"
            >
                {proposals.map(i => {
                    return <ProposalsComponent data={i} />;
                })}
            </Flex>
        </Flex>
    );
};

export default Proposals;
