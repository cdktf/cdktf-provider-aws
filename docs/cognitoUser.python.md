# `cognitoUser` Submodule <a name="`cognitoUser` Submodule" id="@cdktf/provider-aws.cognitoUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUser <a name="CognitoUser" id="@cdktf/provider-aws.cognitoUser.CognitoUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user aws_cognito_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user

cognitoUser.CognitoUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  username: str,
  user_pool_id: str,
  attributes: typing.Mapping[str] = None,
  client_metadata: typing.Mapping[str] = None,
  desired_delivery_mediums: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  force_alias_creation: typing.Union[bool, IResolvable] = None,
  id: str = None,
  message_action: str = None,
  password: str = None,
  temporary_password: str = None,
  validation_data: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.clientMetadata">client_metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.desiredDeliveryMediums">desired_delivery_mediums</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.forceAliasCreation">force_alias_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.messageAction">message_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.temporaryPassword">temporary_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.validationData">validation_data</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.attributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}.

---

##### `client_metadata`<sup>Optional</sup> <a name="client_metadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.clientMetadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}.

---

##### `desired_delivery_mediums`<sup>Optional</sup> <a name="desired_delivery_mediums" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.desiredDeliveryMediums"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}.

---

##### `force_alias_creation`<sup>Optional</sup> <a name="force_alias_creation" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.forceAliasCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message_action`<sup>Optional</sup> <a name="message_action" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.messageAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}.

---

##### `temporary_password`<sup>Optional</sup> <a name="temporary_password" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.temporaryPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}.

---

##### `validation_data`<sup>Optional</sup> <a name="validation_data" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.validationData"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetClientMetadata">reset_client_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetDesiredDeliveryMediums">reset_desired_delivery_mediums</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetForceAliasCreation">reset_force_alias_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetMessageAction">reset_message_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetTemporaryPassword">reset_temporary_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetValidationData">reset_validation_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_client_metadata` <a name="reset_client_metadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetClientMetadata"></a>

```python
def reset_client_metadata() -> None
```

##### `reset_desired_delivery_mediums` <a name="reset_desired_delivery_mediums" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetDesiredDeliveryMediums"></a>

```python
def reset_desired_delivery_mediums() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_force_alias_creation` <a name="reset_force_alias_creation" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetForceAliasCreation"></a>

```python
def reset_force_alias_creation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_message_action` <a name="reset_message_action" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetMessageAction"></a>

```python
def reset_message_action() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_temporary_password` <a name="reset_temporary_password" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetTemporaryPassword"></a>

```python
def reset_temporary_password() -> None
```

##### `reset_validation_data` <a name="reset_validation_data" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetValidationData"></a>

```python
def reset_validation_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user

cognitoUser.CognitoUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user

cognitoUser.CognitoUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user

cognitoUser.CognitoUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.lastModifiedDate">last_modified_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.mfaSettingList">mfa_setting_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.preferredMfaSetting">preferred_mfa_setting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.sub">sub</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadataInput">client_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediumsInput">desired_delivery_mediums_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreationInput">force_alias_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageActionInput">message_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPasswordInput">temporary_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationDataInput">validation_data_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadata">client_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediums">desired_delivery_mediums</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreation">force_alias_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageAction">message_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPassword">temporary_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationData">validation_data</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `last_modified_date`<sup>Required</sup> <a name="last_modified_date" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.lastModifiedDate"></a>

```python
last_modified_date: str
```

- *Type:* str

---

##### `mfa_setting_list`<sup>Required</sup> <a name="mfa_setting_list" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.mfaSettingList"></a>

```python
mfa_setting_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_mfa_setting`<sup>Required</sup> <a name="preferred_mfa_setting" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.preferredMfaSetting"></a>

```python
preferred_mfa_setting: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `sub`<sup>Required</sup> <a name="sub" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.sub"></a>

```python
sub: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client_metadata_input`<sup>Optional</sup> <a name="client_metadata_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadataInput"></a>

```python
client_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `desired_delivery_mediums_input`<sup>Optional</sup> <a name="desired_delivery_mediums_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediumsInput"></a>

```python
desired_delivery_mediums_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_alias_creation_input`<sup>Optional</sup> <a name="force_alias_creation_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreationInput"></a>

```python
force_alias_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `message_action_input`<sup>Optional</sup> <a name="message_action_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageActionInput"></a>

```python
message_action_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `temporary_password_input`<sup>Optional</sup> <a name="temporary_password_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPasswordInput"></a>

```python
temporary_password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `validation_data_input`<sup>Optional</sup> <a name="validation_data_input" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationDataInput"></a>

```python
validation_data_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client_metadata`<sup>Required</sup> <a name="client_metadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadata"></a>

```python
client_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `desired_delivery_mediums`<sup>Required</sup> <a name="desired_delivery_mediums" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediums"></a>

```python
desired_delivery_mediums: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_alias_creation`<sup>Required</sup> <a name="force_alias_creation" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreation"></a>

```python
force_alias_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `message_action`<sup>Required</sup> <a name="message_action" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageAction"></a>

```python
message_action: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `temporary_password`<sup>Required</sup> <a name="temporary_password" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPassword"></a>

```python
temporary_password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `validation_data`<sup>Required</sup> <a name="validation_data" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationData"></a>

```python
validation_data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserConfig <a name="CognitoUserConfig" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user

cognitoUser.CognitoUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  username: str,
  user_pool_id: str,
  attributes: typing.Mapping[str] = None,
  client_metadata: typing.Mapping[str] = None,
  desired_delivery_mediums: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  force_alias_creation: typing.Union[bool, IResolvable] = None,
  id: str = None,
  message_action: str = None,
  password: str = None,
  temporary_password: str = None,
  validation_data: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.clientMetadata">client_metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.desiredDeliveryMediums">desired_delivery_mediums</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forceAliasCreation">force_alias_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.messageAction">message_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.temporaryPassword">temporary_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.validationData">validation_data</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}.

---

##### `client_metadata`<sup>Optional</sup> <a name="client_metadata" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.clientMetadata"></a>

```python
client_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}.

---

##### `desired_delivery_mediums`<sup>Optional</sup> <a name="desired_delivery_mediums" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.desiredDeliveryMediums"></a>

```python
desired_delivery_mediums: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}.

---

##### `force_alias_creation`<sup>Optional</sup> <a name="force_alias_creation" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forceAliasCreation"></a>

```python
force_alias_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message_action`<sup>Optional</sup> <a name="message_action" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.messageAction"></a>

```python
message_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}.

---

##### `temporary_password`<sup>Optional</sup> <a name="temporary_password" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.temporaryPassword"></a>

```python
temporary_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}.

---

##### `validation_data`<sup>Optional</sup> <a name="validation_data" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.validationData"></a>

```python
validation_data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}.

---



