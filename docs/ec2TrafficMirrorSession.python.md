# `ec2TrafficMirrorSession` Submodule <a name="`ec2TrafficMirrorSession` Submodule" id="@cdktf/provider-aws.ec2TrafficMirrorSession"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorSession <a name="Ec2TrafficMirrorSession" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session aws_ec2_traffic_mirror_session}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_session

ec2TrafficMirrorSession.Ec2TrafficMirrorSession(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_interface_id: str,
  session_number: typing.Union[int, float],
  traffic_mirror_filter_id: str,
  traffic_mirror_target_id: str,
  description: str = None,
  id: str = None,
  packet_length: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  virtual_network_id: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.sessionNumber">session_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.trafficMirrorFilterId">traffic_mirror_filter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.trafficMirrorTargetId">traffic_mirror_target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#id Ec2TrafficMirrorSession#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.packetLength">packet_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags_all Ec2TrafficMirrorSession#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.virtualNetworkId">virtual_network_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.networkInterfaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}.

---

##### `session_number`<sup>Required</sup> <a name="session_number" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.sessionNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}.

---

##### `traffic_mirror_filter_id`<sup>Required</sup> <a name="traffic_mirror_filter_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.trafficMirrorFilterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}.

---

##### `traffic_mirror_target_id`<sup>Required</sup> <a name="traffic_mirror_target_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.trafficMirrorTargetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#id Ec2TrafficMirrorSession#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packet_length`<sup>Optional</sup> <a name="packet_length" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.packetLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags_all Ec2TrafficMirrorSession#tags_all}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.virtualNetworkId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetPacketLength">reset_packet_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_packet_length` <a name="reset_packet_length" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetPacketLength"></a>

```python
def reset_packet_length() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_session

ec2TrafficMirrorSession.Ec2TrafficMirrorSession.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_session

ec2TrafficMirrorSession.Ec2TrafficMirrorSession.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_session

ec2TrafficMirrorSession.Ec2TrafficMirrorSession.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLengthInput">packet_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumberInput">session_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterIdInput">traffic_mirror_filter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetIdInput">traffic_mirror_target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLength">packet_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumber">session_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterId">traffic_mirror_filter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetId">traffic_mirror_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkId">virtual_network_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `packet_length_input`<sup>Optional</sup> <a name="packet_length_input" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLengthInput"></a>

```python
packet_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_number_input`<sup>Optional</sup> <a name="session_number_input" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumberInput"></a>

```python
session_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `traffic_mirror_filter_id_input`<sup>Optional</sup> <a name="traffic_mirror_filter_id_input" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterIdInput"></a>

```python
traffic_mirror_filter_id_input: str
```

- *Type:* str

---

##### `traffic_mirror_target_id_input`<sup>Optional</sup> <a name="traffic_mirror_target_id_input" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetIdInput"></a>

```python
traffic_mirror_target_id_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `packet_length`<sup>Required</sup> <a name="packet_length" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLength"></a>

```python
packet_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_number`<sup>Required</sup> <a name="session_number" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumber"></a>

```python
session_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `traffic_mirror_filter_id`<sup>Required</sup> <a name="traffic_mirror_filter_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterId"></a>

```python
traffic_mirror_filter_id: str
```

- *Type:* str

---

##### `traffic_mirror_target_id`<sup>Required</sup> <a name="traffic_mirror_target_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetId"></a>

```python
traffic_mirror_target_id: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkId"></a>

```python
virtual_network_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorSessionConfig <a name="Ec2TrafficMirrorSessionConfig" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_traffic_mirror_session

ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_interface_id: str,
  session_number: typing.Union[int, float],
  traffic_mirror_filter_id: str,
  traffic_mirror_target_id: str,
  description: str = None,
  id: str = None,
  packet_length: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  virtual_network_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.sessionNumber">session_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorFilterId">traffic_mirror_filter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorTargetId">traffic_mirror_target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#id Ec2TrafficMirrorSession#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.packetLength">packet_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags_all Ec2TrafficMirrorSession#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.virtualNetworkId">virtual_network_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}.

---

##### `session_number`<sup>Required</sup> <a name="session_number" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.sessionNumber"></a>

```python
session_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}.

---

##### `traffic_mirror_filter_id`<sup>Required</sup> <a name="traffic_mirror_filter_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorFilterId"></a>

```python
traffic_mirror_filter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}.

---

##### `traffic_mirror_target_id`<sup>Required</sup> <a name="traffic_mirror_target_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorTargetId"></a>

```python
traffic_mirror_target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#id Ec2TrafficMirrorSession#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packet_length`<sup>Optional</sup> <a name="packet_length" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.packetLength"></a>

```python
packet_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags_all Ec2TrafficMirrorSession#tags_all}.

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.virtualNetworkId"></a>

```python
virtual_network_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}.

---



