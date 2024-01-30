// const apiUrl ='https://2c21-182-176-157-31.ngrok-free.app/company';

// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// Register Api Call


const registerForm = (event) => {
    event.preventDefault();
    
    let companyName = document.getElementById("companyName");
    let companyDescription = document.getElementById("companyDescription");
    let employeeName = document.getElementById("employeeName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
  
  
    let regisApiUrl =
      "https://2c21-182-176-157-31.ngrok-free.app/company/register";
  
    let data = {
      companyName: companyName.value,
      companyDescription: companyDescription.value,
      employeeName: employeeName.value,
      email: email.value,
      password: password.value,
    };
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  
    fetch(regisApiUrl, requestOptions)
      .then((response) => {
        //   if (!response.ok) {
        //     throw new Error("Network response was not ok");
        //   }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let message = data.message;
  
        if (message.endsWith("registered!")) {
          window.location.href = "index.html";
        } else {
          alert("Company Name should be unique!");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  
  //Login API
  const loginForm = (event) => {
    event.preventDefault();
  
    let email = document.getElementById("email");
    let password = document.getElementById("password");
  
    let regisApiUrl = "https://2c21-182-176-157-31.ngrok-free.app/auth/login";
  
    let data = {
      email: email.value,
      password: password.value,
    };
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  
    fetch(regisApiUrl, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let message = data.message;
  
        if (message.endsWith("in!")) {
          window.location.href = "employee.html";
  
        } else {
          alert(message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  
  // Add Employee API
  
  const addEmployee = (event)=>{
      event.preventDefault();
      let employeeName = document.getElementById("employeeName");
      let email = document.getElementById("email");
      let password = document.getElementById("password");
      let companyName = document.getElementById("companyName");
      let departmentName = document.getElementById("departmentName");
      console.log(departmentName.value);
      
    
      let regisApiUrl =
        "https://2c21-182-176-157-31.ngrok-free.app/auth/signup";
    
      let data = {
          employeeName: employeeName.value,
          email: email.value,
          password: password.value,
          departmentName : departmentName.value,
          companyName: companyName.value
      };
    
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
    
      fetch(regisApiUrl, requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let message = data.message;
  
          if (message.endsWith("up!")) {
              window.location.href = "employee.html";
            } else {
              alert(message);
            }
  
        })
        .catch((error) => {
          console.log("Error:", error);
        });
  
  
  }