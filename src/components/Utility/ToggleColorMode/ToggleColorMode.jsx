import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import React from 'react'

const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return <Button
        onClick={() => toggleColorMode()}
        pos="absolute"
        top="2.5rem"
        right="0"
        m="1rem"
    >{colorMode === "dark" ? <SunIcon color="orange.400" /> : <MoonIcon color="blue.700" />}</Button>
}

export default ToggleColorMode;