# `ec2TransitGatewayPrefixListReference` Submodule <a name="`ec2TransitGatewayPrefixListReference` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPrefixListReference <a name="Ec2TransitGatewayPrefixListReference" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference aws_ec2_transit_gateway_prefix_list_reference}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_prefix_list_reference

ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  prefix_list_id: str,
  transit_gateway_route_table_id: str,
  blackhole: typing.Union[bool, IResolvable] = None,
  id: str = None,
  transit_gateway_attachment_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.prefixListId">prefix_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.transitGatewayRouteTableId">transit_gateway_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.blackhole">blackhole</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#blackhole Ec2TransitGatewayPrefixListReference#blackhole}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#id Ec2TransitGatewayPrefixListReference#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `prefix_list_id`<sup>Required</sup> <a name="prefix_list_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.prefixListId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}.

---

##### `transit_gateway_route_table_id`<sup>Required</sup> <a name="transit_gateway_route_table_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.transitGatewayRouteTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}.

---

##### `blackhole`<sup>Optional</sup> <a name="blackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.blackhole"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#blackhole Ec2TransitGatewayPrefixListReference#blackhole}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#id Ec2TransitGatewayPrefixListReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `transit_gateway_attachment_id`<sup>Optional</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetBlackhole">reset_blackhole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetTransitGatewayAttachmentId">reset_transit_gateway_attachment_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_blackhole` <a name="reset_blackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetBlackhole"></a>

```python
def reset_blackhole() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_transit_gateway_attachment_id` <a name="reset_transit_gateway_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.resetTransitGatewayAttachmentId"></a>

```python
def reset_transit_gateway_attachment_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_prefix_list_reference

ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_prefix_list_reference

ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_prefix_list_reference

ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListOwnerId">prefix_list_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackholeInput">blackhole_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListIdInput">prefix_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentIdInput">transit_gateway_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableIdInput">transit_gateway_route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackhole">blackhole</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListId">prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableId">transit_gateway_route_table_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `prefix_list_owner_id`<sup>Required</sup> <a name="prefix_list_owner_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListOwnerId"></a>

```python
prefix_list_owner_id: str
```

- *Type:* str

---

##### `blackhole_input`<sup>Optional</sup> <a name="blackhole_input" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackholeInput"></a>

```python
blackhole_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `prefix_list_id_input`<sup>Optional</sup> <a name="prefix_list_id_input" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListIdInput"></a>

```python
prefix_list_id_input: str
```

- *Type:* str

---

##### `transit_gateway_attachment_id_input`<sup>Optional</sup> <a name="transit_gateway_attachment_id_input" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentIdInput"></a>

```python
transit_gateway_attachment_id_input: str
```

- *Type:* str

---

##### `transit_gateway_route_table_id_input`<sup>Optional</sup> <a name="transit_gateway_route_table_id_input" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableIdInput"></a>

```python
transit_gateway_route_table_id_input: str
```

- *Type:* str

---

##### `blackhole`<sup>Required</sup> <a name="blackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.blackhole"></a>

```python
blackhole: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prefix_list_id`<sup>Required</sup> <a name="prefix_list_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.prefixListId"></a>

```python
prefix_list_id: str
```

- *Type:* str

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `transit_gateway_route_table_id`<sup>Required</sup> <a name="transit_gateway_route_table_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.transitGatewayRouteTableId"></a>

```python
transit_gateway_route_table_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReference.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPrefixListReferenceConfig <a name="Ec2TransitGatewayPrefixListReferenceConfig" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_prefix_list_reference

ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  prefix_list_id: str,
  transit_gateway_route_table_id: str,
  blackhole: typing.Union[bool, IResolvable] = None,
  id: str = None,
  transit_gateway_attachment_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.prefixListId">prefix_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayRouteTableId">transit_gateway_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.blackhole">blackhole</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#blackhole Ec2TransitGatewayPrefixListReference#blackhole}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#id Ec2TransitGatewayPrefixListReference#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `prefix_list_id`<sup>Required</sup> <a name="prefix_list_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.prefixListId"></a>

```python
prefix_list_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}.

---

##### `transit_gateway_route_table_id`<sup>Required</sup> <a name="transit_gateway_route_table_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayRouteTableId"></a>

```python
transit_gateway_route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}.

---

##### `blackhole`<sup>Optional</sup> <a name="blackhole" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.blackhole"></a>

```python
blackhole: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#blackhole Ec2TransitGatewayPrefixListReference#blackhole}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#id Ec2TransitGatewayPrefixListReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `transit_gateway_attachment_id`<sup>Optional</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayPrefixListReference.Ec2TransitGatewayPrefixListReferenceConfig.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}.

---



