const defoultState = { 'facebook/native': { id: 2 } }
const a = { 'facebook/react': { id: 1 } }
Object.assign(defoultState, a)

const defaultStateResults = {
    data: { id: 2 }
}
const defoultStateSResaults = { 'sadddd/8888': { id: 5 } }

const setListIssues = (owner, repo) => {

    const repoFullName = `${owner}/${repo}`;
    const a = { [repoFullName]: defaultStateResults.data }

    // console.log(defoultStateSResaults)
    
    if ([repoFullName] in defoultStateSResaults) {
        console.log(defoultStateSResaults[repoFullName]);
    } else {
        Object.assign(defoultStateSResaults, a)
        console.log('no repo')
    }
}
setListIssues("da", '121312')
setListIssues("da", '121312')
const name = 'bogdan'
const obj = { "bogdan": 1 }
