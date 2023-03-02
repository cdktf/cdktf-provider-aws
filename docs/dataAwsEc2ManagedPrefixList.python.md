# `dataAwsEc2ManagedPrefixList` Submodule <a name="`dataAwsEc2ManagedPrefixList` Submodule" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ManagedPrefixList <a name="DataAwsEc2ManagedPrefixList" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list aws_ec2_managed_prefix_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2ManagedPrefixListFilter]] = None,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2ManagedPrefixListTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#id DataAwsEc2ManagedPrefixList#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#tags DataAwsEc2ManagedPrefixList#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#filter DataAwsEc2ManagedPrefixList#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#id DataAwsEc2ManagedPrefixList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#tags DataAwsEc2ManagedPrefixList#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#timeouts DataAwsEc2ManagedPrefixList#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2ManagedPrefixListFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#read DataAwsEc2ManagedPrefixList#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList">DataAwsEc2ManagedPrefixListEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList">DataAwsEc2ManagedPrefixListFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.maxEntries">max_entries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference">DataAwsEc2ManagedPrefixListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.entries"></a>

```python
entries: DataAwsEc2ManagedPrefixListEntriesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList">DataAwsEc2ManagedPrefixListEntriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.filter"></a>

```python
filter: DataAwsEc2ManagedPrefixListFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList">DataAwsEc2ManagedPrefixListFilterList</a>

---

##### `max_entries`<sup>Required</sup> <a name="max_entries" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.maxEntries"></a>

```python
max_entries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.timeouts"></a>

```python
timeouts: DataAwsEc2ManagedPrefixListTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference">DataAwsEc2ManagedPrefixListTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2ManagedPrefixListFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsEc2ManagedPrefixListTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ManagedPrefixListConfig <a name="DataAwsEc2ManagedPrefixListConfig" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2ManagedPrefixListFilter]] = None,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2ManagedPrefixListTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#id DataAwsEc2ManagedPrefixList#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#tags DataAwsEc2ManagedPrefixList#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2ManagedPrefixListFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#filter DataAwsEc2ManagedPrefixList#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#id DataAwsEc2ManagedPrefixList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#tags DataAwsEc2ManagedPrefixList#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2ManagedPrefixListTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#timeouts DataAwsEc2ManagedPrefixList#timeouts}

---

### DataAwsEc2ManagedPrefixListEntries <a name="DataAwsEc2ManagedPrefixListEntries" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntries.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntries()
```


### DataAwsEc2ManagedPrefixListFilter <a name="DataAwsEc2ManagedPrefixListFilter" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#values DataAwsEc2ManagedPrefixList#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#values DataAwsEc2ManagedPrefixList#values}.

---

### DataAwsEc2ManagedPrefixListTimeouts <a name="DataAwsEc2ManagedPrefixListTimeouts" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#read DataAwsEc2ManagedPrefixList#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list#read DataAwsEc2ManagedPrefixList#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ManagedPrefixListEntriesList <a name="DataAwsEc2ManagedPrefixListEntriesList" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2ManagedPrefixListEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2ManagedPrefixListEntriesOutputReference <a name="DataAwsEc2ManagedPrefixListEntriesOutputReference" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntries">DataAwsEc2ManagedPrefixListEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2ManagedPrefixListEntries
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListEntries">DataAwsEc2ManagedPrefixListEntries</a>

---


### DataAwsEc2ManagedPrefixListFilterList <a name="DataAwsEc2ManagedPrefixListFilterList" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2ManagedPrefixListFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2ManagedPrefixListFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>]]

---


### DataAwsEc2ManagedPrefixListFilterOutputReference <a name="DataAwsEc2ManagedPrefixListFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2ManagedPrefixListFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListFilter">DataAwsEc2ManagedPrefixListFilter</a>, cdktf.IResolvable]

---


### DataAwsEc2ManagedPrefixListTimeoutsOutputReference <a name="DataAwsEc2ManagedPrefixListTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_managed_prefix_list

dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2ManagedPrefixListTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2ManagedPrefixList.DataAwsEc2ManagedPrefixListTimeouts">DataAwsEc2ManagedPrefixListTimeouts</a>, cdktf.IResolvable]

---



