/* ============
 * Container
 * ============.
 *
 * Containers are used fetch the data from state
 * and disperse to the components.
 */

// import libs
import { connect } from 'react-redux'

// import components
import Page from './Page'

// binding store with component
export default connect()(Page)
