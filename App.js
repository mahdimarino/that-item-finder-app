import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Allitems from './components/allitems';
import Reservations from './components/reservations';
import Home from './components/home';
import { View, Text } from "react-native";
import Logoic from './components/logopic';
import Display from './components/display';
import MainProject from './components/addrequest';
import Requests from './components/requests';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <SafeAreaProvider>

      <NavigationContainer>


        <Drawer.Navigator>
          <Drawer.Screen name="home" component={Home}
            options={{
              title: 'Home', //Set Header Title
              headerStyle: {

                height: 100

              },
              headerTintColor: 'black', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <Logoic />,

            }}
          />
          <Drawer.Screen name="All Items" component={Allitems} />
          <Drawer.Screen name="RESRVATIONS" component={Reservations}
            options={{

              title: 'Reservations', //Set Header Title
              headerStyle: {

                height: 100

              },
              headerTintColor: 'black', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <Logoic />,

            }} />
          <Drawer.Screen name="display" component={Display}
            options={{

              title: 'Display', //Set Header Title
              headerStyle: {

                height: 100

              },
              headerTintColor: 'black', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <Logoic />,

            }} />
          <Drawer.Screen name="add request" component={MainProject}
            options={{

              title: 'Add request', //Set Header Title
              headerStyle: {

                height: 100

              },
              headerTintColor: 'black', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <Logoic />,

            }} />
          <Drawer.Screen name="request" component={Requests}
            options={{

              title: 'Requests', //Set Header Title
              headerStyle: {

                height: 100

              },
              headerTintColor: 'black', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
              headerRight: () => <Logoic />,

            }} />

        </Drawer.Navigator>

      </NavigationContainer>

    </SafeAreaProvider>
  );
}
export default MyDrawer
