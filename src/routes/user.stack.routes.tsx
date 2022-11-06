import React, {useContext} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen, Group } = createNativeStackNavigator();
import { UserTabRoutes } from './user.tab.routes';

// Para não logados
import { Login } from '@screens/Login'
import { Register } from '@screens/Register'
import { DetailStore } from '@screens/DetailStore'
import { RegisterStore } from '@screens/RegisterStore'
import { Me } from '@screens/Me'

import { AuthContext } from '@hooks/auth'

export function UserStackRoutes(){

    const { isAuthenticated } = useContext(AuthContext)

    return (
        <Navigator screenOptions={{ headerShown: false }} >
            { 
                isAuthenticated ? (
                    <Group>
                        <Screen name="UserTabRoutes" component={UserTabRoutes}/>
                        <Screen name="DetailStore" component={DetailStore} />
                        <Screen name="RegisterStore" component={RegisterStore} />
                        <Screen name="Me" component={Me} />
                    </Group>
                ) : (
                    <Group>
                        <Screen name="UserTabRoutes" component={UserTabRoutes} />
                        <Screen name="DetailStore" component={DetailStore} />
                        <Screen name="Login" component={Login} />
                        <Screen name="Register" component={Register} />
                    </Group>
                )
            }
        </Navigator>
    );
}