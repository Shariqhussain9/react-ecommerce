import Navbar from "../features/Navbar/Navbar"
import AdminProductList from "../features/admin/Components/AdminProductList"

function AdminHome() {
  return (
    <div>
        <Navbar>
            <AdminProductList></AdminProductList>
        </Navbar>
    </div>
  )
}

export default AdminHome