
const API_BASE_URL = 'http://localhost:8080/api/';


const apiClient = async (url, options = {}, version = "v1") => {
    console.log("2. Формируем заголовки");
    const headers = {
      ...options.headers
    };
    if (!(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    const makeRequest = async (customHeaders = headers) => {
      const response = await fetch(`${API_BASE_URL}${version}${url}`, {
        ...options,
        headers: customHeaders
      });
      if (response.status === 401) {
        console.log("⚠️ Получен 401 Unauthorized");
        const error = new Error('Unauthorized');
        error.status = 401;
        throw error;
      }
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
      return data;
    }

    try{
        return await makeRequest()
    } catch(error){
        throw error;
    }

}

export default apiClient