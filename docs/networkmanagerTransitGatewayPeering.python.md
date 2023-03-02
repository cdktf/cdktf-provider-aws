# `networkmanagerTransitGatewayPeering` Submodule <a name="`networkmanagerTransitGatewayPeering` Submodule" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerTransitGatewayPeering <a name="NetworkmanagerTransitGatewayPeering" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering aws_networkmanager_transit_gateway_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  core_network_id: str,
  transit_gateway_arn: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: NetworkmanagerTransitGatewayPeeringTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.coreNetworkId">core_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#core_network_id NetworkmanagerTransitGatewayPeering#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.transitGatewayArn">transit_gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#transit_gateway_arn NetworkmanagerTransitGatewayPeering#transit_gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#id NetworkmanagerTransitGatewayPeering#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#tags NetworkmanagerTransitGatewayPeering#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#tags_all NetworkmanagerTransitGatewayPeering#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts">NetworkmanagerTransitGatewayPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.coreNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#core_network_id NetworkmanagerTransitGatewayPeering#core_network_id}.

---

##### `transit_gateway_arn`<sup>Required</sup> <a name="transit_gateway_arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.transitGatewayArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#transit_gateway_arn NetworkmanagerTransitGatewayPeering#transit_gateway_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#id NetworkmanagerTransitGatewayPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#tags NetworkmanagerTransitGatewayPeering#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#tags_all NetworkmanagerTransitGatewayPeering#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts">NetworkmanagerTransitGatewayPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#timeouts NetworkmanagerTransitGatewayPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#create NetworkmanagerTransitGatewayPeering#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#delete NetworkmanagerTransitGatewayPeering#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.edgeLocation">edge_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.peeringType">peering_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference">NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayPeeringAttachmentId">transit_gateway_peering_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkIdInput">core_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts">NetworkmanagerTransitGatewayPeeringTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArnInput">transit_gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArn">transit_gateway_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.edgeLocation"></a>

```python
edge_location: str
```

- *Type:* str

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `peering_type`<sup>Required</sup> <a name="peering_type" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.peeringType"></a>

```python
peering_type: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.timeouts"></a>

```python
timeouts: NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference">NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference</a>

---

##### `transit_gateway_peering_attachment_id`<sup>Required</sup> <a name="transit_gateway_peering_attachment_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayPeeringAttachmentId"></a>

```python
transit_gateway_peering_attachment_id: str
```

- *Type:* str

---

##### `core_network_id_input`<sup>Optional</sup> <a name="core_network_id_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkIdInput"></a>

```python
core_network_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NetworkmanagerTransitGatewayPeeringTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts">NetworkmanagerTransitGatewayPeeringTimeouts</a>, cdktf.IResolvable]

---

##### `transit_gateway_arn_input`<sup>Optional</sup> <a name="transit_gateway_arn_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArnInput"></a>

```python
transit_gateway_arn_input: str
```

- *Type:* str

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_arn`<sup>Required</sup> <a name="transit_gateway_arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArn"></a>

```python
transit_gateway_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerTransitGatewayPeeringConfig <a name="NetworkmanagerTransitGatewayPeeringConfig" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  core_network_id: str,
  transit_gateway_arn: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: NetworkmanagerTransitGatewayPeeringTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#core_network_id NetworkmanagerTransitGatewayPeering#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.transitGatewayArn">transit_gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#transit_gateway_arn NetworkmanagerTransitGatewayPeering#transit_gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#id NetworkmanagerTransitGatewayPeering#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#tags NetworkmanagerTransitGatewayPeering#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#tags_all NetworkmanagerTransitGatewayPeering#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts">NetworkmanagerTransitGatewayPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#core_network_id NetworkmanagerTransitGatewayPeering#core_network_id}.

---

##### `transit_gateway_arn`<sup>Required</sup> <a name="transit_gateway_arn" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.transitGatewayArn"></a>

```python
transit_gateway_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#transit_gateway_arn NetworkmanagerTransitGatewayPeering#transit_gateway_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#id NetworkmanagerTransitGatewayPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#tags NetworkmanagerTransitGatewayPeering#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#tags_all NetworkmanagerTransitGatewayPeering#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.timeouts"></a>

```python
timeouts: NetworkmanagerTransitGatewayPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts">NetworkmanagerTransitGatewayPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#timeouts NetworkmanagerTransitGatewayPeering#timeouts}

---

### NetworkmanagerTransitGatewayPeeringTimeouts <a name="NetworkmanagerTransitGatewayPeeringTimeouts" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#create NetworkmanagerTransitGatewayPeering#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#delete NetworkmanagerTransitGatewayPeering#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#create NetworkmanagerTransitGatewayPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#delete NetworkmanagerTransitGatewayPeering#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference <a name="NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts">NetworkmanagerTransitGatewayPeeringTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkmanagerTransitGatewayPeeringTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTimeouts">NetworkmanagerTransitGatewayPeeringTimeouts</a>, cdktf.IResolvable]

---



