#!/usr/bin/env bash

# /**
#  * @fileoverview Script para gestionar los componentes UI en un proyecto.
#  * 
#  * Este script realiza las siguientes operaciones:
#  * 1. Búsqueda de componentes referenciados en los directorios especificados.
#  * 2. Verificación de la existencia de los componentes instalados.
#  * 3. Creación de listas para componentes no instalados, ya instalados y no referenciados.
#  * 4. Instalación de componentes no instalados.
#  * 5. Opción de actualización de componentes ya instalados.
#  * 6. Opción de desinstalación de componentes instalados pero no referenciados.
#  * 
#  * @requires pnpm
#  */

components=""

# Paso 1 a 5: Búsqueda de componentes en los directorios existentes
for dir in auth layout page lib widgets; do
  if [ -d "./src/$dir" ]; then
    found_components=$(grep -rhi "@/components/ui" "./src/$dir" | \
      sed -n 's/.*@\/components\/ui\/\([^"]*\).*/\1/p' | \
      sed 's/;$//' | \
      awk -F'/' '{print $NF}' | \
      sort | uniq)
    components="$components"$'\n'"$found_components"
  fi
done

# Paso 6: Eliminación de duplicados y limpieza de cadenas
components=$(echo "$components" | sort | uniq | tr -d "'")

# Eliminación de líneas vacías
components=$(echo "$components" | sed '/^\s*$/d')

# Opcional: reemplazo de "toaster" por "toast"
if echo "$components" | grep -q "toaster"; then
  components=$(echo "$components" | sed 's/toaster/toast/g')
fi

# Inicialización de listas de componentes instalados y no instalados
installed_components=()
not_installed_components=()
existing_installed_components=()

# Paso 7: Verificación de la existencia de archivos de componentes
for component in $components; do
  if [ -f "./src/components/ui/${component}.tsx" ]; then
    installed_components+=("$component")
  else
    not_installed_components+=("$component")
  fi
done

# Verificación de componentes instalados que ya no están referenciados
for file in ./src/components/ui/*.tsx; do
  filename=$(basename "$file" .tsx)
  existing_installed_components+=("$filename")
done

unused_components=()
for existing_component in "${existing_installed_components[@]}"; do
  if [[ ! " ${components[@]} " =~ " ${existing_component} " ]]; then
    unused_components+=("$existing_component")
  fi
done

# Mostrar listas
echo "Componentes no instalados:"
if [ ${#not_installed_components[@]} -eq 0 ]; then
  echo "Ninguno"
else
  for component in "${not_installed_components[@]}"; do
    echo "- $component"
  done
fi

echo ""
echo "Componentes ya instalados:"
if [ ${#installed_components[@]} -eq 0 ]; then
  echo "Ninguno"
else
  for component in "${installed_components[@]}"; do
    echo "- $component"
  done
fi

echo ""
echo "Componentes instalados pero no referenciados (componentes innecesarios):"
if [ ${#unused_components[@]} -eq 0 ]; then
  echo "Ninguno"
else
  for component in "${unused_components[@]}"; do
    echo "- $component"
  done
fi

# Paso 9: Solicitud de actualización para componentes ya instalados
if [ ${#installed_components[@]} -gt 0 ]; then
  echo ""
  read -p "¿Desea actualizar los componentes ya instalados? (s/N) [N] " update_choice

  # Usar "N" como valor predeterminado si el usuario presiona Enter sin ingresar nada
  update_choice=${update_choice:-N}

  if [[ "$update_choice" == "s" || "$update_choice" == "S" ]]; then
    echo "Actualizando los siguientes componentes:"
    for component in "${installed_components[@]}"; do
      echo "- $component"
    done
  else
    echo "No se realizará ninguna actualización."
    # Vaciar la lista de componentes a actualizar
    installed_components=()
  fi
fi

# Paso 10: Instalación de componentes no instalados y actualización de componentes seleccionados
all_components=("${not_installed_components[@]}" "${installed_components[@]}")
unique_components=$(echo "${all_components[@]}" | tr ' ' '\n' | sort | uniq | tr '\n' ' ' | sed "s/'//g")

if [ -n "$unique_components" ]; then
  # Construir y mostrar el comando pnpm dlx
  pnpm_command="pnpm dlx shadcn@latest add $unique_components -y"
  echo "Ejecutando el comando: $pnpm_command"

  # Ejecutar el comando
  eval "$pnpm_command"
else
  echo "No hay componentes para instalar o actualizar."
fi

# Paso 11: Solicitud de desinstalación para componentes innecesarios
if [ ${#unused_components[@]} -gt 0 ]; then
  echo ""
  read -p "¿Desea desinstalar los componentes no referenciados (componentes innecesarios)? (s/N) [N] " uninstall_choice

  # Usar "N" como valor predeterminado si el usuario presiona Enter sin ingresar nada
  uninstall_choice=${uninstall_choice:-N}

  if [[ "$uninstall_choice" == "s" || "$uninstall_choice" == "S" ]]; then
    echo "Desinstalando los siguientes componentes:"
    for component in "${unused_components[@]}"; do
      echo "- $component"
      rm -rf "./src/components/ui/${component}.tsx"
    done
  else
    echo "No se realizará ninguna desinstalación."
  fi
fi
