import React from 'react';
import { translate } from '../../translate/translate';

class WalletsNativeInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props && this.props.Dashboard && this.props.Dashboard.progress && this.props.ActiveCoin.nativeActiveSection === 'settings') {
      return (
        <div data-extcoin="COIN" id="kmd_wallet_settings">
          <div className="col-xlg-6 col-md-4">
            <div className="panel" id="projects">
              <div className="panel-heading">
                <h3 className="panel-title">{translate('INDEX.WALLET_INFO')}</h3>
              </div>
              <div className="table-responsive">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>{translate('INDEX.WALLET_VERSION')}</td>
                      <td>
                        {this.props.Dashboard.progress.walletversion}
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.BALANCE')}</td>
                      <td>
                        {this.props.Dashboard.progress.balance}
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.UNCONFIRMED_BALANCE')}</td>
                      <td>
                        <span data-extcoin="COIN" id="kmd_unconfirmed_balance"></span>
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.IMMATURE_BALANCE')}</td>
                      <td>
                        <span data-extcoin="COIN" id="kmd_immature_balance"></span>
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.TOTAL_TX_COUNT')}</td>
                      <td>
                        <span data-extcoin="COIN" id="KMDTotalTransactionsCount"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-xlg-6 col-md-8">
            <div className="panel" id="projects">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <span data-extcointitle="COIN">Komodo</span> {translate('INDEX.INFO')}
                </h3>
              </div>
              <div className="table-responsive">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>{translate('INDEX.VERSION')}</td>
                      <td>
                        {this.props.Dashboard.progress.KMDversion}
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.PROTOCOL_VERSION')}</td>
                      <td>
                        {this.props.Dashboard.progress.protocolversion}
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.NOTARIZED')}</td>
                      <td>
                        {this.props.Dashboard.progress.notarized}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {translate('INDEX.NOTARIZED')} Hash
                      </td>
                      <td>
                        { this.props.Dashboard.progress.notarizedhash ?
                          this.props.Dashboard.progress.notarizedhash.substring(0, Math.floor(this.props.Dashboard.progress.notarizedhash.length / 2)) +
                          '\t' +
                          this.props.Dashboard.progress.notarizedhash.substring(Math.floor(this.props.Dashboard.progress.notarizedhash.length / 2), this.props.Dashboard.progress.notarizedhash.length)
                          : ''
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {translate('INDEX.NOTARIZED')} BTC
                      </td>
                      <td>
                        <span data-extcoin="COIN" id="kmd_notarizedbtc"></span>
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.BLOCKS')}</td>
                      <td>
                        {this.props.Dashboard.progress.blocks}
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.CONNECTIONS')}</td>
                      <td>
                        {this.props.Dashboard.progress.connections}
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.DIFFICULTY')}</td>
                      <td>
                        {this.props.Dashboard.progress.difficulty}
                      </td>
                    </tr>
                    <tr>
                      <td>Testnet</td>
                      <td>
                        {this.props.Dashboard.progress.testnet}
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.PAY_TX_FEE')}</td>
                      <td>
                        {this.props.Dashboard.progress.paytxfee}
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.RELAY_FEE')}</td>
                      <td>
                        {this.props.Dashboard.progress.relayfee}
                      </td>
                    </tr>
                    <tr>
                      <td>{translate('INDEX.ERRORS')}</td>
                      <td>
                        {this.props.Dashboard.progress.errors}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default WalletsNativeInfo;