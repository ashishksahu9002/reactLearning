import React, { useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";

export default function RTE({ name, control, label, defaultValue = "" }) {
    // Reference to store the EditorJS instance
    const editorRef = useRef(null);

    useEffect(() => {
        // Initialize Editor.js instance only if it doesn't already exist
        if (!editorRef.current) {
            editorRef.current = new EditorJS({
                holder: name || "editorjs-container", // Sets the container ID for the editor
                tools: {
                    header: {
                        class: Header,
                        config: {
                            placeholder: "Enter a heading", // Placeholder text for header tool
                            levels: [2, 3, 4], // Allowed heading levels
                            defaultLevel: 2, // Default heading level
                        },
                    },
                    list: List, // Enables list functionality (ordered/unordered)
                    image: ImageTool, // Enables image insertion
                },
                data: defaultValue ? JSON.parse(defaultValue) : {}, // Load default content if available
                onChange: async () => {
                    // Save content changes and update react-hook-form state
                    const content = await editorRef.current.save();
                    control.setValue(name, JSON.stringify(content));
                },
            });
        }

        return () => {
            // Cleanup function to destroy the editor instance when the component unmounts
            if (editorRef.current) {
                editorRef.current.destroy();
                editorRef.current = null;
            }
        };
    }, [name, control, defaultValue]);

    return (
        <div className="w-full">
            {/* Display label if provided */}
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}

            {/* Editor.js container */}
            <div id={name || "editorjs-container"} className="border p-2" />

            {/* Hidden input to store editor content for react-hook-form */}
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <input type="hidden" value={defaultValue} onChange={onChange} />
                )}
            />
        </div>
    );
}
