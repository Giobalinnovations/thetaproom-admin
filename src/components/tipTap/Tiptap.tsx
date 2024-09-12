import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import {
  Hyperlink,
  previewHyperlinkModal,
  setHyperlinkModal,
} from '@docs.plus/extension-hyperlink';
import editorContents from './editorContents';
import MenuBar from './MenuBar';

// make sure import this arrow.css
import 'tippy.js/dist/svg-arrow.css';

const Tiptap = ({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure(),
      Hyperlink.configure({
        hyperlinkOnPaste: false,
        openOnClick: true,
        modals: {
          previewHyperlink: previewHyperlinkModal,
          setHyperlink: setHyperlinkModal,
        },
        HTMLAttributes: {
          // Allow search engines to follow links
          rel: 'noopener',
          // Open links in a new tab
          // target: '_blank',
        },
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
  });

  return (
    <div className="max-w-none p-6 border rounded-md">
      <MenuBar editor={editor} />
      <div className="mt-4">
        <EditorContent editor={editor} />
      </div>
      <style jsx global>{`
        .ProseMirror a {
          color: #0000ff;
          text-decoration: underline;
          background-color: #ffff00;
        }
      `}</style>
    </div>
  );
};

export default Tiptap;
