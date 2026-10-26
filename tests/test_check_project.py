
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]


class SkillOrbitTests(unittest.TestCase):

    def test_website_files_exist(self):
        files = (
            "index.html",
            "skills.html",
            "roadmaps.html",
            "progress.html",
            "quiz.html",
            "style.css",
            "script.js",
        )

        for filename in files:
            with self.subTest(filename=filename):
                self.assertTrue((ROOT / filename).is_file())

    def test_html_has_title_and_skills_section(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("SkillOrbit", html)
        self.assertIn('id="skills"', html)

    def test_dockerfile_exists(self):
        self.assertTrue((ROOT / "Dockerfile").is_file())


if __name__ == "__main__":
    unittest.main(verbosity=2)
