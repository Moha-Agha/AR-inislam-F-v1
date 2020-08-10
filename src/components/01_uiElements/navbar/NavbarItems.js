import React, { useRef } from "react";

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

import Register from '../forms/Register'
import Login from '../forms/Login'

const NavbarItems = ({ flyoutBG, navbar }) => {

  const profile = useRef(null)
  const search = useRef(null)
  const section = useRef(null)

  let isFlyoutBg

  document.addEventListener("click", function (event) {
    var target = event.target;

    if (profile.current.contains(target)) {
      openNavbar(true, 'profile')
    } else if (search.current.contains(target)) {
      openNavbar(true, 'search')
    } else if (section.current.contains(target)) {
      openNavbar(true, 'section')
    } else if (!navbar.current.contains(target)) {
      if (!flyoutBG.current.contains(target)) {
        if (isFlyoutBg) openNavbar(false)
      }
    }
  });

  const openNavbar = (isOpen = true, navName = '') => {
    let flyout = document.getElementsByClassName('flyout-bg')[0].classList

    switch (navName) {
      case 'profile':
        profile.current.parentElement.classList.add('is-open-navbar_item')
        search.current.parentElement.classList.remove('is-open-navbar_item')
        section.current.parentElement.classList.remove('is-open-navbar_item')
        break;
      case 'search':
        search.current.parentElement.classList.add('is-open-navbar_item')
        profile.current.parentElement.classList.remove('is-open-navbar_item')
        section.current.parentElement.classList.remove('is-open-navbar_item')
        break;
      case 'section':
        section.current.parentElement.classList.add('is-open-navbar_item')
        search.current.parentElement.classList.remove('is-open-navbar_item')
        profile.current.parentElement.classList.remove('is-open-navbar_item')
        break;
      default:
        profile.current.parentElement.classList.remove('is-open-navbar_item')
        search.current.parentElement.classList.remove('is-open-navbar_item')
        section.current.parentElement.classList.remove('is-open-navbar_item')
        break;
    }

    if (isOpen) {
      if (!navbar.current.classList.contains('is-open-navbar')) navbar.current.classList.add('is-open-navbar')
      flyout.add('is-open-flyout-bg')
      isFlyoutBg = true
    } else {
      navbar.current.classList.remove('is-open-navbar')
      flyout.remove('is-open-flyout-bg')
      isFlyoutBg = false
    }

  }

  return (
    <nav className="navbar_items" >

      <div className="navbar_item">
        <div className="navbar_item-level1" ref={profile} >
          <div ><i className="aicon-user"></i></div>
          <p>حسابي</p>
        </div>
        <div className="navbar_item-level2">
          <Register />
        </div>
      </div>

      <div className="navbar_item">
        <div className="navbar_item-level1" ref={search}>
          <div ><i className="aicon-search"></i></div>
          <p>بحث</p>
        </div>
        <div className="navbar_item-level2">
          <div className="Content">بحث</div>
        </div>
      </div>

      <div className="navbar_item">
        <div className="navbar_item-level1" ref={section}>
          <div ><i className="aicon-section"></i></div>
          <p>الأقسام</p>
        </div>
        <div className="navbar_item-level2">
          <div className="Content">الأقسام</div>
        </div>
      </div>

    </nav>
  )
}


export default NavbarItems;
