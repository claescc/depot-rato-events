export default function TeamAvatars() {
  return (
    <div className="text-green-500 flex justify-center mx-auto max-w-3xl">
      <div className="px-4">
        <div className="text-xl py-4">Our Team</div>
        <div className="text-justify pb-4">
          Our team is versatile and agile as it is made up out of local residents. We make no distinction regarding
          ethnicity, gender, religion, sexual orientation, age, disability, social economic status, etc. Everyone is
          welcome in our community and everyone is respected.
        </div>
        <div className="flex justify-center gap-8 pb-4">
          <div className="flex-initial w-32 h-32 rounded-full bg-green-200">Profile: Chloé Claes</div>
          <div className="flex-initial w-32 h-32 rounded-full bg-green-200">Profile: Jennifer Ida</div>
        </div>
      </div>
    </div>
  )
}
