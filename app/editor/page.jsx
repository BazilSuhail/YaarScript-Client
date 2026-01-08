import React from "react";
import EditorClient from "../../components/editor/EditorClient";

export const metadata = {
  title: "Editor | YaarScript",
  description: "Interactive playground for YaarScript.",
};

export default function EditorPage() {
  return <EditorClient />;
}