# Jupyter Legal-Notice

To display an legal notice and the privacy policy in the menu bar, this extension can be added to JupyterLab.

Furthermore, this extension use existing legal notice pages of JupyterHub, as described in [jupyterhub-legal-notice](https://github.com/DL-MIN/jupyterhub-legal-notice).


## Install

1. Copy the content of directory `src/` into `/etc/jupyterlab/jupyterlab-legal-notice`
2. Change your working directory to `/etc/jupyterlab/jupyterlab-legal-notice`
3. Build and integrate the extension to JupyterLab  
```
jlpm install
jlpm run build
jupyter labextension link .
jupyter lab build
```
