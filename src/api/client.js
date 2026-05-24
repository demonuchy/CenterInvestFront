
const API_BASE_URL = 'http://109.120.150.57:8080/api';


const apiClient = async (url, options = {}) => {
    const headers = {
      ...options.headers
    };
    if (!(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    console.log('Url :', url, 'Options :', options)
    const makeRequest = async (customHeaders = headers) => {
      const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        credentials: 'include',
        headers: customHeaders
      });
      if (response.status === 204) {
        console.log("✅ Получен 204 No Content (успешное удаление)");
        return { success: true, status: 204, data: null };
      }
      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.detail || errorData.message || errorMessage;
        } catch (e) {
        }
        const error = new Error(errorMessage);
        error.status = response.status;
        throw error;
      }
      const data = await response.json();
      console.log('Responce obj :', data)
      return data;
    }

    try{
        return await makeRequest()
    } catch(error){
        throw error;
    }

}

export default apiClient