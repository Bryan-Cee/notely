import { CKEditor } from "@ckeditor/ckeditor5-react";
import BubbleEditor from "ckeditor5-custom-build/build/ckeditor";
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

export interface EditorProps {
  data: string;
  onChange: (args: unknown) => void;
}

const Editor: React.FC<EditorProps> = (props) => {
  return (
    <CKEditor
      config={editorConfiguration}
      data={props.data}
      editor={BubbleEditor as unknown}
      onChange={(event: unknown, editor: { getData: () => string }) => {
        const data = editor.getData();

        props.onChange({ event, editor, data });
      }}
    />
  );
};

export default Editor;
