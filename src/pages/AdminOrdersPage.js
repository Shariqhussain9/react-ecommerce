import Navbar from "../features/Navbar/Navbar"
import AdminOrders from "../features/admin/Components/AdminOrders"

function AdminOrdersPage() {
  return (
    <div>
        <Navbar>
            <AdminOrders  />
        </Navbar>
    </div>
  )
}

export default AdminOrdersPage