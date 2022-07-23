// import "./App.css";
import "../App.css";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Flex
} from "@chakra-ui/react";
import Footer from "./Footer";

import { useNavigate } from "react-router-dom"

function Homepage() {
  const navigate=useNavigate();

  function handlesignup(){
    navigate("/signup")
  }
  return (
    <>
      <Box w="100%" backgroundColor={"#ffe01a"}>
        <Box w="60%" m="auto" pt="2rem">
          <Flex>
            <Box>
              <Heading
                style={{ fontFamily: "cursive" }}
                textAlign="left"
                fontSize={{ base: "24px", md: "40px", lg: "56px" }}
              >
                Grow your audience and your revenue
              </Heading>
              <br />
              <Text
                fontSize={{ base: "15px", md: "5px", lg: "16px" }}
                textAlign="left"
              >
                Win over new and repeat customers by sending emails and
                automations from a marketing platform that has expert advice
                built in.
              </Text>
              <br />
              <br />
              <Button
                bg={"#007C89"}
                mb="20px"
                color="white"
                padding={"30px"}
                position="revenue"
                onClick={handlesignup}
              >
                Sign Up
              </Button>
            </Box>
            <Box>
              <Image
                h="auto"
                src="https://eep.io/images/yzco4xsimv0y/5EDYfjhY65uLjRNqcJQOKN/a7432a264639c40e2c00c6ffb593d828/Automations_-_Hero_Image_-_060622.png?w=1520&fm=webp&q=70"
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* mid part 1*/}

      <Box w="70%" m="auto">
        <Box mt="100px" mb="100px">
          <Heading textAlign="center">Outperform your last campaign</Heading>
        </Box>
        <Box textAlign={"left"}>
          <Flex justifyContent="space-between" mb="20px">
            <Box>
              <Image
                className="homepagepart1-img"
                h="auto"
                src="https://eep.io/images/yzco4xsimv0y/1W85lekxjWyR49G8Ivf10V/dcd15d0e23f64ee9499978c17ba7e547/BOF-Abandoned-cart_1.jpg?w=760&fm=webp&q=80"
              />
            </Box>
            <Box className="homepagepart1-text">
              <Box>
                <Heading>Sell more with email automations</Heading>
              </Box>
              <Box mt="40px">
                <Text>
                  Generate more orders with our prebuilt automations: remind
                  abandoned cart shoppers, reengage lost customers, or
                  cross-sell your products. Marketers have seen, on average, 4x
                  more orders with our Customer Journey Builder than with bulk
                  emails.
                </Text>
              </Box>
              <Box mt="20px" mb="20px">
                <Button position="revenue">sell more</Button>
              </Box>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" mb="20px">
            <Box mb="15px">
              <Image
                className="homepagepart1-img"
                h="auto"
                src="https://eep.io/images/yzco4xsimv0y/76b1ts3zfjk8TTYommiHJC/c95c27c98b6418ac8d3c240fae52ab1b/MTSB_Audience_Management_Floats__1_.png?w=760&fm=webp&q=80"
              />
            </Box>
            <Box className="homepagepart1-text">
              <Box>
                <Heading>
                  Win repeat business with predictive segmentation
                </Heading>
              </Box>
              <Box>
                <Text mt="10px">
                  Find and target your most valuable customers to help get them
                  to buy again. Marketers have seen, on average, a 76% increase
                  in revenue when using our Customer Lifetime Value and
                  Likelihood to Purchase segments compared to when they didn’t.
                </Text>
              </Box>
              <Box mt="20px" mb="20px">
                <Button position="revenue">Win repeat business</Button>
              </Box>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" mb="20px">
            <Box>
              <Image
                className="homepagepart1-img"
                h="auto"
                src="https://eep.io/images/yzco4xsimv0y/44IeK9HHrKidypOdqF4gSq/7a9b101899656f990c0a1ab2ff256dd9/1_Email_Builder_AUI-3.jpg?w=760&fm=webp&q=80"
              />
            </Box>
            <Box className="homepagepart1-text">
              <Box>
                <Heading>Engage more customers with stand-out emails</Heading>
              </Box>
              <Box mt="40px">
                <Text>
                  Improve your marketing results with suggestions based on what
                  we know works best. We’ll help you create click-worthy
                  contentwith our insights and drag-and-drop design tools.
                </Text>
              </Box>
              <Box mt="20px" mb="20px">
                <Button position="revenue">Engage more customers</Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* mid part 2 */}
      <Box w="100%" bg="#F6F6F4" mt="2rem">
        <Box w="60%" m="auto" pt="10px">
          <Box mt="70px" mb="20px">
            <Heading textAlign="center">Grow with Mailchimp</Heading>
          </Box>
          <Box mb="60px">
            <Text>
              Our marketing platform helps over 13 million businesses like these
              build their thing and keep it growing.
            </Text>
          </Box>
          <Box>
            <Flex justifyContent="space-between">
              <Box w="20%">
                <Box>
                  <Image
                    h="auto"
                    src="https://eep.io/images/yzco4xsimv0y/1UwhzIHudUfFf3IEgUQpLw/4538fff06cb2c15bfae0f2764728ef2f/new-belgium-brewing-logo-A417F22C28-seeklogo.com.png?w=520&fm=webp&q=70"
                  />
                </Box>
                <Box mt="5px">
                  <Text>Customers since 2011</Text>
                </Box>
              </Box>
              <Box w="20%">
                <Box>
                  <Image
                    h="auto"
                    src="https://eep.io/images/yzco4xsimv0y/jZxPQXjesCQjeR0xljc3b/d4e4cf06f6b4951aeab9a41db21f9362/Vimeo_bw.png?w=520&fm=webp&q=70"
                  />
                </Box>
                <Box>
                  <Text>Customers since 2012</Text>
                </Box>
              </Box>
              <Box w="20%">
                <Box>
                  <Image
                    h="auto"
                    src="https://eep.io/images/yzco4xsimv0y/3eGTzHLQxE5I3jBWcPNR7u/efdd88aeb06177041587a91afea4d697/_ted-logo-black-ted-logo-black-and-white.png?w=520&fm=webp&q=70"
                  />
                </Box>
                <Box>
                  <Text>Customers since 2010</Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>

      {/* mid part 3 */}
      <Box w="100%" bg="#FBEECA">
        <Box w="60%" m="auto" pt="10px">
          <Box mt="70px" mb="20px">
            <Heading textAlign="center">
              Keep pushing forward. We've got your back.
            </Heading>
          </Box>
          <Box>
            <Flex justifyContent="space-between">
              <Box w="25%">
                <Box>
                  <Image
                    h="auto"
                    src="https://eep.io/images/yzco4xsimv0y/1zWDKFXdQBZGeColFCtHgf/aa379dc2696f582b48f0e399c8a5f871/support1_b_w.png?w=160&fm=webp&q=80"
                  />
                </Box>
                <Box>
                  <Text textAlign="center">Award-winning support</Text>
                </Box>
                <Box mt="2rem">
                  <Text textAlign="center">
                    Get answers when you need them from our team and marketing
                    resources.
                  </Text>
                </Box>
                <Box className="part3button">
                  <Button position="revenue">Learn more</Button>
                </Box>
              </Box>
              <Box w="25%">
                <Box>
                  <Image
                    h="auto"
                    src="https://eep.io/images/yzco4xsimv0y/2OBlZ0Aun44giirtdr6Fx4/e592f63930574780f28fb792318c5899/thumbsup_b_w.png?w=160&fm=webp&q=80"
                  />
                </Box>
                <Box>
                  <Text textAlign="center">300+ app integrations</Text>
                </Box>
                <Box mt="2rem">
                  <Text textAlign="center">
                    Connect your favorite apps to send more targeted campaigns.
                  </Text>
                </Box>
                <Box className="part3button">
                  <Button position="revenue">Explore apps</Button>
                </Box>
              </Box>
              <Box w="25%">
                <Box>
                  <Image
                    h="auto"
                    src="https://eep.io/images/yzco4xsimv0y/5ZD6ImzMGdQbhR59NIQB7a/b1dbe083df8adfceab2c75a1d66066e4/trustedpros_b_w.png?w=160&fm=webp&q=80"
                  />
                </Box>
                <Box>
                  <Text textAlign="center">Expert guidance</Text>
                </Box>
                <Box mt="2rem">
                  <Text textAlign="center">
                    Work with a Mailchimp partner to take your marketing to the
                    next level.
                  </Text>
                </Box>
                <Box className="part3button">
                  <Button position="revenue">Browse partners</Button>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>

      {/* mid part 4 */}

      <Box w="100%" mt="3rem">
        <Box w="70%" m="auto">
          <Box>
            <Heading textAlign="center">Do it all with Mailchimp</Heading>
            <Text textAlign="center" mt="1rem">
              Bring your audience data, marketing channels, and insights
              together so you can work on reaching your goals faster—all from a
              single platform.
            </Text>
          </Box>
          <Box mt="3rem">
            <Flex justifyContent="space-between" mt="2rem">
              <Box className="homepagepart2-text">
                <Heading>Get your business online</Heading>
                <Text mt="1rem">
                  Give your brand a home with a custom domain. Then launch a
                  website to sell products or take appointments, all with
                  built-in marketing tools to help you boost sales and find
                  fans.
                </Text>
                <Button position="revenue" mt="2rem">
                  Websites and Store
                </Button>
              </Box>
              <Image
                className="homepagepart2-img"
                h="auto"
                src="https://eep.io/images/yzco4xsimv0y/2VXH4llvvqqyqtQJRyrnRH/05cc0990764352838f7a4540265a00ad/MTSB_Website_Builder_Floats-dbFKcJgs.png?w=760&fm=webp&q=80"
              />
            </Flex>
            <Flex justifyContent="space-between" mt="2rem">
              <Box className="homepagepart2-text">
                <Heading>Market your business</Heading>
                <Text mt="1rem">
                  Send the right messages on all the right channels. Build
                  emails, social ads, landing pages, postcards, and more from
                  one place.
                </Text>
                <Button position="revenue" mt="2rem">
                  Marketing campaigns
                </Button>
              </Box>
              <Image
                className="homepagepart2-img"
                h="auto"
                src="https://eep.io/images/yzco4xsimv0y/2EG9TpUR2jS1DuUxiwHQqN/56cf8275691b0f54e4d4a085233796fd/MTSB_Multichannel_Floats-KaFKcJgs.png?w=760&fm=webp&q=80"
              />
            </Flex>
          </Box>
          <Image
            h="auto"
            src="https://eep.io/images/yzco4xsimv0y/3T2UKzEDnnVLn4cijpIg4p/fa461759edd2d39c2872f6c19c938a1a/Hompage-DenverMCA-quote.webp?w=300&fm=webp&q=80"
          />
        </Box>
      </Box>

      {/* mid part 5 */}
      <Box w="100%" mt="10%">
        <Box w="70%" m="auto">
          <Flex justifyContent="space-between">
            <Box w="40%">
              <Heading>
                "Mailchimp allows us to create content that is timely and
                interesting and has worldwide appeal that can drive our
                programming and expand our audience.""
              </Heading>
            </Box>
            <Image
              w="40%"
              h="30%"
              src="https://eep.io/images/yzco4xsimv0y/6GOkQaJXDJQRm5EXo9KPoy/9264fc8b320d7eb132aceb4c50cb59ec/How_the_Museum_of_Contemporary_Art_Denver_Tripled_Their_Email_Revenue-Hero.jpg?w=760&fm=webp&q=80"
            />
          </Flex>
          <Text mt="2rem">
            - Kelly O’Connell, Senior Design & Marketing Manager at MCA Denver
          </Text>
        </Box>
        <Box
          textAlign="center"
          mt="2rem"
          pb="1.5rem"
          backgroundColor={"#ffe01a"}
        >
          <Heading pt="2rem">Let's do this</Heading>
          <Text mt="1rem" pb="1rem">
            Every big idea starts with a small step forward.
          </Text>
          <Button position="revenue">Pick a Plan</Button>
        </Box>
      </Box>
      {/* footer part */}
      <Footer />
    </>
  );
}

export default Homepage;
