# `ssmcontactsContact` Submodule <a name="`ssmcontactsContact` Submodule" id="@cdktf/provider-aws.ssmcontactsContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsContact <a name="SsmcontactsContact" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact aws_ssmcontacts_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContact(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias: str,
  type: str,
  display_name: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#alias SsmcontactsContact#alias}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#type SsmcontactsContact#type}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#display_name SsmcontactsContact#display_name}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#id SsmcontactsContact#id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#tags_all SsmcontactsContact#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.alias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#alias SsmcontactsContact#alias}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#type SsmcontactsContact#type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#display_name SsmcontactsContact#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#id SsmcontactsContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#tags_all SsmcontactsContact#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SsmcontactsContact resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContact.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContact.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContact.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SsmcontactsContact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmcontactsContact to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmcontactsContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsmcontactsContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsContactConfig <a name="SsmcontactsContactConfig" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias: str,
  type: str,
  display_name: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#alias SsmcontactsContact#alias}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#type SsmcontactsContact#type}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#display_name SsmcontactsContact#display_name}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#id SsmcontactsContact#id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#tags_all SsmcontactsContact#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#alias SsmcontactsContact#alias}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#type SsmcontactsContact#type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#display_name SsmcontactsContact#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#id SsmcontactsContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ssmcontactsContact.SsmcontactsContactConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/ssmcontacts_contact#tags_all SsmcontactsContact#tags_all}.

---



