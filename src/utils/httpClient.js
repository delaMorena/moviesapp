const API = "https://api.themoviedb.org/3";

const get = (path) => {
    return (
        fetch(API + path, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjJjMDgyNDM0Mjg4YzlmYzRjYzQzMTQ5MTgyMjQ5NSIsInN1YiI6IjYwNjQ4NTAwNmY2YTk5MDA2YTAwYzhkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fsRsDCH2kqlcp7K4iH-W6Gl1F4U1dqiepGccLTiDNTA",
            "Content-Type": "application/json;charset=utf-8",
          }
        }).then((response) => response.json())
    );
}

export default get;