import { Box, Text, Image, Button, Flex } from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons";
import "../App.css";
import { useNavigate } from "react-router-dom";
function Navbar(){
  const navigate = useNavigate();
  
  const handleLogin =()=>{
    navigate('/login');
  }
  
  const handlehome =()=>{
    navigate('/home');
  }
  const handleSignup =()=>{
    navigate('/signup');
  }
    return (
      <Box
        className="navbar"
        // maxWidth="100%"
        minW="100%"
        h="auto"
        backgroundColor={"#ffe01a"}
        position="sticky"
        top={"0"}
        _hover={{ background: "white", transition: "3s" }}
      >
        <Flex justifyContent="space-between">
          <Box>
            <Flex gap="3rem" padding={"1rem"}>
              <Box>
                <Text>Products</Text>
              </Box>
              <Box>
                <Text>Resources</Text>
              </Box>
              <Box>
                <Text>Inspiration</Text>
              </Box>
              <Box>
                <Text>Pricing</Text>
              </Box>
            </Flex>
          </Box>
          <Box mt="10px">
            <Image
              onClick={handlehome}
              borderRadius="45%"
              w="9rem"
              ml="4rem"
              h="auto"
              src="https://zanet.co.uk/wp-content/uploads/2019/08/mailchimp-yellow-logo.png"
              pb="0.5rem"
            />
          </Box>
          <Box pl="12rem" pt="1.5rem">
            <Text>sales: +1(800)315-5939</Text>
          </Box>
          <Box p="1rem">
            <Search2Icon
              mr="-12.5rem"
              name="Search2Icon"
              size="32px"
              h={6}
              w={5}
            />
          </Box>
          <Box pt="1rem" pr="1rem">
            <Button onClick={handleLogin} mr="1rem">
              Log In
            </Button>
            <Button
              onClick={handleSignup}
              backgroundColor="#007C89"
              color="white"
            >
              Sign Up Free
            </Button>
          </Box>
        </Flex>
      </Box>
    );
}

export default Navbar;