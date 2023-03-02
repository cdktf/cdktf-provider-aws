# `dataAwsEc2LocalGatewayRouteTable` Submodule <a name="`dataAwsEc2LocalGatewayRouteTable` Submodule" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayRouteTable <a name="DataAwsEc2LocalGatewayRouteTable" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table aws_ec2_local_gateway_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_route_table

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayRouteTableFilter]] = None,
  id: str = None,
  local_gateway_id: str = None,
  local_gateway_route_table_id: str = None,
  outpost_arn: str = None,
  state: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2LocalGatewayRouteTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#id DataAwsEc2LocalGatewayRouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.localGatewayId">local_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.localGatewayRouteTableId">local_gateway_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.outpostArn">outpost_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#state DataAwsEc2LocalGatewayRouteTable#state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#tags DataAwsEc2LocalGatewayRouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#filter DataAwsEc2LocalGatewayRouteTable#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#id DataAwsEc2LocalGatewayRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_gateway_id`<sup>Optional</sup> <a name="local_gateway_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.localGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}.

---

##### `local_gateway_route_table_id`<sup>Optional</sup> <a name="local_gateway_route_table_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.localGatewayRouteTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}.

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.outpostArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#state DataAwsEc2LocalGatewayRouteTable#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#tags DataAwsEc2LocalGatewayRouteTable#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#timeouts DataAwsEc2LocalGatewayRouteTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayId">reset_local_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayRouteTableId">reset_local_gateway_route_table_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOutpostArn">reset_outpost_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayRouteTableFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#read DataAwsEc2LocalGatewayRouteTable#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local_gateway_id` <a name="reset_local_gateway_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayId"></a>

```python
def reset_local_gateway_id() -> None
```

##### `reset_local_gateway_route_table_id` <a name="reset_local_gateway_route_table_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetLocalGatewayRouteTableId"></a>

```python
def reset_local_gateway_route_table_id() -> None
```

##### `reset_outpost_arn` <a name="reset_outpost_arn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetOutpostArn"></a>

```python
def reset_outpost_arn() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_route_table

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_route_table

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_route_table

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList">DataAwsEc2LocalGatewayRouteTableFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference">DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayIdInput">local_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableIdInput">local_gateway_route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArnInput">outpost_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableId">local_gateway_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filter"></a>

```python
filter: DataAwsEc2LocalGatewayRouteTableFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList">DataAwsEc2LocalGatewayRouteTableFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeouts"></a>

```python
timeouts: DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference">DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayRouteTableFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_gateway_id_input`<sup>Optional</sup> <a name="local_gateway_id_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayIdInput"></a>

```python
local_gateway_id_input: str
```

- *Type:* str

---

##### `local_gateway_route_table_id_input`<sup>Optional</sup> <a name="local_gateway_route_table_id_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableIdInput"></a>

```python
local_gateway_route_table_id_input: str
```

- *Type:* str

---

##### `outpost_arn_input`<sup>Optional</sup> <a name="outpost_arn_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArnInput"></a>

```python
outpost_arn_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsEc2LocalGatewayRouteTableTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_gateway_id`<sup>Required</sup> <a name="local_gateway_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

---

##### `local_gateway_route_table_id`<sup>Required</sup> <a name="local_gateway_route_table_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.localGatewayRouteTableId"></a>

```python
local_gateway_route_table_id: str
```

- *Type:* str

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayRouteTableConfig <a name="DataAwsEc2LocalGatewayRouteTableConfig" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_route_table

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayRouteTableFilter]] = None,
  id: str = None,
  local_gateway_id: str = None,
  local_gateway_route_table_id: str = None,
  outpost_arn: str = None,
  state: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2LocalGatewayRouteTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#id DataAwsEc2LocalGatewayRouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayRouteTableId">local_gateway_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.outpostArn">outpost_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#state DataAwsEc2LocalGatewayRouteTable#state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#tags DataAwsEc2LocalGatewayRouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayRouteTableFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#filter DataAwsEc2LocalGatewayRouteTable#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#id DataAwsEc2LocalGatewayRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_gateway_id`<sup>Optional</sup> <a name="local_gateway_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}.

---

##### `local_gateway_route_table_id`<sup>Optional</sup> <a name="local_gateway_route_table_id" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.localGatewayRouteTableId"></a>

```python
local_gateway_route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}.

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#state DataAwsEc2LocalGatewayRouteTable#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#tags DataAwsEc2LocalGatewayRouteTable#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2LocalGatewayRouteTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#timeouts DataAwsEc2LocalGatewayRouteTable#timeouts}

---

### DataAwsEc2LocalGatewayRouteTableFilter <a name="DataAwsEc2LocalGatewayRouteTableFilter" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_route_table

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#name DataAwsEc2LocalGatewayRouteTable#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#values DataAwsEc2LocalGatewayRouteTable#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#name DataAwsEc2LocalGatewayRouteTable#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#values DataAwsEc2LocalGatewayRouteTable#values}.

---

### DataAwsEc2LocalGatewayRouteTableTimeouts <a name="DataAwsEc2LocalGatewayRouteTableTimeouts" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_route_table

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#read DataAwsEc2LocalGatewayRouteTable#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table#read DataAwsEc2LocalGatewayRouteTable#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayRouteTableFilterList <a name="DataAwsEc2LocalGatewayRouteTableFilterList" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_route_table

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2LocalGatewayRouteTableFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2LocalGatewayRouteTableFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>]]

---


### DataAwsEc2LocalGatewayRouteTableFilterOutputReference <a name="DataAwsEc2LocalGatewayRouteTableFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_route_table

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2LocalGatewayRouteTableFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableFilter">DataAwsEc2LocalGatewayRouteTableFilter</a>, cdktf.IResolvable]

---


### DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_local_gateway_route_table

dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2LocalGatewayRouteTableTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2LocalGatewayRouteTable.DataAwsEc2LocalGatewayRouteTableTimeouts">DataAwsEc2LocalGatewayRouteTableTimeouts</a>, cdktf.IResolvable]

---



