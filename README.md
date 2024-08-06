# Linux Cat Commad Clone Using Raw Node.js

This Node.js script mimics the `cat` command in Linux, allowing you to read from a file or standard input and print the output with colored text.

`You can read larger file content without any problem even 10gb or larger 🙂 `

## Features

- Reads from a file and outputs the content to the console.
- Colors the output text using ANSI escape codes.
- Converts stdin input to uppercase and colors it before printing.
- Allows changing the file path dynamically by entering `path:<filePath>`.

you can install using npm also.

`npm nodcat`

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/omorhawlader/node-cat-command.git

   ```

   cd node-cat-command

## Install dependencies

`npm install`

## Usage

1.Run the script with a file path as an argument:

```sh
node cat.js <filePath>
```

Example:

```sh
node cat.js example.txt
```

2.Run the script and provide input via stdin:

```sh
node cat.js
```

Type the text and press Enter to see the colored uppercase output.

3. Change the file path dynamically:

```sh
node cat.js
```

Enter path:<filePath> to read from a new file.

## Example

1.Reading from a file:

```sh
node cat.js example.txt
```

2. Using stdin:

```sh
node cat.js

```

Input:

```sh
omar
```

Output:

```sh
OMAR

```

3.Changing file path dynamically:

```sh
node cat.js

```

Input:

```sh
path:example.txt
```

## Contact

- [LinkedIn](https://www.linkedin.com/in/omor-hawlader-dev/)
- [Facebook](https://www.facebook.com/mohammad.omar.on)
- [Github](https://github.com/omorhawlader/)
