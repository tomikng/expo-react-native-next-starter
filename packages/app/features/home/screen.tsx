'use client'

import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Button } from '@my/ui'

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        {/* App Icon */}
        <View style={styles.appIcon}>
          <Text style={styles.iconText}>⚡️</Text>
        </View>

        {/* Main Title */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>React Native Template</Text>

          <Text style={styles.subtitle}>
            A modern cross-platform starter with Next.js and Expo
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>What's Included</Text>

        <View style={styles.featureGrid}>
          <FeatureCard
            icon="⚛️"
            title="React Native"
            description="Cross-platform mobile development"
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
          <FeatureCard
            icon="🎯"
            title="TypeScript"
            description="Type-safe development"
          />
        </View>
      </View>
    </ScrollView>
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
  <View style={styles.featureCard}>
    <Text style={styles.featureIcon}>{icon}</Text>
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    padding: 24,
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 48,
  },
  appIcon: {
    width: 120,
    height: 120,
    backgroundColor: '#F0F0F0',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconText: {
    fontSize: 48,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    maxWidth: 500,
    lineHeight: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  featuresSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 24,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  featureCard: {
    width: 180,
    height: 160,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
  },
})
