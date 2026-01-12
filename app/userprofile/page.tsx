"use client";

import { useEffect, useState } from "react";

type Profile = {
  name: string;
  fatherName: string;
  motherName: string;
  education: string;
  image: string;
};

const emptyProfile: Profile = {
  name: "",
  fatherName: "",
  motherName: "",
  education: "",
  image: "",
};

export default function UserProfile() {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [isEditing, setIsEditing] = useState(true);
  const [hasProfile, setHasProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      setProfile(JSON.parse(saved));
      setHasProfile(true);
      setIsEditing(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, image: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    setHasProfile(true);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowMenu(false);
  };

  const handleDelete = () => {
    localStorage.removeItem("userProfile");
    setProfile(emptyProfile);
    setHasProfile(false);
    setIsEditing(true);
    setShowMenu(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Top Left Profile Menu */}
     
{/* Top Left Profile Menu */}
{/* Top Left Profile Menu */}
{hasProfile && !isEditing && (
  <div
    className="fixed top-4 left-4 z-50"
    style={{ position: "fixed" }}
  >
    <div className="relative inline-block">
      <img
        src={profile.image || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
        onClick={() => setShowMenu(!showMenu)}
        alt="Profile"
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "9999px",
          objectFit: "cover",
          cursor: "pointer",
        }}
      />

      {showMenu && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            marginTop: "4px",
            background: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
            borderRadius: "6px",
            width: "max-content",
            padding: "2px 0",
          }}
        >
          <button
            onClick={handleEdit}
            style={{
              display: "block",
              padding: "4px 10px",
              fontSize: "13px",
              textAlign: "left",
              whiteSpace: "nowrap",
            }}
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            style={{
              display: "block",
              padding: "4px 10px",
              fontSize: "13px",
              color: "red",
              textAlign: "left",
              whiteSpace: "nowrap",
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  </div>
)}


      {/* Profile Card */}
      <div className="flex justify-center mt-8">
        <div className="bg-white w-[380px] rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-center mb-4">
            User Profile
          </h2>

          <div className="flex justify-center mb-4">
            <label className="cursor-pointer">
              <img
  src={profile.image || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
  alt="Profile"
  style={{
    width: "40px",
    height: "40px",
    borderRadius: "9999px",
    objectFit: "cover",
  }}
/>

              {isEditing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                />
              )}
            </label>
          </div>

          {[
            { label: "Name", name: "name" },
            { label: "Father Name", name: "fatherName" },
            { label: "Mother Name", name: "motherName" },
            { label: "Education", name: "education" },
          ].map((field) => (
            <div key={field.name} className="mb-3">
              <label className="text-sm text-gray-600">
                {field.label}
              </label>
              <input
                name={field.name}
                value={(profile as any)[field.name]}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border rounded-md px-3 py-2 mt-1 text-sm disabled:bg-gray-100"
              />
            </div>
          ))}

          {isEditing && (
            <button
              onClick={handleSave}
              className="w-full bg-blue-500 text-white py-2 rounded mt-4"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}