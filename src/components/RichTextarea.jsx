import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function RichTextarea({ label, id, error, type, ...props }) {
  return (
    <div className="container__main__content__details__main__input">
      <label
        htmlFor={id}
        className="container__main__content__details__main__input__label"
      >
        {label}
      </label>
      <div className="container__main__content__details__main__input__field__wrapper container__main__content__details__main__input__field__wrapper__textarea">
        <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              "heading",
              "|",
              "700",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
            ],
            placeholder: "Enter name",
          }}
          onChange={(_event, editor) => {
            const data = editor.getData();
            console.log({ data });
          }}
          {...props}
        />
      </div>
      {error && (
        <div className="container__main__content__details__main__input__error">
          {error}
        </div>
      )}
    </div>
  );
}
