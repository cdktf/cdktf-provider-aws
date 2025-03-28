# `codepipeline` Submodule <a name="`codepipeline` Submodule" id="@cdktf/provider-aws.codepipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Codepipeline <a name="Codepipeline" id="@cdktf/provider-aws.codepipeline.Codepipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline aws_codepipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.Codepipeline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifact_store: typing.Union[IResolvable, typing.List[CodepipelineArtifactStore]],
  name: str,
  role_arn: str,
  stage: typing.Union[IResolvable, typing.List[CodepipelineStage]],
  execution_mode: str = None,
  id: str = None,
  pipeline_type: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  trigger: typing.Union[IResolvable, typing.List[CodepipelineTrigger]] = None,
  variable: typing.Union[IResolvable, typing.List[CodepipelineVariable]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.artifactStore">artifact_store</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]]</code> | artifact_store block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.stage">stage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]</code> | stage block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.executionMode">execution_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.pipelineType">pipeline_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#tags Codepipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.trigger">trigger</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>]]</code> | trigger block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.variable">variable</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]</code> | variable block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_store`<sup>Required</sup> <a name="artifact_store" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.artifactStore"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]]

artifact_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#artifact_store Codepipeline#artifact_store}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.stage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#stage Codepipeline#stage}

---

##### `execution_mode`<sup>Optional</sup> <a name="execution_mode" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.executionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipeline_type`<sup>Optional</sup> <a name="pipeline_type" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.pipelineType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#tags Codepipeline#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}.

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.trigger"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>]]

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#trigger Codepipeline#trigger}

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.variable"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#variable Codepipeline#variable}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore">put_artifact_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putStage">put_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putTrigger">put_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putVariable">put_variable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetExecutionMode">reset_execution_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetPipelineType">reset_pipeline_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTrigger">reset_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetVariable">reset_variable</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.Codepipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codepipeline.Codepipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.codepipeline.Codepipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codepipeline.Codepipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codepipeline.Codepipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.codepipeline.Codepipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codepipeline.Codepipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.codepipeline.Codepipeline.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.codepipeline.Codepipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.Codepipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_artifact_store` <a name="put_artifact_store" id="@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore"></a>

```python
def put_artifact_store(
  value: typing.Union[IResolvable, typing.List[CodepipelineArtifactStore]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putArtifactStore.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]]

---

##### `put_stage` <a name="put_stage" id="@cdktf/provider-aws.codepipeline.Codepipeline.putStage"></a>

```python
def put_stage(
  value: typing.Union[IResolvable, typing.List[CodepipelineStage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putStage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]

---

##### `put_trigger` <a name="put_trigger" id="@cdktf/provider-aws.codepipeline.Codepipeline.putTrigger"></a>

```python
def put_trigger(
  value: typing.Union[IResolvable, typing.List[CodepipelineTrigger]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putTrigger.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>]]

---

##### `put_variable` <a name="put_variable" id="@cdktf/provider-aws.codepipeline.Codepipeline.putVariable"></a>

```python
def put_variable(
  value: typing.Union[IResolvable, typing.List[CodepipelineVariable]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putVariable.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]

---

##### `reset_execution_mode` <a name="reset_execution_mode" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetExecutionMode"></a>

```python
def reset_execution_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pipeline_type` <a name="reset_pipeline_type" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetPipelineType"></a>

```python
def reset_pipeline_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_trigger` <a name="reset_trigger" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetTrigger"></a>

```python
def reset_trigger() -> None
```

##### `reset_variable` <a name="reset_variable" id="@cdktf/provider-aws.codepipeline.Codepipeline.resetVariable"></a>

```python
def reset_variable() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Codepipeline resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.Codepipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.Codepipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.Codepipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipeline.Codepipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.Codepipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Codepipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Codepipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Codepipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Codepipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStore">artifact_store</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList">CodepipelineArtifactStoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.stage">stage</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList">CodepipelineStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList">CodepipelineTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.triggerAll">trigger_all</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList">CodepipelineTriggerAllList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList">CodepipelineVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStoreInput">artifact_store_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.executionModeInput">execution_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineTypeInput">pipeline_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.stageInput">stage_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.triggerInput">trigger_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.variableInput">variable_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.executionMode">execution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineType">pipeline_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `artifact_store`<sup>Required</sup> <a name="artifact_store" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStore"></a>

```python
artifact_store: CodepipelineArtifactStoreList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList">CodepipelineArtifactStoreList</a>

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.stage"></a>

```python
stage: CodepipelineStageList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList">CodepipelineStageList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.trigger"></a>

```python
trigger: CodepipelineTriggerList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList">CodepipelineTriggerList</a>

---

##### `trigger_all`<sup>Required</sup> <a name="trigger_all" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.triggerAll"></a>

```python
trigger_all: CodepipelineTriggerAllList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList">CodepipelineTriggerAllList</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.variable"></a>

```python
variable: CodepipelineVariableList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList">CodepipelineVariableList</a>

---

##### `artifact_store_input`<sup>Optional</sup> <a name="artifact_store_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStoreInput"></a>

```python
artifact_store_input: typing.Union[IResolvable, typing.List[CodepipelineArtifactStore]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]]

---

##### `execution_mode_input`<sup>Optional</sup> <a name="execution_mode_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.executionModeInput"></a>

```python
execution_mode_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pipeline_type_input`<sup>Optional</sup> <a name="pipeline_type_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineTypeInput"></a>

```python
pipeline_type_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.stageInput"></a>

```python
stage_input: typing.Union[IResolvable, typing.List[CodepipelineStage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.triggerInput"></a>

```python
trigger_input: typing.Union[IResolvable, typing.List[CodepipelineTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>]]

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.variableInput"></a>

```python
variable_input: typing.Union[IResolvable, typing.List[CodepipelineVariable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]

---

##### `execution_mode`<sup>Required</sup> <a name="execution_mode" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.executionMode"></a>

```python
execution_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pipeline_type`<sup>Required</sup> <a name="pipeline_type" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineType"></a>

```python
pipeline_type: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineArtifactStore <a name="CodepipelineArtifactStore" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineArtifactStore(
  location: str,
  type: str,
  encryption_key: CodepipelineArtifactStoreEncryptionKey = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#location Codepipeline#location}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#type Codepipeline#type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#region Codepipeline#region}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#location Codepipeline#location}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#type Codepipeline#type}.

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.encryptionKey"></a>

```python
encryption_key: CodepipelineArtifactStoreEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#encryption_key Codepipeline#encryption_key}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#region Codepipeline#region}.

---

### CodepipelineArtifactStoreEncryptionKey <a name="CodepipelineArtifactStoreEncryptionKey" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineArtifactStoreEncryptionKey(
  id: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#type Codepipeline#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#type Codepipeline#type}.

---

### CodepipelineConfig <a name="CodepipelineConfig" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifact_store: typing.Union[IResolvable, typing.List[CodepipelineArtifactStore]],
  name: str,
  role_arn: str,
  stage: typing.Union[IResolvable, typing.List[CodepipelineStage]],
  execution_mode: str = None,
  id: str = None,
  pipeline_type: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  trigger: typing.Union[IResolvable, typing.List[CodepipelineTrigger]] = None,
  variable: typing.Union[IResolvable, typing.List[CodepipelineVariable]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.artifactStore">artifact_store</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]]</code> | artifact_store block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.stage">stage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]</code> | stage block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.executionMode">execution_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.pipelineType">pipeline_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#tags Codepipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.trigger">trigger</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>]]</code> | trigger block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.variable">variable</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]</code> | variable block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_store`<sup>Required</sup> <a name="artifact_store" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.artifactStore"></a>

```python
artifact_store: typing.Union[IResolvable, typing.List[CodepipelineArtifactStore]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]]

artifact_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#artifact_store Codepipeline#artifact_store}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.stage"></a>

```python
stage: typing.Union[IResolvable, typing.List[CodepipelineStage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#stage Codepipeline#stage}

---

##### `execution_mode`<sup>Optional</sup> <a name="execution_mode" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.executionMode"></a>

```python
execution_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#execution_mode Codepipeline#execution_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipeline_type`<sup>Optional</sup> <a name="pipeline_type" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.pipelineType"></a>

```python
pipeline_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#tags Codepipeline#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}.

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.trigger"></a>

```python
trigger: typing.Union[IResolvable, typing.List[CodepipelineTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>]]

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#trigger Codepipeline#trigger}

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.variable"></a>

```python
variable: typing.Union[IResolvable, typing.List[CodepipelineVariable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#variable Codepipeline#variable}

---

### CodepipelineStage <a name="CodepipelineStage" id="@cdktf/provider-aws.codepipeline.CodepipelineStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStage(
  action: typing.Union[IResolvable, typing.List[CodepipelineStageAction]],
  name: str,
  before_entry: CodepipelineStageBeforeEntry = None,
  on_failure: CodepipelineStageOnFailure = None,
  on_success: CodepipelineStageOnSuccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.beforeEntry">before_entry</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a></code> | before_entry block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.onSuccess">on_success</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a></code> | on_success block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.action"></a>

```python
action: typing.Union[IResolvable, typing.List[CodepipelineStageAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#action Codepipeline#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `before_entry`<sup>Optional</sup> <a name="before_entry" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.beforeEntry"></a>

```python
before_entry: CodepipelineStageBeforeEntry
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a>

before_entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#before_entry Codepipeline#before_entry}

---

##### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.onFailure"></a>

```python
on_failure: CodepipelineStageOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#on_failure Codepipeline#on_failure}

---

##### `on_success`<sup>Optional</sup> <a name="on_success" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.onSuccess"></a>

```python
on_success: CodepipelineStageOnSuccess
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a>

on_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#on_success Codepipeline#on_success}

---

### CodepipelineStageAction <a name="CodepipelineStageAction" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageAction(
  category: str,
  name: str,
  owner: str,
  provider: str,
  version: str,
  configuration: typing.Mapping[str] = None,
  input_artifacts: typing.List[str] = None,
  namespace: str = None,
  output_artifacts: typing.List[str] = None,
  region: str = None,
  role_arn: str = None,
  run_order: typing.Union[int, float] = None,
  timeout_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#category Codepipeline#category}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#owner Codepipeline#owner}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.provider">provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider Codepipeline#provider}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#version Codepipeline#version}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#configuration Codepipeline#configuration}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.inputArtifacts">input_artifacts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#namespace Codepipeline#namespace}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.outputArtifacts">output_artifacts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#output_artifacts Codepipeline#output_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#region Codepipeline#region}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.runOrder">run_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#run_order Codepipeline#run_order}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#category Codepipeline#category}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.provider"></a>

```python
provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#version Codepipeline#version}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#configuration Codepipeline#configuration}.

---

##### `input_artifacts`<sup>Optional</sup> <a name="input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.inputArtifacts"></a>

```python
input_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#namespace Codepipeline#namespace}.

---

##### `output_artifacts`<sup>Optional</sup> <a name="output_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.outputArtifacts"></a>

```python
output_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#output_artifacts Codepipeline#output_artifacts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#region Codepipeline#region}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `run_order`<sup>Optional</sup> <a name="run_order" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.runOrder"></a>

```python
run_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#run_order Codepipeline#run_order}.

---

##### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}.

---

### CodepipelineStageBeforeEntry <a name="CodepipelineStageBeforeEntry" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageBeforeEntry(
  condition: CodepipelineStageBeforeEntryCondition
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a></code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry.property.condition"></a>

```python
condition: CodepipelineStageBeforeEntryCondition
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#condition Codepipeline#condition}

---

### CodepipelineStageBeforeEntryCondition <a name="CodepipelineStageBeforeEntryCondition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageBeforeEntryCondition(
  rule: typing.Union[IResolvable, typing.List[CodepipelineStageBeforeEntryConditionRule]],
  result: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition.property.result">result</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[CodepipelineStageBeforeEntryConditionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#rule Codepipeline#rule}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition.property.result"></a>

```python
result: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}.

---

### CodepipelineStageBeforeEntryConditionRule <a name="CodepipelineStageBeforeEntryConditionRule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageBeforeEntryConditionRule(
  name: str,
  rule_type_id: CodepipelineStageBeforeEntryConditionRuleRuleTypeId,
  commands: typing.List[str] = None,
  configuration: typing.Mapping[str] = None,
  input_artifacts: typing.List[str] = None,
  region: str = None,
  role_arn: str = None,
  timeout_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.ruleTypeId">rule_type_id</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a></code> | rule_type_id block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.commands">commands</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#commands Codepipeline#commands}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#configuration Codepipeline#configuration}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.inputArtifacts">input_artifacts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#region Codepipeline#region}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `rule_type_id`<sup>Required</sup> <a name="rule_type_id" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.ruleTypeId"></a>

```python
rule_type_id: CodepipelineStageBeforeEntryConditionRuleRuleTypeId
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a>

rule_type_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#rule_type_id Codepipeline#rule_type_id}

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#commands Codepipeline#commands}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#configuration Codepipeline#configuration}.

---

##### `input_artifacts`<sup>Optional</sup> <a name="input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.inputArtifacts"></a>

```python
input_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#region Codepipeline#region}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}.

---

### CodepipelineStageBeforeEntryConditionRuleRuleTypeId <a name="CodepipelineStageBeforeEntryConditionRuleRuleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId(
  category: str,
  provider: str,
  owner: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#category Codepipeline#category}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.provider">provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider Codepipeline#provider}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#owner Codepipeline#owner}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#version Codepipeline#version}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#category Codepipeline#category}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.provider"></a>

```python
provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#version Codepipeline#version}.

---

### CodepipelineStageOnFailure <a name="CodepipelineStageOnFailure" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnFailure(
  condition: CodepipelineStageOnFailureCondition = None,
  result: str = None,
  retry_configuration: CodepipelineStageOnFailureRetryConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.result">result</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.retryConfiguration">retry_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a></code> | retry_configuration block. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.condition"></a>

```python
condition: CodepipelineStageOnFailureCondition
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#condition Codepipeline#condition}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.result"></a>

```python
result: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}.

---

##### `retry_configuration`<sup>Optional</sup> <a name="retry_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure.property.retryConfiguration"></a>

```python
retry_configuration: CodepipelineStageOnFailureRetryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a>

retry_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#retry_configuration Codepipeline#retry_configuration}

---

### CodepipelineStageOnFailureCondition <a name="CodepipelineStageOnFailureCondition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnFailureCondition(
  rule: typing.Union[IResolvable, typing.List[CodepipelineStageOnFailureConditionRule]],
  result: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition.property.result">result</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[CodepipelineStageOnFailureConditionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#rule Codepipeline#rule}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition.property.result"></a>

```python
result: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}.

---

### CodepipelineStageOnFailureConditionRule <a name="CodepipelineStageOnFailureConditionRule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnFailureConditionRule(
  name: str,
  rule_type_id: CodepipelineStageOnFailureConditionRuleRuleTypeId,
  commands: typing.List[str] = None,
  configuration: typing.Mapping[str] = None,
  input_artifacts: typing.List[str] = None,
  region: str = None,
  role_arn: str = None,
  timeout_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.ruleTypeId">rule_type_id</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a></code> | rule_type_id block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.commands">commands</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#commands Codepipeline#commands}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#configuration Codepipeline#configuration}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.inputArtifacts">input_artifacts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#region Codepipeline#region}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `rule_type_id`<sup>Required</sup> <a name="rule_type_id" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.ruleTypeId"></a>

```python
rule_type_id: CodepipelineStageOnFailureConditionRuleRuleTypeId
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a>

rule_type_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#rule_type_id Codepipeline#rule_type_id}

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#commands Codepipeline#commands}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#configuration Codepipeline#configuration}.

---

##### `input_artifacts`<sup>Optional</sup> <a name="input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.inputArtifacts"></a>

```python
input_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#region Codepipeline#region}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}.

---

### CodepipelineStageOnFailureConditionRuleRuleTypeId <a name="CodepipelineStageOnFailureConditionRuleRuleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId(
  category: str,
  provider: str,
  owner: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#category Codepipeline#category}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.provider">provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider Codepipeline#provider}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#owner Codepipeline#owner}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#version Codepipeline#version}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#category Codepipeline#category}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.provider"></a>

```python
provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#version Codepipeline#version}.

---

### CodepipelineStageOnFailureRetryConfiguration <a name="CodepipelineStageOnFailureRetryConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnFailureRetryConfiguration(
  retry_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration.property.retryMode">retry_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#retry_mode Codepipeline#retry_mode}. |

---

##### `retry_mode`<sup>Optional</sup> <a name="retry_mode" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration.property.retryMode"></a>

```python
retry_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#retry_mode Codepipeline#retry_mode}.

---

### CodepipelineStageOnSuccess <a name="CodepipelineStageOnSuccess" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnSuccess(
  condition: CodepipelineStageOnSuccessCondition
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a></code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess.property.condition"></a>

```python
condition: CodepipelineStageOnSuccessCondition
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#condition Codepipeline#condition}

---

### CodepipelineStageOnSuccessCondition <a name="CodepipelineStageOnSuccessCondition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnSuccessCondition(
  rule: typing.Union[IResolvable, typing.List[CodepipelineStageOnSuccessConditionRule]],
  result: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition.property.result">result</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[CodepipelineStageOnSuccessConditionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#rule Codepipeline#rule}

---

##### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition.property.result"></a>

```python
result: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}.

---

### CodepipelineStageOnSuccessConditionRule <a name="CodepipelineStageOnSuccessConditionRule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnSuccessConditionRule(
  name: str,
  rule_type_id: CodepipelineStageOnSuccessConditionRuleRuleTypeId,
  commands: typing.List[str] = None,
  configuration: typing.Mapping[str] = None,
  input_artifacts: typing.List[str] = None,
  region: str = None,
  role_arn: str = None,
  timeout_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.ruleTypeId">rule_type_id</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a></code> | rule_type_id block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.commands">commands</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#commands Codepipeline#commands}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#configuration Codepipeline#configuration}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.inputArtifacts">input_artifacts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#region Codepipeline#region}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `rule_type_id`<sup>Required</sup> <a name="rule_type_id" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.ruleTypeId"></a>

```python
rule_type_id: CodepipelineStageOnSuccessConditionRuleRuleTypeId
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a>

rule_type_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#rule_type_id Codepipeline#rule_type_id}

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#commands Codepipeline#commands}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#configuration Codepipeline#configuration}.

---

##### `input_artifacts`<sup>Optional</sup> <a name="input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.inputArtifacts"></a>

```python
input_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#region Codepipeline#region}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#timeout_in_minutes Codepipeline#timeout_in_minutes}.

---

### CodepipelineStageOnSuccessConditionRuleRuleTypeId <a name="CodepipelineStageOnSuccessConditionRuleRuleTypeId" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId(
  category: str,
  provider: str,
  owner: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#category Codepipeline#category}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.provider">provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider Codepipeline#provider}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#owner Codepipeline#owner}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#version Codepipeline#version}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#category Codepipeline#category}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.provider"></a>

```python
provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#version Codepipeline#version}.

---

### CodepipelineTrigger <a name="CodepipelineTrigger" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTrigger(
  git_configuration: CodepipelineTriggerGitConfiguration,
  provider_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.gitConfiguration">git_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a></code> | git_configuration block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.providerType">provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider_type Codepipeline#provider_type}. |

---

##### `git_configuration`<sup>Required</sup> <a name="git_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.gitConfiguration"></a>

```python
git_configuration: CodepipelineTriggerGitConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a>

git_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#git_configuration Codepipeline#git_configuration}

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.codepipeline.CodepipelineTrigger.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider_type Codepipeline#provider_type}.

---

### CodepipelineTriggerAll <a name="CodepipelineTriggerAll" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAll.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAll()
```


### CodepipelineTriggerAllGitConfiguration <a name="CodepipelineTriggerAllGitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfiguration()
```


### CodepipelineTriggerAllGitConfigurationPullRequest <a name="CodepipelineTriggerAllGitConfigurationPullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPullRequest()
```


### CodepipelineTriggerAllGitConfigurationPullRequestBranches <a name="CodepipelineTriggerAllGitConfigurationPullRequestBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranches.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranches()
```


### CodepipelineTriggerAllGitConfigurationPullRequestFilePaths <a name="CodepipelineTriggerAllGitConfigurationPullRequestFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePaths.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePaths()
```


### CodepipelineTriggerAllGitConfigurationPush <a name="CodepipelineTriggerAllGitConfigurationPush" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPush.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPush()
```


### CodepipelineTriggerAllGitConfigurationPushBranches <a name="CodepipelineTriggerAllGitConfigurationPushBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranches.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPushBranches()
```


### CodepipelineTriggerAllGitConfigurationPushFilePaths <a name="CodepipelineTriggerAllGitConfigurationPushFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePaths.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePaths()
```


### CodepipelineTriggerAllGitConfigurationPushTags <a name="CodepipelineTriggerAllGitConfigurationPushTags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPushTags()
```


### CodepipelineTriggerGitConfiguration <a name="CodepipelineTriggerGitConfiguration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfiguration(
  source_action_name: str,
  pull_request: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPullRequest]] = None,
  push: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPush]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.sourceActionName">source_action_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#source_action_name Codepipeline#source_action_name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.pullRequest">pull_request</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>]]</code> | pull_request block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.push">push</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>]]</code> | push block. |

---

##### `source_action_name`<sup>Required</sup> <a name="source_action_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.sourceActionName"></a>

```python
source_action_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#source_action_name Codepipeline#source_action_name}.

---

##### `pull_request`<sup>Optional</sup> <a name="pull_request" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.pullRequest"></a>

```python
pull_request: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPullRequest]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>]]

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#pull_request Codepipeline#pull_request}

---

##### `push`<sup>Optional</sup> <a name="push" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration.property.push"></a>

```python
push: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPush]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>]]

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#push Codepipeline#push}

---

### CodepipelineTriggerGitConfigurationPullRequest <a name="CodepipelineTriggerGitConfigurationPullRequest" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPullRequest(
  branches: CodepipelineTriggerGitConfigurationPullRequestBranches = None,
  events: typing.List[str] = None,
  file_paths: CodepipelineTriggerGitConfigurationPullRequestFilePaths = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a></code> | branches block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#events Codepipeline#events}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.filePaths">file_paths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a></code> | file_paths block. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.branches"></a>

```python
branches: CodepipelineTriggerGitConfigurationPullRequestBranches
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a>

branches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#branches Codepipeline#branches}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#events Codepipeline#events}.

---

##### `file_paths`<sup>Optional</sup> <a name="file_paths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest.property.filePaths"></a>

```python
file_paths: CodepipelineTriggerGitConfigurationPullRequestFilePaths
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a>

file_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#file_paths Codepipeline#file_paths}

---

### CodepipelineTriggerGitConfigurationPullRequestBranches <a name="CodepipelineTriggerGitConfigurationPullRequestBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches(
  excludes: typing.List[str] = None,
  includes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.includes">includes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPullRequestFilePaths <a name="CodepipelineTriggerGitConfigurationPullRequestFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths(
  excludes: typing.List[str] = None,
  includes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.includes">includes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPush <a name="CodepipelineTriggerGitConfigurationPush" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPush(
  branches: CodepipelineTriggerGitConfigurationPushBranches = None,
  file_paths: CodepipelineTriggerGitConfigurationPushFilePaths = None,
  tags: CodepipelineTriggerGitConfigurationPushTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a></code> | branches block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.filePaths">file_paths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a></code> | file_paths block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a></code> | tags block. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.branches"></a>

```python
branches: CodepipelineTriggerGitConfigurationPushBranches
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a>

branches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#branches Codepipeline#branches}

---

##### `file_paths`<sup>Optional</sup> <a name="file_paths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.filePaths"></a>

```python
file_paths: CodepipelineTriggerGitConfigurationPushFilePaths
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a>

file_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#file_paths Codepipeline#file_paths}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush.property.tags"></a>

```python
tags: CodepipelineTriggerGitConfigurationPushTags
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#tags Codepipeline#tags}

---

### CodepipelineTriggerGitConfigurationPushBranches <a name="CodepipelineTriggerGitConfigurationPushBranches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPushBranches(
  excludes: typing.List[str] = None,
  includes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.includes">includes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPushFilePaths <a name="CodepipelineTriggerGitConfigurationPushFilePaths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths(
  excludes: typing.List[str] = None,
  includes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.includes">includes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineTriggerGitConfigurationPushTags <a name="CodepipelineTriggerGitConfigurationPushTags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPushTags(
  excludes: typing.List[str] = None,
  includes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.includes">includes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

### CodepipelineVariable <a name="CodepipelineVariable" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineVariable(
  name: str,
  default_value: str = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#default_value Codepipeline#default_value}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#description Codepipeline#description}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#default_value Codepipeline#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#description Codepipeline#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineArtifactStoreEncryptionKeyOutputReference <a name="CodepipelineArtifactStoreEncryptionKeyOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineArtifactStoreEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

---


### CodepipelineArtifactStoreList <a name="CodepipelineArtifactStoreList" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineArtifactStoreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineArtifactStoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineArtifactStore]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]]

---


### CodepipelineArtifactStoreOutputReference <a name="CodepipelineArtifactStoreOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineArtifactStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey">put_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_key` <a name="put_encryption_key" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey"></a>

```python
def put_encryption_key(
  id: str,
  type: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#type Codepipeline#type}.

---

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference">CodepipelineArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKeyInput">encryption_key_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKey"></a>

```python
encryption_key: CodepipelineArtifactStoreEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference">CodepipelineArtifactStoreEncryptionKeyOutputReference</a>

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.encryptionKeyInput"></a>

```python
encryption_key_input: CodepipelineArtifactStoreEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodepipelineArtifactStore]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]

---


### CodepipelineStageActionList <a name="CodepipelineStageActionList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineStageActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineStageAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]]

---


### CodepipelineStageActionOutputReference <a name="CodepipelineStageActionOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetInputArtifacts">reset_input_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetOutputArtifacts">reset_output_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRunOrder">reset_run_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetTimeoutInMinutes">reset_timeout_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_input_artifacts` <a name="reset_input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetInputArtifacts"></a>

```python
def reset_input_artifacts() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_output_artifacts` <a name="reset_output_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetOutputArtifacts"></a>

```python
def reset_output_artifacts() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_run_order` <a name="reset_run_order" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetRunOrder"></a>

```python
def reset_run_order() -> None
```

##### `reset_timeout_in_minutes` <a name="reset_timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.resetTimeoutInMinutes"></a>

```python
def reset_timeout_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configurationInput">configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifactsInput">input_artifacts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifactsInput">output_artifacts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrderInput">run_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutesInput">timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifacts">input_artifacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifacts">output_artifacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrder">run_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configurationInput"></a>

```python
configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_artifacts_input`<sup>Optional</sup> <a name="input_artifacts_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifactsInput"></a>

```python
input_artifacts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `output_artifacts_input`<sup>Optional</sup> <a name="output_artifacts_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifactsInput"></a>

```python
output_artifacts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `run_order_input`<sup>Optional</sup> <a name="run_order_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrderInput"></a>

```python
run_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_minutes_input`<sup>Optional</sup> <a name="timeout_in_minutes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutesInput"></a>

```python
timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_artifacts`<sup>Required</sup> <a name="input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.inputArtifacts"></a>

```python
input_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `output_artifacts`<sup>Required</sup> <a name="output_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.outputArtifacts"></a>

```python
output_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `run_order`<sup>Required</sup> <a name="run_order" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.runOrder"></a>

```python
run_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_minutes`<sup>Required</sup> <a name="timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodepipelineStageAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]

---


### CodepipelineStageBeforeEntryConditionOutputReference <a name="CodepipelineStageBeforeEntryConditionOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageBeforeEntryConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.resetResult">reset_result</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[CodepipelineStageBeforeEntryConditionRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>]]

---

##### `reset_result` <a name="reset_result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.resetResult"></a>

```python
def reset_result() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList">CodepipelineStageBeforeEntryConditionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.resultInput">result_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.rule"></a>

```python
rule: CodepipelineStageBeforeEntryConditionRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList">CodepipelineStageBeforeEntryConditionRuleList</a>

---

##### `result_input`<sup>Optional</sup> <a name="result_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.resultInput"></a>

```python
result_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[CodepipelineStageBeforeEntryConditionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>]]

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineStageBeforeEntryCondition
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a>

---


### CodepipelineStageBeforeEntryConditionRuleList <a name="CodepipelineStageBeforeEntryConditionRuleList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageBeforeEntryConditionRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineStageBeforeEntryConditionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineStageBeforeEntryConditionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>]]

---


### CodepipelineStageBeforeEntryConditionRuleOutputReference <a name="CodepipelineStageBeforeEntryConditionRuleOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.putRuleTypeId">put_rule_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetCommands">reset_commands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetInputArtifacts">reset_input_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetTimeoutInMinutes">reset_timeout_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule_type_id` <a name="put_rule_type_id" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.putRuleTypeId"></a>

```python
def put_rule_type_id(
  category: str,
  provider: str,
  owner: str = None,
  version: str = None
) -> None
```

###### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.putRuleTypeId.parameter.category"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#category Codepipeline#category}.

---

###### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.putRuleTypeId.parameter.provider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.putRuleTypeId.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.putRuleTypeId.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#version Codepipeline#version}.

---

##### `reset_commands` <a name="reset_commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetCommands"></a>

```python
def reset_commands() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_input_artifacts` <a name="reset_input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetInputArtifacts"></a>

```python
def reset_input_artifacts() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_timeout_in_minutes` <a name="reset_timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.resetTimeoutInMinutes"></a>

```python
def reset_timeout_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.ruleTypeId">rule_type_id</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference">CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.commandsInput">commands_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.configurationInput">configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.inputArtifactsInput">input_artifacts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.ruleTypeIdInput">rule_type_id_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.timeoutInMinutesInput">timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.commands">commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.inputArtifacts">input_artifacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_type_id`<sup>Required</sup> <a name="rule_type_id" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.ruleTypeId"></a>

```python
rule_type_id: CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference">CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference</a>

---

##### `commands_input`<sup>Optional</sup> <a name="commands_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.commandsInput"></a>

```python
commands_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.configurationInput"></a>

```python
configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_artifacts_input`<sup>Optional</sup> <a name="input_artifacts_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.inputArtifactsInput"></a>

```python
input_artifacts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `rule_type_id_input`<sup>Optional</sup> <a name="rule_type_id_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.ruleTypeIdInput"></a>

```python
rule_type_id_input: CodepipelineStageBeforeEntryConditionRuleRuleTypeId
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a>

---

##### `timeout_in_minutes_input`<sup>Optional</sup> <a name="timeout_in_minutes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.timeoutInMinutesInput"></a>

```python
timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_artifacts`<sup>Required</sup> <a name="input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.inputArtifacts"></a>

```python
input_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `timeout_in_minutes`<sup>Required</sup> <a name="timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodepipelineStageBeforeEntryConditionRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>]

---


### CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference <a name="CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeIdOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineStageBeforeEntryConditionRuleRuleTypeId
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRuleRuleTypeId">CodepipelineStageBeforeEntryConditionRuleRuleTypeId</a>

---


### CodepipelineStageBeforeEntryOutputReference <a name="CodepipelineStageBeforeEntryOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageBeforeEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.putCondition">put_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.putCondition"></a>

```python
def put_condition(
  rule: typing.Union[IResolvable, typing.List[CodepipelineStageBeforeEntryConditionRule]],
  result: str = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.putCondition.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionRule">CodepipelineStageBeforeEntryConditionRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#rule Codepipeline#rule}

---

###### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.putCondition.parameter.result"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference">CodepipelineStageBeforeEntryConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.condition"></a>

```python
condition: CodepipelineStageBeforeEntryConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryConditionOutputReference">CodepipelineStageBeforeEntryConditionOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.conditionInput"></a>

```python
condition_input: CodepipelineStageBeforeEntryCondition
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineStageBeforeEntry
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a>

---


### CodepipelineStageList <a name="CodepipelineStageList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineStage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]

---


### CodepipelineStageOnFailureConditionOutputReference <a name="CodepipelineStageOnFailureConditionOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnFailureConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.resetResult">reset_result</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[CodepipelineStageOnFailureConditionRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>]]

---

##### `reset_result` <a name="reset_result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.resetResult"></a>

```python
def reset_result() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList">CodepipelineStageOnFailureConditionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.resultInput">result_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.rule"></a>

```python
rule: CodepipelineStageOnFailureConditionRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList">CodepipelineStageOnFailureConditionRuleList</a>

---

##### `result_input`<sup>Optional</sup> <a name="result_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.resultInput"></a>

```python
result_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[CodepipelineStageOnFailureConditionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>]]

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineStageOnFailureCondition
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a>

---


### CodepipelineStageOnFailureConditionRuleList <a name="CodepipelineStageOnFailureConditionRuleList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnFailureConditionRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineStageOnFailureConditionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineStageOnFailureConditionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>]]

---


### CodepipelineStageOnFailureConditionRuleOutputReference <a name="CodepipelineStageOnFailureConditionRuleOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.putRuleTypeId">put_rule_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetCommands">reset_commands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetInputArtifacts">reset_input_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetTimeoutInMinutes">reset_timeout_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule_type_id` <a name="put_rule_type_id" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.putRuleTypeId"></a>

```python
def put_rule_type_id(
  category: str,
  provider: str,
  owner: str = None,
  version: str = None
) -> None
```

###### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.putRuleTypeId.parameter.category"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#category Codepipeline#category}.

---

###### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.putRuleTypeId.parameter.provider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.putRuleTypeId.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.putRuleTypeId.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#version Codepipeline#version}.

---

##### `reset_commands` <a name="reset_commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetCommands"></a>

```python
def reset_commands() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_input_artifacts` <a name="reset_input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetInputArtifacts"></a>

```python
def reset_input_artifacts() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_timeout_in_minutes` <a name="reset_timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.resetTimeoutInMinutes"></a>

```python
def reset_timeout_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.ruleTypeId">rule_type_id</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference">CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.commandsInput">commands_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.configurationInput">configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.inputArtifactsInput">input_artifacts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.ruleTypeIdInput">rule_type_id_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.timeoutInMinutesInput">timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.commands">commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.inputArtifacts">input_artifacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_type_id`<sup>Required</sup> <a name="rule_type_id" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.ruleTypeId"></a>

```python
rule_type_id: CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference">CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference</a>

---

##### `commands_input`<sup>Optional</sup> <a name="commands_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.commandsInput"></a>

```python
commands_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.configurationInput"></a>

```python
configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_artifacts_input`<sup>Optional</sup> <a name="input_artifacts_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.inputArtifactsInput"></a>

```python
input_artifacts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `rule_type_id_input`<sup>Optional</sup> <a name="rule_type_id_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.ruleTypeIdInput"></a>

```python
rule_type_id_input: CodepipelineStageOnFailureConditionRuleRuleTypeId
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a>

---

##### `timeout_in_minutes_input`<sup>Optional</sup> <a name="timeout_in_minutes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.timeoutInMinutesInput"></a>

```python
timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_artifacts`<sup>Required</sup> <a name="input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.inputArtifacts"></a>

```python
input_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `timeout_in_minutes`<sup>Required</sup> <a name="timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodepipelineStageOnFailureConditionRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>]

---


### CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference <a name="CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeIdOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineStageOnFailureConditionRuleRuleTypeId
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRuleRuleTypeId">CodepipelineStageOnFailureConditionRuleRuleTypeId</a>

---


### CodepipelineStageOnFailureOutputReference <a name="CodepipelineStageOnFailureOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnFailureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putRetryConfiguration">put_retry_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetResult">reset_result</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetRetryConfiguration">reset_retry_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putCondition"></a>

```python
def put_condition(
  rule: typing.Union[IResolvable, typing.List[CodepipelineStageOnFailureConditionRule]],
  result: str = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putCondition.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionRule">CodepipelineStageOnFailureConditionRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#rule Codepipeline#rule}

---

###### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putCondition.parameter.result"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}.

---

##### `put_retry_configuration` <a name="put_retry_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putRetryConfiguration"></a>

```python
def put_retry_configuration(
  retry_mode: str = None
) -> None
```

###### `retry_mode`<sup>Optional</sup> <a name="retry_mode" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.putRetryConfiguration.parameter.retryMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#retry_mode Codepipeline#retry_mode}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_result` <a name="reset_result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetResult"></a>

```python
def reset_result() -> None
```

##### `reset_retry_configuration` <a name="reset_retry_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.resetRetryConfiguration"></a>

```python
def reset_retry_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference">CodepipelineStageOnFailureConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.retryConfiguration">retry_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference">CodepipelineStageOnFailureRetryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.resultInput">result_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.retryConfigurationInput">retry_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.condition"></a>

```python
condition: CodepipelineStageOnFailureConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureConditionOutputReference">CodepipelineStageOnFailureConditionOutputReference</a>

---

##### `retry_configuration`<sup>Required</sup> <a name="retry_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.retryConfiguration"></a>

```python
retry_configuration: CodepipelineStageOnFailureRetryConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference">CodepipelineStageOnFailureRetryConfigurationOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.conditionInput"></a>

```python
condition_input: CodepipelineStageOnFailureCondition
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a>

---

##### `result_input`<sup>Optional</sup> <a name="result_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.resultInput"></a>

```python
result_input: str
```

- *Type:* str

---

##### `retry_configuration_input`<sup>Optional</sup> <a name="retry_configuration_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.retryConfigurationInput"></a>

```python
retry_configuration_input: CodepipelineStageOnFailureRetryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineStageOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a>

---


### CodepipelineStageOnFailureRetryConfigurationOutputReference <a name="CodepipelineStageOnFailureRetryConfigurationOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.resetRetryMode">reset_retry_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retry_mode` <a name="reset_retry_mode" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.resetRetryMode"></a>

```python
def reset_retry_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.retryModeInput">retry_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.retryMode">retry_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retry_mode_input`<sup>Optional</sup> <a name="retry_mode_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.retryModeInput"></a>

```python
retry_mode_input: str
```

- *Type:* str

---

##### `retry_mode`<sup>Required</sup> <a name="retry_mode" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.retryMode"></a>

```python
retry_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineStageOnFailureRetryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a>

---


### CodepipelineStageOnSuccessConditionOutputReference <a name="CodepipelineStageOnSuccessConditionOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnSuccessConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.resetResult">reset_result</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[CodepipelineStageOnSuccessConditionRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>]]

---

##### `reset_result` <a name="reset_result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.resetResult"></a>

```python
def reset_result() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList">CodepipelineStageOnSuccessConditionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.resultInput">result_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.rule"></a>

```python
rule: CodepipelineStageOnSuccessConditionRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList">CodepipelineStageOnSuccessConditionRuleList</a>

---

##### `result_input`<sup>Optional</sup> <a name="result_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.resultInput"></a>

```python
result_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[CodepipelineStageOnSuccessConditionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>]]

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineStageOnSuccessCondition
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a>

---


### CodepipelineStageOnSuccessConditionRuleList <a name="CodepipelineStageOnSuccessConditionRuleList" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnSuccessConditionRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineStageOnSuccessConditionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineStageOnSuccessConditionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>]]

---


### CodepipelineStageOnSuccessConditionRuleOutputReference <a name="CodepipelineStageOnSuccessConditionRuleOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.putRuleTypeId">put_rule_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetCommands">reset_commands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetInputArtifacts">reset_input_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetTimeoutInMinutes">reset_timeout_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule_type_id` <a name="put_rule_type_id" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.putRuleTypeId"></a>

```python
def put_rule_type_id(
  category: str,
  provider: str,
  owner: str = None,
  version: str = None
) -> None
```

###### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.putRuleTypeId.parameter.category"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#category Codepipeline#category}.

---

###### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.putRuleTypeId.parameter.provider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.putRuleTypeId.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.putRuleTypeId.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#version Codepipeline#version}.

---

##### `reset_commands` <a name="reset_commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetCommands"></a>

```python
def reset_commands() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_input_artifacts` <a name="reset_input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetInputArtifacts"></a>

```python
def reset_input_artifacts() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_timeout_in_minutes` <a name="reset_timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.resetTimeoutInMinutes"></a>

```python
def reset_timeout_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.ruleTypeId">rule_type_id</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference">CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.commandsInput">commands_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.configurationInput">configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.inputArtifactsInput">input_artifacts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.ruleTypeIdInput">rule_type_id_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.timeoutInMinutesInput">timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.commands">commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.inputArtifacts">input_artifacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_type_id`<sup>Required</sup> <a name="rule_type_id" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.ruleTypeId"></a>

```python
rule_type_id: CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference">CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference</a>

---

##### `commands_input`<sup>Optional</sup> <a name="commands_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.commandsInput"></a>

```python
commands_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.configurationInput"></a>

```python
configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_artifacts_input`<sup>Optional</sup> <a name="input_artifacts_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.inputArtifactsInput"></a>

```python
input_artifacts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `rule_type_id_input`<sup>Optional</sup> <a name="rule_type_id_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.ruleTypeIdInput"></a>

```python
rule_type_id_input: CodepipelineStageOnSuccessConditionRuleRuleTypeId
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a>

---

##### `timeout_in_minutes_input`<sup>Optional</sup> <a name="timeout_in_minutes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.timeoutInMinutesInput"></a>

```python
timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.commands"></a>

```python
commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_artifacts`<sup>Required</sup> <a name="input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.inputArtifacts"></a>

```python
input_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `timeout_in_minutes`<sup>Required</sup> <a name="timeout_in_minutes" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodepipelineStageOnSuccessConditionRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>]

---


### CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference <a name="CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.providerInput">provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `provider_input`<sup>Optional</sup> <a name="provider_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.providerInput"></a>

```python
provider_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeIdOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineStageOnSuccessConditionRuleRuleTypeId
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRuleRuleTypeId">CodepipelineStageOnSuccessConditionRuleRuleTypeId</a>

---


### CodepipelineStageOnSuccessOutputReference <a name="CodepipelineStageOnSuccessOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOnSuccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.putCondition">put_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.putCondition"></a>

```python
def put_condition(
  rule: typing.Union[IResolvable, typing.List[CodepipelineStageOnSuccessConditionRule]],
  result: str = None
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.putCondition.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionRule">CodepipelineStageOnSuccessConditionRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#rule Codepipeline#rule}

---

###### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.putCondition.parameter.result"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference">CodepipelineStageOnSuccessConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.condition"></a>

```python
condition: CodepipelineStageOnSuccessConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessConditionOutputReference">CodepipelineStageOnSuccessConditionOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.conditionInput"></a>

```python
condition_input: CodepipelineStageOnSuccessCondition
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineStageOnSuccess
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a>

---


### CodepipelineStageOutputReference <a name="CodepipelineStageOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putBeforeEntry">put_before_entry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnFailure">put_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnSuccess">put_on_success</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetBeforeEntry">reset_before_entry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetOnFailure">reset_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetOnSuccess">reset_on_success</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction"></a>

```python
def put_action(
  value: typing.Union[IResolvable, typing.List[CodepipelineStageAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]]

---

##### `put_before_entry` <a name="put_before_entry" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putBeforeEntry"></a>

```python
def put_before_entry(
  condition: CodepipelineStageBeforeEntryCondition
) -> None
```

###### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putBeforeEntry.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryCondition">CodepipelineStageBeforeEntryCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#condition Codepipeline#condition}

---

##### `put_on_failure` <a name="put_on_failure" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnFailure"></a>

```python
def put_on_failure(
  condition: CodepipelineStageOnFailureCondition = None,
  result: str = None,
  retry_configuration: CodepipelineStageOnFailureRetryConfiguration = None
) -> None
```

###### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnFailure.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureCondition">CodepipelineStageOnFailureCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#condition Codepipeline#condition}

---

###### `result`<sup>Optional</sup> <a name="result" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnFailure.parameter.result"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#result Codepipeline#result}.

---

###### `retry_configuration`<sup>Optional</sup> <a name="retry_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnFailure.parameter.retryConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureRetryConfiguration">CodepipelineStageOnFailureRetryConfiguration</a>

retry_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#retry_configuration Codepipeline#retry_configuration}

---

##### `put_on_success` <a name="put_on_success" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnSuccess"></a>

```python
def put_on_success(
  condition: CodepipelineStageOnSuccessCondition
) -> None
```

###### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.putOnSuccess.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessCondition">CodepipelineStageOnSuccessCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#condition Codepipeline#condition}

---

##### `reset_before_entry` <a name="reset_before_entry" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetBeforeEntry"></a>

```python
def reset_before_entry() -> None
```

##### `reset_on_failure` <a name="reset_on_failure" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetOnFailure"></a>

```python
def reset_on_failure() -> None
```

##### `reset_on_success` <a name="reset_on_success" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.resetOnSuccess"></a>

```python
def reset_on_success() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList">CodepipelineStageActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.beforeEntry">before_entry</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference">CodepipelineStageBeforeEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference">CodepipelineStageOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onSuccess">on_success</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference">CodepipelineStageOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.actionInput">action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.beforeEntryInput">before_entry_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onFailureInput">on_failure_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onSuccessInput">on_success_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.action"></a>

```python
action: CodepipelineStageActionList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList">CodepipelineStageActionList</a>

---

##### `before_entry`<sup>Required</sup> <a name="before_entry" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.beforeEntry"></a>

```python
before_entry: CodepipelineStageBeforeEntryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntryOutputReference">CodepipelineStageBeforeEntryOutputReference</a>

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onFailure"></a>

```python
on_failure: CodepipelineStageOnFailureOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailureOutputReference">CodepipelineStageOnFailureOutputReference</a>

---

##### `on_success`<sup>Required</sup> <a name="on_success" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onSuccess"></a>

```python
on_success: CodepipelineStageOnSuccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccessOutputReference">CodepipelineStageOnSuccessOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.actionInput"></a>

```python
action_input: typing.Union[IResolvable, typing.List[CodepipelineStageAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]]

---

##### `before_entry_input`<sup>Optional</sup> <a name="before_entry_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.beforeEntryInput"></a>

```python
before_entry_input: CodepipelineStageBeforeEntry
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageBeforeEntry">CodepipelineStageBeforeEntry</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_failure_input`<sup>Optional</sup> <a name="on_failure_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onFailureInput"></a>

```python
on_failure_input: CodepipelineStageOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnFailure">CodepipelineStageOnFailure</a>

---

##### `on_success_input`<sup>Optional</sup> <a name="on_success_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.onSuccessInput"></a>

```python
on_success_input: CodepipelineStageOnSuccess
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOnSuccess">CodepipelineStageOnSuccess</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodepipelineStage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]

---


### CodepipelineTriggerAllGitConfigurationList <a name="CodepipelineTriggerAllGitConfigurationList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerAllGitConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CodepipelineTriggerAllGitConfigurationOutputReference <a name="CodepipelineTriggerAllGitConfigurationOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.pullRequest">pull_request</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList">CodepipelineTriggerAllGitConfigurationPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList">CodepipelineTriggerAllGitConfigurationPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.sourceActionName">source_action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfiguration">CodepipelineTriggerAllGitConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pull_request`<sup>Required</sup> <a name="pull_request" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.pullRequest"></a>

```python
pull_request: CodepipelineTriggerAllGitConfigurationPullRequestList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList">CodepipelineTriggerAllGitConfigurationPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.push"></a>

```python
push: CodepipelineTriggerAllGitConfigurationPushList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList">CodepipelineTriggerAllGitConfigurationPushList</a>

---

##### `source_action_name`<sup>Required</sup> <a name="source_action_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.sourceActionName"></a>

```python
source_action_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerAllGitConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfiguration">CodepipelineTriggerAllGitConfiguration</a>

---


### CodepipelineTriggerAllGitConfigurationPullRequestBranchesList <a name="CodepipelineTriggerAllGitConfigurationPullRequestBranchesList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference <a name="CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranches">CodepipelineTriggerAllGitConfigurationPullRequestBranches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerAllGitConfigurationPullRequestBranches
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranches">CodepipelineTriggerAllGitConfigurationPullRequestBranches</a>

---


### CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList <a name="CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference <a name="CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePaths">CodepipelineTriggerAllGitConfigurationPullRequestFilePaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerAllGitConfigurationPullRequestFilePaths
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePaths">CodepipelineTriggerAllGitConfigurationPullRequestFilePaths</a>

---


### CodepipelineTriggerAllGitConfigurationPullRequestList <a name="CodepipelineTriggerAllGitConfigurationPullRequestList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerAllGitConfigurationPullRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CodepipelineTriggerAllGitConfigurationPullRequestOutputReference <a name="CodepipelineTriggerAllGitConfigurationPullRequestOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList">CodepipelineTriggerAllGitConfigurationPullRequestBranchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.filePaths">file_paths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList">CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequest">CodepipelineTriggerAllGitConfigurationPullRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.branches"></a>

```python
branches: CodepipelineTriggerAllGitConfigurationPullRequestBranchesList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestBranchesList">CodepipelineTriggerAllGitConfigurationPullRequestBranchesList</a>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_paths`<sup>Required</sup> <a name="file_paths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.filePaths"></a>

```python
file_paths: CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList">CodepipelineTriggerAllGitConfigurationPullRequestFilePathsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequestOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerAllGitConfigurationPullRequest
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPullRequest">CodepipelineTriggerAllGitConfigurationPullRequest</a>

---


### CodepipelineTriggerAllGitConfigurationPushBranchesList <a name="CodepipelineTriggerAllGitConfigurationPushBranchesList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference <a name="CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranches">CodepipelineTriggerAllGitConfigurationPushBranches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerAllGitConfigurationPushBranches
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranches">CodepipelineTriggerAllGitConfigurationPushBranches</a>

---


### CodepipelineTriggerAllGitConfigurationPushFilePathsList <a name="CodepipelineTriggerAllGitConfigurationPushFilePathsList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference <a name="CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePaths">CodepipelineTriggerAllGitConfigurationPushFilePaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerAllGitConfigurationPushFilePaths
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePaths">CodepipelineTriggerAllGitConfigurationPushFilePaths</a>

---


### CodepipelineTriggerAllGitConfigurationPushList <a name="CodepipelineTriggerAllGitConfigurationPushList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPushList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerAllGitConfigurationPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CodepipelineTriggerAllGitConfigurationPushOutputReference <a name="CodepipelineTriggerAllGitConfigurationPushOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList">CodepipelineTriggerAllGitConfigurationPushBranchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.filePaths">file_paths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList">CodepipelineTriggerAllGitConfigurationPushFilePathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList">CodepipelineTriggerAllGitConfigurationPushTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPush">CodepipelineTriggerAllGitConfigurationPush</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.branches"></a>

```python
branches: CodepipelineTriggerAllGitConfigurationPushBranchesList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushBranchesList">CodepipelineTriggerAllGitConfigurationPushBranchesList</a>

---

##### `file_paths`<sup>Required</sup> <a name="file_paths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.filePaths"></a>

```python
file_paths: CodepipelineTriggerAllGitConfigurationPushFilePathsList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushFilePathsList">CodepipelineTriggerAllGitConfigurationPushFilePathsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.tags"></a>

```python
tags: CodepipelineTriggerAllGitConfigurationPushTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList">CodepipelineTriggerAllGitConfigurationPushTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerAllGitConfigurationPush
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPush">CodepipelineTriggerAllGitConfigurationPush</a>

---


### CodepipelineTriggerAllGitConfigurationPushTagsList <a name="CodepipelineTriggerAllGitConfigurationPushTagsList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerAllGitConfigurationPushTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CodepipelineTriggerAllGitConfigurationPushTagsOutputReference <a name="CodepipelineTriggerAllGitConfigurationPushTagsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTags">CodepipelineTriggerAllGitConfigurationPushTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTagsOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerAllGitConfigurationPushTags
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationPushTags">CodepipelineTriggerAllGitConfigurationPushTags</a>

---


### CodepipelineTriggerAllList <a name="CodepipelineTriggerAllList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerAllOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CodepipelineTriggerAllOutputReference <a name="CodepipelineTriggerAllOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerAllOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.gitConfiguration">git_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList">CodepipelineTriggerAllGitConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAll">CodepipelineTriggerAll</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_configuration`<sup>Required</sup> <a name="git_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.gitConfiguration"></a>

```python
git_configuration: CodepipelineTriggerAllGitConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllGitConfigurationList">CodepipelineTriggerAllGitConfigurationList</a>

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerAllOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerAll
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerAll">CodepipelineTriggerAll</a>

---


### CodepipelineTriggerGitConfigurationOutputReference <a name="CodepipelineTriggerGitConfigurationOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPullRequest">put_pull_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPush">put_push</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPullRequest">reset_pull_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPush">reset_push</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pull_request` <a name="put_pull_request" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPullRequest"></a>

```python
def put_pull_request(
  value: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPullRequest]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPullRequest.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>]]

---

##### `put_push` <a name="put_push" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPush"></a>

```python
def put_push(
  value: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPush]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.putPush.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>]]

---

##### `reset_pull_request` <a name="reset_pull_request" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPullRequest"></a>

```python
def reset_pull_request() -> None
```

##### `reset_push` <a name="reset_push" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.resetPush"></a>

```python
def reset_push() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequest">pull_request</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList">CodepipelineTriggerGitConfigurationPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList">CodepipelineTriggerGitConfigurationPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequestInput">pull_request_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pushInput">push_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionNameInput">source_action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionName">source_action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pull_request`<sup>Required</sup> <a name="pull_request" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequest"></a>

```python
pull_request: CodepipelineTriggerGitConfigurationPullRequestList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList">CodepipelineTriggerGitConfigurationPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.push"></a>

```python
push: CodepipelineTriggerGitConfigurationPushList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList">CodepipelineTriggerGitConfigurationPushList</a>

---

##### `pull_request_input`<sup>Optional</sup> <a name="pull_request_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pullRequestInput"></a>

```python
pull_request_input: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPullRequest]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>]]

---

##### `push_input`<sup>Optional</sup> <a name="push_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.pushInput"></a>

```python
push_input: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPush]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>]]

---

##### `source_action_name_input`<sup>Optional</sup> <a name="source_action_name_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionNameInput"></a>

```python
source_action_name_input: str
```

- *Type:* str

---

##### `source_action_name`<sup>Required</sup> <a name="source_action_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.sourceActionName"></a>

```python
source_action_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerGitConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a>

---


### CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference <a name="CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetIncludes">reset_includes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excludes` <a name="reset_excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_includes` <a name="reset_includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.resetIncludes"></a>

```python
def reset_includes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludesInput">excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includesInput">includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludesInput"></a>

```python
excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes_input`<sup>Optional</sup> <a name="includes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includesInput"></a>

```python
includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerGitConfigurationPullRequestBranches
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a>

---


### CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference <a name="CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetIncludes">reset_includes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excludes` <a name="reset_excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_includes` <a name="reset_includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.resetIncludes"></a>

```python
def reset_includes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludesInput">excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includesInput">includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludesInput"></a>

```python
excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes_input`<sup>Optional</sup> <a name="includes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includesInput"></a>

```python
includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerGitConfigurationPullRequestFilePaths
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a>

---


### CodepipelineTriggerGitConfigurationPullRequestList <a name="CodepipelineTriggerGitConfigurationPullRequestList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPullRequestList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerGitConfigurationPullRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPullRequest]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>]]

---


### CodepipelineTriggerGitConfigurationPullRequestOutputReference <a name="CodepipelineTriggerGitConfigurationPullRequestOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putBranches">put_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putFilePaths">put_file_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetBranches">reset_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetEvents">reset_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetFilePaths">reset_file_paths</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_branches` <a name="put_branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putBranches"></a>

```python
def put_branches(
  excludes: typing.List[str] = None,
  includes: typing.List[str] = None
) -> None
```

###### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putBranches.parameter.excludes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

###### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putBranches.parameter.includes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

##### `put_file_paths` <a name="put_file_paths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putFilePaths"></a>

```python
def put_file_paths(
  excludes: typing.List[str] = None,
  includes: typing.List[str] = None
) -> None
```

###### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putFilePaths.parameter.excludes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

###### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.putFilePaths.parameter.includes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

##### `reset_branches` <a name="reset_branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetBranches"></a>

```python
def reset_branches() -> None
```

##### `reset_events` <a name="reset_events" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetEvents"></a>

```python
def reset_events() -> None
```

##### `reset_file_paths` <a name="reset_file_paths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.resetFilePaths"></a>

```python
def reset_file_paths() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference">CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePaths">file_paths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference">CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branchesInput">branches_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePathsInput">file_paths_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branches"></a>

```python
branches: CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference">CodepipelineTriggerGitConfigurationPullRequestBranchesOutputReference</a>

---

##### `file_paths`<sup>Required</sup> <a name="file_paths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePaths"></a>

```python
file_paths: CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference">CodepipelineTriggerGitConfigurationPullRequestFilePathsOutputReference</a>

---

##### `branches_input`<sup>Optional</sup> <a name="branches_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.branchesInput"></a>

```python
branches_input: CodepipelineTriggerGitConfigurationPullRequestBranches
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestBranches">CodepipelineTriggerGitConfigurationPullRequestBranches</a>

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_paths_input`<sup>Optional</sup> <a name="file_paths_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.filePathsInput"></a>

```python
file_paths_input: CodepipelineTriggerGitConfigurationPullRequestFilePaths
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestFilePaths">CodepipelineTriggerGitConfigurationPullRequestFilePaths</a>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequestOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodepipelineTriggerGitConfigurationPullRequest]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>]

---


### CodepipelineTriggerGitConfigurationPushBranchesOutputReference <a name="CodepipelineTriggerGitConfigurationPushBranchesOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetIncludes">reset_includes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excludes` <a name="reset_excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_includes` <a name="reset_includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.resetIncludes"></a>

```python
def reset_includes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludesInput">excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includesInput">includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludesInput"></a>

```python
excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes_input`<sup>Optional</sup> <a name="includes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includesInput"></a>

```python
includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerGitConfigurationPushBranches
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a>

---


### CodepipelineTriggerGitConfigurationPushFilePathsOutputReference <a name="CodepipelineTriggerGitConfigurationPushFilePathsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetIncludes">reset_includes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excludes` <a name="reset_excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_includes` <a name="reset_includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.resetIncludes"></a>

```python
def reset_includes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludesInput">excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includesInput">includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludesInput"></a>

```python
excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes_input`<sup>Optional</sup> <a name="includes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includesInput"></a>

```python
includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerGitConfigurationPushFilePaths
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a>

---


### CodepipelineTriggerGitConfigurationPushList <a name="CodepipelineTriggerGitConfigurationPushList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPushList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerGitConfigurationPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPush]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>]]

---


### CodepipelineTriggerGitConfigurationPushOutputReference <a name="CodepipelineTriggerGitConfigurationPushOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putBranches">put_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putFilePaths">put_file_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetBranches">reset_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetFilePaths">reset_file_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_branches` <a name="put_branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putBranches"></a>

```python
def put_branches(
  excludes: typing.List[str] = None,
  includes: typing.List[str] = None
) -> None
```

###### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putBranches.parameter.excludes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

###### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putBranches.parameter.includes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

##### `put_file_paths` <a name="put_file_paths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putFilePaths"></a>

```python
def put_file_paths(
  excludes: typing.List[str] = None,
  includes: typing.List[str] = None
) -> None
```

###### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putFilePaths.parameter.excludes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

###### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putFilePaths.parameter.includes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putTags"></a>

```python
def put_tags(
  excludes: typing.List[str] = None,
  includes: typing.List[str] = None
) -> None
```

###### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putTags.parameter.excludes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#excludes Codepipeline#excludes}.

---

###### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.putTags.parameter.includes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#includes Codepipeline#includes}.

---

##### `reset_branches` <a name="reset_branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetBranches"></a>

```python
def reset_branches() -> None
```

##### `reset_file_paths` <a name="reset_file_paths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetFilePaths"></a>

```python
def reset_file_paths() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference">CodepipelineTriggerGitConfigurationPushBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePaths">file_paths</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference">CodepipelineTriggerGitConfigurationPushFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference">CodepipelineTriggerGitConfigurationPushTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branchesInput">branches_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePathsInput">file_paths_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branches"></a>

```python
branches: CodepipelineTriggerGitConfigurationPushBranchesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranchesOutputReference">CodepipelineTriggerGitConfigurationPushBranchesOutputReference</a>

---

##### `file_paths`<sup>Required</sup> <a name="file_paths" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePaths"></a>

```python
file_paths: CodepipelineTriggerGitConfigurationPushFilePathsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePathsOutputReference">CodepipelineTriggerGitConfigurationPushFilePathsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tags"></a>

```python
tags: CodepipelineTriggerGitConfigurationPushTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference">CodepipelineTriggerGitConfigurationPushTagsOutputReference</a>

---

##### `branches_input`<sup>Optional</sup> <a name="branches_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.branchesInput"></a>

```python
branches_input: CodepipelineTriggerGitConfigurationPushBranches
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushBranches">CodepipelineTriggerGitConfigurationPushBranches</a>

---

##### `file_paths_input`<sup>Optional</sup> <a name="file_paths_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.filePathsInput"></a>

```python
file_paths_input: CodepipelineTriggerGitConfigurationPushFilePaths
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushFilePaths">CodepipelineTriggerGitConfigurationPushFilePaths</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.tagsInput"></a>

```python
tags_input: CodepipelineTriggerGitConfigurationPushTags
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodepipelineTriggerGitConfigurationPush]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>]

---


### CodepipelineTriggerGitConfigurationPushTagsOutputReference <a name="CodepipelineTriggerGitConfigurationPushTagsOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetIncludes">reset_includes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excludes` <a name="reset_excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_includes` <a name="reset_includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.resetIncludes"></a>

```python
def reset_includes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludesInput">excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includesInput">includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includes">includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludesInput"></a>

```python
excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes_input`<sup>Optional</sup> <a name="includes_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includesInput"></a>

```python
includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.includes"></a>

```python
includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTagsOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineTriggerGitConfigurationPushTags
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPushTags">CodepipelineTriggerGitConfigurationPushTags</a>

---


### CodepipelineTriggerList <a name="CodepipelineTriggerList" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineTrigger]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>]]

---


### CodepipelineTriggerOutputReference <a name="CodepipelineTriggerOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.putGitConfiguration">put_git_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_git_configuration` <a name="put_git_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.putGitConfiguration"></a>

```python
def put_git_configuration(
  source_action_name: str,
  pull_request: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPullRequest]] = None,
  push: typing.Union[IResolvable, typing.List[CodepipelineTriggerGitConfigurationPush]] = None
) -> None
```

###### `source_action_name`<sup>Required</sup> <a name="source_action_name" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.putGitConfiguration.parameter.sourceActionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#source_action_name Codepipeline#source_action_name}.

---

###### `pull_request`<sup>Optional</sup> <a name="pull_request" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.putGitConfiguration.parameter.pullRequest"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPullRequest">CodepipelineTriggerGitConfigurationPullRequest</a>]]

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#pull_request Codepipeline#pull_request}

---

###### `push`<sup>Optional</sup> <a name="push" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.putGitConfiguration.parameter.push"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationPush">CodepipelineTriggerGitConfigurationPush</a>]]

push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/codepipeline#push Codepipeline#push}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfiguration">git_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference">CodepipelineTriggerGitConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfigurationInput">git_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerTypeInput">provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_configuration`<sup>Required</sup> <a name="git_configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfiguration"></a>

```python
git_configuration: CodepipelineTriggerGitConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfigurationOutputReference">CodepipelineTriggerGitConfigurationOutputReference</a>

---

##### `git_configuration_input`<sup>Optional</sup> <a name="git_configuration_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.gitConfigurationInput"></a>

```python
git_configuration_input: CodepipelineTriggerGitConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTriggerGitConfiguration">CodepipelineTriggerGitConfiguration</a>

---

##### `provider_type_input`<sup>Optional</sup> <a name="provider_type_input" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerTypeInput"></a>

```python
provider_type_input: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineTriggerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodepipelineTrigger]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineTrigger">CodepipelineTrigger</a>]

---


### CodepipelineVariableList <a name="CodepipelineVariableList" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineVariableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineVariable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]

---


### CodepipelineVariableOutputReference <a name="CodepipelineVariableOutputReference" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineVariableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipeline.CodepipelineVariableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodepipelineVariable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]

---



