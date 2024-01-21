function SideBar(){
    return(
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary col-3 shadow" style={{width: '280px'}}>
          <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#/main" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Main
            </a>
          </li>
          <li>
            <a href="#/books" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Books
            </a>
          </li>
          <li>
            <a href="#/customers" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Customers
            </a>
          </li>
        </ul>
      </div>
    );
}

export default SideBar;