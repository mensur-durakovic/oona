let expanded = false;
let activeItem = "dashboard";
let dropdownMenuOpen = false;

function toggleNavigation() {
  expanded = expanded ? false : true;
  if (expanded) {
    $("#desktop-nav").addClass("nav-expanded");
    $(".nav-item-text").addClass("nav-item-text-visible");
    $(".layout-container").addClass("layout-container-expanded");
    $(".nav-logo").hide();
    $(".nav-logo2").show();
  } else {
    $("#desktop-nav").removeClass("nav-expanded");
    $(".nav-item-text").removeClass("nav-item-text-visible");
    $(".layout-container").removeClass("layout-container-expanded");
    $(".nav-logo").show();
    $(".nav-logo2").hide();
  }
}
function expandNavigation() {
  expanded = true;
}
function shrinkNavigation() {
  expanded = false;
}

function setActiveItem(newActiveItem) {
  activeItem = newActiveItem;
  $(".nav-item").removeClass("nav-item-active");
  $(".mobile-nav-icon-wrapper").removeClass("mobile-nav-icon-active");
  $(`#${newActiveItem}-nav-item`).addClass("nav-item-active");
  $(`#${newActiveItem}-mobile-nav-item`).addClass("mobile-nav-icon-active");
  console.log("newActiveItem", newActiveItem);
  console.log("activeItem", activeItem);

  //navigation hide
  $("#desktop-nav").removeClass("nav-expanded");
  $(".nav-item-text").removeClass("nav-item-text-visible");
  $(".layout-container").removeClass("layout-container-expanded");
  $(".nav-logo").show();
  $(".nav-logo2").hide();
}

function toggleDropdownMenu() {
  if (dropdownMenuOpen) {
    dropdownMenuOpen = false;
    $(".header-venues-dropdown").removeClass("header-venues-dropdown-visible");
  } else {
    dropdownMenuOpen = true;
    $(".header-venues-dropdown").addClass("header-venues-dropdown-visible");
  }
}

function submitForm() {
  newPasswordValue = $("#new-password").val();
  newPasswordRepeatValue = $("#repeat-password").val();
  if (newPasswordValue !== newPasswordRepeatValue) {
    $("#repeatPasswordLink").click();
    return false;
  } else {
    return true;
  }
}
