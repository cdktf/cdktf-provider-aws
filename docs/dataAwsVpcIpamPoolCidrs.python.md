# `dataAwsVpcIpamPoolCidrs` Submodule <a name="`dataAwsVpcIpamPoolCidrs` Submodule" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpamPoolCidrs <a name="DataAwsVpcIpamPoolCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs aws_vpc_ipam_pool_cidrs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipam_pool_id: str,
  filter: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolCidrsFilter]] = None,
  id: str = None,
  timeouts: DataAwsVpcIpamPoolCidrsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#ipam_pool_id DataAwsVpcIpamPoolCidrs#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#id DataAwsVpcIpamPoolCidrs#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.ipamPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#ipam_pool_id DataAwsVpcIpamPoolCidrs#ipam_pool_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#filter DataAwsVpcIpamPoolCidrs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#id DataAwsVpcIpamPoolCidrs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#timeouts DataAwsVpcIpamPoolCidrs#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolCidrsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#read DataAwsVpcIpamPoolCidrs#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList">DataAwsVpcIpamPoolCidrsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolCidrs">ipam_pool_cidrs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList">DataAwsVpcIpamPoolCidrsIpamPoolCidrsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference">DataAwsVpcIpamPoolCidrsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolIdInput">ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filter"></a>

```python
filter: DataAwsVpcIpamPoolCidrsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList">DataAwsVpcIpamPoolCidrsFilterList</a>

---

##### `ipam_pool_cidrs`<sup>Required</sup> <a name="ipam_pool_cidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolCidrs"></a>

```python
ipam_pool_cidrs: DataAwsVpcIpamPoolCidrsIpamPoolCidrsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList">DataAwsVpcIpamPoolCidrsIpamPoolCidrsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeouts"></a>

```python
timeouts: DataAwsVpcIpamPoolCidrsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference">DataAwsVpcIpamPoolCidrsTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolCidrsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipam_pool_id_input`<sup>Optional</sup> <a name="ipam_pool_id_input" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolIdInput"></a>

```python
ipam_pool_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsVpcIpamPoolCidrsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamPoolCidrsConfig <a name="DataAwsVpcIpamPoolCidrsConfig" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipam_pool_id: str,
  filter: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolCidrsFilter]] = None,
  id: str = None,
  timeouts: DataAwsVpcIpamPoolCidrsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#ipam_pool_id DataAwsVpcIpamPoolCidrs#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#id DataAwsVpcIpamPoolCidrs#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#ipam_pool_id DataAwsVpcIpamPoolCidrs#ipam_pool_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolCidrsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#filter DataAwsVpcIpamPoolCidrs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#id DataAwsVpcIpamPoolCidrs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsConfig.property.timeouts"></a>

```python
timeouts: DataAwsVpcIpamPoolCidrsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#timeouts DataAwsVpcIpamPoolCidrs#timeouts}

---

### DataAwsVpcIpamPoolCidrsFilter <a name="DataAwsVpcIpamPoolCidrsFilter" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#name DataAwsVpcIpamPoolCidrs#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#values DataAwsVpcIpamPoolCidrs#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#name DataAwsVpcIpamPoolCidrs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#values DataAwsVpcIpamPoolCidrs#values}.

---

### DataAwsVpcIpamPoolCidrsIpamPoolCidrs <a name="DataAwsVpcIpamPoolCidrsIpamPoolCidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs()
```


### DataAwsVpcIpamPoolCidrsTimeouts <a name="DataAwsVpcIpamPoolCidrsTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#read DataAwsVpcIpamPoolCidrs#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool_cidrs#read DataAwsVpcIpamPoolCidrs#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamPoolCidrsFilterList <a name="DataAwsVpcIpamPoolCidrsFilterList" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsVpcIpamPoolCidrsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolCidrsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>]]

---


### DataAwsVpcIpamPoolCidrsFilterOutputReference <a name="DataAwsVpcIpamPoolCidrsFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsVpcIpamPoolCidrsFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsFilter">DataAwsVpcIpamPoolCidrsFilter</a>, cdktf.IResolvable]

---


### DataAwsVpcIpamPoolCidrsIpamPoolCidrsList <a name="DataAwsVpcIpamPoolCidrsIpamPoolCidrsList" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference <a name="DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs">DataAwsVpcIpamPoolCidrsIpamPoolCidrs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsVpcIpamPoolCidrsIpamPoolCidrs
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsIpamPoolCidrs">DataAwsVpcIpamPoolCidrsIpamPoolCidrs</a>

---


### DataAwsVpcIpamPoolCidrsTimeoutsOutputReference <a name="DataAwsVpcIpamPoolCidrsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pool_cidrs

dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsVpcIpamPoolCidrsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPoolCidrs.DataAwsVpcIpamPoolCidrsTimeouts">DataAwsVpcIpamPoolCidrsTimeouts</a>, cdktf.IResolvable]

---



