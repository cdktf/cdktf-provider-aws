# `dataAwsEc2LocalGatewayVirtualInterfaceGroup` Submodule <a name="`dataAwsEc2LocalGatewayVirtualInterfaceGroup` Submodule" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroup <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroup" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group aws_ec2_local_gateway_virtual_interface_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_group

dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter]] = None,
  id: str = None,
  local_gateway_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#id DataAwsEc2LocalGatewayVirtualInterfaceGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.localGatewayId">local_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#filter DataAwsEc2LocalGatewayVirtualInterfaceGroup#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#id DataAwsEc2LocalGatewayVirtualInterfaceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_gateway_id`<sup>Optional</sup> <a name="local_gateway_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.localGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#timeouts DataAwsEc2LocalGatewayVirtualInterfaceGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetLocalGatewayId">reset_local_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#read DataAwsEc2LocalGatewayVirtualInterfaceGroup#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local_gateway_id` <a name="reset_local_gateway_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetLocalGatewayId"></a>

```python
def reset_local_gateway_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_group

dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_group

dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_group

dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds">local_gateway_virtual_interface_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput">local_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filter"></a>

```python
filter: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList</a>

---

##### `local_gateway_virtual_interface_ids`<sup>Required</sup> <a name="local_gateway_virtual_interface_ids" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds"></a>

```python
local_gateway_virtual_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeouts"></a>

```python
timeouts: DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_gateway_id_input`<sup>Optional</sup> <a name="local_gateway_id_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput"></a>

```python
local_gateway_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_gateway_id`<sup>Required</sup> <a name="local_gateway_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_group

dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter]] = None,
  id: str = None,
  local_gateway_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#id DataAwsEc2LocalGatewayVirtualInterfaceGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#filter DataAwsEc2LocalGatewayVirtualInterfaceGroup#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#id DataAwsEc2LocalGatewayVirtualInterfaceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_gateway_id`<sup>Optional</sup> <a name="local_gateway_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#timeouts DataAwsEc2LocalGatewayVirtualInterfaceGroup#timeouts}

---

### DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_group

dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#name DataAwsEc2LocalGatewayVirtualInterfaceGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#values DataAwsEc2LocalGatewayVirtualInterfaceGroup#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#name DataAwsEc2LocalGatewayVirtualInterfaceGroup#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#values DataAwsEc2LocalGatewayVirtualInterfaceGroup#values}.

---

### DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_group

dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#read DataAwsEc2LocalGatewayVirtualInterfaceGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group#read DataAwsEc2LocalGatewayVirtualInterfaceGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_group

dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>]]

---


### DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_group

dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter">DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter</a>, cdktf.IResolvable]

---


### DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_virtual_interface_group

dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayVirtualInterfaceGroup.DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts</a>, cdktf.IResolvable]

---



