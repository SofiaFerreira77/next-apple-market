type postJsonDataProps = {
    endPoint: string;
    apiKey?: string;
    data: object;
};

type getDataProps = {
    endPoint: string;
    apiKey?: string;
};

type deleteJsonDataProps = {
    endPoint: string;
    apiKey?: string;
};

export async function getJsonData<T>({ endPoint, apiKey = "" }: getDataProps) {
    try {
        const response = await fetch(`${endPoint}`, {
            headers: {
                "Content-Type": "application/json",
                "API-KEY": apiKey,
            },
        });

        if (!response.ok) throw new Error('Network response was not ok to get data');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function postJsonData({ endPoint, apiKey = "", data }: postJsonDataProps) {
    try {
        const response = await fetch(`${endPoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "API-Key": apiKey,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error('Network response was not ok to post data');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function deleteJsonData({ endPoint, apiKey = "" }: deleteJsonDataProps) {
    try {
        const response = await fetch(`${endPoint}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "API-Key": apiKey,
            }
        });

        if (!response.ok) throw new Error('Network response was not ok to delete data');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
