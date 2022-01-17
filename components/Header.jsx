import {Text, Input, Box, InputGroup, InputRightElement, Button ,Tooltip,Image,IconButton } from '@chakra-ui/react'
import{IoArrowForwardOutline,IoClipboardOutline} from 'react-icons/io5'

const Header = ({bringTweet}) => {
	const title_size = { base: "33px", md: "50px", lg: "70px" }
	const font_size = { base: "16px", md: "18px", lg: "20px" }
    const font_size_small = { base: "10px", md: "13px", lg: "15px" }

	return (
		<>  
		<Box px={5} py={5} >
		    <Box className='logo'>
				<a href=""><Image src='/logo.png' alt='logo' /></a>
		    </Box>
			<Box pt='20' px='8'>
	            <Text fontSize={title_size} className='title i'>Tweetsc.com</Text>
	        </Box>
		
			
	        <Box className='i' my="12" align="center">
	          <form onSubmit={bringTweet} autoComplete='off'>
	                <InputGroup maxW='90vw'>
	                    <Input name='tweetURL' placeholder=" Paste a Twitter post link " variant='filled' />
	                    <InputRightElement>
						    <IconButton size="sm">
							     <IoClipboardOutline fontSize={font_size_small} color="blue.500" />
							</IconButton>
							<span>&nbsp;</span>
	                    	<IconButton type='submit'size="sm">
	                    		<IoArrowForwardOutline fontSize={font_size_small} color="blue.500" />
	                    	</IconButton>
	                    </InputRightElement>	
	                </InputGroup>
	          </form>
	        </Box>
		</Box>
		</>
	)
}

export default Header