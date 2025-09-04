'use client'

import { Button, Card, H1, H2, Paragraph, Text, XStack, YStack } from '@my/ui'

export const HomeScreen = () => {
  return (
    <YStack
      flex={1}
      backgroundColor="$background"
      padding="$6"
    >
      {/* Hero Section */}
      <YStack
        justifyContent="center"
        alignItems="center"
        paddingVertical="$12"
        space="$6"
      >
        {/* App Icon */}
        <YStack
          width={120}
          height={120}
          backgroundColor="$color6"
          borderRadius="$8"
          justifyContent="center"
          alignItems="center"
          shadowColor="$shadowColor"
          shadowOpacity={0.1}
          shadowRadius={20}
          elevation="$2"
        >
          <Text
            fontSize="$10"
            fontWeight="bold"
          >
            ⚡️
          </Text>
        </YStack>

        {/* Main Title */}
        <YStack
          space="$3"
          alignItems="center"
        >
          <H1
            size="$12"
            fontWeight="$8"
            color="$color12"
            textAlign="center"
            letterSpacing={-1}
          >
            React Native Template
          </H1>

          <Paragraph
            size="$6"
            color="$color11"
            textAlign="center"
            maxWidth={500}
            lineHeight="$7"
          >
            A modern cross-platform starter with Tamagui, Next.js, and Expo
          </Paragraph>
        </YStack>

        {/* Action Buttons */}
        <XStack marginTop="$4">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </XStack>
      </YStack>

      {/* Features Section */}
      <YStack space="$6">
        <H2
          size="$9"
          fontWeight="$7"
          color="$color12"
          textAlign="center"
        >
          What's Included
        </H2>

        <XStack
          space="$4"
          flexWrap="wrap"
          justifyContent="center"
        >
          <FeatureCard
            icon="⚛️"
            title="React Native"
            description="Cross-platform mobile development"
          />
          <FeatureCard
            icon="🎨"
            title="Tamagui"
            description="Universal design system"
          />
          <FeatureCard
            icon="🚀"
            title="Next.js"
            description="Full-stack web framework"
          />
          <FeatureCard
            icon="📱"
            title="Expo"
            description="Easy mobile deployment"
          />
        </XStack>
      </YStack>
    </YStack>
  )
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) => (
  <Card
    size="$4"
    bordered
    backgroundColor="$background"
    borderColor="$color6"
    hoverStyle={{
      borderColor: '$color8',
      backgroundColor: '$color2',
    }}
    pressStyle={{ scale: 0.98 }}
    animation="quick"
    width={180}
    height={160}
    padding="$5"
  >
    <Text
      fontSize="$9"
      textAlign="center"
    >
      {icon}
    </Text>
    <Text
      fontSize="$6"
      fontWeight="$6"
      textAlign="center"
      color="$color12"
    >
      {title}
    </Text>
    <Paragraph
      fontSize="$4"
      textAlign="center"
      color="$color11"
      numberOfLines={3}
      lineHeight="$5"
    >
      {description}
    </Paragraph>
  </Card>
)
