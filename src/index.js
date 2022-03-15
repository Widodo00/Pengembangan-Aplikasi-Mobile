import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import home from "./home";
import hasil from "./hasil";

const AppNavigator = createStackNavigator(
    {

        Home: {
            screen: home,
        },
        Hasil: {
            screen: hasil,
        }

    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    },
);

export default createAppContainer(AppNavigator);