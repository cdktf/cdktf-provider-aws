# `cognitoRiskConfiguration` Submodule <a name="`cognitoRiskConfiguration` Submodule" id="@cdktf/provider-aws.cognitoRiskConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoRiskConfiguration <a name="CognitoRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration aws_cognito_risk_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_pool_id: str,
  account_takeover_risk_configuration: CognitoRiskConfigurationAccountTakeoverRiskConfiguration = None,
  client_id: str = None,
  compromised_credentials_risk_configuration: CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration = None,
  id: str = None,
  risk_exception_configuration: CognitoRiskConfigurationRiskExceptionConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.accountTakeoverRiskConfiguration">account_takeover_risk_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a></code> | account_takeover_risk_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.compromisedCredentialsRiskConfiguration">compromised_credentials_risk_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a></code> | compromised_credentials_risk_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#id CognitoRiskConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.riskExceptionConfiguration">risk_exception_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a></code> | risk_exception_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}.

---

##### `account_takeover_risk_configuration`<sup>Optional</sup> <a name="account_takeover_risk_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.accountTakeoverRiskConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

account_takeover_risk_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#account_takeover_risk_configuration CognitoRiskConfiguration#account_takeover_risk_configuration}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}.

---

##### `compromised_credentials_risk_configuration`<sup>Optional</sup> <a name="compromised_credentials_risk_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.compromisedCredentialsRiskConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

compromised_credentials_risk_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#compromised_credentials_risk_configuration CognitoRiskConfiguration#compromised_credentials_risk_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#id CognitoRiskConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `risk_exception_configuration`<sup>Optional</sup> <a name="risk_exception_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.riskExceptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

risk_exception_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#risk_exception_configuration CognitoRiskConfiguration#risk_exception_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putAccountTakeoverRiskConfiguration">put_account_takeover_risk_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putCompromisedCredentialsRiskConfiguration">put_compromised_credentials_risk_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putRiskExceptionConfiguration">put_risk_exception_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetAccountTakeoverRiskConfiguration">reset_account_takeover_risk_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetCompromisedCredentialsRiskConfiguration">reset_compromised_credentials_risk_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetRiskExceptionConfiguration">reset_risk_exception_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_account_takeover_risk_configuration` <a name="put_account_takeover_risk_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putAccountTakeoverRiskConfiguration"></a>

```python
def put_account_takeover_risk_configuration(
  actions: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions,
  notify_configuration: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration
) -> None
```

###### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putAccountTakeoverRiskConfiguration.parameter.actions"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}

---

###### `notify_configuration`<sup>Required</sup> <a name="notify_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putAccountTakeoverRiskConfiguration.parameter.notifyConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

notify_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify_configuration CognitoRiskConfiguration#notify_configuration}

---

##### `put_compromised_credentials_risk_configuration` <a name="put_compromised_credentials_risk_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putCompromisedCredentialsRiskConfiguration"></a>

```python
def put_compromised_credentials_risk_configuration(
  actions: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions,
  event_filter: typing.List[str] = None
) -> None
```

###### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putCompromisedCredentialsRiskConfiguration.parameter.actions"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}

---

###### `event_filter`<sup>Optional</sup> <a name="event_filter" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putCompromisedCredentialsRiskConfiguration.parameter.eventFilter"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_filter CognitoRiskConfiguration#event_filter}.

---

##### `put_risk_exception_configuration` <a name="put_risk_exception_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putRiskExceptionConfiguration"></a>

```python
def put_risk_exception_configuration(
  blocked_ip_range_list: typing.List[str] = None,
  skipped_ip_range_list: typing.List[str] = None
) -> None
```

###### `blocked_ip_range_list`<sup>Optional</sup> <a name="blocked_ip_range_list" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putRiskExceptionConfiguration.parameter.blockedIpRangeList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#blocked_ip_range_list CognitoRiskConfiguration#blocked_ip_range_list}.

---

###### `skipped_ip_range_list`<sup>Optional</sup> <a name="skipped_ip_range_list" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putRiskExceptionConfiguration.parameter.skippedIpRangeList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#skipped_ip_range_list CognitoRiskConfiguration#skipped_ip_range_list}.

---

##### `reset_account_takeover_risk_configuration` <a name="reset_account_takeover_risk_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetAccountTakeoverRiskConfiguration"></a>

```python
def reset_account_takeover_risk_configuration() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_compromised_credentials_risk_configuration` <a name="reset_compromised_credentials_risk_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetCompromisedCredentialsRiskConfiguration"></a>

```python
def reset_compromised_credentials_risk_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_risk_exception_configuration` <a name="reset_risk_exception_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetRiskExceptionConfiguration"></a>

```python
def reset_risk_exception_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfiguration">account_takeover_risk_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfiguration">compromised_credentials_risk_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfiguration">risk_exception_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference">CognitoRiskConfigurationRiskExceptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfigurationInput">account_takeover_risk_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfigurationInput">compromised_credentials_risk_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfigurationInput">risk_exception_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_takeover_risk_configuration`<sup>Required</sup> <a name="account_takeover_risk_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfiguration"></a>

```python
account_takeover_risk_configuration: CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference</a>

---

##### `compromised_credentials_risk_configuration`<sup>Required</sup> <a name="compromised_credentials_risk_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfiguration"></a>

```python
compromised_credentials_risk_configuration: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference</a>

---

##### `risk_exception_configuration`<sup>Required</sup> <a name="risk_exception_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfiguration"></a>

```python
risk_exception_configuration: CognitoRiskConfigurationRiskExceptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference">CognitoRiskConfigurationRiskExceptionConfigurationOutputReference</a>

---

##### `account_takeover_risk_configuration_input`<sup>Optional</sup> <a name="account_takeover_risk_configuration_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfigurationInput"></a>

```python
account_takeover_risk_configuration_input: CognitoRiskConfigurationAccountTakeoverRiskConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `compromised_credentials_risk_configuration_input`<sup>Optional</sup> <a name="compromised_credentials_risk_configuration_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfigurationInput"></a>

```python
compromised_credentials_risk_configuration_input: CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `risk_exception_configuration_input`<sup>Optional</sup> <a name="risk_exception_configuration_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfigurationInput"></a>

```python
risk_exception_configuration_input: CognitoRiskConfigurationRiskExceptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoRiskConfigurationAccountTakeoverRiskConfiguration <a name="CognitoRiskConfigurationAccountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration(
  actions: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions,
  notify_configuration: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.notifyConfiguration">notify_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | notify_configuration block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.actions"></a>

```python
actions: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}

---

##### `notify_configuration`<sup>Required</sup> <a name="notify_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.notifyConfiguration"></a>

```python
notify_configuration: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

notify_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify_configuration CognitoRiskConfiguration#notify_configuration}

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions(
  high_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction = None,
  low_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction = None,
  medium_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.highAction">high_action</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a></code> | high_action block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.lowAction">low_action</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a></code> | low_action block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.mediumAction">medium_action</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | medium_action block. |

---

##### `high_action`<sup>Optional</sup> <a name="high_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.highAction"></a>

```python
high_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

high_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#high_action CognitoRiskConfiguration#high_action}

---

##### `low_action`<sup>Optional</sup> <a name="low_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.lowAction"></a>

```python
low_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

low_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#low_action CognitoRiskConfiguration#low_action}

---

##### `medium_action`<sup>Optional</sup> <a name="medium_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.mediumAction"></a>

```python
medium_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

medium_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#medium_action CognitoRiskConfiguration#medium_action}

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction(
  event_action: str,
  notify: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.eventAction">event_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.notify">notify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}. |

---

##### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.eventAction"></a>

```python
event_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.notify"></a>

```python
notify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction(
  event_action: str,
  notify: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.eventAction">event_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.notify">notify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}. |

---

##### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.eventAction"></a>

```python
event_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.notify"></a>

```python
notify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction(
  event_action: str,
  notify: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.eventAction">event_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.notify">notify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}. |

---

##### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.eventAction"></a>

```python
event_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.notify"></a>

```python
notify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration(
  source_arn: str,
  block_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail = None,
  from: str = None,
  mfa_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail = None,
  no_action_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail = None,
  reply_to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.sourceArn">source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#source_arn CognitoRiskConfiguration#source_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.blockEmail">block_email</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | block_email block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#from CognitoRiskConfiguration#from}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.mfaEmail">mfa_email</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | mfa_email block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.noActionEmail">no_action_email</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | no_action_email block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.replyTo">reply_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#reply_to CognitoRiskConfiguration#reply_to}. |

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#source_arn CognitoRiskConfiguration#source_arn}.

---

##### `block_email`<sup>Optional</sup> <a name="block_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.blockEmail"></a>

```python
block_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

block_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#block_email CognitoRiskConfiguration#block_email}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#from CognitoRiskConfiguration#from}.

---

##### `mfa_email`<sup>Optional</sup> <a name="mfa_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.mfaEmail"></a>

```python
mfa_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

mfa_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#mfa_email CognitoRiskConfiguration#mfa_email}

---

##### `no_action_email`<sup>Optional</sup> <a name="no_action_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.noActionEmail"></a>

```python
no_action_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

no_action_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#no_action_email CognitoRiskConfiguration#no_action_email}

---

##### `reply_to`<sup>Optional</sup> <a name="reply_to" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.replyTo"></a>

```python
reply_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#reply_to CognitoRiskConfiguration#reply_to}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail(
  html_body: str,
  subject: str,
  text_body: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.htmlBody">html_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.textBody">text_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}. |

---

##### `html_body`<sup>Required</sup> <a name="html_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.htmlBody"></a>

```python
html_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

##### `text_body`<sup>Required</sup> <a name="text_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.textBody"></a>

```python
text_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail(
  html_body: str,
  subject: str,
  text_body: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.htmlBody">html_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.textBody">text_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}. |

---

##### `html_body`<sup>Required</sup> <a name="html_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.htmlBody"></a>

```python
html_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

##### `text_body`<sup>Required</sup> <a name="text_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.textBody"></a>

```python
text_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail(
  html_body: str,
  subject: str,
  text_body: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.htmlBody">html_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.textBody">text_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}. |

---

##### `html_body`<sup>Required</sup> <a name="html_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.htmlBody"></a>

```python
html_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

##### `text_body`<sup>Required</sup> <a name="text_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.textBody"></a>

```python
text_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

### CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration(
  actions: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions,
  event_filter: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.eventFilter">event_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_filter CognitoRiskConfiguration#event_filter}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.actions"></a>

```python
actions: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}

---

##### `event_filter`<sup>Optional</sup> <a name="event_filter" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.eventFilter"></a>

```python
event_filter: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_filter CognitoRiskConfiguration#event_filter}.

---

### CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions(
  event_action: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions.property.eventAction">event_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |

---

##### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions.property.eventAction"></a>

```python
event_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

### CognitoRiskConfigurationConfig <a name="CognitoRiskConfigurationConfig" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_pool_id: str,
  account_takeover_risk_configuration: CognitoRiskConfigurationAccountTakeoverRiskConfiguration = None,
  client_id: str = None,
  compromised_credentials_risk_configuration: CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration = None,
  id: str = None,
  risk_exception_configuration: CognitoRiskConfigurationRiskExceptionConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.accountTakeoverRiskConfiguration">account_takeover_risk_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a></code> | account_takeover_risk_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.compromisedCredentialsRiskConfiguration">compromised_credentials_risk_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a></code> | compromised_credentials_risk_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#id CognitoRiskConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.riskExceptionConfiguration">risk_exception_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a></code> | risk_exception_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}.

---

##### `account_takeover_risk_configuration`<sup>Optional</sup> <a name="account_takeover_risk_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.accountTakeoverRiskConfiguration"></a>

```python
account_takeover_risk_configuration: CognitoRiskConfigurationAccountTakeoverRiskConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

account_takeover_risk_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#account_takeover_risk_configuration CognitoRiskConfiguration#account_takeover_risk_configuration}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}.

---

##### `compromised_credentials_risk_configuration`<sup>Optional</sup> <a name="compromised_credentials_risk_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.compromisedCredentialsRiskConfiguration"></a>

```python
compromised_credentials_risk_configuration: CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

compromised_credentials_risk_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#compromised_credentials_risk_configuration CognitoRiskConfiguration#compromised_credentials_risk_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#id CognitoRiskConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `risk_exception_configuration`<sup>Optional</sup> <a name="risk_exception_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.riskExceptionConfiguration"></a>

```python
risk_exception_configuration: CognitoRiskConfigurationRiskExceptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

risk_exception_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#risk_exception_configuration CognitoRiskConfiguration#risk_exception_configuration}

---

### CognitoRiskConfigurationRiskExceptionConfiguration <a name="CognitoRiskConfigurationRiskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration(
  blocked_ip_range_list: typing.List[str] = None,
  skipped_ip_range_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.blockedIpRangeList">blocked_ip_range_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#blocked_ip_range_list CognitoRiskConfiguration#blocked_ip_range_list}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.skippedIpRangeList">skipped_ip_range_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#skipped_ip_range_list CognitoRiskConfiguration#skipped_ip_range_list}. |

---

##### `blocked_ip_range_list`<sup>Optional</sup> <a name="blocked_ip_range_list" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.blockedIpRangeList"></a>

```python
blocked_ip_range_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#blocked_ip_range_list CognitoRiskConfiguration#blocked_ip_range_list}.

---

##### `skipped_ip_range_list`<sup>Optional</sup> <a name="skipped_ip_range_list" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.skippedIpRangeList"></a>

```python
skipped_ip_range_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#skipped_ip_range_list CognitoRiskConfiguration#skipped_ip_range_list}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventActionInput">event_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notifyInput">notify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction">event_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify">notify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_action_input`<sup>Optional</sup> <a name="event_action_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventActionInput"></a>

```python
event_action_input: str
```

- *Type:* str

---

##### `notify_input`<sup>Optional</sup> <a name="notify_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notifyInput"></a>

```python
notify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction"></a>

```python
event_action: str
```

- *Type:* str

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify"></a>

```python
notify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventActionInput">event_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notifyInput">notify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction">event_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify">notify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_action_input`<sup>Optional</sup> <a name="event_action_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventActionInput"></a>

```python
event_action_input: str
```

- *Type:* str

---

##### `notify_input`<sup>Optional</sup> <a name="notify_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notifyInput"></a>

```python
notify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction"></a>

```python
event_action: str
```

- *Type:* str

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify"></a>

```python
notify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventActionInput">event_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notifyInput">notify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction">event_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify">notify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_action_input`<sup>Optional</sup> <a name="event_action_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventActionInput"></a>

```python
event_action_input: str
```

- *Type:* str

---

##### `notify_input`<sup>Optional</sup> <a name="notify_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notifyInput"></a>

```python
notify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction"></a>

```python
event_action: str
```

- *Type:* str

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify"></a>

```python
notify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction">put_high_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction">put_low_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction">put_medium_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetHighAction">reset_high_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetLowAction">reset_low_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetMediumAction">reset_medium_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_high_action` <a name="put_high_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction"></a>

```python
def put_high_action(
  event_action: str,
  notify: typing.Union[bool, IResolvable]
) -> None
```

###### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction.parameter.eventAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

###### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction.parameter.notify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

##### `put_low_action` <a name="put_low_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction"></a>

```python
def put_low_action(
  event_action: str,
  notify: typing.Union[bool, IResolvable]
) -> None
```

###### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction.parameter.eventAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

###### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction.parameter.notify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

##### `put_medium_action` <a name="put_medium_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction"></a>

```python
def put_medium_action(
  event_action: str,
  notify: typing.Union[bool, IResolvable]
) -> None
```

###### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction.parameter.eventAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

###### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction.parameter.notify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

##### `reset_high_action` <a name="reset_high_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetHighAction"></a>

```python
def reset_high_action() -> None
```

##### `reset_low_action` <a name="reset_low_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetLowAction"></a>

```python
def reset_low_action() -> None
```

##### `reset_medium_action` <a name="reset_medium_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetMediumAction"></a>

```python
def reset_medium_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction">high_action</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction">low_action</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction">medium_action</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highActionInput">high_action_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowActionInput">low_action_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumActionInput">medium_action_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `high_action`<sup>Required</sup> <a name="high_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction"></a>

```python
high_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a>

---

##### `low_action`<sup>Required</sup> <a name="low_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction"></a>

```python
low_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a>

---

##### `medium_action`<sup>Required</sup> <a name="medium_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction"></a>

```python
medium_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a>

---

##### `high_action_input`<sup>Optional</sup> <a name="high_action_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highActionInput"></a>

```python
high_action_input: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

---

##### `low_action_input`<sup>Optional</sup> <a name="low_action_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowActionInput"></a>

```python
low_action_input: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

---

##### `medium_action_input`<sup>Optional</sup> <a name="medium_action_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumActionInput"></a>

```python
medium_action_input: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBodyInput">html_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBodyInput">text_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody">html_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody">text_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `html_body_input`<sup>Optional</sup> <a name="html_body_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBodyInput"></a>

```python
html_body_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `text_body_input`<sup>Optional</sup> <a name="text_body_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBodyInput"></a>

```python
text_body_input: str
```

- *Type:* str

---

##### `html_body`<sup>Required</sup> <a name="html_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody"></a>

```python
html_body: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `text_body`<sup>Required</sup> <a name="text_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody"></a>

```python
text_body: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBodyInput">html_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBodyInput">text_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody">html_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody">text_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `html_body_input`<sup>Optional</sup> <a name="html_body_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBodyInput"></a>

```python
html_body_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `text_body_input`<sup>Optional</sup> <a name="text_body_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBodyInput"></a>

```python
text_body_input: str
```

- *Type:* str

---

##### `html_body`<sup>Required</sup> <a name="html_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody"></a>

```python
html_body: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `text_body`<sup>Required</sup> <a name="text_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody"></a>

```python
text_body: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBodyInput">html_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBodyInput">text_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody">html_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody">text_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `html_body_input`<sup>Optional</sup> <a name="html_body_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBodyInput"></a>

```python
html_body_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `text_body_input`<sup>Optional</sup> <a name="text_body_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBodyInput"></a>

```python
text_body_input: str
```

- *Type:* str

---

##### `html_body`<sup>Required</sup> <a name="html_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody"></a>

```python
html_body: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `text_body`<sup>Required</sup> <a name="text_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody"></a>

```python
text_body: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail">put_block_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail">put_mfa_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail">put_no_action_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetBlockEmail">reset_block_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetMfaEmail">reset_mfa_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetNoActionEmail">reset_no_action_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetReplyTo">reset_reply_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_block_email` <a name="put_block_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail"></a>

```python
def put_block_email(
  html_body: str,
  subject: str,
  text_body: str
) -> None
```

###### `html_body`<sup>Required</sup> <a name="html_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail.parameter.htmlBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

###### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail.parameter.subject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

###### `text_body`<sup>Required</sup> <a name="text_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail.parameter.textBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

##### `put_mfa_email` <a name="put_mfa_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail"></a>

```python
def put_mfa_email(
  html_body: str,
  subject: str,
  text_body: str
) -> None
```

###### `html_body`<sup>Required</sup> <a name="html_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail.parameter.htmlBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

###### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail.parameter.subject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

###### `text_body`<sup>Required</sup> <a name="text_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail.parameter.textBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

##### `put_no_action_email` <a name="put_no_action_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail"></a>

```python
def put_no_action_email(
  html_body: str,
  subject: str,
  text_body: str
) -> None
```

###### `html_body`<sup>Required</sup> <a name="html_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail.parameter.htmlBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

###### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail.parameter.subject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

###### `text_body`<sup>Required</sup> <a name="text_body" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail.parameter.textBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

##### `reset_block_email` <a name="reset_block_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetBlockEmail"></a>

```python
def reset_block_email() -> None
```

##### `reset_from` <a name="reset_from" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_mfa_email` <a name="reset_mfa_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetMfaEmail"></a>

```python
def reset_mfa_email() -> None
```

##### `reset_no_action_email` <a name="reset_no_action_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetNoActionEmail"></a>

```python
def reset_no_action_email() -> None
```

##### `reset_reply_to` <a name="reset_reply_to" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetReplyTo"></a>

```python
def reset_reply_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail">block_email</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail">mfa_email</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail">no_action_email</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmailInput">block_email_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmailInput">mfa_email_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmailInput">no_action_email_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyToInput">reply_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArnInput">source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo">reply_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_email`<sup>Required</sup> <a name="block_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail"></a>

```python
block_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a>

---

##### `mfa_email`<sup>Required</sup> <a name="mfa_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail"></a>

```python
mfa_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a>

---

##### `no_action_email`<sup>Required</sup> <a name="no_action_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail"></a>

```python
no_action_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a>

---

##### `block_email_input`<sup>Optional</sup> <a name="block_email_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmailInput"></a>

```python
block_email_input: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `mfa_email_input`<sup>Optional</sup> <a name="mfa_email_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmailInput"></a>

```python
mfa_email_input: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---

##### `no_action_email_input`<sup>Optional</sup> <a name="no_action_email_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmailInput"></a>

```python
no_action_email_input: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---

##### `reply_to_input`<sup>Optional</sup> <a name="reply_to_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyToInput"></a>

```python
reply_to_input: str
```

- *Type:* str

---

##### `source_arn_input`<sup>Optional</sup> <a name="source_arn_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArnInput"></a>

```python
source_arn_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `reply_to`<sup>Required</sup> <a name="reply_to" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo"></a>

```python
reply_to: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration">put_notify_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putActions"></a>

```python
def put_actions(
  high_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction = None,
  low_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction = None,
  medium_action: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction = None
) -> None
```

###### `high_action`<sup>Optional</sup> <a name="high_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putActions.parameter.highAction"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

high_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#high_action CognitoRiskConfiguration#high_action}

---

###### `low_action`<sup>Optional</sup> <a name="low_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putActions.parameter.lowAction"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

low_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#low_action CognitoRiskConfiguration#low_action}

---

###### `medium_action`<sup>Optional</sup> <a name="medium_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putActions.parameter.mediumAction"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

medium_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#medium_action CognitoRiskConfiguration#medium_action}

---

##### `put_notify_configuration` <a name="put_notify_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration"></a>

```python
def put_notify_configuration(
  source_arn: str,
  block_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail = None,
  from: str = None,
  mfa_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail = None,
  no_action_email: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail = None,
  reply_to: str = None
) -> None
```

###### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration.parameter.sourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#source_arn CognitoRiskConfiguration#source_arn}.

---

###### `block_email`<sup>Optional</sup> <a name="block_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration.parameter.blockEmail"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

block_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#block_email CognitoRiskConfiguration#block_email}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration.parameter.from"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#from CognitoRiskConfiguration#from}.

---

###### `mfa_email`<sup>Optional</sup> <a name="mfa_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration.parameter.mfaEmail"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

mfa_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#mfa_email CognitoRiskConfiguration#mfa_email}

---

###### `no_action_email`<sup>Optional</sup> <a name="no_action_email" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration.parameter.noActionEmail"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

no_action_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#no_action_email CognitoRiskConfiguration#no_action_email}

---

###### `reply_to`<sup>Optional</sup> <a name="reply_to" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration.parameter.replyTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#reply_to CognitoRiskConfiguration#reply_to}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration">notify_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actionsInput">actions_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfigurationInput">notify_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actions"></a>

```python
actions: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference</a>

---

##### `notify_configuration`<sup>Required</sup> <a name="notify_configuration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration"></a>

```python
notify_configuration: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actionsInput"></a>

```python
actions_input: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

---

##### `notify_configuration_input`<sup>Optional</sup> <a name="notify_configuration_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfigurationInput"></a>

```python
notify_configuration_input: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationAccountTakeoverRiskConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

---


### CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventActionInput">event_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction">event_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_action_input`<sup>Optional</sup> <a name="event_action_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventActionInput"></a>

```python
event_action_input: str
```

- *Type:* str

---

##### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction"></a>

```python
event_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

---


### CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resetEventFilter">reset_event_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.putActions"></a>

```python
def put_actions(
  event_action: str
) -> None
```

###### `event_action`<sup>Required</sup> <a name="event_action" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.putActions.parameter.eventAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

##### `reset_event_filter` <a name="reset_event_filter" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resetEventFilter"></a>

```python
def reset_event_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actionsInput">actions_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilterInput">event_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter">event_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actions"></a>

```python
actions: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actionsInput"></a>

```python
actions_input: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

---

##### `event_filter_input`<sup>Optional</sup> <a name="event_filter_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilterInput"></a>

```python
event_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_filter`<sup>Required</sup> <a name="event_filter" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter"></a>

```python
event_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

---


### CognitoRiskConfigurationRiskExceptionConfigurationOutputReference <a name="CognitoRiskConfigurationRiskExceptionConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_risk_configuration

cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetBlockedIpRangeList">reset_blocked_ip_range_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetSkippedIpRangeList">reset_skipped_ip_range_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_blocked_ip_range_list` <a name="reset_blocked_ip_range_list" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetBlockedIpRangeList"></a>

```python
def reset_blocked_ip_range_list() -> None
```

##### `reset_skipped_ip_range_list` <a name="reset_skipped_ip_range_list" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetSkippedIpRangeList"></a>

```python
def reset_skipped_ip_range_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeListInput">blocked_ip_range_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeListInput">skipped_ip_range_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeList">blocked_ip_range_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeList">skipped_ip_range_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `blocked_ip_range_list_input`<sup>Optional</sup> <a name="blocked_ip_range_list_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeListInput"></a>

```python
blocked_ip_range_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skipped_ip_range_list_input`<sup>Optional</sup> <a name="skipped_ip_range_list_input" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeListInput"></a>

```python
skipped_ip_range_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_ip_range_list`<sup>Required</sup> <a name="blocked_ip_range_list" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeList"></a>

```python
blocked_ip_range_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skipped_ip_range_list`<sup>Required</sup> <a name="skipped_ip_range_list" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeList"></a>

```python
skipped_ip_range_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CognitoRiskConfigurationRiskExceptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

---



