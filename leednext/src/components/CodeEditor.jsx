import React, { useState } from 'react';
import AceEditor from 'react-ace';
import axios from 'axios';

// Import modes for different languages
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/theme-monokai';

function CodeEditor() {
  const [code, setCode] = useState('// Write your code here');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState({
    value: 'javascript',
    label: 'JavaScript',
    mode: 'javascript',
    id: 63
  });

  const languageOptions = [
    { value: 'javascript', label: 'JavaScript', mode: 'javascript', id: 63 },
    { value: 'python', label: 'Python', mode: 'python', id: 71 },
    { value: 'java', label: 'Java', mode: 'java', id: 62 },
    { value: 'cpp', label: 'C++', mode: 'c_cpp', id: 54 },
    { value: 'mysql', label: 'MySQL', mode: 'mysql', id: 82 }
  ];

  const languageTemplates = {
    javascript: '// JavaScript code here\nconsole.log("Hello World");',
    python: '# Python code here\nprint("Hello World")',
    java: '// Java code here\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}',
    cpp: '// C++ code here\n#include <iostream>\n\nint main() {\n  std::cout << "Hello World";\n  return 0;\n}',
    mysql: '-- SQL queries here\nSELECT * FROM users;'
  };

  const handleLanguageChange = (e) => {
    const selectedLang = languageOptions.find(lang => lang.value === e.target.value);
    setLanguage(selectedLang);
    setCode(languageTemplates[selectedLang.value] || '');
  };

  const handleRunCode = async () => {
    setOutput('Running...');

    try {
      const response = await axios.post(
        'https://judge0-ce.p.rapidapi.com/submissions',
        {
          source_code: code,
          language_id: language.id,
          stdin: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          },
        }
      );

      const token = response.data.token;
      const result = await axios.get(
        `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
        {
          headers: {
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          },
        }
      );

      setOutput(result.data.stdout || 'No output');
    } catch {
      setOutput('Error executing code');
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4">Code Editor</h2>
      
      {/* Language Selector Dropdown */}
      <div className="mb-4">
        <select 
          value={language.value}
          onChange={handleLanguageChange}
          className="bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Code Editor */}
      <div className="mb-6">
        <AceEditor
          mode={language.mode}
          theme="monokai"
          value={code}
          onChange={setCode}
          name="code-editor"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="400px"
          fontSize={14}
          className="rounded border border-gray-700"
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
            useWorker: false
          }}
        />
      </div>

      {/* Buttons Box */}
      <div className="mb-6 text-center">
        <div className="inline-block bg-gray-800 p-4 rounded-lg shadow-lg">
          <button
            onClick={() => setOutput('Compile clicked!')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold mr-4 transition duration-200"
          >
            Compile
          </button>
          <button
            onClick={handleRunCode}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold transition duration-200"
          >
            Run
          </button>
        </div>
      </div>

      {/* Output Box */}
      <div>
        <div className="text-lg font-semibold mb-2">Output:</div>
        <AceEditor
          mode="text"
          theme="monokai"
          value={output}
          readOnly={true}
          name="output-editor"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="200px"
          fontSize={14}
          className="rounded border border-gray-700"
          setOptions={{
            showLineNumbers: false,
            highlightActiveLine: false
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditor;