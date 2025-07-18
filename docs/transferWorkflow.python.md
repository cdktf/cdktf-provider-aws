# `transferWorkflow` Submodule <a name="`transferWorkflow` Submodule" id="@cdktf/provider-aws.transferWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWorkflow <a name="TransferWorkflow" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow aws_transfer_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflow(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  steps: typing.Union[IResolvable, typing.List[TransferWorkflowSteps]],
  description: str = None,
  id: str = None,
  on_exception_steps: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionSteps]] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.steps">steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>]]</code> | steps block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#description TransferWorkflow#description}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#id TransferWorkflow#id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.onExceptionSteps">on_exception_steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>]]</code> | on_exception_steps block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags_all TransferWorkflow#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.steps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#steps TransferWorkflow#steps}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#description TransferWorkflow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#id TransferWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_exception_steps`<sup>Optional</sup> <a name="on_exception_steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.onExceptionSteps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>]]

on_exception_steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#on_exception_steps TransferWorkflow#on_exception_steps}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#region TransferWorkflow#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags_all TransferWorkflow#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putOnExceptionSteps">put_on_exception_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOnExceptionSteps">reset_on_exception_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_on_exception_steps` <a name="put_on_exception_steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putOnExceptionSteps"></a>

```python
def put_on_exception_steps(
  value: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionSteps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putOnExceptionSteps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>]]

---

##### `put_steps` <a name="put_steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putSteps"></a>

```python
def put_steps(
  value: typing.Union[IResolvable, typing.List[TransferWorkflowSteps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putSteps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_on_exception_steps` <a name="reset_on_exception_steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOnExceptionSteps"></a>

```python
def reset_on_exception_steps() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TransferWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TransferWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransferWorkflow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransferWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransferWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionSteps">on_exception_steps</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList">TransferWorkflowOnExceptionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList">TransferWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionStepsInput">on_exception_steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.stepsInput">steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `on_exception_steps`<sup>Required</sup> <a name="on_exception_steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionSteps"></a>

```python
on_exception_steps: TransferWorkflowOnExceptionStepsList
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList">TransferWorkflowOnExceptionStepsList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.steps"></a>

```python
steps: TransferWorkflowStepsList
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList">TransferWorkflowStepsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `on_exception_steps_input`<sup>Optional</sup> <a name="on_exception_steps_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionStepsInput"></a>

```python
on_exception_steps_input: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.stepsInput"></a>

```python
steps_input: typing.Union[IResolvable, typing.List[TransferWorkflowSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWorkflowConfig <a name="TransferWorkflowConfig" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  steps: typing.Union[IResolvable, typing.List[TransferWorkflowSteps]],
  description: str = None,
  id: str = None,
  on_exception_steps: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionSteps]] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.steps">steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>]]</code> | steps block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#description TransferWorkflow#description}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#id TransferWorkflow#id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.onExceptionSteps">on_exception_steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>]]</code> | on_exception_steps block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags_all TransferWorkflow#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.steps"></a>

```python
steps: typing.Union[IResolvable, typing.List[TransferWorkflowSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#steps TransferWorkflow#steps}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#description TransferWorkflow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#id TransferWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_exception_steps`<sup>Optional</sup> <a name="on_exception_steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.onExceptionSteps"></a>

```python
on_exception_steps: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>]]

on_exception_steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#on_exception_steps TransferWorkflow#on_exception_steps}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#region TransferWorkflow#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags_all TransferWorkflow#tags_all}.

---

### TransferWorkflowOnExceptionSteps <a name="TransferWorkflowOnExceptionSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionSteps(
  type: str,
  copy_step_details: TransferWorkflowOnExceptionStepsCopyStepDetails = None,
  custom_step_details: TransferWorkflowOnExceptionStepsCustomStepDetails = None,
  decrypt_step_details: TransferWorkflowOnExceptionStepsDecryptStepDetails = None,
  delete_step_details: TransferWorkflowOnExceptionStepsDeleteStepDetails = None,
  tag_step_details: TransferWorkflowOnExceptionStepsTagStepDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.copyStepDetails">copy_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | copy_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.customStepDetails">custom_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | custom_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.decryptStepDetails">decrypt_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | decrypt_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.deleteStepDetails">delete_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | delete_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.tagStepDetails">tag_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | tag_step_details block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `copy_step_details`<sup>Optional</sup> <a name="copy_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.copyStepDetails"></a>

```python
copy_step_details: TransferWorkflowOnExceptionStepsCopyStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

copy_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}

---

##### `custom_step_details`<sup>Optional</sup> <a name="custom_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.customStepDetails"></a>

```python
custom_step_details: TransferWorkflowOnExceptionStepsCustomStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

custom_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}

---

##### `decrypt_step_details`<sup>Optional</sup> <a name="decrypt_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.decryptStepDetails"></a>

```python
decrypt_step_details: TransferWorkflowOnExceptionStepsDecryptStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

decrypt_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}

---

##### `delete_step_details`<sup>Optional</sup> <a name="delete_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.deleteStepDetails"></a>

```python
delete_step_details: TransferWorkflowOnExceptionStepsDeleteStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

delete_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}

---

##### `tag_step_details`<sup>Optional</sup> <a name="tag_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.tagStepDetails"></a>

```python
tag_step_details: TransferWorkflowOnExceptionStepsTagStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

tag_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}

---

### TransferWorkflowOnExceptionStepsCopyStepDetails <a name="TransferWorkflowOnExceptionStepsCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails(
  destination_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation = None,
  name: str = None,
  overwrite_existing: str = None,
  source_file_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.destinationFileLocation">destination_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.overwriteExisting">overwrite_existing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `destination_file_location`<sup>Optional</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.destinationFileLocation"></a>

```python
destination_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `overwrite_existing`<sup>Optional</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.overwriteExisting"></a>

```python
overwrite_existing: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation(
  efs_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation = None,
  s3_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation">efs_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation">s3_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `efs_file_location`<sup>Optional</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```python
efs_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3_file_location`<sup>Optional</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```python
s3_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation(
  file_system_id: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation(
  bucket: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowOnExceptionStepsCustomStepDetails <a name="TransferWorkflowOnExceptionStepsCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails(
  name: str = None,
  source_file_location: str = None,
  target: str = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}.

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}.

---

### TransferWorkflowOnExceptionStepsDecryptStepDetails <a name="TransferWorkflowOnExceptionStepsDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails(
  type: str,
  destination_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation = None,
  name: str = None,
  overwrite_existing: str = None,
  source_file_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.destinationFileLocation">destination_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.overwriteExisting">overwrite_existing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `destination_file_location`<sup>Optional</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.destinationFileLocation"></a>

```python
destination_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `overwrite_existing`<sup>Optional</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.overwriteExisting"></a>

```python
overwrite_existing: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation(
  efs_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation = None,
  s3_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation">efs_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation">s3_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `efs_file_location`<sup>Optional</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```python
efs_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3_file_location`<sup>Optional</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```python
s3_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation(
  file_system_id: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation(
  bucket: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowOnExceptionStepsDeleteStepDetails <a name="TransferWorkflowOnExceptionStepsDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails(
  name: str = None,
  source_file_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowOnExceptionStepsTagStepDetails <a name="TransferWorkflowOnExceptionStepsTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails(
  name: str = None,
  source_file_location: str = None,
  tags: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionStepsTagStepDetailsTags]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>]]</code> | tags block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionStepsTagStepDetailsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowOnExceptionStepsTagStepDetailsTags <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}.

---

### TransferWorkflowSteps <a name="TransferWorkflowSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowSteps(
  type: str,
  copy_step_details: TransferWorkflowStepsCopyStepDetails = None,
  custom_step_details: TransferWorkflowStepsCustomStepDetails = None,
  decrypt_step_details: TransferWorkflowStepsDecryptStepDetails = None,
  delete_step_details: TransferWorkflowStepsDeleteStepDetails = None,
  tag_step_details: TransferWorkflowStepsTagStepDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.copyStepDetails">copy_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | copy_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.customStepDetails">custom_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | custom_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.decryptStepDetails">decrypt_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | decrypt_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.deleteStepDetails">delete_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | delete_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.tagStepDetails">tag_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | tag_step_details block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `copy_step_details`<sup>Optional</sup> <a name="copy_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.copyStepDetails"></a>

```python
copy_step_details: TransferWorkflowStepsCopyStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

copy_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}

---

##### `custom_step_details`<sup>Optional</sup> <a name="custom_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.customStepDetails"></a>

```python
custom_step_details: TransferWorkflowStepsCustomStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

custom_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}

---

##### `decrypt_step_details`<sup>Optional</sup> <a name="decrypt_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.decryptStepDetails"></a>

```python
decrypt_step_details: TransferWorkflowStepsDecryptStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

decrypt_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}

---

##### `delete_step_details`<sup>Optional</sup> <a name="delete_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.deleteStepDetails"></a>

```python
delete_step_details: TransferWorkflowStepsDeleteStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

delete_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}

---

##### `tag_step_details`<sup>Optional</sup> <a name="tag_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.tagStepDetails"></a>

```python
tag_step_details: TransferWorkflowStepsTagStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

tag_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}

---

### TransferWorkflowStepsCopyStepDetails <a name="TransferWorkflowStepsCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsCopyStepDetails(
  destination_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation = None,
  name: str = None,
  overwrite_existing: str = None,
  source_file_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.destinationFileLocation">destination_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.overwriteExisting">overwrite_existing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `destination_file_location`<sup>Optional</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.destinationFileLocation"></a>

```python
destination_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `overwrite_existing`<sup>Optional</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.overwriteExisting"></a>

```python
overwrite_existing: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation(
  efs_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation = None,
  s3_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation">efs_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation">s3_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `efs_file_location`<sup>Optional</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```python
efs_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3_file_location`<sup>Optional</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```python
s3_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation(
  file_system_id: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation(
  bucket: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowStepsCustomStepDetails <a name="TransferWorkflowStepsCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsCustomStepDetails(
  name: str = None,
  source_file_location: str = None,
  target: str = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}.

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}.

---

### TransferWorkflowStepsDecryptStepDetails <a name="TransferWorkflowStepsDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsDecryptStepDetails(
  type: str,
  destination_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation = None,
  name: str = None,
  overwrite_existing: str = None,
  source_file_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.destinationFileLocation">destination_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.overwriteExisting">overwrite_existing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `destination_file_location`<sup>Optional</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.destinationFileLocation"></a>

```python
destination_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `overwrite_existing`<sup>Optional</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.overwriteExisting"></a>

```python
overwrite_existing: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation(
  efs_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation = None,
  s3_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation">efs_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation">s3_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `efs_file_location`<sup>Optional</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```python
efs_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `s3_file_location`<sup>Optional</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```python
s3_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation(
  file_system_id: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation(
  bucket: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowStepsDeleteStepDetails <a name="TransferWorkflowStepsDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsDeleteStepDetails(
  name: str = None,
  source_file_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowStepsTagStepDetails <a name="TransferWorkflowStepsTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsTagStepDetails(
  name: str = None,
  source_file_location: str = None,
  tags: typing.Union[IResolvable, typing.List[TransferWorkflowStepsTagStepDetailsTags]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>]]</code> | tags block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[TransferWorkflowStepsTagStepDetailsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowStepsTagStepDetailsTags <a name="TransferWorkflowStepsTagStepDetailsTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsTagStepDetailsTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">reset_file_system_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_system_id` <a name="reset_file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```python
def reset_file_system_id() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">put_efs_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">put_s3_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">reset_efs_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">reset_s3_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_efs_file_location` <a name="put_efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```python
def put_efs_file_location(
  file_system_id: str = None,
  path: str = None
) -> None
```

###### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

##### `put_s3_file_location` <a name="put_s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```python
def put_s3_file_location(
  bucket: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

##### `reset_efs_file_location` <a name="reset_efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```python
def reset_efs_file_location() -> None
```

##### `reset_s3_file_location` <a name="reset_s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```python
def reset_s3_file_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efs_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efs_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `efs_file_location`<sup>Required</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```python
efs_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3_file_location`<sup>Required</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```python
s3_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efs_file_location_input`<sup>Optional</sup> <a name="efs_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```python
efs_file_location_input: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3_file_location_input`<sup>Optional</sup> <a name="s3_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```python
s3_file_location_input: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation">put_destination_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetDestinationFileLocation">reset_destination_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetOverwriteExisting">reset_overwrite_existing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetSourceFileLocation">reset_source_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_file_location` <a name="put_destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation"></a>

```python
def put_destination_file_location(
  efs_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation = None,
  s3_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation = None
) -> None
```

###### `efs_file_location`<sup>Optional</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.efsFileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

###### `s3_file_location`<sup>Optional</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.s3FileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

##### `reset_destination_file_location` <a name="reset_destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetDestinationFileLocation"></a>

```python
def reset_destination_file_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_overwrite_existing` <a name="reset_overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetOverwriteExisting"></a>

```python
def reset_overwrite_existing() -> None
```

##### `reset_source_file_location` <a name="reset_source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetSourceFileLocation"></a>

```python
def reset_source_file_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocation">destination_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput">destination_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExistingInput">overwrite_existing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput">source_file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExisting">overwrite_existing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_file_location`<sup>Required</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocation"></a>

```python
destination_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destination_file_location_input`<sup>Optional</sup> <a name="destination_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```python
destination_file_location_input: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `overwrite_existing_input`<sup>Optional</sup> <a name="overwrite_existing_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExistingInput"></a>

```python
overwrite_existing_input: str
```

- *Type:* str

---

##### `source_file_location_input`<sup>Optional</sup> <a name="source_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```python
source_file_location_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `overwrite_existing`<sup>Required</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExisting"></a>

```python
overwrite_existing: str
```

- *Type:* str

---

##### `source_file_location`<sup>Required</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowOnExceptionStepsCopyStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---


### TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetSourceFileLocation">reset_source_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_source_file_location` <a name="reset_source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetSourceFileLocation"></a>

```python
def reset_source_file_location() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput">source_file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_file_location_input`<sup>Optional</sup> <a name="source_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```python
source_file_location_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_file_location`<sup>Required</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowOnExceptionStepsCustomStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">reset_file_system_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_system_id` <a name="reset_file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```python
def reset_file_system_id() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">put_efs_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">put_s3_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">reset_efs_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">reset_s3_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_efs_file_location` <a name="put_efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```python
def put_efs_file_location(
  file_system_id: str = None,
  path: str = None
) -> None
```

###### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

##### `put_s3_file_location` <a name="put_s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```python
def put_s3_file_location(
  bucket: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

##### `reset_efs_file_location` <a name="reset_efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```python
def reset_efs_file_location() -> None
```

##### `reset_s3_file_location` <a name="reset_s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```python
def reset_s3_file_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efs_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efs_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `efs_file_location`<sup>Required</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```python
efs_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3_file_location`<sup>Required</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```python
s3_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efs_file_location_input`<sup>Optional</sup> <a name="efs_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```python
efs_file_location_input: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3_file_location_input`<sup>Optional</sup> <a name="s3_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```python
s3_file_location_input: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation">put_destination_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation">reset_destination_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetOverwriteExisting">reset_overwrite_existing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetSourceFileLocation">reset_source_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_file_location` <a name="put_destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation"></a>

```python
def put_destination_file_location(
  efs_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation = None,
  s3_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation = None
) -> None
```

###### `efs_file_location`<sup>Optional</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.efsFileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

###### `s3_file_location`<sup>Optional</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.s3FileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

##### `reset_destination_file_location` <a name="reset_destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation"></a>

```python
def reset_destination_file_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_overwrite_existing` <a name="reset_overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetOverwriteExisting"></a>

```python
def reset_overwrite_existing() -> None
```

##### `reset_source_file_location` <a name="reset_source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetSourceFileLocation"></a>

```python
def reset_source_file_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocation">destination_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput">destination_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput">overwrite_existing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput">source_file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExisting">overwrite_existing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_file_location`<sup>Required</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocation"></a>

```python
destination_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destination_file_location_input`<sup>Optional</sup> <a name="destination_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```python
destination_file_location_input: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `overwrite_existing_input`<sup>Optional</sup> <a name="overwrite_existing_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput"></a>

```python
overwrite_existing_input: str
```

- *Type:* str

---

##### `source_file_location_input`<sup>Optional</sup> <a name="source_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```python
source_file_location_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `overwrite_existing`<sup>Required</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExisting"></a>

```python
overwrite_existing: str
```

- *Type:* str

---

##### `source_file_location`<sup>Required</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowOnExceptionStepsDecryptStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---


### TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetSourceFileLocation">reset_source_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_source_file_location` <a name="reset_source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetSourceFileLocation"></a>

```python
def reset_source_file_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput">source_file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_file_location_input`<sup>Optional</sup> <a name="source_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```python
source_file_location_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_file_location`<sup>Required</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowOnExceptionStepsDeleteStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---


### TransferWorkflowOnExceptionStepsList <a name="TransferWorkflowOnExceptionStepsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TransferWorkflowOnExceptionStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>]]

---


### TransferWorkflowOnExceptionStepsOutputReference <a name="TransferWorkflowOnExceptionStepsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails">put_copy_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails">put_custom_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails">put_decrypt_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails">put_delete_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails">put_tag_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCopyStepDetails">reset_copy_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCustomStepDetails">reset_custom_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDecryptStepDetails">reset_decrypt_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDeleteStepDetails">reset_delete_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetTagStepDetails">reset_tag_step_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_copy_step_details` <a name="put_copy_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails"></a>

```python
def put_copy_step_details(
  destination_file_location: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation = None,
  name: str = None,
  overwrite_existing: str = None,
  source_file_location: str = None
) -> None
```

###### `destination_file_location`<sup>Optional</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails.parameter.destinationFileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

###### `overwrite_existing`<sup>Optional</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails.parameter.overwriteExisting"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

###### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails.parameter.sourceFileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `put_custom_step_details` <a name="put_custom_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails"></a>

```python
def put_custom_step_details(
  name: str = None,
  source_file_location: str = None,
  target: str = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

###### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails.parameter.sourceFileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}.

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}.

---

##### `put_decrypt_step_details` <a name="put_decrypt_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails"></a>

```python
def put_decrypt_step_details(
  type: str,
  destination_file_location: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation = None,
  name: str = None,
  overwrite_existing: str = None,
  source_file_location: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

###### `destination_file_location`<sup>Optional</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails.parameter.destinationFileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

###### `overwrite_existing`<sup>Optional</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails.parameter.overwriteExisting"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

###### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails.parameter.sourceFileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `put_delete_step_details` <a name="put_delete_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails"></a>

```python
def put_delete_step_details(
  name: str = None,
  source_file_location: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

###### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails.parameter.sourceFileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `put_tag_step_details` <a name="put_tag_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails"></a>

```python
def put_tag_step_details(
  name: str = None,
  source_file_location: str = None,
  tags: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionStepsTagStepDetailsTags]] = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

###### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails.parameter.sourceFileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

##### `reset_copy_step_details` <a name="reset_copy_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCopyStepDetails"></a>

```python
def reset_copy_step_details() -> None
```

##### `reset_custom_step_details` <a name="reset_custom_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCustomStepDetails"></a>

```python
def reset_custom_step_details() -> None
```

##### `reset_decrypt_step_details` <a name="reset_decrypt_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDecryptStepDetails"></a>

```python
def reset_decrypt_step_details() -> None
```

##### `reset_delete_step_details` <a name="reset_delete_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDeleteStepDetails"></a>

```python
def reset_delete_step_details() -> None
```

##### `reset_tag_step_details` <a name="reset_tag_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetTagStepDetails"></a>

```python
def reset_tag_step_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetails">copy_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetails">custom_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetails">decrypt_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetails">delete_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetails">tag_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference">TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetailsInput">copy_step_details_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetailsInput">custom_step_details_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetailsInput">decrypt_step_details_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetailsInput">delete_step_details_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetailsInput">tag_step_details_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `copy_step_details`<sup>Required</sup> <a name="copy_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetails"></a>

```python
copy_step_details: TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference</a>

---

##### `custom_step_details`<sup>Required</sup> <a name="custom_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetails"></a>

```python
custom_step_details: TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference</a>

---

##### `decrypt_step_details`<sup>Required</sup> <a name="decrypt_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetails"></a>

```python
decrypt_step_details: TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference</a>

---

##### `delete_step_details`<sup>Required</sup> <a name="delete_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetails"></a>

```python
delete_step_details: TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference</a>

---

##### `tag_step_details`<sup>Required</sup> <a name="tag_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetails"></a>

```python
tag_step_details: TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference">TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference</a>

---

##### `copy_step_details_input`<sup>Optional</sup> <a name="copy_step_details_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetailsInput"></a>

```python
copy_step_details_input: TransferWorkflowOnExceptionStepsCopyStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---

##### `custom_step_details_input`<sup>Optional</sup> <a name="custom_step_details_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetailsInput"></a>

```python
custom_step_details_input: TransferWorkflowOnExceptionStepsCustomStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---

##### `decrypt_step_details_input`<sup>Optional</sup> <a name="decrypt_step_details_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetailsInput"></a>

```python
decrypt_step_details_input: TransferWorkflowOnExceptionStepsDecryptStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---

##### `delete_step_details_input`<sup>Optional</sup> <a name="delete_step_details_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetailsInput"></a>

```python
delete_step_details_input: TransferWorkflowOnExceptionStepsDeleteStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---

##### `tag_step_details_input`<sup>Optional</sup> <a name="tag_step_details_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetailsInput"></a>

```python
tag_step_details_input: TransferWorkflowOnExceptionStepsTagStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TransferWorkflowOnExceptionSteps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps">TransferWorkflowOnExceptionSteps</a>]

---


### TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetSourceFileLocation">reset_source_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionStepsTagStepDetailsTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>]]

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_source_file_location` <a name="reset_source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetSourceFileLocation"></a>

```python
def reset_source_file_location() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList">TransferWorkflowOnExceptionStepsTagStepDetailsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocationInput">source_file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tags"></a>

```python
tags: TransferWorkflowOnExceptionStepsTagStepDetailsTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList">TransferWorkflowOnExceptionStepsTagStepDetailsTagsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_file_location_input`<sup>Optional</sup> <a name="source_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```python
source_file_location_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionStepsTagStepDetailsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_file_location`<sup>Required</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowOnExceptionStepsTagStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---


### TransferWorkflowOnExceptionStepsTagStepDetailsTagsList <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTagsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TransferWorkflowOnExceptionStepsTagStepDetailsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>]]

---


### TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TransferWorkflowOnExceptionStepsTagStepDetailsTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags">TransferWorkflowOnExceptionStepsTagStepDetailsTags</a>]

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">reset_file_system_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_system_id` <a name="reset_file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```python
def reset_file_system_id() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">put_efs_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">put_s3_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">reset_efs_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">reset_s3_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_efs_file_location` <a name="put_efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```python
def put_efs_file_location(
  file_system_id: str = None,
  path: str = None
) -> None
```

###### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

##### `put_s3_file_location` <a name="put_s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```python
def put_s3_file_location(
  bucket: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

##### `reset_efs_file_location` <a name="reset_efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```python
def reset_efs_file_location() -> None
```

##### `reset_s3_file_location` <a name="reset_s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```python
def reset_s3_file_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efs_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efs_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `efs_file_location`<sup>Required</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```python
efs_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3_file_location`<sup>Required</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```python
s3_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efs_file_location_input`<sup>Optional</sup> <a name="efs_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```python
efs_file_location_input: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3_file_location_input`<sup>Optional</sup> <a name="s3_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```python
s3_file_location_input: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsOutputReference <a name="TransferWorkflowStepsCopyStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation">put_destination_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetDestinationFileLocation">reset_destination_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetOverwriteExisting">reset_overwrite_existing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetSourceFileLocation">reset_source_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_file_location` <a name="put_destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation"></a>

```python
def put_destination_file_location(
  efs_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation = None,
  s3_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation = None
) -> None
```

###### `efs_file_location`<sup>Optional</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.efsFileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

###### `s3_file_location`<sup>Optional</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.s3FileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

##### `reset_destination_file_location` <a name="reset_destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetDestinationFileLocation"></a>

```python
def reset_destination_file_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_overwrite_existing` <a name="reset_overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetOverwriteExisting"></a>

```python
def reset_overwrite_existing() -> None
```

##### `reset_source_file_location` <a name="reset_source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetSourceFileLocation"></a>

```python
def reset_source_file_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocation">destination_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput">destination_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExistingInput">overwrite_existing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput">source_file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExisting">overwrite_existing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_file_location`<sup>Required</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocation"></a>

```python
destination_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destination_file_location_input`<sup>Optional</sup> <a name="destination_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```python
destination_file_location_input: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `overwrite_existing_input`<sup>Optional</sup> <a name="overwrite_existing_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExistingInput"></a>

```python
overwrite_existing_input: str
```

- *Type:* str

---

##### `source_file_location_input`<sup>Optional</sup> <a name="source_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```python
source_file_location_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `overwrite_existing`<sup>Required</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExisting"></a>

```python
overwrite_existing: str
```

- *Type:* str

---

##### `source_file_location`<sup>Required</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowStepsCopyStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---


### TransferWorkflowStepsCustomStepDetailsOutputReference <a name="TransferWorkflowStepsCustomStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetSourceFileLocation">reset_source_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_source_file_location` <a name="reset_source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetSourceFileLocation"></a>

```python
def reset_source_file_location() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput">source_file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_file_location_input`<sup>Optional</sup> <a name="source_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```python
source_file_location_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_file_location`<sup>Required</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowStepsCustomStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">reset_file_system_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_system_id` <a name="reset_file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```python
def reset_file_system_id() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">put_efs_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">put_s3_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">reset_efs_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">reset_s3_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_efs_file_location` <a name="put_efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```python
def put_efs_file_location(
  file_system_id: str = None,
  path: str = None
) -> None
```

###### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

##### `put_s3_file_location` <a name="put_s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```python
def put_s3_file_location(
  bucket: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

##### `reset_efs_file_location` <a name="reset_efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```python
def reset_efs_file_location() -> None
```

##### `reset_s3_file_location` <a name="reset_s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```python
def reset_s3_file_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">efs_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">s3_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">efs_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">s3_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `efs_file_location`<sup>Required</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```python
efs_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `s3_file_location`<sup>Required</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```python
s3_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `efs_file_location_input`<sup>Optional</sup> <a name="efs_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```python
efs_file_location_input: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `s3_file_location_input`<sup>Optional</sup> <a name="s3_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```python
s3_file_location_input: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation">put_destination_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation">reset_destination_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetOverwriteExisting">reset_overwrite_existing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetSourceFileLocation">reset_source_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_file_location` <a name="put_destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation"></a>

```python
def put_destination_file_location(
  efs_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation = None,
  s3_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation = None
) -> None
```

###### `efs_file_location`<sup>Optional</sup> <a name="efs_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.efsFileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

###### `s3_file_location`<sup>Optional</sup> <a name="s3_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.s3FileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

##### `reset_destination_file_location` <a name="reset_destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation"></a>

```python
def reset_destination_file_location() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_overwrite_existing` <a name="reset_overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetOverwriteExisting"></a>

```python
def reset_overwrite_existing() -> None
```

##### `reset_source_file_location` <a name="reset_source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetSourceFileLocation"></a>

```python
def reset_source_file_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocation">destination_file_location</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput">destination_file_location_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput">overwrite_existing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput">source_file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExisting">overwrite_existing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_file_location`<sup>Required</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocation"></a>

```python
destination_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference</a>

---

##### `destination_file_location_input`<sup>Optional</sup> <a name="destination_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```python
destination_file_location_input: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `overwrite_existing_input`<sup>Optional</sup> <a name="overwrite_existing_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput"></a>

```python
overwrite_existing_input: str
```

- *Type:* str

---

##### `source_file_location_input`<sup>Optional</sup> <a name="source_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```python
source_file_location_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `overwrite_existing`<sup>Required</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExisting"></a>

```python
overwrite_existing: str
```

- *Type:* str

---

##### `source_file_location`<sup>Required</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowStepsDecryptStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---


### TransferWorkflowStepsDeleteStepDetailsOutputReference <a name="TransferWorkflowStepsDeleteStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetSourceFileLocation">reset_source_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_source_file_location` <a name="reset_source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetSourceFileLocation"></a>

```python
def reset_source_file_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput">source_file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_file_location_input`<sup>Optional</sup> <a name="source_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```python
source_file_location_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_file_location`<sup>Required</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowStepsDeleteStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---


### TransferWorkflowStepsList <a name="TransferWorkflowStepsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TransferWorkflowStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TransferWorkflowSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>]]

---


### TransferWorkflowStepsOutputReference <a name="TransferWorkflowStepsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails">put_copy_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails">put_custom_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails">put_decrypt_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails">put_delete_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails">put_tag_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCopyStepDetails">reset_copy_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCustomStepDetails">reset_custom_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDecryptStepDetails">reset_decrypt_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDeleteStepDetails">reset_delete_step_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetTagStepDetails">reset_tag_step_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_copy_step_details` <a name="put_copy_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails"></a>

```python
def put_copy_step_details(
  destination_file_location: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation = None,
  name: str = None,
  overwrite_existing: str = None,
  source_file_location: str = None
) -> None
```

###### `destination_file_location`<sup>Optional</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails.parameter.destinationFileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

###### `overwrite_existing`<sup>Optional</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails.parameter.overwriteExisting"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

###### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails.parameter.sourceFileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `put_custom_step_details` <a name="put_custom_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails"></a>

```python
def put_custom_step_details(
  name: str = None,
  source_file_location: str = None,
  target: str = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

###### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails.parameter.sourceFileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}.

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}.

---

##### `put_decrypt_step_details` <a name="put_decrypt_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails"></a>

```python
def put_decrypt_step_details(
  type: str,
  destination_file_location: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation = None,
  name: str = None,
  overwrite_existing: str = None,
  source_file_location: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

###### `destination_file_location`<sup>Optional</sup> <a name="destination_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails.parameter.destinationFileLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

###### `overwrite_existing`<sup>Optional</sup> <a name="overwrite_existing" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails.parameter.overwriteExisting"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

###### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails.parameter.sourceFileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `put_delete_step_details` <a name="put_delete_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails"></a>

```python
def put_delete_step_details(
  name: str = None,
  source_file_location: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

###### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails.parameter.sourceFileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `put_tag_step_details` <a name="put_tag_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails"></a>

```python
def put_tag_step_details(
  name: str = None,
  source_file_location: str = None,
  tags: typing.Union[IResolvable, typing.List[TransferWorkflowStepsTagStepDetailsTags]] = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

###### `source_file_location`<sup>Optional</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails.parameter.sourceFileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

##### `reset_copy_step_details` <a name="reset_copy_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCopyStepDetails"></a>

```python
def reset_copy_step_details() -> None
```

##### `reset_custom_step_details` <a name="reset_custom_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCustomStepDetails"></a>

```python
def reset_custom_step_details() -> None
```

##### `reset_decrypt_step_details` <a name="reset_decrypt_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDecryptStepDetails"></a>

```python
def reset_decrypt_step_details() -> None
```

##### `reset_delete_step_details` <a name="reset_delete_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDeleteStepDetails"></a>

```python
def reset_delete_step_details() -> None
```

##### `reset_tag_step_details` <a name="reset_tag_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetTagStepDetails"></a>

```python
def reset_tag_step_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetails">copy_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference">TransferWorkflowStepsCopyStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetails">custom_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference">TransferWorkflowStepsCustomStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetails">decrypt_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference">TransferWorkflowStepsDecryptStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetails">delete_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference">TransferWorkflowStepsDeleteStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetails">tag_step_details</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference">TransferWorkflowStepsTagStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetailsInput">copy_step_details_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetailsInput">custom_step_details_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetailsInput">decrypt_step_details_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetailsInput">delete_step_details_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetailsInput">tag_step_details_input</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `copy_step_details`<sup>Required</sup> <a name="copy_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetails"></a>

```python
copy_step_details: TransferWorkflowStepsCopyStepDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference">TransferWorkflowStepsCopyStepDetailsOutputReference</a>

---

##### `custom_step_details`<sup>Required</sup> <a name="custom_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetails"></a>

```python
custom_step_details: TransferWorkflowStepsCustomStepDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference">TransferWorkflowStepsCustomStepDetailsOutputReference</a>

---

##### `decrypt_step_details`<sup>Required</sup> <a name="decrypt_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetails"></a>

```python
decrypt_step_details: TransferWorkflowStepsDecryptStepDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference">TransferWorkflowStepsDecryptStepDetailsOutputReference</a>

---

##### `delete_step_details`<sup>Required</sup> <a name="delete_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetails"></a>

```python
delete_step_details: TransferWorkflowStepsDeleteStepDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference">TransferWorkflowStepsDeleteStepDetailsOutputReference</a>

---

##### `tag_step_details`<sup>Required</sup> <a name="tag_step_details" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetails"></a>

```python
tag_step_details: TransferWorkflowStepsTagStepDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference">TransferWorkflowStepsTagStepDetailsOutputReference</a>

---

##### `copy_step_details_input`<sup>Optional</sup> <a name="copy_step_details_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetailsInput"></a>

```python
copy_step_details_input: TransferWorkflowStepsCopyStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---

##### `custom_step_details_input`<sup>Optional</sup> <a name="custom_step_details_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetailsInput"></a>

```python
custom_step_details_input: TransferWorkflowStepsCustomStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---

##### `decrypt_step_details_input`<sup>Optional</sup> <a name="decrypt_step_details_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetailsInput"></a>

```python
decrypt_step_details_input: TransferWorkflowStepsDecryptStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---

##### `delete_step_details_input`<sup>Optional</sup> <a name="delete_step_details_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetailsInput"></a>

```python
delete_step_details_input: TransferWorkflowStepsDeleteStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---

##### `tag_step_details_input`<sup>Optional</sup> <a name="tag_step_details_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetailsInput"></a>

```python
tag_step_details_input: TransferWorkflowStepsTagStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TransferWorkflowSteps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps">TransferWorkflowSteps</a>]

---


### TransferWorkflowStepsTagStepDetailsOutputReference <a name="TransferWorkflowStepsTagStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetSourceFileLocation">reset_source_file_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[TransferWorkflowStepsTagStepDetailsTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>]]

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_source_file_location` <a name="reset_source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetSourceFileLocation"></a>

```python
def reset_source_file_location() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList">TransferWorkflowStepsTagStepDetailsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocationInput">source_file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocation">source_file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tags"></a>

```python
tags: TransferWorkflowStepsTagStepDetailsTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList">TransferWorkflowStepsTagStepDetailsTagsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_file_location_input`<sup>Optional</sup> <a name="source_file_location_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```python
source_file_location_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[TransferWorkflowStepsTagStepDetailsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_file_location`<sup>Required</sup> <a name="source_file_location" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocation"></a>

```python
source_file_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.internalValue"></a>

```python
internal_value: TransferWorkflowStepsTagStepDetails
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---


### TransferWorkflowStepsTagStepDetailsTagsList <a name="TransferWorkflowStepsTagStepDetailsTagsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TransferWorkflowStepsTagStepDetailsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TransferWorkflowStepsTagStepDetailsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>]]

---


### TransferWorkflowStepsTagStepDetailsTagsOutputReference <a name="TransferWorkflowStepsTagStepDetailsTagsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_workflow

transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TransferWorkflowStepsTagStepDetailsTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags">TransferWorkflowStepsTagStepDetailsTags</a>]

---



