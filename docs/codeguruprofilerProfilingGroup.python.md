# `codeguruprofilerProfilingGroup` Submodule <a name="`codeguruprofilerProfilingGroup` Submodule" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeguruprofilerProfilingGroup <a name="CodeguruprofilerProfilingGroup" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group aws_codeguruprofiler_profiling_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup(
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
  agent_orchestration_config: typing.Union[IResolvable, typing.List[CodeguruprofilerProfilingGroupAgentOrchestrationConfig]] = None,
  compute_platform: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.agentOrchestrationConfig">agent_orchestration_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>]]</code> | agent_orchestration_config block. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.computePlatform">compute_platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}.

---

##### `agent_orchestration_config`<sup>Optional</sup> <a name="agent_orchestration_config" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.agentOrchestrationConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>]]

agent_orchestration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#agent_orchestration_config CodeguruprofilerProfilingGroup#agent_orchestration_config}

---

##### `compute_platform`<sup>Optional</sup> <a name="compute_platform" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.computePlatform"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentOrchestrationConfig">put_agent_orchestration_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentOrchestrationConfig">reset_agent_orchestration_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform">reset_compute_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_agent_orchestration_config` <a name="put_agent_orchestration_config" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentOrchestrationConfig"></a>

```python
def put_agent_orchestration_config(
  value: typing.Union[IResolvable, typing.List[CodeguruprofilerProfilingGroupAgentOrchestrationConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentOrchestrationConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>]]

---

##### `reset_agent_orchestration_config` <a name="reset_agent_orchestration_config" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentOrchestrationConfig"></a>

```python
def reset_agent_orchestration_config() -> None
```

##### `reset_compute_platform` <a name="reset_compute_platform" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform"></a>

```python
def reset_compute_platform() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodeguruprofilerProfilingGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodeguruprofilerProfilingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodeguruprofilerProfilingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfig">agent_orchestration_config</a></code> | <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList">CodeguruprofilerProfilingGroupAgentOrchestrationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfigInput">agent_orchestration_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput">compute_platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform">compute_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_orchestration_config`<sup>Required</sup> <a name="agent_orchestration_config" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfig"></a>

```python
agent_orchestration_config: CodeguruprofilerProfilingGroupAgentOrchestrationConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList">CodeguruprofilerProfilingGroupAgentOrchestrationConfigList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `agent_orchestration_config_input`<sup>Optional</sup> <a name="agent_orchestration_config_input" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentOrchestrationConfigInput"></a>

```python
agent_orchestration_config_input: typing.Union[IResolvable, typing.List[CodeguruprofilerProfilingGroupAgentOrchestrationConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>]]

---

##### `compute_platform_input`<sup>Optional</sup> <a name="compute_platform_input" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput"></a>

```python
compute_platform_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `compute_platform`<sup>Required</sup> <a name="compute_platform" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform"></a>

```python
compute_platform: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodeguruprofilerProfilingGroupAgentOrchestrationConfig <a name="CodeguruprofilerProfilingGroupAgentOrchestrationConfig" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig(
  profiling_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig.property.profilingEnabled">profiling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#profiling_enabled CodeguruprofilerProfilingGroup#profiling_enabled}. |

---

##### `profiling_enabled`<sup>Required</sup> <a name="profiling_enabled" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig.property.profilingEnabled"></a>

```python
profiling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#profiling_enabled CodeguruprofilerProfilingGroup#profiling_enabled}.

---

### CodeguruprofilerProfilingGroupConfig <a name="CodeguruprofilerProfilingGroupConfig" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  agent_orchestration_config: typing.Union[IResolvable, typing.List[CodeguruprofilerProfilingGroupAgentOrchestrationConfig]] = None,
  compute_platform: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentOrchestrationConfig">agent_orchestration_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>]]</code> | agent_orchestration_config block. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform">compute_platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}.

---

##### `agent_orchestration_config`<sup>Optional</sup> <a name="agent_orchestration_config" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentOrchestrationConfig"></a>

```python
agent_orchestration_config: typing.Union[IResolvable, typing.List[CodeguruprofilerProfilingGroupAgentOrchestrationConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>]]

agent_orchestration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#agent_orchestration_config CodeguruprofilerProfilingGroup#agent_orchestration_config}

---

##### `compute_platform`<sup>Optional</sup> <a name="compute_platform" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform"></a>

```python
compute_platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodeguruprofilerProfilingGroupAgentOrchestrationConfigList <a name="CodeguruprofilerProfilingGroupAgentOrchestrationConfigList" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodeguruprofilerProfilingGroupAgentOrchestrationConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>]]

---


### CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference <a name="CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeguruprofiler_profiling_group

codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabledInput">profiling_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabled">profiling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `profiling_enabled_input`<sup>Optional</sup> <a name="profiling_enabled_input" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabledInput"></a>

```python
profiling_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `profiling_enabled`<sup>Required</sup> <a name="profiling_enabled" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabled"></a>

```python
profiling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodeguruprofilerProfilingGroupAgentOrchestrationConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentOrchestrationConfig">CodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>]

---



