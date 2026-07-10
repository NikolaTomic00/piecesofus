import { useState } from "react";

function ProfileImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`profile-frame${isLoaded ? " is-loaded" : ""}`}>
      <img
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        alt=""
        className="h-full w-full object-cover"
        draggable="false"
        onLoad={() => setIsLoaded(true)}
      />
      <h1 className="profile-names">Ivana &amp; Aleksa</h1>
    </div>
  );
}

export default function ProfilePicSection() {
  return (
    <section className="profile-pic-section" aria-label="Profile picture">
      <img
        className="profile-corner-ornament"
        src={`${import.meta.env.BASE_URL}1.1.png`}
        alt=""
        draggable="false"
      />

      <div className="profile-pic-content">
        <ProfileImage />
        <div className="profile-text-group">
          <p className="profile-invitation-copy text-[1rem]">
            Sa radošću vas pozivamo da budete deo našeg venčanja i podelite sa
            nama dan naše najveće sreće.
          </p>

          <p className="profile-event-date">26.09.2026.</p>
          <p className="profile-event-location">Hotel Sheraton</p>
          <p className="profile-event-location">Novi Sad, Srbija</p>
        </div>
      </div>
    </section>
  );
}
