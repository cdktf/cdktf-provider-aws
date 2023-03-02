# `sfnStateMachine` Submodule <a name="`sfnStateMachine` Submodule" id="@cdktf/provider-aws.sfnStateMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SfnStateMachine <a name="SfnStateMachine" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine aws_sfn_state_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sfn_state_machine

sfnStateMachine.SfnStateMachine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  definition: str,
  role_arn: str,
  id: str = None,
  logging_configuration: SfnStateMachineLoggingConfiguration = None,
  name: str = None,
  name_prefix: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tracing_configuration: SfnStateMachineTracingConfiguration = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.definition">definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#definition SfnStateMachine#definition}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#role_arn SfnStateMachine#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#id SfnStateMachine#id}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name SfnStateMachine#name}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags SfnStateMachine#tags}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags_all SfnStateMachine#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tracingConfiguration">tracing_configuration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | tracing_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#type SfnStateMachine#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.definition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#definition SfnStateMachine#definition}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#role_arn SfnStateMachine#role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#id SfnStateMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#logging_configuration SfnStateMachine#logging_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name SfnStateMachine#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags SfnStateMachine#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags_all SfnStateMachine#tags_all}.

---

##### `tracing_configuration`<sup>Optional</sup> <a name="tracing_configuration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tracingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tracing_configuration SfnStateMachine#tracing_configuration}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#type SfnStateMachine#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration">put_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration">put_tracing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetLoggingConfiguration">reset_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTracingConfiguration">reset_tracing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_logging_configuration` <a name="put_logging_configuration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration"></a>

```python
def put_logging_configuration(
  include_execution_data: typing.Union[bool, IResolvable] = None,
  level: str = None,
  log_destination: str = None
) -> None
```

###### `include_execution_data`<sup>Optional</sup> <a name="include_execution_data" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration.parameter.includeExecutionData"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#include_execution_data SfnStateMachine#include_execution_data}.

---

###### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration.parameter.level"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#level SfnStateMachine#level}.

---

###### `log_destination`<sup>Optional</sup> <a name="log_destination" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration.parameter.logDestination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#log_destination SfnStateMachine#log_destination}.

---

##### `put_tracing_configuration` <a name="put_tracing_configuration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration"></a>

```python
def put_tracing_configuration(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#enabled SfnStateMachine#enabled}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_configuration` <a name="reset_logging_configuration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetLoggingConfiguration"></a>

```python
def reset_logging_configuration() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_tracing_configuration` <a name="reset_tracing_configuration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTracingConfiguration"></a>

```python
def reset_tracing_configuration() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sfn_state_machine

sfnStateMachine.SfnStateMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sfn_state_machine

sfnStateMachine.SfnStateMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sfn_state_machine

sfnStateMachine.SfnStateMachine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference">SfnStateMachineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfiguration">tracing_configuration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference">SfnStateMachineTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definitionInput">definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfigurationInput">logging_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfigurationInput">tracing_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definition">definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `logging_configuration`<sup>Required</sup> <a name="logging_configuration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfiguration"></a>

```python
logging_configuration: SfnStateMachineLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference">SfnStateMachineLoggingConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tracing_configuration`<sup>Required</sup> <a name="tracing_configuration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfiguration"></a>

```python
tracing_configuration: SfnStateMachineTracingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference">SfnStateMachineTracingConfigurationOutputReference</a>

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definitionInput"></a>

```python
definition_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logging_configuration_input`<sup>Optional</sup> <a name="logging_configuration_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfigurationInput"></a>

```python
logging_configuration_input: SfnStateMachineLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tracing_configuration_input`<sup>Optional</sup> <a name="tracing_configuration_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfigurationInput"></a>

```python
tracing_configuration_input: SfnStateMachineTracingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definition"></a>

```python
definition: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SfnStateMachineConfig <a name="SfnStateMachineConfig" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sfn_state_machine

sfnStateMachine.SfnStateMachineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  definition: str,
  role_arn: str,
  id: str = None,
  logging_configuration: SfnStateMachineLoggingConfiguration = None,
  name: str = None,
  name_prefix: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tracing_configuration: SfnStateMachineTracingConfiguration = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.definition">definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#definition SfnStateMachine#definition}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#role_arn SfnStateMachine#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#id SfnStateMachine#id}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name SfnStateMachine#name}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags SfnStateMachine#tags}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags_all SfnStateMachine#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tracingConfiguration">tracing_configuration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | tracing_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#type SfnStateMachine#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.definition"></a>

```python
definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#definition SfnStateMachine#definition}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#role_arn SfnStateMachine#role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#id SfnStateMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.loggingConfiguration"></a>

```python
logging_configuration: SfnStateMachineLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#logging_configuration SfnStateMachine#logging_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name SfnStateMachine#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags SfnStateMachine#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tags_all SfnStateMachine#tags_all}.

---

##### `tracing_configuration`<sup>Optional</sup> <a name="tracing_configuration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tracingConfiguration"></a>

```python
tracing_configuration: SfnStateMachineTracingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#tracing_configuration SfnStateMachine#tracing_configuration}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#type SfnStateMachine#type}.

---

### SfnStateMachineLoggingConfiguration <a name="SfnStateMachineLoggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sfn_state_machine

sfnStateMachine.SfnStateMachineLoggingConfiguration(
  include_execution_data: typing.Union[bool, IResolvable] = None,
  level: str = None,
  log_destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.includeExecutionData">include_execution_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#include_execution_data SfnStateMachine#include_execution_data}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#level SfnStateMachine#level}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.logDestination">log_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#log_destination SfnStateMachine#log_destination}. |

---

##### `include_execution_data`<sup>Optional</sup> <a name="include_execution_data" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.includeExecutionData"></a>

```python
include_execution_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#include_execution_data SfnStateMachine#include_execution_data}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#level SfnStateMachine#level}.

---

##### `log_destination`<sup>Optional</sup> <a name="log_destination" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#log_destination SfnStateMachine#log_destination}.

---

### SfnStateMachineTracingConfiguration <a name="SfnStateMachineTracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sfn_state_machine

sfnStateMachine.SfnStateMachineTracingConfiguration(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#enabled SfnStateMachine#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine#enabled SfnStateMachine#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### SfnStateMachineLoggingConfigurationOutputReference <a name="SfnStateMachineLoggingConfigurationOutputReference" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sfn_state_machine

sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData">reset_include_execution_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLevel">reset_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLogDestination">reset_log_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_execution_data` <a name="reset_include_execution_data" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData"></a>

```python
def reset_include_execution_data() -> None
```

##### `reset_level` <a name="reset_level" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLevel"></a>

```python
def reset_level() -> None
```

##### `reset_log_destination` <a name="reset_log_destination" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLogDestination"></a>

```python
def reset_log_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput">include_execution_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestinationInput">log_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionData">include_execution_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestination">log_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_execution_data_input`<sup>Optional</sup> <a name="include_execution_data_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput"></a>

```python
include_execution_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `log_destination_input`<sup>Optional</sup> <a name="log_destination_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestinationInput"></a>

```python
log_destination_input: str
```

- *Type:* str

---

##### `include_execution_data`<sup>Required</sup> <a name="include_execution_data" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionData"></a>

```python
include_execution_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `log_destination`<sup>Required</sup> <a name="log_destination" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: SfnStateMachineLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

---


### SfnStateMachineTracingConfigurationOutputReference <a name="SfnStateMachineTracingConfigurationOutputReference" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sfn_state_machine

sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: SfnStateMachineTracingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

---



