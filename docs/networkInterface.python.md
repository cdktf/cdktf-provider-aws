# `networkInterface` Submodule <a name="`networkInterface` Submodule" id="@cdktf/provider-aws.networkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterface <a name="NetworkInterface" id="@cdktf/provider-aws.networkInterface.NetworkInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface aws_network_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_interface

networkInterface.NetworkInterface(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subnet_id: str,
  attachment: typing.Union[IResolvable, typing.List[NetworkInterfaceAttachment]] = None,
  description: str = None,
  id: str = None,
  interface_type: str = None,
  ipv4_prefix_count: typing.Union[int, float] = None,
  ipv4_prefixes: typing.List[str] = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: typing.List[str] = None,
  ipv6_address_list: typing.List[str] = None,
  ipv6_address_list_enabled: typing.Union[bool, IResolvable] = None,
  ipv6_prefix_count: typing.Union[int, float] = None,
  ipv6_prefixes: typing.List[str] = None,
  private_ip: str = None,
  private_ip_list: typing.List[str] = None,
  private_ip_list_enabled: typing.Union[bool, IResolvable] = None,
  private_ips: typing.List[str] = None,
  private_ips_count: typing.Union[int, float] = None,
  security_groups: typing.List[str] = None,
  source_dest_check: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#subnet_id NetworkInterface#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.attachment">attachment</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>]]</code> | attachment block. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#description NetworkInterface#description}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#id NetworkInterface#id}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.interfaceType">interface_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#interface_type NetworkInterface#interface_type}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv4PrefixCount">ipv4_prefix_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv4Prefixes">ipv4_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressList">ipv6_address_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressListEnabled">ipv6_address_list_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6PrefixCount">ipv6_prefix_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6Prefixes">ipv6_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip NetworkInterface#private_ip}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpList">private_ip_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list NetworkInterface#private_ip_list}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpListEnabled">private_ip_list_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIps">private_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips NetworkInterface#private_ips}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpsCount">private_ips_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips_count NetworkInterface#private_ips_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#security_groups NetworkInterface#security_groups}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.sourceDestCheck">source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#source_dest_check NetworkInterface#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags NetworkInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags_all NetworkInterface#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#subnet_id NetworkInterface#subnet_id}.

---

##### `attachment`<sup>Optional</sup> <a name="attachment" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.attachment"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>]]

attachment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#attachment NetworkInterface#attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#description NetworkInterface#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#id NetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface_type`<sup>Optional</sup> <a name="interface_type" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.interfaceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#interface_type NetworkInterface#interface_type}.

---

##### `ipv4_prefix_count`<sup>Optional</sup> <a name="ipv4_prefix_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv4PrefixCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}.

---

##### `ipv4_prefixes`<sup>Optional</sup> <a name="ipv4_prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv4Prefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}.

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}.

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6Addresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}.

---

##### `ipv6_address_list`<sup>Optional</sup> <a name="ipv6_address_list" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}.

---

##### `ipv6_address_list_enabled`<sup>Optional</sup> <a name="ipv6_address_list_enabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6AddressListEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}.

---

##### `ipv6_prefix_count`<sup>Optional</sup> <a name="ipv6_prefix_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6PrefixCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}.

---

##### `ipv6_prefixes`<sup>Optional</sup> <a name="ipv6_prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.ipv6Prefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip NetworkInterface#private_ip}.

---

##### `private_ip_list`<sup>Optional</sup> <a name="private_ip_list" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list NetworkInterface#private_ip_list}.

---

##### `private_ip_list_enabled`<sup>Optional</sup> <a name="private_ip_list_enabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpListEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}.

---

##### `private_ips`<sup>Optional</sup> <a name="private_ips" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips NetworkInterface#private_ips}.

---

##### `private_ips_count`<sup>Optional</sup> <a name="private_ips_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.privateIpsCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips_count NetworkInterface#private_ips_count}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#security_groups NetworkInterface#security_groups}.

---

##### `source_dest_check`<sup>Optional</sup> <a name="source_dest_check" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.sourceDestCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#source_dest_check NetworkInterface#source_dest_check}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags NetworkInterface#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags_all NetworkInterface#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.putAttachment">put_attachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetAttachment">reset_attachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetInterfaceType">reset_interface_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4PrefixCount">reset_ipv4_prefix_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4Prefixes">reset_ipv4_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressCount">reset_ipv6_address_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Addresses">reset_ipv6_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressList">reset_ipv6_address_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressListEnabled">reset_ipv6_address_list_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6PrefixCount">reset_ipv6_prefix_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Prefixes">reset_ipv6_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpList">reset_private_ip_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpListEnabled">reset_private_ip_list_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIps">reset_private_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpsCount">reset_private_ips_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetSourceDestCheck">reset_source_dest_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkInterface.NetworkInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkInterface.NetworkInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkInterface.NetworkInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkInterface.NetworkInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_attachment` <a name="put_attachment" id="@cdktf/provider-aws.networkInterface.NetworkInterface.putAttachment"></a>

```python
def put_attachment(
  value: typing.Union[IResolvable, typing.List[NetworkInterfaceAttachment]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkInterface.NetworkInterface.putAttachment.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>]]

---

##### `reset_attachment` <a name="reset_attachment" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetAttachment"></a>

```python
def reset_attachment() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interface_type` <a name="reset_interface_type" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetInterfaceType"></a>

```python
def reset_interface_type() -> None
```

##### `reset_ipv4_prefix_count` <a name="reset_ipv4_prefix_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4PrefixCount"></a>

```python
def reset_ipv4_prefix_count() -> None
```

##### `reset_ipv4_prefixes` <a name="reset_ipv4_prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv4Prefixes"></a>

```python
def reset_ipv4_prefixes() -> None
```

##### `reset_ipv6_address_count` <a name="reset_ipv6_address_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressCount"></a>

```python
def reset_ipv6_address_count() -> None
```

##### `reset_ipv6_addresses` <a name="reset_ipv6_addresses" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Addresses"></a>

```python
def reset_ipv6_addresses() -> None
```

##### `reset_ipv6_address_list` <a name="reset_ipv6_address_list" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressList"></a>

```python
def reset_ipv6_address_list() -> None
```

##### `reset_ipv6_address_list_enabled` <a name="reset_ipv6_address_list_enabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressListEnabled"></a>

```python
def reset_ipv6_address_list_enabled() -> None
```

##### `reset_ipv6_prefix_count` <a name="reset_ipv6_prefix_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6PrefixCount"></a>

```python
def reset_ipv6_prefix_count() -> None
```

##### `reset_ipv6_prefixes` <a name="reset_ipv6_prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetIpv6Prefixes"></a>

```python
def reset_ipv6_prefixes() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_private_ip_list` <a name="reset_private_ip_list" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpList"></a>

```python
def reset_private_ip_list() -> None
```

##### `reset_private_ip_list_enabled` <a name="reset_private_ip_list_enabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpListEnabled"></a>

```python
def reset_private_ip_list_enabled() -> None
```

##### `reset_private_ips` <a name="reset_private_ips" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIps"></a>

```python
def reset_private_ips() -> None
```

##### `reset_private_ips_count` <a name="reset_private_ips_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetPrivateIpsCount"></a>

```python
def reset_private_ips_count() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_source_dest_check` <a name="reset_source_dest_check" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetSourceDestCheck"></a>

```python
def reset_source_dest_check() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.networkInterface.NetworkInterface.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import network_interface

networkInterface.NetworkInterface.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import network_interface

networkInterface.NetworkInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import network_interface

networkInterface.NetworkInterface.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkInterface.NetworkInterface.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachment">attachment</a></code> | <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList">NetworkInterfaceAttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateDnsName">private_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachmentInput">attachment_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceTypeInput">interface_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCountInput">ipv4_prefix_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixesInput">ipv4_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCountInput">ipv6_address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressesInput">ipv6_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabledInput">ipv6_address_list_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListInput">ipv6_address_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCountInput">ipv6_prefix_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixesInput">ipv6_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabledInput">private_ip_list_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListInput">private_ip_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCountInput">private_ips_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsInput">private_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheckInput">source_dest_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceType">interface_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCount">ipv4_prefix_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4Prefixes">ipv4_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressList">ipv6_address_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabled">ipv6_address_list_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCount">ipv6_prefix_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Prefixes">ipv6_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpList">private_ip_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabled">private_ip_list_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIps">private_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCount">private_ips_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheck">source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachment"></a>

```python
attachment: NetworkInterfaceAttachmentList
```

- *Type:* <a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList">NetworkInterfaceAttachmentList</a>

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `private_dns_name`<sup>Required</sup> <a name="private_dns_name" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateDnsName"></a>

```python
private_dns_name: str
```

- *Type:* str

---

##### `attachment_input`<sup>Optional</sup> <a name="attachment_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.attachmentInput"></a>

```python
attachment_input: typing.Union[IResolvable, typing.List[NetworkInterfaceAttachment]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interface_type_input`<sup>Optional</sup> <a name="interface_type_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceTypeInput"></a>

```python
interface_type_input: str
```

- *Type:* str

---

##### `ipv4_prefix_count_input`<sup>Optional</sup> <a name="ipv4_prefix_count_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCountInput"></a>

```python
ipv4_prefix_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_prefixes_input`<sup>Optional</sup> <a name="ipv4_prefixes_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixesInput"></a>

```python
ipv4_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_address_count_input`<sup>Optional</sup> <a name="ipv6_address_count_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCountInput"></a>

```python
ipv6_address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses_input`<sup>Optional</sup> <a name="ipv6_addresses_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressesInput"></a>

```python
ipv6_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_address_list_enabled_input`<sup>Optional</sup> <a name="ipv6_address_list_enabled_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabledInput"></a>

```python
ipv6_address_list_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv6_address_list_input`<sup>Optional</sup> <a name="ipv6_address_list_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListInput"></a>

```python
ipv6_address_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_prefix_count_input`<sup>Optional</sup> <a name="ipv6_prefix_count_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCountInput"></a>

```python
ipv6_prefix_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_prefixes_input`<sup>Optional</sup> <a name="ipv6_prefixes_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixesInput"></a>

```python
ipv6_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `private_ip_list_enabled_input`<sup>Optional</sup> <a name="private_ip_list_enabled_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabledInput"></a>

```python
private_ip_list_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_ip_list_input`<sup>Optional</sup> <a name="private_ip_list_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListInput"></a>

```python
private_ip_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ips_count_input`<sup>Optional</sup> <a name="private_ips_count_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCountInput"></a>

```python
private_ips_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ips_input`<sup>Optional</sup> <a name="private_ips_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsInput"></a>

```python
private_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_dest_check_input`<sup>Optional</sup> <a name="source_dest_check_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheckInput"></a>

```python
source_dest_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface_type`<sup>Required</sup> <a name="interface_type" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.interfaceType"></a>

```python
interface_type: str
```

- *Type:* str

---

##### `ipv4_prefix_count`<sup>Required</sup> <a name="ipv4_prefix_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCount"></a>

```python
ipv4_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_prefixes`<sup>Required</sup> <a name="ipv4_prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv4Prefixes"></a>

```python
ipv4_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_address_count`<sup>Required</sup> <a name="ipv6_address_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses`<sup>Required</sup> <a name="ipv6_addresses" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Addresses"></a>

```python
ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_address_list`<sup>Required</sup> <a name="ipv6_address_list" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressList"></a>

```python
ipv6_address_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_address_list_enabled`<sup>Required</sup> <a name="ipv6_address_list_enabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabled"></a>

```python
ipv6_address_list_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv6_prefix_count`<sup>Required</sup> <a name="ipv6_prefix_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCount"></a>

```python
ipv6_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_prefixes`<sup>Required</sup> <a name="ipv6_prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.ipv6Prefixes"></a>

```python
ipv6_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `private_ip_list`<sup>Required</sup> <a name="private_ip_list" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpList"></a>

```python
private_ip_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip_list_enabled`<sup>Required</sup> <a name="private_ip_list_enabled" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabled"></a>

```python
private_ip_list_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_ips`<sup>Required</sup> <a name="private_ips" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIps"></a>

```python
private_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ips_count`<sup>Required</sup> <a name="private_ips_count" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.privateIpsCount"></a>

```python
private_ips_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_dest_check`<sup>Required</sup> <a name="source_dest_check" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheck"></a>

```python
source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkInterface.NetworkInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceAttachment <a name="NetworkInterfaceAttachment" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_interface

networkInterface.NetworkInterfaceAttachment(
  device_index: typing.Union[int, float],
  instance: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#device_index NetworkInterface#device_index}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.instance">instance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#instance NetworkInterface#instance}. |

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#device_index NetworkInterface#device_index}.

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment.property.instance"></a>

```python
instance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#instance NetworkInterface#instance}.

---

### NetworkInterfaceConfig <a name="NetworkInterfaceConfig" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_interface

networkInterface.NetworkInterfaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subnet_id: str,
  attachment: typing.Union[IResolvable, typing.List[NetworkInterfaceAttachment]] = None,
  description: str = None,
  id: str = None,
  interface_type: str = None,
  ipv4_prefix_count: typing.Union[int, float] = None,
  ipv4_prefixes: typing.List[str] = None,
  ipv6_address_count: typing.Union[int, float] = None,
  ipv6_addresses: typing.List[str] = None,
  ipv6_address_list: typing.List[str] = None,
  ipv6_address_list_enabled: typing.Union[bool, IResolvable] = None,
  ipv6_prefix_count: typing.Union[int, float] = None,
  ipv6_prefixes: typing.List[str] = None,
  private_ip: str = None,
  private_ip_list: typing.List[str] = None,
  private_ip_list_enabled: typing.Union[bool, IResolvable] = None,
  private_ips: typing.List[str] = None,
  private_ips_count: typing.Union[int, float] = None,
  security_groups: typing.List[str] = None,
  source_dest_check: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#subnet_id NetworkInterface#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.attachment">attachment</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>]]</code> | attachment block. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#description NetworkInterface#description}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#id NetworkInterface#id}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.interfaceType">interface_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#interface_type NetworkInterface#interface_type}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4PrefixCount">ipv4_prefix_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4Prefixes">ipv4_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressList">ipv6_address_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressListEnabled">ipv6_address_list_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6PrefixCount">ipv6_prefix_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Prefixes">ipv6_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip NetworkInterface#private_ip}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpList">private_ip_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list NetworkInterface#private_ip_list}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpListEnabled">private_ip_list_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIps">private_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips NetworkInterface#private_ips}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpsCount">private_ips_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips_count NetworkInterface#private_ips_count}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#security_groups NetworkInterface#security_groups}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.sourceDestCheck">source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#source_dest_check NetworkInterface#source_dest_check}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags NetworkInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags_all NetworkInterface#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#subnet_id NetworkInterface#subnet_id}.

---

##### `attachment`<sup>Optional</sup> <a name="attachment" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.attachment"></a>

```python
attachment: typing.Union[IResolvable, typing.List[NetworkInterfaceAttachment]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>]]

attachment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#attachment NetworkInterface#attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#description NetworkInterface#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#id NetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface_type`<sup>Optional</sup> <a name="interface_type" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.interfaceType"></a>

```python
interface_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#interface_type NetworkInterface#interface_type}.

---

##### `ipv4_prefix_count`<sup>Optional</sup> <a name="ipv4_prefix_count" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4PrefixCount"></a>

```python
ipv4_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}.

---

##### `ipv4_prefixes`<sup>Optional</sup> <a name="ipv4_prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4Prefixes"></a>

```python
ipv4_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}.

---

##### `ipv6_address_count`<sup>Optional</sup> <a name="ipv6_address_count" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}.

---

##### `ipv6_addresses`<sup>Optional</sup> <a name="ipv6_addresses" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Addresses"></a>

```python
ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}.

---

##### `ipv6_address_list`<sup>Optional</sup> <a name="ipv6_address_list" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressList"></a>

```python
ipv6_address_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}.

---

##### `ipv6_address_list_enabled`<sup>Optional</sup> <a name="ipv6_address_list_enabled" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressListEnabled"></a>

```python
ipv6_address_list_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}.

---

##### `ipv6_prefix_count`<sup>Optional</sup> <a name="ipv6_prefix_count" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6PrefixCount"></a>

```python
ipv6_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}.

---

##### `ipv6_prefixes`<sup>Optional</sup> <a name="ipv6_prefixes" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Prefixes"></a>

```python
ipv6_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip NetworkInterface#private_ip}.

---

##### `private_ip_list`<sup>Optional</sup> <a name="private_ip_list" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpList"></a>

```python
private_ip_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list NetworkInterface#private_ip_list}.

---

##### `private_ip_list_enabled`<sup>Optional</sup> <a name="private_ip_list_enabled" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpListEnabled"></a>

```python
private_ip_list_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}.

---

##### `private_ips`<sup>Optional</sup> <a name="private_ips" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIps"></a>

```python
private_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips NetworkInterface#private_ips}.

---

##### `private_ips_count`<sup>Optional</sup> <a name="private_ips_count" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpsCount"></a>

```python
private_ips_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#private_ips_count NetworkInterface#private_ips_count}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#security_groups NetworkInterface#security_groups}.

---

##### `source_dest_check`<sup>Optional</sup> <a name="source_dest_check" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.sourceDestCheck"></a>

```python
source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#source_dest_check NetworkInterface#source_dest_check}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags NetworkInterface#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface#tags_all NetworkInterface#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceAttachmentList <a name="NetworkInterfaceAttachmentList" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_interface

networkInterface.NetworkInterfaceAttachmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkInterfaceAttachmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkInterfaceAttachment]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>]]

---


### NetworkInterfaceAttachmentOutputReference <a name="NetworkInterfaceAttachmentOutputReference" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_interface

networkInterface.NetworkInterfaceAttachmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndexInput">device_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `device_index_input`<sup>Optional</sup> <a name="device_index_input" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndexInput"></a>

```python
device_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkInterfaceAttachment, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>, cdktf.IResolvable]

---



