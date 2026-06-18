function ProfileImage() {
  return (
    <div className="profile-frame">
      <img
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        alt=""
        className="h-full w-full object-cover"
        draggable="false"
      />
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
        <h1 className="profile-names">Ivana & Aleksa</h1>
        <p className="profile-invitation-copy text-[1rem]">
          Sa radošću vas pozivamo da budete deo našeg venčanja i podelite sa
          nama dan naše najveće sreće.
        </p>

        <p className="profile-event-date">26. SEPTEMBAR 2026.</p>
        <p className="profile-event-location">Hotel Sheraton</p>
        <p className="profile-event-location">Novi Sad, Srbija</p>
      </div>
    </section>
  );
}
