import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box bg="brand.700" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="xl" textAlign="center">Financial News</Heading>
        </Box>

        {/* Headlines Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>Headlines</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">Headline 1</Heading>
                <Text mt={2}>Summary of the headline news article. This is a brief description to give readers an idea of the content.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">Headline 2</Heading>
                <Text mt={2}>Summary of the headline news article. This is a brief description to give readers an idea of the content.</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        {/* Market Data Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">Market 1</Heading>
                <Text mt={2}>Details about market 1.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">Market 2</Heading>
                <Text mt={2}>Details about market 2.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">Market 3</Heading>
                <Text mt={2}>Details about market 3.</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        {/* Featured Articles Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>Featured Articles</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Image src="/path/to/image1.jpg" alt="Article 1" mb={4} />
                <Heading as="h3" size="md">Article 1</Heading>
                <Text mt={2}>Summary of the featured article. This is a brief description to give readers an idea of the content.</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="md">
                <Image src="/path/to/image2.jpg" alt="Article 2" mb={4} />
                <Heading as="h3" size="md">Article 2</Heading>
                <Text mt={2}>Summary of the featured article. This is a brief description to give readers an idea of the content.</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;