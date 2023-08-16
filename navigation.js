import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import { Game } from "./screens/Game"
import MainPage from "./screens/MainPage"

import { LanguageProvider } from "./utils/LanguageProvider";
import { ThemeProvider } from "./utils/ThemeProvider";
//import { ItemsProvider } from "./utils/ItemsProvider";

const Navigation = () => {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    }

    const [currentRoute, setCurrentRoute] = React.useState("MainPage");

    const handleNavigationStateChange = (state) => {
        if (state && state.routes && state.routes.length > 0) {
            setCurrentRoute(state.routes[state.index].name);
        }
    };

    return (
        <NavigationContainer onStateChange={handleNavigationStateChange}>
            <LanguageProvider>
                <ThemeProvider>
                    <Stack.Navigator initialRouteName="MainPage" screenOptions={screenOptions} >
                        <Stack.Screen name="MainPage" component={MainPage} />
                        <Stack.Screen name="Game" component={Game} />
                    </Stack.Navigator>
                </ThemeProvider>
            </LanguageProvider>
        </NavigationContainer >
    )
}

export default Navigation