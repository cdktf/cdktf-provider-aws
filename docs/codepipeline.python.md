# `codepipeline` Submodule <a name="`codepipeline` Submodule" id="@cdktf/provider-aws.codepipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Codepipeline <a name="Codepipeline" id="@cdktf/provider-aws.codepipeline.Codepipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline aws_codepipeline}.

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
  id: str = None,
  pipeline_type: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
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
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.stage">stage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]</code> | stage block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.pipelineType">pipeline_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#tags Codepipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#artifact_store Codepipeline#artifact_store}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.stage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#stage Codepipeline#stage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipeline_type`<sup>Optional</sup> <a name="pipeline_type" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.pipelineType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#tags Codepipeline#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}.

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-aws.codepipeline.Codepipeline.Initializer.parameter.variable"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#variable Codepipeline#variable}

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
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.putVariable">put_variable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetPipelineType">reset_pipeline_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.resetTagsAll">reset_tags_all</a></code> | *No description.* |
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

##### `put_variable` <a name="put_variable" id="@cdktf/provider-aws.codepipeline.Codepipeline.putVariable"></a>

```python
def put_variable(
  value: typing.Union[IResolvable, typing.List[CodepipelineVariable]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipeline.Codepipeline.putVariable.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]

---

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

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariableList">CodepipelineVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.artifactStoreInput">artifact_store_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore">CodepipelineArtifactStore</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.pipelineTypeInput">pipeline_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.stageInput">stage_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.Codepipeline.property.variableInput">variable_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]</code> | *No description.* |
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

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktf/provider-aws.codepipeline.Codepipeline.property.variableInput"></a>

```python
variable_input: typing.Union[IResolvable, typing.List[CodepipelineVariable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]

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
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#location Codepipeline#location}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#type Codepipeline#type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#region Codepipeline#region}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#location Codepipeline#location}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#type Codepipeline#type}.

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.encryptionKey"></a>

```python
encryption_key: CodepipelineArtifactStoreEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey">CodepipelineArtifactStoreEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#encryption_key Codepipeline#encryption_key}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStore.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#region Codepipeline#region}.

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
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#type Codepipeline#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreEncryptionKey.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#type Codepipeline#type}.

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
  id: str = None,
  pipeline_type: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
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
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.stage">stage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]</code> | stage block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#id Codepipeline#id}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.pipelineType">pipeline_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#tags Codepipeline#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#artifact_store Codepipeline#artifact_store}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.stage"></a>

```python
stage: typing.Union[IResolvable, typing.List[CodepipelineStage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage">CodepipelineStage</a>]]

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#stage Codepipeline#stage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipeline_type`<sup>Optional</sup> <a name="pipeline_type" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.pipelineType"></a>

```python
pipeline_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#pipeline_type Codepipeline#pipeline_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#tags Codepipeline#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#tags_all Codepipeline#tags_all}.

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-aws.codepipeline.CodepipelineConfig.property.variable"></a>

```python
variable: typing.Union[IResolvable, typing.List[CodepipelineVariable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable">CodepipelineVariable</a>]]

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#variable Codepipeline#variable}

---

### CodepipelineStage <a name="CodepipelineStage" id="@cdktf/provider-aws.codepipeline.CodepipelineStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline

codepipeline.CodepipelineStage(
  action: typing.Union[IResolvable, typing.List[CodepipelineStageAction]],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.action">action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStage.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#name Codepipeline#name}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.action"></a>

```python
action: typing.Union[IResolvable, typing.List[CodepipelineStageAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#action Codepipeline#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStage.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#name Codepipeline#name}.

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
  run_order: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#category Codepipeline#category}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#owner Codepipeline#owner}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.provider">provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#provider Codepipeline#provider}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#version Codepipeline#version}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#configuration Codepipeline#configuration}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.inputArtifacts">input_artifacts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#namespace Codepipeline#namespace}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.outputArtifacts">output_artifacts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#output_artifacts Codepipeline#output_artifacts}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#region Codepipeline#region}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.runOrder">run_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#run_order Codepipeline#run_order}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#category Codepipeline#category}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#owner Codepipeline#owner}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.provider"></a>

```python
provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#provider Codepipeline#provider}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#version Codepipeline#version}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#configuration Codepipeline#configuration}.

---

##### `input_artifacts`<sup>Optional</sup> <a name="input_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.inputArtifacts"></a>

```python
input_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#input_artifacts Codepipeline#input_artifacts}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#namespace Codepipeline#namespace}.

---

##### `output_artifacts`<sup>Optional</sup> <a name="output_artifacts" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.outputArtifacts"></a>

```python
output_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#output_artifacts Codepipeline#output_artifacts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#region Codepipeline#region}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#role_arn Codepipeline#role_arn}.

---

##### `run_order`<sup>Optional</sup> <a name="run_order" id="@cdktf/provider-aws.codepipeline.CodepipelineStageAction.property.runOrder"></a>

```python
run_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#run_order Codepipeline#run_order}.

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
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#name Codepipeline#name}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#default_value Codepipeline#default_value}. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#description Codepipeline#description}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#name Codepipeline#name}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#default_value Codepipeline#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.codepipeline.CodepipelineVariable.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#description Codepipeline#description}.

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#id Codepipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codepipeline.CodepipelineArtifactStoreOutputReference.putEncryptionKey.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/codepipeline#type Codepipeline#type}.

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageActionList">CodepipelineStageActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.actionInput">action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
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

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.actionInput"></a>

```python
action_input: typing.Union[IResolvable, typing.List[CodepipelineStageAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipeline.CodepipelineStageAction">CodepipelineStageAction</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codepipeline.CodepipelineStageOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

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



