import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import moment from 'moment';

import SurveyForm from 'views/components/survey-form';
import { getVisibleCandidates } from 'core/candidates';
import { getVisibleHouses } from 'core/houses';

import { Modal, Button } from 'semantic-ui-react';

class SurveyAdd extends Component {
  render() {
    var { createSurvey, candidates, houses } = this.props;
    const date = moment().format('YYYY-MM-DD');
    return (
      <Modal
        trigger={<Button icon="world" content="New Survey" onClick={this.handleOpen} />}
        closeIcon="close">

        <Modal.Header>New survey</Modal.Header>
        <Modal.Content>
          <SurveyForm
            initialValues={{candidates, date}}
            submitAction={createSurvey}
            submitButtonText="Save"
            form="survey-add"
            houses={houses}
          />
        </Modal.Content>
      </Modal>
    );
  }
}

SurveyAdd.propTypes = {
  createSurvey: PropTypes.func.isRequired,
  candidates: PropTypes.array.isRequired,
  houses: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    candidates: getVisibleCandidates(state).toJS(),
    houses: getVisibleHouses(state).toJS()
  };
};

export default connect(mapStateToProps)(SurveyAdd);
