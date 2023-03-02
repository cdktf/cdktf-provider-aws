# `configRemediationConfiguration` Submodule <a name="`configRemediationConfiguration` Submodule" id="@cdktf/provider-aws.configRemediationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigRemediationConfiguration <a name="ConfigRemediationConfiguration" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration aws_config_remediation_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config_rule_name: str,
  target_id: str,
  target_type: str,
  automatic: typing.Union[bool, IResolvable] = None,
  execution_controls: ConfigRemediationConfigurationExecutionControls = None,
  id: str = None,
  maximum_automatic_attempts: typing.Union[int, float] = None,
  parameter: typing.Union[IResolvable, typing.List[ConfigRemediationConfigurationParameter]] = None,
  resource_type: str = None,
  retry_attempt_seconds: typing.Union[int, float] = None,
  target_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.configRuleName">config_rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.automatic">automatic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.executionControls">execution_controls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | execution_controls block. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#id ConfigRemediationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.maximumAutomaticAttempts">maximum_automatic_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.retryAttemptSeconds">retry_attempt_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.targetVersion">target_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_rule_name`<sup>Required</sup> <a name="config_rule_name" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.configRuleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}.

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.targetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}.

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.automatic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}.

---

##### `execution_controls`<sup>Optional</sup> <a name="execution_controls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.executionControls"></a>

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

execution_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#execution_controls ConfigRemediationConfiguration#execution_controls}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#id ConfigRemediationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_automatic_attempts`<sup>Optional</sup> <a name="maximum_automatic_attempts" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.maximumAutomaticAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.parameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#parameter ConfigRemediationConfiguration#parameter}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}.

---

##### `retry_attempt_seconds`<sup>Optional</sup> <a name="retry_attempt_seconds" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.retryAttemptSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}.

---

##### `target_version`<sup>Optional</sup> <a name="target_version" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.targetVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls">put_execution_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetAutomatic">reset_automatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetExecutionControls">reset_execution_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetMaximumAutomaticAttempts">reset_maximum_automatic_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetRetryAttemptSeconds">reset_retry_attempt_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetTargetVersion">reset_target_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_execution_controls` <a name="put_execution_controls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls"></a>

```python
def put_execution_controls(
  ssm_controls: ConfigRemediationConfigurationExecutionControlsSsmControls = None
) -> None
```

###### `ssm_controls`<sup>Optional</sup> <a name="ssm_controls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls.parameter.ssmControls"></a>

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

ssm_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#ssm_controls ConfigRemediationConfiguration#ssm_controls}

---

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[ConfigRemediationConfigurationParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>]]

---

##### `reset_automatic` <a name="reset_automatic" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetAutomatic"></a>

```python
def reset_automatic() -> None
```

##### `reset_execution_controls` <a name="reset_execution_controls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetExecutionControls"></a>

```python
def reset_execution_controls() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maximum_automatic_attempts` <a name="reset_maximum_automatic_attempts" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetMaximumAutomaticAttempts"></a>

```python
def reset_maximum_automatic_attempts() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_retry_attempt_seconds` <a name="reset_retry_attempt_seconds" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetRetryAttemptSeconds"></a>

```python
def reset_retry_attempt_seconds() -> None
```

##### `reset_target_version` <a name="reset_target_version" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.resetTargetVersion"></a>

```python
def reset_target_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControls">execution_controls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference">ConfigRemediationConfigurationExecutionControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList">ConfigRemediationConfigurationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automaticInput">automatic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleNameInput">config_rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControlsInput">execution_controls_input</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttemptsInput">maximum_automatic_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSecondsInput">retry_attempt_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersionInput">target_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automatic">automatic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleName">config_rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttempts">maximum_automatic_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSeconds">retry_attempt_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `execution_controls`<sup>Required</sup> <a name="execution_controls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControls"></a>

```python
execution_controls: ConfigRemediationConfigurationExecutionControlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference">ConfigRemediationConfigurationExecutionControlsOutputReference</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameter"></a>

```python
parameter: ConfigRemediationConfigurationParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList">ConfigRemediationConfigurationParameterList</a>

---

##### `automatic_input`<sup>Optional</sup> <a name="automatic_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automaticInput"></a>

```python
automatic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `config_rule_name_input`<sup>Optional</sup> <a name="config_rule_name_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleNameInput"></a>

```python
config_rule_name_input: str
```

- *Type:* str

---

##### `execution_controls_input`<sup>Optional</sup> <a name="execution_controls_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControlsInput"></a>

```python
execution_controls_input: ConfigRemediationConfigurationExecutionControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maximum_automatic_attempts_input`<sup>Optional</sup> <a name="maximum_automatic_attempts_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttemptsInput"></a>

```python
maximum_automatic_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[ConfigRemediationConfigurationParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>]]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `retry_attempt_seconds_input`<sup>Optional</sup> <a name="retry_attempt_seconds_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSecondsInput"></a>

```python
retry_attempt_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `target_version_input`<sup>Optional</sup> <a name="target_version_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersionInput"></a>

```python
target_version_input: str
```

- *Type:* str

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.automatic"></a>

```python
automatic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `config_rule_name`<sup>Required</sup> <a name="config_rule_name" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleName"></a>

```python
config_rule_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maximum_automatic_attempts`<sup>Required</sup> <a name="maximum_automatic_attempts" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttempts"></a>

```python
maximum_automatic_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `retry_attempt_seconds`<sup>Required</sup> <a name="retry_attempt_seconds" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSeconds"></a>

```python
retry_attempt_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigRemediationConfigurationConfig <a name="ConfigRemediationConfigurationConfig" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config_rule_name: str,
  target_id: str,
  target_type: str,
  automatic: typing.Union[bool, IResolvable] = None,
  execution_controls: ConfigRemediationConfigurationExecutionControls = None,
  id: str = None,
  maximum_automatic_attempts: typing.Union[int, float] = None,
  parameter: typing.Union[IResolvable, typing.List[ConfigRemediationConfigurationParameter]] = None,
  resource_type: str = None,
  retry_attempt_seconds: typing.Union[int, float] = None,
  target_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.configRuleName">config_rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.automatic">automatic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.executionControls">execution_controls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | execution_controls block. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#id ConfigRemediationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.maximumAutomaticAttempts">maximum_automatic_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.retryAttemptSeconds">retry_attempt_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetVersion">target_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_rule_name`<sup>Required</sup> <a name="config_rule_name" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.configRuleName"></a>

```python
config_rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}.

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}.

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.automatic"></a>

```python
automatic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}.

---

##### `execution_controls`<sup>Optional</sup> <a name="execution_controls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.executionControls"></a>

```python
execution_controls: ConfigRemediationConfigurationExecutionControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

execution_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#execution_controls ConfigRemediationConfiguration#execution_controls}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#id ConfigRemediationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_automatic_attempts`<sup>Optional</sup> <a name="maximum_automatic_attempts" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.maximumAutomaticAttempts"></a>

```python
maximum_automatic_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[ConfigRemediationConfigurationParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#parameter ConfigRemediationConfiguration#parameter}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}.

---

##### `retry_attempt_seconds`<sup>Optional</sup> <a name="retry_attempt_seconds" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.retryAttemptSeconds"></a>

```python
retry_attempt_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}.

---

##### `target_version`<sup>Optional</sup> <a name="target_version" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}.

---

### ConfigRemediationConfigurationExecutionControls <a name="ConfigRemediationConfigurationExecutionControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls(
  ssm_controls: ConfigRemediationConfigurationExecutionControlsSsmControls = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.property.ssmControls">ssm_controls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | ssm_controls block. |

---

##### `ssm_controls`<sup>Optional</sup> <a name="ssm_controls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.property.ssmControls"></a>

```python
ssm_controls: ConfigRemediationConfigurationExecutionControlsSsmControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

ssm_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#ssm_controls ConfigRemediationConfiguration#ssm_controls}

---

### ConfigRemediationConfigurationExecutionControlsSsmControls <a name="ConfigRemediationConfigurationExecutionControlsSsmControls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls(
  concurrent_execution_rate_percentage: typing.Union[int, float] = None,
  error_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.concurrentExecutionRatePercentage">concurrent_execution_rate_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.errorPercentage">error_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}. |

---

##### `concurrent_execution_rate_percentage`<sup>Optional</sup> <a name="concurrent_execution_rate_percentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.concurrentExecutionRatePercentage"></a>

```python
concurrent_execution_rate_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}.

---

##### `error_percentage`<sup>Optional</sup> <a name="error_percentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.errorPercentage"></a>

```python
error_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}.

---

### ConfigRemediationConfigurationParameter <a name="ConfigRemediationConfigurationParameter" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfigurationParameter(
  name: str,
  resource_value: str = None,
  static_value: str = None,
  static_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#name ConfigRemediationConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.resourceValue">resource_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_value ConfigRemediationConfiguration#resource_value}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValue">static_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_value ConfigRemediationConfiguration#static_value}. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValues">static_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_values ConfigRemediationConfiguration#static_values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#name ConfigRemediationConfiguration#name}.

---

##### `resource_value`<sup>Optional</sup> <a name="resource_value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.resourceValue"></a>

```python
resource_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#resource_value ConfigRemediationConfiguration#resource_value}.

---

##### `static_value`<sup>Optional</sup> <a name="static_value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValue"></a>

```python
static_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_value ConfigRemediationConfiguration#static_value}.

---

##### `static_values`<sup>Optional</sup> <a name="static_values" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValues"></a>

```python
static_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#static_values ConfigRemediationConfiguration#static_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigRemediationConfigurationExecutionControlsOutputReference <a name="ConfigRemediationConfigurationExecutionControlsOutputReference" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls">put_ssm_controls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resetSsmControls">reset_ssm_controls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssm_controls` <a name="put_ssm_controls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls"></a>

```python
def put_ssm_controls(
  concurrent_execution_rate_percentage: typing.Union[int, float] = None,
  error_percentage: typing.Union[int, float] = None
) -> None
```

###### `concurrent_execution_rate_percentage`<sup>Optional</sup> <a name="concurrent_execution_rate_percentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls.parameter.concurrentExecutionRatePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}.

---

###### `error_percentage`<sup>Optional</sup> <a name="error_percentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls.parameter.errorPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}.

---

##### `reset_ssm_controls` <a name="reset_ssm_controls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resetSsmControls"></a>

```python
def reset_ssm_controls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls">ssm_controls</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControlsInput">ssm_controls_input</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssm_controls`<sup>Required</sup> <a name="ssm_controls" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls"></a>

```python
ssm_controls: ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a>

---

##### `ssm_controls_input`<sup>Optional</sup> <a name="ssm_controls_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControlsInput"></a>

```python
ssm_controls_input: ConfigRemediationConfigurationExecutionControlsSsmControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue"></a>

```python
internal_value: ConfigRemediationConfigurationExecutionControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---


### ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference <a name="ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetConcurrentExecutionRatePercentage">reset_concurrent_execution_rate_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetErrorPercentage">reset_error_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_concurrent_execution_rate_percentage` <a name="reset_concurrent_execution_rate_percentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetConcurrentExecutionRatePercentage"></a>

```python
def reset_concurrent_execution_rate_percentage() -> None
```

##### `reset_error_percentage` <a name="reset_error_percentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetErrorPercentage"></a>

```python
def reset_error_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentageInput">concurrent_execution_rate_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentageInput">error_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage">concurrent_execution_rate_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage">error_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `concurrent_execution_rate_percentage_input`<sup>Optional</sup> <a name="concurrent_execution_rate_percentage_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentageInput"></a>

```python
concurrent_execution_rate_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_percentage_input`<sup>Optional</sup> <a name="error_percentage_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentageInput"></a>

```python
error_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `concurrent_execution_rate_percentage`<sup>Required</sup> <a name="concurrent_execution_rate_percentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage"></a>

```python
concurrent_execution_rate_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_percentage`<sup>Required</sup> <a name="error_percentage" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage"></a>

```python
error_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue"></a>

```python
internal_value: ConfigRemediationConfigurationExecutionControlsSsmControls
```

- *Type:* <a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---


### ConfigRemediationConfigurationParameterList <a name="ConfigRemediationConfigurationParameterList" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfigurationParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigRemediationConfigurationParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigRemediationConfigurationParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>]]

---


### ConfigRemediationConfigurationParameterOutputReference <a name="ConfigRemediationConfigurationParameterOutputReference" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_remediation_configuration

configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetResourceValue">reset_resource_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValue">reset_static_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValues">reset_static_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_value` <a name="reset_resource_value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetResourceValue"></a>

```python
def reset_resource_value() -> None
```

##### `reset_static_value` <a name="reset_static_value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValue"></a>

```python
def reset_static_value() -> None
```

##### `reset_static_values` <a name="reset_static_values" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValues"></a>

```python
def reset_static_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValueInput">resource_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValueInput">static_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValuesInput">static_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValue">resource_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValue">static_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValues">static_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_value_input`<sup>Optional</sup> <a name="resource_value_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValueInput"></a>

```python
resource_value_input: str
```

- *Type:* str

---

##### `static_value_input`<sup>Optional</sup> <a name="static_value_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValueInput"></a>

```python
static_value_input: str
```

- *Type:* str

---

##### `static_values_input`<sup>Optional</sup> <a name="static_values_input" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValuesInput"></a>

```python
static_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_value`<sup>Required</sup> <a name="resource_value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValue"></a>

```python
resource_value: str
```

- *Type:* str

---

##### `static_value`<sup>Required</sup> <a name="static_value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValue"></a>

```python
static_value: str
```

- *Type:* str

---

##### `static_values`<sup>Required</sup> <a name="static_values" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValues"></a>

```python
static_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConfigRemediationConfigurationParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>, cdktf.IResolvable]

---



