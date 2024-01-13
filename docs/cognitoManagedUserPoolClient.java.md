# `cognitoManagedUserPoolClient` Submodule <a name="`cognitoManagedUserPoolClient` Submodule" id="@cdktf/provider-aws.cognitoManagedUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoManagedUserPoolClient <a name="CognitoManagedUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client aws_cognito_managed_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClient;

CognitoManagedUserPoolClient.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .userPoolId(java.lang.String)
//  .accessTokenValidity(java.lang.Number)
//  .allowedOauthFlows(java.util.List<java.lang.String>)
//  .allowedOauthFlowsUserPoolClient(java.lang.Boolean)
//  .allowedOauthFlowsUserPoolClient(IResolvable)
//  .allowedOauthScopes(java.util.List<java.lang.String>)
//  .analyticsConfiguration(IResolvable)
//  .analyticsConfiguration(java.util.List<CognitoManagedUserPoolClientAnalyticsConfiguration>)
//  .authSessionValidity(java.lang.Number)
//  .callbackUrls(java.util.List<java.lang.String>)
//  .defaultRedirectUri(java.lang.String)
//  .enablePropagateAdditionalUserContextData(java.lang.Boolean)
//  .enablePropagateAdditionalUserContextData(IResolvable)
//  .enableTokenRevocation(java.lang.Boolean)
//  .enableTokenRevocation(IResolvable)
//  .explicitAuthFlows(java.util.List<java.lang.String>)
//  .idTokenValidity(java.lang.Number)
//  .logoutUrls(java.util.List<java.lang.String>)
//  .namePattern(java.lang.String)
//  .namePrefix(java.lang.String)
//  .preventUserExistenceErrors(java.lang.String)
//  .readAttributes(java.util.List<java.lang.String>)
//  .refreshTokenValidity(java.lang.Number)
//  .supportedIdentityProviders(java.util.List<java.lang.String>)
//  .tokenValidityUnits(IResolvable)
//  .tokenValidityUnits(java.util.List<CognitoManagedUserPoolClientTokenValidityUnits>)
//  .writeAttributes(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.accessTokenValidity">accessTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthFlows">allowedOauthFlows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthFlowsUserPoolClient">allowedOauthFlowsUserPoolClient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthScopes">allowedOauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.analyticsConfiguration">analyticsConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>></code> | analytics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.authSessionValidity">authSessionValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.callbackUrls">callbackUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.defaultRedirectUri">defaultRedirectUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.enableTokenRevocation">enableTokenRevocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.explicitAuthFlows">explicitAuthFlows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.idTokenValidity">idTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.logoutUrls">logoutUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.namePattern">namePattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.readAttributes">readAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.refreshTokenValidity">refreshTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.tokenValidityUnits">tokenValidityUnits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>></code> | token_validity_units block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.writeAttributes">writeAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}.

---

##### `accessTokenValidity`<sup>Optional</sup> <a name="accessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.accessTokenValidity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}.

---

##### `allowedOauthFlows`<sup>Optional</sup> <a name="allowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthFlows"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}.

---

##### `allowedOauthFlowsUserPoolClient`<sup>Optional</sup> <a name="allowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthFlowsUserPoolClient"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `allowedOauthScopes`<sup>Optional</sup> <a name="allowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.allowedOauthScopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}.

---

##### `analyticsConfiguration`<sup>Optional</sup> <a name="analyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.analyticsConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>>

analytics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#analytics_configuration CognitoManagedUserPoolClient#analytics_configuration}

---

##### `authSessionValidity`<sup>Optional</sup> <a name="authSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.authSessionValidity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}.

---

##### `callbackUrls`<sup>Optional</sup> <a name="callbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.callbackUrls"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}.

---

##### `defaultRedirectUri`<sup>Optional</sup> <a name="defaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.defaultRedirectUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}.

---

##### `enablePropagateAdditionalUserContextData`<sup>Optional</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.enablePropagateAdditionalUserContextData"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `enableTokenRevocation`<sup>Optional</sup> <a name="enableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.enableTokenRevocation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}.

---

##### `explicitAuthFlows`<sup>Optional</sup> <a name="explicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.explicitAuthFlows"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}.

---

##### `idTokenValidity`<sup>Optional</sup> <a name="idTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.idTokenValidity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}.

---

##### `logoutUrls`<sup>Optional</sup> <a name="logoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.logoutUrls"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}.

---

##### `namePattern`<sup>Optional</sup> <a name="namePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.namePattern"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}.

---

##### `preventUserExistenceErrors`<sup>Optional</sup> <a name="preventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.preventUserExistenceErrors"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}.

---

##### `readAttributes`<sup>Optional</sup> <a name="readAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.readAttributes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}.

---

##### `refreshTokenValidity`<sup>Optional</sup> <a name="refreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.refreshTokenValidity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}.

---

##### `supportedIdentityProviders`<sup>Optional</sup> <a name="supportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.supportedIdentityProviders"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}.

---

##### `tokenValidityUnits`<sup>Optional</sup> <a name="tokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.tokenValidityUnits"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>>

token_validity_units block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#token_validity_units CognitoManagedUserPoolClient#token_validity_units}

---

##### `writeAttributes`<sup>Optional</sup> <a name="writeAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.writeAttributes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration">putAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits">putTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAccessTokenValidity">resetAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlows">resetAllowedOauthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlowsUserPoolClient">resetAllowedOauthFlowsUserPoolClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthScopes">resetAllowedOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAnalyticsConfiguration">resetAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAuthSessionValidity">resetAuthSessionValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetCallbackUrls">resetCallbackUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetDefaultRedirectUri">resetDefaultRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnablePropagateAdditionalUserContextData">resetEnablePropagateAdditionalUserContextData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnableTokenRevocation">resetEnableTokenRevocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetExplicitAuthFlows">resetExplicitAuthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetIdTokenValidity">resetIdTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetLogoutUrls">resetLogoutUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePattern">resetNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetPreventUserExistenceErrors">resetPreventUserExistenceErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetReadAttributes">resetReadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetRefreshTokenValidity">resetRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetSupportedIdentityProviders">resetSupportedIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetTokenValidityUnits">resetTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetWriteAttributes">resetWriteAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnalyticsConfiguration` <a name="putAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration"></a>

```java
public void putAnalyticsConfiguration(IResolvable OR java.util.List<CognitoManagedUserPoolClientAnalyticsConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>>

---

##### `putTokenValidityUnits` <a name="putTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits"></a>

```java
public void putTokenValidityUnits(IResolvable OR java.util.List<CognitoManagedUserPoolClientTokenValidityUnits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>>

---

##### `resetAccessTokenValidity` <a name="resetAccessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAccessTokenValidity"></a>

```java
public void resetAccessTokenValidity()
```

##### `resetAllowedOauthFlows` <a name="resetAllowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlows"></a>

```java
public void resetAllowedOauthFlows()
```

##### `resetAllowedOauthFlowsUserPoolClient` <a name="resetAllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlowsUserPoolClient"></a>

```java
public void resetAllowedOauthFlowsUserPoolClient()
```

##### `resetAllowedOauthScopes` <a name="resetAllowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthScopes"></a>

```java
public void resetAllowedOauthScopes()
```

##### `resetAnalyticsConfiguration` <a name="resetAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAnalyticsConfiguration"></a>

```java
public void resetAnalyticsConfiguration()
```

##### `resetAuthSessionValidity` <a name="resetAuthSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAuthSessionValidity"></a>

```java
public void resetAuthSessionValidity()
```

##### `resetCallbackUrls` <a name="resetCallbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetCallbackUrls"></a>

```java
public void resetCallbackUrls()
```

##### `resetDefaultRedirectUri` <a name="resetDefaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetDefaultRedirectUri"></a>

```java
public void resetDefaultRedirectUri()
```

##### `resetEnablePropagateAdditionalUserContextData` <a name="resetEnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnablePropagateAdditionalUserContextData"></a>

```java
public void resetEnablePropagateAdditionalUserContextData()
```

##### `resetEnableTokenRevocation` <a name="resetEnableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnableTokenRevocation"></a>

```java
public void resetEnableTokenRevocation()
```

##### `resetExplicitAuthFlows` <a name="resetExplicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetExplicitAuthFlows"></a>

```java
public void resetExplicitAuthFlows()
```

##### `resetIdTokenValidity` <a name="resetIdTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetIdTokenValidity"></a>

```java
public void resetIdTokenValidity()
```

##### `resetLogoutUrls` <a name="resetLogoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetLogoutUrls"></a>

```java
public void resetLogoutUrls()
```

##### `resetNamePattern` <a name="resetNamePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePattern"></a>

```java
public void resetNamePattern()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPreventUserExistenceErrors` <a name="resetPreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetPreventUserExistenceErrors"></a>

```java
public void resetPreventUserExistenceErrors()
```

##### `resetReadAttributes` <a name="resetReadAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetReadAttributes"></a>

```java
public void resetReadAttributes()
```

##### `resetRefreshTokenValidity` <a name="resetRefreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetRefreshTokenValidity"></a>

```java
public void resetRefreshTokenValidity()
```

##### `resetSupportedIdentityProviders` <a name="resetSupportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetSupportedIdentityProviders"></a>

```java
public void resetSupportedIdentityProviders()
```

##### `resetTokenValidityUnits` <a name="resetTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetTokenValidityUnits"></a>

```java
public void resetTokenValidityUnits()
```

##### `resetWriteAttributes` <a name="resetWriteAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetWriteAttributes"></a>

```java
public void resetWriteAttributes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoManagedUserPoolClient resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClient;

CognitoManagedUserPoolClient.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClient;

CognitoManagedUserPoolClient.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClient;

CognitoManagedUserPoolClient.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClient;

CognitoManagedUserPoolClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoManagedUserPoolClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CognitoManagedUserPoolClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoManagedUserPoolClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoManagedUserPoolClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CognitoManagedUserPoolClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList">CognitoManagedUserPoolClientAnalyticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList">CognitoManagedUserPoolClientTokenValidityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidityInput">accessTokenValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsInput">allowedOauthFlowsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClientInput">allowedOauthFlowsUserPoolClientInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopesInput">allowedOauthScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfigurationInput">analyticsConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidityInput">authSessionValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrlsInput">callbackUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUriInput">defaultRedirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextDataInput">enablePropagateAdditionalUserContextDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocationInput">enableTokenRevocationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlowsInput">explicitAuthFlowsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidityInput">idTokenValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrlsInput">logoutUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePatternInput">namePatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrorsInput">preventUserExistenceErrorsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributesInput">readAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidityInput">refreshTokenValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProvidersInput">supportedIdentityProvidersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnitsInput">tokenValidityUnitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributesInput">writeAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidity">accessTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlows">allowedOauthFlows</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClient">allowedOauthFlowsUserPoolClient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopes">allowedOauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidity">authSessionValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrls">callbackUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidity">idTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrls">logoutUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePattern">namePattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributes">readAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributes">writeAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `analyticsConfiguration`<sup>Required</sup> <a name="analyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfiguration"></a>

```java
public CognitoManagedUserPoolClientAnalyticsConfigurationList getAnalyticsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList">CognitoManagedUserPoolClientAnalyticsConfigurationList</a>

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tokenValidityUnits`<sup>Required</sup> <a name="tokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnits"></a>

```java
public CognitoManagedUserPoolClientTokenValidityUnitsList getTokenValidityUnits();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList">CognitoManagedUserPoolClientTokenValidityUnitsList</a>

---

##### `accessTokenValidityInput`<sup>Optional</sup> <a name="accessTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidityInput"></a>

```java
public java.lang.Number getAccessTokenValidityInput();
```

- *Type:* java.lang.Number

---

##### `allowedOauthFlowsInput`<sup>Optional</sup> <a name="allowedOauthFlowsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthFlowsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOauthFlowsUserPoolClientInput`<sup>Optional</sup> <a name="allowedOauthFlowsUserPoolClientInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClientInput"></a>

```java
public java.lang.Object getAllowedOauthFlowsUserPoolClientInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedOauthScopesInput`<sup>Optional</sup> <a name="allowedOauthScopesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `analyticsConfigurationInput`<sup>Optional</sup> <a name="analyticsConfigurationInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfigurationInput"></a>

```java
public java.lang.Object getAnalyticsConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>>

---

##### `authSessionValidityInput`<sup>Optional</sup> <a name="authSessionValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidityInput"></a>

```java
public java.lang.Number getAuthSessionValidityInput();
```

- *Type:* java.lang.Number

---

##### `callbackUrlsInput`<sup>Optional</sup> <a name="callbackUrlsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrlsInput"></a>

```java
public java.util.List<java.lang.String> getCallbackUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultRedirectUriInput`<sup>Optional</sup> <a name="defaultRedirectUriInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUriInput"></a>

```java
public java.lang.String getDefaultRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `enablePropagateAdditionalUserContextDataInput`<sup>Optional</sup> <a name="enablePropagateAdditionalUserContextDataInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextDataInput"></a>

```java
public java.lang.Object getEnablePropagateAdditionalUserContextDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTokenRevocationInput`<sup>Optional</sup> <a name="enableTokenRevocationInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocationInput"></a>

```java
public java.lang.Object getEnableTokenRevocationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `explicitAuthFlowsInput`<sup>Optional</sup> <a name="explicitAuthFlowsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlowsInput"></a>

```java
public java.util.List<java.lang.String> getExplicitAuthFlowsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idTokenValidityInput`<sup>Optional</sup> <a name="idTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidityInput"></a>

```java
public java.lang.Number getIdTokenValidityInput();
```

- *Type:* java.lang.Number

---

##### `logoutUrlsInput`<sup>Optional</sup> <a name="logoutUrlsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrlsInput"></a>

```java
public java.util.List<java.lang.String> getLogoutUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namePatternInput`<sup>Optional</sup> <a name="namePatternInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePatternInput"></a>

```java
public java.lang.String getNamePatternInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `preventUserExistenceErrorsInput`<sup>Optional</sup> <a name="preventUserExistenceErrorsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrorsInput"></a>

```java
public java.lang.String getPreventUserExistenceErrorsInput();
```

- *Type:* java.lang.String

---

##### `readAttributesInput`<sup>Optional</sup> <a name="readAttributesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributesInput"></a>

```java
public java.util.List<java.lang.String> getReadAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `refreshTokenValidityInput`<sup>Optional</sup> <a name="refreshTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidityInput"></a>

```java
public java.lang.Number getRefreshTokenValidityInput();
```

- *Type:* java.lang.Number

---

##### `supportedIdentityProvidersInput`<sup>Optional</sup> <a name="supportedIdentityProvidersInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProvidersInput"></a>

```java
public java.util.List<java.lang.String> getSupportedIdentityProvidersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenValidityUnitsInput`<sup>Optional</sup> <a name="tokenValidityUnitsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnitsInput"></a>

```java
public java.lang.Object getTokenValidityUnitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `writeAttributesInput`<sup>Optional</sup> <a name="writeAttributesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributesInput"></a>

```java
public java.util.List<java.lang.String> getWriteAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessTokenValidity`<sup>Required</sup> <a name="accessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidity"></a>

```java
public java.lang.Number getAccessTokenValidity();
```

- *Type:* java.lang.Number

---

##### `allowedOauthFlows`<sup>Required</sup> <a name="allowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlows"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthFlows();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOauthFlowsUserPoolClient`<sup>Required</sup> <a name="allowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```java
public java.lang.Object getAllowedOauthFlowsUserPoolClient();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedOauthScopes`<sup>Required</sup> <a name="allowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopes"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authSessionValidity`<sup>Required</sup> <a name="authSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidity"></a>

```java
public java.lang.Number getAuthSessionValidity();
```

- *Type:* java.lang.Number

---

##### `callbackUrls`<sup>Required</sup> <a name="callbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrls"></a>

```java
public java.util.List<java.lang.String> getCallbackUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultRedirectUri`<sup>Required</sup> <a name="defaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUri"></a>

```java
public java.lang.String getDefaultRedirectUri();
```

- *Type:* java.lang.String

---

##### `enablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```java
public java.lang.Object getEnablePropagateAdditionalUserContextData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTokenRevocation`<sup>Required</sup> <a name="enableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocation"></a>

```java
public java.lang.Object getEnableTokenRevocation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `explicitAuthFlows`<sup>Required</sup> <a name="explicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlows"></a>

```java
public java.util.List<java.lang.String> getExplicitAuthFlows();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idTokenValidity`<sup>Required</sup> <a name="idTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidity"></a>

```java
public java.lang.Number getIdTokenValidity();
```

- *Type:* java.lang.Number

---

##### `logoutUrls`<sup>Required</sup> <a name="logoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrls"></a>

```java
public java.util.List<java.lang.String> getLogoutUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namePattern`<sup>Required</sup> <a name="namePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePattern"></a>

```java
public java.lang.String getNamePattern();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `preventUserExistenceErrors`<sup>Required</sup> <a name="preventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrors"></a>

```java
public java.lang.String getPreventUserExistenceErrors();
```

- *Type:* java.lang.String

---

##### `readAttributes`<sup>Required</sup> <a name="readAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributes"></a>

```java
public java.util.List<java.lang.String> getReadAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `refreshTokenValidity`<sup>Required</sup> <a name="refreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidity"></a>

```java
public java.lang.Number getRefreshTokenValidity();
```

- *Type:* java.lang.Number

---

##### `supportedIdentityProviders`<sup>Required</sup> <a name="supportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProviders"></a>

```java
public java.util.List<java.lang.String> getSupportedIdentityProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `writeAttributes`<sup>Required</sup> <a name="writeAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributes"></a>

```java
public java.util.List<java.lang.String> getWriteAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoManagedUserPoolClientAnalyticsConfiguration <a name="CognitoManagedUserPoolClientAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClientAnalyticsConfiguration;

CognitoManagedUserPoolClientAnalyticsConfiguration.builder()
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
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#application_arn CognitoManagedUserPoolClient#application_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#application_id CognitoManagedUserPoolClient#application_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#external_id CognitoManagedUserPoolClient#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#role_arn CognitoManagedUserPoolClient#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.userDataShared">userDataShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#user_data_shared CognitoManagedUserPoolClient#user_data_shared}. |

---

##### `applicationArn`<sup>Optional</sup> <a name="applicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#application_arn CognitoManagedUserPoolClient#application_arn}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#application_id CognitoManagedUserPoolClient#application_id}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#external_id CognitoManagedUserPoolClient#external_id}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#role_arn CognitoManagedUserPoolClient#role_arn}.

---

##### `userDataShared`<sup>Optional</sup> <a name="userDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.userDataShared"></a>

```java
public java.lang.Object getUserDataShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#user_data_shared CognitoManagedUserPoolClient#user_data_shared}.

---

### CognitoManagedUserPoolClientConfig <a name="CognitoManagedUserPoolClientConfig" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClientConfig;

CognitoManagedUserPoolClientConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .userPoolId(java.lang.String)
//  .accessTokenValidity(java.lang.Number)
//  .allowedOauthFlows(java.util.List<java.lang.String>)
//  .allowedOauthFlowsUserPoolClient(java.lang.Boolean)
//  .allowedOauthFlowsUserPoolClient(IResolvable)
//  .allowedOauthScopes(java.util.List<java.lang.String>)
//  .analyticsConfiguration(IResolvable)
//  .analyticsConfiguration(java.util.List<CognitoManagedUserPoolClientAnalyticsConfiguration>)
//  .authSessionValidity(java.lang.Number)
//  .callbackUrls(java.util.List<java.lang.String>)
//  .defaultRedirectUri(java.lang.String)
//  .enablePropagateAdditionalUserContextData(java.lang.Boolean)
//  .enablePropagateAdditionalUserContextData(IResolvable)
//  .enableTokenRevocation(java.lang.Boolean)
//  .enableTokenRevocation(IResolvable)
//  .explicitAuthFlows(java.util.List<java.lang.String>)
//  .idTokenValidity(java.lang.Number)
//  .logoutUrls(java.util.List<java.lang.String>)
//  .namePattern(java.lang.String)
//  .namePrefix(java.lang.String)
//  .preventUserExistenceErrors(java.lang.String)
//  .readAttributes(java.util.List<java.lang.String>)
//  .refreshTokenValidity(java.lang.Number)
//  .supportedIdentityProviders(java.util.List<java.lang.String>)
//  .tokenValidityUnits(IResolvable)
//  .tokenValidityUnits(java.util.List<CognitoManagedUserPoolClientTokenValidityUnits>)
//  .writeAttributes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.accessTokenValidity">accessTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlows">allowedOauthFlows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient">allowedOauthFlowsUserPoolClient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthScopes">allowedOauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>></code> | analytics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.authSessionValidity">authSessionValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.callbackUrls">callbackUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.idTokenValidity">idTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.logoutUrls">logoutUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePattern">namePattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.readAttributes">readAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>></code> | token_validity_units block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.writeAttributes">writeAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}.

---

##### `accessTokenValidity`<sup>Optional</sup> <a name="accessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.accessTokenValidity"></a>

```java
public java.lang.Number getAccessTokenValidity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}.

---

##### `allowedOauthFlows`<sup>Optional</sup> <a name="allowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlows"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthFlows();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}.

---

##### `allowedOauthFlowsUserPoolClient`<sup>Optional</sup> <a name="allowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient"></a>

```java
public java.lang.Object getAllowedOauthFlowsUserPoolClient();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `allowedOauthScopes`<sup>Optional</sup> <a name="allowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthScopes"></a>

```java
public java.util.List<java.lang.String> getAllowedOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}.

---

##### `analyticsConfiguration`<sup>Optional</sup> <a name="analyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.analyticsConfiguration"></a>

```java
public java.lang.Object getAnalyticsConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>>

analytics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#analytics_configuration CognitoManagedUserPoolClient#analytics_configuration}

---

##### `authSessionValidity`<sup>Optional</sup> <a name="authSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.authSessionValidity"></a>

```java
public java.lang.Number getAuthSessionValidity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}.

---

##### `callbackUrls`<sup>Optional</sup> <a name="callbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.callbackUrls"></a>

```java
public java.util.List<java.lang.String> getCallbackUrls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}.

---

##### `defaultRedirectUri`<sup>Optional</sup> <a name="defaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.defaultRedirectUri"></a>

```java
public java.lang.String getDefaultRedirectUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}.

---

##### `enablePropagateAdditionalUserContextData`<sup>Optional</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enablePropagateAdditionalUserContextData"></a>

```java
public java.lang.Object getEnablePropagateAdditionalUserContextData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `enableTokenRevocation`<sup>Optional</sup> <a name="enableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enableTokenRevocation"></a>

```java
public java.lang.Object getEnableTokenRevocation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}.

---

##### `explicitAuthFlows`<sup>Optional</sup> <a name="explicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.explicitAuthFlows"></a>

```java
public java.util.List<java.lang.String> getExplicitAuthFlows();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}.

---

##### `idTokenValidity`<sup>Optional</sup> <a name="idTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.idTokenValidity"></a>

```java
public java.lang.Number getIdTokenValidity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}.

---

##### `logoutUrls`<sup>Optional</sup> <a name="logoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.logoutUrls"></a>

```java
public java.util.List<java.lang.String> getLogoutUrls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}.

---

##### `namePattern`<sup>Optional</sup> <a name="namePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePattern"></a>

```java
public java.lang.String getNamePattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}.

---

##### `preventUserExistenceErrors`<sup>Optional</sup> <a name="preventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.preventUserExistenceErrors"></a>

```java
public java.lang.String getPreventUserExistenceErrors();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}.

---

##### `readAttributes`<sup>Optional</sup> <a name="readAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.readAttributes"></a>

```java
public java.util.List<java.lang.String> getReadAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}.

---

##### `refreshTokenValidity`<sup>Optional</sup> <a name="refreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.refreshTokenValidity"></a>

```java
public java.lang.Number getRefreshTokenValidity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}.

---

##### `supportedIdentityProviders`<sup>Optional</sup> <a name="supportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.supportedIdentityProviders"></a>

```java
public java.util.List<java.lang.String> getSupportedIdentityProviders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}.

---

##### `tokenValidityUnits`<sup>Optional</sup> <a name="tokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.tokenValidityUnits"></a>

```java
public java.lang.Object getTokenValidityUnits();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>>

token_validity_units block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#token_validity_units CognitoManagedUserPoolClient#token_validity_units}

---

##### `writeAttributes`<sup>Optional</sup> <a name="writeAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.writeAttributes"></a>

```java
public java.util.List<java.lang.String> getWriteAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}.

---

### CognitoManagedUserPoolClientTokenValidityUnits <a name="CognitoManagedUserPoolClientTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClientTokenValidityUnits;

CognitoManagedUserPoolClientTokenValidityUnits.builder()
//  .accessToken(java.lang.String)
//  .idToken(java.lang.String)
//  .refreshToken(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#access_token CognitoManagedUserPoolClient#access_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.idToken">idToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#id_token CognitoManagedUserPoolClient#id_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.refreshToken">refreshToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#refresh_token CognitoManagedUserPoolClient#refresh_token}. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#access_token CognitoManagedUserPoolClient#access_token}.

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.idToken"></a>

```java
public java.lang.String getIdToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#id_token CognitoManagedUserPoolClient#id_token}.

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.refreshToken"></a>

```java
public java.lang.String getRefreshToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cognito_managed_user_pool_client#refresh_token CognitoManagedUserPoolClient#refresh_token}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoManagedUserPoolClientAnalyticsConfigurationList <a name="CognitoManagedUserPoolClientAnalyticsConfigurationList" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClientAnalyticsConfigurationList;

new CognitoManagedUserPoolClientAnalyticsConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get"></a>

```java
public CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>>

---


### CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference <a name="CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference;

new CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn">resetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared">resetUserDataShared</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationArn` <a name="resetApplicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn"></a>

```java
public void resetApplicationArn()
```

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetUserDataShared` <a name="resetUserDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared"></a>

```java
public void resetUserDataShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput">applicationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput">userDataSharedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">userDataShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput"></a>

```java
public java.lang.String getApplicationArnInput();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `userDataSharedInput`<sup>Optional</sup> <a name="userDataSharedInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput"></a>

```java
public java.lang.Object getUserDataSharedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `userDataShared`<sup>Required</sup> <a name="userDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```java
public java.lang.Object getUserDataShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration">CognitoManagedUserPoolClientAnalyticsConfiguration</a>

---


### CognitoManagedUserPoolClientTokenValidityUnitsList <a name="CognitoManagedUserPoolClientTokenValidityUnitsList" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClientTokenValidityUnitsList;

new CognitoManagedUserPoolClientTokenValidityUnitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get"></a>

```java
public CognitoManagedUserPoolClientTokenValidityUnitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>>

---


### CognitoManagedUserPoolClientTokenValidityUnitsOutputReference <a name="CognitoManagedUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_user_pool_client.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference;

new CognitoManagedUserPoolClientTokenValidityUnitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetIdToken">resetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken">resetRefreshToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetIdToken` <a name="resetIdToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetIdToken"></a>

```java
public void resetIdToken()
```

##### `resetRefreshToken` <a name="resetRefreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken"></a>

```java
public void resetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput">idTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput">refreshTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idToken">idToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">refreshToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput"></a>

```java
public java.lang.String getIdTokenInput();
```

- *Type:* java.lang.String

---

##### `refreshTokenInput`<sup>Optional</sup> <a name="refreshTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput"></a>

```java
public java.lang.String getRefreshTokenInput();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```java
public java.lang.String getIdToken();
```

- *Type:* java.lang.String

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```java
public java.lang.String getRefreshToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits">CognitoManagedUserPoolClientTokenValidityUnits</a>

---



