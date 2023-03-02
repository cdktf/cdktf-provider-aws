# `cognitoIdentityPoolProviderPrincipalTag` Submodule <a name="`cognitoIdentityPoolProviderPrincipalTag` Submodule" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolProviderPrincipalTag <a name="CognitoIdentityPoolProviderPrincipalTag" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag aws_cognito_identity_pool_provider_principal_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool_provider_principal_tag

cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_pool_id: str,
  identity_provider_name: str,
  id: str = None,
  principal_tags: typing.Mapping[str] = None,
  use_defaults: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.identityPoolId">identity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.identityProviderName">identity_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.principalTags">principal_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.useDefaults">use_defaults</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.identityPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}.

---

##### `identity_provider_name`<sup>Required</sup> <a name="identity_provider_name" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.identityProviderName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_tags`<sup>Optional</sup> <a name="principal_tags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.principalTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}.

---

##### `use_defaults`<sup>Optional</sup> <a name="use_defaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.useDefaults"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetPrincipalTags">reset_principal_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetUseDefaults">reset_use_defaults</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_tags` <a name="reset_principal_tags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetPrincipalTags"></a>

```python
def reset_principal_tags() -> None
```

##### `reset_use_defaults` <a name="reset_use_defaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetUseDefaults"></a>

```python
def reset_use_defaults() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool_provider_principal_tag

cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool_provider_principal_tag

cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool_provider_principal_tag

cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolIdInput">identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderNameInput">identity_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTagsInput">principal_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaultsInput">use_defaults_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderName">identity_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTags">principal_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaults">use_defaults</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_pool_id_input`<sup>Optional</sup> <a name="identity_pool_id_input" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolIdInput"></a>

```python
identity_pool_id_input: str
```

- *Type:* str

---

##### `identity_provider_name_input`<sup>Optional</sup> <a name="identity_provider_name_input" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderNameInput"></a>

```python
identity_provider_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_tags_input`<sup>Optional</sup> <a name="principal_tags_input" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTagsInput"></a>

```python
principal_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_defaults_input`<sup>Optional</sup> <a name="use_defaults_input" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaultsInput"></a>

```python
use_defaults_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `identity_provider_name`<sup>Required</sup> <a name="identity_provider_name" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderName"></a>

```python
identity_provider_name: str
```

- *Type:* str

---

##### `principal_tags`<sup>Required</sup> <a name="principal_tags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTags"></a>

```python
principal_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_defaults`<sup>Required</sup> <a name="use_defaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaults"></a>

```python
use_defaults: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolProviderPrincipalTagConfig <a name="CognitoIdentityPoolProviderPrincipalTagConfig" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool_provider_principal_tag

cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_pool_id: str,
  identity_provider_name: str,
  id: str = None,
  principal_tags: typing.Mapping[str] = None,
  use_defaults: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityProviderName">identity_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.principalTags">principal_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.useDefaults">use_defaults</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}.

---

##### `identity_provider_name`<sup>Required</sup> <a name="identity_provider_name" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityProviderName"></a>

```python
identity_provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_tags`<sup>Optional</sup> <a name="principal_tags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.principalTags"></a>

```python
principal_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}.

---

##### `use_defaults`<sup>Optional</sup> <a name="use_defaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.useDefaults"></a>

```python
use_defaults: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}.

---



