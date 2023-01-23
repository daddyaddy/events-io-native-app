import styles from "./index.style";
import { Text, TextInput, View } from "react-native";

const FormPart = (props) => {
  const { inputProps, ownInput, style, icon, label, isRequired } = props;
  return (
    <View style={{ ...styles.form_part, ...style }}>
      <View style={styles.input_view}>
        {icon !== undefined && <View style={styles.icon_view}>{icon}</View>}
        {ownInput === undefined ? (
          <TextInput
            placeholder={`${label}${isRequired && "*"}`}
            style={{ ...styles.input, ...inputProps.style }}
            {...inputProps}
          />
        ) : (
          ownInput
        )}
      </View>
    </View>
  );
};

export default FormPart;
