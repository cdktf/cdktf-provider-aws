# `codegurureviewerRepositoryAssociation` Submodule <a name="`codegurureviewerRepositoryAssociation` Submodule" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodegurureviewerRepositoryAssociation <a name="CodegurureviewerRepositoryAssociation" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association aws_codegurureviewer_repository_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository: CodegurureviewerRepositoryAssociationRepository,
  id: str = None,
  kms_key_details: CodegurureviewerRepositoryAssociationKmsKeyDetails = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: CodegurureviewerRepositoryAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.repository">repository</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | repository block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#id CodegurureviewerRepositoryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.kmsKeyDetails">kms_key_details</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | kms_key_details block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#tags_all CodegurureviewerRepositoryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.repository"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#repository CodegurureviewerRepositoryAssociation#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#id CodegurureviewerRepositoryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_details`<sup>Optional</sup> <a name="kms_key_details" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.kmsKeyDetails"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

kms_key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#kms_key_details CodegurureviewerRepositoryAssociation#kms_key_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#tags_all CodegurureviewerRepositoryAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#timeouts CodegurureviewerRepositoryAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails">put_kms_key_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository">put_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetKmsKeyDetails">reset_kms_key_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_kms_key_details` <a name="put_kms_key_details" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails"></a>

```python
def put_kms_key_details(
  encryption_option: str = None,
  kms_key_id: str = None
) -> None
```

###### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails.parameter.encryptionOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#encryption_option CodegurureviewerRepositoryAssociation#encryption_option}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#kms_key_id CodegurureviewerRepositoryAssociation#kms_key_id}.

---

##### `put_repository` <a name="put_repository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository"></a>

```python
def put_repository(
  bitbucket: CodegurureviewerRepositoryAssociationRepositoryBitbucket = None,
  codecommit: CodegurureviewerRepositoryAssociationRepositoryCodecommit = None,
  github_enterprise_server: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer = None,
  s3_bucket: CodegurureviewerRepositoryAssociationRepositoryS3Bucket = None
) -> None
```

###### `bitbucket`<sup>Optional</sup> <a name="bitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository.parameter.bitbucket"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

bitbucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#bitbucket CodegurureviewerRepositoryAssociation#bitbucket}

---

###### `codecommit`<sup>Optional</sup> <a name="codecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository.parameter.codecommit"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

codecommit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#codecommit CodegurureviewerRepositoryAssociation#codecommit}

---

###### `github_enterprise_server`<sup>Optional</sup> <a name="github_enterprise_server" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository.parameter.githubEnterpriseServer"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

github_enterprise_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#github_enterprise_server CodegurureviewerRepositoryAssociation#github_enterprise_server}

---

###### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository.parameter.s3Bucket"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

s3_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#s3_bucket CodegurureviewerRepositoryAssociation#s3_bucket}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#create CodegurureviewerRepositoryAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#delete CodegurureviewerRepositoryAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#update CodegurureviewerRepositoryAssociation#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_details` <a name="reset_kms_key_details" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetKmsKeyDetails"></a>

```python
def reset_kms_key_details() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CodegurureviewerRepositoryAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CodegurureviewerRepositoryAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodegurureviewerRepositoryAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodegurureviewerRepositoryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodegurureviewerRepositoryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn">connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetails">kms_key_details</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference">CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repository">repository</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference">CodegurureviewerRepositoryAssociationRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.s3RepositoryDetails">s3_repository_details</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference">CodegurureviewerRepositoryAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetailsInput">kms_key_details_input</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repositoryInput">repository_input</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

---

##### `kms_key_details`<sup>Required</sup> <a name="kms_key_details" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetails"></a>

```python
kms_key_details: CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference">CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repository"></a>

```python
repository: CodegurureviewerRepositoryAssociationRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference">CodegurureviewerRepositoryAssociationRepositoryOutputReference</a>

---

##### `s3_repository_details`<sup>Required</sup> <a name="s3_repository_details" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.s3RepositoryDetails"></a>

```python
s3_repository_details: CodegurureviewerRepositoryAssociationS3RepositoryDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeouts"></a>

```python
timeouts: CodegurureviewerRepositoryAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference">CodegurureviewerRepositoryAssociationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_details_input`<sup>Optional</sup> <a name="kms_key_details_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetailsInput"></a>

```python
kms_key_details_input: CodegurureviewerRepositoryAssociationKmsKeyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repositoryInput"></a>

```python
repository_input: CodegurureviewerRepositoryAssociationRepository
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CodegurureviewerRepositoryAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodegurureviewerRepositoryAssociationConfig <a name="CodegurureviewerRepositoryAssociationConfig" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository: CodegurureviewerRepositoryAssociationRepository,
  id: str = None,
  kms_key_details: CodegurureviewerRepositoryAssociationKmsKeyDetails = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: CodegurureviewerRepositoryAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.repository">repository</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | repository block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#id CodegurureviewerRepositoryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.kmsKeyDetails">kms_key_details</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | kms_key_details block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#tags_all CodegurureviewerRepositoryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.repository"></a>

```python
repository: CodegurureviewerRepositoryAssociationRepository
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#repository CodegurureviewerRepositoryAssociation#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#id CodegurureviewerRepositoryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_details`<sup>Optional</sup> <a name="kms_key_details" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.kmsKeyDetails"></a>

```python
kms_key_details: CodegurureviewerRepositoryAssociationKmsKeyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

kms_key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#kms_key_details CodegurureviewerRepositoryAssociation#kms_key_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#tags_all CodegurureviewerRepositoryAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.timeouts"></a>

```python
timeouts: CodegurureviewerRepositoryAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#timeouts CodegurureviewerRepositoryAssociation#timeouts}

---

### CodegurureviewerRepositoryAssociationKmsKeyDetails <a name="CodegurureviewerRepositoryAssociationKmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails(
  encryption_option: str = None,
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.encryptionOption">encryption_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#encryption_option CodegurureviewerRepositoryAssociation#encryption_option}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#kms_key_id CodegurureviewerRepositoryAssociation#kms_key_id}. |

---

##### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#encryption_option CodegurureviewerRepositoryAssociation#encryption_option}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#kms_key_id CodegurureviewerRepositoryAssociation#kms_key_id}.

---

### CodegurureviewerRepositoryAssociationRepository <a name="CodegurureviewerRepositoryAssociationRepository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository(
  bitbucket: CodegurureviewerRepositoryAssociationRepositoryBitbucket = None,
  codecommit: CodegurureviewerRepositoryAssociationRepositoryCodecommit = None,
  github_enterprise_server: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer = None,
  s3_bucket: CodegurureviewerRepositoryAssociationRepositoryS3Bucket = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.bitbucket">bitbucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | bitbucket block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.codecommit">codecommit</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | codecommit block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.githubEnterpriseServer">github_enterprise_server</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | github_enterprise_server block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.s3Bucket">s3_bucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | s3_bucket block. |

---

##### `bitbucket`<sup>Optional</sup> <a name="bitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.bitbucket"></a>

```python
bitbucket: CodegurureviewerRepositoryAssociationRepositoryBitbucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

bitbucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#bitbucket CodegurureviewerRepositoryAssociation#bitbucket}

---

##### `codecommit`<sup>Optional</sup> <a name="codecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.codecommit"></a>

```python
codecommit: CodegurureviewerRepositoryAssociationRepositoryCodecommit
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

codecommit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#codecommit CodegurureviewerRepositoryAssociation#codecommit}

---

##### `github_enterprise_server`<sup>Optional</sup> <a name="github_enterprise_server" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.githubEnterpriseServer"></a>

```python
github_enterprise_server: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

github_enterprise_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#github_enterprise_server CodegurureviewerRepositoryAssociation#github_enterprise_server}

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.s3Bucket"></a>

```python
s3_bucket: CodegurureviewerRepositoryAssociationRepositoryS3Bucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

s3_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#s3_bucket CodegurureviewerRepositoryAssociation#s3_bucket}

---

### CodegurureviewerRepositoryAssociationRepositoryBitbucket <a name="CodegurureviewerRepositoryAssociationRepositoryBitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket(
  connection_arn: str,
  name: str,
  owner: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.connectionArn">connection_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}. |

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}.

---

### CodegurureviewerRepositoryAssociationRepositoryCodecommit <a name="CodegurureviewerRepositoryAssociationRepositoryCodecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

### CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer <a name="CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer(
  connection_arn: str,
  name: str,
  owner: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.connectionArn">connection_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}. |

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}.

---

### CodegurureviewerRepositoryAssociationRepositoryS3Bucket <a name="CodegurureviewerRepositoryAssociationRepositoryS3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket(
  bucket_name: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

### CodegurureviewerRepositoryAssociationS3RepositoryDetails <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails()
```


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts()
```


### CodegurureviewerRepositoryAssociationTimeouts <a name="CodegurureviewerRepositoryAssociationTimeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#create CodegurureviewerRepositoryAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#delete CodegurureviewerRepositoryAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#update CodegurureviewerRepositoryAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#create CodegurureviewerRepositoryAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#delete CodegurureviewerRepositoryAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#update CodegurureviewerRepositoryAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference <a name="CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetEncryptionOption">reset_encryption_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_option` <a name="reset_encryption_option" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetEncryptionOption"></a>

```python
def reset_encryption_option() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOptionInput">encryption_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOption">encryption_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_option_input`<sup>Optional</sup> <a name="encryption_option_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOptionInput"></a>

```python
encryption_option_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `encryption_option`<sup>Required</sup> <a name="encryption_option" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CodegurureviewerRepositoryAssociationKmsKeyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

---


### CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArnInput">connection_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArn">connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_arn_input`<sup>Optional</sup> <a name="connection_arn_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArnInput"></a>

```python
connection_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.internalValue"></a>

```python
internal_value: CodegurureviewerRepositoryAssociationRepositoryBitbucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

---


### CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.internalValue"></a>

```python
internal_value: CodegurureviewerRepositoryAssociationRepositoryCodecommit
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

---


### CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArnInput">connection_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArn">connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_arn_input`<sup>Optional</sup> <a name="connection_arn_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArnInput"></a>

```python
connection_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.internalValue"></a>

```python
internal_value: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

---


### CodegurureviewerRepositoryAssociationRepositoryOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket">put_bitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit">put_codecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer">put_github_enterprise_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket">put_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetBitbucket">reset_bitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetCodecommit">reset_codecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetGithubEnterpriseServer">reset_github_enterprise_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bitbucket` <a name="put_bitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket"></a>

```python
def put_bitbucket(
  connection_arn: str,
  name: str,
  owner: str
) -> None
```

###### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket.parameter.connectionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

###### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}.

---

##### `put_codecommit` <a name="put_codecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit"></a>

```python
def put_codecommit(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

##### `put_github_enterprise_server` <a name="put_github_enterprise_server" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer"></a>

```python
def put_github_enterprise_server(
  connection_arn: str,
  name: str,
  owner: str
) -> None
```

###### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer.parameter.connectionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

###### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}.

---

##### `put_s3_bucket` <a name="put_s3_bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket"></a>

```python
def put_s3_bucket(
  bucket_name: str,
  name: str
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

##### `reset_bitbucket` <a name="reset_bitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetBitbucket"></a>

```python
def reset_bitbucket() -> None
```

##### `reset_codecommit` <a name="reset_codecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetCodecommit"></a>

```python
def reset_codecommit() -> None
```

##### `reset_github_enterprise_server` <a name="reset_github_enterprise_server" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetGithubEnterpriseServer"></a>

```python
def reset_github_enterprise_server() -> None
```

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucket">bitbucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommit">codecommit</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference">CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServer">github_enterprise_server</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3Bucket">s3_bucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucketInput">bitbucket_input</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommitInput">codecommit_input</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServerInput">github_enterprise_server_input</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bitbucket`<sup>Required</sup> <a name="bitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucket"></a>

```python
bitbucket: CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference</a>

---

##### `codecommit`<sup>Required</sup> <a name="codecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommit"></a>

```python
codecommit: CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference">CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference</a>

---

##### `github_enterprise_server`<sup>Required</sup> <a name="github_enterprise_server" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServer"></a>

```python
github_enterprise_server: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference</a>

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3Bucket"></a>

```python
s3_bucket: CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference</a>

---

##### `bitbucket_input`<sup>Optional</sup> <a name="bitbucket_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucketInput"></a>

```python
bitbucket_input: CodegurureviewerRepositoryAssociationRepositoryBitbucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

---

##### `codecommit_input`<sup>Optional</sup> <a name="codecommit_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommitInput"></a>

```python
codecommit_input: CodegurureviewerRepositoryAssociationRepositoryCodecommit
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

---

##### `github_enterprise_server_input`<sup>Optional</sup> <a name="github_enterprise_server_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServerInput"></a>

```python
github_enterprise_server_input: CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: CodegurureviewerRepositoryAssociationRepositoryS3Bucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: CodegurureviewerRepositoryAssociationRepository
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

---


### CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.internalValue"></a>

```python
internal_value: CodegurureviewerRepositoryAssociationRepositoryS3Bucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.buildArtifactsObjectKey">build_artifacts_object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.sourceCodeArtifactsObjectKey">source_code_artifacts_object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_artifacts_object_key`<sup>Required</sup> <a name="build_artifacts_object_key" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.buildArtifactsObjectKey"></a>

```python
build_artifacts_object_key: str
```

- *Type:* str

---

##### `source_code_artifacts_object_key`<sup>Required</sup> <a name="source_code_artifacts_object_key" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.sourceCodeArtifactsObjectKey"></a>

```python
source_code_artifacts_object_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts</a>

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsList <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsList" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.codeArtifacts">code_artifacts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails">CodegurureviewerRepositoryAssociationS3RepositoryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `code_artifacts`<sup>Required</sup> <a name="code_artifacts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.codeArtifacts"></a>

```python
code_artifacts: CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CodegurureviewerRepositoryAssociationS3RepositoryDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails">CodegurureviewerRepositoryAssociationS3RepositoryDetails</a>

---


### CodegurureviewerRepositoryAssociationTimeoutsOutputReference <a name="CodegurureviewerRepositoryAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codegurureviewer_repository_association

codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodegurureviewerRepositoryAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>]

---



