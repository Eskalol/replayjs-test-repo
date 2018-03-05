import React, {Component} from 'react';
import {Navbar,
        NavbarBrand,
        Collapse,
        NavbarNav,
        NavItem,
        NavbarToggler,
        NavLink,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
        Input} from 'mdbreact';


export default class AvisNavbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        collapse: false,
        isWideEnough: false,
        dropdownOpen: false
      };
      this.onClick = this.onClick.bind(this);
      this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
      return (
        <Navbar color="unique-color-dark" fixed="top" dark expand="md" scrolling>
            <NavbarBrand href="/">
              <strong>Eska's Nyheter</strong>
            </NavbarBrand>
            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav className="mr-auto pl-lg-4 pl-md-4 pl-sm-2 pl-xl-4">
                <div className="form-inline">
                  <div className="md-form mt-0">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                  </div>
                </div>
              </NavbarNav>
              <NavbarNav className="ml-auto">
                <NavItem>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav caret>Profile</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href="#">Settings</DropdownItem>
                      <DropdownItem href="#">Admin</DropdownItem>
                      <DropdownItem href="#">Logout</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            </Collapse>
        </Navbar>
      );
    }
}
