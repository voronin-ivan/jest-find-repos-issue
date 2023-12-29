import shutil

source_dir = "packages/package-1"
base_name = "packages/package-"

for i in range(2, 301):
    destination_dir = base_name + str(i)
    shutil.copytree(source_dir, destination_dir)