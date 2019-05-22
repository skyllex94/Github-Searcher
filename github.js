class Github {
  constructor() {
    this.client_id = "6c4b0cd5e6a86115f1e8";
    this.client_secret = "6b27d917b3fd908c2a18404de7f5c7d9bcb01e85";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${
      this.client_id
    }&client_secret=${this.client_secret}
    }`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${
      this.repos_count
    }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
      this.client_secret
    }
    }`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    };
  }
}
