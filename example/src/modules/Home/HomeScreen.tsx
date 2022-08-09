import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {CustomCard, CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {AnimationComponentData} from '../../constants/DummyData';
import {NavProps} from '../../navigation/types';
import styles from './styles/styles';

const RenderItems = ({item}: any) => {
  return (
    <CustomCard style={styles.cardStyle} onPress={item.screen}>
      <Text style={styles.componentNameTextStyle}>{item.name}</Text>
    </CustomCard>
  );
};

const renderSeparator = () => {
  return <View style={styles.itemSeparatorStyle} />;
};

const HomeScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader title={Strings.ANIMATION_COMPONENT} isBackEnabled={false} />
      <FlatList
        style={styles.animatedListStyle}
        ItemSeparatorComponent={renderSeparator}
        data={AnimationComponentData(navigation)}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => <RenderItems item={item} />}
      />
    </View>
  );
};

export default HomeScreen;
