import { View, Text, TouchableOpacity } from 'react-native';

const MyButton = ({ name, cb }) => (
  <TouchableOpacity onPress={cb} style={styles.button}>
    <Icon size={26} name={name} />
  </TouchableOpacity>
);

const Buttons = () => (
  <View style={styles.buttons}>
    <MyButton name="arrowleft" cb={() => setPageNum(pageNum - 1)} />
    <MyButton name="arrowright" cb={() => setPageNum(pageNum + 1)} />
  </View>
);

const FinalPageButtons = ({createPile}) => (
  <View style={styles.buttons}>
    <MyButton name="arrowleft" cb={() => setPageNum(pageNum - 1)} />
    <MyButton name="check" cb={() => createPile()} />
  </View>
);

const Title = ({ text }) => (
  <View>
    <Text style={styles.header}>{text}</Text>
  </View>
);

export { MyButton, Buttons, FinalPageButtons, Title };
