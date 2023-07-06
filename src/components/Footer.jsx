import { Box ,Stack ,VStack,HStack,Heading,Button,Input,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                    GET IN TOUCH WITH ME
                </Heading>
             <HStack py={'2'} borderBottom={'2px solid white'}>
                <Input 
                placeholder='Enter your Email..'
                border={'none'}
                outline={'none'}
                borderRadius={'none'}
                focusBorderColor='none'

                />
                <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                    <AiOutlineSend size={20}/>
                </Button>
            </HStack>   

            </VStack>
            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>VIDEO HUB</Heading>
                <Text>Created by Smit Patel</Text>

            </VStack>
            <VStack w={'full'} >
                <Heading size={'md'} textTransform={'uppeercase'}>SOCIAL MEDIA</Heading>
                <button variant={'link'} colorScheme={'white'}>
                    <a target='blank' href="https://www.linkedin.com/in/smit-patel-3a847316b">LinkedIn</a>
                </button>
                <button variant={'link'} colorScheme={'white'}>
                    <a target='blank' href="https://github.com/smit400">Github</a>
                </button>
            </VStack>


        </Stack>
    </Box>
  )
}

export default Footer