document.getElementById('fetchbutton').addEventListener('click', fetchData);

async function fetchData() {
    const userId = document.getElementById('userId').value;
    const responseContainer = document.getElementById('responsecontainer');
    const postContainer = document.getElementById('postcontainer');
    const userApiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postApiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    // Check if the userId is empty or out of range
    if (!userId || userId < 1 || userId > 10) {
        responseContainer.innerHTML = "Please enter a User ID between 1 and 10";
        postContainer.innerHTML = "";
        return;
    }

    try {
        responseContainer.innerHTML = "Waiting for user data response";
        postContainer.innerHTML = ""; // Clear any previous post data

        let userResponse = await fetch(userApiUrl);
        if (userResponse.status !== 200) {
            throw new Error('User data request failed with status code: ' + userResponse.status);
        }
        let userData = await userResponse.json();

        responseContainer.innerHTML = "Got user data response <br><br>";
        responseContainer.innerHTML += JSON.stringify(userData, null, 2);

        let postResponse = await fetch(postApiUrl);
        if (postResponse.status !== 200) {
            throw new Error('Post data request failed with status code: ' + postResponse.status);
        }
        let postData = await postResponse.json();

        postContainer.innerHTML = "Got post data response <br><br>";
        postContainer.innerHTML += JSON.stringify(postData, null, 2);
    } catch (error) {
        responseContainer.innerHTML = error.message;
        postContainer.innerHTML = "";
    }
}