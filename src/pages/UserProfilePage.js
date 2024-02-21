import Navbar from "../features/Navbar/Navbar"
import UserProfile from "../features/user/components/userProfile"

function UserProfilePage() {
  return (
    <div>
        <Navbar>
            <UserProfile/>
        </Navbar>
    </div>
  )
}

export default UserProfilePage