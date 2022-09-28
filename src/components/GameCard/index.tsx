import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps {
    id: string;
    bannerUrl: string;
    title: string;
    _count: {
        ads: number;
    }
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground 
            style={styles.bannerUrl}
            source={{uri: data.bannerUrl}}
        >
            
            <LinearGradient 
                colors={THEME.COLORS.FOOTER}
                style={styles.footer}
                >
                <Text style={styles.name}>
                    {data.title}
                </Text>
                <Text style={styles.ads}>
                    {data._count.ads} anúncios
                </Text>
            </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>


  );
}