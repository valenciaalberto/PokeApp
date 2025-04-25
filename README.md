## Get started

1. Instrucciones de instalación!

   gh repo clone valenciaalberto/PokeApi

2. dependencias utilizadas

   ```
   @expo/metro-runtime
   @react-native-async-storage/async-storage
   @react-navigation/native
   @react-navigation/native-stack
   react-native-async-storage
   react-native-safe-area-context
   react-native-screens
   expo-router":
   @expo/vector-icons/MaterialIcons",
   expo-system-ui
   ```

3. LoginCredentials

   text@example.com
   123456

4. Decisiones técnicas

   AppScreen:
   -decidí tener una pantalla como main dónde contenga las 2 pantallas que voy a utilizar en el projecto.
   -Aquí mismo incluí ambas pantallas Login/PokeInfo que llevará la aplicación en sí.
   -Agregué el contexto global que llevarán las ventanas para que así pueda autenticar si el usuario está logeado o no.

   Login Screen
   -Aquí agregué todos los componentes requeridos, cómo son las credenciales Default, el Formulario, Componente de Botón customizable y el encabezado.
   -Manejo de la apariencia dependiendo si es este está en Light/Dark.
   -Manejo de Login y errores, dependiendo si están campos vacíos o que no concuerdan con las credenciales default, de lo contrario, pasar sig ventana.
   -Utilización de Un "activityIndicator" si en dado caso está tratando de proecesar la información de la forma.
   -Utilización del SafeArea View para que todo el contenido esté encapsualdo en un área que el dispositivo considere como válida.

   InfoPoke:
   -Pantalla Principal.
   -Utilización de un ImageBackground de un campo de batalla para que se viera como una PokeDex.
   -Reutilización de componentes como el Botón de Logout.
   -Utilización de FlexList para mostrar la cantidad de pokemons deseados en el request con el PokeApi : Default = 150. Mostrar con un delay de 250ms para cada pokemón, haciendo el efecto de carga y una entrada de desvanecimiento.
   -Utilización de un Modal (PokeModal) para visualizar más detalles del pokemón. utilización de animación de entrada
   -Manejo de Errores con un Modal (ErrorModal), si en dado caso la aplicación tenga un Error con la PokeApi, este sepa manejar el error y mostrarlo en un Modal con el error que lo produjo.

   Notas:
   -Plantación de que componentes pudiera descomponer en pequeños componentes, como son la lista de pokemons en cada elemento para su retulilización
   -Utilizar un mismo modal para mostrar Errores
   -Utilización de Modal con más detalle y amplitud para mostrar detalles de pokemón,
   -Decidí usar en 1 sóla ocasión el children de ReactNode, ya que era muy extenso la pantalla de InfoPoke por querer customizar un poco más el modal
   -Decidí usar un modal distinto para la muestra de Pokemons, para que este tuviera más espaciado y otro estilo de colores

   -

5. Bonuses
   -Paginación infinita usando FlatList, reutilización de componentes para mostrar cada uno de los pokemons y sus imagenes
   -Manejo de errores, usando un try-catch de eventos que pudieran suceder como el fallo de la PokeAPI, usando un modal para mostrar que tuvo un error y a su vez desplegando el error debido
   -Pantalla de detalle:
   Utilización de un modal para mostrar más detalles del pokemón, como su experiencia base, tipos, estadisticas, altura e imagen de nuevo.
   -Animaciones sutiles:
   Utilicé una entrada sutil para los modales que fuera de tipo "slide" y a su vez en la muestra de los pokemons, teniendo un delay de 250ms
   por pokemón, entrada con transparencia para que de un efecto que la aplicación muestre sutilmente cada uno de los pokemons mostrados.
   -Data fetching
   Tradicional fetch de datos para recuperar la info de la API
