import { Box, Text, Image, Button, Spacer, Flex } from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons";
import { transform } from 'framer-motion';

function Navbar(){
    return (
      <Box
        w="100%"
        h="90px"
        backgroundColor={"#ffe01a"}
        position="sticky"
        top={"0"}
        _hover={{ background: "white", transition: "3s" }}
      >
        <Flex justifyContent="space-between">
          <Box>
            <Flex gap="3rem" padding={"20px"}>
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
              borderRadius="30%"
              w="160px"
              ml="4rem"
              src="https://zanet.co.uk/wp-content/uploads/2019/08/mailchimp-yellow-logo.png"
            />
          </Box>
          <Box ml="5rem" p="10px">
            <Text>sales:</Text>
            <Text>+1(800)315-5939</Text>
          </Box>
          <Box p="12px">
            <Search2Icon
              mr="-5rem"
              name="Search2Icon"
              size="32px"
              h={6}
              w={5}
            />
          </Box>
          <Box p="10px">
            <Button mr="1rem" >Log In</Button>
            <Button backgroundColor="#007C89" color="white">
              Sign Up Free
            </Button>
          </Box>
        </Flex>
      </Box>
    );
}

export default Navbar;