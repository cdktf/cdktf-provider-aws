# `cognitoUserPoolClient` Submodule <a name="`cognitoUserPoolClient` Submodule" id="@cdktf/provider-aws.cognitoUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolClient <a name="CognitoUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client aws_cognito_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_client.CognitoUserPoolClient;

CognitoUserPoolClient.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .userPoolId(java.lang.String)
//  .accessTokenValidity(java.lang.Number)
//  .allowedOauthFlows(java.util.List<java.lang.String>)
//  .allowedOauthFlowsUserPoolClient(java.lang.Boolean)
//  .allowedOauthFlowsUserPoolClient(IResolvable)
//  .allowedOauthScopes(java.util.List<java.lang.String>)
//  .analyticsConfiguration(CognitoUserPoolClientAnalyticsConfiguration)
//  .authSessionValidity(java.lang.Number)
//  .callbackUrls(java.util.List<java.lang.String>)
//  .defaultRedirectUri(java.lang.String)
//  .enablePropagateAdditionalUserContextData(java.lang.Boolean)
//  .enablePropagateAdditionalUserContextData(IResolvable)
//  .enableTokenRevocation(java.lang.Boolean)
//  .enableTokenRevocation(IResolvable)
//  .explicitAuthFlows(java.util.List<java.lang.String>)
//  .generateSecret(java.lang.Boolean)
//  .generateSecret(IResolvable)
//  .id(java.lang.String)
//  .idTokenValidity(java.lang.Number)
//  .logoutUrls(java.util.List<java.lang.String>)
//  .preventUserExistenceErrors(java.lang.String)
//  .readAttributes(java.util.List<java.lang.String>)
//  .refreshTokenValidity(java.lang.Number)
//  .supportedIdentityProviders(java.util.List<java.lang.String>)
//  .tokenValidityUnits(CognitoUserPoolClientTokenValidityUnits)
//  .writeAttributes(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#name CognitoUserPoolClient#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.accessTokenValidity">accessTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.allowedOauthFlows">allowedOauthFlows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.allowedOauthFlowsUserPoolClient">allowedOauthFlowsUserPoolClient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.allowedOauthScopes">allowedOauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.analyticsConfiguration">analyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | analytics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.authSessionValidity">authSessionValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.callbackUrls">callbackUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.defaultRedirectUri">defaultRedirectUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.enableTokenRevocation">enableTokenRevocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.explicitAuthFlows">explicitAuthFlows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.generateSecret">generateSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id CognitoUserPoolClient#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.idTokenValidity">idTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.logoutUrls">logoutUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.readAttributes">readAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.refreshTokenValidity">refreshTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.tokenValidityUnits">tokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | token_validity_units block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.writeAttributes">writeAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#name CognitoUserPoolClient#name}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}.

---

##### `accessTokenValidity`<sup>Optional</sup> <a name="accessTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.accessTokenValidity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}.

---

##### `allowedOauthFlows`<sup>Optional</sup> <a name="allowedOauthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.allowedOauthFlows"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}.

---

##### `allowedOauthFlowsUserPoolClient`<sup>Optional</sup> <a name="allowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.allowedOauthFlowsUserPoolClient"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `allowedOauthScopes`<sup>Optional</sup> <a name="allowedOauthScopes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.allowedOauthScopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}.

---

##### `analyticsConfiguration`<sup>Optional</sup> <a name="analyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.analyticsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

analytics_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}

---

##### `authSessionValidity`<sup>Optional</sup> <a name="authSessionValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.authSessionValidity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}.

---

##### `callbackUrls`<sup>Optional</sup> <a name="callbackUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.callbackUrls"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}.

---

##### `defaultRedirectUri`<sup>Optional</sup> <a name="defaultRedirectUri" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.defaultRedirectUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}.

---

##### `enablePropagateAdditionalUserContextData`<sup>Optional</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.enablePropagateAdditionalUserContextData"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `enableTokenRevocation`<sup>Optional</sup> <a name="enableTokenRevocation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.enableTokenRevocation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}.

---

##### `explicitAuthFlows`<sup>Optional</sup> <a name="explicitAuthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.explicitAuthFlows"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}.

---

##### `generateSecret`<sup>Optional</sup> <a name="generateSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.generateSecret"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id CognitoUserPoolClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idTokenValidity`<sup>Optional</sup> <a name="idTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.idTokenValidity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}.

---

##### `logoutUrls`<sup>Optional</sup> <a name="logoutUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.logoutUrls"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}.

---

##### `preventUserExistenceErrors`<sup>Optional</sup> <a name="preventUserExistenceErrors" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.preventUserExistenceErrors"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}.

---

##### `readAttributes`<sup>Optional</sup> <a name="readAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.readAttributes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}.

---

##### `refreshTokenValidity`<sup>Optional</sup> <a name="refreshTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.refreshTokenValidity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}.

---

##### `supportedIdentityProviders`<sup>Optional</sup> <a name="supportedIdentityProviders" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.supportedIdentityProviders"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}.

---

##### `tokenValidityUnits`<sup>Optional</sup> <a name="tokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.tokenValidityUnits"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

token_validity_units block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}

---

##### `writeAttributes`<sup>Optional</sup> <a name="writeAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.writeAttributes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration">putAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits">putTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAccessTokenValidity">resetAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlows">resetAllowedOauthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlowsUserPoolClient">resetAllowedOauthFlowsUserPoolClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthScopes">resetAllowedOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAnalyticsConfiguration">resetAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAuthSessionValidity">resetAuthSessionValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetCallbackUrls">resetCallbackUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetDefaultRedirectUri">resetDefaultRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetEnablePropagateAdditionalUserContextData">resetEnablePropagateAdditionalUserContextData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetEnableTokenRevocation">resetEnableTokenRevocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetExplicitAuthFlows">resetExplicitAuthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetGenerateSecret">resetGenerateSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity">resetIdTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrls">resetLogoutUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors">resetPreventUserExistenceErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes">resetReadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity">resetRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders">resetSupportedIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits">resetTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes">resetWriteAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAnalyticsConfiguration` <a name="putAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration"></a>

```java
public void putAnalyticsConfiguration(CognitoUserPoolClientAnalyticsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---

##### `putTokenValidityUnits` <a name="putTokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits"></a>

```java
public void putTokenValidityUnits(CognitoUserPoolClientTokenValidityUnits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---

##### `resetAccessTokenValidity` <a name="resetAccessTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAccessTokenValidity"></a>

```java
public void resetAccessTokenValidity()
```

##### `resetAllowedOauthFlows` <a name="resetAllowedOauthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlows"></a>

```java
public void resetAllowedOauthFlows()
```

##### `resetAllowedOauthFlowsUserPoolClient` <a name="resetAllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlowsUserPoolClient"></a>

```java
public void resetAllowedOauthFlowsUserPoolClient()
```

##### `resetAllowedOauthScopes` <a name="resetAllowedOauthScopes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthScopes"></a>

```java
public void resetAllowedOauthScopes()
```

##### `resetAnalyticsConfiguration` <a name="resetAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAnalyticsConfiguration"></a>

```java
public void resetAnalyticsConfiguration()
```

##### `resetAuthSessionValidity` <a name="resetAuthSessionValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAuthSessionValidity"></a>

```java
public void resetAuthSessionValidity()
```

##### `resetCallbackUrls` <a name="resetCallbackUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetCallbackUrls"></a>

```java
public void resetCallbackUrls()
```

##### `resetDefaultRedirectUri` <a name="resetDefaultRedirectUri" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetDefaultRedirectUri"></a>

```java
public void resetDefaultRedirectUri()
```

##### `resetEnablePropagateAdditionalUserContextData` <a name="resetEnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetEnablePropagateAdditionalUserContextData"></a>

```java
public void resetEnablePropagateAdditionalUserContextData()
```

##### `resetEnableTokenRevocation` <a name="resetEnableTokenRevocation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetEnableTokenRevocation"></a>

```java
public void resetEnableTokenRevocation()
```

##### `resetExplicitAuthFlows` <a name="resetExplicitAuthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetExplicitAuthFlows"></a>

```java
public void resetExplicitAuthFlows()
```

##### `resetGenerateSecret` <a name="resetGenerateSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetGenerateSecret"></a>

```java
public void resetGenerateSecret()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetId"></a>

```java
public void resetId()
```

##### `resetIdTokenValidity` <a name="resetIdTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity"></a>

```java
public void resetIdTokenValidity()
```

##### `resetLogoutUrls` <a name="resetLogoutUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrls"></a>

```java
public void resetLogoutUrls()
```

##### `resetPreventUserExistenceErrors` <a name="resetPreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors"></a>

```java
public void resetPreventUserExistenceErrors()
```

##### `resetReadAttributes` <a name="resetReadAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes"></a>

```java
public void resetReadAttributes()
```

##### `resetRefreshTokenValidity` <a name="resetRefreshTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity"></a>

```java
public void resetRefreshTokenValidity()
```

##### `resetSupportedIdentityProviders` <a name="resetSupportedIdentityProviders" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders"></a>

```java
public void resetSupportedIdentityProviders()
```

##### `resetTokenValidityUnits` <a name="resetTokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits"></a>

```java
public void resetTokenValidityUnits()
```

##### `resetWriteAttributes` <a name="resetWriteAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes"></a>

```java
public void resetWriteAttributes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_client.CognitoUserPoolClient;

CognitoUserPoolClient.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_client.CognitoUserPoolClient;

CognitoUserPoolClient.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_client.CognitoUserPoolClient;

CognitoUserPoolClient.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference">CognitoUserPoolClientAnalyticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference">CognitoUserPoolClientTokenValidityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput">accessTokenValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsInput">allowedOauthFlowsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClientInput">allowedOauthFlowsUserPoolClientInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopesInput">allowedOauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput">analyticsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidityInput">authSessionValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrlsInput">callbackUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput">defaultRedirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextDataInput">enablePropagateAdditionalUserContextDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput">enableTokenRevocationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput">explicitAuthFlowsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput">generateSecretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput">idTokenValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrlsInput">logoutUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput">preventUserExistenceErrorsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput">readAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput">refreshTokenValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput">supportedIdentityProvidersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput">tokenValidityUnitsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput">writeAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity">accessTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlows">allowedOauthFlows</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient">allowedOauthFlowsUserPoolClient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopes">allowedOauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidity">authSessionValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrls">callbackUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret">generateSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity">idTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrls">logoutUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes">readAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes">writeAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `analyticsConfiguration`<sup>Required</sup> <a name="analyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration"></a>

```java
public CognitoUserPoolClientAnalyticsConfigurationOutputReference getAnalyticsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference">CognitoUserPoolClientAnalyticsConfigurationOutputReference</a>

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `tokenValidityUnits`<sup>Required</sup> <a name="tokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits"></a>

```java
public CognitoUserPoolClientTokenValidityUnitsOutputReference getTokenValidityUnits();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference">CognitoUserPoolClientTokenValidityUnitsOutputReference</a>

---

##### `accessTokenValidityInput`<sup>Optional</sup> <a name="accessTokenValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput"></a>

```java
public java.lang.Number getAccessTokenValidityInput();
```

- *Type:* java.lang.Number

---

##### `allowedOauthFlowsInput`<sup>Optional</sup> <a name="allowedOauthFlowsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthFlowsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOauthFlowsUserPoolClientInput`<sup>Optional</sup> <a name="allowedOauthFlowsUserPoolClientInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClientInput"></a>

```java
public java.lang.Object getAllowedOauthFlowsUserPoolClientInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedOauthScopesInput`<sup>Optional</sup> <a name="allowedOauthScopesInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `analyticsConfigurationInput`<sup>Optional</sup> <a name="analyticsConfigurationInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput"></a>

```java
public CognitoUserPoolClientAnalyticsConfiguration getAnalyticsConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---

##### `authSessionValidityInput`<sup>Optional</sup> <a name="authSessionValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidityInput"></a>

```java
public java.lang.Number getAuthSessionValidityInput();
```

- *Type:* java.lang.Number

---

##### `callbackUrlsInput`<sup>Optional</sup> <a name="callbackUrlsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrlsInput"></a>

```java
public java.util.List<java.lang.String> getCallbackUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultRedirectUriInput`<sup>Optional</sup> <a name="defaultRedirectUriInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput"></a>

```java
public java.lang.String getDefaultRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `enablePropagateAdditionalUserContextDataInput`<sup>Optional</sup> <a name="enablePropagateAdditionalUserContextDataInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextDataInput"></a>

```java
public java.lang.Object getEnablePropagateAdditionalUserContextDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTokenRevocationInput`<sup>Optional</sup> <a name="enableTokenRevocationInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput"></a>

```java
public java.lang.Object getEnableTokenRevocationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `explicitAuthFlowsInput`<sup>Optional</sup> <a name="explicitAuthFlowsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput"></a>

```java
public java.util.List<java.lang.String> getExplicitAuthFlowsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `generateSecretInput`<sup>Optional</sup> <a name="generateSecretInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput"></a>

```java
public java.lang.Object getGenerateSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idTokenValidityInput`<sup>Optional</sup> <a name="idTokenValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput"></a>

```java
public java.lang.Number getIdTokenValidityInput();
```

- *Type:* java.lang.Number

---

##### `logoutUrlsInput`<sup>Optional</sup> <a name="logoutUrlsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrlsInput"></a>

```java
public java.util.List<java.lang.String> getLogoutUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `preventUserExistenceErrorsInput`<sup>Optional</sup> <a name="preventUserExistenceErrorsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput"></a>

```java
public java.lang.String getPreventUserExistenceErrorsInput();
```

- *Type:* java.lang.String

---

##### `readAttributesInput`<sup>Optional</sup> <a name="readAttributesInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput"></a>

```java
public java.util.List<java.lang.String> getReadAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `refreshTokenValidityInput`<sup>Optional</sup> <a name="refreshTokenValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput"></a>

```java
public java.lang.Number getRefreshTokenValidityInput();
```

- *Type:* java.lang.Number

---

##### `supportedIdentityProvidersInput`<sup>Optional</sup> <a name="supportedIdentityProvidersInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput"></a>

```java
public java.util.List<java.lang.String> getSupportedIdentityProvidersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenValidityUnitsInput`<sup>Optional</sup> <a name="tokenValidityUnitsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput"></a>

```java
public CognitoUserPoolClientTokenValidityUnits getTokenValidityUnitsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `writeAttributesInput`<sup>Optional</sup> <a name="writeAttributesInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput"></a>

```java
public java.util.List<java.lang.String> getWriteAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessTokenValidity`<sup>Required</sup> <a name="accessTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity"></a>

```java
public java.lang.Number getAccessTokenValidity();
```

- *Type:* java.lang.Number

---

##### `allowedOauthFlows`<sup>Required</sup> <a name="allowedOauthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlows"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthFlows();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOauthFlowsUserPoolClient`<sup>Required</sup> <a name="allowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```java
public java.lang.Object getAllowedOauthFlowsUserPoolClient();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedOauthScopes`<sup>Required</sup> <a name="allowedOauthScopes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopes"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authSessionValidity`<sup>Required</sup> <a name="authSessionValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidity"></a>

```java
public java.lang.Number getAuthSessionValidity();
```

- *Type:* java.lang.Number

---

##### `callbackUrls`<sup>Required</sup> <a name="callbackUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrls"></a>

```java
public java.util.List<java.lang.String> getCallbackUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultRedirectUri`<sup>Required</sup> <a name="defaultRedirectUri" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri"></a>

```java
public java.lang.String getDefaultRedirectUri();
```

- *Type:* java.lang.String

---

##### `enablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```java
public java.lang.Object getEnablePropagateAdditionalUserContextData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTokenRevocation`<sup>Required</sup> <a name="enableTokenRevocation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation"></a>

```java
public java.lang.Object getEnableTokenRevocation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `explicitAuthFlows`<sup>Required</sup> <a name="explicitAuthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows"></a>

```java
public java.util.List<java.lang.String> getExplicitAuthFlows();
```

- *Type:* java.util.List<java.lang.String>

---

##### `generateSecret`<sup>Required</sup> <a name="generateSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret"></a>

```java
public java.lang.Object getGenerateSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idTokenValidity`<sup>Required</sup> <a name="idTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity"></a>

```java
public java.lang.Number getIdTokenValidity();
```

- *Type:* java.lang.Number

---

##### `logoutUrls`<sup>Required</sup> <a name="logoutUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrls"></a>

```java
public java.util.List<java.lang.String> getLogoutUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `preventUserExistenceErrors`<sup>Required</sup> <a name="preventUserExistenceErrors" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors"></a>

```java
public java.lang.String getPreventUserExistenceErrors();
```

- *Type:* java.lang.String

---

##### `readAttributes`<sup>Required</sup> <a name="readAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes"></a>

```java
public java.util.List<java.lang.String> getReadAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `refreshTokenValidity`<sup>Required</sup> <a name="refreshTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity"></a>

```java
public java.lang.Number getRefreshTokenValidity();
```

- *Type:* java.lang.Number

---

##### `supportedIdentityProviders`<sup>Required</sup> <a name="supportedIdentityProviders" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders"></a>

```java
public java.util.List<java.lang.String> getSupportedIdentityProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `writeAttributes`<sup>Required</sup> <a name="writeAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes"></a>

```java
public java.util.List<java.lang.String> getWriteAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolClientAnalyticsConfiguration <a name="CognitoUserPoolClientAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_client.CognitoUserPoolClientAnalyticsConfiguration;

CognitoUserPoolClientAnalyticsConfiguration.builder()
//  .applicationArn(java.lang.String)
//  .applicationId(java.lang.String)
//  .externalId(java.lang.String)
//  .roleArn(java.lang.String)
//  .userDataShared(java.lang.Boolean)
//  .userDataShared(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared">userDataShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}. |

---

##### `applicationArn`<sup>Optional</sup> <a name="applicationArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}.

---

##### `userDataShared`<sup>Optional</sup> <a name="userDataShared" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared"></a>

```java
public java.lang.Object getUserDataShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}.

---

### CognitoUserPoolClientConfig <a name="CognitoUserPoolClientConfig" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_client.CognitoUserPoolClientConfig;

CognitoUserPoolClientConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .userPoolId(java.lang.String)
//  .accessTokenValidity(java.lang.Number)
//  .allowedOauthFlows(java.util.List<java.lang.String>)
//  .allowedOauthFlowsUserPoolClient(java.lang.Boolean)
//  .allowedOauthFlowsUserPoolClient(IResolvable)
//  .allowedOauthScopes(java.util.List<java.lang.String>)
//  .analyticsConfiguration(CognitoUserPoolClientAnalyticsConfiguration)
//  .authSessionValidity(java.lang.Number)
//  .callbackUrls(java.util.List<java.lang.String>)
//  .defaultRedirectUri(java.lang.String)
//  .enablePropagateAdditionalUserContextData(java.lang.Boolean)
//  .enablePropagateAdditionalUserContextData(IResolvable)
//  .enableTokenRevocation(java.lang.Boolean)
//  .enableTokenRevocation(IResolvable)
//  .explicitAuthFlows(java.util.List<java.lang.String>)
//  .generateSecret(java.lang.Boolean)
//  .generateSecret(IResolvable)
//  .id(java.lang.String)
//  .idTokenValidity(java.lang.Number)
//  .logoutUrls(java.util.List<java.lang.String>)
//  .preventUserExistenceErrors(java.lang.String)
//  .readAttributes(java.util.List<java.lang.String>)
//  .refreshTokenValidity(java.lang.Number)
//  .supportedIdentityProviders(java.util.List<java.lang.String>)
//  .tokenValidityUnits(CognitoUserPoolClientTokenValidityUnits)
//  .writeAttributes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#name CognitoUserPoolClient#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity">accessTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlows">allowedOauthFlows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient">allowedOauthFlowsUserPoolClient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthScopes">allowedOauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | analytics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.authSessionValidity">authSessionValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrls">callbackUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret">generateSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id CognitoUserPoolClient#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity">idTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrls">logoutUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes">readAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | token_validity_units block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes">writeAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#name CognitoUserPoolClient#name}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}.

---

##### `accessTokenValidity`<sup>Optional</sup> <a name="accessTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity"></a>

```java
public java.lang.Number getAccessTokenValidity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}.

---

##### `allowedOauthFlows`<sup>Optional</sup> <a name="allowedOauthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlows"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthFlows();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}.

---

##### `allowedOauthFlowsUserPoolClient`<sup>Optional</sup> <a name="allowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient"></a>

```java
public java.lang.Object getAllowedOauthFlowsUserPoolClient();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `allowedOauthScopes`<sup>Optional</sup> <a name="allowedOauthScopes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthScopes"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}.

---

##### `analyticsConfiguration`<sup>Optional</sup> <a name="analyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration"></a>

```java
public CognitoUserPoolClientAnalyticsConfiguration getAnalyticsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

analytics_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}

---

##### `authSessionValidity`<sup>Optional</sup> <a name="authSessionValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.authSessionValidity"></a>

```java
public java.lang.Number getAuthSessionValidity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}.

---

##### `callbackUrls`<sup>Optional</sup> <a name="callbackUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrls"></a>

```java
public java.util.List<java.lang.String> getCallbackUrls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}.

---

##### `defaultRedirectUri`<sup>Optional</sup> <a name="defaultRedirectUri" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri"></a>

```java
public java.lang.String getDefaultRedirectUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}.

---

##### `enablePropagateAdditionalUserContextData`<sup>Optional</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enablePropagateAdditionalUserContextData"></a>

```java
public java.lang.Object getEnablePropagateAdditionalUserContextData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `enableTokenRevocation`<sup>Optional</sup> <a name="enableTokenRevocation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation"></a>

```java
public java.lang.Object getEnableTokenRevocation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}.

---

##### `explicitAuthFlows`<sup>Optional</sup> <a name="explicitAuthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows"></a>

```java
public java.util.List<java.lang.String> getExplicitAuthFlows();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}.

---

##### `generateSecret`<sup>Optional</sup> <a name="generateSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret"></a>

```java
public java.lang.Object getGenerateSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id CognitoUserPoolClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idTokenValidity`<sup>Optional</sup> <a name="idTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity"></a>

```java
public java.lang.Number getIdTokenValidity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}.

---

##### `logoutUrls`<sup>Optional</sup> <a name="logoutUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrls"></a>

```java
public java.util.List<java.lang.String> getLogoutUrls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}.

---

##### `preventUserExistenceErrors`<sup>Optional</sup> <a name="preventUserExistenceErrors" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors"></a>

```java
public java.lang.String getPreventUserExistenceErrors();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}.

---

##### `readAttributes`<sup>Optional</sup> <a name="readAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes"></a>

```java
public java.util.List<java.lang.String> getReadAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}.

---

##### `refreshTokenValidity`<sup>Optional</sup> <a name="refreshTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity"></a>

```java
public java.lang.Number getRefreshTokenValidity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}.

---

##### `supportedIdentityProviders`<sup>Optional</sup> <a name="supportedIdentityProviders" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders"></a>

```java
public java.util.List<java.lang.String> getSupportedIdentityProviders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}.

---

##### `tokenValidityUnits`<sup>Optional</sup> <a name="tokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits"></a>

```java
public CognitoUserPoolClientTokenValidityUnits getTokenValidityUnits();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

token_validity_units block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}

---

##### `writeAttributes`<sup>Optional</sup> <a name="writeAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes"></a>

```java
public java.util.List<java.lang.String> getWriteAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}.

---

### CognitoUserPoolClientTokenValidityUnits <a name="CognitoUserPoolClientTokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_client.CognitoUserPoolClientTokenValidityUnits;

CognitoUserPoolClientTokenValidityUnits.builder()
//  .accessToken(java.lang.String)
//  .idToken(java.lang.String)
//  .refreshToken(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken">idToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken">refreshToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}.

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken"></a>

```java
public java.lang.String getIdToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}.

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken"></a>

```java
public java.lang.String getRefreshToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolClientAnalyticsConfigurationOutputReference <a name="CognitoUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_client.CognitoUserPoolClientAnalyticsConfigurationOutputReference;

new CognitoUserPoolClientAnalyticsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn">resetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared">resetUserDataShared</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationArn` <a name="resetApplicationArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn"></a>

```java
public void resetApplicationArn()
```

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetUserDataShared` <a name="resetUserDataShared" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared"></a>

```java
public void resetUserDataShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput">applicationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput">userDataSharedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">userDataShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput"></a>

```java
public java.lang.String getApplicationArnInput();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `userDataSharedInput`<sup>Optional</sup> <a name="userDataSharedInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput"></a>

```java
public java.lang.Object getUserDataSharedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `userDataShared`<sup>Required</sup> <a name="userDataShared" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```java
public java.lang.Object getUserDataShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolClientAnalyticsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---


### CognitoUserPoolClientTokenValidityUnitsOutputReference <a name="CognitoUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_client.CognitoUserPoolClientTokenValidityUnitsOutputReference;

new CognitoUserPoolClientTokenValidityUnitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetIdToken">resetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken">resetRefreshToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetIdToken` <a name="resetIdToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetIdToken"></a>

```java
public void resetIdToken()
```

##### `resetRefreshToken` <a name="resetRefreshToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken"></a>

```java
public void resetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput">idTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput">refreshTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken">idToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">refreshToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput"></a>

```java
public java.lang.String getIdTokenInput();
```

- *Type:* java.lang.String

---

##### `refreshTokenInput`<sup>Optional</sup> <a name="refreshTokenInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput"></a>

```java
public java.lang.String getRefreshTokenInput();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```java
public java.lang.String getIdToken();
```

- *Type:* java.lang.String

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```java
public java.lang.String getRefreshToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolClientTokenValidityUnits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---



