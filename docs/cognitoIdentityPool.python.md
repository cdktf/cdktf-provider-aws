# `cognitoIdentityPool` Submodule <a name="`cognitoIdentityPool` Submodule" id="@cdktf/provider-aws.cognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPool <a name="CognitoIdentityPool" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool aws_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_pool_name: str,
  allow_classic_flow: typing.Union[bool, IResolvable] = None,
  allow_unauthenticated_identities: typing.Union[bool, IResolvable] = None,
  cognito_identity_providers: typing.Union[IResolvable, typing.List[CognitoIdentityPoolCognitoIdentityProviders]] = None,
  developer_provider_name: str = None,
  id: str = None,
  openid_connect_provider_arns: typing.List[str] = None,
  saml_provider_arns: typing.List[str] = None,
  supported_login_providers: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolName">identity_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowClassicFlow">allow_classic_flow</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowUnauthenticatedIdentities">allow_unauthenticated_identities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoIdentityProviders">cognito_identity_providers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]]</code> | cognito_identity_providers block. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.developerProviderName">developer_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.openidConnectProviderArns">openid_connect_provider_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.samlProviderArns">saml_provider_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.supportedLoginProviders">supported_login_providers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_pool_name`<sup>Required</sup> <a name="identity_pool_name" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}.

---

##### `allow_classic_flow`<sup>Optional</sup> <a name="allow_classic_flow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowClassicFlow"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}.

---

##### `allow_unauthenticated_identities`<sup>Optional</sup> <a name="allow_unauthenticated_identities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowUnauthenticatedIdentities"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}.

---

##### `cognito_identity_providers`<sup>Optional</sup> <a name="cognito_identity_providers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoIdentityProviders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]]

cognito_identity_providers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}

---

##### `developer_provider_name`<sup>Optional</sup> <a name="developer_provider_name" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.developerProviderName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openid_connect_provider_arns`<sup>Optional</sup> <a name="openid_connect_provider_arns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.openidConnectProviderArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}.

---

##### `saml_provider_arns`<sup>Optional</sup> <a name="saml_provider_arns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.samlProviderArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}.

---

##### `supported_login_providers`<sup>Optional</sup> <a name="supported_login_providers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.supportedLoginProviders"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders">put_cognito_identity_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow">reset_allow_classic_flow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowUnauthenticatedIdentities">reset_allow_unauthenticated_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders">reset_cognito_identity_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName">reset_developer_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOpenidConnectProviderArns">reset_openid_connect_provider_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArns">reset_saml_provider_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders">reset_supported_login_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cognito_identity_providers` <a name="put_cognito_identity_providers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders"></a>

```python
def put_cognito_identity_providers(
  value: typing.Union[IResolvable, typing.List[CognitoIdentityPoolCognitoIdentityProviders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]]

---

##### `reset_allow_classic_flow` <a name="reset_allow_classic_flow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow"></a>

```python
def reset_allow_classic_flow() -> None
```

##### `reset_allow_unauthenticated_identities` <a name="reset_allow_unauthenticated_identities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowUnauthenticatedIdentities"></a>

```python
def reset_allow_unauthenticated_identities() -> None
```

##### `reset_cognito_identity_providers` <a name="reset_cognito_identity_providers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders"></a>

```python
def reset_cognito_identity_providers() -> None
```

##### `reset_developer_provider_name` <a name="reset_developer_provider_name" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName"></a>

```python
def reset_developer_provider_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_openid_connect_provider_arns` <a name="reset_openid_connect_provider_arns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOpenidConnectProviderArns"></a>

```python
def reset_openid_connect_provider_arns() -> None
```

##### `reset_saml_provider_arns` <a name="reset_saml_provider_arns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArns"></a>

```python
def reset_saml_provider_arns() -> None
```

##### `reset_supported_login_providers` <a name="reset_supported_login_providers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders"></a>

```python
def reset_supported_login_providers() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders">cognito_identity_providers</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput">allow_classic_flow_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput">allow_unauthenticated_identities_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput">cognito_identity_providers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput">developer_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput">identity_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArnsInput">openid_connect_provider_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArnsInput">saml_provider_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput">supported_login_providers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow">allow_classic_flow</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities">allow_unauthenticated_identities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName">developer_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName">identity_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArns">openid_connect_provider_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArns">saml_provider_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders">supported_login_providers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cognito_identity_providers`<sup>Required</sup> <a name="cognito_identity_providers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders"></a>

```python
cognito_identity_providers: CognitoIdentityPoolCognitoIdentityProvidersList
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `allow_classic_flow_input`<sup>Optional</sup> <a name="allow_classic_flow_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput"></a>

```python
allow_classic_flow_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_unauthenticated_identities_input`<sup>Optional</sup> <a name="allow_unauthenticated_identities_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput"></a>

```python
allow_unauthenticated_identities_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cognito_identity_providers_input`<sup>Optional</sup> <a name="cognito_identity_providers_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput"></a>

```python
cognito_identity_providers_input: typing.Union[IResolvable, typing.List[CognitoIdentityPoolCognitoIdentityProviders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]]

---

##### `developer_provider_name_input`<sup>Optional</sup> <a name="developer_provider_name_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput"></a>

```python
developer_provider_name_input: str
```

- *Type:* str

---

##### `identity_pool_name_input`<sup>Optional</sup> <a name="identity_pool_name_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput"></a>

```python
identity_pool_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `openid_connect_provider_arns_input`<sup>Optional</sup> <a name="openid_connect_provider_arns_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArnsInput"></a>

```python
openid_connect_provider_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `saml_provider_arns_input`<sup>Optional</sup> <a name="saml_provider_arns_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArnsInput"></a>

```python
saml_provider_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_login_providers_input`<sup>Optional</sup> <a name="supported_login_providers_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput"></a>

```python
supported_login_providers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allow_classic_flow`<sup>Required</sup> <a name="allow_classic_flow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow"></a>

```python
allow_classic_flow: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_unauthenticated_identities`<sup>Required</sup> <a name="allow_unauthenticated_identities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```python
allow_unauthenticated_identities: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `developer_provider_name`<sup>Required</sup> <a name="developer_provider_name" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName"></a>

```python
developer_provider_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_pool_name`<sup>Required</sup> <a name="identity_pool_name" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName"></a>

```python
identity_pool_name: str
```

- *Type:* str

---

##### `openid_connect_provider_arns`<sup>Required</sup> <a name="openid_connect_provider_arns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArns"></a>

```python
openid_connect_provider_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `saml_provider_arns`<sup>Required</sup> <a name="saml_provider_arns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArns"></a>

```python
saml_provider_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_login_providers`<sup>Required</sup> <a name="supported_login_providers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders"></a>

```python
supported_login_providers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolCognitoIdentityProviders <a name="CognitoIdentityPoolCognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders(
  client_id: str = None,
  provider_name: str = None,
  server_side_token_check: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#client_id CognitoIdentityPool#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck">server_side_token_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#client_id CognitoIdentityPool#client_id}.

---

##### `provider_name`<sup>Optional</sup> <a name="provider_name" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}.

---

##### `server_side_token_check`<sup>Optional</sup> <a name="server_side_token_check" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck"></a>

```python
server_side_token_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}.

---

### CognitoIdentityPoolConfig <a name="CognitoIdentityPoolConfig" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_pool_name: str,
  allow_classic_flow: typing.Union[bool, IResolvable] = None,
  allow_unauthenticated_identities: typing.Union[bool, IResolvable] = None,
  cognito_identity_providers: typing.Union[IResolvable, typing.List[CognitoIdentityPoolCognitoIdentityProviders]] = None,
  developer_provider_name: str = None,
  id: str = None,
  openid_connect_provider_arns: typing.List[str] = None,
  saml_provider_arns: typing.List[str] = None,
  supported_login_providers: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName">identity_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow">allow_classic_flow</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities">allow_unauthenticated_identities</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders">cognito_identity_providers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]]</code> | cognito_identity_providers block. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName">developer_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openidConnectProviderArns">openid_connect_provider_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArns">saml_provider_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders">supported_login_providers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_pool_name`<sup>Required</sup> <a name="identity_pool_name" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName"></a>

```python
identity_pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}.

---

##### `allow_classic_flow`<sup>Optional</sup> <a name="allow_classic_flow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow"></a>

```python
allow_classic_flow: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}.

---

##### `allow_unauthenticated_identities`<sup>Optional</sup> <a name="allow_unauthenticated_identities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities"></a>

```python
allow_unauthenticated_identities: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}.

---

##### `cognito_identity_providers`<sup>Optional</sup> <a name="cognito_identity_providers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders"></a>

```python
cognito_identity_providers: typing.Union[IResolvable, typing.List[CognitoIdentityPoolCognitoIdentityProviders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]]

cognito_identity_providers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}

---

##### `developer_provider_name`<sup>Optional</sup> <a name="developer_provider_name" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName"></a>

```python
developer_provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openid_connect_provider_arns`<sup>Optional</sup> <a name="openid_connect_provider_arns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openidConnectProviderArns"></a>

```python
openid_connect_provider_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}.

---

##### `saml_provider_arns`<sup>Optional</sup> <a name="saml_provider_arns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArns"></a>

```python
saml_provider_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}.

---

##### `supported_login_providers`<sup>Optional</sup> <a name="supported_login_providers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders"></a>

```python
supported_login_providers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityPoolCognitoIdentityProvidersList <a name="CognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CognitoIdentityPoolCognitoIdentityProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CognitoIdentityPoolCognitoIdentityProviders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>]]

---


### CognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="CognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_identity_pool

cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName">reset_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck">reset_server_side_token_check</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_provider_name` <a name="reset_provider_name" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName"></a>

```python
def reset_provider_name() -> None
```

##### `reset_server_side_token_check` <a name="reset_server_side_token_check" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck"></a>

```python
def reset_server_side_token_check() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput">server_side_token_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">server_side_token_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `server_side_token_check_input`<sup>Optional</sup> <a name="server_side_token_check_input" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput"></a>

```python
server_side_token_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `server_side_token_check`<sup>Required</sup> <a name="server_side_token_check" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```python
server_side_token_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CognitoIdentityPoolCognitoIdentityProviders, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>, cdktf.IResolvable]

---



