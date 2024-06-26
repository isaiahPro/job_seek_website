import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const createAccount = async (formData) => {
  const formDataToSend = new FormData();

  for (const key in formData) {
    if (key === "education") {
      formData.education.forEach((edu, index) => {
        formDataToSend.append(`${key}[${index}]`, edu);
      });
    } else {
      formDataToSend.append(key, formData[key]);
    }
  }

  try {
    const response = await axios.post(
      `${apiUrl}talent/userdata`,
      formDataToSend
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
// api/sendData.js
export const verifyAccount = async (gmail, verificationCode) => {
  try {
    const response = await axios.post(`${apiUrl}talent/verifyemail`, {
      gmail,
      verificationCode,
    });
    return response.data;
  } catch (error) {
    throw error.response.data; // Throwing the server's response data
  }
};
export const sendVerification = async (email) => {
  console.log(email);
  try {
    const response = await axios.post(
      `${apiUrl}talent/userdata/forgot-password`,
      {
        email,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data; // Throwing the server's response data
  }
};
export const sendCompanyVerification = async (email) => {
  try {
    const response = await axios.post(`${apiUrl}company/forgotpassword`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error.response.data; // Throwing the server's response data
  }
};
export const changePassword = async (email, verificationCode, newPassword) => {
  console.log(email);
  try {
    const response = await axios.post(
      `${apiUrl}talent/userdata/reset-password`,
      {
        email,
        verificationCode,
        newPassword,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data; // Throwing the server's response data
  }
};
export const changeCompanyPassword = async (
  email,
  verificationCode,
  newPassword
) => {
  try {
    const response = await axios.post(`${apiUrl}company/resetpassword`, {
      email,
      verificationCode,
      newPassword,
    });
    return response.data;
  } catch (error) {
    throw error.response.data; // Throwing the server's response data
  }
};
export const LoginAccount = async (gmail, password) => {
  try {
    const response = await axios.post(`${apiUrl}talent/login`, {
      gmail,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data; // Throwing the server's response data
  }
};
export const CompanyLogin = async (email, password) => {
  try {
    const response = await axios.post(`${apiUrl}company/signin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data; // Throwing the server's response data
  }
};

export const CheckLogin = async (token) => {
  try {
    const response = await axios.post(`${apiUrl}company/checklogin`, {
      token,
    });
    return true;
  } catch (error) {
    return false; // Throwing the server's response data
  }
};
// http://localhost:5000/api/
export const CreateCompany = async (
  PhoneNumber,
  companyName,
  adminEmail,
  companyDiscription,
  adminName,
  password
) => {
  try {
    const response = await axios.post(`${apiUrl}company`, {
      company_phone: PhoneNumber,
      company_name: companyName,
      email: adminEmail,
      description: companyDiscription,
      admin_name: adminName,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data; // Throwing the server's response data
  }
};
