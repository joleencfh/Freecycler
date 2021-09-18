import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-modern-datepicker';


const TypePicker = ({ types, setTypes }) => (
  <Picker
    selectedValue={types}
    onValueChange={(itemValue) => setTypes(itemValue)}
    style={{ height: 300, width: 300 }}
    itemStyle={{ fontSize: 25, fontFamily: 'Baskerville' }}
  >
    <Picker.Item label="Furniture" value="Furniture" />
    <Picker.Item label="Books" value="Books" />
    <Picker.Item label="Clothing" value="Clothing" />
    <Picker.Item label="Electronics" value="Electronics" />
    <Picker.Item label="Food" value="Food" />
    <Picker.Item label="Home Appliances" value="Home Appliances" />
    <Picker.Item label="Raw Materials" value="Raw Materials" />
    <Picker.Item label="Miscellaneous" value="Miscellaneous" />
  </Picker>
);

const AmountPicker = ({ numItems, setNumItems }) => (
  <Picker
    selectedValue={numItems}
    onValueChange={(itemValue) => setNumItems(itemValue)}
    style={{ height: 300, width: 300 }}
    itemStyle={{ fontSize: 25, fontFamily: 'Baskerville' }}
  >
    <Picker.Item label="0 - 5" value="0 - 5" />
    <Picker.Item label="5 - 10" value="5 - 10" />
    <Picker.Item label="10+" value="10+" />
  </Picker>
);

const CustomDatePicker = ({ setTime }) => (
  <DatePicker
    options={{
      backgroundColor: 'white',
      textHeaderColor: 'black',
      textDefaultColor: 'grey',
      selectedTextColor: '#fff',
      mainColor: 'black',
      textSecondaryColor: '#D6C7A1',
      borderColor: 'rgba(122, 146, 165, 0.1)',
    }}
    onSelectedChange={(date) => setTime(date)}/>
)

export { TypePicker, AmountPicker, CustomDatePicker };
