import axios from "../Axios/axios";

export async function getClientId() {
    let response = await axios.get("/login");
    return response;
}

export async function login(response) {
    axios.post("/login", response.tokenId);
}

