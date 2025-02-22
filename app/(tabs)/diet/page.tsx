import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import colors from "../../colors";
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function DietLogging() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons name="food-apple-outline" size={32} color={colors.primary} />
          <Text style={styles.title}>Diet Logging</Text>
        </View>

        {/* Meal Logging Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="food-fork-drink" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Meal Logging</Text>
          </View>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="pencil-plus" size={24} color={colors.primary} />
              <Text style={styles.promptText}>What did you eat? Log your meal to understand its impact on your glucose.</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="barcode-scan" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Scan a barcode or search our database to quickly find foods.</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="scale" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>How much did you consume? Adjust the portion size.</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Food Database Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="database-search" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Food Database</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Ionicons name="search" size={24} color={colors.primary} />
              <Text style={styles.promptText}>Search for foods to see their nutritional information.</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="swap-horizontal" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Looking for lower-carb alternatives? Here are some suggestions.</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="heart-outline" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Save your favorite foods for quicker logging next time.</Text>
            </View>
          </View>
        </View>

        {/* Meal Analysis Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <FontAwesome5 name="chart-pie" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Meal Analysis</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="chart-line-variant" size={24} color={colors.primary} />
              <Text style={styles.promptText}>Based on your logs, these foods seem to affect your glucose the most.</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="leaf" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Great job eating more vegetables this week!</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="clock-time-four-outline" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Try logging meals before eating to help with portion awareness.</Text>
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