import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'
import { withTheme } from 'styled-components'
import { getRedirectStatus } from 'next/dist/lib/load-custom-routes'
import Dashboard from './Dashboard'


export default function Home() {
  const { address, connectWallet} = useWeb3()

  return ( 
      < Wrapper>
        {address ? (
          <Dashboard address={address} />
        ) : (<WalletConnect>
          <Button onClick={() => connectWallet('injected')}>
            Connect Wallet
            </Button>
            <Details>
              You need Chrome to be
              <br/> able to run this app.
            </Details>
       </WalletConnect>)}
        
      </ Wrapper>
    )

}


