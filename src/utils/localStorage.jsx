
// localStorage.clear();
const employees = [
    {
      "id": 1,
      "firstname": "Sufiyan",
      "email": "sufiyan@me.com",
      "password": "123",
      "taskNumbers": {
        "active": 2,
        "newTask": 1,
        "completed": 2,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Create Dashboard UI",
          "description": "Design and develop the admin dashboard layout using React.js.",
          "date": "2025-01-20T10:30",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix Login Bug",
          "description": "Resolve authentication issue in login form.",
          "date": "2025-01-15T15:00",
          "category": "Bug Fix"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "API Integration",
          "description": "Integrate backend API for user data.",
          "date": "2025-01-18T12:00",
          "category": "Backend"
        }
      ]
    },
    {
      "id": 2,
      "firstname": "Nehal",
      "email": "nehal@me.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "newTask": 4,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Employee List Page",
          "description": "Create UI page to list all employees with search filter.",
          "date": "2025-01-22T11:30",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Update Profile Page",
          "description": "Improve the UI of the profile update form.",
          "date": "2025-01-12T14:00",
          "category": "UI Update"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Task Sync Issue",
          "description": "Fix the task auto-refresh issue in task panel.",
          "date": "2025-01-19T16:45",
          "category": "Bug Fix"
        }
      ]
    },
    {
      "id": 3,
      "firstname": "Rudra",
      "email": "rudra@me.com",
      "password": "123",
      "taskNumbers": {
        "active": 2,
        "newTask": 3,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Create Notification Component",
          "description": "Build a toast notification system using custom hooks.",
          "date": "2025-01-25T09:45",
          "category": "Component"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Remove Unused Code",
          "description": "Clean unnecessary imports and optimize files.",
          "date": "2025-01-11T13:30",
          "category": "Clean Up"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Fix Loader Issue",
          "description": "Loader animation not showing during API calls.",
          "date": "2025-01-16T17:00",
          "category": "Bug Fix"
        }
      ]
    },
    {
      "id": 4,
      "firstname": "Arjun",
      "email": "arjun@me.com",
      "password": "123",
      "taskNumbers": {
        "active": 2,
        "newTask": 0,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Dark Mode Feature",
          "description": "Implement dark mode toggle with theme context.",
          "date": "2025-01-27T10:00",
          "category": "Feature"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Testing UI",
          "description": "Write unit tests for UI components using Jest.",
          "date": "2025-01-14T12:15",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Graph Component",
          "description": "Failed to implement the chart component using Recharts.",
          "date": "2025-01-20T14:40",
          "category": "Frontend"
        }
      ]
    },
    {
      "id": 5,
      "firstname": "Kabir",
      "email": "kabir@me.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 4,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Admin Settings UI",
          "description": "Design and build settings page for admin users.",
          "date": "2025-01-28T09:20",
          "category": "Admin Panel"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Optimize Images",
          "description": "Compress and optimize large images for fast loading.",
          "date": "2025-01-13T11:10",
          "category": "Optimization"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Search Filter Issue",
          "description": "Search bar not updating dynamically on employee page.",
          "date": "2025-01-17T18:10",
          "category": "Bug Fix"
        }
      ]
    }
]

  const admin =  [
    {
      "id": 1,
      "email": "admin@me.com",
      "password": "123"
    }
  ]




export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
  return { employees, admin }
}