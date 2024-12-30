import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { searchQuerySelector } from "../Store/Selectors/search-user-selector";

function DisplayUser() {
  const user = useRecoilValueLoadable(searchQuerySelector);
  if (user.state === "loading") {
    return <div>Finding the developer...</div>;
  }

  if (user.state === "hasError") {
    return <div>Some error occurred while fetching this username.</div>;
  }
  if (user.state === "hasValue") {
    const fetchedUser = user.contents;

    if (!fetchedUser) {
      return <div>No developer found. Please check the username.</div>;
    }

    // console.log("Fetched User:", fetchedUser);

    return (
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>{fetchedUser.name}</h1>
        <p>{fetchedUser.bio}</p>
        <img
          src={fetchedUser.avatar_url}
          alt={`${fetchedUser.name}'s avatar`}
          style={{ width: "150px", borderRadius: "50%" }}
        />
        <p>
          <strong>Followers:</strong> {fetchedUser.followers} |{" "}
          <strong>Following:</strong> {fetchedUser.following}
        </p>

        <div style={{ marginTop: "20px" }}>
          <h2>Contribution Activity</h2>
          {/* api from gpt */}
          <img
            src={`https://ghchart.rshah.org/${fetchedUser.login}`}
            alt={`${fetchedUser.name}'s GitHub contribution chart`}
            style={{ width: "100%" }}
          />
        </div>

        <a
          href={fetchedUser.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Profile
        </a>
      </div>
    );
  }
}

export default DisplayUser;
