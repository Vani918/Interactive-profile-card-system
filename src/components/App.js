import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  const profiles = [
    { id: 1, name: "Amit", role: "Frontend Developer", description: "React enthusiast" },
    { id: 2, name: "Sneha", role: "Backend Developer", description: "Java & Spring Boot" },
    { id: 3, name: "Rahul", role: "Full Stack Developer", description: "MERN stack learner" }
  ];

  return (
    <div className="container">
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          role={profile.role}
          description={profile.description}
        />
      ))}
    </div>
  );
}

export default App;