import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import CameraView from '../Camera/CameraView';
import Analyze from '../Classify/Analyze'
import ImageView from '../Camera/ImageView';

const Stack = createStackNavigator()

const verticalAnimation = {
    gestureDirection: 'vertical',
    headerBackTitleVisible: false,
    headerTintColor: 'black',
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
          ],
        },
      };
    },
  };

export default function StackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen 
                name="Home" 
                component={CameraView}
                options={{header: () => null}}
            />
            <Stack.Screen 
                name="Analysis" 
                component={Analyze} 
                options={verticalAnimation}
            />
        </Stack.Navigator>
    )
}