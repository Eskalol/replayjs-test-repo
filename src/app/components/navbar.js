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
              {this.props.children}
              <NavbarNav className="ml-auto">
                <NavItem>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav caret>Profile</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href="/settings">Settings</DropdownItem>
                      <DropdownItem href="/admin">Admin</DropdownItem>
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
