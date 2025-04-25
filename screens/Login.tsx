import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
  Appearance,
  useColorScheme,
} from "react-native";

import {
  retrieveCredentials,
  storeCredentials,
} from "../utils/StoreCredentials ";

import AttempLogin from "../utils/DefaultCredentails";
import FormInput from "../components/FormInput";
import TouchableButton from "../components/TouchableButton";
import ErrorMsg from "../components/ErrorMsg";
import HeaderComponent from "../components/Header";
const logo_url = "https://pokeapi.co/static/pokeapi_256.3fa72200.png";
import { UserContext } from "../App";

export default function Login({ navigation }) {
  ///
  const [isLoading, setIsLoading] = useState(true);
  const [isShowingError, setIsShowingError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = React.useContext(UserContext);

  const [colorSchem, setColorSchem] = useState<string>(
    Appearance.getColorScheme()
  );
  const [isDarkMode, setIsDarkMode] = useState(colorSchem === "dark");
  useEffect(() => {
    Appearance.addChangeListener((theme) => {
      setColorSchem(theme.colorScheme);
      setIsDarkMode(colorSchem === "dark");
    });
  }, []);

  useEffect(() => {
    try {
      const attemptAutoLogin = async () => {
        const credentials = await retrieveCredentials();
        if (credentials) {
          navigation.navigate("Info", { user: user });
        }
        setIsLoading(false);
      };

      attemptAutoLogin();
    } catch (error) {
      handleErrorMsg(error);
    }
  }, []);

  const handleErrorMsg = (msg) => {
    msg == "" ? setIsShowingError(false) : setIsShowingError(true);
    setErrorMessage(msg);
  };

  const handleLogin = () => {
    AttempLogin(user)
      .then((message) => {
        handleErrorMsg("");
        storeCredentials(user)
          .then(() => {
            setUser({
              email: "",
              password: "",
            });
            navigation.navigate("Info");
          })
          .catch((error) => {
            handleErrorMsg(error);
          });
      })
      .catch((error) => {
        handleErrorMsg(error);
      });
  };

  //
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#232425" : "#ecf1ee" },
      ]}
    >
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={isDarkMode ? "#ecf1ee" : "#232425"}
        ></ActivityIndicator>
      ) : (
        <View style={[styles.viewContainer]}>
          <HeaderComponent
            source={logo_url}
            isDarkMode={isDarkMode}
            logoSubTitle="Explora información de tus personajes favoritos"
            title="Acceder"
          ></HeaderComponent>
          <View style={styles.form}>
            <FormInput
              isDarkMode={isDarkMode}
              form={user}
              onChangeEmail={(email) => setUser({ ...user, email })}
              onChangePassword={(password) => setUser({ ...user, password })}
            />

            {isShowingError && <ErrorMsg errorMsg={errorMessage} />}

            <TouchableButton label="Acceder" onPress={handleLogin} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  viewContainer: {
    padding: 24,
    flex: 1,
  },
  form: {
    marginTop: 10,
  },
});
