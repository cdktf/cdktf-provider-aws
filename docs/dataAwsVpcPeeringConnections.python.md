# `dataAwsVpcPeeringConnections` Submodule <a name="`dataAwsVpcPeeringConnections` Submodule" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcPeeringConnections <a name="DataAwsVpcPeeringConnections" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections aws_vpc_peering_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_peering_connections

dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsVpcPeeringConnectionsFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsVpcPeeringConnectionsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter">DataAwsVpcPeeringConnectionsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#id DataAwsVpcPeeringConnections#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#tags DataAwsVpcPeeringConnections#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts">DataAwsVpcPeeringConnectionsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter">DataAwsVpcPeeringConnectionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#filter DataAwsVpcPeeringConnections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#id DataAwsVpcPeeringConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#tags DataAwsVpcPeeringConnections#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts">DataAwsVpcPeeringConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#timeouts DataAwsVpcPeeringConnections#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsVpcPeeringConnectionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter">DataAwsVpcPeeringConnectionsFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#read DataAwsVpcPeeringConnections#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_peering_connections

dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_peering_connections

dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_peering_connections

dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList">DataAwsVpcPeeringConnectionsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference">DataAwsVpcPeeringConnectionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter">DataAwsVpcPeeringConnectionsFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts">DataAwsVpcPeeringConnectionsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.filter"></a>

```python
filter: DataAwsVpcPeeringConnectionsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList">DataAwsVpcPeeringConnectionsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.timeouts"></a>

```python
timeouts: DataAwsVpcPeeringConnectionsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference">DataAwsVpcPeeringConnectionsTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsVpcPeeringConnectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter">DataAwsVpcPeeringConnectionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsVpcPeeringConnectionsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts">DataAwsVpcPeeringConnectionsTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnections.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcPeeringConnectionsConfig <a name="DataAwsVpcPeeringConnectionsConfig" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_peering_connections

dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsVpcPeeringConnectionsFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsVpcPeeringConnectionsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter">DataAwsVpcPeeringConnectionsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#id DataAwsVpcPeeringConnections#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#tags DataAwsVpcPeeringConnections#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts">DataAwsVpcPeeringConnectionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsVpcPeeringConnectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter">DataAwsVpcPeeringConnectionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#filter DataAwsVpcPeeringConnections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#id DataAwsVpcPeeringConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#tags DataAwsVpcPeeringConnections#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsConfig.property.timeouts"></a>

```python
timeouts: DataAwsVpcPeeringConnectionsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts">DataAwsVpcPeeringConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#timeouts DataAwsVpcPeeringConnections#timeouts}

---

### DataAwsVpcPeeringConnectionsFilter <a name="DataAwsVpcPeeringConnectionsFilter" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_peering_connections

dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#name DataAwsVpcPeeringConnections#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#values DataAwsVpcPeeringConnections#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#name DataAwsVpcPeeringConnections#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#values DataAwsVpcPeeringConnections#values}.

---

### DataAwsVpcPeeringConnectionsTimeouts <a name="DataAwsVpcPeeringConnectionsTimeouts" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_peering_connections

dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#read DataAwsVpcPeeringConnections#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections#read DataAwsVpcPeeringConnections#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcPeeringConnectionsFilterList <a name="DataAwsVpcPeeringConnectionsFilterList" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_peering_connections

dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsVpcPeeringConnectionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter">DataAwsVpcPeeringConnectionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsVpcPeeringConnectionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter">DataAwsVpcPeeringConnectionsFilter</a>]]

---


### DataAwsVpcPeeringConnectionsFilterOutputReference <a name="DataAwsVpcPeeringConnectionsFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_peering_connections

dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter">DataAwsVpcPeeringConnectionsFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsVpcPeeringConnectionsFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsFilter">DataAwsVpcPeeringConnectionsFilter</a>, cdktf.IResolvable]

---


### DataAwsVpcPeeringConnectionsTimeoutsOutputReference <a name="DataAwsVpcPeeringConnectionsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_peering_connections

dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts">DataAwsVpcPeeringConnectionsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsVpcPeeringConnectionsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcPeeringConnections.DataAwsVpcPeeringConnectionsTimeouts">DataAwsVpcPeeringConnectionsTimeouts</a>, cdktf.IResolvable]

---



