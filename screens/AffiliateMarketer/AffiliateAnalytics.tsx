import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";

const AffiliateAnalyticsScreen = () => {
  const [selectedMetric, setSelectedMetric] = useState<"sales" | "visitors" | "ctr">("sales");
  const [selectedTab, setSelectedTab] = useState<"performance" | "tracking">("performance");

  // Dummy Data for the Graph
  const dataSets = {
    sales: [500, 700, 800, 650, 1200, 1300, 1500],
    visitors: [100, 150, 200, 180, 220, 250, 300],
    ctr: [2.5, 3.0, 3.2, 3.5, 3.8, 4.0, 4.2],
  };

  // Dummy Data for Tables
  const productPerformanceData = [
    { id: 1, name: "Product A", stock: 50, sales: 200, rating: 4.5, link: 234 },
    { id: 2, name: "Product B", stock: 30, sales: 150, rating: 4.2, link: 45 },
    { id: 3, name: "Product C", stock: 20, sales: 120, rating: 4.0, link: 544 },
    { id: 4, name: "Product D", stock: 10, sales: 90, rating: 3.8, link: 432 },
    { id: 5, name: "Product E", stock: 60, sales: 250, rating: 4.7, link: 2 },
    { id: 6, name: "Product F", stock: 40, sales: 180, rating: 4.3, link: 98 },
  ];

  const orderTrackingData = [
    { id: 101, summary: "Order 1", status: "Delivered", payment: "Paid" },
    { id: 102, summary: "Order 2", status: "Pending", payment: "Unpaid" },
    { id: 103, summary: "Order 3", status: "Shipped", payment: "Paid" },
    { id: 104, summary: "Order 4", status: "Processing", payment: "Pending" },
    { id: 105, summary: "Order 5", status: "Delivered", payment: "Paid" },
    { id: 106, summary: "Order 6", status: "Pending", payment: "Unpaid" },
  ];
  return (
    <ScrollView style={styles.container}>
      {/* Dashboard Title */}
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.divider} />

      {/* Total Sales */}
      <Text style={styles.totalSales}>Total Sales: Rs 50,000</Text>

      {/* Toggle Buttons */}
      <View style={styles.buttonContainer}>
        {["sales", "visitors", "ctr"].map((metric) => (
          <TouchableOpacity
            key={metric}
            style={[
              styles.button,
              selectedMetric === metric ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => setSelectedMetric(metric as "sales" | "visitors" | "ctr")}
          >
            <Text
              style={[
                styles.buttonText,
                selectedMetric === metric ? styles.activeText : styles.inactiveText,
              ]}
            >
              {metric.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Line Chart */}
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [{ data: dataSets[selectedMetric] }],
        }}
        width={350}
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(39, 174, 96, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 10 },
          propsForDots: { r: "5", strokeWidth: "2", stroke: "#253A3D" },
        }}
        bezier
        style={styles.chart}
      />

      {/* Divider Below Graph */}
      <View style={styles.sectionDivider} />

      {/* Tab Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedTab === "performance" ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setSelectedTab("performance")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedTab === "performance" ? styles.activeText : styles.inactiveText,
            ]}
          >
            Product Performance
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedTab === "tracking" ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setSelectedTab("tracking")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedTab === "tracking" ? styles.activeText : styles.inactiveText,
            ]}
          >
            Order Tracking
          </Text>
        </TouchableOpacity>
      </View>

      {/* Table Section */}
      <ScrollView horizontal>
        <View>
          <View style={styles.tableHeader}>
            {(selectedTab === "performance" ? ["Product ID", "Product Name", "Stock", "Sales", "Avg Rating", "Affiliate Link"] : ["Order ID", "Order Summary", "Delivery Status", "Payment Status"]).map((col) => (
              <Text key={col} style={styles.tableHeaderText}>{col}</Text>
            ))}
          </View>
          {(selectedTab === "performance" ? productPerformanceData : orderTrackingData).map((row, index) => (
            <View key={index} style={styles.tableRow}>
              {Object.values(row).map((val, i) => (
                <Text key={i} style={styles.tableCell}>{val}</Text>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  // title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  // divider: { height: 2, backgroundColor: "#253A3D", marginBottom: 15 },
  sectionDivider: { height: 2, backgroundColor: "#253A3D", marginVertical: 20 },
  // totalSales: { fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 20 },
  // buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  // button: { flex: 1, padding: 12, marginHorizontal: 5, borderRadius: 8, alignItems: "center" },
  // activeButton: { backgroundColor: "#253A3D" },
  // inactiveButton: { borderWidth: 2, borderColor: "#253A3D" },
  // buttonText: { fontSize: 16, fontWeight: "bold" },
  // activeText: { color: "#fff" },
  // inactiveText: { color: "#000" },
  chart: { marginVertical: 10, borderRadius: 10 },
  // tableContainer: { marginTop: 20 },
  // tableHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  // tableRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, borderBottomWidth: 1 },

  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  divider: { height: 2, backgroundColor: "#253A3D", marginVertical: 15 },
  totalSales: { fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 20 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  button: { flex: 1, padding: 12, marginHorizontal: 5, borderRadius: 8, alignItems: "center" },
  activeButton: { backgroundColor: "#253A3D" },
  inactiveButton: { borderWidth: 2, borderColor: "#253A3D" },
  buttonText: { fontSize: 16, fontWeight: "bold" },
  activeText: { color: "#fff" },
  inactiveText: { color: "#000" },
  tableHeader: { flexDirection: "row", backgroundColor: "#253A3D", padding: 10, borderRadius: 5},
  tableHeaderText: { flex: 1, color: "#fff", fontWeight: "bold", textAlign: "center", marginEnd:15 },
  tableRow: { flexDirection: "row", paddingVertical: 10,textAlign: "center" },
  tableCell: { flex: 1, textAlign: "center", padding: 5 },
});

export default AffiliateAnalyticsScreen;
