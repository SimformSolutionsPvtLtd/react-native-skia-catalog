import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {CustomCard, CustomHeader} from '../../components';
import {SkiaComponentData, Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import styles from './styles/styles';

const RenderItems = ({item}: any): React.ReactElement => {
  return (
    <CustomCard style={styles.cardStyle} onPress={item.screen}>
      <Text style={styles.componentNameTextStyle}>{item.name}</Text>
    </CustomCard>
  );
};

const renderSeparator = (): React.ReactElement => {
  return <View style={styles.itemSeparatorStyle} />;
};

const HomeScreen = (): React.ReactElement => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader title={Strings.ANIMATION_COMPONENT} isBackEnabled={false} />
      <FlatList
        style={styles.animatedListStyle}
        ItemSeparatorComponent={renderSeparator}
        data={SkiaComponentData(navigation)}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => <RenderItems item={item} />}
      />
    </View>
  );
};

export default HomeScreen;
