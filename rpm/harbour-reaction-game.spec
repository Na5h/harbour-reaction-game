# 
# Do NOT Edit the Auto-generated Part!
# Generated by: spectacle version 0.27
# 

Name:       harbour-reaction-game

# >> macros
# << macros

%{!?qtc_qmake:%define qtc_qmake %qmake}
%{!?qtc_qmake5:%define qtc_qmake5 %qmake5}
%{!?qtc_make:%define qtc_make make}
%{?qtc_builddir:%define _builddir %qtc_builddir}
Summary:    Reaction Game for Sailfish
Version:    1.3
Release:    2
Group:      Qt/Qt
License:    MIT
Source0:    %{name}-%{version}.tar.bz2
Source100:  harbour-reaction-game.yaml
Requires:   libsailfishapp
BuildRequires:  pkgconfig(Qt5Core)
BuildRequires:  pkgconfig(Qt5Qml)
BuildRequires:  pkgconfig(Qt5Quick)
BuildRequires:  pkgconfig(sailfishapp)
BuildRequires:  desktop-file-utils

%description
Reaction Game for Sailfish OS.

%package test
Summary:    Tests for the Reaction Game for Sailfish
Group:      Qt/Qt
Requires:   %{name} = %{version}-%{release}
Requires:   qt5-qtdeclarative-import-qttest
BuildRequires:  pkgconfig(Qt5QuickTest)

%description test
Test package for the Reaction Game for Sailfish

%prep
%setup -q -n %{name}-%{version}

# >> setup
# << setup

%build
# >> build pre
# << build pre

%qtc_qmake5 

%qtc_make %{?_smp_mflags}

# >> build post
# << build post

%install
rm -rf %{buildroot}
# >> install pre
# << install pre
%qmake5_install

# >> install post
# << install post

desktop-file-install --delete-original       \
  --dir %{buildroot}%{_datadir}/applications             \
   %{buildroot}%{_datadir}/applications/*.desktop

%files
%defattr(-,root,root,-)
%{_datadir}/icons/hicolor/86x86/apps/%{name}.png
%{_datadir}/applications/%{name}.desktop
%{_datadir}/%{name}/qml
%{_bindir}/%{name}
# >> files
# << files

%files test
%defattr(-,root,root,-)
%{_bindir}/tst-harbour-reaction-game
%{_datadir}/tst-harbour-reaction-game/*.qml
%{_datadir}/tst-harbour-reaction-game/*.sh
# >> files test
# << files test