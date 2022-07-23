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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

var data = JSON.parse(localStorage.getItem("auth")) || [];


function SignUp() {
  const navigate = useNavigate();
  const [from,setFrom]=useState("");
    function handleChange(e){
      const {name,value}=e.target;
      
      setFrom({...from,[name]:value});
    }
    
    function handleSubmit(){
        data.push(from);
        localStorage.setItem("auth",JSON.stringify(data));
        navigate("/login")
    }

  return (
    <Box w="100%">
      <Box>
        <Image
          w="5%"
          h="5%"
          src="https://login.mailchimp.com/release/1.1.19d0ca009868562ca646df985b77cd0605867fde7/images/brand_assets/logos/mc-freddie-dark.svg"
        />
      </Box>
      <Box w="40%" m="auto">
        <Box textAlign="center" pt="1rem">
          <Heading>Sign Up for Mailchimp</Heading>
          <Text pt="2rem">Create a free account or log in</Text>
        </Box>
        <Box>
          <Text pb="1rem">Email</Text>
          <Input position="revert" name="email" onChange={handleChange} />
          <Text pt="1rem" pb="1rem">
            Username
          </Text>
          <Input position="revert" name="username" onChange={handleChange} />
          <Box>
            <Flex justifyContent="space-between">
              <Text pt="1rem" pb="1rem">
                Password
              </Text>
              <Box pt="1rem">
                <Flex>
                  <ViewIcon mt="0.3rem" />
                  <Text pl="0.4rem">Show</Text>
                </Flex>
              </Box>
            </Flex>
            <Input
              position="revert"
              type="password"
              name="password"
              onChange={handleChange}
            />
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
            <Text pb="2rem" pt="2rem">
              By creating an account, you agree to our Terms and have read and
              acknowledge the Global Privacy Statement.
            </Text>
          </Box>
          <Button onClick={handleSubmit} w="100%">
            Sign Up
          </Button>
        </Box>
        <Text pt="2rem" textAlign="center" fontSize="0.5rem">
          ©2001–2022 All Rights Reserved. Mailchimp® is a registered trademark
          of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and
          Terms.
        </Text>
        <Text pt="3rem" textAlign="center" fontSize="0.5rem">
          Invisible reCAPTCHA by Google Privacy Policy and Terms of Use.
        </Text>
      </Box>
    </Box>
  );
}

export default SignUp;
