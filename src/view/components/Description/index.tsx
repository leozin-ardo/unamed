import { Text } from "react-native"
import style from "./style"

export default ({ children }: any) => {
    const styles = style();
    return (
        <Text style={styles.content}>
            {children}
        </Text>)
} 
