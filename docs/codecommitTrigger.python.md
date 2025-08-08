# `codecommitTrigger` Submodule <a name="`codecommitTrigger` Submodule" id="@cdktf/provider-aws.codecommitTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecommitTrigger <a name="CodecommitTrigger" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger aws_codecommit_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecommit_trigger

codecommitTrigger.CodecommitTrigger(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository_name: str,
  trigger: typing.Union[IResolvable, typing.List[CodecommitTriggerTrigger]],
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#repository_name CodecommitTrigger#repository_name}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.trigger">trigger</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>]]</code> | trigger block. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#id CodecommitTrigger#id}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.repositoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#repository_name CodecommitTrigger#repository_name}.

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.trigger"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>]]

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#trigger CodecommitTrigger#trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#id CodecommitTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#region CodecommitTrigger#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.putTrigger">put_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_trigger` <a name="put_trigger" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.putTrigger"></a>

```python
def put_trigger(
  value: typing.Union[IResolvable, typing.List[CodecommitTriggerTrigger]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.putTrigger.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CodecommitTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codecommit_trigger

codecommitTrigger.CodecommitTrigger.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codecommit_trigger

codecommitTrigger.CodecommitTrigger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codecommit_trigger

codecommitTrigger.CodecommitTrigger.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import codecommit_trigger

codecommitTrigger.CodecommitTrigger.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CodecommitTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodecommitTrigger to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodecommitTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodecommitTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList">CodecommitTriggerTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.triggerInput">trigger_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.trigger"></a>

```python
trigger: CodecommitTriggerTriggerList
```

- *Type:* <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList">CodecommitTriggerTriggerList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.triggerInput"></a>

```python
trigger_input: typing.Union[IResolvable, typing.List[CodecommitTriggerTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodecommitTriggerConfig <a name="CodecommitTriggerConfig" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecommit_trigger

codecommitTrigger.CodecommitTriggerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository_name: str,
  trigger: typing.Union[IResolvable, typing.List[CodecommitTriggerTrigger]],
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#repository_name CodecommitTrigger#repository_name}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.trigger">trigger</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>]]</code> | trigger block. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#id CodecommitTrigger#id}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#repository_name CodecommitTrigger#repository_name}.

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.trigger"></a>

```python
trigger: typing.Union[IResolvable, typing.List[CodecommitTriggerTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>]]

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#trigger CodecommitTrigger#trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#id CodecommitTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#region CodecommitTrigger#region}

---

### CodecommitTriggerTrigger <a name="CodecommitTriggerTrigger" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecommit_trigger

codecommitTrigger.CodecommitTriggerTrigger(
  destination_arn: str,
  events: typing.List[str],
  name: str,
  branches: typing.List[str] = None,
  custom_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.destinationArn">destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#destination_arn CodecommitTrigger#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#events CodecommitTrigger#events}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#name CodecommitTrigger#name}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.branches">branches</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#branches CodecommitTrigger#branches}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#custom_data CodecommitTrigger#custom_data}. |

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#destination_arn CodecommitTrigger#destination_arn}.

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#events CodecommitTrigger#events}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#name CodecommitTrigger#name}.

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.branches"></a>

```python
branches: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#branches CodecommitTrigger#branches}.

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/codecommit_trigger#custom_data CodecommitTrigger#custom_data}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodecommitTriggerTriggerList <a name="CodecommitTriggerTriggerList" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecommit_trigger

codecommitTrigger.CodecommitTriggerTriggerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodecommitTriggerTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodecommitTriggerTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>]]

---


### CodecommitTriggerTriggerOutputReference <a name="CodecommitTriggerTriggerOutputReference" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecommit_trigger

codecommitTrigger.CodecommitTriggerTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resetBranches">reset_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resetCustomData">reset_custom_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branches` <a name="reset_branches" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resetBranches"></a>

```python
def reset_branches() -> None
```

##### `reset_custom_data` <a name="reset_custom_data" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resetCustomData"></a>

```python
def reset_custom_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.branchesInput">branches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.customDataInput">custom_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.destinationArnInput">destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.branches">branches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.customData">custom_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branches_input`<sup>Optional</sup> <a name="branches_input" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.branchesInput"></a>

```python
branches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_data_input`<sup>Optional</sup> <a name="custom_data_input" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.customDataInput"></a>

```python
custom_data_input: str
```

- *Type:* str

---

##### `destination_arn_input`<sup>Optional</sup> <a name="destination_arn_input" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.destinationArnInput"></a>

```python
destination_arn_input: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.branches"></a>

```python
branches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_data`<sup>Required</sup> <a name="custom_data" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodecommitTriggerTrigger]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>]

---



