import { Flex, Text, Box, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';

const SideMenu: NextPage = () => {
    const menu = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Organization',
            link: '/organization',
        },
        {
            name: 'Gallery',
            link: '/gallery',
        },
        {
            name: 'Lemonade',
            link: '/lemonade',
        },
        {
            name: 'Stakbank',
            link: '/stakbank',
        },
        {
            name: 'Wallet',
            link: '/wallet',
        },
    ];

    return (
        <Flex
            backgroundColor="background.900"
            minW="250px"
            h="100vh"
            flexDirection="column"
        >
            <Text
                as="h1"
                fontSize="3xl"
                color="white"
                textAlign="center"
                w="100%"
                mt="2"
                style={{ fontVariant: 'all-petite-caps' }}
            >
                JGov
            </Text>
            <Flex flexDirection="column" w="100%" mx="2" my="5">
                <Text
                    as="h1"
                    fontSize="lg"
                    color="gray.500"
                    textAlign="start"
                    my="-2"
                    style={{ fontVariant: 'all-petite-caps' }}
                >
                    Balance
                </Text>
                <Flex
                    justifyContent="space-between"
                    w="max-content"
                    alignItems="flex-end"
                >
                    <Text color="white" fontSize="2xl">
                        13123131.1203
                    </Text>
                    <Text color="blue.300" fontSize="md" mx="1">
                        JSTAK
                    </Text>
                </Flex>
            </Flex>
            <Flex flexDirection="column" color="white" w="100%">
                {menu.map(i => {
                    return (
                        <Link href={i.link}>
                            <Button
                                backgroundColor="background.900"
                                my="2"
                                justifyContent="start"
                                w="100%"
                                p="0"
                                _hover={{ backgroundColor: 'blue.500' }}
                                _focus={{ backgroundColor: 'background.700' }}
                                _active={{ backgroundColor: 'background.700' }}
                                borderRadius="0"
                            >
                                <Box
                                    w="5px"
                                    h="100%"
                                    backgroundColor="blue.500"
                                    mr="5"
                                    borderTopRightRadius="10"
                                    borderBottomRightRadius="10"
                                />
                                <Text>{i.name}</Text>
                            </Button>
                        </Link>
                    );
                })}
            </Flex>
        </Flex>
    );
};

export default SideMenu;
