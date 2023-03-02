# `dataAwsEc2TransitGatewayConnect` Submodule <a name="`dataAwsEc2TransitGatewayConnect` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayConnect <a name="DataAwsEc2TransitGatewayConnect" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect aws_ec2_transit_gateway_connect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_connect

dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayConnectFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2TransitGatewayConnectTimeouts = None,
  transit_gateway_connect_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#id DataAwsEc2TransitGatewayConnect#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.transitGatewayConnectId">transit_gateway_connect_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#filter DataAwsEc2TransitGatewayConnect#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#id DataAwsEc2TransitGatewayConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#timeouts DataAwsEc2TransitGatewayConnect#timeouts}

---

##### `transit_gateway_connect_id`<sup>Optional</sup> <a name="transit_gateway_connect_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.transitGatewayConnectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTransitGatewayConnectId">reset_transit_gateway_connect_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayConnectFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#read DataAwsEc2TransitGatewayConnect#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transit_gateway_connect_id` <a name="reset_transit_gateway_connect_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTransitGatewayConnectId"></a>

```python
def reset_transit_gateway_connect_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_connect

dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_connect

dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_connect

dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList">DataAwsEc2TransitGatewayConnectFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference">DataAwsEc2TransitGatewayConnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transportAttachmentId">transport_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectIdInput">transit_gateway_connect_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectId">transit_gateway_connect_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filter"></a>

```python
filter: DataAwsEc2TransitGatewayConnectFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList">DataAwsEc2TransitGatewayConnectFilterList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeouts"></a>

```python
timeouts: DataAwsEc2TransitGatewayConnectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference">DataAwsEc2TransitGatewayConnectTimeoutsOutputReference</a>

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `transport_attachment_id`<sup>Required</sup> <a name="transport_attachment_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transportAttachmentId"></a>

```python
transport_attachment_id: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayConnectFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsEc2TransitGatewayConnectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>, cdktf.IResolvable]

---

##### `transit_gateway_connect_id_input`<sup>Optional</sup> <a name="transit_gateway_connect_id_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectIdInput"></a>

```python
transit_gateway_connect_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_connect_id`<sup>Required</sup> <a name="transit_gateway_connect_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectId"></a>

```python
transit_gateway_connect_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayConnectConfig <a name="DataAwsEc2TransitGatewayConnectConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_connect

dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayConnectFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsEc2TransitGatewayConnectTimeouts = None,
  transit_gateway_connect_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#id DataAwsEc2TransitGatewayConnect#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.transitGatewayConnectId">transit_gateway_connect_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayConnectFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#filter DataAwsEc2TransitGatewayConnect#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#id DataAwsEc2TransitGatewayConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2TransitGatewayConnectTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#timeouts DataAwsEc2TransitGatewayConnect#timeouts}

---

##### `transit_gateway_connect_id`<sup>Optional</sup> <a name="transit_gateway_connect_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.transitGatewayConnectId"></a>

```python
transit_gateway_connect_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}.

---

### DataAwsEc2TransitGatewayConnectFilter <a name="DataAwsEc2TransitGatewayConnectFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_connect

dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#name DataAwsEc2TransitGatewayConnect#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#values DataAwsEc2TransitGatewayConnect#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#name DataAwsEc2TransitGatewayConnect#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#values DataAwsEc2TransitGatewayConnect#values}.

---

### DataAwsEc2TransitGatewayConnectTimeouts <a name="DataAwsEc2TransitGatewayConnectTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_connect

dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#read DataAwsEc2TransitGatewayConnect#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect#read DataAwsEc2TransitGatewayConnect#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayConnectFilterList <a name="DataAwsEc2TransitGatewayConnectFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_connect

dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2TransitGatewayConnectFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayConnectFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>]]

---


### DataAwsEc2TransitGatewayConnectFilterOutputReference <a name="DataAwsEc2TransitGatewayConnectFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_connect

dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2TransitGatewayConnectFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>, cdktf.IResolvable]

---


### DataAwsEc2TransitGatewayConnectTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayConnectTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_connect

dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2TransitGatewayConnectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>, cdktf.IResolvable]

---



