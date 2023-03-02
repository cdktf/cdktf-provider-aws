# `lambdaFunctionEventInvokeConfig` Submodule <a name="`lambdaFunctionEventInvokeConfig` Submodule" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunctionEventInvokeConfig <a name="LambdaFunctionEventInvokeConfig" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config aws_lambda_function_event_invoke_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_event_invoke_config

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  destination_config: LambdaFunctionEventInvokeConfigDestinationConfig = None,
  id: str = None,
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None,
  qualifier: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#function_name LambdaFunctionEventInvokeConfig#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.destinationConfig">destination_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a></code> | destination_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#id LambdaFunctionEventInvokeConfig#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#qualifier LambdaFunctionEventInvokeConfig#qualifier}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#function_name LambdaFunctionEventInvokeConfig#function_name}.

---

##### `destination_config`<sup>Optional</sup> <a name="destination_config" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.destinationConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

destination_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination_config LambdaFunctionEventInvokeConfig#destination_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#id LambdaFunctionEventInvokeConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.maximumEventAgeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}.

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.maximumRetryAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.Initializer.parameter.qualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#qualifier LambdaFunctionEventInvokeConfig#qualifier}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.putDestinationConfig">put_destination_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetDestinationConfig">reset_destination_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumEventAgeInSeconds">reset_maximum_event_age_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumRetryAttempts">reset_maximum_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetQualifier">reset_qualifier</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_destination_config` <a name="put_destination_config" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.putDestinationConfig"></a>

```python
def put_destination_config(
  on_failure: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure = None,
  on_success: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess = None
) -> None
```

###### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.putDestinationConfig.parameter.onFailure"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#on_failure LambdaFunctionEventInvokeConfig#on_failure}

---

###### `on_success`<sup>Optional</sup> <a name="on_success" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.putDestinationConfig.parameter.onSuccess"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

on_success block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#on_success LambdaFunctionEventInvokeConfig#on_success}

---

##### `reset_destination_config` <a name="reset_destination_config" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetDestinationConfig"></a>

```python
def reset_destination_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maximum_event_age_in_seconds` <a name="reset_maximum_event_age_in_seconds" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumEventAgeInSeconds"></a>

```python
def reset_maximum_event_age_in_seconds() -> None
```

##### `reset_maximum_retry_attempts` <a name="reset_maximum_retry_attempts" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetMaximumRetryAttempts"></a>

```python
def reset_maximum_retry_attempts() -> None
```

##### `reset_qualifier` <a name="reset_qualifier" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.resetQualifier"></a>

```python
def reset_qualifier() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_event_invoke_config

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_event_invoke_config

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_event_invoke_config

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfig">destination_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfigInput">destination_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSecondsInput">maximum_event_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttemptsInput">maximum_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifierInput">qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_config`<sup>Required</sup> <a name="destination_config" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfig"></a>

```python
destination_config: LambdaFunctionEventInvokeConfigDestinationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOutputReference</a>

---

##### `destination_config_input`<sup>Optional</sup> <a name="destination_config_input" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.destinationConfigInput"></a>

```python
destination_config_input: LambdaFunctionEventInvokeConfigDestinationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maximum_event_age_in_seconds_input`<sup>Optional</sup> <a name="maximum_event_age_in_seconds_input" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSecondsInput"></a>

```python
maximum_event_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts_input`<sup>Optional</sup> <a name="maximum_retry_attempts_input" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttemptsInput"></a>

```python
maximum_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifierInput"></a>

```python
qualifier_input: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maximum_event_age_in_seconds`<sup>Required</sup> <a name="maximum_event_age_in_seconds" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts`<sup>Required</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionEventInvokeConfigConfig <a name="LambdaFunctionEventInvokeConfigConfig" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_event_invoke_config

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  destination_config: LambdaFunctionEventInvokeConfigDestinationConfig = None,
  id: str = None,
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None,
  qualifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#function_name LambdaFunctionEventInvokeConfig#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.destinationConfig">destination_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a></code> | destination_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#id LambdaFunctionEventInvokeConfig#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#qualifier LambdaFunctionEventInvokeConfig#qualifier}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#function_name LambdaFunctionEventInvokeConfig#function_name}.

---

##### `destination_config`<sup>Optional</sup> <a name="destination_config" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.destinationConfig"></a>

```python
destination_config: LambdaFunctionEventInvokeConfigDestinationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

destination_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination_config LambdaFunctionEventInvokeConfig#destination_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#id LambdaFunctionEventInvokeConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}.

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#qualifier LambdaFunctionEventInvokeConfig#qualifier}.

---

### LambdaFunctionEventInvokeConfigDestinationConfig <a name="LambdaFunctionEventInvokeConfigDestinationConfig" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_event_invoke_config

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig(
  on_failure: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure = None,
  on_success: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onSuccess">on_success</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a></code> | on_success block. |

---

##### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onFailure"></a>

```python
on_failure: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#on_failure LambdaFunctionEventInvokeConfig#on_failure}

---

##### `on_success`<sup>Optional</sup> <a name="on_success" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig.property.onSuccess"></a>

```python
on_success: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

on_success block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#on_success LambdaFunctionEventInvokeConfig#on_success}

---

### LambdaFunctionEventInvokeConfigDestinationConfigOnFailure <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnFailure" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_event_invoke_config

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}.

---

### LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_event_invoke_config

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_event_invoke_config

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

---


### LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference <a name="LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_event_invoke_config

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

---


### LambdaFunctionEventInvokeConfigDestinationConfigOutputReference <a name="LambdaFunctionEventInvokeConfigDestinationConfigOutputReference" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_event_invoke_config

lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnFailure">put_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnSuccess">put_on_success</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnFailure">reset_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess">reset_on_success</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_failure` <a name="put_on_failure" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnFailure"></a>

```python
def put_on_failure(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnFailure.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}.

---

##### `put_on_success` <a name="put_on_success" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnSuccess"></a>

```python
def put_on_success(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.putOnSuccess.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}.

---

##### `reset_on_failure` <a name="reset_on_failure" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnFailure"></a>

```python
def reset_on_failure() -> None
```

##### `reset_on_success` <a name="reset_on_success" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess"></a>

```python
def reset_on_success() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccess">on_success</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput">on_failure_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput">on_success_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailure"></a>

```python
on_failure: LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference</a>

---

##### `on_success`<sup>Required</sup> <a name="on_success" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccess"></a>

```python
on_success: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference</a>

---

##### `on_failure_input`<sup>Optional</sup> <a name="on_failure_input" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput"></a>

```python
on_failure_input: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnFailure">LambdaFunctionEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `on_success_input`<sup>Optional</sup> <a name="on_success_input" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput"></a>

```python
on_success_input: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess">LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionEventInvokeConfigDestinationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfigDestinationConfig">LambdaFunctionEventInvokeConfigDestinationConfig</a>

---



