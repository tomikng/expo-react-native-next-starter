import { Button, Text, YStack } from '@my/ui'

export const HomeScreen = () => {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding="$spacing-xl"
      backgroundColor="$bg-primary"
    >
      <Text
        fontSize="$display-md"
        fontWeight="$7"
        color="$text-primary"
        marginBottom="$spacing-xl"
      >
        Welcome to React Native Template
      </Text>
      <Text
        fontSize="$text-lg"
        color="$text-secondary"
        textAlign="center"
        marginBottom="$spacing-2xl"
      >
        A clean starter template with Tamagui, Next.js, and Expo
      </Text>
      <Button variant="primary">Get Started</Button>
    </YStack>
  )
}
