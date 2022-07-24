import {
  Box,Heading,
  Text,Image,Button,Flex , Select
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "../App.css"
function Footer(){
    return (
      <Box w="100%" backgroundColor="#EFEEEA" pt="2rem" cursor="pointer">
        <Box w="70%" m="auto">
          <Flex justifyContent="space-between">
            <Text fontSize="1rem">Related Links:</Text>
            <Text fontSize="0.7rem">
              How To Make a Website: A Guide for Building Your Website
            </Text>
            <Text fontSize="0.7rem">
              How To Start an E‑Commerce Business—a Complete Guide
            </Text>
            <Text fontSize="0.7rem">How To Sell to Any Audience</Text>
          </Flex>
          <br />
          <br />
          <hr />
          <Box pb="3rem">
            <Flex justifyContent="space-between">
              <Box>
                <Flex className="footerText">
                  <Text fontSize="md">Products</Text>
                  <Text>Why Mailchimp?</Text>
                  <Text>Product Update</Text>
                  <Text>Email Marketing</Text>
                  <Text>Websites</Text>
                  <Text>Transactional Email</Text>
                  <Text>How We Compare</Text>
                  <Text>GDPR Compliance</Text>
                  <Text>Security</Text>
                </Flex>
              </Box>
              <Box>
                <Flex className="footerText">
                  <h3>Resources</h3>
                  <Text>Marketing Library</Text>
                  <Text>Free Marketing Tools</Text>
                  <Text>Marketing Glossary</Text>
                  <Text>Integrations Directory</Text>
                </Flex>
              </Box>
              <Box>
                <Flex className="footerText">
                  <Text>Community</Text>
                  <Text>Agencies & Freelancers</Text>
                  <Text>Developres</Text>
                  <Text>Events</Text>
                </Flex>
              </Box>
              <Box>
                <Flex className="footerText">
                  <Text>Company</Text>
                  <Text>Our Story</Text>
                  <Text>Newsroom</Text>
                  <Text>Annual Report</Text>
                  <Text>Careers</Text>
                  <Text>Accessibility</Text>
                </Flex>
              </Box>
              <Box>
                <Flex className="footerText">
                  <Text>Help</Text>
                  <Text>Contact Us</Text>
                  <Text>Hire an Exper</Text>
                  <Text>Help Center</Text>
                  <Text>Talk to salse</Text>
                </Flex>
              </Box>
              <Box>
                <Flex className="footerText">
                  <Image
                    w="50%"
                    alignItems="center"
                    src="https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&fm=webp&q=80"
                  />
                  <Text w="10rem" pt="1rem" pb="1rem">
                    Films, podcasts, and original series that celebrate the
                    entrepreneurial spirit.
                  </Text>
                  <button>
                    check it out <ArrowForwardIcon />
                  </button>
                </Flex>
                <Flex className="footerText" pt="2rem">
                  <Image
                    w="50%"
                    alignItems="center"
                    src="https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?w=260&fm=webp&q=80"
                  />
                  <Text w="10rem" pt="1rem" pb="1rem">
                    Expert insights, industry trends, and inspiring stories that
                    help you live and work on your own terms.
                  </Text>
                  <button>
                    Learn more <ArrowForwardIcon />
                  </button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        <hr />
        <Box w="70%" m="auto" pt="4rem" pb="9rem">
          <Flex justifyContent="space-between">
            <Image
              h="3rem"
              src="https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&fm=webp&q=80"
            />
            <Image
              h="3rem"
              src="https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&fm=webp&q=80"
            />

            <Image
              h="1rem"
              src="https://eep.io/images/yzco4xsimv0y/5daYAeMRSgIUUiSquGwsgI/1904e3f818575ec9625fa15dab193243/icon-facebook.svg?w=320&fm=webp&q=80"
            />
            <Image
              h="1rem"
              src="https://eep.io/images/yzco4xsimv0y/3VjJhbqftKuok6gqYuUQKy/328d56c5d13ad50b9679b11e716bb218/icon-twitter.svg?w=320&fm=webp&q=80"
            />
            <Image
              h="1rem"
              src="https://eep.io/images/yzco4xsimv0y/RlNw7Xkw8uKYAUoYU4aQw/ff3eada8736da9e63fbd9f929c6a677c/icon-instagram.svg?w=320&fm=webp&q=80"
            />
            <Image
              h="1rem"
              src="https://eep.io/images/yzco4xsimv0y/n5saFR4miW4U4ygUIQo0A/8f9c60cb133b80fda2fe9bdb825b4a5f/icon-linkedin.svg?w=320&fm=webp&q=80"
            />
            <Image
              h="1rem"
              src="https://eep.io/images/yzco4xsimv0y/2z1ra9BrgQewIqMQckMasg/58e3e8ec04acd60f0642f89dfbd71218/icon-youtube.svg?w=320&fm=webp&q=80"
            />
            <Image
              h="1rem"
              src="https://eep.io/images/yzco4xsimv0y/7nawBEArBKpxRukK66OZtN/af9879112b20982e13748d47b24c8681/pinterest-logo.svg?w=320&fm=webp&q=80"
            />

            <Box w="10rem">
              <Flex direction="column">
                <Select placeholder="English" size="lg">
                  <option>Espanol</option>
                  <option>Francais</option>
                  <option>Portugues</option>
                  <option>Deutsch</option>
                  <option>Italiano</option>
                </Select>
                <Text fontSize="0.5rem">
                  ©2001-2022 All Rights Reserved. Mailchimp® is a registered
                  trademark of The Rocket Science Group. Apple and the Apple
                  logo are trademarks of Apple Inc. Mac App Store is a service
                  mark of Apple Inc. Google Play and the Google Play logo are
                  trademarks of Google Inc. Privacy | Terms | Cookie Preferences
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    );
}

export default Footer;