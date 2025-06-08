function highlightLine(element) {
    const highlightedLines = document.querySelectorAll('.highlighted');
    highlightedLines.forEach(line => line.classList.remove('highlighted'));

    element.classList.add('highlighted');

    const lineNumber = element.querySelector('.line-numbers');
    if (lineNumber) {
        lineNumber.classList.add('highlighted');
    }
}

function toggleFolder(element) {
    const nested = element.nextElementSibling;
    if (nested) {
        nested.style.display = nested.style.display === "none" ? "block" : "none";
    }
    element.textContent = element.textContent.startsWith('📂')
        ? '📁 ' + element.textContent.slice(2)
        : '📂 ' + element.textContent.slice(2);
}

document.addEventListener('DOMContentLoaded', () => {
    const terminalInput = document.getElementById('terminal-input');
    cur = window.location.pathname.split('/').pop().split('.')[0]
    
    const filenames = ["aboutme", "contact", "project", "jsvtexteditor", "hypervisorwithkvm", "umltranslator", "designpatterns", "osproject", "uniconnect", "mastermind", "sudoku", "benchmark", "jwitter", "infineonparking", "gamecenter", "compiler"]
    if (terminalInput) {
        terminalInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const input = this.value.trim();

                if (input == "help") {
                    this.value = 'Here is a list of instructions that will make using the site easier:\n 1. You can make the terminal bigger by extending it vertically\n 2. Extend/suspend folders in file tree by clicking on them\n 3. Click on the line to highlight it\n 4. navigate through the portolio thorugh the file tree, or by entering the goto command\n 5. goto <name_from_filetree> in terminal to go to that page\n 6. Press Enter to clear the terminal so you can enter an another command\n 7. Try to find secret commands and write them into terminal :)';
                }
                else if(input == "sofija"){
                    this.value = "        *****           *****\n" +
                                 "     ****   ****     ****   ****\n" +
                                 "   ***         *** ***         ***\n" +
                                 "  **             ***             **\n" +
                                 " **               *              **\n" +
                                 " **                             **\n" +
                                 "  ***                          **\n" +
                                 "    ***                      ***\n" +
                                 "      ***                  ***\n" +
                                 "        ****            ****\n" +
                                 "           ****       ****\n" +
                                 "              ***   ***\n" +
                                 "                *****\n" +
                                 "                  *  "
                }
                else if(input.includes("goto ") && input.split(/\s+/).filter(Boolean).length == 2){
                    const href = input.split(/\s+/)[1].toLowerCase()
                    console.log(href.toLowerCase());
                    
                    if(filenames.includes(href)){
                        if(href == "contact" || href == "aboutme"){
                            if(cur == "contact" || cur == "aboutme"){
                                window.location.href = `${href}.html`;
                            }
                            else{
                                window.location.href = `../${href}.html`
                            }
                        }
                        else{
                            if(cur == "contact" || cur == "aboutme"){
                                window.location.href = `projects/${href}.html`;
                            }
                            else{
                                window.location.href = `${href}.html`
                            }
                        }
                    }
                    else {
                        this.value = `file ${href} doesn't exist!`
                    }
                    cur = href                    
                }
                else if(input =="74"){
                    this.value = "Congrats on finding my favorite number! Binary translation of 01001010 is 74, but also, my initial, j"
                }
                else{
                    this.value = ''
                }
            }
        });
    } else {
        console.error('Terminal input element not found!');
    }
});

function executeCommand(command) {
    console.log(`Executing: ${command}`);
}

document.addEventListener("DOMContentLoaded", () => {
    const divider = document.getElementById("divider");
    const container = document.getElementById("container");
  
    if (!divider || !container) {
      console.error("Divider or container element is missing.");
      return;
    }
  
    let isDragging = false;
  
    divider.addEventListener("mousedown", (e) => {
      isDragging = true;
      document.body.style.cursor = "ns-resize";
    });
  
    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
  
      const containerRect = container.getBoundingClientRect();
      const offsetY = e.clientY - containerRect.top;
  
      const totalHeight = containerRect.height;
      const editorHeightRatio = offsetY / totalHeight;
      const terminalHeightRatio = 1 - editorHeightRatio;
  
      container.style.gridTemplateRows = `${editorHeightRatio}fr 2px ${terminalHeightRatio}fr`;
    });
  
    document.addEventListener("mouseup", () => {
      isDragging = false;
      document.body.style.cursor = "default";
    });
  });
  

  const toggleButton = document.getElementById("theme-toggle");

  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }
        });
    }
});