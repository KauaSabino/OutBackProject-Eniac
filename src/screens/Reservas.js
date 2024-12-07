import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Reservas() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [unit, setUnit] = useState(null);
  const [dataReserva, setDataReserva] = useState('');
  const [horaReserva, setHoraReserva] = useState('');
  const [quantPessoas, setQuantPessoas] = useState('');
  const [open, setOpen] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const unitData = [
    { label: 'GRU - Internacional', value: 'GRU-Inter' },
    { label: 'GRU - Maia', value: 'GRU-Maia' },
    { label: 'SP - Parada Inglesa', value: 'SP-Inglesa' },
  ];

  const handleReserva = () => {
    Alert.alert(
      'Sucesso',
      `Reserva feita com sucesso!\nNome: ${nome}\nCPF: ${cpf}\nUnidade: ${unit}\nData: ${dataReserva}\nHora: ${horaReserva}\nPessoas: ${quantPessoas}`
    );
  };

  const handleConfirmDate = (date) => {
    setDataReserva(date.toLocaleDateString());
    setDatePickerVisibility(false);
  };

  const handleConfirmTime = (time) => {
    setHoraReserva(time.toLocaleTimeString());
    setTimePickerVisibility(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.legenda}>
        <Text style={styles.title}>#Reserva</Text>
        <Text style={styles.span}>Reserve sua mesa com antecedência e evite filas de espera.</Text>
      </View>
      <View>
        <Text style={styles.label}>Nome:</Text>
        <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />

        <Text style={styles.label}>CPF:</Text>
        <TextInput placeholder="CPF" value={cpf} onChangeText={setCpf} style={styles.input} keyboardType="numeric" />

        <Text style={styles.label}>Unidade:</Text>
        <DropDownPicker
          open={open}
          value={unit}
          items={unitData}
          setOpen={setOpen}
          setValue={setUnit}
          placeholder="Escolha a unidade"
          style={styles.input}
        />

        <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.datePicker}>
          <Text style={styles.dateText}>{dataReserva || 'Selecionar Data'}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={() => setDatePickerVisibility(false)}
        />

        <TouchableOpacity onPress={() => setTimePickerVisibility(true)} style={styles.datePicker}>
          <Text style={styles.dateText}>{horaReserva || 'Selecionar Hora'}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={() => setTimePickerVisibility(false)}
        />

        <Text style={styles.label}>Quant. de pessoas:</Text>
        <TextInput
          placeholder="Quantidade de Pessoas"
          value={quantPessoas}
          onChangeText={setQuantPessoas}
          style={styles.input}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.botao} onPress={handleReserva}>
          <Text style={styles.txtBotao}>Reservar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  legenda: {
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#A00F2D',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  span: {
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  label: {
    marginTop: 10,
    fontFamily: 'Roboto',
  },
  input: {
    width: '100%',
    height: 40,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    fontFamily: 'Roboto',
    paddingHorizontal: 10,
  },
  botao: {
    width: '100%',
    height: 40,
    backgroundColor: '#A00F2D',
    borderWidth: 0,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  txtBotao: {
    textAlign: 'center',
    color: '#F9AD33',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  datePicker: {
    marginTop: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dateText: {
    fontSize: 16,
    color: '#555',
  },
});
