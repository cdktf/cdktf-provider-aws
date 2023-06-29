# `aws_pipes_pipe`

Refer to the Terraform Registory for docs: [`aws_pipes_pipe`](https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe).

# `pipesPipe` Submodule <a name="`pipesPipe` Submodule" id="@cdktf/provider-aws.pipesPipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipesPipe <a name="PipesPipe" id="@cdktf/provider-aws.pipesPipe.PipesPipe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe aws_pipes_pipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipe(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_arn: str,
  source: str,
  source_parameters: PipesPipeSourceParameters,
  target: str,
  target_parameters: PipesPipeTargetParameters,
  description: str = None,
  desired_state: str = None,
  enrichment: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: PipesPipeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#source PipesPipe#source}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.sourceParameters">source_parameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a></code> | source_parameters block. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#target PipesPipe#target}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.targetParameters">target_parameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a></code> | target_parameters block. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#description PipesPipe#description}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.enrichment">enrichment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#id PipesPipe#id}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#name PipesPipe#name}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#tags PipesPipe#tags}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#source PipesPipe#source}.

---

##### `source_parameters`<sup>Required</sup> <a name="source_parameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.sourceParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

source_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#source_parameters PipesPipe#source_parameters}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#target PipesPipe#target}.

---

##### `target_parameters`<sup>Required</sup> <a name="target_parameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.targetParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

target_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#target_parameters PipesPipe#target_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#description PipesPipe#description}.

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.desiredState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}.

---

##### `enrichment`<sup>Optional</sup> <a name="enrichment" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.enrichment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#id PipesPipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#name PipesPipe#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#tags PipesPipe#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#timeouts PipesPipe#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.putSourceParameters">put_source_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.putTargetParameters">put_target_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetEnrichment">reset_enrichment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pipesPipe.PipesPipe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.pipesPipe.PipesPipe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.pipesPipe.PipesPipe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_source_parameters` <a name="put_source_parameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putSourceParameters"></a>

```python
def put_source_parameters(
  filter_criteria: PipesPipeSourceParametersFilterCriteria = None
) -> None
```

###### `filter_criteria`<sup>Optional</sup> <a name="filter_criteria" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putSourceParameters.parameter.filterCriteria"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

filter_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#filter_criteria PipesPipe#filter_criteria}

---

##### `put_target_parameters` <a name="put_target_parameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTargetParameters"></a>

```python
def put_target_parameters(
  input_template: str = None
) -> None
```

###### `input_template`<sup>Optional</sup> <a name="input_template" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTargetParameters.parameter.inputTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#input_template PipesPipe#input_template}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#create PipesPipe#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#delete PipesPipe#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#update PipesPipe#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_enrichment` <a name="reset_enrichment" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetEnrichment"></a>

```python
def reset_enrichment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipe.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParameters">source_parameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference">PipesPipeSourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParameters">target_parameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference">PipesPipeTargetParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference">PipesPipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichmentInput">enrichment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParametersInput">source_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParametersInput">target_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichment">enrichment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `source_parameters`<sup>Required</sup> <a name="source_parameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParameters"></a>

```python
source_parameters: PipesPipeSourceParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference">PipesPipeSourceParametersOutputReference</a>

---

##### `target_parameters`<sup>Required</sup> <a name="target_parameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParameters"></a>

```python
target_parameters: PipesPipeTargetParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference">PipesPipeTargetParametersOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeouts"></a>

```python
timeouts: PipesPipeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference">PipesPipeTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `enrichment_input`<sup>Optional</sup> <a name="enrichment_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichmentInput"></a>

```python
enrichment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source_parameters_input`<sup>Optional</sup> <a name="source_parameters_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParametersInput"></a>

```python
source_parameters_input: PipesPipeSourceParameters
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `target_parameters_input`<sup>Optional</sup> <a name="target_parameters_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParametersInput"></a>

```python
target_parameters_input: PipesPipeTargetParameters
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PipesPipeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `enrichment`<sup>Required</sup> <a name="enrichment" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichment"></a>

```python
enrichment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PipesPipeConfig <a name="PipesPipeConfig" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_arn: str,
  source: str,
  source_parameters: PipesPipeSourceParameters,
  target: str,
  target_parameters: PipesPipeTargetParameters,
  description: str = None,
  desired_state: str = None,
  enrichment: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: PipesPipeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#source PipesPipe#source}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.sourceParameters">source_parameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a></code> | source_parameters block. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#target PipesPipe#target}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.targetParameters">target_parameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a></code> | target_parameters block. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#description PipesPipe#description}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.enrichment">enrichment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#id PipesPipe#id}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#name PipesPipe#name}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#tags PipesPipe#tags}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#source PipesPipe#source}.

---

##### `source_parameters`<sup>Required</sup> <a name="source_parameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.sourceParameters"></a>

```python
source_parameters: PipesPipeSourceParameters
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

source_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#source_parameters PipesPipe#source_parameters}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#target PipesPipe#target}.

---

##### `target_parameters`<sup>Required</sup> <a name="target_parameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.targetParameters"></a>

```python
target_parameters: PipesPipeTargetParameters
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

target_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#target_parameters PipesPipe#target_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#description PipesPipe#description}.

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}.

---

##### `enrichment`<sup>Optional</sup> <a name="enrichment" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.enrichment"></a>

```python
enrichment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#id PipesPipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#name PipesPipe#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#tags PipesPipe#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.timeouts"></a>

```python
timeouts: PipesPipeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#timeouts PipesPipe#timeouts}

---

### PipesPipeSourceParameters <a name="PipesPipeSourceParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeSourceParameters(
  filter_criteria: PipesPipeSourceParametersFilterCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters.property.filterCriteria">filter_criteria</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a></code> | filter_criteria block. |

---

##### `filter_criteria`<sup>Optional</sup> <a name="filter_criteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters.property.filterCriteria"></a>

```python
filter_criteria: PipesPipeSourceParametersFilterCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

filter_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#filter_criteria PipesPipe#filter_criteria}

---

### PipesPipeSourceParametersFilterCriteria <a name="PipesPipeSourceParametersFilterCriteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeSourceParametersFilterCriteria(
  filter: typing.Union[IResolvable, typing.List[PipesPipeSourceParametersFilterCriteriaFilter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>]]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[PipesPipeSourceParametersFilterCriteriaFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#filter PipesPipe#filter}

---

### PipesPipeSourceParametersFilterCriteriaFilter <a name="PipesPipeSourceParametersFilterCriteriaFilter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter(
  pattern: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter.property.pattern">pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#pattern PipesPipe#pattern}. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#pattern PipesPipe#pattern}.

---

### PipesPipeTargetParameters <a name="PipesPipeTargetParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeTargetParameters(
  input_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters.property.inputTemplate">input_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#input_template PipesPipe#input_template}. |

---

##### `input_template`<sup>Optional</sup> <a name="input_template" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters.property.inputTemplate"></a>

```python
input_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#input_template PipesPipe#input_template}.

---

### PipesPipeTimeouts <a name="PipesPipeTimeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#create PipesPipe#create}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#delete PipesPipe#delete}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#update PipesPipe#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#create PipesPipe#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#delete PipesPipe#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#update PipesPipe#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipesPipeSourceParametersFilterCriteriaFilterList <a name="PipesPipeSourceParametersFilterCriteriaFilterList" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PipesPipeSourceParametersFilterCriteriaFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PipesPipeSourceParametersFilterCriteriaFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>]]

---


### PipesPipeSourceParametersFilterCriteriaFilterOutputReference <a name="PipesPipeSourceParametersFilterCriteriaFilterOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PipesPipeSourceParametersFilterCriteriaFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>]

---


### PipesPipeSourceParametersFilterCriteriaOutputReference <a name="PipesPipeSourceParametersFilterCriteriaOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[PipesPipeSourceParametersFilterCriteriaFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList">PipesPipeSourceParametersFilterCriteriaFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filter"></a>

```python
filter: PipesPipeSourceParametersFilterCriteriaFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList">PipesPipeSourceParametersFilterCriteriaFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[PipesPipeSourceParametersFilterCriteriaFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: PipesPipeSourceParametersFilterCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

---


### PipesPipeSourceParametersOutputReference <a name="PipesPipeSourceParametersOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeSourceParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.putFilterCriteria">put_filter_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resetFilterCriteria">reset_filter_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter_criteria` <a name="put_filter_criteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.putFilterCriteria"></a>

```python
def put_filter_criteria(
  filter: typing.Union[IResolvable, typing.List[PipesPipeSourceParametersFilterCriteriaFilter]] = None
) -> None
```

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.putFilterCriteria.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/pipes_pipe#filter PipesPipe#filter}

---

##### `reset_filter_criteria` <a name="reset_filter_criteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resetFilterCriteria"></a>

```python
def reset_filter_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteria">filter_criteria</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference">PipesPipeSourceParametersFilterCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteriaInput">filter_criteria_input</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_criteria`<sup>Required</sup> <a name="filter_criteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteria"></a>

```python
filter_criteria: PipesPipeSourceParametersFilterCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference">PipesPipeSourceParametersFilterCriteriaOutputReference</a>

---

##### `filter_criteria_input`<sup>Optional</sup> <a name="filter_criteria_input" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteriaInput"></a>

```python
filter_criteria_input: PipesPipeSourceParametersFilterCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.internalValue"></a>

```python
internal_value: PipesPipeSourceParameters
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

---


### PipesPipeTargetParametersOutputReference <a name="PipesPipeTargetParametersOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeTargetParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resetInputTemplate">reset_input_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_template` <a name="reset_input_template" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resetInputTemplate"></a>

```python
def reset_input_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplateInput">input_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplate">input_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_template_input`<sup>Optional</sup> <a name="input_template_input" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplateInput"></a>

```python
input_template_input: str
```

- *Type:* str

---

##### `input_template`<sup>Required</sup> <a name="input_template" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplate"></a>

```python
input_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.internalValue"></a>

```python
internal_value: PipesPipeTargetParameters
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

---


### PipesPipeTimeoutsOutputReference <a name="PipesPipeTimeoutsOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pipes_pipe

pipesPipe.PipesPipeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PipesPipeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a>]

---



