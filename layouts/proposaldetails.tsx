import { Flex, Text, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';

interface DetailsProps {}

const ProposalDetails: NextPage<DetailsProps> = props => {
    return <Flex w="30%" h="100vh" backgroundColor="gray.800"></Flex>;
};

export default ProposalDetails;
