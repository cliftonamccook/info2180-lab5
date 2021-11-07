<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

if ($_SERVER["REQUEST_METHOD"] == "GET") {
  $country = htmlspecialchars(strip_tags($_GET["country"]));
  try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
  
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
  
    // Display result as list item
    echo "<ul>";
    foreach ($results as $row):
      echo "<li>{$row['name']} is ruled by {$row['head_of_state']}</li>";
    endforeach;
    echo "</ul>";
  } catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
}
$conn = null;
?>

