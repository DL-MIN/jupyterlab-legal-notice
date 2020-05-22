import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IFrame,
  MainAreaWidget,
  WidgetTracker
} from '@jupyterlab/apputils';

import { IMainMenu } from '@jupyterlab/mainmenu';
import { Menu } from '@lumino/widgets';

/**
 * Initialization data for the main menu example.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@DL-MIN/jupyterlab-legal-notice',
  autoStart: true,
  requires: [IMainMenu],
  activate: (
    app: JupyterFrontEnd,
    mainMenu: IMainMenu
  ) => {
    let counter = 0;
    const namespace = 'contact-menu';
    const { commands, shell } = app;
    const tracker = new WidgetTracker<MainAreaWidget<IFrame>>({ namespace });

    function newContactWidget(url: string, text: string, icon: string): MainAreaWidget<IFrame> {
      let content = new IFrame({
        sandbox: ['allow-scripts', 'allow-forms']
      });
      content.url = url;
      content.title.label = text;
      content.title.icon = icon;
      content.id = `${namespace}-${++counter}`;
      let widget = new MainAreaWidget({ content });
      return widget;
    }

    // Legal Notice
    commands.addCommand('legal-notice', {
      label: 'Legal Notice',
      icon: 'fa fa-balance-scale-right',
      execute: args => {
        let widget = newContactWidget('/legal-notice', 'Legal Notice', 'fa fa-balance-scale-right');
        void tracker.add(widget);
        shell.add(widget, 'main');
        return widget;
      }
    });

    // Privacy Statement
    commands.addCommand('privacy-policy', {
      label: 'Privacy Policy',
      icon: 'fa fa-user-secret',
      execute: args => {
        let widget = newContactWidget('/privacy-policy', 'Privacy Policy', 'fa fa-user-secret');
        void tracker.add(widget);
        shell.add(widget, 'main');
        return widget;
      }
    });

    // Contact Menu
    let contactMenu: Menu = new Menu({ commands });
    contactMenu.title.label = 'Contact';
    mainMenu.addMenu(contactMenu, { rank: 1000 });

    contactMenu.addItem({ command: 'legal-notice' });
    contactMenu.addItem({ command: 'privacy-policy' });

  }
};

export default extension;

