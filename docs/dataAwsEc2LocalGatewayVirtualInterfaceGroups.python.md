# `dataAwsEc2LocalGatewayVirtualInterfaceGroups` Submodule <a name="`dataAwsEc2LocalGatewayVirtualInterfaceGroups` Submodule" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroups <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroups" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups aws_ec2_local_gateway_virtual_interface_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_groups

dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#id DataAwsEc2LocalGatewayVirtualInterfaceGroups#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#tags DataAwsEc2LocalGatewayVirtualInterfaceGroups#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#filter DataAwsEc2LocalGatewayVirtualInterfaceGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#id DataAwsEc2LocalGatewayVirtualInterfaceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#tags DataAwsEc2LocalGatewayVirtualInterfaceGroups#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#timeouts DataAwsEc2LocalGatewayVirtualInterfaceGroups#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#read DataAwsEc2LocalGatewayVirtualInterfaceGroups#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_groups

dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_groups

dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_groups

dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.localGatewayVirtualInterfaceIds">local_gateway_virtual_interface_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.filter"></a>

```python
filter: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_gateway_virtual_interface_ids`<sup>Required</sup> <a name="local_gateway_virtual_interface_ids" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.localGatewayVirtualInterfaceIds"></a>

```python
local_gateway_virtual_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.timeouts"></a>

```python
timeouts: DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_groups

dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#id DataAwsEc2LocalGatewayVirtualInterfaceGroups#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#tags DataAwsEc2LocalGatewayVirtualInterfaceGroups#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#filter DataAwsEc2LocalGatewayVirtualInterfaceGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#id DataAwsEc2LocalGatewayVirtualInterfaceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#tags DataAwsEc2LocalGatewayVirtualInterfaceGroups#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#timeouts DataAwsEc2LocalGatewayVirtualInterfaceGroups#timeouts}

---

### DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_groups

dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#name DataAwsEc2LocalGatewayVirtualInterfaceGroups#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#values DataAwsEc2LocalGatewayVirtualInterfaceGroups#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#name DataAwsEc2LocalGatewayVirtualInterfaceGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#values DataAwsEc2LocalGatewayVirtualInterfaceGroups#values}.

---

### DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_groups

dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#read DataAwsEc2LocalGatewayVirtualInterfaceGroups#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups#read DataAwsEc2LocalGatewayVirtualInterfaceGroups#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_groups

dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter</a>]]

---


### DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_groups

dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter</a>, cdktf.IResolvable]

---


### DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_groups

dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroups.DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts</a>, cdktf.IResolvable]

---



