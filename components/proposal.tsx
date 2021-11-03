import { Flex, Text, Button } from '@chakra-ui/react';
import moment from 'moment';
import type { NextPage } from 'next';
import { useState } from 'react';
import { IProposal } from '../types/proposal';
import Countdown, { zeroPad } from 'react-countdown';

interface IProposalsComponent {
    data: IProposal;
}

const renderer = ({ days, hours, minutes }: any) => (
    <span>
        {days ? `${zeroPad(days)}d ` : null}
        {hours ? `${zeroPad(hours)}h ` : null}
        {minutes ? `${zeroPad(minutes)}m` : null}
    </span>
);

const ProposalsComponent: NextPage<IProposalsComponent> = props => {
    const { data } = props;
    const { number, title, description, timestamp, percentage } = data;

    const convertedTime = moment.unix(timestamp).format('YYYY-MM-DDTHH:MM:SS');
    const [selected, setSelected] = useState('Open');

    return (
        <Button
            backgroundColor="background.900"
            w="48%"
            maxW="80%"
            minH="250px"
            maxH="250px"
            _hover={{ backgroundColor: 'background.1000' }}
            _focus={{ backgroundColor: 'background.600' }}
            _active={{ backgroundColor: 'background.600' }}
            borderTopWidth="8px"
            borderTopColor="flatgreen.500"
            flexDirection="column"
            fontWeight="500"
            alignItems="flex-start"
            justifyItems="flex-start"
        >
            <Flex justifyContent="space-between" w="100%">
                <Text color="white" fontWeight="700">
                    Proposal #{number}
                </Text>
                <Text color="white">
                    <Countdown date={convertedTime} renderer={renderer} />
                </Text>
            </Flex>
            <Flex>
                <Text color="white">{title}</Text>
                <Text color="white">{description}</Text>
            </Flex>
        </Button>
    );
};

export default ProposalsComponent;
