codeInput.registerTemplate("syntax-highlighted", 
    codeInput.templates.hljs(
        hljs, 
        [
            new codeInput.plugins.Indent(true, 4),
            new codeInput.plugins.AutoCloseBrackets()
            //new codeInput.plugins.Autodetect()
        ]
    )
);