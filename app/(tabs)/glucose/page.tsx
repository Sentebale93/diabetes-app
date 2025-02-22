import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import colors from "../../colors";
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

export default function GlucoseMonitoring() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons name="diabetes" size={32} color={colors.primary} />
          <Text style={styles.title}>Glucose Monitoring</Text>
        </View>
        
        {/* Logging Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="add-circle-outline" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>New Reading</Text>
          </View>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="pencil-plus" size={24} color={colors.primary} />
              <Text style={styles.promptText}>Let's record your glucose reading.</Text>
            </View>
            <View style={styles.cardItem}>
              <Ionicons name="time-outline" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>When was this reading taken?</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="run" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Any special circumstances? (Exercise, Illness, Stress)</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Reading Input Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="form-textbox" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Reading Details</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="calculator" size={24} color={colors.primary} />
              <Text style={styles.promptText}>Enter your glucose value:</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="food-apple" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Was this before or after a meal?</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="note-text" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Would you like to add notes about this reading?</Text>
            </View>
          </View>
        </View>

        {/* Trends Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="stats-chart" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Your Trends</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <FontAwesome name="line-chart" size={24} color={colors.primary} />
              <Text style={styles.promptText}>Here are your glucose trends over the past 7 days.</Text>
            </View>
            <View style={styles.cardItem}>
              <Ionicons name="warning-outline" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>We've noticed your readings are highest after dinner. Consider reviewing your evening meals.</Text>
            </View>
            <View style={styles.cardItem}>
              <Ionicons name="finger-print" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Tap on any point to see details about that reading.</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    color: colors.primary,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: colors.black,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.gray + '20',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  promptText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: colors.primary,
    flex: 1,
  },
  subText: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: colors.gray,
  },
  subTextWithIcon: {
    flex: 1,
  },
}); 