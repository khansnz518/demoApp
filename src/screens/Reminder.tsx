import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Pressable,
    TextInput,
  } from 'react-native';
  import React, {useState} from 'react';
  import {RadioButton} from 'react-native-paper';
  
  type Reminder = {
    title: string;
    completed: boolean;
  };
  
  const defaultReminders: Reminder[] = [
    {
      title: 'React native for Macos',
      completed: false,
    },
    {
      title: 'Build exciting apps',
      completed: false,
    },
    {
      title: 'Be happy',
      completed: true,
    },
  ];
  
  function Reminder(): JSX.Element {
    const [reminder, setReminder] = useState<Reminder[]>(defaultReminders);
    const [newReminder, setNewReminder] = useState('');
  
    const toggleCompletion = (index: number) => {
      const updateReminders = [...reminder];
      updateReminders[index].completed = !updateReminders[index].completed;
      setReminder(updateReminders);
    };
  
    const addReminder = () => {
      if (newReminder.trim() === '') {
        return;
      }
      const updateReminders = [
        ...reminder,
        {title: newReminder.trim(), completed: false},
      ];
      setReminder(updateReminders);
      setNewReminder('');
    };
  
    const renderItem = ({item, index}: {item: Reminder; index: number}) => (
      <Pressable
        style={styles.item}
        onPress={() => {
          toggleCompletion(index);
        }}>
        <RadioButton
          value={item.title}
          status={item.completed ? 'checked' : 'unchecked'}
        />
        <Text style={styles.itemTitle}>{item.title}</Text>
      </Pressable>
    );
  
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}>
          <Text style={styles.title}>Reminders</Text>
          <Text style={styles.title}>{reminder.length}</Text>
        </View>
        <FlatList data={reminder} renderItem={renderItem} />
        <TextInput
          value={newReminder}
          onChangeText={setNewReminder}
          placeholder="Add a new reminder"
          style={styles.input}
          onSubmitEditing={addReminder}
        />
      </View>
    );
  }
  
  export default Reminder;
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#211D2D',
      flex: 1,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      // color: 'royalBlue',
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: '#454547',
      paddingVertical: 5,
    },
    itemTitle: {},
    input: {
      padding: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#454547',
      borderRadius: 5,
    },
  });
  