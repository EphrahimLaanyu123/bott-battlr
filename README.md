# bott-battlr
# Your Bot Army - React App

Your Bot Army is a simple React application that allows you to create a collection of bots and form your own bot army. It fetches bot data from a server, displays the available bots, and lets you add selected bots to your army. You can also remove bots from your army and discharge them from the server.


## Features

- Fetches bot data from a server and displays the list of available bots.
- Allows you to select bots to form your own bot army.
- Displays the selected bots in your bot army.
- Provides a button to discharge selected bots from your bot army and remove them from the server.

## Components

The app is divided into the following components:

- **App**: The main component that fetches bot data and manages the state of selected bots and bot data.
- **YourBotArmy**: Displays the selected bots in your bot army and allows you to remove them.
- **BottCollection**: Displays the list of available bots and lets you add them to your bot army.

## Technologies Used

- React: Front-end library for building user interfaces.
- useState: Hook for managing component state.
- useEffect: Hook for handling side effects like data fetching.
- Fetch API: For making HTTP requests to the server.

## API Endpoints

The application interacts with the following API endpoints on `http://localhost:3000`:

- **GET `/bots`**: Fetches the list of available bots.
- **DELETE `/bots/:id`**: Deletes a bot with the specified ID.

## How to Use the App

1. After running the app locally, you will see a list of available bots on the left side and an empty bot army on the right side.
2. Click on a bot from the available bots list to add it to your bot army.
3. The selected bot will appear in your bot army on the right.
4. To remove a bot from your bot army, click the "X" button on the bot's card.
5. Clicking the "X" button will discharge the bot from your bot army and remove it from the server.

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request. We welcome any contributions, bug fixes, or improvements.

## License

This project is licensed under the [MIT License](LICENSE).
