import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Spacer,
  Flex,
} from "@chakra-ui/react";

function Homepage() {
  return (
    <>
      <Box w="100%" h="400px" backgroundColor={"#ffe01a"}>
        <Box w="60%" m="auto" pt="2rem">
          <Flex>
            <Box>
              <Heading style={{ fontFamily: "cursive" }}>
                Grow your audience and your revenue
              </Heading>
              <br />
              <Text>
                Win over new and repeat customers by sending emails and
                automations from a marketing platform that has expert advice
                built in.
              </Text>
              <br />
              <br />
              <Button
                bg={"#007C89"}
                color="white"
                padding={"30px"}
                position="revenue"
              >
                Sign Up
              </Button>
            </Box>
            <Box>
              <Image src="https://eep.io/images/yzco4xsimv0y/5EDYfjhY65uLjRNqcJQOKN/a7432a264639c40e2c00c6ffb593d828/Automations_-_Hero_Image_-_060622.png?w=1520&fm=webp&q=70" />
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* mid part 1*/}

      <Box w="70%" m="auto">
        <Box mt="100px" mb="100px">
          <Heading>Outperform your last campaign</Heading>
        </Box>
        <Flex textAlign={"left"}>
          <Box mr="100px">
            <Box mb="15px">
              <Image src="https://eep.io/images/yzco4xsimv0y/1W85lekxjWyR49G8Ivf10V/dcd15d0e23f64ee9499978c17ba7e547/BOF-Abandoned-cart_1.jpg?w=760&fm=webp&q=80" />
            </Box>
            <Box mb="15px">
              <Image src="https://eep.io/images/yzco4xsimv0y/76b1ts3zfjk8TTYommiHJC/c95c27c98b6418ac8d3c240fae52ab1b/MTSB_Audience_Management_Floats__1_.png?w=760&fm=webp&q=80" />
            </Box>
            <Box>
              <Image src="https://eep.io/images/yzco4xsimv0y/44IeK9HHrKidypOdqF4gSq/7a9b101899656f990c0a1ab2ff256dd9/1_Email_Builder_AUI-3.jpg?w=760&fm=webp&q=80" />
            </Box>
          </Box>
          <Box w="90%">
            <Box>
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
            <Box mt="90px">
              <Box>
                <Heading>
                  Win repeat business with predictive segmentation
                </Heading>
              </Box>
              <Box mt="40px">
                <Text>
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
            <Box>
              <Box mt="40px">
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
          </Box>
        </Flex>
      </Box>
      {/* mid part 2 */}
      <Box w="100%" bg="#F6F6F4" mt="2rem">
        <Box w="60%" m="auto" pt="10px">
          <Box mt="70px" mb="20px">
            <Heading>Grow with Mailchimp</Heading>
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
                  <Image src="https://eep.io/images/yzco4xsimv0y/1UwhzIHudUfFf3IEgUQpLw/4538fff06cb2c15bfae0f2764728ef2f/new-belgium-brewing-logo-A417F22C28-seeklogo.com.png?w=520&fm=webp&q=70" />
                </Box>
                <Box mt="5px">
                  <Text>Customers since 2011</Text>
                </Box>
              </Box>
              <Box w="20%">
                <Box>
                  <Image src="https://eep.io/images/yzco4xsimv0y/jZxPQXjesCQjeR0xljc3b/d4e4cf06f6b4951aeab9a41db21f9362/Vimeo_bw.png?w=520&fm=webp&q=70" />
                </Box>
                <Box>
                  <Text>Customers since 2012</Text>
                </Box>
              </Box>
              <Box w="20%">
                <Box>
                  <Image src="https://eep.io/images/yzco4xsimv0y/3eGTzHLQxE5I3jBWcPNR7u/efdd88aeb06177041587a91afea4d697/_ted-logo-black-ted-logo-black-and-white.png?w=520&fm=webp&q=70" />
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
      <Box w="100%" bg="#F6F6F4" mt="2rem">
        <Box w="60%" m="auto" pt="10px">
          <Box mt="70px" mb="20px">
            <Heading>Keep pushing forward. We've got your back.</Heading>
          </Box>
          <Box>
            <Flex justifyContent="space-between">
              <Box w="25%">
                <Box>
                  <Image src="https://eep.io/images/yzco4xsimv0y/1zWDKFXdQBZGeColFCtHgf/aa379dc2696f582b48f0e399c8a5f871/support1_b_w.png?w=160&fm=webp&q=80" />
                </Box>
                <Box>
                  <Text>Award-winning support</Text>
                </Box>
                <Box>
                  <Text textAlign="center">
                    Get answers when you need them from our team and marketing
                    resources.
                  </Text>
                </Box>
                <Box>
                  <Button>Learn more</Button>
                </Box>
              </Box>
              <Box w="20%">
                <Box>
                  <Image src="https://eep.io/images/yzco4xsimv0y/jZxPQXjesCQjeR0xljc3b/d4e4cf06f6b4951aeab9a41db21f9362/Vimeo_bw.png?w=520&fm=webp&q=70" />
                </Box>
                <Box>
                  <Text>Customers since 2012</Text>
                </Box>
              </Box>
              <Box w="20%">
                <Box>
                  <Image src="https://eep.io/images/yzco4xsimv0y/3eGTzHLQxE5I3jBWcPNR7u/efdd88aeb06177041587a91afea4d697/_ted-logo-black-ted-logo-black-and-white.png?w=520&fm=webp&q=70" />
                </Box>
                <Box>
                  <Text>Customers since 2010</Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      {/* footer part */}
    </>
  );
}

export default Homepage;
