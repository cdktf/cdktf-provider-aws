# `defaultVpc` Submodule <a name="`defaultVpc` Submodule" id="@cdktf/provider-aws.defaultVpc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultVpc <a name="DefaultVpc" id="@cdktf/provider-aws.defaultVpc.DefaultVpc"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc aws_default_vpc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_vpc

defaultVpc.DefaultVpc(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assign_generated_ipv6_cidr_block: typing.Union[bool, IResolvable] = None,
  enable_classiclink: typing.Union[bool, IResolvable] = None,
  enable_classiclink_dns_support: typing.Union[bool, IResolvable] = None,
  enable_dns_hostnames: typing.Union[bool, IResolvable] = None,
  enable_dns_support: typing.Union[bool, IResolvable] = None,
  enable_network_address_usage_metrics: typing.Union[bool, IResolvable] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ipv6_cidr_block: str = None,
  ipv6_cidr_block_network_border_group: str = None,
  ipv6_ipam_pool_id: str = None,
  ipv6_netmask_length: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.assignGeneratedIpv6CidrBlock">assign_generated_ipv6_cidr_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableClassiclink">enable_classiclink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink DefaultVpc#enable_classiclink}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableClassiclinkDnsSupport">enable_classiclink_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableDnsHostnames">enable_dns_hostnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableDnsSupport">enable_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableNetworkAddressUsageMetrics">enable_network_address_usage_metrics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#force_destroy DefaultVpc#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#id DefaultVpc#id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6CidrBlockNetworkBorderGroup">ipv6_cidr_block_network_border_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags DefaultVpc#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags_all DefaultVpc#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assign_generated_ipv6_cidr_block`<sup>Optional</sup> <a name="assign_generated_ipv6_cidr_block" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.assignGeneratedIpv6CidrBlock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}.

---

##### `enable_classiclink`<sup>Optional</sup> <a name="enable_classiclink" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableClassiclink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink DefaultVpc#enable_classiclink}.

---

##### `enable_classiclink_dns_support`<sup>Optional</sup> <a name="enable_classiclink_dns_support" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableClassiclinkDnsSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}.

---

##### `enable_dns_hostnames`<sup>Optional</sup> <a name="enable_dns_hostnames" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableDnsHostnames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}.

---

##### `enable_dns_support`<sup>Optional</sup> <a name="enable_dns_support" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableDnsSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}.

---

##### `enable_network_address_usage_metrics`<sup>Optional</sup> <a name="enable_network_address_usage_metrics" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.enableNetworkAddressUsageMetrics"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#force_destroy DefaultVpc#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#id DefaultVpc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}.

---

##### `ipv6_cidr_block_network_border_group`<sup>Optional</sup> <a name="ipv6_cidr_block_network_border_group" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6CidrBlockNetworkBorderGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}.

---

##### `ipv6_ipam_pool_id`<sup>Optional</sup> <a name="ipv6_ipam_pool_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6IpamPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}.

---

##### `ipv6_netmask_length`<sup>Optional</sup> <a name="ipv6_netmask_length" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.ipv6NetmaskLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags DefaultVpc#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags_all DefaultVpc#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetAssignGeneratedIpv6CidrBlock">reset_assign_generated_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclink">reset_enable_classiclink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclinkDnsSupport">reset_enable_classiclink_dns_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsHostnames">reset_enable_dns_hostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsSupport">reset_enable_dns_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableNetworkAddressUsageMetrics">reset_enable_network_address_usage_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlockNetworkBorderGroup">reset_ipv6_cidr_block_network_border_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6IpamPoolId">reset_ipv6_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6NetmaskLength">reset_ipv6_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_assign_generated_ipv6_cidr_block` <a name="reset_assign_generated_ipv6_cidr_block" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetAssignGeneratedIpv6CidrBlock"></a>

```python
def reset_assign_generated_ipv6_cidr_block() -> None
```

##### `reset_enable_classiclink` <a name="reset_enable_classiclink" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclink"></a>

```python
def reset_enable_classiclink() -> None
```

##### `reset_enable_classiclink_dns_support` <a name="reset_enable_classiclink_dns_support" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableClassiclinkDnsSupport"></a>

```python
def reset_enable_classiclink_dns_support() -> None
```

##### `reset_enable_dns_hostnames` <a name="reset_enable_dns_hostnames" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsHostnames"></a>

```python
def reset_enable_dns_hostnames() -> None
```

##### `reset_enable_dns_support` <a name="reset_enable_dns_support" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsSupport"></a>

```python
def reset_enable_dns_support() -> None
```

##### `reset_enable_network_address_usage_metrics` <a name="reset_enable_network_address_usage_metrics" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetEnableNetworkAddressUsageMetrics"></a>

```python
def reset_enable_network_address_usage_metrics() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_ipv6_cidr_block_network_border_group` <a name="reset_ipv6_cidr_block_network_border_group" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlockNetworkBorderGroup"></a>

```python
def reset_ipv6_cidr_block_network_border_group() -> None
```

##### `reset_ipv6_ipam_pool_id` <a name="reset_ipv6_ipam_pool_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6IpamPoolId"></a>

```python
def reset_ipv6_ipam_pool_id() -> None
```

##### `reset_ipv6_netmask_length` <a name="reset_ipv6_netmask_length" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetIpv6NetmaskLength"></a>

```python
def reset_ipv6_netmask_length() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import default_vpc

defaultVpc.DefaultVpc.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import default_vpc

defaultVpc.DefaultVpc.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import default_vpc

defaultVpc.DefaultVpc.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultNetworkAclId">default_network_acl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultRouteTableId">default_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultSecurityGroupId">default_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dhcpOptionsId">dhcp_options_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.existingDefaultVpc">existing_default_vpc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.instanceTenancy">instance_tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6AssociationId">ipv6_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.mainRouteTableId">main_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlockInput">assign_generated_ipv6_cidr_block_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupportInput">enable_classiclink_dns_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkInput">enable_classiclink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnamesInput">enable_dns_hostnames_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupportInput">enable_dns_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetricsInput">enable_network_address_usage_metrics_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroupInput">ipv6_cidr_block_network_border_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolIdInput">ipv6_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLengthInput">ipv6_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlock">assign_generated_ipv6_cidr_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclink">enable_classiclink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupport">enable_classiclink_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnames">enable_dns_hostnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupport">enable_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetrics">enable_network_address_usage_metrics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroup">ipv6_cidr_block_network_border_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `default_network_acl_id`<sup>Required</sup> <a name="default_network_acl_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultNetworkAclId"></a>

```python
default_network_acl_id: str
```

- *Type:* str

---

##### `default_route_table_id`<sup>Required</sup> <a name="default_route_table_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultRouteTableId"></a>

```python
default_route_table_id: str
```

- *Type:* str

---

##### `default_security_group_id`<sup>Required</sup> <a name="default_security_group_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.defaultSecurityGroupId"></a>

```python
default_security_group_id: str
```

- *Type:* str

---

##### `dhcp_options_id`<sup>Required</sup> <a name="dhcp_options_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.dhcpOptionsId"></a>

```python
dhcp_options_id: str
```

- *Type:* str

---

##### `existing_default_vpc`<sup>Required</sup> <a name="existing_default_vpc" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.existingDefaultVpc"></a>

```python
existing_default_vpc: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `instance_tenancy`<sup>Required</sup> <a name="instance_tenancy" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.instanceTenancy"></a>

```python
instance_tenancy: str
```

- *Type:* str

---

##### `ipv6_association_id`<sup>Required</sup> <a name="ipv6_association_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6AssociationId"></a>

```python
ipv6_association_id: str
```

- *Type:* str

---

##### `main_route_table_id`<sup>Required</sup> <a name="main_route_table_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.mainRouteTableId"></a>

```python
main_route_table_id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `assign_generated_ipv6_cidr_block_input`<sup>Optional</sup> <a name="assign_generated_ipv6_cidr_block_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlockInput"></a>

```python
assign_generated_ipv6_cidr_block_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_classiclink_dns_support_input`<sup>Optional</sup> <a name="enable_classiclink_dns_support_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupportInput"></a>

```python
enable_classiclink_dns_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_classiclink_input`<sup>Optional</sup> <a name="enable_classiclink_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkInput"></a>

```python
enable_classiclink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_dns_hostnames_input`<sup>Optional</sup> <a name="enable_dns_hostnames_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnamesInput"></a>

```python
enable_dns_hostnames_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_dns_support_input`<sup>Optional</sup> <a name="enable_dns_support_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupportInput"></a>

```python
enable_dns_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_network_address_usage_metrics_input`<sup>Optional</sup> <a name="enable_network_address_usage_metrics_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetricsInput"></a>

```python
enable_network_address_usage_metrics_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `ipv6_cidr_block_network_border_group_input`<sup>Optional</sup> <a name="ipv6_cidr_block_network_border_group_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```python
ipv6_cidr_block_network_border_group_input: str
```

- *Type:* str

---

##### `ipv6_ipam_pool_id_input`<sup>Optional</sup> <a name="ipv6_ipam_pool_id_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolIdInput"></a>

```python
ipv6_ipam_pool_id_input: str
```

- *Type:* str

---

##### `ipv6_netmask_length_input`<sup>Optional</sup> <a name="ipv6_netmask_length_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLengthInput"></a>

```python
ipv6_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `assign_generated_ipv6_cidr_block`<sup>Required</sup> <a name="assign_generated_ipv6_cidr_block" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlock"></a>

```python
assign_generated_ipv6_cidr_block: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_classiclink`<sup>Required</sup> <a name="enable_classiclink" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclink"></a>

```python
enable_classiclink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_classiclink_dns_support`<sup>Required</sup> <a name="enable_classiclink_dns_support" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableClassiclinkDnsSupport"></a>

```python
enable_classiclink_dns_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_dns_hostnames`<sup>Required</sup> <a name="enable_dns_hostnames" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnames"></a>

```python
enable_dns_hostnames: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_dns_support`<sup>Required</sup> <a name="enable_dns_support" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupport"></a>

```python
enable_dns_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_network_address_usage_metrics`<sup>Required</sup> <a name="enable_network_address_usage_metrics" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetrics"></a>

```python
enable_network_address_usage_metrics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `ipv6_cidr_block_network_border_group`<sup>Required</sup> <a name="ipv6_cidr_block_network_border_group" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroup"></a>

```python
ipv6_cidr_block_network_border_group: str
```

- *Type:* str

---

##### `ipv6_ipam_pool_id`<sup>Required</sup> <a name="ipv6_ipam_pool_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolId"></a>

```python
ipv6_ipam_pool_id: str
```

- *Type:* str

---

##### `ipv6_netmask_length`<sup>Required</sup> <a name="ipv6_netmask_length" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLength"></a>

```python
ipv6_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultVpc.DefaultVpc.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultVpcConfig <a name="DefaultVpcConfig" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_vpc

defaultVpc.DefaultVpcConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assign_generated_ipv6_cidr_block: typing.Union[bool, IResolvable] = None,
  enable_classiclink: typing.Union[bool, IResolvable] = None,
  enable_classiclink_dns_support: typing.Union[bool, IResolvable] = None,
  enable_dns_hostnames: typing.Union[bool, IResolvable] = None,
  enable_dns_support: typing.Union[bool, IResolvable] = None,
  enable_network_address_usage_metrics: typing.Union[bool, IResolvable] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ipv6_cidr_block: str = None,
  ipv6_cidr_block_network_border_group: str = None,
  ipv6_ipam_pool_id: str = None,
  ipv6_netmask_length: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.assignGeneratedIpv6CidrBlock">assign_generated_ipv6_cidr_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclink">enable_classiclink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink DefaultVpc#enable_classiclink}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclinkDnsSupport">enable_classiclink_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsHostnames">enable_dns_hostnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsSupport">enable_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableNetworkAddressUsageMetrics">enable_network_address_usage_metrics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#force_destroy DefaultVpc#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#id DefaultVpc#id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlockNetworkBorderGroup">ipv6_cidr_block_network_border_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags DefaultVpc#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags_all DefaultVpc#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assign_generated_ipv6_cidr_block`<sup>Optional</sup> <a name="assign_generated_ipv6_cidr_block" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.assignGeneratedIpv6CidrBlock"></a>

```python
assign_generated_ipv6_cidr_block: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}.

---

##### `enable_classiclink`<sup>Optional</sup> <a name="enable_classiclink" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclink"></a>

```python
enable_classiclink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink DefaultVpc#enable_classiclink}.

---

##### `enable_classiclink_dns_support`<sup>Optional</sup> <a name="enable_classiclink_dns_support" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableClassiclinkDnsSupport"></a>

```python
enable_classiclink_dns_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}.

---

##### `enable_dns_hostnames`<sup>Optional</sup> <a name="enable_dns_hostnames" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsHostnames"></a>

```python
enable_dns_hostnames: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}.

---

##### `enable_dns_support`<sup>Optional</sup> <a name="enable_dns_support" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsSupport"></a>

```python
enable_dns_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}.

---

##### `enable_network_address_usage_metrics`<sup>Optional</sup> <a name="enable_network_address_usage_metrics" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.enableNetworkAddressUsageMetrics"></a>

```python
enable_network_address_usage_metrics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#force_destroy DefaultVpc#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#id DefaultVpc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}.

---

##### `ipv6_cidr_block_network_border_group`<sup>Optional</sup> <a name="ipv6_cidr_block_network_border_group" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```python
ipv6_cidr_block_network_border_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}.

---

##### `ipv6_ipam_pool_id`<sup>Optional</sup> <a name="ipv6_ipam_pool_id" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6IpamPoolId"></a>

```python
ipv6_ipam_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}.

---

##### `ipv6_netmask_length`<sup>Optional</sup> <a name="ipv6_netmask_length" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6NetmaskLength"></a>

```python
ipv6_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags DefaultVpc#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultVpc.DefaultVpcConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc#tags_all DefaultVpc#tags_all}.

---



