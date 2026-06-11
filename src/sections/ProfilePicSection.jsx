function ProfileImage() {
  return (
    <div className="profile-frame">
      <img
        src="/profile.jpg"
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
      <img className="profile-corner-ornament" src="/1.1.png" alt="" draggable="false" />

      <div className="profile-pic-content">
        <ProfileImage />
        <h1 className="profile-names">Ivana i Aleksa</h1>
        <p className="profile-invitation-copy">
          Sa radošću Vas pozivamo da budete deo našeg venčanja i podelite sa nama
          dan naše najveće sreće.
        </p>
      </div>
    </section>
  );
}
