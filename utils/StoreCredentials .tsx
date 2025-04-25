import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeCredentials = async (form) => {
  try {
    await AsyncStorage.setItem(
      "userCredentials",
      JSON.stringify({ form })
    ).then(() => {
      return Promise.resolve();
    });
  } catch (error) {
    return Promise.reject("Error al guardar credenciales");
  }
};

export const retrieveCredentials = async () => {
  try {
    const credentials = await AsyncStorage.getItem("userCredentials");
    return credentials ? JSON.parse(credentials) : null;
  } catch (error) {
    return Promise.reject("Algo salió mal al traer el usuario");
    return null;
  }
};

export const logginOut = async () => {
  try {
    const response = await AsyncStorage.clear();
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject("algo salió mal al tratar de salir!");
  }
};
