# AlgoVisualiser

![License](https://img.shields.io/github/license/rishav-goswami/AlgoVisualiser)
![Stars](https://img.shields.io/github/stars/rishav-goswami/AlgoVisualiser)
![Issues](https://img.shields.io/github/issues/rishav-goswami/AlgoVisualiser)

## Overview

AlgoVisualiser is an interactive web application that visualizes various algorithms. It provides a user-friendly interface to understand how algorithms work step-by-step. This tool is ideal for students, educators, and professionals who want to learn or teach algorithms in a visual and engaging manner.

## Live Demo

Check out the live demo of AlgoVisualiser [here](https://rishav-goswami.github.io/AlgoVisualiser/).

## Features

- Visualize sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, etc.
- Visualize pathfinding algorithms like Dijkstra's Algorithm, A*, etc. (coming soon...)
- Interactive controls to step through each algorithm.
- Customizable settings to adjust algorithm parameters.
- Easy integration of new algorithms.

## Screenshots
<div style="display: flex; justify-content: space-between;">
<img src= "https://private-user-images.githubusercontent.com/77602579/343017703-12d5cbe7-41c5-40ef-be81-1057153009e3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkzNzk3MjgsIm5iZiI6MTcxOTM3OTQyOCwicGF0aCI6Ii83NzYwMjU3OS8zNDMwMTc3MDMtMTJkNWNiZTctNDFjNS00MGVmLWJlODEtMTA1NzE1MzAwOWUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjI2VDA1MjM0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA4NjQ5NzFhNDYxNTg4NWRhMTJlZmIwMThjN2VjZWRlMTBhOWYxZmJjNTRkZTM1MzBiZjM5ZjhjOTg1MmRlZTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.khD96d4LlGOs3_hm3FLV4_B9bKB4viwpCnRdf5xyt20" alt="Algovisualizer Demo" style="width: 30%; margin-right: 10px;">
  <img src="https://private-user-images.githubusercontent.com/77602579/343018057-e9432e39-6162-4d12-bfc7-359ac439120a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkzNzk3MjgsIm5iZiI6MTcxOTM3OTQyOCwicGF0aCI6Ii83NzYwMjU3OS8zNDMwMTgwNTctZTk0MzJlMzktNjE2Mi00ZDEyLWJmYzctMzU5YWM0MzkxMjBhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjI2VDA1MjM0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTYyNDUxZjI4ZDQ4MTg5OGJmMzczOThiMmViZTYxZjUyNmNmMjUwNGQ1YmVlMDY5YWVkZDdjMDJlMTE1ZDdjNjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Cw6wW5Sn4zCepnjbmwSJoCkFI4qkbjgsEtJiZwGECY4" alt="Algorithm Selection" style="width: 30%; margin-right: 10px;" /><img src="https://private-user-images.githubusercontent.com/77602579/343018478-8521d39a-1d08-4946-b721-7a1c0cc58d6b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkzNzk3MjgsIm5iZiI6MTcxOTM3OTQyOCwicGF0aCI6Ii83NzYwMjU3OS8zNDMwMTg0NzgtODUyMWQzOWEtMWQwOC00OTQ2LWI3MjEtN2ExYzBjYzU4ZDZiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjI2VDA1MjM0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTljZTg5YzJiM2FmMTE2ZDc1ODEyOTkxODNjOThmNGFhYTk5YjQ0YjgyM2YyNDFkNjhmMjViMWNlYTJjMGM1YTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.24KLd8A1y3ee89ynrdW2CKSbqFC5zwNN5yYe0HgR4MA" alt="Visualization in Action" style="width: 30%;" />
</div>

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/rishav-goswami/AlgoVisualiser.git
    cd AlgoVisualiser
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Select the algorithm you want to visualize from the dropdown menu.
2. Customize the algorithm parameters if available.
3. Click the "Start" button to begin the visualization.
4. Use the controls to step through the algorithm or adjust the speed of the visualization.

## Adding Your Own Algorithm

To add a new algorithm to the visualizer, follow these steps:

1. **Create a new file for your algorithm** in the `src/algorithms` directory.
2. **Implement the algorithm** with the visualization steps. Ensure your implementation follows the structure of existing algorithms.
3. **Update the algorithm list** in the `src/components/AlgorithmSelector.js` to include your new algorithm.
4. **Test your algorithm** thoroughly to ensure it works correctly with the visualization controls.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes.
4. Commit your changes.
    ```bash
    git commit -m "Description of your changes"
    ```
5. Push to your branch.
    ```bash
    git push origin feature-name
    ```
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out to me at [rishav@example.com](mailto:rishav@example.com).

---

Thank you for using AlgoVisualiser! If you find this project useful, please consider giving it a star ⭐ on GitHub.
