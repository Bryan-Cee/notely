import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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

const Editor: React.FC<EditorProps> = ({ onChange, data }) => {
  return (
    <CKEditor
      data={data}
      editor={ClassicEditor as unknown}
      onBlur={(event, editor) => {
        console.log("Blur.", editor);
      }}
      onChange={(event, editor: { getData: () => void }) => {
        const data = editor.getData();

        onChange(data);
        console.log(data);
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
      }}
    />
  );
};

export default Editor;
