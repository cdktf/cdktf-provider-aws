# `ec2TransitGatewayConnect` Submodule <a name="`ec2TransitGatewayConnect` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayConnect <a name="Ec2TransitGatewayConnect" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect aws_ec2_transit_gateway_connect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect

ec2TransitGatewayConnect.Ec2TransitGatewayConnect(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  transit_gateway_id: str,
  transport_attachment_id: str,
  id: str = None,
  protocol: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Ec2TransitGatewayConnectTimeouts = None,
  transit_gateway_default_route_table_association: typing.Union[bool, IResolvable] = None,
  transit_gateway_default_route_table_propagation: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_id Ec2TransitGatewayConnect#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transportAttachmentId">transport_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transport_attachment_id Ec2TransitGatewayConnect#transport_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#id Ec2TransitGatewayConnect#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#protocol Ec2TransitGatewayConnect#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#tags Ec2TransitGatewayConnect#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#tags_all Ec2TransitGatewayConnect#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayDefaultRouteTableAssociation">transit_gateway_default_route_table_association</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_default_route_table_association Ec2TransitGatewayConnect#transit_gateway_default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayDefaultRouteTablePropagation">transit_gateway_default_route_table_propagation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_default_route_table_propagation Ec2TransitGatewayConnect#transit_gateway_default_route_table_propagation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_id Ec2TransitGatewayConnect#transit_gateway_id}.

---

##### `transport_attachment_id`<sup>Required</sup> <a name="transport_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transportAttachmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transport_attachment_id Ec2TransitGatewayConnect#transport_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#id Ec2TransitGatewayConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#protocol Ec2TransitGatewayConnect#protocol}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#tags Ec2TransitGatewayConnect#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#tags_all Ec2TransitGatewayConnect#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#timeouts Ec2TransitGatewayConnect#timeouts}

---

##### `transit_gateway_default_route_table_association`<sup>Optional</sup> <a name="transit_gateway_default_route_table_association" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayDefaultRouteTableAssociation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_default_route_table_association Ec2TransitGatewayConnect#transit_gateway_default_route_table_association}.

---

##### `transit_gateway_default_route_table_propagation`<sup>Optional</sup> <a name="transit_gateway_default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.Initializer.parameter.transitGatewayDefaultRouteTablePropagation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_default_route_table_propagation Ec2TransitGatewayConnect#transit_gateway_default_route_table_propagation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTransitGatewayDefaultRouteTableAssociation">reset_transit_gateway_default_route_table_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTransitGatewayDefaultRouteTablePropagation">reset_transit_gateway_default_route_table_propagation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#create Ec2TransitGatewayConnect#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#delete Ec2TransitGatewayConnect#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#update Ec2TransitGatewayConnect#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transit_gateway_default_route_table_association` <a name="reset_transit_gateway_default_route_table_association" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTransitGatewayDefaultRouteTableAssociation"></a>

```python
def reset_transit_gateway_default_route_table_association() -> None
```

##### `reset_transit_gateway_default_route_table_propagation` <a name="reset_transit_gateway_default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.resetTransitGatewayDefaultRouteTablePropagation"></a>

```python
def reset_transit_gateway_default_route_table_propagation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect

ec2TransitGatewayConnect.Ec2TransitGatewayConnect.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect

ec2TransitGatewayConnect.Ec2TransitGatewayConnect.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect

ec2TransitGatewayConnect.Ec2TransitGatewayConnect.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference">Ec2TransitGatewayConnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTableAssociationInput">transit_gateway_default_route_table_association_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTablePropagationInput">transit_gateway_default_route_table_propagation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transportAttachmentIdInput">transport_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTableAssociation">transit_gateway_default_route_table_association</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTablePropagation">transit_gateway_default_route_table_propagation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transportAttachmentId">transport_attachment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.timeouts"></a>

```python
timeouts: Ec2TransitGatewayConnectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference">Ec2TransitGatewayConnectTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Ec2TransitGatewayConnectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a>, cdktf.IResolvable]

---

##### `transit_gateway_default_route_table_association_input`<sup>Optional</sup> <a name="transit_gateway_default_route_table_association_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTableAssociationInput"></a>

```python
transit_gateway_default_route_table_association_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transit_gateway_default_route_table_propagation_input`<sup>Optional</sup> <a name="transit_gateway_default_route_table_propagation_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTablePropagationInput"></a>

```python
transit_gateway_default_route_table_propagation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `transport_attachment_id_input`<sup>Optional</sup> <a name="transport_attachment_id_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transportAttachmentIdInput"></a>

```python
transport_attachment_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_default_route_table_association`<sup>Required</sup> <a name="transit_gateway_default_route_table_association" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTableAssociation"></a>

```python
transit_gateway_default_route_table_association: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transit_gateway_default_route_table_propagation`<sup>Required</sup> <a name="transit_gateway_default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayDefaultRouteTablePropagation"></a>

```python
transit_gateway_default_route_table_propagation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `transport_attachment_id`<sup>Required</sup> <a name="transport_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.transportAttachmentId"></a>

```python
transport_attachment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnect.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayConnectConfig <a name="Ec2TransitGatewayConnectConfig" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect

ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  transit_gateway_id: str,
  transport_attachment_id: str,
  id: str = None,
  protocol: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Ec2TransitGatewayConnectTimeouts = None,
  transit_gateway_default_route_table_association: typing.Union[bool, IResolvable] = None,
  transit_gateway_default_route_table_propagation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_id Ec2TransitGatewayConnect#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transportAttachmentId">transport_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transport_attachment_id Ec2TransitGatewayConnect#transport_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#id Ec2TransitGatewayConnect#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#protocol Ec2TransitGatewayConnect#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#tags Ec2TransitGatewayConnect#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#tags_all Ec2TransitGatewayConnect#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayDefaultRouteTableAssociation">transit_gateway_default_route_table_association</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_default_route_table_association Ec2TransitGatewayConnect#transit_gateway_default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayDefaultRouteTablePropagation">transit_gateway_default_route_table_propagation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_default_route_table_propagation Ec2TransitGatewayConnect#transit_gateway_default_route_table_propagation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_id Ec2TransitGatewayConnect#transit_gateway_id}.

---

##### `transport_attachment_id`<sup>Required</sup> <a name="transport_attachment_id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transportAttachmentId"></a>

```python
transport_attachment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transport_attachment_id Ec2TransitGatewayConnect#transport_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#id Ec2TransitGatewayConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#protocol Ec2TransitGatewayConnect#protocol}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#tags Ec2TransitGatewayConnect#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#tags_all Ec2TransitGatewayConnect#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.timeouts"></a>

```python
timeouts: Ec2TransitGatewayConnectTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#timeouts Ec2TransitGatewayConnect#timeouts}

---

##### `transit_gateway_default_route_table_association`<sup>Optional</sup> <a name="transit_gateway_default_route_table_association" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayDefaultRouteTableAssociation"></a>

```python
transit_gateway_default_route_table_association: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_default_route_table_association Ec2TransitGatewayConnect#transit_gateway_default_route_table_association}.

---

##### `transit_gateway_default_route_table_propagation`<sup>Optional</sup> <a name="transit_gateway_default_route_table_propagation" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectConfig.property.transitGatewayDefaultRouteTablePropagation"></a>

```python
transit_gateway_default_route_table_propagation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_default_route_table_propagation Ec2TransitGatewayConnect#transit_gateway_default_route_table_propagation}.

---

### Ec2TransitGatewayConnectTimeouts <a name="Ec2TransitGatewayConnectTimeouts" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect

ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#create Ec2TransitGatewayConnect#create}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#delete Ec2TransitGatewayConnect#delete}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#update Ec2TransitGatewayConnect#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#create Ec2TransitGatewayConnect#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#delete Ec2TransitGatewayConnect#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#update Ec2TransitGatewayConnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayConnectTimeoutsOutputReference <a name="Ec2TransitGatewayConnectTimeoutsOutputReference" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_transit_gateway_connect

ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Ec2TransitGatewayConnectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ec2TransitGatewayConnect.Ec2TransitGatewayConnectTimeouts">Ec2TransitGatewayConnectTimeouts</a>, cdktf.IResolvable]

---



