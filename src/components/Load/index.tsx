import React from 'react'

import theme from '../../theme'
import { ActivityIndicator } from 'react-native'

interface LoadProps {
    size: number
}

export function Load({size} : LoadProps) {
    return (
        <ActivityIndicator
        size={size}
        color={theme.COLORS.TEXT}
        />
    )
}