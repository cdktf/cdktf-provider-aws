# `cognitoManagedUserPoolClient` Submodule <a name="`cognitoManagedUserPoolClient` Submodule" id="@cdktf/provider-aws.cognitoManagedUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoManagedUserPoolClient <a name="CognitoManagedUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client aws_cognito_managed_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClient(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_pool_id: str,
  access_token_validity: typing.Union[int, float] = None,
  allowed_oauth_flows: typing.List[str] = None,
  allowed_oauth_flows_user_pool_client: typing.Union[bool, IResolvable] = None,
  allowed_oauth_scopes: typing.List[str] = None,
  analytics_configuration: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientAnalyticsConfiguration]] = None,
  auth_session_validity: typing.Union[int, float] = None,
  callback_urls: typing.List[str] = None,
  default_redirect_uri: str = None,
  enable_propagate_additional_user_context_data: typing.Union[bool, IResolvable] = None,
  enable_token_revocation: typing.Union[bool, IResolvable] = None,
  explicit_auth_flows: typing.List[str] = None,
  id_token_validity: typing.Union[int, float] = None,
  logout_urls: typing.List[str] = None,
  name_pattern: str = None,
  name_prefix: str = None,
  prevent_user_existence_errors: str = None,
  read_attributes: typing.List[str] = None,
  refresh_token_validity: typing.Union[int, float] = None,
  supported_identity_providers: typing.List[str] = None,
  token_validity_units: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientTokenValidityUnits]] = None,
  write_attributes: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.accessTokenValidity">access_token_validity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthFlows">allowed_oauth_flows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthFlowsUserPoolClient">allowed_oauth_flows_user_pool_client</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthScopes">allowed_oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.analyticsConfiguration">analytics_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>]]</code> | analytics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.authSessionValidity">auth_session_validity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.callbackUrls">callback_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.defaultRedirectUri">default_redirect_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.enablePropagateAdditionalUserContextData">enable_propagate_additional_user_context_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.enableTokenRevocation">enable_token_revocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.explicitAuthFlows">explicit_auth_flows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.idTokenValidity">id_token_validity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.logoutUrls">logout_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.namePattern">name_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.preventUserExistenceErrors">prevent_user_existence_errors</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.readAttributes">read_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.refreshTokenValidity">refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.supportedIdentityProviders">supported_identity_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.tokenValidityUnits">token_validity_units</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>]]</code> | token_validity_units block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.writeAttributes">write_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}.

---

##### `access_token_validity`<sup>Optional</sup> <a name="access_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.accessTokenValidity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}.

---

##### `allowed_oauth_flows`<sup>Optional</sup> <a name="allowed_oauth_flows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthFlows"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}.

---

##### `allowed_oauth_flows_user_pool_client`<sup>Optional</sup> <a name="allowed_oauth_flows_user_pool_client" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthFlowsUserPoolClient"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `allowed_oauth_scopes`<sup>Optional</sup> <a name="allowed_oauth_scopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}.

---

##### `analytics_configuration`<sup>Optional</sup> <a name="analytics_configuration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.analyticsConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>]]

analytics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#analytics_configuration CognitoManagedUserPoolClient#analytics_configuration}

---

##### `auth_session_validity`<sup>Optional</sup> <a name="auth_session_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.authSessionValidity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}.

---

##### `callback_urls`<sup>Optional</sup> <a name="callback_urls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.callbackUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}.

---

##### `default_redirect_uri`<sup>Optional</sup> <a name="default_redirect_uri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.defaultRedirectUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}.

---

##### `enable_propagate_additional_user_context_data`<sup>Optional</sup> <a name="enable_propagate_additional_user_context_data" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.enablePropagateAdditionalUserContextData"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `enable_token_revocation`<sup>Optional</sup> <a name="enable_token_revocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.enableTokenRevocation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}.

---

##### `explicit_auth_flows`<sup>Optional</sup> <a name="explicit_auth_flows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.explicitAuthFlows"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}.

---

##### `id_token_validity`<sup>Optional</sup> <a name="id_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.idTokenValidity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}.

---

##### `logout_urls`<sup>Optional</sup> <a name="logout_urls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.logoutUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}.

---

##### `name_pattern`<sup>Optional</sup> <a name="name_pattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.namePattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}.

---

##### `prevent_user_existence_errors`<sup>Optional</sup> <a name="prevent_user_existence_errors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.preventUserExistenceErrors"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}.

---

##### `read_attributes`<sup>Optional</sup> <a name="read_attributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.readAttributes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}.

---

##### `refresh_token_validity`<sup>Optional</sup> <a name="refresh_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.refreshTokenValidity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}.

---

##### `supported_identity_providers`<sup>Optional</sup> <a name="supported_identity_providers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.supportedIdentityProviders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}.

---

##### `token_validity_units`<sup>Optional</sup> <a name="token_validity_units" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.tokenValidityUnits"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>]]

token_validity_units block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#token_validity_units CognitoManagedUserPoolClient#token_validity_units}

---

##### `write_attributes`<sup>Optional</sup> <a name="write_attributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.writeAttributes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration">put_analytics_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits">put_token_validity_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAccessTokenValidity">reset_access_token_validity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlows">reset_allowed_oauth_flows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlowsUserPoolClient">reset_allowed_oauth_flows_user_pool_client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthScopes">reset_allowed_oauth_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAnalyticsConfiguration">reset_analytics_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAuthSessionValidity">reset_auth_session_validity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetCallbackUrls">reset_callback_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetDefaultRedirectUri">reset_default_redirect_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnablePropagateAdditionalUserContextData">reset_enable_propagate_additional_user_context_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnableTokenRevocation">reset_enable_token_revocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetExplicitAuthFlows">reset_explicit_auth_flows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetIdTokenValidity">reset_id_token_validity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetLogoutUrls">reset_logout_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePattern">reset_name_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetPreventUserExistenceErrors">reset_prevent_user_existence_errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetReadAttributes">reset_read_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetRefreshTokenValidity">reset_refresh_token_validity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetSupportedIdentityProviders">reset_supported_identity_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetTokenValidityUnits">reset_token_validity_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetWriteAttributes">reset_write_attributes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_analytics_configuration` <a name="put_analytics_configuration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration"></a>

```python
def put_analytics_configuration(
  value: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientAnalyticsConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>]]

---

##### `put_token_validity_units` <a name="put_token_validity_units" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits"></a>

```python
def put_token_validity_units(
  value: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientTokenValidityUnits]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>]]

---

##### `reset_access_token_validity` <a name="reset_access_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAccessTokenValidity"></a>

```python
def reset_access_token_validity() -> None
```

##### `reset_allowed_oauth_flows` <a name="reset_allowed_oauth_flows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlows"></a>

```python
def reset_allowed_oauth_flows() -> None
```

##### `reset_allowed_oauth_flows_user_pool_client` <a name="reset_allowed_oauth_flows_user_pool_client" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlowsUserPoolClient"></a>

```python
def reset_allowed_oauth_flows_user_pool_client() -> None
```

##### `reset_allowed_oauth_scopes` <a name="reset_allowed_oauth_scopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthScopes"></a>

```python
def reset_allowed_oauth_scopes() -> None
```

##### `reset_analytics_configuration` <a name="reset_analytics_configuration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAnalyticsConfiguration"></a>

```python
def reset_analytics_configuration() -> None
```

##### `reset_auth_session_validity` <a name="reset_auth_session_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAuthSessionValidity"></a>

```python
def reset_auth_session_validity() -> None
```

##### `reset_callback_urls` <a name="reset_callback_urls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetCallbackUrls"></a>

```python
def reset_callback_urls() -> None
```

##### `reset_default_redirect_uri` <a name="reset_default_redirect_uri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetDefaultRedirectUri"></a>

```python
def reset_default_redirect_uri() -> None
```

##### `reset_enable_propagate_additional_user_context_data` <a name="reset_enable_propagate_additional_user_context_data" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnablePropagateAdditionalUserContextData"></a>

```python
def reset_enable_propagate_additional_user_context_data() -> None
```

##### `reset_enable_token_revocation` <a name="reset_enable_token_revocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnableTokenRevocation"></a>

```python
def reset_enable_token_revocation() -> None
```

##### `reset_explicit_auth_flows` <a name="reset_explicit_auth_flows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetExplicitAuthFlows"></a>

```python
def reset_explicit_auth_flows() -> None
```

##### `reset_id_token_validity` <a name="reset_id_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetIdTokenValidity"></a>

```python
def reset_id_token_validity() -> None
```

##### `reset_logout_urls` <a name="reset_logout_urls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetLogoutUrls"></a>

```python
def reset_logout_urls() -> None
```

##### `reset_name_pattern` <a name="reset_name_pattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePattern"></a>

```python
def reset_name_pattern() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_prevent_user_existence_errors` <a name="reset_prevent_user_existence_errors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetPreventUserExistenceErrors"></a>

```python
def reset_prevent_user_existence_errors() -> None
```

##### `reset_read_attributes` <a name="reset_read_attributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetReadAttributes"></a>

```python
def reset_read_attributes() -> None
```

##### `reset_refresh_token_validity` <a name="reset_refresh_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetRefreshTokenValidity"></a>

```python
def reset_refresh_token_validity() -> None
```

##### `reset_supported_identity_providers` <a name="reset_supported_identity_providers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetSupportedIdentityProviders"></a>

```python
def reset_supported_identity_providers() -> None
```

##### `reset_token_validity_units` <a name="reset_token_validity_units" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetTokenValidityUnits"></a>

```python
def reset_token_validity_units() -> None
```

##### `reset_write_attributes` <a name="reset_write_attributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetWriteAttributes"></a>

```python
def reset_write_attributes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CognitoManagedUserPoolClient resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CognitoManagedUserPoolClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CognitoManagedUserPoolClient to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CognitoManagedUserPoolClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CognitoManagedUserPoolClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfiguration">analytics_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList">CognitoManagedUserPoolClientAnalyticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnits">token_validity_units</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList">CognitoManagedUserPoolClientTokenValidityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidityInput">access_token_validity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsInput">allowed_oauth_flows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClientInput">allowed_oauth_flows_user_pool_client_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopesInput">allowed_oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfigurationInput">analytics_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidityInput">auth_session_validity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrlsInput">callback_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUriInput">default_redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextDataInput">enable_propagate_additional_user_context_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocationInput">enable_token_revocation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlowsInput">explicit_auth_flows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidityInput">id_token_validity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrlsInput">logout_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePatternInput">name_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrorsInput">prevent_user_existence_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributesInput">read_attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidityInput">refresh_token_validity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProvidersInput">supported_identity_providers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnitsInput">token_validity_units_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributesInput">write_attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidity">access_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlows">allowed_oauth_flows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClient">allowed_oauth_flows_user_pool_client</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopes">allowed_oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidity">auth_session_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrls">callback_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUri">default_redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextData">enable_propagate_additional_user_context_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocation">enable_token_revocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlows">explicit_auth_flows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidity">id_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrls">logout_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePattern">name_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrors">prevent_user_existence_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributes">read_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidity">refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProviders">supported_identity_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributes">write_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `analytics_configuration`<sup>Required</sup> <a name="analytics_configuration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfiguration"></a>

```python
analytics_configuration: CognitoManagedUserPoolClientAnalyticsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList">CognitoManagedUserPoolClientAnalyticsConfigurationList</a>

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `token_validity_units`<sup>Required</sup> <a name="token_validity_units" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnits"></a>

```python
token_validity_units: CognitoManagedUserPoolClientTokenValidityUnitsList
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList">CognitoManagedUserPoolClientTokenValidityUnitsList</a>

---

##### `access_token_validity_input`<sup>Optional</sup> <a name="access_token_validity_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidityInput"></a>

```python
access_token_validity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_oauth_flows_input`<sup>Optional</sup> <a name="allowed_oauth_flows_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsInput"></a>

```python
allowed_oauth_flows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_oauth_flows_user_pool_client_input`<sup>Optional</sup> <a name="allowed_oauth_flows_user_pool_client_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClientInput"></a>

```python
allowed_oauth_flows_user_pool_client_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_oauth_scopes_input`<sup>Optional</sup> <a name="allowed_oauth_scopes_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopesInput"></a>

```python
allowed_oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `analytics_configuration_input`<sup>Optional</sup> <a name="analytics_configuration_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfigurationInput"></a>

```python
analytics_configuration_input: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientAnalyticsConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>]]

---

##### `auth_session_validity_input`<sup>Optional</sup> <a name="auth_session_validity_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidityInput"></a>

```python
auth_session_validity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `callback_urls_input`<sup>Optional</sup> <a name="callback_urls_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrlsInput"></a>

```python
callback_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_redirect_uri_input`<sup>Optional</sup> <a name="default_redirect_uri_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUriInput"></a>

```python
default_redirect_uri_input: str
```

- *Type:* str

---

##### `enable_propagate_additional_user_context_data_input`<sup>Optional</sup> <a name="enable_propagate_additional_user_context_data_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextDataInput"></a>

```python
enable_propagate_additional_user_context_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_token_revocation_input`<sup>Optional</sup> <a name="enable_token_revocation_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocationInput"></a>

```python
enable_token_revocation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `explicit_auth_flows_input`<sup>Optional</sup> <a name="explicit_auth_flows_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlowsInput"></a>

```python
explicit_auth_flows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_token_validity_input`<sup>Optional</sup> <a name="id_token_validity_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidityInput"></a>

```python
id_token_validity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logout_urls_input`<sup>Optional</sup> <a name="logout_urls_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrlsInput"></a>

```python
logout_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_pattern_input`<sup>Optional</sup> <a name="name_pattern_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePatternInput"></a>

```python
name_pattern_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `prevent_user_existence_errors_input`<sup>Optional</sup> <a name="prevent_user_existence_errors_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrorsInput"></a>

```python
prevent_user_existence_errors_input: str
```

- *Type:* str

---

##### `read_attributes_input`<sup>Optional</sup> <a name="read_attributes_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributesInput"></a>

```python
read_attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `refresh_token_validity_input`<sup>Optional</sup> <a name="refresh_token_validity_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidityInput"></a>

```python
refresh_token_validity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `supported_identity_providers_input`<sup>Optional</sup> <a name="supported_identity_providers_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProvidersInput"></a>

```python
supported_identity_providers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_validity_units_input`<sup>Optional</sup> <a name="token_validity_units_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnitsInput"></a>

```python
token_validity_units_input: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientTokenValidityUnits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>]]

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `write_attributes_input`<sup>Optional</sup> <a name="write_attributes_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributesInput"></a>

```python
write_attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_token_validity`<sup>Required</sup> <a name="access_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidity"></a>

```python
access_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_oauth_flows`<sup>Required</sup> <a name="allowed_oauth_flows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlows"></a>

```python
allowed_oauth_flows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_oauth_flows_user_pool_client`<sup>Required</sup> <a name="allowed_oauth_flows_user_pool_client" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```python
allowed_oauth_flows_user_pool_client: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_oauth_scopes`<sup>Required</sup> <a name="allowed_oauth_scopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopes"></a>

```python
allowed_oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auth_session_validity`<sup>Required</sup> <a name="auth_session_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidity"></a>

```python
auth_session_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `callback_urls`<sup>Required</sup> <a name="callback_urls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrls"></a>

```python
callback_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_redirect_uri`<sup>Required</sup> <a name="default_redirect_uri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUri"></a>

```python
default_redirect_uri: str
```

- *Type:* str

---

##### `enable_propagate_additional_user_context_data`<sup>Required</sup> <a name="enable_propagate_additional_user_context_data" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```python
enable_propagate_additional_user_context_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_token_revocation`<sup>Required</sup> <a name="enable_token_revocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocation"></a>

```python
enable_token_revocation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `explicit_auth_flows`<sup>Required</sup> <a name="explicit_auth_flows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlows"></a>

```python
explicit_auth_flows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_token_validity`<sup>Required</sup> <a name="id_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidity"></a>

```python
id_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logout_urls`<sup>Required</sup> <a name="logout_urls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrls"></a>

```python
logout_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_pattern`<sup>Required</sup> <a name="name_pattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePattern"></a>

```python
name_pattern: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `prevent_user_existence_errors`<sup>Required</sup> <a name="prevent_user_existence_errors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrors"></a>

```python
prevent_user_existence_errors: str
```

- *Type:* str

---

##### `read_attributes`<sup>Required</sup> <a name="read_attributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributes"></a>

```python
read_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `refresh_token_validity`<sup>Required</sup> <a name="refresh_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidity"></a>

```python
refresh_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `supported_identity_providers`<sup>Required</sup> <a name="supported_identity_providers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProviders"></a>

```python
supported_identity_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `write_attributes`<sup>Required</sup> <a name="write_attributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributes"></a>

```python
write_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoManagedUserPoolClientAnalyticsConfiguration <a name="CognitoManagedUserPoolClientAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration(
  application_arn: str = None,
  application_id: str = None,
  external_id: str = None,
  role_arn: str = None,
  user_data_shared: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationArn">application_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#application_arn CognitoManagedUserPoolClient#application_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#application_id CognitoManagedUserPoolClient#application_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#external_id CognitoManagedUserPoolClient#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#role_arn CognitoManagedUserPoolClient#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.userDataShared">user_data_shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#user_data_shared CognitoManagedUserPoolClient#user_data_shared}. |

---

##### `application_arn`<sup>Optional</sup> <a name="application_arn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#application_arn CognitoManagedUserPoolClient#application_arn}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#application_id CognitoManagedUserPoolClient#application_id}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#external_id CognitoManagedUserPoolClient#external_id}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#role_arn CognitoManagedUserPoolClient#role_arn}.

---

##### `user_data_shared`<sup>Optional</sup> <a name="user_data_shared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.userDataShared"></a>

```python
user_data_shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#user_data_shared CognitoManagedUserPoolClient#user_data_shared}.

---

### CognitoManagedUserPoolClientConfig <a name="CognitoManagedUserPoolClientConfig" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user_pool_id: str,
  access_token_validity: typing.Union[int, float] = None,
  allowed_oauth_flows: typing.List[str] = None,
  allowed_oauth_flows_user_pool_client: typing.Union[bool, IResolvable] = None,
  allowed_oauth_scopes: typing.List[str] = None,
  analytics_configuration: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientAnalyticsConfiguration]] = None,
  auth_session_validity: typing.Union[int, float] = None,
  callback_urls: typing.List[str] = None,
  default_redirect_uri: str = None,
  enable_propagate_additional_user_context_data: typing.Union[bool, IResolvable] = None,
  enable_token_revocation: typing.Union[bool, IResolvable] = None,
  explicit_auth_flows: typing.List[str] = None,
  id_token_validity: typing.Union[int, float] = None,
  logout_urls: typing.List[str] = None,
  name_pattern: str = None,
  name_prefix: str = None,
  prevent_user_existence_errors: str = None,
  read_attributes: typing.List[str] = None,
  refresh_token_validity: typing.Union[int, float] = None,
  supported_identity_providers: typing.List[str] = None,
  token_validity_units: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientTokenValidityUnits]] = None,
  write_attributes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.accessTokenValidity">access_token_validity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlows">allowed_oauth_flows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient">allowed_oauth_flows_user_pool_client</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthScopes">allowed_oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.analyticsConfiguration">analytics_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>]]</code> | analytics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.authSessionValidity">auth_session_validity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.callbackUrls">callback_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.defaultRedirectUri">default_redirect_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enablePropagateAdditionalUserContextData">enable_propagate_additional_user_context_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enableTokenRevocation">enable_token_revocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.explicitAuthFlows">explicit_auth_flows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.idTokenValidity">id_token_validity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.logoutUrls">logout_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePattern">name_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.preventUserExistenceErrors">prevent_user_existence_errors</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.readAttributes">read_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.refreshTokenValidity">refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.supportedIdentityProviders">supported_identity_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.tokenValidityUnits">token_validity_units</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>]]</code> | token_validity_units block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.writeAttributes">write_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}.

---

##### `access_token_validity`<sup>Optional</sup> <a name="access_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.accessTokenValidity"></a>

```python
access_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}.

---

##### `allowed_oauth_flows`<sup>Optional</sup> <a name="allowed_oauth_flows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlows"></a>

```python
allowed_oauth_flows: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}.

---

##### `allowed_oauth_flows_user_pool_client`<sup>Optional</sup> <a name="allowed_oauth_flows_user_pool_client" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient"></a>

```python
allowed_oauth_flows_user_pool_client: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `allowed_oauth_scopes`<sup>Optional</sup> <a name="allowed_oauth_scopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthScopes"></a>

```python
allowed_oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}.

---

##### `analytics_configuration`<sup>Optional</sup> <a name="analytics_configuration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.analyticsConfiguration"></a>

```python
analytics_configuration: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientAnalyticsConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>]]

analytics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#analytics_configuration CognitoManagedUserPoolClient#analytics_configuration}

---

##### `auth_session_validity`<sup>Optional</sup> <a name="auth_session_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.authSessionValidity"></a>

```python
auth_session_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}.

---

##### `callback_urls`<sup>Optional</sup> <a name="callback_urls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.callbackUrls"></a>

```python
callback_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}.

---

##### `default_redirect_uri`<sup>Optional</sup> <a name="default_redirect_uri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.defaultRedirectUri"></a>

```python
default_redirect_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}.

---

##### `enable_propagate_additional_user_context_data`<sup>Optional</sup> <a name="enable_propagate_additional_user_context_data" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enablePropagateAdditionalUserContextData"></a>

```python
enable_propagate_additional_user_context_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `enable_token_revocation`<sup>Optional</sup> <a name="enable_token_revocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enableTokenRevocation"></a>

```python
enable_token_revocation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}.

---

##### `explicit_auth_flows`<sup>Optional</sup> <a name="explicit_auth_flows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.explicitAuthFlows"></a>

```python
explicit_auth_flows: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}.

---

##### `id_token_validity`<sup>Optional</sup> <a name="id_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.idTokenValidity"></a>

```python
id_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}.

---

##### `logout_urls`<sup>Optional</sup> <a name="logout_urls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.logoutUrls"></a>

```python
logout_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}.

---

##### `name_pattern`<sup>Optional</sup> <a name="name_pattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePattern"></a>

```python
name_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}.

---

##### `prevent_user_existence_errors`<sup>Optional</sup> <a name="prevent_user_existence_errors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.preventUserExistenceErrors"></a>

```python
prevent_user_existence_errors: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}.

---

##### `read_attributes`<sup>Optional</sup> <a name="read_attributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.readAttributes"></a>

```python
read_attributes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}.

---

##### `refresh_token_validity`<sup>Optional</sup> <a name="refresh_token_validity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.refreshTokenValidity"></a>

```python
refresh_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}.

---

##### `supported_identity_providers`<sup>Optional</sup> <a name="supported_identity_providers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.supportedIdentityProviders"></a>

```python
supported_identity_providers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}.

---

##### `token_validity_units`<sup>Optional</sup> <a name="token_validity_units" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.tokenValidityUnits"></a>

```python
token_validity_units: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientTokenValidityUnits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>]]

token_validity_units block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#token_validity_units CognitoManagedUserPoolClient#token_validity_units}

---

##### `write_attributes`<sup>Optional</sup> <a name="write_attributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.writeAttributes"></a>

```python
write_attributes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}.

---

### CognitoManagedUserPoolClientTokenValidityUnits <a name="CognitoManagedUserPoolClientTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits(
  access_token: str = None,
  id_token: str = None,
  refresh_token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#access_token CognitoManagedUserPoolClient#access_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.idToken">id_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#id_token CognitoManagedUserPoolClient#id_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.refreshToken">refresh_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#refresh_token CognitoManagedUserPoolClient#refresh_token}. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#access_token CognitoManagedUserPoolClient#access_token}.

---

##### `id_token`<sup>Optional</sup> <a name="id_token" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.idToken"></a>

```python
id_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#id_token CognitoManagedUserPoolClient#id_token}.

---

##### `refresh_token`<sup>Optional</sup> <a name="refresh_token" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.64.0/docs/resources/cognito_managed_user_pool_client#refresh_token CognitoManagedUserPoolClient#refresh_token}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoManagedUserPoolClientAnalyticsConfigurationList <a name="CognitoManagedUserPoolClientAnalyticsConfigurationList" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientAnalyticsConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>]]

---


### CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference <a name="CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn">reset_application_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared">reset_user_data_shared</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_arn` <a name="reset_application_arn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn"></a>

```python
def reset_application_arn() -> None
```

##### `reset_application_id` <a name="reset_application_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_user_data_shared` <a name="reset_user_data_shared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared"></a>

```python
def reset_user_data_shared() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput">application_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput">user_data_shared_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">user_data_shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arn_input`<sup>Optional</sup> <a name="application_arn_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput"></a>

```python
application_arn_input: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `user_data_shared_input`<sup>Optional</sup> <a name="user_data_shared_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput"></a>

```python
user_data_shared_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `user_data_shared`<sup>Required</sup> <a name="user_data_shared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```python
user_data_shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CognitoManagedUserPoolClientAnalyticsConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>]

---


### CognitoManagedUserPoolClientTokenValidityUnitsList <a name="CognitoManagedUserPoolClientTokenValidityUnitsList" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CognitoManagedUserPoolClientTokenValidityUnitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CognitoManagedUserPoolClientTokenValidityUnits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>]]

---


### CognitoManagedUserPoolClientTokenValidityUnitsOutputReference <a name="CognitoManagedUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_managed_user_pool_client

cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetIdToken">reset_id_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken">reset_refresh_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_id_token` <a name="reset_id_token" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetIdToken"></a>

```python
def reset_id_token() -> None
```

##### `reset_refresh_token` <a name="reset_refresh_token" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken"></a>

```python
def reset_refresh_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput">id_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput">refresh_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idToken">id_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">refresh_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `id_token_input`<sup>Optional</sup> <a name="id_token_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput"></a>

```python
id_token_input: str
```

- *Type:* str

---

##### `refresh_token_input`<sup>Optional</sup> <a name="refresh_token_input" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput"></a>

```python
refresh_token_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `id_token`<sup>Required</sup> <a name="id_token" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```python
id_token: str
```

- *Type:* str

---

##### `refresh_token`<sup>Required</sup> <a name="refresh_token" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CognitoManagedUserPoolClientTokenValidityUnits]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>]

---



