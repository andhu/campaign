import React from 'react';
import HouseForm from './HouseForm';
import checkAuth from '../requireAuth';

import {Header, Table, Segment} from 'semantic-ui-react';

class HousePage extends React.Component {
	render() {

		return(
			<div>
				<Header as="h1" content="Houses" />
				<Segment>
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>House Name</Table.HeaderCell>
								<Table.HeaderCell>Floor</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell>FirstHouse</Table.Cell>
								<Table.Cell>0</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Second House</Table.Cell>
								<Table.Cell>12</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Segment>
				<HouseForm />
			</div>
			);
	}
}

export default checkAuth(HousePage);