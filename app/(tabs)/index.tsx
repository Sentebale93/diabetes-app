import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../colors'; // Import your colors

export default function Dashboard() {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("morning");
    else if (hour < 18) setTimeOfDay("afternoon");
    else setTimeOfDay("evening");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good {timeOfDay}!</Text>
          <MaterialCommunityIcons name="bell-outline" size={24} color="#333" />
        </View>

        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.appName}>GlucoGuide</Text>
          <Text style={styles.subtitle}>Your personal diabetes management companion</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Daily Check-in</Text>
            <MaterialCommunityIcons name="heart-pulse" size={24} color={colors.primary} />
          </View>
          <Text style={styles.highlight}>Your glucose has been stable for the past 3 days.</Text>
          <Text style={styles.prompt}>Time for your morning reading</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Weekly Summary</Text>
            <MaterialCommunityIcons name="chart-line" size={24} color={colors.primary} />
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>124</Text>
              <Text style={styles.statLabel}>Avg. Glucose</Text>
              <Text style={styles.statUnit}>mg/dL</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>90%</Text>
              <Text style={styles.statLabel}>Logging Rate</Text>
              <Text style={styles.statUnit}>This Week</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    fontFamily: 'Roboto', // Apply Roboto font
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'Roboto', // Apply Roboto font
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginVertical: 5,
    fontFamily: 'Roboto-Bold', // Apply Roboto Bold font
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 5,
    fontFamily: 'Roboto', // Apply Roboto font
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  highlight: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
    marginBottom: 8,
  },
  prompt: {
    fontSize: 15,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  statUnit: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
}); 