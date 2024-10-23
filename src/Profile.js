import { useState, useEffect } from 'react';

export default function Profile() {

    // Fungsi komponen untuk menampilkan kartu profil GitHub
    function GitHubProfileCard({ username }) {
        const [profileData, setProfileData] = useState(null);

        useEffect(() => {
            // Memanggil GitHub API untuk mendapatkan data profil pengguna
            fetch(`https://api.github.com/users/${username}`)
                .then((response) => response.json())
                .then((data) => setProfileData(data))
                .catch((error) => console.error('Error fetching GitHub data:', error));
        }, [username]);

        if (!profileData) {
            return <p style={{ color: "white" }}>Loading...</p>;
        }

        return (
            <div className="profile-card" style={{
                backgroundColor: "#252525",
                padding: "20px",
                borderRadius: "10px",
                color: "white",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                maxWidth: "300px",
                margin: "20px auto"
            }}>
                <img src={profileData.avatar_url} alt={profileData.login} style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginBottom: "15px"
                }} />
                <h3>Name: {profileData.login}</h3>
                <p>Followers: {profileData.followers}</p>
                <a href={profileData.html_url} target="_blank" rel="noopener noreferrer" style={{
                    color: "#1e90ff",
                    textDecoration: "none"
                }}>
                    GitHub Profile
                </a>
            </div>
        );
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Teks judul */}
            <h1 style={{ color: "white" }}>Profile</h1>

            {/* Menambahkan kartu profil GitHub */}
            <GitHubProfileCard username="AdiNurFiYan" />
            <GitHubProfileCard username="faizwidyadananto" />  
            <GitHubProfileCard username="suryanattha" />   
            <GitHubProfileCard username="mariosianturi19" />
            
            
        </div>
    );
}
