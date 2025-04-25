# `cloudfrontFieldLevelEncryptionProfile` Submodule <a name="`cloudfrontFieldLevelEncryptionProfile` Submodule" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontFieldLevelEncryptionProfile <a name="CloudfrontFieldLevelEncryptionProfile" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile aws_cloudfront_field_level_encryption_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  encryption_entities: CloudfrontFieldLevelEncryptionProfileEncryptionEntities,
  name: str,
  comment: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.encryptionEntities">encryption_entities</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a></code> | encryption_entities block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#id CloudfrontFieldLevelEncryptionProfile#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_entities`<sup>Required</sup> <a name="encryption_entities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.encryptionEntities"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

encryption_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#encryption_entities CloudfrontFieldLevelEncryptionProfile#encryption_entities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#id CloudfrontFieldLevelEncryptionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putEncryptionEntities">put_encryption_entities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_entities` <a name="put_encryption_entities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putEncryptionEntities"></a>

```python
def put_encryption_entities(
  items: typing.Union[IResolvable, typing.List[CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems]] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putEncryptionEntities.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudfrontFieldLevelEncryptionProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudfrontFieldLevelEncryptionProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudfrontFieldLevelEncryptionProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudfrontFieldLevelEncryptionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontFieldLevelEncryptionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.callerReference">caller_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntities">encryption_entities</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntitiesInput">encryption_entities_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `caller_reference`<sup>Required</sup> <a name="caller_reference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.callerReference"></a>

```python
caller_reference: str
```

- *Type:* str

---

##### `encryption_entities`<sup>Required</sup> <a name="encryption_entities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntities"></a>

```python
encryption_entities: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `encryption_entities_input`<sup>Optional</sup> <a name="encryption_entities_input" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.encryptionEntitiesInput"></a>

```python
encryption_entities_input: CloudfrontFieldLevelEncryptionProfileEncryptionEntities
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontFieldLevelEncryptionProfileConfig <a name="CloudfrontFieldLevelEncryptionProfileConfig" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  encryption_entities: CloudfrontFieldLevelEncryptionProfileEncryptionEntities,
  name: str,
  comment: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.encryptionEntities">encryption_entities</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a></code> | encryption_entities block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#id CloudfrontFieldLevelEncryptionProfile#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_entities`<sup>Required</sup> <a name="encryption_entities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.encryptionEntities"></a>

```python
encryption_entities: CloudfrontFieldLevelEncryptionProfileEncryptionEntities
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

encryption_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#encryption_entities CloudfrontFieldLevelEncryptionProfile#encryption_entities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#id CloudfrontFieldLevelEncryptionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudfrontFieldLevelEncryptionProfileEncryptionEntities <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntities" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities(
  items: typing.Union[IResolvable, typing.List[CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems</a>]]</code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}

---

### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems(
  field_patterns: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns,
  provider_id: str,
  public_key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.fieldPatterns">field_patterns</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a></code> | field_patterns block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.providerId">provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.publicKeyId">public_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}. |

---

##### `field_patterns`<sup>Required</sup> <a name="field_patterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.fieldPatterns"></a>

```python
field_patterns: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a>

field_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#field_patterns CloudfrontFieldLevelEncryptionProfile#field_patterns}

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}.

---

##### `public_key_id`<sup>Required</sup> <a name="public_key_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems.property.publicKeyId"></a>

```python
public_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}.

---

### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns(
  items: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns.property.items">items</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_items` <a name="reset_items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.itemsInput">items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.itemsInput"></a>

```python
items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a>

---


### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems</a>]]

---


### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.putFieldPatterns">put_field_patterns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_patterns` <a name="put_field_patterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.putFieldPatterns"></a>

```python
def put_field_patterns(
  items: typing.List[str] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.putFieldPatterns.parameter.items"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/cloudfront_field_level_encryption_profile#items CloudfrontFieldLevelEncryptionProfile#items}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatterns">field_patterns</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatternsInput">field_patterns_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerIdInput">provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyIdInput">public_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerId">provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyId">public_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_patterns`<sup>Required</sup> <a name="field_patterns" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatterns"></a>

```python
field_patterns: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference</a>

---

##### `field_patterns_input`<sup>Optional</sup> <a name="field_patterns_input" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.fieldPatternsInput"></a>

```python
field_patterns_input: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns</a>

---

##### `provider_id_input`<sup>Optional</sup> <a name="provider_id_input" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerIdInput"></a>

```python
provider_id_input: str
```

- *Type:* str

---

##### `public_key_id_input`<sup>Optional</sup> <a name="public_key_id_input" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyIdInput"></a>

```python
public_key_id_input: str
```

- *Type:* str

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

---

##### `public_key_id`<sup>Required</sup> <a name="public_key_id" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.publicKeyId"></a>

```python
public_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems</a>]

---


### CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference <a name="CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_field_level_encryption_profile

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems</a>]]

---

##### `reset_items` <a name="reset_items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.items"></a>

```python
items: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems">CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontFieldLevelEncryptionProfileEncryptionEntities
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileEncryptionEntities">CloudfrontFieldLevelEncryptionProfileEncryptionEntities</a>

---



