# `dataAwsEc2TransitGatewayPeeringAttachments` Submodule <a name="`dataAwsEc2TransitGatewayPeeringAttachments` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayPeeringAttachments <a name="DataAwsEc2TransitGatewayPeeringAttachments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments aws_ec2_transit_gateway_peering_attachments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_peering_attachments

dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayPeeringAttachmentsFilter]] = None,
  id: str = None,
  timeouts: DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#id DataAwsEc2TransitGatewayPeeringAttachments#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#filter DataAwsEc2TransitGatewayPeeringAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#id DataAwsEc2TransitGatewayPeeringAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#timeouts DataAwsEc2TransitGatewayPeeringAttachments#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayPeeringAttachmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#read DataAwsEc2TransitGatewayPeeringAttachments#read}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsEc2TransitGatewayPeeringAttachments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_peering_attachments

dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_peering_attachments

dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_peering_attachments

dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_peering_attachments

dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsEc2TransitGatewayPeeringAttachments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsEc2TransitGatewayPeeringAttachments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsEc2TransitGatewayPeeringAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayPeeringAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList">DataAwsEc2TransitGatewayPeeringAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference">DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.filter"></a>

```python
filter: DataAwsEc2TransitGatewayPeeringAttachmentsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList">DataAwsEc2TransitGatewayPeeringAttachmentsFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.timeouts"></a>

```python
timeouts: DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference">DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayPeeringAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayPeeringAttachmentsConfig <a name="DataAwsEc2TransitGatewayPeeringAttachmentsConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_peering_attachments

dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayPeeringAttachmentsFilter]] = None,
  id: str = None,
  timeouts: DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#id DataAwsEc2TransitGatewayPeeringAttachments#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayPeeringAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#filter DataAwsEc2TransitGatewayPeeringAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#id DataAwsEc2TransitGatewayPeeringAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#timeouts DataAwsEc2TransitGatewayPeeringAttachments#timeouts}

---

### DataAwsEc2TransitGatewayPeeringAttachmentsFilter <a name="DataAwsEc2TransitGatewayPeeringAttachmentsFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_peering_attachments

dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#name DataAwsEc2TransitGatewayPeeringAttachments#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#values DataAwsEc2TransitGatewayPeeringAttachments#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#name DataAwsEc2TransitGatewayPeeringAttachments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#values DataAwsEc2TransitGatewayPeeringAttachments#values}.

---

### DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts <a name="DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_peering_attachments

dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#read DataAwsEc2TransitGatewayPeeringAttachments#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/ec2_transit_gateway_peering_attachments#read DataAwsEc2TransitGatewayPeeringAttachments#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayPeeringAttachmentsFilterList <a name="DataAwsEc2TransitGatewayPeeringAttachmentsFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_peering_attachments

dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2TransitGatewayPeeringAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>]]

---


### DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference <a name="DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_peering_attachments

dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEc2TransitGatewayPeeringAttachmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsFilter">DataAwsEc2TransitGatewayPeeringAttachmentsFilter</a>]

---


### DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_transit_gateway_peering_attachments

dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayPeeringAttachments.DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentsTimeouts</a>]

---



