const Client = require('ssh2-sftp-client');
const fs = require('fs');

// Create a new instance of the SFTP client
const sftp = new Client();

// Configuration for connecting to the remote server
const config = {
    host: '89.87.174.186', // Replace 'hostname' with your server's hostname
    port: '22',       // Replace '22' with your server's SSH port
    username: 'ledcom', // Replace 'username' with your username
    password: 'JT?DyvXvG5je!!!'  // Replace 'password' with your password
};

// Function to connect to the server and perform SFTP operations
async function sftpConnect() {
    try {
        // Connect to the remote server
        await sftp.connect(config);
        console.log('Connected to the server');

        // Example operations - list remote directory
        const remoteDir = await sftp.list('/');
        console.log('Remote directory listing:', remoteDir);

        // Example operations - upload a file to the remote server
        //const localFile = fs.createReadStream('local-file.txt'); // Replace 'local-file.txt' with your local file path
        //await sftp.put(localFile, 'remote-directory/remote-file.txt'); // Replace 'remote-directory/remote-file.txt' with remote file path

        console.log('File uploaded successfully');

        // Example operations - download a file from the remote server
        const B7meter = await sftp.get('B7meter.txt', 'B7meter.txt'); // Replace 'remote-file.txt' with remote file path and 'local-directory/downloaded-file.txt' with local file path
        const UTHmeter = await sftp.get('UTHmeter.txt', 'UTHmeter.txt'); // Replace 'remote-file.txt' with remote file path and 'local-directory/downloaded-file.txt' with local file path
        
        console.log('File downloaded successfully');

        // Disconnect from the server
        await sftp.end();
        console.log('Disconnected from the server');
    } catch (err) {
        console.error('Error:', err.message);
    }
}

// Call the function to start the SFTP connection
sftpConnect();
