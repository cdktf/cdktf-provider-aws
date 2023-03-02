# `vpc` Submodule <a name="`vpc` Submodule" id="@cdktf/provider-aws.vpc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Vpc <a name="Vpc" id="@cdktf/provider-aws.vpc.Vpc"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc aws_vpc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpc.Vpc.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc

vpc.Vpc(
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
  cidr_block: str = None,
  enable_classiclink: typing.Union[bool, IResolvable] = None,
  enable_classiclink_dns_support: typing.Union[bool, IResolvable] = None,
  enable_dns_hostnames: typing.Union[bool, IResolvable] = None,
  enable_dns_support: typing.Union[bool, IResolvable] = None,
  enable_network_address_usage_metrics: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_tenancy: str = None,
  ipv4_ipam_pool_id: str = None,
  ipv4_netmask_length: typing.Union[int, float] = None,
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
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.assignGeneratedIpv6CidrBlock">assign_generated_ipv6_cidr_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#cidr_block Vpc#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.enableClassiclink">enable_classiclink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink Vpc#enable_classiclink}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.enableClassiclinkDnsSupport">enable_classiclink_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.enableDnsHostnames">enable_dns_hostnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_hostnames Vpc#enable_dns_hostnames}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.enableDnsSupport">enable_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_support Vpc#enable_dns_support}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.enableNetworkAddressUsageMetrics">enable_network_address_usage_metrics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_network_address_usage_metrics Vpc#enable_network_address_usage_metrics}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#id Vpc#id}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.instanceTenancy">instance_tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#instance_tenancy Vpc#instance_tenancy}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv4NetmaskLength">ipv4_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_netmask_length Vpc#ipv4_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv6CidrBlockNetworkBorderGroup">ipv6_cidr_block_network_border_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block_network_border_group Vpc#ipv6_cidr_block_network_border_group}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_netmask_length Vpc#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags Vpc#tags}. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags_all Vpc#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assign_generated_ipv6_cidr_block`<sup>Optional</sup> <a name="assign_generated_ipv6_cidr_block" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.assignGeneratedIpv6CidrBlock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.cidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#cidr_block Vpc#cidr_block}.

---

##### `enable_classiclink`<sup>Optional</sup> <a name="enable_classiclink" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.enableClassiclink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink Vpc#enable_classiclink}.

---

##### `enable_classiclink_dns_support`<sup>Optional</sup> <a name="enable_classiclink_dns_support" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.enableClassiclinkDnsSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}.

---

##### `enable_dns_hostnames`<sup>Optional</sup> <a name="enable_dns_hostnames" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.enableDnsHostnames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_hostnames Vpc#enable_dns_hostnames}.

---

##### `enable_dns_support`<sup>Optional</sup> <a name="enable_dns_support" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.enableDnsSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_support Vpc#enable_dns_support}.

---

##### `enable_network_address_usage_metrics`<sup>Optional</sup> <a name="enable_network_address_usage_metrics" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.enableNetworkAddressUsageMetrics"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_network_address_usage_metrics Vpc#enable_network_address_usage_metrics}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#id Vpc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_tenancy`<sup>Optional</sup> <a name="instance_tenancy" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.instanceTenancy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#instance_tenancy Vpc#instance_tenancy}.

---

##### `ipv4_ipam_pool_id`<sup>Optional</sup> <a name="ipv4_ipam_pool_id" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv4IpamPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}.

---

##### `ipv4_netmask_length`<sup>Optional</sup> <a name="ipv4_netmask_length" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv4NetmaskLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_netmask_length Vpc#ipv4_netmask_length}.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}.

---

##### `ipv6_cidr_block_network_border_group`<sup>Optional</sup> <a name="ipv6_cidr_block_network_border_group" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv6CidrBlockNetworkBorderGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block_network_border_group Vpc#ipv6_cidr_block_network_border_group}.

---

##### `ipv6_ipam_pool_id`<sup>Optional</sup> <a name="ipv6_ipam_pool_id" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv6IpamPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}.

---

##### `ipv6_netmask_length`<sup>Optional</sup> <a name="ipv6_netmask_length" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.ipv6NetmaskLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_netmask_length Vpc#ipv6_netmask_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags Vpc#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpc.Vpc.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags_all Vpc#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetAssignGeneratedIpv6CidrBlock">reset_assign_generated_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclink">reset_enable_classiclink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclinkDnsSupport">reset_enable_classiclink_dns_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableDnsHostnames">reset_enable_dns_hostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableDnsSupport">reset_enable_dns_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetEnableNetworkAddressUsageMetrics">reset_enable_network_address_usage_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetInstanceTenancy">reset_instance_tenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv4IpamPoolId">reset_ipv4_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv4NetmaskLength">reset_ipv4_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlockNetworkBorderGroup">reset_ipv6_cidr_block_network_border_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6IpamPoolId">reset_ipv6_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetIpv6NetmaskLength">reset_ipv6_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpc.Vpc.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpc.Vpc.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpc.Vpc.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpc.Vpc.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpc.Vpc.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpc.Vpc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpc.Vpc.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpc.Vpc.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpc.Vpc.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpc.Vpc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpc.Vpc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpc.Vpc.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpc.Vpc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpc.Vpc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpc.Vpc.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpc.Vpc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpc.Vpc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpc.Vpc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_assign_generated_ipv6_cidr_block` <a name="reset_assign_generated_ipv6_cidr_block" id="@cdktf/provider-aws.vpc.Vpc.resetAssignGeneratedIpv6CidrBlock"></a>

```python
def reset_assign_generated_ipv6_cidr_block() -> None
```

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktf/provider-aws.vpc.Vpc.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_enable_classiclink` <a name="reset_enable_classiclink" id="@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclink"></a>

```python
def reset_enable_classiclink() -> None
```

##### `reset_enable_classiclink_dns_support` <a name="reset_enable_classiclink_dns_support" id="@cdktf/provider-aws.vpc.Vpc.resetEnableClassiclinkDnsSupport"></a>

```python
def reset_enable_classiclink_dns_support() -> None
```

##### `reset_enable_dns_hostnames` <a name="reset_enable_dns_hostnames" id="@cdktf/provider-aws.vpc.Vpc.resetEnableDnsHostnames"></a>

```python
def reset_enable_dns_hostnames() -> None
```

##### `reset_enable_dns_support` <a name="reset_enable_dns_support" id="@cdktf/provider-aws.vpc.Vpc.resetEnableDnsSupport"></a>

```python
def reset_enable_dns_support() -> None
```

##### `reset_enable_network_address_usage_metrics` <a name="reset_enable_network_address_usage_metrics" id="@cdktf/provider-aws.vpc.Vpc.resetEnableNetworkAddressUsageMetrics"></a>

```python
def reset_enable_network_address_usage_metrics() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpc.Vpc.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_tenancy` <a name="reset_instance_tenancy" id="@cdktf/provider-aws.vpc.Vpc.resetInstanceTenancy"></a>

```python
def reset_instance_tenancy() -> None
```

##### `reset_ipv4_ipam_pool_id` <a name="reset_ipv4_ipam_pool_id" id="@cdktf/provider-aws.vpc.Vpc.resetIpv4IpamPoolId"></a>

```python
def reset_ipv4_ipam_pool_id() -> None
```

##### `reset_ipv4_netmask_length` <a name="reset_ipv4_netmask_length" id="@cdktf/provider-aws.vpc.Vpc.resetIpv4NetmaskLength"></a>

```python
def reset_ipv4_netmask_length() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_ipv6_cidr_block_network_border_group` <a name="reset_ipv6_cidr_block_network_border_group" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6CidrBlockNetworkBorderGroup"></a>

```python
def reset_ipv6_cidr_block_network_border_group() -> None
```

##### `reset_ipv6_ipam_pool_id` <a name="reset_ipv6_ipam_pool_id" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6IpamPoolId"></a>

```python
def reset_ipv6_ipam_pool_id() -> None
```

##### `reset_ipv6_netmask_length` <a name="reset_ipv6_netmask_length" id="@cdktf/provider-aws.vpc.Vpc.resetIpv6NetmaskLength"></a>

```python
def reset_ipv6_netmask_length() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpc.Vpc.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.vpc.Vpc.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpc.Vpc.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc

vpc.Vpc.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpc.Vpc.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpc.Vpc.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc

vpc.Vpc.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpc.Vpc.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpc.Vpc.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc

vpc.Vpc.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpc.Vpc.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultNetworkAclId">default_network_acl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultRouteTableId">default_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.defaultSecurityGroupId">default_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.dhcpOptionsId">dhcp_options_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6AssociationId">ipv6_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.mainRouteTableId">main_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlockInput">assign_generated_ipv6_cidr_block_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupportInput">enable_classiclink_dns_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkInput">enable_classiclink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnamesInput">enable_dns_hostnames_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupportInput">enable_dns_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetricsInput">enable_network_address_usage_metrics_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.instanceTenancyInput">instance_tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolIdInput">ipv4_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLengthInput">ipv4_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroupInput">ipv6_cidr_block_network_border_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolIdInput">ipv6_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLengthInput">ipv6_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlock">assign_generated_ipv6_cidr_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclink">enable_classiclink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupport">enable_classiclink_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnames">enable_dns_hostnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupport">enable_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetrics">enable_network_address_usage_metrics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.instanceTenancy">instance_tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLength">ipv4_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroup">ipv6_cidr_block_network_border_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpc.Vpc.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpc.Vpc.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpc.Vpc.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpc.Vpc.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpc.Vpc.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpc.Vpc.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpc.Vpc.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpc.Vpc.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpc.Vpc.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpc.Vpc.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpc.Vpc.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpc.Vpc.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpc.Vpc.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpc.Vpc.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpc.Vpc.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_network_acl_id`<sup>Required</sup> <a name="default_network_acl_id" id="@cdktf/provider-aws.vpc.Vpc.property.defaultNetworkAclId"></a>

```python
default_network_acl_id: str
```

- *Type:* str

---

##### `default_route_table_id`<sup>Required</sup> <a name="default_route_table_id" id="@cdktf/provider-aws.vpc.Vpc.property.defaultRouteTableId"></a>

```python
default_route_table_id: str
```

- *Type:* str

---

##### `default_security_group_id`<sup>Required</sup> <a name="default_security_group_id" id="@cdktf/provider-aws.vpc.Vpc.property.defaultSecurityGroupId"></a>

```python
default_security_group_id: str
```

- *Type:* str

---

##### `dhcp_options_id`<sup>Required</sup> <a name="dhcp_options_id" id="@cdktf/provider-aws.vpc.Vpc.property.dhcpOptionsId"></a>

```python
dhcp_options_id: str
```

- *Type:* str

---

##### `ipv6_association_id`<sup>Required</sup> <a name="ipv6_association_id" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6AssociationId"></a>

```python
ipv6_association_id: str
```

- *Type:* str

---

##### `main_route_table_id`<sup>Required</sup> <a name="main_route_table_id" id="@cdktf/provider-aws.vpc.Vpc.property.mainRouteTableId"></a>

```python
main_route_table_id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.vpc.Vpc.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `assign_generated_ipv6_cidr_block_input`<sup>Optional</sup> <a name="assign_generated_ipv6_cidr_block_input" id="@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlockInput"></a>

```python
assign_generated_ipv6_cidr_block_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-aws.vpc.Vpc.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `enable_classiclink_dns_support_input`<sup>Optional</sup> <a name="enable_classiclink_dns_support_input" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupportInput"></a>

```python
enable_classiclink_dns_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_classiclink_input`<sup>Optional</sup> <a name="enable_classiclink_input" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkInput"></a>

```python
enable_classiclink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_dns_hostnames_input`<sup>Optional</sup> <a name="enable_dns_hostnames_input" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnamesInput"></a>

```python
enable_dns_hostnames_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_dns_support_input`<sup>Optional</sup> <a name="enable_dns_support_input" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupportInput"></a>

```python
enable_dns_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_network_address_usage_metrics_input`<sup>Optional</sup> <a name="enable_network_address_usage_metrics_input" id="@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetricsInput"></a>

```python
enable_network_address_usage_metrics_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpc.Vpc.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_tenancy_input`<sup>Optional</sup> <a name="instance_tenancy_input" id="@cdktf/provider-aws.vpc.Vpc.property.instanceTenancyInput"></a>

```python
instance_tenancy_input: str
```

- *Type:* str

---

##### `ipv4_ipam_pool_id_input`<sup>Optional</sup> <a name="ipv4_ipam_pool_id_input" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolIdInput"></a>

```python
ipv4_ipam_pool_id_input: str
```

- *Type:* str

---

##### `ipv4_netmask_length_input`<sup>Optional</sup> <a name="ipv4_netmask_length_input" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLengthInput"></a>

```python
ipv4_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `ipv6_cidr_block_network_border_group_input`<sup>Optional</sup> <a name="ipv6_cidr_block_network_border_group_input" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```python
ipv6_cidr_block_network_border_group_input: str
```

- *Type:* str

---

##### `ipv6_ipam_pool_id_input`<sup>Optional</sup> <a name="ipv6_ipam_pool_id_input" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolIdInput"></a>

```python
ipv6_ipam_pool_id_input: str
```

- *Type:* str

---

##### `ipv6_netmask_length_input`<sup>Optional</sup> <a name="ipv6_netmask_length_input" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLengthInput"></a>

```python
ipv6_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.vpc.Vpc.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpc.Vpc.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `assign_generated_ipv6_cidr_block`<sup>Required</sup> <a name="assign_generated_ipv6_cidr_block" id="@cdktf/provider-aws.vpc.Vpc.property.assignGeneratedIpv6CidrBlock"></a>

```python
assign_generated_ipv6_cidr_block: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.vpc.Vpc.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `enable_classiclink`<sup>Required</sup> <a name="enable_classiclink" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclink"></a>

```python
enable_classiclink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_classiclink_dns_support`<sup>Required</sup> <a name="enable_classiclink_dns_support" id="@cdktf/provider-aws.vpc.Vpc.property.enableClassiclinkDnsSupport"></a>

```python
enable_classiclink_dns_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_dns_hostnames`<sup>Required</sup> <a name="enable_dns_hostnames" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsHostnames"></a>

```python
enable_dns_hostnames: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_dns_support`<sup>Required</sup> <a name="enable_dns_support" id="@cdktf/provider-aws.vpc.Vpc.property.enableDnsSupport"></a>

```python
enable_dns_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_network_address_usage_metrics`<sup>Required</sup> <a name="enable_network_address_usage_metrics" id="@cdktf/provider-aws.vpc.Vpc.property.enableNetworkAddressUsageMetrics"></a>

```python
enable_network_address_usage_metrics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpc.Vpc.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_tenancy`<sup>Required</sup> <a name="instance_tenancy" id="@cdktf/provider-aws.vpc.Vpc.property.instanceTenancy"></a>

```python
instance_tenancy: str
```

- *Type:* str

---

##### `ipv4_ipam_pool_id`<sup>Required</sup> <a name="ipv4_ipam_pool_id" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4IpamPoolId"></a>

```python
ipv4_ipam_pool_id: str
```

- *Type:* str

---

##### `ipv4_netmask_length`<sup>Required</sup> <a name="ipv4_netmask_length" id="@cdktf/provider-aws.vpc.Vpc.property.ipv4NetmaskLength"></a>

```python
ipv4_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `ipv6_cidr_block_network_border_group`<sup>Required</sup> <a name="ipv6_cidr_block_network_border_group" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6CidrBlockNetworkBorderGroup"></a>

```python
ipv6_cidr_block_network_border_group: str
```

- *Type:* str

---

##### `ipv6_ipam_pool_id`<sup>Required</sup> <a name="ipv6_ipam_pool_id" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6IpamPoolId"></a>

```python
ipv6_ipam_pool_id: str
```

- *Type:* str

---

##### `ipv6_netmask_length`<sup>Required</sup> <a name="ipv6_netmask_length" id="@cdktf/provider-aws.vpc.Vpc.property.ipv6NetmaskLength"></a>

```python
ipv6_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpc.Vpc.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpc.Vpc.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpc.Vpc.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpc.Vpc.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcConfig <a name="VpcConfig" id="@cdktf/provider-aws.vpc.VpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpc.VpcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc

vpc.VpcConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assign_generated_ipv6_cidr_block: typing.Union[bool, IResolvable] = None,
  cidr_block: str = None,
  enable_classiclink: typing.Union[bool, IResolvable] = None,
  enable_classiclink_dns_support: typing.Union[bool, IResolvable] = None,
  enable_dns_hostnames: typing.Union[bool, IResolvable] = None,
  enable_dns_support: typing.Union[bool, IResolvable] = None,
  enable_network_address_usage_metrics: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_tenancy: str = None,
  ipv4_ipam_pool_id: str = None,
  ipv4_netmask_length: typing.Union[int, float] = None,
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
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.assignGeneratedIpv6CidrBlock">assign_generated_ipv6_cidr_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#cidr_block Vpc#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclink">enable_classiclink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink Vpc#enable_classiclink}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclinkDnsSupport">enable_classiclink_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsHostnames">enable_dns_hostnames</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_hostnames Vpc#enable_dns_hostnames}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsSupport">enable_dns_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_support Vpc#enable_dns_support}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.enableNetworkAddressUsageMetrics">enable_network_address_usage_metrics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_network_address_usage_metrics Vpc#enable_network_address_usage_metrics}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#id Vpc#id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.instanceTenancy">instance_tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#instance_tenancy Vpc#instance_tenancy}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv4NetmaskLength">ipv4_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_netmask_length Vpc#ipv4_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlockNetworkBorderGroup">ipv6_cidr_block_network_border_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block_network_border_group Vpc#ipv6_cidr_block_network_border_group}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_netmask_length Vpc#ipv6_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags Vpc#tags}. |
| <code><a href="#@cdktf/provider-aws.vpc.VpcConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags_all Vpc#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpc.VpcConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpc.VpcConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpc.VpcConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpc.VpcConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpc.VpcConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpc.VpcConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpc.VpcConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assign_generated_ipv6_cidr_block`<sup>Optional</sup> <a name="assign_generated_ipv6_cidr_block" id="@cdktf/provider-aws.vpc.VpcConfig.property.assignGeneratedIpv6CidrBlock"></a>

```python
assign_generated_ipv6_cidr_block: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.vpc.VpcConfig.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#cidr_block Vpc#cidr_block}.

---

##### `enable_classiclink`<sup>Optional</sup> <a name="enable_classiclink" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclink"></a>

```python
enable_classiclink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink Vpc#enable_classiclink}.

---

##### `enable_classiclink_dns_support`<sup>Optional</sup> <a name="enable_classiclink_dns_support" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableClassiclinkDnsSupport"></a>

```python
enable_classiclink_dns_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}.

---

##### `enable_dns_hostnames`<sup>Optional</sup> <a name="enable_dns_hostnames" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsHostnames"></a>

```python
enable_dns_hostnames: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_hostnames Vpc#enable_dns_hostnames}.

---

##### `enable_dns_support`<sup>Optional</sup> <a name="enable_dns_support" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableDnsSupport"></a>

```python
enable_dns_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_dns_support Vpc#enable_dns_support}.

---

##### `enable_network_address_usage_metrics`<sup>Optional</sup> <a name="enable_network_address_usage_metrics" id="@cdktf/provider-aws.vpc.VpcConfig.property.enableNetworkAddressUsageMetrics"></a>

```python
enable_network_address_usage_metrics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#enable_network_address_usage_metrics Vpc#enable_network_address_usage_metrics}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpc.VpcConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#id Vpc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_tenancy`<sup>Optional</sup> <a name="instance_tenancy" id="@cdktf/provider-aws.vpc.VpcConfig.property.instanceTenancy"></a>

```python
instance_tenancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#instance_tenancy Vpc#instance_tenancy}.

---

##### `ipv4_ipam_pool_id`<sup>Optional</sup> <a name="ipv4_ipam_pool_id" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv4IpamPoolId"></a>

```python
ipv4_ipam_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_ipam_pool_id Vpc#ipv4_ipam_pool_id}.

---

##### `ipv4_netmask_length`<sup>Optional</sup> <a name="ipv4_netmask_length" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv4NetmaskLength"></a>

```python
ipv4_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv4_netmask_length Vpc#ipv4_netmask_length}.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block Vpc#ipv6_cidr_block}.

---

##### `ipv6_cidr_block_network_border_group`<sup>Optional</sup> <a name="ipv6_cidr_block_network_border_group" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```python
ipv6_cidr_block_network_border_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_cidr_block_network_border_group Vpc#ipv6_cidr_block_network_border_group}.

---

##### `ipv6_ipam_pool_id`<sup>Optional</sup> <a name="ipv6_ipam_pool_id" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6IpamPoolId"></a>

```python
ipv6_ipam_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_ipam_pool_id Vpc#ipv6_ipam_pool_id}.

---

##### `ipv6_netmask_length`<sup>Optional</sup> <a name="ipv6_netmask_length" id="@cdktf/provider-aws.vpc.VpcConfig.property.ipv6NetmaskLength"></a>

```python
ipv6_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#ipv6_netmask_length Vpc#ipv6_netmask_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpc.VpcConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags Vpc#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpc.VpcConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc#tags_all Vpc#tags_all}.

---



