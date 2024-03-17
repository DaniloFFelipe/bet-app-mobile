/* eslint-disable camelcase */
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'

export function useAppFonts() {
  return useFonts({
    Regular: Poppins_400Regular,
    Medium: Poppins_500Medium,
    Bold: Poppins_700Bold,
    SemiBold: Poppins_600SemiBold,
  })
}
