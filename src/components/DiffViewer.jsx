import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import ModalDialog from "../components/ModalDialog";
import Highlight from "react-highlight";
import "./DiffViewer.css";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Prism from "prismjs"
import "prismjs/components/prism-hcl"
import "./test.css"

let test = `
<table class="diff-table">
<thead>
  <tr>
    <td class="line-number-header"></td>
    <td class="side-content-header"></td>
    <td class="line-number-header"></td>
    <td class="side-content-header"></td>
  </tr>
</thead>
<tbody>
  <tr class="diff-row">
    <td data-content="1" class="diff-line-number"></td>
    <td class="diff-line side-left start">
      <span class="diff-chunk">terraform {</span>
    </td>
    <td data-content="1" class="diff-line-number"></td>
    <td class="diff-line side-right start">
      <span class="diff-chunk">terraform {</span>
    </td>
  </tr>
  <tr class="diff-row">e
    <td data-content="2" class="diff-line-numbr"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> required_version =&quot;>= 0.12&quot;</span>
    </td>
    <td data-content="2" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> required_version =&quot;>= 0.12&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="3" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> required_providers {</span>
    </td>
    <td data-content="3" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> required_providers {</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="4" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> openstack = {</span>
    </td>
    <td data-content="4" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> openstack = {</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="5" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        source = &quot;terraform-provider-openstack/openstack&quot;</span
      >
    </td>
    <td data-content="5" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        source = &quot;terraform-provider-openstack/openstack&quot;</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="6" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> version = &quot;~> 1.48.0&quot;</span>
    </td>
    <td data-content="6" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> version = &quot;~> 1.48.0&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="7" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"> }</span></td>
    <td data-content="7" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"> }</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="8" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"> }</span></td>
    <td data-content="8" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"> }</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="9" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="9" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="10" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">provider openstack {</span>
    </td>
    <td data-content="10" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">provider openstack {</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="11" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> user_name = &quot;admin&quot;</span>
    </td>
    <td data-content="11" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> user_name = &quot;admin&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="12" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> tenant_name = &quot;admin&quot;</span>
    </td>
    <td data-content="12" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> tenant_name = &quot;admin&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="13" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> password = &quot;secret&quot;</span>
    </td>
    <td data-content="13" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> password = &quot;secret&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="14" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        auth_url = &quot;http://172.30.1.17/identity&quot;</span
      >
    </td>
    <td data-content="14" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        auth_url = &quot;http://172.30.1.17/identity&quot;</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="15" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="15" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="16" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"># Image creation</span>
    </td>
    <td data-content="16" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"># Image creation</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="17" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_images_image_v2&quot; &quot;ubuntu1804&quot;
        {</span
      >
    </td>
    <td data-content="17" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_images_image_v2&quot; &quot;ubuntu1804&quot;
        {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="18" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;ubuntu1804&quot;</span>
    </td>
    <td data-content="18" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;ubuntu1804&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="19" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        local_file_path =
        &quot;/opt/stack/IaC/bionic-server-cloudimg-amd64.img&quot;</span
      >
    </td>
    <td data-content="19" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        local_file_path =
        &quot;/opt/stack/IaC/bionic-server-cloudimg-amd64.img&quot;</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="20" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> container_format = &quot;bare&quot;</span>
    </td>
    <td data-content="20" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> container_format = &quot;bare&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="21" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> disk_format = &quot;qcow2&quot;</span>
    </td>
    <td data-content="21" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> disk_format = &quot;qcow2&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="22" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="22" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="23" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_images_image_v2&quot; &quot;cirros&quot;
        {</span
      >
    </td>
    <td data-content="23" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_images_image_v2&quot; &quot;cirros&quot;
        {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="24" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;cirros&quot;</span>
    </td>
    <td data-content="24" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;cirros&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="25" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        local_file_path =
        &quot;/opt/stack/IaC/cirros-0.5.2-x86_64-disk.img&quot;</span
      >
    </td>
    <td data-content="25" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        local_file_path =
        &quot;/opt/stack/IaC/cirros-0.5.2-x86_64-disk.img&quot;</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="26" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> container_format = &quot;bare&quot;</span>
    </td>
    <td data-content="26" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> container_format = &quot;bare&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="27" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> disk_format = &quot;qcow2&quot;</span>
    </td>
    <td data-content="27" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> disk_format = &quot;qcow2&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="28" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="28" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="29" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"># Flavor creation</span>
    </td>
    <td data-content="29" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"># Flavor creation</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="30" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_flavor_v2&quot; &quot;flavor_1&quot;
        {</span
      >
    </td>
    <td data-content="30" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_flavor_v2&quot; &quot;flavor_1&quot;
        {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="31" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;flavor_1&quot;</span>
    </td>
    <td data-content="31" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;flavor_1&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="32" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> ram = &quot;8192&quot;</span>
    </td>
    <td data-content="32" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> ram = &quot;8192&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="33" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> vcpus = &quot;1&quot;</span>
    </td>
    <td data-content="33" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> vcpus = &quot;1&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="34" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> disk = &quot;20&quot;</span>
    </td>
    <td data-content="34" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> disk = &quot;20&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="35" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> flavor_id = &quot;flavor_1&quot;</span>
    </td>
    <td data-content="35" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> flavor_id = &quot;flavor_1&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="36" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> is_public = &quot;true&quot;</span>
    </td>
    <td data-content="36" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> is_public = &quot;true&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="37" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="37" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="38" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"></span></td>
    <td data-content="38" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="39" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"># Router creation</span>
    </td>
    <td data-content="39" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"># Router creation</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="40" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_v2&quot;
        &quot;router_1&quot; {</span
      >
    </td>
    <td data-content="40" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_v2&quot;
        &quot;router_1&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="41" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;router_1&quot;</span>
    </td>
    <td data-content="41" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;router_1&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="42" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        external_network_id =
        &quot;5b16677d-b429-4b7e-8edb-6e1c06020db3&quot;</span
      >
    </td>
    <td data-content="42" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        external_network_id =
        &quot;5b16677d-b429-4b7e-8edb-6e1c06020db3&quot;</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="43" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="43" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="44" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_v2&quot;
        &quot;router_2&quot; {</span
      >
    </td>
    <td data-content="44" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_v2&quot;
        &quot;router_2&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="45" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;router_2&quot;</span>
    </td>
    <td data-content="45" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;router_2&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="46" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        external_network_id =
        &quot;5b16677d-b429-4b7e-8edb-6e1c06020db3&quot;</span
      >
    </td>
    <td data-content="46" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        external_network_id =
        &quot;5b16677d-b429-4b7e-8edb-6e1c06020db3&quot;</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="47" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="47" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="48" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"></span></td>
    <td data-content="48" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="49" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"># Network creation</span>
    </td>
    <td data-content="49" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"># Network creation</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="50" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_network_v2&quot;
        &quot;private_1&quot;{</span
      >
    </td>
    <td data-content="50" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_network_v2&quot;
        &quot;private_1&quot;{</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="51" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;private_1&quot;</span>
    </td>
    <td data-content="51" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;private_1&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="52" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> admin_state_up = true</span>
    </td>
    <td data-content="52" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> admin_state_up = true</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="53" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="53" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="54" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_network_v2&quot;
        &quot;private_2&quot; {</span
      >
    </td>
    <td data-content="54" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_network_v2&quot;
        &quot;private_2&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="55" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;private_2&quot;</span>
    </td>
    <td data-content="55" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;private_2&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="56" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> admin_state_up = true</span>
    </td>
    <td data-content="56" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> admin_state_up = true</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="57" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="57" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="58" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_network_v2&quot;
        &quot;private_3&quot; {</span
      >
    </td>
    <td data-content="58" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_network_v2&quot;
        &quot;private_3&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="59" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;private_3&quot;</span>
    </td>
    <td data-content="59" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;private_3&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="60" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> admin_state_up = true</span>
    </td>
    <td data-content="60" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> admin_state_up = true</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="61" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="61" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="62" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_network_v2&quot;
        &quot;private_4&quot;{</span
      >
    </td>
    <td data-content="62" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_network_v2&quot;
        &quot;private_4&quot;{</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="63" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;private_4&quot;</span>
    </td>
    <td data-content="63" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;private_4&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="64" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> admin_state_up = true</span>
    </td>
    <td data-content="64" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> admin_state_up = true</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="65" class="diff-line-number"></td>
    <td class="diff-line side-left end"><span class="diff-chunk">}</span></td>
    <td data-content="65" class="diff-line-number"></td>
    <td class="diff-line side-right end">
      <span class="diff-chunk">}</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left start diff-line-empty"></td>
    <td data-content="66" class="diff-line-number"></td>
    <td
      class="diff-line side-right start diff-line-modified diff-line-with-inserts"
    >
      <span class="diff-chunk diff-chunk-inserted diff-chunk-modified"
        ># New network created</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="67" class="diff-line-number"></td>
    <td
      class="diff-line side-right diff-line-modified diff-line-with-inserts"
    >
      <span class="diff-chunk diff-chunk-inserted diff-chunk-modified"
        >resource &quot;openstack_networking_network_v2&quot;
        &quot;private_5&quot;{</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="68" class="diff-line-number"></td>
    <td
      class="diff-line side-right diff-line-modified diff-line-with-inserts"
    >
      <span class="diff-chunk diff-chunk-inserted diff-chunk-modified">
        name = &quot;private_5&quot;</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="69" class="diff-line-number"></td>
    <td
      class="diff-line side-right diff-line-modified diff-line-with-inserts"
    >
      <span class="diff-chunk diff-chunk-inserted diff-chunk-modified">
        admin_state_up = true</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left end diff-line-empty"></td>
    <td data-content="70" class="diff-line-number"></td>
    <td
      class="diff-line side-right end diff-line-modified diff-line-with-inserts"
    >
      <span class="diff-chunk diff-chunk-inserted diff-chunk-modified"
        >}</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="66" class="diff-line-number"></td>
    <td class="diff-line side-left start">
      <span class="diff-chunk">#Connect network to Router1</span>
    </td>
    <td data-content="71" class="diff-line-number"></td>
    <td class="diff-line side-right start">
      <span class="diff-chunk">#Connect network to Router1</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="67" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_subnet_v2&quot;
        &quot;subnet_1&quot; {</span
      >
    </td>
    <td data-content="72" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_subnet_v2&quot;
        &quot;subnet_1&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="68" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;subnet_1&quot;</span>
    </td>
    <td data-content="73" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;subnet_1&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="69" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_1.id</span
      >
    </td>
    <td data-content="74" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_1.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="70" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> cidr = &quot;10.0.0.0/24&quot;</span>
    </td>
    <td data-content="75" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> cidr = &quot;10.0.0.0/24&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="71" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> ip_version = 4</span>
    </td>
    <td data-content="76" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> ip_version = 4</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="72" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        dns_nameservers = [&quot;8.8.8.8&quot;,&quot;8.8.4.4&quot;]</span
      >
    </td>
    <td data-content="77" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        dns_nameservers = [&quot;8.8.8.8&quot;,&quot;8.8.4.4&quot;]</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="73" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="78" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="74" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_subnet_v2&quot;
        &quot;subnet_2&quot; {</span
      >
    </td>
    <td data-content="79" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_subnet_v2&quot;
        &quot;subnet_2&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="75" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;subnet_2&quot;</span>
    </td>
    <td data-content="80" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;subnet_2&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="76" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_2.id</span
      >
    </td>
    <td data-content="81" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_2.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="77" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> cidr = &quot;10.0.1.0/24&quot;</span>
    </td>
    <td data-content="82" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> cidr = &quot;10.0.1.0/24&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="78" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> ip_version = 4</span>
    </td>
    <td data-content="83" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> ip_version = 4</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="79" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="84" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="80" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"></span></td>
    <td data-content="85" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="81" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_subnet_v2&quot;
        &quot;subnet_3&quot; {</span
      >
    </td>
    <td data-content="86" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_subnet_v2&quot;
        &quot;subnet_3&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="82" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;subnet_3&quot;</span>
    </td>
    <td data-content="87" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;subnet_3&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="83" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_3.id</span
      >
    </td>
    <td data-content="88" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_3.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="84" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> cidr = &quot;10.0.2.0/24&quot;</span>
    </td>
    <td data-content="89" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> cidr = &quot;10.0.2.0/24&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="85" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> ip_version = 4</span>
    </td>
    <td data-content="90" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> ip_version = 4</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="86" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="91" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="87" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"></span></td>
    <td data-content="92" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="88" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_subnet_v2&quot;
        &quot;subnet_4&quot; {</span
      >
    </td>
    <td data-content="93" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_subnet_v2&quot;
        &quot;subnet_4&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="89" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;subnet_4&quot;</span>
    </td>
    <td data-content="94" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;subnet_4&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="90" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_4.id</span
      >
    </td>
    <td data-content="95" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_4.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="91" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> cidr = &quot;10.0.3.0/24&quot;</span>
    </td>
    <td data-content="96" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> cidr = &quot;10.0.3.0/24&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="92" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> ip_version = 4</span>
    </td>
    <td data-content="97" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> ip_version = 4</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="93" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="98" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="94" class="diff-line-number"></td>
    <td class="diff-line side-left end"><span class="diff-chunk"></span></td>
    <td data-content="99" class="diff-line-number"></td>
    <td class="diff-line side-right end"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left start diff-line-empty"></td>
    <td data-content="100" class="diff-line-number"></td>
    <td class="diff-line side-right start diff-line-inserted">
      <span class="diff-chunk"># Connect new network to Router1</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="101" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_subnet_v2&quot;
        &quot;subnet_5&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="102" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> name = &quot;subnet_5&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="103" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_5.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="104" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> cidr = &quot;10.0.4.0/24&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="105" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> ip_version = 4</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left end diff-line-empty"></td>
    <td data-content="106" class="diff-line-number"></td>
    <td class="diff-line side-right end diff-line-inserted">
      <span class="diff-chunk">}</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="95" class="diff-line-number"></td>
    <td class="diff-line side-left start">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_interface_v2&quot;
        &quot;interface_1&quot;{</span
      >
    </td>
    <td data-content="107" class="diff-line-number"></td>
    <td class="diff-line side-right start">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_interface_v2&quot;
        &quot;interface_1&quot;{</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="96" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        router_id = openstack_networking_router_v2.router_1.id</span
      >
    </td>
    <td data-content="108" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        router_id = openstack_networking_router_v2.router_1.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="97" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_1.id</span
      >
    </td>
    <td data-content="109" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_1.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="98" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="110" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="99" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_interface_v2&quot;
        &quot;interface_2&quot; {</span
      >
    </td>
    <td data-content="111" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_interface_v2&quot;
        &quot;interface_2&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="100" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        router_id = openstack_networking_router_v2.router_1.id</span
      >
    </td>
    <td data-content="112" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        router_id = openstack_networking_router_v2.router_1.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="101" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_2.id</span
      >
    </td>
    <td data-content="113" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_2.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="102" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="114" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="103" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_interface_v2&quot;
        &quot;interface_3&quot; {</span
      >
    </td>
    <td data-content="115" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_interface_v2&quot;
        &quot;interface_3&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="104" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        router_id = openstack_networking_router_v2.router_2.id</span
      >
    </td>
    <td data-content="116" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        router_id = openstack_networking_router_v2.router_2.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="105" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_3.id</span
      >
    </td>
    <td data-content="117" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_3.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="106" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="118" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="107" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_interface_v2&quot;
        &quot;interface_4&quot; {</span
      >
    </td>
    <td data-content="119" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_interface_v2&quot;
        &quot;interface_4&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="108" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        router_id = openstack_networking_router_v2.router_1.id</span
      >
    </td>
    <td data-content="120" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        router_id = openstack_networking_router_v2.router_1.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="109" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_4.id</span
      >
    </td>
    <td data-content="121" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_4.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="110" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="122" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="111" class="diff-line-number"></td>
    <td class="diff-line side-left end"><span class="diff-chunk"></span></td>
    <td data-content="123" class="diff-line-number"></td>
    <td class="diff-line side-right end"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left start diff-line-empty"></td>
    <td data-content="124" class="diff-line-number"></td>
    <td class="diff-line side-right start diff-line-inserted">
      <span class="diff-chunk"># Connect new network to Router1</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="125" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_interface_v2&quot;
        &quot;interface_5&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="126" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">
        router_id = openstack_networking_router_v2.router_1.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="127" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_5.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="128" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">}</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left end diff-line-empty"></td>
    <td data-content="129" class="diff-line-number"></td>
    <td class="diff-line side-right end diff-line-inserted">
      <span class="diff-chunk"></span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="112" class="diff-line-number"></td>
    <td class="diff-line side-left start">
      <span class="diff-chunk"># Modified code with updated rules</span>
    </td>
    <td data-content="130" class="diff-line-number"></td>
    <td class="diff-line side-right start">
      <span class="diff-chunk"># Modified code with updated rules</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="113" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_secgroup_v2&quot; &quot;http&quot;
        {</span
      >
    </td>
    <td data-content="131" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_secgroup_v2&quot; &quot;http&quot;
        {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="114" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;http&quot;</span>
    </td>
    <td data-content="132" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;http&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="115" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        description = &quot;Open input http port&quot;</span
      >
    </td>
    <td data-content="133" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        description = &quot;Open input http port&quot;</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="116" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> rule {</span>
    </td>
    <td data-content="134" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> rule {</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="117" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> from_port = 80</span>
    </td>
    <td data-content="135" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> from_port = 80</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="118" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> to_port = 80</span>
    </td>
    <td data-content="136" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> to_port = 80</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="119" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> ip_protocol =&quot;tcp&quot;</span>
    </td>
    <td data-content="137" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> ip_protocol =&quot;tcp&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="120" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> cidr =&quot;0.0.0.0/0&quot;</span>
    </td>
    <td data-content="138" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> cidr =&quot;0.0.0.0/0&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="121" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"> }</span></td>
    <td data-content="139" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"> }</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="122" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="140" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="123" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_secgroup_v2&quot;
        &quot;service&quot; {</span
      >
    </td>
    <td data-content="141" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_secgroup_v2&quot;
        &quot;service&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="124" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;service&quot;</span>
    </td>
    <td data-content="142" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;service&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="125" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        description = &quot;Open input service port&quot;</span
      >
    </td>
    <td data-content="143" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        description = &quot;Open input service port&quot;</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="126" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> rule {</span>
    </td>
    <td data-content="144" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> rule {</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="127" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> from_port = 8080</span>
    </td>
    <td data-content="145" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> from_port = 8080</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="128" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> to_port = 8080</span>
    </td>
    <td data-content="146" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> to_port = 8080</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="129" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> ip_protocol = &quot;tcp&quot;</span>
    </td>
    <td data-content="147" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> ip_protocol = &quot;tcp&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="130" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> cidr = &quot;0.0.0.0/0&quot;</span>
    </td>
    <td data-content="148" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> cidr = &quot;0.0.0.0/0&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="131" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"> }</span></td>
    <td data-content="149" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"> }</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="132" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="150" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="133" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"></span></td>
    <td data-content="151" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="134" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_port_v2&quot; &quot;http&quot;
        {</span
      >
    </td>
    <td data-content="152" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_port_v2&quot; &quot;http&quot;
        {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="135" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;port-instance-http&quot;</span>
    </td>
    <td data-content="153" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;port-instance-http&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="136" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_1.id</span
      >
    </td>
    <td data-content="154" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_1.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="137" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> admin_state_up = true</span>
    </td>
    <td data-content="155" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> admin_state_up = true</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="138" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> security_group_ids = [</span>
    </td>
    <td data-content="156" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> security_group_ids = [</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="139" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> openstack_compute_secgroup_v2.http.id,</span>
    </td>
    <td data-content="157" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> openstack_compute_secgroup_v2.http.id,</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="140" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        openstack_compute_secgroup_v2.service.id</span
      >
    </td>
    <td data-content="158" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        openstack_compute_secgroup_v2.service.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="141" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"> ]</span></td>
    <td data-content="159" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"> ]</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="142" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> fixed_ip {</span>
    </td>
    <td data-content="160" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> fixed_ip {</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="143" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_1.id</span
      >
    </td>
    <td data-content="161" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_1.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="144" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"> }</span></td>
    <td data-content="162" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"> }</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="145" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="163" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="146" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_floatingip_v2&quot;
        &quot;http&quot;{</span
      >
    </td>
    <td data-content="164" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_floatingip_v2&quot;
        &quot;http&quot;{</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="147" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> pool = &quot;public&quot;</span>
    </td>
    <td data-content="165" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> pool = &quot;public&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="148" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="166" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="149" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"></span></td>
    <td data-content="167" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="150" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_floatingip_associate_v2&quot;
        &quot;http&quot; {</span
      >
    </td>
    <td data-content="168" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_floatingip_associate_v2&quot;
        &quot;http&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="151" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        floating_ip = openstack_networking_floatingip_v2.http.address</span
      >
    </td>
    <td data-content="169" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        floating_ip = openstack_networking_floatingip_v2.http.address</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="152" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        instance_id = openstack_compute_instance_v2.instance_1.id</span
      >
    </td>
    <td data-content="170" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        instance_id = openstack_compute_instance_v2.instance_1.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="153" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="171" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="154" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"></span></td>
    <td data-content="172" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="155" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_instance_v2&quot;
        &quot;instance_1&quot; {</span
      >
    </td>
    <td data-content="173" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_instance_v2&quot;
        &quot;instance_1&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="156" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;instance_1&quot;</span>
    </td>
    <td data-content="174" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;instance_1&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="157" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        image_id = openstack_images_image_v2.ubuntu1804.id</span
      >
    </td>
    <td data-content="175" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        image_id = openstack_images_image_v2.ubuntu1804.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="158" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> flavor_id = &quot;flavor_1&quot;</span>
    </td>
    <td data-content="176" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> flavor_id = &quot;flavor_1&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="159" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"></span></td>
    <td data-content="177" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="160" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        user_data = file(&quot;simple_webserver.sh&quot;)</span
      >
    </td>
    <td data-content="178" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        user_data = file(&quot;simple_webserver.sh&quot;)</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="161" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"></span></td>
    <td data-content="179" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="162" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> network {</span>
    </td>
    <td data-content="180" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> network {</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="163" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        port = openstack_networking_port_v2.http.id</span
      >
    </td>
    <td data-content="181" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        port = openstack_networking_port_v2.http.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="164" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"> }</span></td>
    <td data-content="182" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"> }</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="165" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        depends_on = [openstack_networking_port_v2.http]</span
      >
    </td>
    <td data-content="183" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        depends_on = [openstack_networking_port_v2.http]</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="166" class="diff-line-number"></td>
    <td class="diff-line side-left end"><span class="diff-chunk">}</span></td>
    <td data-content="184" class="diff-line-number"></td>
    <td class="diff-line side-right end">
      <span class="diff-chunk">}</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="167" class="diff-line-number"></td>
    <td
      class="diff-line side-left start end diff-line-modified diff-line-with-removes"
    >
      <span class="diff-chunk diff-chunk-equal diff-chunk-modified"
        ># Add </span
      ><span class="diff-chunk diff-chunk-removed diff-chunk-modified"
        >0 </span
      ><span class="diff-chunk diff-chunk-equal diff-chunk-modified"
        >instances with cirros image in the network</span
      >
    </td>
    <td data-content="185" class="diff-line-number"></td>
    <td
      class="diff-line side-right start end diff-line-modified diff-line-with-inserts"
    >
      <span class="diff-chunk diff-chunk-equal diff-chunk-modified"
        ># Add </span
      ><span class="diff-chunk diff-chunk-inserted diff-chunk-modified"
        >1 </span
      ><span class="diff-chunk diff-chunk-equal diff-chunk-modified"
        >instances with cirros image in the network</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="168" class="diff-line-number"></td>
    <td class="diff-line side-left start">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_instance_v2&quot;
        &quot;instance_2&quot; {</span
      >
    </td>
    <td data-content="186" class="diff-line-number"></td>
    <td class="diff-line side-right start">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_instance_v2&quot;
        &quot;instance_2&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="169" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> count = 1</span>
    </td>
    <td data-content="187" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> count = 1</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="170" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;instance_2&quot;</span>
    </td>
    <td data-content="188" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;instance_2&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="171" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        image_id = openstack_images_image_v2.cirros.id</span
      >
    </td>
    <td data-content="189" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        image_id = openstack_images_image_v2.cirros.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="172" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> flavor_id = &quot;42&quot;</span>
    </td>
    <td data-content="190" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> flavor_id = &quot;42&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="173" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"></span></td>
    <td data-content="191" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="174" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> network {</span>
    </td>
    <td data-content="192" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> network {</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="175" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        name = openstack_networking_network_v2.private_2.name</span
      >
    </td>
    <td data-content="193" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        name = openstack_networking_network_v2.private_2.name</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="176" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"> }</span></td>
    <td data-content="194" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"> }</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="177" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        depends_on = [openstack_networking_subnet_v2.subnet_2]</span
      >
    </td>
    <td data-content="195" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        depends_on = [openstack_networking_subnet_v2.subnet_2]</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="178" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk">}</span></td>
    <td data-content="196" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk">}</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="179" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_instance_v2&quot;
        &quot;instance_3&quot; {</span
      >
    </td>
    <td data-content="197" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_instance_v2&quot;
        &quot;instance_3&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="180" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> count = 1</span>
    </td>
    <td data-content="198" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> count = 1</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="181" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> name = &quot;instance_3&quot;</span>
    </td>
    <td data-content="199" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> name = &quot;instance_3&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="182" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        image_id = openstack_images_image_v2.cirros.id</span
      >
    </td>
    <td data-content="200" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        image_id = openstack_images_image_v2.cirros.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="183" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> flavor_id = &quot;42&quot;</span>
    </td>
    <td data-content="201" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> flavor_id = &quot;42&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="184" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"></span></td>
    <td data-content="202" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"></span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="185" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk"> network {</span>
    </td>
    <td data-content="203" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk"> network {</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="186" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        name = openstack_networking_network_v2.private_3.name</span
      >
    </td>
    <td data-content="204" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        name = openstack_networking_network_v2.private_3.name</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="187" class="diff-line-number"></td>
    <td class="diff-line side-left"><span class="diff-chunk"> }</span></td>
    <td data-content="205" class="diff-line-number"></td>
    <td class="diff-line side-right"><span class="diff-chunk"> }</span></td>
  </tr>
  <tr class="diff-row">
    <td data-content="188" class="diff-line-number"></td>
    <td class="diff-line side-left">
      <span class="diff-chunk">
        depends_on = [openstack_networking_subnet_v2.subnet_3]</span
      >
    </td>
    <td data-content="206" class="diff-line-number"></td>
    <td class="diff-line side-right">
      <span class="diff-chunk">
        depends_on = [openstack_networking_subnet_v2.subnet_3]</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content="189" class="diff-line-number"></td>
    <td class="diff-line side-left end"><span class="diff-chunk">}</span></td>
    <td data-content="207" class="diff-line-number"></td>
    <td class="diff-line side-right end">
      <span class="diff-chunk">}</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left start diff-line-empty"></td>
    <td data-content="208" class="diff-line-number"></td>
    <td class="diff-line side-right start diff-line-inserted">
      <span class="diff-chunk"
        ># Add one more openstack_network_networking_v2 block</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="209" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_network_v2&quot;
        &quot;private_6&quot;{</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="210" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> name = &quot;private_6&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="211" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> admin_state_up = true</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="212" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">}</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="213" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"># Connect network to Router2</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="214" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_subnet_v2&quot;
        &quot;subnet_6&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="215" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> name = &quot;subnet_6&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="216" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">
        network_id = openstack_networking_network_v2.private_6.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="217" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> cidr = &quot;10.0.5.0/24&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="218" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> ip_version = 4</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="219" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">}</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="220" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"></span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="221" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"
        >resource &quot;openstack_networking_router_interface_v2&quot;
        &quot;interface_6&quot;{</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="222" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">
        router_id = openstack_networking_router_v2.router_2.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="223" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">
        subnet_id = openstack_networking_subnet_v2.subnet_6.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="224" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">}</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="225" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"></span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="226" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"
        ># Add 0 instances with cirros image in the network</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="227" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"
        >resource &quot;openstack_compute_instance_v2&quot;
        &quot;instance_4&quot; {</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="228" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> count = 0</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="229" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> name = &quot;instance_4&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="230" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">
        image_id = openstack_images_image_v2.cirros.id</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="231" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> flavor_id = &quot;42&quot;</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="232" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"></span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="233" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> network {</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="234" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">
        name = openstack_networking_network_v2.private_6.name</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="235" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk"> }</span>
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left diff-line-empty"></td>
    <td data-content="236" class="diff-line-number"></td>
    <td class="diff-line side-right diff-line-inserted">
      <span class="diff-chunk">
        depends_on = [openstack_networking_subnet_v2.subnet_6]</span
      >
    </td>
  </tr>
  <tr class="diff-row">
    <td data-content class="diff-line-number"></td>
    <td class="diff-line side-left end diff-line-empty"></td>
    <td data-content="237" class="diff-line-number"></td>
    <td class="diff-line side-right end diff-line-inserted">
      <span class="diff-chunk">}</span>
    </td>
  </tr>
</tbody>
</table>
`;


let good = `
    <table className="diff-table">
      <thead>
        <tr>
          <td className="line-number-header" />
          <td className="side-content-header" />
          <td className="line-number-header" />
          <td className="side-content-header" />
        </tr>
      </thead>
      <tbody>
        <tr className="diff-row">
          <td data-content={1} className="diff-line-number" />
          <td className="diff-line side-left start">
            <span className="diff-chunk">terraform {"{"}</span>
          </td>
          <td data-content={1} className="diff-line-number" />
          <td className="diff-line side-right start">
            <span className="diff-chunk">terraform {"{"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={2} className="diff-line-numbr" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> required_version ="&gt;= 0.12"</span>
          </td>
          <td data-content={2} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> required_version ="&gt;= 0.12"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={3} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> required_providers {"{"}</span>
          </td>
          <td data-content={3} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> required_providers {"{"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={4} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> openstack = {"{"}</span>
          </td>
          <td data-content={4} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> openstack = {"{"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={5} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              source = "terraform-provider-openstack/openstack"
            </span>
          </td>
          <td data-content={5} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              source = "terraform-provider-openstack/openstack"
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={6} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> version = "~&gt; 1.48.0"</span>
          </td>
          <td data-content={6} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> version = "~&gt; 1.48.0"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={7} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> {"}"}</span>
          </td>
          <td data-content={7} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> {"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={8} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> {"}"}</span>
          </td>
          <td data-content={8} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> {"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={9} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={9} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={10} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">provider openstack {"{"}</span>
          </td>
          <td data-content={10} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">provider openstack {"{"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={11} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> user_name = "admin"</span>
          </td>
          <td data-content={11} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> user_name = "admin"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={12} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> tenant_name = "admin"</span>
          </td>
          <td data-content={12} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> tenant_name = "admin"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={13} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> password = "secret"</span>
          </td>
          <td data-content={13} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> password = "secret"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={14} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              auth_url = "http://172.30.1.17/identity"
            </span>
          </td>
          <td data-content={14} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              auth_url = "http://172.30.1.17/identity"
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={15} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={15} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={16} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"># Image creation</span>
          </td>
          <td data-content={16} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"># Image creation</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={17} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_images_image_v2" "ubuntu1804"
              {"{"}
            </span>
          </td>
          <td data-content={17} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_images_image_v2" "ubuntu1804"
              {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={18} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "ubuntu1804"</span>
          </td>
          <td data-content={18} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "ubuntu1804"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={19} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              local_file_path =
              "/opt/stack/IaC/bionic-server-cloudimg-amd64.img"
            </span>
          </td>
          <td data-content={19} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              local_file_path =
              "/opt/stack/IaC/bionic-server-cloudimg-amd64.img"
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={20} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> container_format = "bare"</span>
          </td>
          <td data-content={20} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> container_format = "bare"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={21} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> disk_format = "qcow2"</span>
          </td>
          <td data-content={21} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> disk_format = "qcow2"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={22} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={22} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={23} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_images_image_v2" "cirros"
              {"{"}
            </span>
          </td>
          <td data-content={23} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_images_image_v2" "cirros"
              {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={24} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "cirros"</span>
          </td>
          <td data-content={24} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "cirros"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={25} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              local_file_path = "/opt/stack/IaC/cirros-0.5.2-x86_64-disk.img"
            </span>
          </td>
          <td data-content={25} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              local_file_path = "/opt/stack/IaC/cirros-0.5.2-x86_64-disk.img"
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={26} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> container_format = "bare"</span>
          </td>
          <td data-content={26} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> container_format = "bare"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={27} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> disk_format = "qcow2"</span>
          </td>
          <td data-content={27} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> disk_format = "qcow2"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={28} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={28} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={29} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"># Flavor creation</span>
          </td>
          <td data-content={29} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"># Flavor creation</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={30} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_compute_flavor_v2" "flavor_1"
              {"{"}
            </span>
          </td>
          <td data-content={30} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_compute_flavor_v2" "flavor_1"
              {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={31} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "flavor_1"</span>
          </td>
          <td data-content={31} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "flavor_1"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={32} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> ram = "8192"</span>
          </td>
          <td data-content={32} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> ram = "8192"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={33} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> vcpus = "1"</span>
          </td>
          <td data-content={33} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> vcpus = "1"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={34} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> disk = "20"</span>
          </td>
          <td data-content={34} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> disk = "20"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={35} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> flavor_id = "flavor_1"</span>
          </td>
          <td data-content={35} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> flavor_id = "flavor_1"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={36} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> is_public = "true"</span>
          </td>
          <td data-content={36} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> is_public = "true"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={37} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={37} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={38} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk" />
          </td>
          <td data-content={38} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={39} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"># Router creation</span>
          </td>
          <td data-content={39} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"># Router creation</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={40} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_router_v2" "router_1" {"{"}
            </span>
          </td>
          <td data-content={40} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_router_v2" "router_1" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={41} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "router_1"</span>
          </td>
          <td data-content={41} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "router_1"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={42} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              external_network_id = "5b16677d-b429-4b7e-8edb-6e1c06020db3"
            </span>
          </td>
          <td data-content={42} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              external_network_id = "5b16677d-b429-4b7e-8edb-6e1c06020db3"
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={43} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={43} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={44} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_router_v2" "router_2" {"{"}
            </span>
          </td>
          <td data-content={44} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_router_v2" "router_2" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={45} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "router_2"</span>
          </td>
          <td data-content={45} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "router_2"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={46} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              external_network_id = "5b16677d-b429-4b7e-8edb-6e1c06020db3"
            </span>
          </td>
          <td data-content={46} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              external_network_id = "5b16677d-b429-4b7e-8edb-6e1c06020db3"
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={47} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={47} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={48} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk" />
          </td>
          <td data-content={48} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={49} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"># Network creation</span>
          </td>
          <td data-content={49} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"># Network creation</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={50} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_network_v2" "private_1"{"{"}
            </span>
          </td>
          <td data-content={50} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_network_v2" "private_1"{"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={51} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "private_1"</span>
          </td>
          <td data-content={51} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "private_1"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={52} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> admin_state_up = true</span>
          </td>
          <td data-content={52} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> admin_state_up = true</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={53} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={53} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={54} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_network_v2" "private_2" {"{"}
            </span>
          </td>
          <td data-content={54} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_network_v2" "private_2" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={55} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "private_2"</span>
          </td>
          <td data-content={55} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "private_2"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={56} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> admin_state_up = true</span>
          </td>
          <td data-content={56} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> admin_state_up = true</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={57} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={57} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={58} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_network_v2" "private_3" {"{"}
            </span>
          </td>
          <td data-content={58} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_network_v2" "private_3" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={59} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "private_3"</span>
          </td>
          <td data-content={59} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "private_3"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={60} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> admin_state_up = true</span>
          </td>
          <td data-content={60} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> admin_state_up = true</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={61} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={61} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={62} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_network_v2" "private_4"{"{"}
            </span>
          </td>
          <td data-content={62} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_network_v2" "private_4"{"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={63} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "private_4"</span>
          </td>
          <td data-content={63} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "private_4"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={64} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> admin_state_up = true</span>
          </td>
          <td data-content={64} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> admin_state_up = true</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={65} className="diff-line-number" />
          <td className="diff-line side-left end">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={65} className="diff-line-number" />
          <td className="diff-line side-right end">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left start diff-line-empty" />
          <td data-content={66} className="diff-line-number" />
          <td className="diff-line side-right start diff-line-modified diff-line-with-inserts">
            <span className="diff-chunk diff-chunk-inserted diff-chunk-modified">
              # New network created
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={67} className="diff-line-number" />
          <td className="diff-line side-right diff-line-modified diff-line-with-inserts">
            <span className="diff-chunk diff-chunk-inserted diff-chunk-modified">
              resource "openstack_networking_network_v2" "private_5"{"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={68} className="diff-line-number" />
          <td className="diff-line side-right diff-line-modified diff-line-with-inserts">
            <span className="diff-chunk diff-chunk-inserted diff-chunk-modified">
              name = "private_5"
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={69} className="diff-line-number" />
          <td className="diff-line side-right diff-line-modified diff-line-with-inserts">
            <span className="diff-chunk diff-chunk-inserted diff-chunk-modified">
              admin_state_up = true
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left end diff-line-empty" />
          <td data-content={70} className="diff-line-number" />
          <td className="diff-line side-right end diff-line-modified diff-line-with-inserts">
            <span className="diff-chunk diff-chunk-inserted diff-chunk-modified">
              {"}"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={66} className="diff-line-number" />
          <td className="diff-line side-left start">
            <span className="diff-chunk">#Connect network to Router1</span>
          </td>
          <td data-content={71} className="diff-line-number" />
          <td className="diff-line side-right start">
            <span className="diff-chunk">#Connect network to Router1</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={67} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_subnet_v2" "subnet_1" {"{"}
            </span>
          </td>
          <td data-content={72} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_subnet_v2" "subnet_1" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={68} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "subnet_1"</span>
          </td>
          <td data-content={73} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "subnet_1"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={69} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_1.id
            </span>
          </td>
          <td data-content={74} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_1.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={70} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> cidr = "10.0.0.0/24"</span>
          </td>
          <td data-content={75} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> cidr = "10.0.0.0/24"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={71} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> ip_version = 4</span>
          </td>
          <td data-content={76} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> ip_version = 4</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={72} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              dns_nameservers = ["8.8.8.8","8.8.4.4"]
            </span>
          </td>
          <td data-content={77} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              dns_nameservers = ["8.8.8.8","8.8.4.4"]
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={73} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={78} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={74} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_subnet_v2" "subnet_2" {"{"}
            </span>
          </td>
          <td data-content={79} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_subnet_v2" "subnet_2" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={75} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "subnet_2"</span>
          </td>
          <td data-content={80} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "subnet_2"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={76} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_2.id
            </span>
          </td>
          <td data-content={81} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_2.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={77} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> cidr = "10.0.1.0/24"</span>
          </td>
          <td data-content={82} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> cidr = "10.0.1.0/24"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={78} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> ip_version = 4</span>
          </td>
          <td data-content={83} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> ip_version = 4</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={79} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={84} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={80} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk" />
          </td>
          <td data-content={85} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={81} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_subnet_v2" "subnet_3" {"{"}
            </span>
          </td>
          <td data-content={86} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_subnet_v2" "subnet_3" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={82} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "subnet_3"</span>
          </td>
          <td data-content={87} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "subnet_3"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={83} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_3.id
            </span>
          </td>
          <td data-content={88} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_3.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={84} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> cidr = "10.0.2.0/24"</span>
          </td>
          <td data-content={89} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> cidr = "10.0.2.0/24"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={85} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> ip_version = 4</span>
          </td>
          <td data-content={90} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> ip_version = 4</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={86} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={91} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={87} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk" />
          </td>
          <td data-content={92} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={88} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_subnet_v2" "subnet_4" {"{"}
            </span>
          </td>
          <td data-content={93} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_subnet_v2" "subnet_4" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={89} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "subnet_4"</span>
          </td>
          <td data-content={94} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "subnet_4"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={90} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_4.id
            </span>
          </td>
          <td data-content={95} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_4.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={91} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> cidr = "10.0.3.0/24"</span>
          </td>
          <td data-content={96} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> cidr = "10.0.3.0/24"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={92} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> ip_version = 4</span>
          </td>
          <td data-content={97} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> ip_version = 4</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={93} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={98} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={94} className="diff-line-number" />
          <td className="diff-line side-left end">
            <span className="diff-chunk" />
          </td>
          <td data-content={99} className="diff-line-number" />
          <td className="diff-line side-right end">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left start diff-line-empty" />
          <td data-content={100} className="diff-line-number" />
          <td className="diff-line side-right start diff-line-inserted">
            <span className="diff-chunk"># Connect new network to Router1</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={101} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              resource "openstack_networking_subnet_v2" "subnet_5" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={102} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> name = "subnet_5"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={103} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_5.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={104} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> cidr = "10.0.4.0/24"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={105} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> ip_version = 4</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left end diff-line-empty" />
          <td data-content={106} className="diff-line-number" />
          <td className="diff-line side-right end diff-line-inserted">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={95} className="diff-line-number" />
          <td className="diff-line side-left start">
            <span className="diff-chunk">
              resource "openstack_networking_router_interface_v2" "interface_1"
              {"{"}
            </span>
          </td>
          <td data-content={107} className="diff-line-number" />
          <td className="diff-line side-right start">
            <span className="diff-chunk">
              resource "openstack_networking_router_interface_v2" "interface_1"
              {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={96} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              router_id = openstack_networking_router_v2.router_1.id
            </span>
          </td>
          <td data-content={108} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              router_id = openstack_networking_router_v2.router_1.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={97} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_1.id
            </span>
          </td>
          <td data-content={109} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_1.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={98} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={110} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={99} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_router_interface_v2" "interface_2"{" "}
              {"{"}
            </span>
          </td>
          <td data-content={111} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_router_interface_v2" "interface_2"{" "}
              {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={100} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              router_id = openstack_networking_router_v2.router_1.id
            </span>
          </td>
          <td data-content={112} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              router_id = openstack_networking_router_v2.router_1.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={101} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_2.id
            </span>
          </td>
          <td data-content={113} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_2.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={102} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={114} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={103} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_router_interface_v2" "interface_3"{" "}
              {"{"}
            </span>
          </td>
          <td data-content={115} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_router_interface_v2" "interface_3"{" "}
              {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={104} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              router_id = openstack_networking_router_v2.router_2.id
            </span>
          </td>
          <td data-content={116} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              router_id = openstack_networking_router_v2.router_2.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={105} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_3.id
            </span>
          </td>
          <td data-content={117} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_3.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={106} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={118} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={107} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_router_interface_v2" "interface_4"{" "}
              {"{"}
            </span>
          </td>
          <td data-content={119} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_router_interface_v2" "interface_4"{" "}
              {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={108} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              router_id = openstack_networking_router_v2.router_1.id
            </span>
          </td>
          <td data-content={120} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              router_id = openstack_networking_router_v2.router_1.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={109} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_4.id
            </span>
          </td>
          <td data-content={121} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_4.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={110} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={122} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={111} className="diff-line-number" />
          <td className="diff-line side-left end">
            <span className="diff-chunk" />
          </td>
          <td data-content={123} className="diff-line-number" />
          <td className="diff-line side-right end">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left start diff-line-empty" />
          <td data-content={124} className="diff-line-number" />
          <td className="diff-line side-right start diff-line-inserted">
            <span className="diff-chunk"># Connect new network to Router1</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={125} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              resource "openstack_networking_router_interface_v2" "interface_5"{" "}
              {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={126} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              router_id = openstack_networking_router_v2.router_1.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={127} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_5.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={128} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left end diff-line-empty" />
          <td data-content={129} className="diff-line-number" />
          <td className="diff-line side-right end diff-line-inserted">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={112} className="diff-line-number" />
          <td className="diff-line side-left start">
            <span className="diff-chunk">
              # Modified code with updated rules
            </span>
          </td>
          <td data-content={130} className="diff-line-number" />
          <td className="diff-line side-right start">
            <span className="diff-chunk">
              # Modified code with updated rules
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={113} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_compute_secgroup_v2" "http"
              {"{"}
            </span>
          </td>
          <td data-content={131} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_compute_secgroup_v2" "http"
              {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={114} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "http"</span>
          </td>
          <td data-content={132} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "http"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={115} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              description = "Open input http port"
            </span>
          </td>
          <td data-content={133} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              description = "Open input http port"
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={116} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> rule {"{"}</span>
          </td>
          <td data-content={134} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> rule {"{"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={117} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> from_port = 80</span>
          </td>
          <td data-content={135} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> from_port = 80</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={118} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> to_port = 80</span>
          </td>
          <td data-content={136} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> to_port = 80</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={119} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> ip_protocol ="tcp"</span>
          </td>
          <td data-content={137} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> ip_protocol ="tcp"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={120} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> cidr ="0.0.0.0/0"</span>
          </td>
          <td data-content={138} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> cidr ="0.0.0.0/0"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={121} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> {"}"}</span>
          </td>
          <td data-content={139} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> {"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={122} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={140} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={123} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_compute_secgroup_v2" "service" {"{"}
            </span>
          </td>
          <td data-content={141} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_compute_secgroup_v2" "service" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={124} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "service"</span>
          </td>
          <td data-content={142} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "service"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={125} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              description = "Open input service port"
            </span>
          </td>
          <td data-content={143} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              description = "Open input service port"
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={126} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> rule {"{"}</span>
          </td>
          <td data-content={144} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> rule {"{"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={127} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> from_port = 8080</span>
          </td>
          <td data-content={145} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> from_port = 8080</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={128} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> to_port = 8080</span>
          </td>
          <td data-content={146} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> to_port = 8080</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={129} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> ip_protocol = "tcp"</span>
          </td>
          <td data-content={147} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> ip_protocol = "tcp"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={130} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> cidr = "0.0.0.0/0"</span>
          </td>
          <td data-content={148} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> cidr = "0.0.0.0/0"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={131} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> {"}"}</span>
          </td>
          <td data-content={149} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> {"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={132} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={150} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={133} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk" />
          </td>
          <td data-content={151} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={134} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_port_v2" "http"
              {"{"}
            </span>
          </td>
          <td data-content={152} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_port_v2" "http"
              {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={135} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "port-instance-http"</span>
          </td>
          <td data-content={153} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "port-instance-http"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={136} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_1.id
            </span>
          </td>
          <td data-content={154} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_1.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={137} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> admin_state_up = true</span>
          </td>
          <td data-content={155} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> admin_state_up = true</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={138} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> security_group_ids = [</span>
          </td>
          <td data-content={156} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> security_group_ids = [</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={139} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              {" "}
              openstack_compute_secgroup_v2.http.id,
            </span>
          </td>
          <td data-content={157} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              {" "}
              openstack_compute_secgroup_v2.http.id,
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={140} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              openstack_compute_secgroup_v2.service.id
            </span>
          </td>
          <td data-content={158} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              openstack_compute_secgroup_v2.service.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={141} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> ]</span>
          </td>
          <td data-content={159} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> ]</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={142} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> fixed_ip {"{"}</span>
          </td>
          <td data-content={160} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> fixed_ip {"{"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={143} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_1.id
            </span>
          </td>
          <td data-content={161} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_1.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={144} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> {"}"}</span>
          </td>
          <td data-content={162} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> {"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={145} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={163} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={146} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_networking_floatingip_v2" "http"{"{"}
            </span>
          </td>
          <td data-content={164} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_networking_floatingip_v2" "http"{"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={147} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> pool = "public"</span>
          </td>
          <td data-content={165} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> pool = "public"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={148} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={166} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={149} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk" />
          </td>
          <td data-content={167} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={150} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_compute_floatingip_associate_v2" "http" {"{"}
            </span>
          </td>
          <td data-content={168} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_compute_floatingip_associate_v2" "http" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={151} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              floating_ip = openstack_networking_floatingip_v2.http.address
            </span>
          </td>
          <td data-content={169} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              floating_ip = openstack_networking_floatingip_v2.http.address
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={152} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              instance_id = openstack_compute_instance_v2.instance_1.id
            </span>
          </td>
          <td data-content={170} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              instance_id = openstack_compute_instance_v2.instance_1.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={153} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={171} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={154} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk" />
          </td>
          <td data-content={172} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={155} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_compute_instance_v2" "instance_1" {"{"}
            </span>
          </td>
          <td data-content={173} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_compute_instance_v2" "instance_1" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={156} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "instance_1"</span>
          </td>
          <td data-content={174} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "instance_1"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={157} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              image_id = openstack_images_image_v2.ubuntu1804.id
            </span>
          </td>
          <td data-content={175} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              image_id = openstack_images_image_v2.ubuntu1804.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={158} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> flavor_id = "flavor_1"</span>
          </td>
          <td data-content={176} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> flavor_id = "flavor_1"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={159} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk" />
          </td>
          <td data-content={177} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={160} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              user_data = file("simple_webserver.sh")
            </span>
          </td>
          <td data-content={178} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              user_data = file("simple_webserver.sh")
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={161} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk" />
          </td>
          <td data-content={179} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={162} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> network {"{"}</span>
          </td>
          <td data-content={180} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> network {"{"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={163} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              port = openstack_networking_port_v2.http.id
            </span>
          </td>
          <td data-content={181} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              port = openstack_networking_port_v2.http.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={164} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> {"}"}</span>
          </td>
          <td data-content={182} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> {"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={165} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              depends_on = [openstack_networking_port_v2.http]
            </span>
          </td>
          <td data-content={183} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              depends_on = [openstack_networking_port_v2.http]
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={166} className="diff-line-number" />
          <td className="diff-line side-left end">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={184} className="diff-line-number" />
          <td className="diff-line side-right end">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={167} className="diff-line-number" />
          <td className="diff-line side-left start end diff-line-modified diff-line-with-removes">
            <span className="diff-chunk diff-chunk-equal diff-chunk-modified">
              # Add{" "}
            </span>
            <span className="diff-chunk diff-chunk-removed diff-chunk-modified">
              0{" "}
            </span>
            <span className="diff-chunk diff-chunk-equal diff-chunk-modified">
              instances with cirros image in the network
            </span>
          </td>
          <td data-content={185} className="diff-line-number" />
          <td className="diff-line side-right start end diff-line-modified diff-line-with-inserts">
            <span className="diff-chunk diff-chunk-equal diff-chunk-modified">
              # Add{" "}
            </span>
            <span className="diff-chunk diff-chunk-inserted diff-chunk-modified">
              1{" "}
            </span>
            <span className="diff-chunk diff-chunk-equal diff-chunk-modified">
              instances with cirros image in the network
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={168} className="diff-line-number" />
          <td className="diff-line side-left start">
            <span className="diff-chunk">
              resource "openstack_compute_instance_v2" "instance_2" {"{"}
            </span>
          </td>
          <td data-content={186} className="diff-line-number" />
          <td className="diff-line side-right start">
            <span className="diff-chunk">
              resource "openstack_compute_instance_v2" "instance_2" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={169} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> count = 1</span>
          </td>
          <td data-content={187} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> count = 1</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={170} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "instance_2"</span>
          </td>
          <td data-content={188} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "instance_2"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={171} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              image_id = openstack_images_image_v2.cirros.id
            </span>
          </td>
          <td data-content={189} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              image_id = openstack_images_image_v2.cirros.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={172} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> flavor_id = "42"</span>
          </td>
          <td data-content={190} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> flavor_id = "42"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={173} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk" />
          </td>
          <td data-content={191} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={174} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> network {"{"}</span>
          </td>
          <td data-content={192} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> network {"{"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={175} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              name = openstack_networking_network_v2.private_2.name
            </span>
          </td>
          <td data-content={193} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              name = openstack_networking_network_v2.private_2.name
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={176} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> {"}"}</span>
          </td>
          <td data-content={194} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> {"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={177} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              depends_on = [openstack_networking_subnet_v2.subnet_2]
            </span>
          </td>
          <td data-content={195} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              depends_on = [openstack_networking_subnet_v2.subnet_2]
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={178} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={196} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={179} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              resource "openstack_compute_instance_v2" "instance_3" {"{"}
            </span>
          </td>
          <td data-content={197} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              resource "openstack_compute_instance_v2" "instance_3" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={180} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> count = 1</span>
          </td>
          <td data-content={198} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> count = 1</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={181} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> name = "instance_3"</span>
          </td>
          <td data-content={199} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> name = "instance_3"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={182} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              image_id = openstack_images_image_v2.cirros.id
            </span>
          </td>
          <td data-content={200} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              image_id = openstack_images_image_v2.cirros.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={183} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> flavor_id = "42"</span>
          </td>
          <td data-content={201} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> flavor_id = "42"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={184} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk" />
          </td>
          <td data-content={202} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={185} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> network {"{"}</span>
          </td>
          <td data-content={203} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> network {"{"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={186} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              name = openstack_networking_network_v2.private_3.name
            </span>
          </td>
          <td data-content={204} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              name = openstack_networking_network_v2.private_3.name
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={187} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk"> {"}"}</span>
          </td>
          <td data-content={205} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk"> {"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={188} className="diff-line-number" />
          <td className="diff-line side-left">
            <span className="diff-chunk">
              depends_on = [openstack_networking_subnet_v2.subnet_3]
            </span>
          </td>
          <td data-content={206} className="diff-line-number" />
          <td className="diff-line side-right">
            <span className="diff-chunk">
              depends_on = [openstack_networking_subnet_v2.subnet_3]
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content={189} className="diff-line-number" />
          <td className="diff-line side-left end">
            <span className="diff-chunk">{"}"}</span>
          </td>
          <td data-content={207} className="diff-line-number" />
          <td className="diff-line side-right end">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left start diff-line-empty" />
          <td data-content={208} className="diff-line-number" />
          <td className="diff-line side-right start diff-line-inserted">
            <span className="diff-chunk">
              # Add one more openstack_network_networking_v2 block
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={209} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              resource "openstack_networking_network_v2" "private_6"{"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={210} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> name = "private_6"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={211} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> admin_state_up = true</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={212} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={213} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"># Connect network to Router2</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={214} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              resource "openstack_networking_subnet_v2" "subnet_6" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={215} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> name = "subnet_6"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={216} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              network_id = openstack_networking_network_v2.private_6.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={217} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> cidr = "10.0.5.0/24"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={218} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> ip_version = 4</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={219} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={220} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={221} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              resource "openstack_networking_router_interface_v2" "interface_6"
              {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={222} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              router_id = openstack_networking_router_v2.router_2.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={223} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              subnet_id = openstack_networking_subnet_v2.subnet_6.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={224} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={225} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={226} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              # Add 0 instances with cirros image in the network
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={227} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              resource "openstack_compute_instance_v2" "instance_4" {"{"}
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={228} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> count = 0</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={229} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> name = "instance_4"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={230} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              image_id = openstack_images_image_v2.cirros.id
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={231} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> flavor_id = "42"</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={232} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk" />
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={233} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> network {"{"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={234} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              name = openstack_networking_network_v2.private_6.name
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={235} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk"> {"}"}</span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left diff-line-empty" />
          <td data-content={236} className="diff-line-number" />
          <td className="diff-line side-right diff-line-inserted">
            <span className="diff-chunk">
              depends_on = [openstack_networking_subnet_v2.subnet_6]
            </span>
          </td>
        </tr>
        <tr className="diff-row">
          <td data-content className="diff-line-number" />
          <td className="diff-line side-left end diff-line-empty" />
          <td data-content={237} className="diff-line-number" />
          <td className="diff-line side-right end diff-line-inserted">
            <span className="diff-chunk">{"}"}</span>
          </td>
        </tr>
      </tbody>
    </table>
);
`

const test3 = `function foo() { return 'bar' }`;
// test = test.replace(/class/g, "className");
// const loadLanguages = require('prismjs/components/');
// loadLanguages(['hcl']);
const value1 = `
terraform {
  required_version =">= 0.12"
  required_providers {
      openstack = {
          source     = "terraform-provider-openstack/openstack"
          version    = "~> 1.48.0"
      }
  }
}

provider openstack {
  user_name        = "admin"
  tenant_name        = "admin"
  password        = "secret"
  auth_url        = "http://172.30.1.17/identity"
}

# Image creation
resource "openstack_images_image_v2" "ubuntu1404" {
  name                = "ubuntu1404"
  local_file_path        = "/opt/stack/IaC/trusty-server-cloudimg-amd64-disk1.img"
  container_format    = "bare"
  disk_format            = "qcow2"
}

# Router creation
resource "openstack_networking_router_v2" "router_1" {
  name                = "router_1"
  external_network_id    = "494c20a9-9995-42e2-b252-e8f3fa320b91"
}


# Network creation
resource "openstack_networking_network_v2" "private_1"{
  name            = "private_1"
  admin_state_up    = true
}

# Subnet creation
resource "openstack_networking_subnet_v2" "subnet_1" {
  name        = "subnet_1"
  network_id    = openstack_networking_network_v2.private_1.id
  cidr        = "10.0.0.0/24"
  ip_version= 4
dns_nameservers	= ["8.8.8.8","8.8.4.4"]
}

# Connect subnet and external network 
resource "openstack_networking_router_interface_v2" "interface_1"{
  router_id    = openstack_networking_router_v2.router_1.id
  subnet_id    = openstack_networking_subnet_v2.subnet_1.id
}
#Modified code with updated rules
resource "openstack_compute_secgroup_v2" "ssh" {
  name            = "ssh"
  description        = "Open input ssh port"
  rule {
      from_port    = 22
      to_port        = 22
      ip_protocol    = "tcp"
      cidr        = "0.0.0.0/0"
  }
}

resource "openstack_compute_secgroup_v2" "custom_port" {
  name            = "custom_port"
  description        = "Open custom input port"
  rule {
      from_port    = 34634
      to_port        = 34634
      ip_protocol    = "tcp"
      cidr        = "0.0.0.0/0"
  }
}

resource "openstack_networking_port_v2" "http" {
  name                = "port-instance-http"
  network_id            = openstack_networking_network_v2.private_1.id
  admin_state_up        = true
  security_group_ids     = [
      openstack_compute_secgroup_v2.custom_port.id,
      openstack_compute_secgroup_v2.ssh.id,
  ]
  fixed_ip {
      subnet_id         = openstack_networking_subnet_v2.subnet_1.id
  }
}

resource "openstack_networking_floatingip_v2" "http"{
  pool = "public"
}

resource "openstack_compute_floatingip_associate_v2" "http" {
  floating_ip    = openstack_networking_floatingip_v2.http.address
  instance_id    = openstack_compute_instance_v2.instance_1.id
}

resource "openstack_compute_instance_v2" "instance_1" {
  name            = "instance_1"
  image_id        = openstack_images_image_v2.ubuntu1404.id
  flavor_id       = "2"

  user_data        = file("vuln_webserver.sh")

  network {
      port        = openstack_networking_port_v2.http.id
  }
}
`;

const old = `  terraform {
  required_version =">= 0.12"
  required_providers {
      openstack = {
          source     = "terraform-provider-openstack/openstack"
          version    = "~> 1.48.0"
      }
  }
}

provider openstack {
  user_name        = "admin"
  tenant_name        = "admin"
  password        = "secret"
  auth_url        = "http://172.30.1.17/identity"
}

# Image creation
resource "openstack_images_image_v2" "ubuntu1404" {
  name                = "ubuntu1404"
  local_file_path        = "/opt/stack/IaC/trusty-server-cloudimg-amd64-disk1.img"
  container_format    = "bare"
  disk_format            = "qcow2"
}

# Router creation
resource "openstack_networking_router_v2" "router_1" {
  name                = "router_1"
  external_network_id    = "494c20a9-9995-42e2-b252-e8f3fa320b91"
}


# Network creation
resource "openstack_networking_network_v2" "private_1"{
  name            = "private_1"
  admin_state_up    = true
}

# Subnet creation
resource "openstack_networking_subnet_v2" "subnet_1" {
  name        = "subnet_1"
  network_id    = openstack_networking_network_v2.private_1.id
  cidr        = "10.0.0.0/24"
  ip_version= 4
dns_nameservers	= ["8.8.8.8","8.8.4.4"]
}

# Connect subnet and external network 
resource "openstack_networking_router_interface_v2" "interface_1"{
  router_id    = openstack_networking_router_v2.router_1.id
  subnet_id    = openstack_networking_subnet_v2.subnet_1.id
}
#Modified code with updated rules
resource "openstack_compute_secgroup_v2" "ssh" {
  name            = "ssh"
  description        = "Open input ssh port"
  rule {
      from_port    = 22
      to_port        = 22
      ip_protocol    = "tcp"
      cidr        = "0.0.0.0/0"
  }
}

resource "openstack_compute_secgroup_v2" "custom_port" {
  name            = "custom_port"
  description        = "Open custom input port"
  rule {
      from_port    = 34634
      to_port        = 34634
      ip_protocol    = "tcp"
      cidr        = "0.0.0.0/0"
  }
}

resource "openstack_networking_port_v2" "http" {
  name                = "port-instance-http"
  network_id            = openstack_networking_network_v2.private_1.id
  admin_state_up        = true
  security_group_ids     = [
      openstack_compute_secgroup_v2.custom_port.id,
      openstack_compute_secgroup_v2.ssh.id,
  ]
  fixed_ip {
      subnet_id         = openstack_networking_subnet_v2.subnet_1.id
  }
}

resource "openstack_networking_floatingip_v2" "http"{
  pool = "public"
}

resource "openstack_compute_floatingip_associate_v2" "http" {
  floating_ip    = openstack_networking_floatingip_v2.http.address
  instance_id    = openstack_compute_instance_v2.instance_1.id
}

resource "openstack_compute_instance_v2" "instance_1" {
  name            = "instance_1"
  image_id        = openstack_images_image_v2.ubuntu1404.id
  flavor_id       = "2"

  user_data        = file("test.sh")

  network {
      port        = openstack_networking_port_v2.http.id
  }
}`

const tt = `<table class="diff-table"><thead><tr><td class="line-number-header"></td><td class="side-content-header"></td><td class="line-number-header"></td><td class="side-content-header"></td></tr></thead><tbody><tr class="diff-row"><td data-content="1" class="diff-line-number"></td><td class="diff-line side-left start"><span class="diff-chunk">&lt;div class=&quot;highlight&quot;>&lt;pre>&lt;span>&lt;/span>&lt;span class=&quot;nb&quot;>terraform&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="1" class="diff-line-number"></td><td class="diff-line side-right start"><span class="diff-chunk">&lt;div class=&quot;highlight&quot;>&lt;pre>&lt;span>&lt;/span>&lt;span class=&quot;nb&quot;>terraform&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="2" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>required_version&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;&amp;gt;= 0.12&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="2" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>required_version&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;&amp;gt;= 0.12&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="3" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>required_providers&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="3" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>required_providers&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="4" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;nb&quot;>openstack&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="4" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;nb&quot;>openstack&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="5" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;na&quot;>source&lt;/span>&lt;span class=&quot;w&quot;>     &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;terraform-provider-openstack/openstack&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="5" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;na&quot;>source&lt;/span>&lt;span class=&quot;w&quot;>     &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;terraform-provider-openstack/openstack&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="6" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;na&quot;>version&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;~&amp;gt; 1.48.0&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="6" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;na&quot;>version&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;~&amp;gt; 1.48.0&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="7" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="7" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="8" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="8" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="9" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="9" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="10" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>provider&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;err&quot;>openstack {&lt;/span></span></td><td data-content="10" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>provider&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;err&quot;>openstack {&lt;/span></span></td></tr><tr class="diff-row"><td data-content="11" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>user_name&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;admin&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="11" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>user_name&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;admin&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="12" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>tenant_name&lt;/span>&lt;span class=&quot;w&quot;>     &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;admin&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="12" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>tenant_name&lt;/span>&lt;span class=&quot;w&quot;>     &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;admin&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="13" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>password&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;secret&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="13" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>password&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;secret&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="14" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>auth_url&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;http://172.30.1.17/identity&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="14" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>auth_url&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;http://172.30.1.17/identity&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="15" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td><td data-content="15" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="16" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;c1&quot;># Image creation&lt;/span></span></td><td data-content="16" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;c1&quot;># Image creation&lt;/span></span></td></tr><tr class="diff-row"><td data-content="17" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_images_image_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;ubuntu1804&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="17" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_images_image_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;ubuntu1804&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="18" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>                &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;ubuntu1804&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="18" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>                &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;ubuntu1804&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="19" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>local_file_path&lt;/span>&lt;span class=&quot;w&quot;>     &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;/opt/stack/IaC/bionic-server-cloudimg-amd64.img&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="19" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>local_file_path&lt;/span>&lt;span class=&quot;w&quot;>     &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;/opt/stack/IaC/bionic-server-cloudimg-amd64.img&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="20" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>container_format&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;bare&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="20" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>container_format&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;bare&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="21" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>disk_format&lt;/span>&lt;span class=&quot;w&quot;>         &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;qcow2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="21" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>disk_format&lt;/span>&lt;span class=&quot;w&quot;>         &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;qcow2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="22" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="22" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="23" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_images_image_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;cirros&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="23" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_images_image_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;cirros&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="24" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>                &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;cirros&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="24" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>                &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;cirros&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="25" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>local_file_path&lt;/span>&lt;span class=&quot;w&quot;>     &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;/opt/stack/IaC/cirros-0.5.2-x86_64-disk.img&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="25" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>local_file_path&lt;/span>&lt;span class=&quot;w&quot;>     &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;/opt/stack/IaC/cirros-0.5.2-x86_64-disk.img&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="26" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>container_format&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;bare&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="26" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>container_format&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;bare&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="27" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>disk_format&lt;/span>&lt;span class=&quot;w&quot;>         &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;qcow2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="27" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>disk_format&lt;/span>&lt;span class=&quot;w&quot;>         &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;qcow2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="28" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td><td data-content="28" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="29" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;c1&quot;># Flavor creation&lt;/span></span></td><td data-content="29" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;c1&quot;># Flavor creation&lt;/span></span></td></tr><tr class="diff-row"><td data-content="30" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_flavor_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;flavor_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="30" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_flavor_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;flavor_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="31" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;flavor_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="31" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;flavor_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="32" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>ram&lt;/span>&lt;span class=&quot;w&quot;>         &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;8192&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="32" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>ram&lt;/span>&lt;span class=&quot;w&quot;>         &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;8192&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="33" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>vcpus&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="33" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>vcpus&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="34" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>disk&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;20&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="34" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>disk&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;20&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="35" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>flavor_id&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;flavor_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="35" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>flavor_id&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;flavor_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="36" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>is_public&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;true&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="36" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>is_public&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;true&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="37" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td><td data-content="37" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="38" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk"></span></td><td data-content="38" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content="39" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;c1&quot;># Router creation&lt;/span></span></td><td data-content="39" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;c1&quot;># Router creation&lt;/span></span></td></tr><tr class="diff-row"><td data-content="40" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_router_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;router_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="40" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_router_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;router_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="41" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>                &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;router_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="41" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>                &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;router_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="42" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>external_network_id&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;5b16677d-b429-4b7e-8edb-6e1c06020db3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="42" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>external_network_id&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;5b16677d-b429-4b7e-8edb-6e1c06020db3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="43" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="43" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="44" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_router_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;router_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="44" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_router_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;router_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="45" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>                &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;router_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="45" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>                &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;router_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="46" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>external_network_id&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;5b16677d-b429-4b7e-8edb-6e1c06020db3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="46" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>external_network_id&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;5b16677d-b429-4b7e-8edb-6e1c06020db3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="47" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td><td data-content="47" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="48" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk"></span></td><td data-content="48" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content="49" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;c1&quot;># Network creation&lt;/span></span></td><td data-content="49" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;c1&quot;># Network creation&lt;/span></span></td></tr><tr class="diff-row"><td data-content="50" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;err&quot;>&amp;quot;openstack_networking_network_v2&amp;quot; &amp;quot;private_1&amp;quot;{&lt;/span></span></td><td data-content="50" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;err&quot;>&amp;quot;openstack_networking_network_v2&amp;quot; &amp;quot;private_1&amp;quot;{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="51" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;private_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="51" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;private_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="52" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>admin_state_up&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;no&quot;>true&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="52" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>admin_state_up&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;no&quot;>true&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="53" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="53" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="54" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_network_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;private_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="54" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_network_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;private_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="55" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;private_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="55" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;private_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="56" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>admin_state_up&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;no&quot;>true&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="56" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>admin_state_up&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;no&quot;>true&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="57" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="57" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="58" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_network_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;private_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="58" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_network_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;private_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="59" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;private_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="59" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;private_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="60" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>admin_state_up&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;no&quot;>true&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="60" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>admin_state_up&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;no&quot;>true&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="61" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="61" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="62" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;err&quot;>&amp;quot;openstack_networking_network_v2&amp;quot; &amp;quot;private_4&amp;quot;{&lt;/span></span></td><td data-content="62" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;err&quot;>&amp;quot;openstack_networking_network_v2&amp;quot; &amp;quot;private_4&amp;quot;{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="63" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;private_4&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="63" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;private_4&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="64" class="diff-line-number"></td><td class="diff-line side-left end"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>admin_state_up&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;no&quot;>true&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="64" class="diff-line-number"></td><td class="diff-line side-right end"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>admin_state_up&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;no&quot;>true&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left start diff-line-empty"></td><td data-content="65" class="diff-line-number"></td><td class="diff-line side-right start diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="66" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;err&quot;>&amp;quot;openstack_networking_network_v2&amp;quot; &amp;quot;private_5&amp;quot;{&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="67" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;private_5&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left end diff-line-empty"></td><td data-content="68" class="diff-line-number"></td><td class="diff-line side-right end diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>admin_state_up&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;no&quot;>true&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="65" class="diff-line-number"></td><td class="diff-line side-left start"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td><td data-content="69" class="diff-line-number"></td><td class="diff-line side-right start"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="66" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk"></span></td><td data-content="70" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content="67" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;c1&quot;>#Connect network to Router1&lt;/span></span></td><td data-content="71" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;c1&quot;>#Connect network to Router1&lt;/span></span></td></tr><tr class="diff-row"><td data-content="68" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_subnet_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;subnet_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="72" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_subnet_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;subnet_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="69" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;subnet_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="73" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;subnet_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="70" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>network_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="74" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>network_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="71" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;10.0.0.0/24&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="75" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;10.0.0.0/24&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="72" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>ip_version&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>4&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="76" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>ip_version&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>4&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="73" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>dns_nameservers&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>[&lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;8.8.8.8&amp;quot;,&amp;quot;8.8.4.4&amp;quot;&lt;/span>&lt;span class=&quot;p&quot;>]&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="77" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>dns_nameservers&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>[&lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;8.8.8.8&amp;quot;,&amp;quot;8.8.4.4&amp;quot;&lt;/span>&lt;span class=&quot;p&quot;>]&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="74" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="78" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="75" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_subnet_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;subnet_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="79" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_subnet_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;subnet_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="76" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;subnet_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="80" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;subnet_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="77" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>network_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;>  &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_2.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="81" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>network_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;>  &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_2.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="78" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;10.0.1.0/24&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="82" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;10.0.1.0/24&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="79" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>ip_version&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>4&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="83" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>ip_version&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>4&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="80" class="diff-line-number"></td><td class="diff-line side-left end"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="84" class="diff-line-number"></td><td class="diff-line side-right end"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="81" class="diff-line-number"></td><td class="diff-line side-left start end diff-line-removed"><span class="diff-chunk"></span></td><td data-content class="diff-line-number"></td><td class="diff-line side-right start end diff-line-empty"></td></tr><tr class="diff-row"><td data-content="82" class="diff-line-number"></td><td class="diff-line side-left start"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_subnet_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;subnet_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="85" class="diff-line-number"></td><td class="diff-line side-right start"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_subnet_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;subnet_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="83" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;subnet_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="86" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;subnet_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="84" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>network_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_3.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="87" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>network_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_3.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="85" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;10.0.2.0/24&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="88" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;10.0.2.0/24&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="86" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>ip_version&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>4&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="89" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>ip_version&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>4&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="87" class="diff-line-number"></td><td class="diff-line side-left end"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="90" class="diff-line-number"></td><td class="diff-line side-right end"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="88" class="diff-line-number"></td><td class="diff-line side-left start end diff-line-removed"><span class="diff-chunk"></span></td><td data-content class="diff-line-number"></td><td class="diff-line side-right start end diff-line-empty"></td></tr><tr class="diff-row"><td data-content="89" class="diff-line-number"></td><td class="diff-line side-left start"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_subnet_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;subnet_4&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="91" class="diff-line-number"></td><td class="diff-line side-right start"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_subnet_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;subnet_4&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="90" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;subnet_4&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="92" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;subnet_4&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="91" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>network_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_4.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="93" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>network_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_4.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="92" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;10.0.3.0/24&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="94" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;10.0.3.0/24&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="93" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>ip_version&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>4&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="95" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>ip_version&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>4&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="94" class="diff-line-number"></td><td class="diff-line side-left end"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="96" class="diff-line-number"></td><td class="diff-line side-right end"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left start diff-line-empty"></td><td data-content="97" class="diff-line-number"></td><td class="diff-line side-right start diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_subnet_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;subnet_5&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="98" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;subnet_5&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="99" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>network_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_5.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="100" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;10.0.4.0/24&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="101" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>ip_version&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>4&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left end diff-line-empty"></td><td data-content="102" class="diff-line-number"></td><td class="diff-line side-right end diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="95" class="diff-line-number"></td><td class="diff-line side-left start"><span class="diff-chunk"></span></td><td data-content="103" class="diff-line-number"></td><td class="diff-line side-right start"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content="96" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;err&quot;>&amp;quot;openstack_networking_router_interface_v2&amp;quot; &amp;quot;interface_1&amp;quot;{&lt;/span></span></td><td data-content="104" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;err&quot;>&amp;quot;openstack_networking_router_interface_v2&amp;quot; &amp;quot;interface_1&amp;quot;{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="97" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>router_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_router_v2.router_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="105" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>router_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_router_v2.router_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="98" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>subnet_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="106" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>subnet_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="99" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="107" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="100" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_router_interface_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;interface_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="108" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_router_interface_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;interface_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="101" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>router_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_router_v2.router_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="109" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>router_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_router_v2.router_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="102" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>subnet_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_2.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="110" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>subnet_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_2.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="103" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="111" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="104" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_router_interface_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;interface_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="112" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_router_interface_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;interface_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="105" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>router_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_router_v2.router_2.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="113" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>router_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_router_v2.router_2.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="106" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>subnet_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_3.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="114" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>subnet_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_3.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="107" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="115" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="108" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_router_interface_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;interface_4&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="116" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_router_interface_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;interface_4&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="109" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>router_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_router_v2.router_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="117" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>router_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_router_v2.router_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="110" class="diff-line-number"></td><td class="diff-line side-left end"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>subnet_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_4.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="118" class="diff-line-number"></td><td class="diff-line side-right end"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>subnet_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_4.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left start diff-line-empty"></td><td data-content="119" class="diff-line-number"></td><td class="diff-line side-right start diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="120" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_router_interface_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;interface_5&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="121" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>router_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_router_v2.router_2.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left end diff-line-empty"></td><td data-content="122" class="diff-line-number"></td><td class="diff-line side-right end diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>subnet_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_5.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="111" class="diff-line-number"></td><td class="diff-line side-left start"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td><td data-content="123" class="diff-line-number"></td><td class="diff-line side-right start"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="112" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk"></span></td><td data-content="124" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content="113" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;c1&quot;># Modified code with updated rules&lt;/span></span></td><td data-content="125" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;c1&quot;># Modified code with updated rules&lt;/span></span></td></tr><tr class="diff-row"><td data-content="114" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_secgroup_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;http&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="126" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_secgroup_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;http&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="115" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;http&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="127" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;http&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="116" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>description&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;Open input http port&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="128" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>description&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;Open input http port&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="117" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>rule&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="129" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>rule&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="118" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>from_port&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>80&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="130" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>from_port&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>80&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="119" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>to_port&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>80&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="131" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>to_port&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>80&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="120" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>ip_protocol&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;tcp&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="132" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>ip_protocol&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;tcp&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="121" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;0.0.0.0/0&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="133" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;0.0.0.0/0&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="122" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="134" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="123" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="135" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="124" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_secgroup_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;service&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="136" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_secgroup_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;service&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="125" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;service&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="137" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;service&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="126" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>description&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;Open input service port&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="138" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>description&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;Open input service port&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="127" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>rule&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="139" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>rule&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="128" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>from_port&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>8080&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="140" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>from_port&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>8080&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="129" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>to_port&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>8080&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="141" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>to_port&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>8080&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="130" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>ip_protocol&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;tcp&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="142" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>ip_protocol&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;tcp&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="131" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;0.0.0.0/0&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="143" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>cidr&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;0.0.0.0/0&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="132" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="144" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="133" class="diff-line-number"></td><td class="diff-line side-left end"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="145" class="diff-line-number"></td><td class="diff-line side-right end"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="134" class="diff-line-number"></td><td class="diff-line side-left start end diff-line-removed"><span class="diff-chunk"></span></td><td data-content class="diff-line-number"></td><td class="diff-line side-right start end diff-line-empty"></td></tr><tr class="diff-row"><td data-content="135" class="diff-line-number"></td><td class="diff-line side-left start"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_port_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;http&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="146" class="diff-line-number"></td><td class="diff-line side-right start"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_networking_port_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;http&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="136" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>                &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;port-instance-http&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="147" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>                &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;port-instance-http&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="137" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>network_id&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="148" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>network_id&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="138" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>admin_state_up&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;no&quot;>true&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="149" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>admin_state_up&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;no&quot;>true&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="139" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>security_group_ids&lt;/span>&lt;span class=&quot;w&quot;>     &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>[&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="150" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>security_group_ids&lt;/span>&lt;span class=&quot;w&quot;>     &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>[&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="140" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;nv&quot;>openstack_compute_secgroup_v2.http.id&lt;/span>&lt;span class=&quot;p&quot;>,&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="151" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;nv&quot;>openstack_compute_secgroup_v2.http.id&lt;/span>&lt;span class=&quot;p&quot;>,&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="141" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;nv&quot;>openstack_compute_secgroup_v2.service.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="152" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;nv&quot;>openstack_compute_secgroup_v2.service.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="142" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>]&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="153" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>]&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="143" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>fixed_ip&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="154" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>fixed_ip&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="144" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>subnet_id&lt;/span>&lt;span class=&quot;w&quot;>         &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="155" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>subnet_id&lt;/span>&lt;span class=&quot;w&quot;>         &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="145" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="156" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="146" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="157" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="147" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;err&quot;>&amp;quot;openstack_networking_floatingip_v2&amp;quot; &amp;quot;http&amp;quot;{&lt;/span></span></td><td data-content="158" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;err&quot;>&amp;quot;openstack_networking_floatingip_v2&amp;quot; &amp;quot;http&amp;quot;{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="148" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>pool&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;public&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="159" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>pool&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;public&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="149" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="160" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="150" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk"></span></td><td data-content="161" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content="151" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_floatingip_associate_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;http&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="162" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_floatingip_associate_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;http&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="152" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>floating_ip&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_floatingip_v2.http.address&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="163" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>floating_ip&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_floatingip_v2.http.address&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="153" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>instance_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_compute_instance_v2.instance_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="164" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>instance_id&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_compute_instance_v2.instance_1.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="154" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="165" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="155" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk"></span></td><td data-content="166" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content="156" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_instance_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;instance_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="167" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_instance_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;instance_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="157" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;instance_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="168" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;instance_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="158" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>image_id&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_images_image_v2.ubuntu1804.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="169" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>image_id&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_images_image_v2.ubuntu1804.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="159" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>flavor_id&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;flavor_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="170" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>flavor_id&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;flavor_1&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="160" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk"></span></td><td data-content="171" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content="161" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>user_data&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nf&quot;>file&lt;/span>&lt;span class=&quot;p&quot;>(&lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;simple_webserver.sh&amp;quot;&lt;/span>&lt;span class=&quot;p&quot;>)&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="172" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>user_data&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nf&quot;>file&lt;/span>&lt;span class=&quot;p&quot;>(&lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;simple_webserver.sh&amp;quot;&lt;/span>&lt;span class=&quot;p&quot;>)&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="162" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk"></span></td><td data-content="173" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content="163" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>network&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="174" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>network&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="164" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>port&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_port_v2.http.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="175" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>port&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_port_v2.http.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="165" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="176" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="166" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>	&lt;/span>&lt;span class=&quot;na&quot;>depends_on&lt;/span>&lt;span class=&quot;w&quot;>		&lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>[&lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_port_v2.http&lt;/span>&lt;span class=&quot;p&quot;>]&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="177" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>	&lt;/span>&lt;span class=&quot;na&quot;>depends_on&lt;/span>&lt;span class=&quot;w&quot;>		&lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>[&lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_port_v2.http&lt;/span>&lt;span class=&quot;p&quot;>]&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="167" class="diff-line-number"></td><td class="diff-line side-left end"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td><td data-content="178" class="diff-line-number"></td><td class="diff-line side-right end"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;c1&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="168" class="diff-line-number"></td><td class="diff-line side-left start diff-line-modified diff-line-with-removes"><span class="diff-chunk diff-chunk-equal diff-chunk-modified">&lt;span class=&quot;c1&quot;># Add </span><span class="diff-chunk diff-chunk-removed diff-chunk-modified">0 </span><span class="diff-chunk diff-chunk-equal diff-chunk-modified">instances with cirros image in the network&lt;/span></span></td><td data-content="179" class="diff-line-number"></td><td class="diff-line side-right start diff-line-modified diff-line-with-inserts"><span class="diff-chunk diff-chunk-inserted diff-chunk-modified"></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left end diff-line-empty"></td><td data-content="180" class="diff-line-number"></td><td class="diff-line side-right end diff-line-modified diff-line-with-inserts"><span class="diff-chunk diff-chunk-inserted diff-chunk-modified"></span><span class="diff-chunk diff-chunk-equal diff-chunk-modified">&lt;span class=&quot;c1&quot;># Add </span><span class="diff-chunk diff-chunk-inserted diff-chunk-modified">1 </span><span class="diff-chunk diff-chunk-equal diff-chunk-modified">instances with cirros image in the network&lt;/span></span></td></tr><tr class="diff-row"><td data-content="169" class="diff-line-number"></td><td class="diff-line side-left start"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_instance_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;instance_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="181" class="diff-line-number"></td><td class="diff-line side-right start"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_instance_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;instance_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="170" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>count&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>1&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="182" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>count&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>1&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="171" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;instance_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="183" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;instance_2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="172" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>image_id&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_images_image_v2.cirros.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="184" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>image_id&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_images_image_v2.cirros.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="173" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>flavor_id&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;42&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="185" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>flavor_id&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;42&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="174" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk"></span></td><td data-content="186" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content="175" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>network&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="187" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>network&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="176" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_2.name&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="188" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_2.name&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="177" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="189" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="178" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>	&lt;/span>&lt;span class=&quot;na&quot;>depends_on&lt;/span>&lt;span class=&quot;w&quot;>	&lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>[&lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_2&lt;/span>&lt;span class=&quot;p&quot;>]&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="190" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>	&lt;/span>&lt;span class=&quot;na&quot;>depends_on&lt;/span>&lt;span class=&quot;w&quot;>	&lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>[&lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_2&lt;/span>&lt;span class=&quot;p&quot;>]&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="179" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="191" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="180" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_instance_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;instance_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td><td data-content="192" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_instance_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;instance_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content="181" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>count&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>1&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="193" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>count&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>1&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="182" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;instance_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="194" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;instance_3&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="183" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>image_id&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_images_image_v2.cirros.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="195" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>image_id&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_images_image_v2.cirros.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="184" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>flavor_id&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;42&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="196" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>flavor_id&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;42&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="185" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk"></span></td><td data-content="197" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content="186" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>network&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="198" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>network&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="187" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_3.name&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="199" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_3.name&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="188" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="200" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="189" class="diff-line-number"></td><td class="diff-line side-left end"><span class="diff-chunk">&lt;span class=&quot;w&quot;>	&lt;/span>&lt;span class=&quot;na&quot;>depends_on&lt;/span>&lt;span class=&quot;w&quot;>	&lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>[&lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_3&lt;/span>&lt;span class=&quot;p&quot;>]&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="201" class="diff-line-number"></td><td class="diff-line side-right end"><span class="diff-chunk">&lt;span class=&quot;w&quot;>	&lt;/span>&lt;span class=&quot;na&quot;>depends_on&lt;/span>&lt;span class=&quot;w&quot;>	&lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>[&lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_3&lt;/span>&lt;span class=&quot;p&quot;>]&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left start diff-line-empty"></td><td data-content="202" class="diff-line-number"></td><td class="diff-line side-right start diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="203" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;kr&quot;>resource&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nc&quot;>&amp;quot;openstack_compute_instance_v2&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>&amp;quot;instance_4&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="204" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>count&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;m&quot;>1&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="205" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>            &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;instance_4&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="206" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>image_id&lt;/span>&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_images_image_v2.cirros.id&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="207" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>flavor_id&lt;/span>&lt;span class=&quot;w&quot;>       &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;s2&quot;>&amp;quot;42&amp;quot;&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="208" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk"></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="209" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;nb&quot;>network&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>{&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="210" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>        &lt;/span>&lt;span class=&quot;na&quot;>name&lt;/span>&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_network_v2.private_5.name&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left diff-line-empty"></td><td data-content="211" class="diff-line-number"></td><td class="diff-line side-right diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content class="diff-line-number"></td><td class="diff-line side-left end diff-line-empty"></td><td data-content="212" class="diff-line-number"></td><td class="diff-line side-right end diff-line-inserted"><span class="diff-chunk">&lt;span class=&quot;w&quot;>    &lt;/span>&lt;span class=&quot;na&quot;>depends_on&lt;/span>&lt;span class=&quot;w&quot;>  &lt;/span>&lt;span class=&quot;o&quot;>=&lt;/span>&lt;span class=&quot;w&quot;> &lt;/span>&lt;span class=&quot;p&quot;>[&lt;/span>&lt;span class=&quot;nv&quot;>openstack_networking_subnet_v2.subnet_5&lt;/span>&lt;span class=&quot;p&quot;>]&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="190" class="diff-line-number"></td><td class="diff-line side-left start"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td><td data-content="213" class="diff-line-number"></td><td class="diff-line side-right start"><span class="diff-chunk">&lt;span class=&quot;p&quot;>}&lt;/span>&lt;span class=&quot;w&quot;>&lt;/span></span></td></tr><tr class="diff-row"><td data-content="191" class="diff-line-number"></td><td class="diff-line side-left"><span class="diff-chunk">&lt;/pre>&lt;/div></span></td><td data-content="214" class="diff-line-number"></td><td class="diff-line side-right"><span class="diff-chunk">&lt;/pre>&lt;/div></span></td></tr><tr class="diff-row"><td data-content="192" class="diff-line-number"></td><td class="diff-line side-left end"><span class="diff-chunk"></span></td><td data-content="215" class="diff-line-number"></td><td class="diff-line side-right end"><span class="diff-chunk"></span></td></tr></tbody>`

// const test2 = Prism.

const DiffViewer = () => {
  return (
    <ModalDialog open="true">
      <div dangerouslySetInnerHTML={{ __html: tt }} /> 
    </ModalDialog>
  );
};

export default DiffViewer;
