import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import HomeScreen from '../Screen/App/HomeScreen/Index';
import OrderScreen from '../Screen/App/OrderScreen/index';

export type RootStackParamList = {
  HomeScreen: undefined,
  OrderScreen: 
  | {
    itemData: any,
  }
| undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;
