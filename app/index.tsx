import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
}  from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.baba-blog.com/2024/05/alibabareads_70244_An_cyberpunk-style_avatar_of_an_extreme_e-ka_6c2deedb-ae2f-42ed-a683-785eedd27ae2.png?x-oss-process=style%2Flarge",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>HALLO</Text>
      <Text style={styles.subtitle}>SILAHKAN LOGIN</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Login Successful!")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 30,
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#16213e",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    color: "#fff",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e94560",
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#e94560",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#e94560",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    color: "#e94560",
    fontSize: 14,
    fontWeight: "600",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    color: "#aaa",
    fontSize: 14,
  },
  signupLink: {
    color: "#e94560",
    fontSize: 14,
    fontWeight: "bold",
  },
});
