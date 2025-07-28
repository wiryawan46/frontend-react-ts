import { FC } from 'react';
import { Link } from 'react-router';

const SidebarMenu: FC = () => {
    return (
        <div className="card border-0 rounded-4 shadow-sm">
            <div className="card-header">
                MAIN MENU
            </div>
            <div className="card-body">
                <div className="list-group">
                    <Link to="/admin/dashboard" className="list-group-item list-group-item-action">Dashboard</Link>

                    <Link to="/admin/users" className="list-group-item list-group-item-action">Users</Link>
                    <a href="#" className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Logout</a>
                </div>
            </div>
        </div>
    )
}

export default SidebarMenu;