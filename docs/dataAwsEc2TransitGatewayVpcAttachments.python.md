# `dataAwsEc2TransitGatewayVpcAttachments` Submodule <a name="`dataAwsEc2TransitGatewayVpcAttachments` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayVpcAttachments <a name="DataAwsEc2TransitGatewayVpcAttachments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments aws_ec2_transit_gateway_vpc_attachments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_vpc_attachments

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayVpcAttachmentsFilter]] = None,
  id: str = None,
  timeouts: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#id DataAwsEc2TransitGatewayVpcAttachments#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#filter DataAwsEc2TransitGatewayVpcAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#id DataAwsEc2TransitGatewayVpcAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#timeouts DataAwsEc2TransitGatewayVpcAttachments#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayVpcAttachmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#read DataAwsEc2TransitGatewayVpcAttachments#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_vpc_attachments

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_vpc_attachments

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_vpc_attachments

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList">DataAwsEc2TransitGatewayVpcAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference">DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filter"></a>

```python
filter: DataAwsEc2TransitGatewayVpcAttachmentsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList">DataAwsEc2TransitGatewayVpcAttachmentsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeouts"></a>

```python
timeouts: DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference">DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayVpcAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsEc2TransitGatewayVpcAttachmentsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayVpcAttachmentsConfig <a name="DataAwsEc2TransitGatewayVpcAttachmentsConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_vpc_attachments

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayVpcAttachmentsFilter]] = None,
  id: str = None,
  timeouts: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#id DataAwsEc2TransitGatewayVpcAttachments#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayVpcAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#filter DataAwsEc2TransitGatewayVpcAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#id DataAwsEc2TransitGatewayVpcAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#timeouts DataAwsEc2TransitGatewayVpcAttachments#timeouts}

---

### DataAwsEc2TransitGatewayVpcAttachmentsFilter <a name="DataAwsEc2TransitGatewayVpcAttachmentsFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_vpc_attachments

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#name DataAwsEc2TransitGatewayVpcAttachments#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#values DataAwsEc2TransitGatewayVpcAttachments#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#name DataAwsEc2TransitGatewayVpcAttachments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#values DataAwsEc2TransitGatewayVpcAttachments#values}.

---

### DataAwsEc2TransitGatewayVpcAttachmentsTimeouts <a name="DataAwsEc2TransitGatewayVpcAttachmentsTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_vpc_attachments

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#read DataAwsEc2TransitGatewayVpcAttachments#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#read DataAwsEc2TransitGatewayVpcAttachments#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayVpcAttachmentsFilterList <a name="DataAwsEc2TransitGatewayVpcAttachmentsFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_vpc_attachments

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayVpcAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>]]

---


### DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference <a name="DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_vpc_attachments

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2TransitGatewayVpcAttachmentsFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter">DataAwsEc2TransitGatewayVpcAttachmentsFilter</a>, cdktf.IResolvable]

---


### DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_vpc_attachments

dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2TransitGatewayVpcAttachmentsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a>, cdktf.IResolvable]

---



