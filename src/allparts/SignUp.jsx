import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  Input,
  Checkbox,
} from "@chakra-ui/react";

import { ViewIcon } from "@chakra-ui/icons";
function SignUp() {
  return (
    <Box w="100%">
      <Box>
        <Image
          w="5%"
          h="5%"
          src="https://login.mailchimp.com/release/1.1.19d0ca009868562ca646df985b77cd0605867fde7/images/brand_assets/logos/mc-freddie-dark.svg"
        />
      </Box>
      <Box w="50%" m="auto">
        <Box textAlign="center" pb="2rem">
          <Heading>Sign Up for Mailchimp</Heading>
          <Text>Create a free account or log in</Text>
        </Box>
        <Box>
          <Text>Email</Text>
          <Input />
          <Text>Username</Text>
          <Input />
          <Box>
            <Flex justifyContent="space-between">
              <Text>Password</Text>
              <Box>
                <Flex>
                  <ViewIcon />
                  <Text pl="0.4rem">Show</Text>
                </Flex>
              </Box>
            </Flex>
            <Input />
          </Box>
          <Box pt="2rem">
            <Flex justifyContent="space-between">
              <Checkbox size="lg" colorScheme="blue" defaultChecked pr="1rem" />
              <Text>
                I don't want to receive emails about Mailchimp and related
                Intuit product and feature updates, marketing best practices,
                and promotions from Mailchimp.
              </Text>
            </Flex>
            <Text pt="2rem">
              By creating an account, you agree to our Terms and have read and
              acknowledge the Global Privacy Statement.
            </Text>
          </Box>
          <Button w="100%">Sign Up</Button>
        </Box>
        <Text pt="2rem" textAlign="center">
          ©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark
          of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and
          Terms.
        </Text>
        <Text pt="3rem" textAlign="center">
          Invisible reCAPTCHA by Google Privacy Policy and Terms of Use.
        </Text>
      </Box>
    </Box>
  );
}

export default SignUp;
