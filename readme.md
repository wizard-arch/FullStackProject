# Flask Kanban Board 

A responsive and interactive personal Kanban board application built with Python (Flask) and jQuery. This full-stack web app allows users to securely register, log in, and manage their personal tasks in a visual, three-column layout: To Do, In Progress, and Done.


> **Note:** Replace the placeholder above with a real screenshot of your running application! A good screenshot is the best way to showcase your work.

---

## ##  Features

* **Secure User Authentication:** Full registration and login system with password hashing to keep user data safe.
* **Private Boards:** Each user has their own separate, private Kanban board; tasks are not visible to other users.
* **Full Task Management:** Users can **C**reate, **R**ead, **U**pdate (move), and **D**elete their tasks.
* **Interactive UI:** Smoothly move tasks between columns without page reloads, powered by AJAX for a modern user experience.
* **Dual Visual Themes:** Includes both a clean, professional light mode and a modern dark mode.
* **Responsive Design:** Built with Bootstrap 5 for a seamless experience on desktops, tablets, and mobile devices.

---

## ##  Tech Stack

* **Backend:** Python, Flask, Flask-SQLAlchemy, Flask-Login
* **Frontend:** HTML5, CSS3, Bootstrap 5, JavaScript, jQuery
* **Database:** SQLite

---

## ## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### ### Prerequisites

* Python 3.x
* pip (Python package installer)

### ### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Create and activate a virtual environment**
    ```sh
    # Create the environment
    python -m venv venv

    # Activate on Windows (PowerShell)
    .\venv\Scripts\Activate

    # Activate on macOS/Linux
    source venv/bin/activate
    ```

3.  **Install the required dependencies**
    ```sh
    pip install -r requirements.txt
    ```

4.  **Run the application**
    ```sh
    python app.py
    ```

5.  **Navigate to the application**
    Open your web browser and go to `http://127.0.0.1:5000`.

---

## ##  How to Use

1.  Once the application is running, you will be directed to the login page.
2.  Click the "Register here" link to create a new user account.
3.  After registering, log in with your new credentials.
4.  You can now start adding tasks to your "To Do" column.
5.  Use the `◀` and `▶` buttons to move tasks between columns and the `Delete` button to remove them.

---

## ##  License

This project is licensed under the MIT License.