========
Norrmalm
========

Simple and light `Pelican <http://getpelican.com>`_ theme.

| Author: Daniel Jonsson
| License: `MIT License <LICENSE>`_

Prerequisites
+++++++++++++

Instructions to install tools necessary to build the theme:

.. code:: shell

  $ sudo yum install nodejs npm # Install nodejs and npm on Fedora
  $ sudo npm install -g gulp # Install gulp

Setup
+++++

Install dependencies that gulp needs to build the theme:

.. code:: shell

  $ npm install

Build
+++++

Use gulp to build the theme:

.. code:: shell

  $ gulp build

Development
+++++++++++

Continuously build the theme when file changes are detected:

.. code:: shell

  $ gulp

Useful when doing development.

Template settings
+++++++++++++++++

* :code:`DISPLAY_PAGES_ON_MENU`. Display pages in the menu.
* :code:`FOOTER_CONTENT`. The site footer's content.

Credits
+++++++

Framework:

* `Bootstrap <http://getbootstrap.com/>`_

Background image:

* `Grilled noise <http://subtlepatterns.com/grilled-noise/>`_

Fonts:

* `Fugaz One <https://www.google.com/fonts/specimen/Fugaz+One>`_
* `Vollkorn <https://www.google.com/fonts/specimen/Vollkorn>`_

Icons:

* `Font Awesome <https://fortawesome.github.io/Font-Awesome/>`_
