import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import moment from 'moment';

import SurveyForm from 'views/components/survey-form';
import { getVisibleCandidates } from 'core/candidates';
import { getVisibleHouses } from 'core/houses';

import { Modal, Button, Header } from 'semantic-ui-react';

class SurveyAdd extends Component {
  render() {
    var { createSurvey, candidates, houses } = this.props;
    const date = moment().format('YYYY-MM-DD');
    const housesList = houses.toJS().map((house) => {
        return {
            key: house.key,
            value: house.key,
            text: house.name,
            content: <Header content={house.name} subheader={house.district} />
        }
    });

  const candidateList = candidates.toJS();
    return (
      <Modal
        trigger={<Button icon="world" content="New Survey" onClick={this.handleOpen} />}
        closeIcon="close">

        <Modal.Header>New survey</Modal.Header>
        <Modal.Content>
          <SurveyForm
            initialValues={{candidateList, date}}
            submitAction={createSurvey}
            submitButtonText="Save"
            form="survey-add"
            houses={housesList}
          />
        </Modal.Content>
      </Modal>
    );
  }
}

SurveyAdd.propTypes = {
  createSurvey: PropTypes.func.isRequired,
  candidates: PropTypes.instanceOf(List),
  houses: PropTypes.instanceOf(List)
};

const mapStateToProps = state => {
  return {
    candidates: getVisibleCandidates(state),
    houses: getVisibleHouses(state)
  };
};

export default connect(mapStateToProps)(SurveyAdd);
