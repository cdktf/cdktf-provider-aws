# `cleanroomsCollaboration` Submodule <a name="`cleanroomsCollaboration` Submodule" id="@cdktf/provider-aws.cleanroomsCollaboration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsCollaboration <a name="CleanroomsCollaboration" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration aws_cleanrooms_collaboration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaboration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  creator_display_name: str,
  creator_member_abilities: typing.List[str],
  description: str,
  name: str,
  query_log_status: str,
  data_encryption_metadata: CleanroomsCollaborationDataEncryptionMetadata = None,
  member: typing.Union[IResolvable, typing.List[CleanroomsCollaborationMember]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: CleanroomsCollaborationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorDisplayName">creator_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorMemberAbilities">creator_member_abilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.queryLogStatus">query_log_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dataEncryptionMetadata">data_encryption_metadata</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | data_encryption_metadata block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.member">member</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>]]</code> | member block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creator_display_name`<sup>Required</sup> <a name="creator_display_name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorDisplayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}.

---

##### `creator_member_abilities`<sup>Required</sup> <a name="creator_member_abilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.creatorMemberAbilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}.

---

##### `query_log_status`<sup>Required</sup> <a name="query_log_status" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.queryLogStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}.

---

##### `data_encryption_metadata`<sup>Optional</sup> <a name="data_encryption_metadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.dataEncryptionMetadata"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

data_encryption_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}

---

##### `member`<sup>Optional</sup> <a name="member" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.member"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>]]

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#member CleanroomsCollaboration#member}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#timeouts CleanroomsCollaboration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata">put_data_encryption_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putMember">put_member</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata">reset_data_encryption_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetMember">reset_member</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_encryption_metadata` <a name="put_data_encryption_metadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata"></a>

```python
def put_data_encryption_metadata(
  allow_clear_text: typing.Union[bool, IResolvable],
  allow_duplicates: typing.Union[bool, IResolvable],
  allow_joins_on_columns_with_different_names: typing.Union[bool, IResolvable],
  preserve_nulls: typing.Union[bool, IResolvable]
) -> None
```

###### `allow_clear_text`<sup>Required</sup> <a name="allow_clear_text" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.allowClearText"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#allow_clear_text CleanroomsCollaboration#allow_clear_text}.

---

###### `allow_duplicates`<sup>Required</sup> <a name="allow_duplicates" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.allowDuplicates"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}.

---

###### `allow_joins_on_columns_with_different_names`<sup>Required</sup> <a name="allow_joins_on_columns_with_different_names" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.allowJoinsOnColumnsWithDifferentNames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}.

---

###### `preserve_nulls`<sup>Required</sup> <a name="preserve_nulls" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.preserveNulls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}.

---

##### `put_member` <a name="put_member" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putMember"></a>

```python
def put_member(
  value: typing.Union[IResolvable, typing.List[CleanroomsCollaborationMember]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putMember.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#create CleanroomsCollaboration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#delete CleanroomsCollaboration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#update CleanroomsCollaboration#update}.

---

##### `reset_data_encryption_metadata` <a name="reset_data_encryption_metadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata"></a>

```python
def reset_data_encryption_metadata() -> None
```

##### `reset_member` <a name="reset_member" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetMember"></a>

```python
def reset_member() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CleanroomsCollaboration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaboration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaboration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaboration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaboration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CleanroomsCollaboration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanroomsCollaboration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanroomsCollaboration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CleanroomsCollaboration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata">data_encryption_metadata</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.member">member</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList">CleanroomsCollaborationMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference">CleanroomsCollaborationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput">creator_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput">creator_member_abilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput">data_encryption_metadata_input</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.memberInput">member_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput">query_log_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName">creator_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities">creator_member_abilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus">query_log_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_encryption_metadata`<sup>Required</sup> <a name="data_encryption_metadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata"></a>

```python
data_encryption_metadata: CleanroomsCollaborationDataEncryptionMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.member"></a>

```python
member: CleanroomsCollaborationMemberList
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList">CleanroomsCollaborationMemberList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeouts"></a>

```python
timeouts: CleanroomsCollaborationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference">CleanroomsCollaborationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `creator_display_name_input`<sup>Optional</sup> <a name="creator_display_name_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput"></a>

```python
creator_display_name_input: str
```

- *Type:* str

---

##### `creator_member_abilities_input`<sup>Optional</sup> <a name="creator_member_abilities_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput"></a>

```python
creator_member_abilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_encryption_metadata_input`<sup>Optional</sup> <a name="data_encryption_metadata_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput"></a>

```python
data_encryption_metadata_input: CleanroomsCollaborationDataEncryptionMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.memberInput"></a>

```python
member_input: typing.Union[IResolvable, typing.List[CleanroomsCollaborationMember]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_log_status_input`<sup>Optional</sup> <a name="query_log_status_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput"></a>

```python
query_log_status_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CleanroomsCollaborationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>]

---

##### `creator_display_name`<sup>Required</sup> <a name="creator_display_name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName"></a>

```python
creator_display_name: str
```

- *Type:* str

---

##### `creator_member_abilities`<sup>Required</sup> <a name="creator_member_abilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities"></a>

```python
creator_member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_log_status`<sup>Required</sup> <a name="query_log_status" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus"></a>

```python
query_log_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsCollaborationConfig <a name="CleanroomsCollaborationConfig" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  creator_display_name: str,
  creator_member_abilities: typing.List[str],
  description: str,
  name: str,
  query_log_status: str,
  data_encryption_metadata: CleanroomsCollaborationDataEncryptionMetadata = None,
  member: typing.Union[IResolvable, typing.List[CleanroomsCollaborationMember]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: CleanroomsCollaborationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName">creator_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities">creator_member_abilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus">query_log_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata">data_encryption_metadata</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | data_encryption_metadata block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.member">member</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>]]</code> | member block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creator_display_name`<sup>Required</sup> <a name="creator_display_name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName"></a>

```python
creator_display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}.

---

##### `creator_member_abilities`<sup>Required</sup> <a name="creator_member_abilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities"></a>

```python
creator_member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}.

---

##### `query_log_status`<sup>Required</sup> <a name="query_log_status" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus"></a>

```python
query_log_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}.

---

##### `data_encryption_metadata`<sup>Optional</sup> <a name="data_encryption_metadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata"></a>

```python
data_encryption_metadata: CleanroomsCollaborationDataEncryptionMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

data_encryption_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}

---

##### `member`<sup>Optional</sup> <a name="member" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.member"></a>

```python
member: typing.Union[IResolvable, typing.List[CleanroomsCollaborationMember]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>]]

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#member CleanroomsCollaboration#member}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.timeouts"></a>

```python
timeouts: CleanroomsCollaborationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#timeouts CleanroomsCollaboration#timeouts}

---

### CleanroomsCollaborationDataEncryptionMetadata <a name="CleanroomsCollaborationDataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata(
  allow_clear_text: typing.Union[bool, IResolvable],
  allow_duplicates: typing.Union[bool, IResolvable],
  allow_joins_on_columns_with_different_names: typing.Union[bool, IResolvable],
  preserve_nulls: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowClearText">allow_clear_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#allow_clear_text CleanroomsCollaboration#allow_clear_text}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates">allow_duplicates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames">allow_joins_on_columns_with_different_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls">preserve_nulls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}. |

---

##### `allow_clear_text`<sup>Required</sup> <a name="allow_clear_text" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowClearText"></a>

```python
allow_clear_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#allow_clear_text CleanroomsCollaboration#allow_clear_text}.

---

##### `allow_duplicates`<sup>Required</sup> <a name="allow_duplicates" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates"></a>

```python
allow_duplicates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}.

---

##### `allow_joins_on_columns_with_different_names`<sup>Required</sup> <a name="allow_joins_on_columns_with_different_names" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames"></a>

```python
allow_joins_on_columns_with_different_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}.

---

##### `preserve_nulls`<sup>Required</sup> <a name="preserve_nulls" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls"></a>

```python
preserve_nulls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}.

---

### CleanroomsCollaborationMember <a name="CleanroomsCollaborationMember" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMember(
  account_id: str,
  display_name: str,
  member_abilities: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.memberAbilities">member_abilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}. |

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}.

---

##### `member_abilities`<sup>Required</sup> <a name="member_abilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.memberAbilities"></a>

```python
member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}.

---

### CleanroomsCollaborationTimeouts <a name="CleanroomsCollaborationTimeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#create CleanroomsCollaboration#create}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#delete CleanroomsCollaboration#delete}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#update CleanroomsCollaboration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#create CleanroomsCollaboration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#delete CleanroomsCollaboration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/cleanrooms_collaboration#update CleanroomsCollaboration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsCollaborationDataEncryptionMetadataOutputReference <a name="CleanroomsCollaborationDataEncryptionMetadataOutputReference" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearTextInput">allow_clear_text_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput">allow_duplicates_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput">allow_joins_on_columns_with_different_names_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput">preserve_nulls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearText">allow_clear_text</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates">allow_duplicates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames">allow_joins_on_columns_with_different_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls">preserve_nulls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_clear_text_input`<sup>Optional</sup> <a name="allow_clear_text_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearTextInput"></a>

```python
allow_clear_text_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_duplicates_input`<sup>Optional</sup> <a name="allow_duplicates_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput"></a>

```python
allow_duplicates_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_joins_on_columns_with_different_names_input`<sup>Optional</sup> <a name="allow_joins_on_columns_with_different_names_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput"></a>

```python
allow_joins_on_columns_with_different_names_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preserve_nulls_input`<sup>Optional</sup> <a name="preserve_nulls_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput"></a>

```python
preserve_nulls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_clear_text`<sup>Required</sup> <a name="allow_clear_text" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearText"></a>

```python
allow_clear_text: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_duplicates`<sup>Required</sup> <a name="allow_duplicates" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates"></a>

```python
allow_duplicates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_joins_on_columns_with_different_names`<sup>Required</sup> <a name="allow_joins_on_columns_with_different_names" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames"></a>

```python
allow_joins_on_columns_with_different_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preserve_nulls`<sup>Required</sup> <a name="preserve_nulls" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls"></a>

```python
preserve_nulls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue"></a>

```python
internal_value: CleanroomsCollaborationDataEncryptionMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---


### CleanroomsCollaborationMemberList <a name="CleanroomsCollaborationMemberList" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMemberList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsCollaborationMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CleanroomsCollaborationMember]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>]]

---


### CleanroomsCollaborationMemberOutputReference <a name="CleanroomsCollaborationMemberOutputReference" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilitiesInput">member_abilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilities">member_abilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `member_abilities_input`<sup>Optional</sup> <a name="member_abilities_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilitiesInput"></a>

```python
member_abilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `member_abilities`<sup>Required</sup> <a name="member_abilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilities"></a>

```python
member_abilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanroomsCollaborationMember]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>]

---


### CleanroomsCollaborationTimeoutsOutputReference <a name="CleanroomsCollaborationTimeoutsOutputReference" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cleanrooms_collaboration

cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanroomsCollaborationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>]

---



