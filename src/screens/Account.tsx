import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export default function Account() {
  const user = {
    firstname: "Arsim",
    lastname: "Kosumi",
    email: "arsimkosumi22@hotmail.com",
    message:
      "Hi guys! I apologize for not being able to deliver the assignment on time, and that is because I was working overtime these past weeks since I was, and still am working on multiple different projects. Anyway, I really hope you find this solution to be correct. \n\nKind regards,\nArsim",
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileView}>
          <Text style={styles.profileHeading}>Account</Text>

          <View style={styles.userData}>
            <View style={styles.userName}>
              <Text style={styles.userNameText}>{user.firstname}</Text>
            </View>
            <View style={styles.userName}>
              <Text style={styles.userNameText}>{user.lastname}</Text>
            </View>
          </View>

          <View style={[styles.userName, { width: "100%" }]}>
            <Text style={styles.userNameText}>{user.email}</Text>
          </View>

          <View style={{ marginTop: 40 }}>
            <Text style={styles.userNameText}>{"Little message"}</Text>
          </View>

          <Text
            style={[
              styles.userNameText,
              { marginTop: 30, textAlign: "justify" },
            ]}
          >
            {user.message}
          </Text>
        </View>
      </View>
    </View>
  );
}
