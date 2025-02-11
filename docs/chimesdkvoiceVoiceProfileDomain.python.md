# `chimesdkvoiceVoiceProfileDomain` Submodule <a name="`chimesdkvoiceVoiceProfileDomain` Submodule" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceVoiceProfileDomain <a name="ChimesdkvoiceVoiceProfileDomain" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain aws_chimesdkvoice_voice_profile_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_voice_profile_domain

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  server_side_encryption_configuration: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration,
  description: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ChimesdkvoiceVoiceProfileDomainTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}.

---

##### `server_side_encryption_configuration`<sup>Required</sup> <a name="server_side_encryption_configuration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.serverSideEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#server_side_encryption_configuration ChimesdkvoiceVoiceProfileDomain#server_side_encryption_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#timeouts ChimesdkvoiceVoiceProfileDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration">put_server_side_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_server_side_encryption_configuration` <a name="put_server_side_encryption_configuration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration"></a>

```python
def put_server_side_encryption_configuration(
  kms_key_arn: str
) -> None
```

###### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#kms_key_arn ChimesdkvoiceVoiceProfileDomain#kms_key_arn}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#create ChimesdkvoiceVoiceProfileDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#delete ChimesdkvoiceVoiceProfileDomain#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#update ChimesdkvoiceVoiceProfileDomain#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChimesdkvoiceVoiceProfileDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_voice_profile_domain

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_voice_profile_domain

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_voice_profile_domain

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_voice_profile_domain

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChimesdkvoiceVoiceProfileDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChimesdkvoiceVoiceProfileDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChimesdkvoiceVoiceProfileDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChimesdkvoiceVoiceProfileDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference">ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfigurationInput">server_side_encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `server_side_encryption_configuration`<sup>Required</sup> <a name="server_side_encryption_configuration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeouts"></a>

```python
timeouts: ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference">ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `server_side_encryption_configuration_input`<sup>Optional</sup> <a name="server_side_encryption_configuration_input" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfigurationInput"></a>

```python
server_side_encryption_configuration_input: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ChimesdkvoiceVoiceProfileDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceVoiceProfileDomainConfig <a name="ChimesdkvoiceVoiceProfileDomainConfig" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_voice_profile_domain

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  server_side_encryption_configuration: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration,
  description: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ChimesdkvoiceVoiceProfileDomainTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}.

---

##### `server_side_encryption_configuration`<sup>Required</sup> <a name="server_side_encryption_configuration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#server_side_encryption_configuration ChimesdkvoiceVoiceProfileDomain#server_side_encryption_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.timeouts"></a>

```python
timeouts: ChimesdkvoiceVoiceProfileDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#timeouts ChimesdkvoiceVoiceProfileDomain#timeouts}

---

### ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration <a name="ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_voice_profile_domain

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration(
  kms_key_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#kms_key_arn ChimesdkvoiceVoiceProfileDomain#kms_key_arn}. |

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#kms_key_arn ChimesdkvoiceVoiceProfileDomain#kms_key_arn}.

---

### ChimesdkvoiceVoiceProfileDomainTimeouts <a name="ChimesdkvoiceVoiceProfileDomainTimeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_voice_profile_domain

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#create ChimesdkvoiceVoiceProfileDomain#create}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#delete ChimesdkvoiceVoiceProfileDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#update ChimesdkvoiceVoiceProfileDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#create ChimesdkvoiceVoiceProfileDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#delete ChimesdkvoiceVoiceProfileDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/chimesdkvoice_voice_profile_domain#update ChimesdkvoiceVoiceProfileDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference <a name="ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_voice_profile_domain

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

---


### ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference <a name="ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_voice_profile_domain

chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChimesdkvoiceVoiceProfileDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>]

---



