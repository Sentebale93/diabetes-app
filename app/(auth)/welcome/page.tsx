import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import colors from "../../colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../../assets/images/logo.webp')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Title Section */}
        <Text style={styles.title}>Welcome to Gluco</Text>
        <Text style={styles.subtitle}>
          Your personal diabetes management companion.{'\n'}
          Track glucose levels, manage medications, and stay{'\n'}
          healthier with personalized insights.
        </Text>

        {/* Features Section */}
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="chart-line" size={32} color="#0066FF" />
            </View>
            <Text style={styles.featureText}>Easy Tracking</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="bell-outline" size={32} color="#0066FF" />
            </View>
            <Text style={styles.featureText}>Smart Reminders</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="file-document-outline" size={32} color="#0066FF" />
            </View>
            <Text style={styles.featureText}>Share Reports</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttons}>
          <Link href="/(auth)/register/page">
            <TouchableOpacity style={styles.getStartedButton}>
              <Text style={styles.getStartedText}>Get</Text>
            </TouchableOpacity>
          </Link>

          <View style={styles.secondaryActions}>
            <Link href="/(auth)/login/page">
              <TouchableOpacity>
                <Text style={styles.loginText}>Logi</Text>
              </TouchableOpacity>
            </Link>
            <TouchableOpacity>
              <Text style={styles.learnMoreText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 24,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    color: '#E32F45',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#0066FF',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 48,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 48,
  },
  featureItem: {
    alignItems: 'center',
    gap: 8,
  },
  iconContainer: {
    width: 56,
    height: 56,
    backgroundColor: 'rgba(0, 102, 255, 0.1)',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#0066FF',
    textAlign: 'center',
  },
  buttons: {
    width: '100%',
    gap: 24,
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#E32F45',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  getStartedText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
  secondaryActions: {
    flexDirection: 'row',
    gap: 32,
  },
  loginText: {
    color: '#0066FF',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  learnMoreText: {
    color: '#0066FF',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
}); 