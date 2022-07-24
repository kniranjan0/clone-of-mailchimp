import {
  Box,
  Input,
  Flex,
  Text,
  Heading,
  Button,
  Checkbox,
  Image,
} from "@chakra-ui/react";
import "../App.css";
import { ViewIcon } from "@chakra-ui/icons";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("auth")) || [];
  const [from, setFrom] = useState("");

  function handleNameChange(e) {
    const { name, value } = e.target;
    setFrom({ ...from, [name]: value });
  }
  console.log(data);

  function handleSubmit() {
    let isUser = false;
    //console.log(data);
    data.forEach(function (el) {
      if (el.username === from.name && el.password === from.password) {
        isUser = true;
      }
    });
    if (isUser) {
      alert("Login successful");
      navigate("/home");
    } else {
      alert("User Not Exist");
      // window.location.reload();
    }
  }

  function handleShow() {
    console.log(from);
  }

  function handlelogin(){
    navigate("/signup")
  }
  function handleHome(){
    navigate("/home")
  }
  return (
    <Box w="100%" h="100%" className="loginimg">
      <Box w="40%" bg="white" pl="1rem" m="auto">
        <Box>
          <Image
            w="7%"
            h="7%"
            onClick={handleHome}
            cursor="pointer"
            src="https://login.mailchimp.com/release/1.1.19d0ca009868562ca646df985b77cd0605867fde7/images/brand_assets/logos/mc-freddie-dark.svg"
          />
        </Box>
        <Heading textAlign="center">Log In</Heading>
        <Box pt="0.9rem">
          <Flex>
            <Text>Need a MailChimp account ?</Text>
            <Text onClick={handlelogin} cursor="pointer" bg="bule" pl="0.5rem" color="blue"> Create an account</Text>
          </Flex>
        </Box>
        <Text pt="1rem" pb="1rem">Username</Text>
        <Input
          position="revert"
          name="name"
          onChange={handleNameChange}
          w="95%"
        />
        <Box pt="2rem" w="95%">
          <Flex justifyContent="space-between">
            <Text pb="1rem">Password</Text>
            <Box>
              <Flex>
                <ViewIcon mt="0.3rem" onClick={handleShow} />
                <Text pl="0.4rem">Show</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Input
          position="revert"
          name="password"
          type="password"
          onChange={handleNameChange}
          w="95%"
        />
        <Box pt="2rem" w="95%">
          <Flex alignItems="center" justifyContent="center">
            <Checkbox size="lg" colorScheme="blue" defaultChecked pr="1rem" />
            <Text>Keep me logged in</Text>
          </Flex>
        </Box>
        <Button onClick={handleSubmit} mt="2rem" w="95%">
          Log In
        </Button>
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
