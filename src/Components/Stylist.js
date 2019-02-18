import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Grid from "@material-ui/core/Grid";

import "./Stylist.scss";

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500]
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent);

class Stylist extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <div className="container-fluid" style={{ backgroundColor: "#252525" }}>
          <div className="row">
            <div className="col-12 text-center" style={{ color: "#fff" }}>
              <h2 className="section-services">Our Team</h2>
              <p>SELECT A STYLIST BELOW TO READ FULL BIOS</p>
            </div>
          </div>
        </div>

        <div className="grid-stylist">
          <div className="card" style={{ backgroundColor: "none" }}>
            <div className="card-img_1" />
            <div className="content">
              <p style={{ color: "#fff", textAlign: "center", margin: "0" }}>
                Monica Arroyo
              </p>
              <p
                className="card_text"
                style={{ color: "#fff", textAlign: "center" }}
              >
                Owner *Master Stylist - Hair Extraordinarie
              </p>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Button
                  variant="outlined"
                  onClick={this.handleClickOpen}
                  style={{ color: "#4ABDAC", borderColor: "#4ABDAC" }}
                >
                  Read More
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                >
                  <DialogTitle
                    id="customized-dialog-title"
                    onClose={this.handleClose}
                    textAlign = 'center'
                  >
                    Monica Arroyo
                  </DialogTitle>
                  <DialogContent>
                    <Typography gutterBottom>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </Typography>
                    <Typography gutterBottom>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </Typography>
                  </DialogContent>
                </Dialog>
              </Grid>
            </div>
          </div>

          <div className="card">
            <div className="card-img_2" />
            <div className="content">
              <p style={{ color: "#fff", textAlign: "center", margin: "0" }}>
                Lily Stevens
              </p>
              <p
                className="card_text"
                style={{ color: "#fff", textAlign: "center" }}
              >
                Salon Director *Master Stylist - Board Certified Colorist
              </p>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Button
                  variant="outlined"
                  onClick={this.handleClickOpen}
                  style={{ color: "#4ABDAC", borderColor: "#4ABDAC" }}
                >
                  Read More
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                >
                  <DialogTitle
                    id="customized-dialog-title"
                    onClose={this.handleClose}
                    textAlign = 'center'
                  >
                    Lily Stevens
                  </DialogTitle>
                  <DialogContent>
                    <Typography gutterBottom>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </Typography>
                    <Typography gutterBottom>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </Typography>
                  </DialogContent>
                </Dialog>
              </Grid>
            </div>
          </div>

          <div className="card">
            <div className="card-img_3" />
            <div className="content">
              <p style={{ color: "#fff", textAlign: "center", margin: "0" }}>
                Brian O'Riley
              </p>
              <p
                className="card_text"
                style={{ color: "#fff", textAlign: "center" }}
              >
                *Master Stylist - Aveda Certified
              </p>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Button
                  variant="outlined"
                  onClick={this.handleClickOpen}
                  style={{ color: "#4ABDAC", borderColor: "#4ABDAC" }}
                >
                  Read More
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                >
                  <DialogTitle
                    id="customized-dialog-title"
                    onClose={this.handleClose}
                    textAlign = 'center'
                  >
                    Brian O'Riley
                  </DialogTitle>
                  <DialogContent>
                    <Typography gutterBottom>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </Typography>
                    <Typography gutterBottom>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </Typography>
                  </DialogContent>
                </Dialog>
              </Grid>
            </div>
          </div>

          <div className="card">
            <div className="card-img_4" />
            <div className="content">
              <p style={{ color: "#fff", textAlign: "center", margin: "0" }}>
                Luke Adams
              </p>
              <p
                className="card_text"
                style={{ color: "#fff", textAlign: "center" }}
              >
                *Master Stylist & Educator - Color Specialist
              </p>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Button
                  variant="outlined"
                  onClick={this.handleClickOpen}
                  style={{ color: "#4ABDAC", borderColor: "#4ABDAC" }}
                >
                  Read More
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                >
                  <DialogTitle
                    id="customized-dialog-title"
                    onClose={this.handleClose}
                    textAlign = 'center'
                  >
                    Luke Adams
                  </DialogTitle>
                  <DialogContent>
                    <Typography gutterBottom>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </Typography>
                    <Typography gutterBottom>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </Typography>
                  </DialogContent>
                </Dialog>
              </Grid>
            </div>
          </div>

          <div className="card">
            <div className="card-img_5" />
            <div className="content">
              <p style={{ color: "#fff", textAlign: "center", margin: "0" }}>
                Graice Arroyo
              </p>
              <p
                className="card_text"
                style={{ color: "#fff", textAlign: "center" }}
              >
                *Master Stylist - Makeup Artist
              </p>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Button
                  variant="outlined"
                  onClick={this.handleClickOpen}
                  style={{ color: "#4ABDAC", borderColor: "#4ABDAC" }}
                >
                  Read More
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  onClose={this.handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={this.state.open}
                >
                  <DialogTitle
                    id="customized-dialog-title"
                    onClose={this.handleClose}
                    textAlign = 'center'
                  >
                    Gracie Arroyo
                  </DialogTitle>
                  <DialogContent>
                    <Typography gutterBottom>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </Typography>
                    <Typography gutterBottom>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </Typography>
                  </DialogContent>
                </Dialog>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Stylist.prototypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(Stylist);
