import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import colors from "../../colors";
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function Learn() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons name="book-open-page-variant" size={32} color={colors.primary} />
          <Text style={styles.title}>Educational Content</Text>
        </View>

        {/* Education Hub Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="school" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Education Hub</Text>
          </View>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="lightbulb-on" size={24} color={colors.primary} />
              <Text style={styles.promptText}>Expand your diabetes knowledge with these resources.</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="newspaper-variant" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>New article: 'Understanding the Dawn Phenomenon'</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="compass" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>What would you like to learn about today?</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Featured Article Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="text-box" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Featured Article</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="star" size={24} color={colors.primary} />
              <Text style={styles.promptText}>Understanding the Dawn Phenomenon</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.articlePreview}>
                Learn about why blood sugar levels can rise in the early morning hours and strategies to manage this common occurrence...
              </Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Article Actions Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="options" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Article Actions</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="heart-outline" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Did you find this information helpful? Save it to your favorites.</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="pencil-box-multiple" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Take a quick quiz to test your understanding.</Text>
            </View>
            <View style={styles.cardItem}>
              <MaterialCommunityIcons name="share-variant" size={20} color={colors.gray} />
              <Text style={[styles.subText, styles.subTextWithIcon]}>Share this article with your care team or family members.</Text>
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
  cardContent: {
    marginTop: 8,
  },
  articlePreview: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: colors.gray,
    marginBottom: 16,
    lineHeight: 22,
  },
  readMoreButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  readMoreText: {
    color: colors.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
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