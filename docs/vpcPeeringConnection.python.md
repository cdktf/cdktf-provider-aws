# `vpcPeeringConnection` Submodule <a name="`vpcPeeringConnection` Submodule" id="@cdktf/provider-aws.vpcPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnection <a name="VpcPeeringConnection" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection aws_vpc_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection

vpcPeeringConnection.VpcPeeringConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  peer_vpc_id: str,
  vpc_id: str,
  accepter: VpcPeeringConnectionAccepter = None,
  auto_accept: typing.Union[bool, IResolvable] = None,
  id: str = None,
  peer_owner_id: str = None,
  peer_region: str = None,
  requester: VpcPeeringConnectionRequester = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpcPeeringConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.autoAccept">auto_accept</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#id VpcPeeringConnection#id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.peerOwnerId">peer_owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.peerRegion">peer_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | requester block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags VpcPeeringConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.peerVpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}.

---

##### `accepter`<sup>Optional</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.accepter"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#accepter VpcPeeringConnection#accepter}

---

##### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.autoAccept"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#id VpcPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peer_owner_id`<sup>Optional</sup> <a name="peer_owner_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.peerOwnerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}.

---

##### `peer_region`<sup>Optional</sup> <a name="peer_region" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.peerRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}.

---

##### `requester`<sup>Optional</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.requester"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

requester block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#requester VpcPeeringConnection#requester}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags VpcPeeringConnection#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#timeouts VpcPeeringConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putAccepter">put_accepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putRequester">put_requester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAccepter">reset_accepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAutoAccept">reset_auto_accept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerOwnerId">reset_peer_owner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerRegion">reset_peer_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetRequester">reset_requester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_accepter` <a name="put_accepter" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putAccepter"></a>

```python
def put_accepter(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putAccepter.parameter.allowClassicLinkToRemoteVpc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}.

---

###### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putAccepter.parameter.allowRemoteVpcDnsResolution"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.

---

###### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putAccepter.parameter.allowVpcToRemoteClassicLink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}.

---

##### `put_requester` <a name="put_requester" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putRequester"></a>

```python
def put_requester(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putRequester.parameter.allowClassicLinkToRemoteVpc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}.

---

###### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putRequester.parameter.allowRemoteVpcDnsResolution"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.

---

###### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putRequester.parameter.allowVpcToRemoteClassicLink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#create VpcPeeringConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#delete VpcPeeringConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#update VpcPeeringConnection#update}.

---

##### `reset_accepter` <a name="reset_accepter" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAccepter"></a>

```python
def reset_accepter() -> None
```

##### `reset_auto_accept` <a name="reset_auto_accept" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAutoAccept"></a>

```python
def reset_auto_accept() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_peer_owner_id` <a name="reset_peer_owner_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerOwnerId"></a>

```python
def reset_peer_owner_id() -> None
```

##### `reset_peer_region` <a name="reset_peer_region" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerRegion"></a>

```python
def reset_peer_region() -> None
```

##### `reset_requester` <a name="reset_requester" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetRequester"></a>

```python
def reset_requester() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection

vpcPeeringConnection.VpcPeeringConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection

vpcPeeringConnection.VpcPeeringConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection

vpcPeeringConnection.VpcPeeringConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference">VpcPeeringConnectionAccepterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.acceptStatus">accept_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference">VpcPeeringConnectionRequesterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference">VpcPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepterInput">accepter_input</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAcceptInput">auto_accept_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerIdInput">peer_owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegionInput">peer_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcIdInput">peer_vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requesterInput">requester_input</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAccept">auto_accept</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerId">peer_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegion">peer_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accepter`<sup>Required</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepter"></a>

```python
accepter: VpcPeeringConnectionAccepterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference">VpcPeeringConnectionAccepterOutputReference</a>

---

##### `accept_status`<sup>Required</sup> <a name="accept_status" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.acceptStatus"></a>

```python
accept_status: str
```

- *Type:* str

---

##### `requester`<sup>Required</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requester"></a>

```python
requester: VpcPeeringConnectionRequesterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference">VpcPeeringConnectionRequesterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeouts"></a>

```python
timeouts: VpcPeeringConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference">VpcPeeringConnectionTimeoutsOutputReference</a>

---

##### `accepter_input`<sup>Optional</sup> <a name="accepter_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepterInput"></a>

```python
accepter_input: VpcPeeringConnectionAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

---

##### `auto_accept_input`<sup>Optional</sup> <a name="auto_accept_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAcceptInput"></a>

```python
auto_accept_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `peer_owner_id_input`<sup>Optional</sup> <a name="peer_owner_id_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerIdInput"></a>

```python
peer_owner_id_input: str
```

- *Type:* str

---

##### `peer_region_input`<sup>Optional</sup> <a name="peer_region_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegionInput"></a>

```python
peer_region_input: str
```

- *Type:* str

---

##### `peer_vpc_id_input`<sup>Optional</sup> <a name="peer_vpc_id_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcIdInput"></a>

```python
peer_vpc_id_input: str
```

- *Type:* str

---

##### `requester_input`<sup>Optional</sup> <a name="requester_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requesterInput"></a>

```python
requester_input: VpcPeeringConnectionRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VpcPeeringConnectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `auto_accept`<sup>Required</sup> <a name="auto_accept" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAccept"></a>

```python
auto_accept: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `peer_owner_id`<sup>Required</sup> <a name="peer_owner_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerId"></a>

```python
peer_owner_id: str
```

- *Type:* str

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcId"></a>

```python
peer_vpc_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionAccepter <a name="VpcPeeringConnectionAccepter" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection

vpcPeeringConnection.VpcPeeringConnectionAccepter(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}. |

---

##### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}.

---

##### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.

---

##### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionConfig <a name="VpcPeeringConnectionConfig" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection

vpcPeeringConnection.VpcPeeringConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  peer_vpc_id: str,
  vpc_id: str,
  accepter: VpcPeeringConnectionAccepter = None,
  auto_accept: typing.Union[bool, IResolvable] = None,
  id: str = None,
  peer_owner_id: str = None,
  peer_region: str = None,
  requester: VpcPeeringConnectionRequester = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpcPeeringConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.autoAccept">auto_accept</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#id VpcPeeringConnection#id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerOwnerId">peer_owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerRegion">peer_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | requester block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags VpcPeeringConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerVpcId"></a>

```python
peer_vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}.

---

##### `accepter`<sup>Optional</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.accepter"></a>

```python
accepter: VpcPeeringConnectionAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#accepter VpcPeeringConnection#accepter}

---

##### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.autoAccept"></a>

```python
auto_accept: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#id VpcPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peer_owner_id`<sup>Optional</sup> <a name="peer_owner_id" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerOwnerId"></a>

```python
peer_owner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}.

---

##### `peer_region`<sup>Optional</sup> <a name="peer_region" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}.

---

##### `requester`<sup>Optional</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.requester"></a>

```python
requester: VpcPeeringConnectionRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

requester block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#requester VpcPeeringConnection#requester}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags VpcPeeringConnection#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.timeouts"></a>

```python
timeouts: VpcPeeringConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#timeouts VpcPeeringConnection#timeouts}

---

### VpcPeeringConnectionRequester <a name="VpcPeeringConnectionRequester" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection

vpcPeeringConnection.VpcPeeringConnectionRequester(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}. |

---

##### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}.

---

##### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.

---

##### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionTimeouts <a name="VpcPeeringConnectionTimeouts" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection

vpcPeeringConnection.VpcPeeringConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#create VpcPeeringConnection#create}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#delete VpcPeeringConnection#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#update VpcPeeringConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#create VpcPeeringConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#delete VpcPeeringConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection#update VpcPeeringConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionAccepterOutputReference <a name="VpcPeeringConnectionAccepterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection

vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowClassicLinkToRemoteVpc">reset_allow_classic_link_to_remote_vpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowRemoteVpcDnsResolution">reset_allow_remote_vpc_dns_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowVpcToRemoteClassicLink">reset_allow_vpc_to_remote_classic_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_classic_link_to_remote_vpc` <a name="reset_allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```python
def reset_allow_classic_link_to_remote_vpc() -> None
```

##### `reset_allow_remote_vpc_dns_resolution` <a name="reset_allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```python
def reset_allow_remote_vpc_dns_resolution() -> None
```

##### `reset_allow_vpc_to_remote_classic_link` <a name="reset_allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```python
def reset_allow_vpc_to_remote_classic_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput">allow_classic_link_to_remote_vpc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput">allow_remote_vpc_dns_resolution_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput">allow_vpc_to_remote_classic_link_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_classic_link_to_remote_vpc_input`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```python
allow_classic_link_to_remote_vpc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution_input`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```python
allow_remote_vpc_dns_resolution_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link_input`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```python
allow_vpc_to_remote_classic_link_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_classic_link_to_remote_vpc`<sup>Required</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution`<sup>Required</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link`<sup>Required</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.internalValue"></a>

```python
internal_value: VpcPeeringConnectionAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

---


### VpcPeeringConnectionRequesterOutputReference <a name="VpcPeeringConnectionRequesterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection

vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowClassicLinkToRemoteVpc">reset_allow_classic_link_to_remote_vpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowRemoteVpcDnsResolution">reset_allow_remote_vpc_dns_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowVpcToRemoteClassicLink">reset_allow_vpc_to_remote_classic_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_classic_link_to_remote_vpc` <a name="reset_allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```python
def reset_allow_classic_link_to_remote_vpc() -> None
```

##### `reset_allow_remote_vpc_dns_resolution` <a name="reset_allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```python
def reset_allow_remote_vpc_dns_resolution() -> None
```

##### `reset_allow_vpc_to_remote_classic_link` <a name="reset_allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```python
def reset_allow_vpc_to_remote_classic_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput">allow_classic_link_to_remote_vpc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput">allow_remote_vpc_dns_resolution_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput">allow_vpc_to_remote_classic_link_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_classic_link_to_remote_vpc_input`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```python
allow_classic_link_to_remote_vpc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution_input`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```python
allow_remote_vpc_dns_resolution_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link_input`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```python
allow_vpc_to_remote_classic_link_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_classic_link_to_remote_vpc`<sup>Required</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution`<sup>Required</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link`<sup>Required</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.internalValue"></a>

```python
internal_value: VpcPeeringConnectionRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

---


### VpcPeeringConnectionTimeoutsOutputReference <a name="VpcPeeringConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection

vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpcPeeringConnectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>, cdktf.IResolvable]

---



