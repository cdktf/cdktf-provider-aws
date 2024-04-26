# `verifiedaccessInstance` Submodule <a name="`verifiedaccessInstance` Submodule" id="@cdktf/provider-aws.verifiedaccessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedaccessInstance <a name="VerifiedaccessInstance" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance aws_verifiedaccess_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance

verifiedaccessInstance.VerifiedaccessInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  fips_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#description VerifiedaccessInstance#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.fipsEnabled">fips_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#fips_enabled VerifiedaccessInstance#fips_enabled}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#id VerifiedaccessInstance#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#tags VerifiedaccessInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#tags_all VerifiedaccessInstance#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#description VerifiedaccessInstance#description}.

---

##### `fips_enabled`<sup>Optional</sup> <a name="fips_enabled" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.fipsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#fips_enabled VerifiedaccessInstance#fips_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#id VerifiedaccessInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#tags VerifiedaccessInstance#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#tags_all VerifiedaccessInstance#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetFipsEnabled">reset_fips_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_fips_enabled` <a name="reset_fips_enabled" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetFipsEnabled"></a>

```python
def reset_fips_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VerifiedaccessInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance

verifiedaccessInstance.VerifiedaccessInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance

verifiedaccessInstance.VerifiedaccessInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance

verifiedaccessInstance.VerifiedaccessInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance

verifiedaccessInstance.VerifiedaccessInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VerifiedaccessInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VerifiedaccessInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VerifiedaccessInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedaccessInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.verifiedAccessTrustProviders">verified_access_trust_providers</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList">VerifiedaccessInstanceVerifiedAccessTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fipsEnabledInput">fips_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fipsEnabled">fips_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `verified_access_trust_providers`<sup>Required</sup> <a name="verified_access_trust_providers" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.verifiedAccessTrustProviders"></a>

```python
verified_access_trust_providers: VerifiedaccessInstanceVerifiedAccessTrustProvidersList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList">VerifiedaccessInstanceVerifiedAccessTrustProvidersList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fips_enabled_input`<sup>Optional</sup> <a name="fips_enabled_input" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fipsEnabledInput"></a>

```python
fips_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fips_enabled`<sup>Required</sup> <a name="fips_enabled" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fipsEnabled"></a>

```python
fips_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedaccessInstanceConfig <a name="VerifiedaccessInstanceConfig" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance

verifiedaccessInstance.VerifiedaccessInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  fips_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#description VerifiedaccessInstance#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.fipsEnabled">fips_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#fips_enabled VerifiedaccessInstance#fips_enabled}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#id VerifiedaccessInstance#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#tags VerifiedaccessInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#tags_all VerifiedaccessInstance#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#description VerifiedaccessInstance#description}.

---

##### `fips_enabled`<sup>Optional</sup> <a name="fips_enabled" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.fipsEnabled"></a>

```python
fips_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#fips_enabled VerifiedaccessInstance#fips_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#id VerifiedaccessInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#tags VerifiedaccessInstance#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/verifiedaccess_instance#tags_all VerifiedaccessInstance#tags_all}.

---

### VerifiedaccessInstanceVerifiedAccessTrustProviders <a name="VerifiedaccessInstanceVerifiedAccessTrustProviders" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProviders.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance

verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProviders()
```


## Classes <a name="Classes" id="Classes"></a>

### VerifiedaccessInstanceVerifiedAccessTrustProvidersList <a name="VerifiedaccessInstanceVerifiedAccessTrustProvidersList" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance

verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference <a name="VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance

verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType">device_trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType">user_trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId">verified_access_trust_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProviders">VerifiedaccessInstanceVerifiedAccessTrustProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_trust_provider_type`<sup>Required</sup> <a name="device_trust_provider_type" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType"></a>

```python
device_trust_provider_type: str
```

- *Type:* str

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

---

##### `user_trust_provider_type`<sup>Required</sup> <a name="user_trust_provider_type" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType"></a>

```python
user_trust_provider_type: str
```

- *Type:* str

---

##### `verified_access_trust_provider_id`<sup>Required</sup> <a name="verified_access_trust_provider_id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId"></a>

```python
verified_access_trust_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue"></a>

```python
internal_value: VerifiedaccessInstanceVerifiedAccessTrustProviders
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProviders">VerifiedaccessInstanceVerifiedAccessTrustProviders</a>

---



