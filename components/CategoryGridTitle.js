import { View, Pressable, Text } from "react-native";

export const CategoryGridTitle = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>
            {title} - {color}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
