/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
	// Branch utama yang akan memicu rilis otomatis
	branches: ['main'],

	plugins: [
		// 1. Menganalisis pesan commit berdasarkan konvensi Angular / Conventional Commits
		'@semantic-release/commit-analyzer',
		// 2. Meng-generate catatan rilis (changelog release notes) otomatis dari pesan commit
		'@semantic-release/release-notes-generator',
		// 3. Meng-update file CHANGELOG.md lokal dengan catatan rilis baru
		[
			'@semantic-release/changelog',
			{
				changelogFile: 'CHANGELOG.md',
			},
		],

		// 4. Memperbarui versi di file package.json (npm)
		// opsional: set npmPublish: false jika tidak dipublikasikan ke registry npm publik
		[
			'@semantic-release/npm',
			{
				npmPublish: false,
			},
		],

		// 5. Melakukan commit & push perubahan (CHANGELOG.md & package.json) kembali ke Git
		[
			'@semantic-release/git',
			{
				assets: [
					'CHANGELOG.md',
					'package.json',
					'package-lock.json',
					'dist/*.js',
					'dist/*.js.map',
				],
				message:
					'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],

		// 6. Membuat Release Tag & Changelog baru di halaman Releases GitHub
		'@semantic-release/github',
	],
};
