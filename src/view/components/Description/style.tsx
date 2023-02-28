import { StyleSheet } from "react-native"
import normalize from "@utils/normalize"
import { useTheme } from "@provider/theme"

export default () => {
    const {theme} = useTheme();

    return StyleSheet.create({
        content: {
            fontSize: normalize(18),
            color: theme.colors.text,
            fontFamily: "Roboto-Medium"
        }
    })
}