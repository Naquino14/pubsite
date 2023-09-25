import React, { useEffect } from 'react'
import '../Articles.css'
import { useLocation } from 'react-router-dom'

// interface GithubProfile {
//   login: string
//   id: number
//   node_id: string
//   avatar_url: string
//   gravatar_id: string
//   url: string
//   html_url: string
//   followers_url: string
//   following_url: string
//   gists_url: string
//   starred_url: string
//   subscriptions_url: string
//   organizations_url: string
//   repos_url: string
//   events_url: string
//   received_events_url: string
//   type: 'User'
//   site_admin: boolean
//   name: string
//   company: string
//   blog: string
//   location: string
//   email: string
//   hireable: boolean
//   bio: string
//   twitter_username: string
//   public_repos: number
//   public_gists: number
//   followers: number
//   following: number
//   created_at: string
//   updated_at: string
// }

// interface GitHubRepo {
//   id: number
//   node_id: string
//   name: string
//   full_name: string
//   private: boolean
//   owner: GithubProfile
//   html_url: string
//   description: string
//   fork: boolean
//   url: string
//   forks_url: string
//   keys_url: string
//   collaborators_url: string
//   teams_url: string
//   hooks_url: string
//   issue_events_url: string
//   events_url: string
//   assignees_url: string
//   branches_url: string
//   tags_url: string
//   blobs_url: string
//   git_tags_url: string
//   git_refs_url: string
//   trees_url: string
//   statuses_url: string
//   languages_url: string
//   stargazers_url: string
//   contributors_url: string
//   subscribers_url: string
//   subscription_url: string
//   commits_url: string
//   git_commits_url: string
//   comments_url: string
//   issue_comment_url: string
//   contents_url: string
//   compare_url: string
//   merges_url: string
//   archive_url: string
//   downloads_url: string
//   issues_url: string
//   pulls_url: string
//   milestones_url: string
//   notifications_url: string
//   labels_url: string
//   releases_url: string
//   deployments_url: string
//   created_at: string
//   updated_at: string
//   pushed_at: string
//   git_url: string
//   ssh_url: string
//   clone_url: string
//   svn_url: string
//   homepage: string
//   size: number
//   stargazers_count: number
//   watchers_count: number
//   language: string
//   has_issues: boolean
//   has_projects: boolean
//   has_downloads: boolean
//   has_wiki: boolean
//   has_pages: boolean
//   forks_count: number
//   mirror_url: string
//   archived: boolean
//   disabled: boolean
//   open_issues_count: number
//   license: {
//     key: string
//     name: string
//     spdx_id: string
//     url: string
//     node_id: string
//   }
//   forks: number
//   open_issues: number
//   watchers: number
//   default_branch: string
// }

interface Props {
  setSidenav: (value: React.SetStateAction<boolean>) => void
}

// const fetchProfile = async () => {
//   const response = await fetch('https://api.github.com/users/naquino14');
//   const data: GithubProfile = JSON.parse(await response.text());
//   return data;
// }

// const fetchRepos = async () => {
//   const response = await fetch('https://api.github.com/users/naquino14/repos');
//   const data: GitHubRepo[] = JSON.parse(await response.text());
//   return data;
// }

const Projects: React.FC<Props> = ({ setSidenav }) => {

  const location = useLocation()
  useEffect(() => {
    setSidenav(false)
  }, [location, setSidenav]);

  // const [profile, setProfile] = React.useState<GithubProfile>()
  // const [repos, setRepos] = React.useState<GitHubRepo[]>()

  // useEffect(() => {
  //   console.log('fetching github data')
  //   fetchProfile().then(setProfile)
  //   fetchRepos().then(setRepos)

  //   // sort repos by last updated
  //   repos?.sort((a, b) => {
  //     return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  //   })

  //   // keep only the 5 most recent repos
  //   setRepos(repos?.slice(0, 5))
  // }, [repos])

  // console.log(profile)
  // console.log(repos)

  return (
    <div className='article'>
      <h1 className='center'>Projects</h1>
      <h2 className='center'>Here are my most recent commits to GitHub:</h2>
      <p className='center article'>WIP Because github ratelimited me :(</p>
      <p className='center article'>In the meantime, checkout my resume <a href='https://csh.rit.edu/~fish/Nathaniel%20Aquino%20-%20Resume.pdf'>here</a>, or my <a href='https://github.com/naquino14'>github</a>.</p>
    </div>
  )
}

export default Projects