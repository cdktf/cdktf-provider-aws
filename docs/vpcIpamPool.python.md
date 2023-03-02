# `vpcIpamPool` Submodule <a name="`vpcIpamPool` Submodule" id="@cdktf/provider-aws.vpcIpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPool <a name="VpcIpamPool" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool aws_vpc_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool

vpcIpamPool.VpcIpamPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_family: str,
  ipam_scope_id: str,
  allocation_default_netmask_length: typing.Union[int, float] = None,
  allocation_max_netmask_length: typing.Union[int, float] = None,
  allocation_min_netmask_length: typing.Union[int, float] = None,
  allocation_resource_tags: typing.Mapping[str] = None,
  auto_import: typing.Union[bool, IResolvable] = None,
  aws_service: str = None,
  description: str = None,
  id: str = None,
  locale: str = None,
  public_ip_source: str = None,
  publicly_advertisable: typing.Union[bool, IResolvable] = None,
  source_ipam_pool_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpcIpamPoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.ipamScopeId">ipam_scope_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationDefaultNetmaskLength">allocation_default_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationMaxNetmaskLength">allocation_max_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationMinNetmaskLength">allocation_min_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationResourceTags">allocation_resource_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.autoImport">auto_import</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.awsService">aws_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.publicIpSource">public_ip_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.publiclyAdvertisable">publicly_advertisable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.sourceIpamPoolId">source_ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.addressFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}.

---

##### `ipam_scope_id`<sup>Required</sup> <a name="ipam_scope_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.ipamScopeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}.

---

##### `allocation_default_netmask_length`<sup>Optional</sup> <a name="allocation_default_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationDefaultNetmaskLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}.

---

##### `allocation_max_netmask_length`<sup>Optional</sup> <a name="allocation_max_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationMaxNetmaskLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}.

---

##### `allocation_min_netmask_length`<sup>Optional</sup> <a name="allocation_min_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationMinNetmaskLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}.

---

##### `allocation_resource_tags`<sup>Optional</sup> <a name="allocation_resource_tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.allocationResourceTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}.

---

##### `auto_import`<sup>Optional</sup> <a name="auto_import" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.autoImport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}.

---

##### `aws_service`<sup>Optional</sup> <a name="aws_service" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.awsService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.locale"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}.

---

##### `public_ip_source`<sup>Optional</sup> <a name="public_ip_source" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.publicIpSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}.

---

##### `publicly_advertisable`<sup>Optional</sup> <a name="publicly_advertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.publiclyAdvertisable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}.

---

##### `source_ipam_pool_id`<sup>Optional</sup> <a name="source_ipam_pool_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.sourceIpamPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#timeouts VpcIpamPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength">reset_allocation_default_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength">reset_allocation_max_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength">reset_allocation_min_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags">reset_allocation_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAutoImport">reset_auto_import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAwsService">reset_aws_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetLocale">reset_locale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPublicIpSource">reset_public_ip_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable">reset_publicly_advertisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId">reset_source_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#create VpcIpamPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#delete VpcIpamPool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#update VpcIpamPool#update}.

---

##### `reset_allocation_default_netmask_length` <a name="reset_allocation_default_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength"></a>

```python
def reset_allocation_default_netmask_length() -> None
```

##### `reset_allocation_max_netmask_length` <a name="reset_allocation_max_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength"></a>

```python
def reset_allocation_max_netmask_length() -> None
```

##### `reset_allocation_min_netmask_length` <a name="reset_allocation_min_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength"></a>

```python
def reset_allocation_min_netmask_length() -> None
```

##### `reset_allocation_resource_tags` <a name="reset_allocation_resource_tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags"></a>

```python
def reset_allocation_resource_tags() -> None
```

##### `reset_auto_import` <a name="reset_auto_import" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAutoImport"></a>

```python
def reset_auto_import() -> None
```

##### `reset_aws_service` <a name="reset_aws_service" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAwsService"></a>

```python
def reset_aws_service() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_locale` <a name="reset_locale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetLocale"></a>

```python
def reset_locale() -> None
```

##### `reset_public_ip_source` <a name="reset_public_ip_source" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPublicIpSource"></a>

```python
def reset_public_ip_source() -> None
```

##### `reset_publicly_advertisable` <a name="reset_publicly_advertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable"></a>

```python
def reset_publicly_advertisable() -> None
```

##### `reset_source_ipam_pool_id` <a name="reset_source_ipam_pool_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId"></a>

```python
def reset_source_ipam_pool_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool

vpcIpamPool.VpcIpamPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool

vpcIpamPool.VpcIpamPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool

vpcIpamPool.VpcIpamPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeType">ipam_scope_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.poolDepth">pool_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference">VpcIpamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamilyInput">address_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput">allocation_default_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput">allocation_max_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput">allocation_min_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput">allocation_resource_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImportInput">auto_import_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsServiceInput">aws_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput">ipam_scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSourceInput">public_ip_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput">publicly_advertisable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput">source_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength">allocation_default_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength">allocation_max_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength">allocation_min_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTags">allocation_resource_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImport">auto_import</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsService">aws_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeId">ipam_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSource">public_ip_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable">publicly_advertisable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId">source_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `ipam_scope_type`<sup>Required</sup> <a name="ipam_scope_type" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeType"></a>

```python
ipam_scope_type: str
```

- *Type:* str

---

##### `pool_depth`<sup>Required</sup> <a name="pool_depth" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.poolDepth"></a>

```python
pool_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeouts"></a>

```python
timeouts: VpcIpamPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference">VpcIpamPoolTimeoutsOutputReference</a>

---

##### `address_family_input`<sup>Optional</sup> <a name="address_family_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamilyInput"></a>

```python
address_family_input: str
```

- *Type:* str

---

##### `allocation_default_netmask_length_input`<sup>Optional</sup> <a name="allocation_default_netmask_length_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput"></a>

```python
allocation_default_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_max_netmask_length_input`<sup>Optional</sup> <a name="allocation_max_netmask_length_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput"></a>

```python
allocation_max_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_min_netmask_length_input`<sup>Optional</sup> <a name="allocation_min_netmask_length_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput"></a>

```python
allocation_min_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_resource_tags_input`<sup>Optional</sup> <a name="allocation_resource_tags_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput"></a>

```python
allocation_resource_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auto_import_input`<sup>Optional</sup> <a name="auto_import_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImportInput"></a>

```python
auto_import_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_service_input`<sup>Optional</sup> <a name="aws_service_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsServiceInput"></a>

```python
aws_service_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipam_scope_id_input`<sup>Optional</sup> <a name="ipam_scope_id_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput"></a>

```python
ipam_scope_id_input: str
```

- *Type:* str

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `public_ip_source_input`<sup>Optional</sup> <a name="public_ip_source_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSourceInput"></a>

```python
public_ip_source_input: str
```

- *Type:* str

---

##### `publicly_advertisable_input`<sup>Optional</sup> <a name="publicly_advertisable_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput"></a>

```python
publicly_advertisable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_ipam_pool_id_input`<sup>Optional</sup> <a name="source_ipam_pool_id_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput"></a>

```python
source_ipam_pool_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VpcIpamPoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>, cdktf.IResolvable]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `allocation_default_netmask_length`<sup>Required</sup> <a name="allocation_default_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength"></a>

```python
allocation_default_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_max_netmask_length`<sup>Required</sup> <a name="allocation_max_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength"></a>

```python
allocation_max_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_min_netmask_length`<sup>Required</sup> <a name="allocation_min_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength"></a>

```python
allocation_min_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_resource_tags`<sup>Required</sup> <a name="allocation_resource_tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTags"></a>

```python
allocation_resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auto_import`<sup>Required</sup> <a name="auto_import" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImport"></a>

```python
auto_import: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_service`<sup>Required</sup> <a name="aws_service" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsService"></a>

```python
aws_service: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_scope_id`<sup>Required</sup> <a name="ipam_scope_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeId"></a>

```python
ipam_scope_id: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `public_ip_source`<sup>Required</sup> <a name="public_ip_source" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSource"></a>

```python
public_ip_source: str
```

- *Type:* str

---

##### `publicly_advertisable`<sup>Required</sup> <a name="publicly_advertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable"></a>

```python
publicly_advertisable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_ipam_pool_id`<sup>Required</sup> <a name="source_ipam_pool_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId"></a>

```python
source_ipam_pool_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolConfig <a name="VpcIpamPoolConfig" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool

vpcIpamPool.VpcIpamPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_family: str,
  ipam_scope_id: str,
  allocation_default_netmask_length: typing.Union[int, float] = None,
  allocation_max_netmask_length: typing.Union[int, float] = None,
  allocation_min_netmask_length: typing.Union[int, float] = None,
  allocation_resource_tags: typing.Mapping[str] = None,
  auto_import: typing.Union[bool, IResolvable] = None,
  aws_service: str = None,
  description: str = None,
  id: str = None,
  locale: str = None,
  public_ip_source: str = None,
  publicly_advertisable: typing.Union[bool, IResolvable] = None,
  source_ipam_pool_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpcIpamPoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId">ipam_scope_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength">allocation_default_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength">allocation_max_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength">allocation_min_netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags">allocation_resource_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.autoImport">auto_import</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.awsService">aws_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publicIpSource">public_ip_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable">publicly_advertisable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId">source_ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}.

---

##### `ipam_scope_id`<sup>Required</sup> <a name="ipam_scope_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId"></a>

```python
ipam_scope_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}.

---

##### `allocation_default_netmask_length`<sup>Optional</sup> <a name="allocation_default_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength"></a>

```python
allocation_default_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}.

---

##### `allocation_max_netmask_length`<sup>Optional</sup> <a name="allocation_max_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength"></a>

```python
allocation_max_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}.

---

##### `allocation_min_netmask_length`<sup>Optional</sup> <a name="allocation_min_netmask_length" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength"></a>

```python
allocation_min_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}.

---

##### `allocation_resource_tags`<sup>Optional</sup> <a name="allocation_resource_tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags"></a>

```python
allocation_resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}.

---

##### `auto_import`<sup>Optional</sup> <a name="auto_import" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.autoImport"></a>

```python
auto_import: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}.

---

##### `aws_service`<sup>Optional</sup> <a name="aws_service" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.awsService"></a>

```python
aws_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}.

---

##### `public_ip_source`<sup>Optional</sup> <a name="public_ip_source" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publicIpSource"></a>

```python
public_ip_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}.

---

##### `publicly_advertisable`<sup>Optional</sup> <a name="publicly_advertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable"></a>

```python
publicly_advertisable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}.

---

##### `source_ipam_pool_id`<sup>Optional</sup> <a name="source_ipam_pool_id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId"></a>

```python
source_ipam_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.timeouts"></a>

```python
timeouts: VpcIpamPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#timeouts VpcIpamPool#timeouts}

---

### VpcIpamPoolTimeouts <a name="VpcIpamPoolTimeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool

vpcIpamPool.VpcIpamPoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#create VpcIpamPool#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#delete VpcIpamPool#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#update VpcIpamPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#create VpcIpamPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#delete VpcIpamPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#update VpcIpamPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamPoolTimeoutsOutputReference <a name="VpcIpamPoolTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_pool

vpcIpamPool.VpcIpamPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpcIpamPoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>, cdktf.IResolvable]

---



