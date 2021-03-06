
import {Text, Box, Spinner,Image} from "@chakra-ui/react"

import Tweet from './Tweet'


const Main = ({scale, hint, loading, error, tweetData, bg, showTime, showMetrics, showSource, tweetRef}) => {

    
    const pic_size = { base: "90vw", md: "80vh", lg: "50vw" }
    const padX = { base: '1rem' }
    const padY = { base: '3rem', md: '5rem' }

    if(hint){
    	return (
    		<Box m="0 auto" className='non-tweet i' py='2rem' flexDirection='column'>
                
    		    <Image src ="./banner.png" loading="lazy" borderRadius='20'/>
            <Text className='i' p='4' color='gray.700' textAlign='center'>Capture Tweets in Beautiful frames.</Text>
    		</Box>
    	)
    }

    if(loading){
    	return <Box minW={pic_size} m="0 auto" className='non-tweet i'><Spinner size='xl' /> </Box>
    }

    if(error){
    	return  <Box m="0 auto" minW={pic_size} className='non-tweet i'><Text p='4' fontSize='20px'>Oops! 😬 Something went wrong. Please try again.</Text></Box>
    }

    if(tweetData){
        if(tweetData.message){
            return  <Box m="0 auto" minW={pic_size} className='non-tweet i'><Text p='4' fontSize='20px'>Something is wrong with the URL. Please double check.</Text></Box>
        }
    }

	return (
        <Box m="0 auto">
            <Box className='con' style={{background : bg}} minW={pic_size} maxW={pic_size}  px={padX} py={padY} ref={tweetRef}>
                <div className='container' style={{transform: `scale(${scale})`}} >
                    { 
                        tweetData && <Tweet
                            tweet={tweetData}
                            showTime={showTime}
                            showMetrics={showMetrics}
                            showSource={showSource}
                         />
                	}
                </div>
            </Box>
        </Box>

	)
}

export default Main
