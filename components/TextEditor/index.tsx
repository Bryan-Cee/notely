/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BubbleEditor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "fontSize",
    "fontFamily",
    "bulletedList",
    "numberedList",
    "fontColor",
    "|",
    "outdent",
    "indent",
    "alignment",
    "|",
    "blockQuote",
    "insertTable",
    "undo",
    "redo",
    "|",
    "highlight",
    "horizontalLine",
  ],

  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
};

interface EditorProps {
  onChange: Function;
  data: string;
}

const Editor: React.FC<EditorProps> = (props) => {
  return (
    <CKEditor
      editor={BubbleEditor}
      config={editorConfiguration}
      data={props.data}
      onChange={(event, editor) => {
        const data = editor.getData();
        props.onChange({ event, editor, data });
      }}
    />
  );
};

export default Editor;
