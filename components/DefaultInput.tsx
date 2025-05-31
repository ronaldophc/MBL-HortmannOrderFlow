import React from "react";
import { TextInput, TextInputProps } from "react-native";

type DefaultInputProps = {
  className?: string;
};

export default function DefaultInput({ className = "", ...props}: TextInputProps) {
  return (
    <TextInput
      className={`h-14 w-full bg-white text-black text-lg rounded-lg mb-4 ${className}`}
      {...props}
    />
  );
}