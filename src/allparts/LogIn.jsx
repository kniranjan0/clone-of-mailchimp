import { Box,Input, Flex,Text,Heading,Button,Checkbox,Image } from "@chakra-ui/react";
import "../App.css"
import { ViewIcon } from "@chakra-ui/icons";
function LogIn(){
    return (
      <Box w="100%" h="100%" className="loginimg">
        <Box w="30%" bg="white" pl="1rem" m="auto">
          <Box>
            <Image
              w="7%"
              h="7%"
              src="https://login.mailchimp.com/release/1.1.19d0ca009868562ca646df985b77cd0605867fde7/images/brand_assets/logos/mc-freddie-dark.svg"
            />
          </Box>
          <Heading>Log In</Heading>
          <Text pt="1rem">
            Need a MailChimp account? <ul>Create an account</ul>
          </Text>
          <Text pt="2rem">Username</Text>
          <Input w="95%" />
          <Box pt="2rem" w="95%">
            <Flex justifyContent="space-between">
              <Text>Password</Text>
              <Box>
                <Flex>
                  <ViewIcon />
                  <Text pl="0.4rem">Show</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Input pb="2rem" w="95%" />
          <Button mt="2rem" w="95%">
            Log In
          </Button>
          <Box pt="2rem" w="95%">
            <Flex justifyContent="space-between">
              <Checkbox size="lg" colorScheme="blue" defaultChecked pr="1rem" />
              <Text>Keep me logged in</Text>
            </Flex>
          </Box>
          <Box pt="2rem" w="95%">
            <Flex justifyContent="space-between">
              <Text>Forgot username? .</Text>
              <Text>Forgot password?</Text>
            </Flex>
          </Box>
          <Text pt="2rem" fontSize="0.7rem">
            ©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark
            of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and
            Terms.
          </Text>
        </Box>
      </Box>
    );
}

export default LogIn;
// background-image: url(https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg)