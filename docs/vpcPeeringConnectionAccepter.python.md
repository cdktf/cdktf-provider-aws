# `vpcPeeringConnectionAccepter` Submodule <a name="`vpcPeeringConnectionAccepter` Submodule" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnectionAccepterA <a name="VpcPeeringConnectionAccepterA" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_accepter

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_peering_connection_id: str,
  accepter: VpcPeeringConnectionAccepterAccepter = None,
  auto_accept: typing.Union[bool, IResolvable] = None,
  id: str = None,
  requester: VpcPeeringConnectionAccepterRequester = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpcPeeringConnectionAccepterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.autoAccept">auto_accept</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | requester block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_peering_connection_id`<sup>Required</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.vpcPeeringConnectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}.

---

##### `accepter`<sup>Optional</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.accepter"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#accepter VpcPeeringConnectionAccepterA#accepter}

---

##### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.autoAccept"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requester`<sup>Optional</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.requester"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

requester block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#requester VpcPeeringConnectionAccepterA#requester}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#timeouts VpcPeeringConnectionAccepterA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter">put_accepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester">put_requester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAccepter">reset_accepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAutoAccept">reset_auto_accept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetRequester">reset_requester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_accepter` <a name="put_accepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter"></a>

```python
def put_accepter(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter.parameter.allowClassicLinkToRemoteVpc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}.

---

###### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter.parameter.allowRemoteVpcDnsResolution"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.

---

###### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter.parameter.allowVpcToRemoteClassicLink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}.

---

##### `put_requester` <a name="put_requester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester"></a>

```python
def put_requester(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester.parameter.allowClassicLinkToRemoteVpc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}.

---

###### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester.parameter.allowRemoteVpcDnsResolution"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.

---

###### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester.parameter.allowVpcToRemoteClassicLink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#create VpcPeeringConnectionAccepterA#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#update VpcPeeringConnectionAccepterA#update}.

---

##### `reset_accepter` <a name="reset_accepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAccepter"></a>

```python
def reset_accepter() -> None
```

##### `reset_auto_accept` <a name="reset_auto_accept" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAutoAccept"></a>

```python
def reset_auto_accept() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_requester` <a name="reset_requester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetRequester"></a>

```python
def reset_requester() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_accepter

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_accepter

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_accepter

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference">VpcPeeringConnectionAccepterAccepterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.acceptStatus">accept_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerOwnerId">peer_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerRegion">peer_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerVpcId">peer_vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference">VpcPeeringConnectionAccepterRequesterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference">VpcPeeringConnectionAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepterInput">accepter_input</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAcceptInput">auto_accept_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requesterInput">requester_input</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionIdInput">vpc_peering_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAccept">auto_accept</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accepter`<sup>Required</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepter"></a>

```python
accepter: VpcPeeringConnectionAccepterAccepterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference">VpcPeeringConnectionAccepterAccepterOutputReference</a>

---

##### `accept_status`<sup>Required</sup> <a name="accept_status" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.acceptStatus"></a>

```python
accept_status: str
```

- *Type:* str

---

##### `peer_owner_id`<sup>Required</sup> <a name="peer_owner_id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerOwnerId"></a>

```python
peer_owner_id: str
```

- *Type:* str

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

---

##### `peer_vpc_id`<sup>Required</sup> <a name="peer_vpc_id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerVpcId"></a>

```python
peer_vpc_id: str
```

- *Type:* str

---

##### `requester`<sup>Required</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requester"></a>

```python
requester: VpcPeeringConnectionAccepterRequesterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference">VpcPeeringConnectionAccepterRequesterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeouts"></a>

```python
timeouts: VpcPeeringConnectionAccepterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference">VpcPeeringConnectionAccepterTimeoutsOutputReference</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `accepter_input`<sup>Optional</sup> <a name="accepter_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepterInput"></a>

```python
accepter_input: VpcPeeringConnectionAccepterAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

---

##### `auto_accept_input`<sup>Optional</sup> <a name="auto_accept_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAcceptInput"></a>

```python
auto_accept_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `requester_input`<sup>Optional</sup> <a name="requester_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requesterInput"></a>

```python
requester_input: VpcPeeringConnectionAccepterRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VpcPeeringConnectionAccepterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_peering_connection_id_input`<sup>Optional</sup> <a name="vpc_peering_connection_id_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionIdInput"></a>

```python
vpc_peering_connection_id_input: str
```

- *Type:* str

---

##### `auto_accept`<sup>Required</sup> <a name="auto_accept" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAccept"></a>

```python
auto_accept: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_peering_connection_id`<sup>Required</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionAccepterAccepter <a name="VpcPeeringConnectionAccepterAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_accepter

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}. |

---

##### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}.

---

##### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.

---

##### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionAccepterAConfig <a name="VpcPeeringConnectionAccepterAConfig" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_accepter

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_peering_connection_id: str,
  accepter: VpcPeeringConnectionAccepterAccepter = None,
  auto_accept: typing.Union[bool, IResolvable] = None,
  id: str = None,
  requester: VpcPeeringConnectionAccepterRequester = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpcPeeringConnectionAccepterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.autoAccept">auto_accept</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | requester block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_peering_connection_id`<sup>Required</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}.

---

##### `accepter`<sup>Optional</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.accepter"></a>

```python
accepter: VpcPeeringConnectionAccepterAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#accepter VpcPeeringConnectionAccepterA#accepter}

---

##### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.autoAccept"></a>

```python
auto_accept: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requester`<sup>Optional</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.requester"></a>

```python
requester: VpcPeeringConnectionAccepterRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

requester block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#requester VpcPeeringConnectionAccepterA#requester}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.timeouts"></a>

```python
timeouts: VpcPeeringConnectionAccepterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#timeouts VpcPeeringConnectionAccepterA#timeouts}

---

### VpcPeeringConnectionAccepterRequester <a name="VpcPeeringConnectionAccepterRequester" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_accepter

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}. |

---

##### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}.

---

##### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.

---

##### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionAccepterTimeouts <a name="VpcPeeringConnectionAccepterTimeouts" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_accepter

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#create VpcPeeringConnectionAccepterA#create}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#update VpcPeeringConnectionAccepterA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#create VpcPeeringConnectionAccepterA#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#update VpcPeeringConnectionAccepterA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionAccepterAccepterOutputReference <a name="VpcPeeringConnectionAccepterAccepterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_accepter

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowClassicLinkToRemoteVpc">reset_allow_classic_link_to_remote_vpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowRemoteVpcDnsResolution">reset_allow_remote_vpc_dns_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowVpcToRemoteClassicLink">reset_allow_vpc_to_remote_classic_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_classic_link_to_remote_vpc` <a name="reset_allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```python
def reset_allow_classic_link_to_remote_vpc() -> None
```

##### `reset_allow_remote_vpc_dns_resolution` <a name="reset_allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```python
def reset_allow_remote_vpc_dns_resolution() -> None
```

##### `reset_allow_vpc_to_remote_classic_link` <a name="reset_allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```python
def reset_allow_vpc_to_remote_classic_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput">allow_classic_link_to_remote_vpc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput">allow_remote_vpc_dns_resolution_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput">allow_vpc_to_remote_classic_link_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_classic_link_to_remote_vpc_input`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```python
allow_classic_link_to_remote_vpc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution_input`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```python
allow_remote_vpc_dns_resolution_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link_input`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```python
allow_vpc_to_remote_classic_link_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_classic_link_to_remote_vpc`<sup>Required</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution`<sup>Required</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link`<sup>Required</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.internalValue"></a>

```python
internal_value: VpcPeeringConnectionAccepterAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

---


### VpcPeeringConnectionAccepterRequesterOutputReference <a name="VpcPeeringConnectionAccepterRequesterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_accepter

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowClassicLinkToRemoteVpc">reset_allow_classic_link_to_remote_vpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowRemoteVpcDnsResolution">reset_allow_remote_vpc_dns_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowVpcToRemoteClassicLink">reset_allow_vpc_to_remote_classic_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_classic_link_to_remote_vpc` <a name="reset_allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```python
def reset_allow_classic_link_to_remote_vpc() -> None
```

##### `reset_allow_remote_vpc_dns_resolution` <a name="reset_allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```python
def reset_allow_remote_vpc_dns_resolution() -> None
```

##### `reset_allow_vpc_to_remote_classic_link` <a name="reset_allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```python
def reset_allow_vpc_to_remote_classic_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput">allow_classic_link_to_remote_vpc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput">allow_remote_vpc_dns_resolution_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput">allow_vpc_to_remote_classic_link_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_classic_link_to_remote_vpc_input`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```python
allow_classic_link_to_remote_vpc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution_input`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```python
allow_remote_vpc_dns_resolution_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link_input`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```python
allow_vpc_to_remote_classic_link_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_classic_link_to_remote_vpc`<sup>Required</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution`<sup>Required</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link`<sup>Required</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.internalValue"></a>

```python
internal_value: VpcPeeringConnectionAccepterRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

---


### VpcPeeringConnectionAccepterTimeoutsOutputReference <a name="VpcPeeringConnectionAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_accepter

vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpcPeeringConnectionAccepterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>, cdktf.IResolvable]

---



