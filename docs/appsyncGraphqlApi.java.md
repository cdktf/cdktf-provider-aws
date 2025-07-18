# `appsyncGraphqlApi` Submodule <a name="`appsyncGraphqlApi` Submodule" id="@cdktf/provider-aws.appsyncGraphqlApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncGraphqlApi <a name="AppsyncGraphqlApi" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api aws_appsync_graphql_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApi;

AppsyncGraphqlApi.Builder.create(Construct scope, java.lang.String id)
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
    .authenticationType(java.lang.String)
    .name(java.lang.String)
//  .additionalAuthenticationProvider(IResolvable)
//  .additionalAuthenticationProvider(java.util.List<AppsyncGraphqlApiAdditionalAuthenticationProvider>)
//  .apiType(java.lang.String)
//  .enhancedMetricsConfig(AppsyncGraphqlApiEnhancedMetricsConfig)
//  .id(java.lang.String)
//  .introspectionConfig(java.lang.String)
//  .lambdaAuthorizerConfig(AppsyncGraphqlApiLambdaAuthorizerConfig)
//  .logConfig(AppsyncGraphqlApiLogConfig)
//  .mergedApiExecutionRoleArn(java.lang.String)
//  .openidConnectConfig(AppsyncGraphqlApiOpenidConnectConfig)
//  .queryDepthLimit(java.lang.Number)
//  .region(java.lang.String)
//  .resolverCountLimit(java.lang.Number)
//  .schema(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .userPoolConfig(AppsyncGraphqlApiUserPoolConfig)
//  .visibility(java.lang.String)
//  .xrayEnabled(java.lang.Boolean)
//  .xrayEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#name AppsyncGraphqlApi#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.additionalAuthenticationProvider">additionalAuthenticationProvider</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>></code> | additional_authentication_provider block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.apiType">apiType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#api_type AppsyncGraphqlApi#api_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.enhancedMetricsConfig">enhancedMetricsConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig">AppsyncGraphqlApiEnhancedMetricsConfig</a></code> | enhanced_metrics_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#id AppsyncGraphqlApi#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.introspectionConfig">introspectionConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#introspection_config AppsyncGraphqlApi#introspection_config}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.mergedApiExecutionRoleArn">mergedApiExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#merged_api_execution_role_arn AppsyncGraphqlApi#merged_api_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.openidConnectConfig">openidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | openid_connect_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.queryDepthLimit">queryDepthLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#query_depth_limit AppsyncGraphqlApi#query_depth_limit}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.resolverCountLimit">resolverCountLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#resolver_count_limit AppsyncGraphqlApi#resolver_count_limit}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#schema AppsyncGraphqlApi#schema}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#tags AppsyncGraphqlApi#tags}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | user_pool_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#visibility AppsyncGraphqlApi#visibility}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.xrayEnabled">xrayEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#name AppsyncGraphqlApi#name}.

---

##### `additionalAuthenticationProvider`<sup>Optional</sup> <a name="additionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.additionalAuthenticationProvider"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>>

additional_authentication_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}

---

##### `apiType`<sup>Optional</sup> <a name="apiType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.apiType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#api_type AppsyncGraphqlApi#api_type}.

---

##### `enhancedMetricsConfig`<sup>Optional</sup> <a name="enhancedMetricsConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.enhancedMetricsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig">AppsyncGraphqlApiEnhancedMetricsConfig</a>

enhanced_metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#enhanced_metrics_config AppsyncGraphqlApi#enhanced_metrics_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#id AppsyncGraphqlApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `introspectionConfig`<sup>Optional</sup> <a name="introspectionConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.introspectionConfig"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#introspection_config AppsyncGraphqlApi#introspection_config}.

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.lambdaAuthorizerConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#log_config AppsyncGraphqlApi#log_config}

---

##### `mergedApiExecutionRoleArn`<sup>Optional</sup> <a name="mergedApiExecutionRoleArn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.mergedApiExecutionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#merged_api_execution_role_arn AppsyncGraphqlApi#merged_api_execution_role_arn}.

---

##### `openidConnectConfig`<sup>Optional</sup> <a name="openidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.openidConnectConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

openid_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}

---

##### `queryDepthLimit`<sup>Optional</sup> <a name="queryDepthLimit" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.queryDepthLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#query_depth_limit AppsyncGraphqlApi#query_depth_limit}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#region AppsyncGraphqlApi#region}

---

##### `resolverCountLimit`<sup>Optional</sup> <a name="resolverCountLimit" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.resolverCountLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#resolver_count_limit AppsyncGraphqlApi#resolver_count_limit}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#schema AppsyncGraphqlApi#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#tags AppsyncGraphqlApi#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}.

---

##### `userPoolConfig`<sup>Optional</sup> <a name="userPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.userPoolConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

user_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#visibility AppsyncGraphqlApi#visibility}.

---

##### `xrayEnabled`<sup>Optional</sup> <a name="xrayEnabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.xrayEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider">putAdditionalAuthenticationProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putEnhancedMetricsConfig">putEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig">putLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig">putOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig">putUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetAdditionalAuthenticationProvider">resetAdditionalAuthenticationProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetApiType">resetApiType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetEnhancedMetricsConfig">resetEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetIntrospectionConfig">resetIntrospectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLambdaAuthorizerConfig">resetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetMergedApiExecutionRoleArn">resetMergedApiExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOpenidConnectConfig">resetOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetQueryDepthLimit">resetQueryDepthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetResolverCountLimit">resetResolverCountLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetUserPoolConfig">resetUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetXrayEnabled">resetXrayEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalAuthenticationProvider` <a name="putAdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider"></a>

```java
public void putAdditionalAuthenticationProvider(IResolvable OR java.util.List<AppsyncGraphqlApiAdditionalAuthenticationProvider> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>>

---

##### `putEnhancedMetricsConfig` <a name="putEnhancedMetricsConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putEnhancedMetricsConfig"></a>

```java
public void putEnhancedMetricsConfig(AppsyncGraphqlApiEnhancedMetricsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putEnhancedMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig">AppsyncGraphqlApiEnhancedMetricsConfig</a>

---

##### `putLambdaAuthorizerConfig` <a name="putLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig"></a>

```java
public void putLambdaAuthorizerConfig(AppsyncGraphqlApiLambdaAuthorizerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig"></a>

```java
public void putLogConfig(AppsyncGraphqlApiLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

---

##### `putOpenidConnectConfig` <a name="putOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig"></a>

```java
public void putOpenidConnectConfig(AppsyncGraphqlApiOpenidConnectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

---

##### `putUserPoolConfig` <a name="putUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig"></a>

```java
public void putUserPoolConfig(AppsyncGraphqlApiUserPoolConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

---

##### `resetAdditionalAuthenticationProvider` <a name="resetAdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetAdditionalAuthenticationProvider"></a>

```java
public void resetAdditionalAuthenticationProvider()
```

##### `resetApiType` <a name="resetApiType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetApiType"></a>

```java
public void resetApiType()
```

##### `resetEnhancedMetricsConfig` <a name="resetEnhancedMetricsConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetEnhancedMetricsConfig"></a>

```java
public void resetEnhancedMetricsConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetId"></a>

```java
public void resetId()
```

##### `resetIntrospectionConfig` <a name="resetIntrospectionConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetIntrospectionConfig"></a>

```java
public void resetIntrospectionConfig()
```

##### `resetLambdaAuthorizerConfig` <a name="resetLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLambdaAuthorizerConfig"></a>

```java
public void resetLambdaAuthorizerConfig()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetMergedApiExecutionRoleArn` <a name="resetMergedApiExecutionRoleArn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetMergedApiExecutionRoleArn"></a>

```java
public void resetMergedApiExecutionRoleArn()
```

##### `resetOpenidConnectConfig` <a name="resetOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOpenidConnectConfig"></a>

```java
public void resetOpenidConnectConfig()
```

##### `resetQueryDepthLimit` <a name="resetQueryDepthLimit" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetQueryDepthLimit"></a>

```java
public void resetQueryDepthLimit()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResolverCountLimit` <a name="resetResolverCountLimit" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetResolverCountLimit"></a>

```java
public void resetResolverCountLimit()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetUserPoolConfig` <a name="resetUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetUserPoolConfig"></a>

```java
public void resetUserPoolConfig()
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetVisibility"></a>

```java
public void resetVisibility()
```

##### `resetXrayEnabled` <a name="resetXrayEnabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetXrayEnabled"></a>

```java
public void resetXrayEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppsyncGraphqlApi resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApi;

AppsyncGraphqlApi.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApi;

AppsyncGraphqlApi.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApi;

AppsyncGraphqlApi.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApi;

AppsyncGraphqlApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsyncGraphqlApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppsyncGraphqlApi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsyncGraphqlApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsyncGraphqlApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppsyncGraphqlApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProvider">additionalAuthenticationProvider</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList">AppsyncGraphqlApiAdditionalAuthenticationProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.enhancedMetricsConfig">enhancedMetricsConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference">AppsyncGraphqlApiEnhancedMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference">AppsyncGraphqlApiLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfig">openidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference">AppsyncGraphqlApiOpenidConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.uris">uris</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference">AppsyncGraphqlApiUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProviderInput">additionalAuthenticationProviderInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.apiTypeInput">apiTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.enhancedMetricsConfigInput">enhancedMetricsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig">AppsyncGraphqlApiEnhancedMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.introspectionConfigInput">introspectionConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfigInput">lambdaAuthorizerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.mergedApiExecutionRoleArnInput">mergedApiExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfigInput">openidConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.queryDepthLimitInput">queryDepthLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.resolverCountLimitInput">resolverCountLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfigInput">userPoolConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabledInput">xrayEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.apiType">apiType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.introspectionConfig">introspectionConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.mergedApiExecutionRoleArn">mergedApiExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.queryDepthLimit">queryDepthLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.resolverCountLimit">resolverCountLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabled">xrayEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalAuthenticationProvider`<sup>Required</sup> <a name="additionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProvider"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderList getAdditionalAuthenticationProvider();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList">AppsyncGraphqlApiAdditionalAuthenticationProviderList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `enhancedMetricsConfig`<sup>Required</sup> <a name="enhancedMetricsConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.enhancedMetricsConfig"></a>

```java
public AppsyncGraphqlApiEnhancedMetricsConfigOutputReference getEnhancedMetricsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference">AppsyncGraphqlApiEnhancedMetricsConfigOutputReference</a>

---

##### `lambdaAuthorizerConfig`<sup>Required</sup> <a name="lambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfig"></a>

```java
public AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference getLambdaAuthorizerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfig"></a>

```java
public AppsyncGraphqlApiLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference">AppsyncGraphqlApiLogConfigOutputReference</a>

---

##### `openidConnectConfig`<sup>Required</sup> <a name="openidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfig"></a>

```java
public AppsyncGraphqlApiOpenidConnectConfigOutputReference getOpenidConnectConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference">AppsyncGraphqlApiOpenidConnectConfigOutputReference</a>

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.uris"></a>

```java
public StringMap getUris();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `userPoolConfig`<sup>Required</sup> <a name="userPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfig"></a>

```java
public AppsyncGraphqlApiUserPoolConfigOutputReference getUserPoolConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference">AppsyncGraphqlApiUserPoolConfigOutputReference</a>

---

##### `additionalAuthenticationProviderInput`<sup>Optional</sup> <a name="additionalAuthenticationProviderInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProviderInput"></a>

```java
public java.lang.Object getAdditionalAuthenticationProviderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>>

---

##### `apiTypeInput`<sup>Optional</sup> <a name="apiTypeInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.apiTypeInput"></a>

```java
public java.lang.String getApiTypeInput();
```

- *Type:* java.lang.String

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `enhancedMetricsConfigInput`<sup>Optional</sup> <a name="enhancedMetricsConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.enhancedMetricsConfigInput"></a>

```java
public AppsyncGraphqlApiEnhancedMetricsConfig getEnhancedMetricsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig">AppsyncGraphqlApiEnhancedMetricsConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `introspectionConfigInput`<sup>Optional</sup> <a name="introspectionConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.introspectionConfigInput"></a>

```java
public java.lang.String getIntrospectionConfigInput();
```

- *Type:* java.lang.String

---

##### `lambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="lambdaAuthorizerConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfigInput"></a>

```java
public AppsyncGraphqlApiLambdaAuthorizerConfig getLambdaAuthorizerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfigInput"></a>

```java
public AppsyncGraphqlApiLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

---

##### `mergedApiExecutionRoleArnInput`<sup>Optional</sup> <a name="mergedApiExecutionRoleArnInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.mergedApiExecutionRoleArnInput"></a>

```java
public java.lang.String getMergedApiExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `openidConnectConfigInput`<sup>Optional</sup> <a name="openidConnectConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfigInput"></a>

```java
public AppsyncGraphqlApiOpenidConnectConfig getOpenidConnectConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

---

##### `queryDepthLimitInput`<sup>Optional</sup> <a name="queryDepthLimitInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.queryDepthLimitInput"></a>

```java
public java.lang.Number getQueryDepthLimitInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resolverCountLimitInput`<sup>Optional</sup> <a name="resolverCountLimitInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.resolverCountLimitInput"></a>

```java
public java.lang.Number getResolverCountLimitInput();
```

- *Type:* java.lang.Number

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userPoolConfigInput`<sup>Optional</sup> <a name="userPoolConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfigInput"></a>

```java
public AppsyncGraphqlApiUserPoolConfig getUserPoolConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `xrayEnabledInput`<sup>Optional</sup> <a name="xrayEnabledInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabledInput"></a>

```java
public java.lang.Object getXrayEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.apiType"></a>

```java
public java.lang.String getApiType();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `introspectionConfig`<sup>Required</sup> <a name="introspectionConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.introspectionConfig"></a>

```java
public java.lang.String getIntrospectionConfig();
```

- *Type:* java.lang.String

---

##### `mergedApiExecutionRoleArn`<sup>Required</sup> <a name="mergedApiExecutionRoleArn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.mergedApiExecutionRoleArn"></a>

```java
public java.lang.String getMergedApiExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queryDepthLimit`<sup>Required</sup> <a name="queryDepthLimit" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.queryDepthLimit"></a>

```java
public java.lang.Number getQueryDepthLimit();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resolverCountLimit`<sup>Required</sup> <a name="resolverCountLimit" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.resolverCountLimit"></a>

```java
public java.lang.Number getResolverCountLimit();
```

- *Type:* java.lang.Number

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `xrayEnabled`<sup>Required</sup> <a name="xrayEnabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabled"></a>

```java
public java.lang.Object getXrayEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncGraphqlApiAdditionalAuthenticationProvider <a name="AppsyncGraphqlApiAdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiAdditionalAuthenticationProvider;

AppsyncGraphqlApiAdditionalAuthenticationProvider.builder()
    .authenticationType(java.lang.String)
//  .lambdaAuthorizerConfig(AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig)
//  .openidConnectConfig(AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig)
//  .userPoolConfig(AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.openidConnectConfig">openidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | openid_connect_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | user_pool_config block. |

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}.

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.lambdaAuthorizerConfig"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig getLambdaAuthorizerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}

---

##### `openidConnectConfig`<sup>Optional</sup> <a name="openidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.openidConnectConfig"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig getOpenidConnectConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

openid_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}

---

##### `userPoolConfig`<sup>Optional</sup> <a name="userPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.userPoolConfig"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig getUserPoolConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

user_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig;

AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.builder()
    .authorizerUri(java.lang.String)
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .identityValidationExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}. |

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}.

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig;

AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.builder()
    .issuer(java.lang.String)
//  .authTtl(java.lang.Number)
//  .clientId(java.lang.String)
//  .iatTtl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}.

---

##### `authTtl`<sup>Optional</sup> <a name="authTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}.

---

##### `iatTtl`<sup>Optional</sup> <a name="iatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}.

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig;

AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.builder()
    .userPoolId(java.lang.String)
//  .appIdClientRegex(java.lang.String)
//  .awsRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}. |

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}.

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="appIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}.

---

### AppsyncGraphqlApiConfig <a name="AppsyncGraphqlApiConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiConfig;

AppsyncGraphqlApiConfig.builder()
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
    .authenticationType(java.lang.String)
    .name(java.lang.String)
//  .additionalAuthenticationProvider(IResolvable)
//  .additionalAuthenticationProvider(java.util.List<AppsyncGraphqlApiAdditionalAuthenticationProvider>)
//  .apiType(java.lang.String)
//  .enhancedMetricsConfig(AppsyncGraphqlApiEnhancedMetricsConfig)
//  .id(java.lang.String)
//  .introspectionConfig(java.lang.String)
//  .lambdaAuthorizerConfig(AppsyncGraphqlApiLambdaAuthorizerConfig)
//  .logConfig(AppsyncGraphqlApiLogConfig)
//  .mergedApiExecutionRoleArn(java.lang.String)
//  .openidConnectConfig(AppsyncGraphqlApiOpenidConnectConfig)
//  .queryDepthLimit(java.lang.Number)
//  .region(java.lang.String)
//  .resolverCountLimit(java.lang.Number)
//  .schema(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .userPoolConfig(AppsyncGraphqlApiUserPoolConfig)
//  .visibility(java.lang.String)
//  .xrayEnabled(java.lang.Boolean)
//  .xrayEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#name AppsyncGraphqlApi#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.additionalAuthenticationProvider">additionalAuthenticationProvider</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>></code> | additional_authentication_provider block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.apiType">apiType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#api_type AppsyncGraphqlApi#api_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.enhancedMetricsConfig">enhancedMetricsConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig">AppsyncGraphqlApiEnhancedMetricsConfig</a></code> | enhanced_metrics_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#id AppsyncGraphqlApi#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.introspectionConfig">introspectionConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#introspection_config AppsyncGraphqlApi#introspection_config}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.mergedApiExecutionRoleArn">mergedApiExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#merged_api_execution_role_arn AppsyncGraphqlApi#merged_api_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.openidConnectConfig">openidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | openid_connect_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.queryDepthLimit">queryDepthLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#query_depth_limit AppsyncGraphqlApi#query_depth_limit}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.resolverCountLimit">resolverCountLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#resolver_count_limit AppsyncGraphqlApi#resolver_count_limit}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#schema AppsyncGraphqlApi#schema}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#tags AppsyncGraphqlApi#tags}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | user_pool_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#visibility AppsyncGraphqlApi#visibility}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.xrayEnabled">xrayEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#name AppsyncGraphqlApi#name}.

---

##### `additionalAuthenticationProvider`<sup>Optional</sup> <a name="additionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.additionalAuthenticationProvider"></a>

```java
public java.lang.Object getAdditionalAuthenticationProvider();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>>

additional_authentication_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}

---

##### `apiType`<sup>Optional</sup> <a name="apiType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.apiType"></a>

```java
public java.lang.String getApiType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#api_type AppsyncGraphqlApi#api_type}.

---

##### `enhancedMetricsConfig`<sup>Optional</sup> <a name="enhancedMetricsConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.enhancedMetricsConfig"></a>

```java
public AppsyncGraphqlApiEnhancedMetricsConfig getEnhancedMetricsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig">AppsyncGraphqlApiEnhancedMetricsConfig</a>

enhanced_metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#enhanced_metrics_config AppsyncGraphqlApi#enhanced_metrics_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#id AppsyncGraphqlApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `introspectionConfig`<sup>Optional</sup> <a name="introspectionConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.introspectionConfig"></a>

```java
public java.lang.String getIntrospectionConfig();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#introspection_config AppsyncGraphqlApi#introspection_config}.

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lambdaAuthorizerConfig"></a>

```java
public AppsyncGraphqlApiLambdaAuthorizerConfig getLambdaAuthorizerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.logConfig"></a>

```java
public AppsyncGraphqlApiLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#log_config AppsyncGraphqlApi#log_config}

---

##### `mergedApiExecutionRoleArn`<sup>Optional</sup> <a name="mergedApiExecutionRoleArn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.mergedApiExecutionRoleArn"></a>

```java
public java.lang.String getMergedApiExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#merged_api_execution_role_arn AppsyncGraphqlApi#merged_api_execution_role_arn}.

---

##### `openidConnectConfig`<sup>Optional</sup> <a name="openidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.openidConnectConfig"></a>

```java
public AppsyncGraphqlApiOpenidConnectConfig getOpenidConnectConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

openid_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}

---

##### `queryDepthLimit`<sup>Optional</sup> <a name="queryDepthLimit" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.queryDepthLimit"></a>

```java
public java.lang.Number getQueryDepthLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#query_depth_limit AppsyncGraphqlApi#query_depth_limit}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#region AppsyncGraphqlApi#region}

---

##### `resolverCountLimit`<sup>Optional</sup> <a name="resolverCountLimit" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.resolverCountLimit"></a>

```java
public java.lang.Number getResolverCountLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#resolver_count_limit AppsyncGraphqlApi#resolver_count_limit}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#schema AppsyncGraphqlApi#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#tags AppsyncGraphqlApi#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}.

---

##### `userPoolConfig`<sup>Optional</sup> <a name="userPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.userPoolConfig"></a>

```java
public AppsyncGraphqlApiUserPoolConfig getUserPoolConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

user_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#visibility AppsyncGraphqlApi#visibility}.

---

##### `xrayEnabled`<sup>Optional</sup> <a name="xrayEnabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.xrayEnabled"></a>

```java
public java.lang.Object getXrayEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}.

---

### AppsyncGraphqlApiEnhancedMetricsConfig <a name="AppsyncGraphqlApiEnhancedMetricsConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiEnhancedMetricsConfig;

AppsyncGraphqlApiEnhancedMetricsConfig.builder()
    .dataSourceLevelMetricsBehavior(java.lang.String)
    .operationLevelMetricsConfig(java.lang.String)
    .resolverLevelMetricsBehavior(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior">dataSourceLevelMetricsBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#data_source_level_metrics_behavior AppsyncGraphqlApi#data_source_level_metrics_behavior}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig">operationLevelMetricsConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#operation_level_metrics_config AppsyncGraphqlApi#operation_level_metrics_config}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior">resolverLevelMetricsBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#resolver_level_metrics_behavior AppsyncGraphqlApi#resolver_level_metrics_behavior}. |

---

##### `dataSourceLevelMetricsBehavior`<sup>Required</sup> <a name="dataSourceLevelMetricsBehavior" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig.property.dataSourceLevelMetricsBehavior"></a>

```java
public java.lang.String getDataSourceLevelMetricsBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#data_source_level_metrics_behavior AppsyncGraphqlApi#data_source_level_metrics_behavior}.

---

##### `operationLevelMetricsConfig`<sup>Required</sup> <a name="operationLevelMetricsConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig.property.operationLevelMetricsConfig"></a>

```java
public java.lang.String getOperationLevelMetricsConfig();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#operation_level_metrics_config AppsyncGraphqlApi#operation_level_metrics_config}.

---

##### `resolverLevelMetricsBehavior`<sup>Required</sup> <a name="resolverLevelMetricsBehavior" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig.property.resolverLevelMetricsBehavior"></a>

```java
public java.lang.String getResolverLevelMetricsBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#resolver_level_metrics_behavior AppsyncGraphqlApi#resolver_level_metrics_behavior}.

---

### AppsyncGraphqlApiLambdaAuthorizerConfig <a name="AppsyncGraphqlApiLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiLambdaAuthorizerConfig;

AppsyncGraphqlApiLambdaAuthorizerConfig.builder()
    .authorizerUri(java.lang.String)
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .identityValidationExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}. |

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}.

---

### AppsyncGraphqlApiLogConfig <a name="AppsyncGraphqlApiLogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiLogConfig;

AppsyncGraphqlApiLogConfig.builder()
    .cloudwatchLogsRoleArn(java.lang.String)
    .fieldLogLevel(java.lang.String)
//  .excludeVerboseContent(java.lang.Boolean)
//  .excludeVerboseContent(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.fieldLogLevel">fieldLogLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#field_log_level AppsyncGraphqlApi#field_log_level}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.excludeVerboseContent">excludeVerboseContent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}. |

---

##### `cloudwatchLogsRoleArn`<sup>Required</sup> <a name="cloudwatchLogsRoleArn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.cloudwatchLogsRoleArn"></a>

```java
public java.lang.String getCloudwatchLogsRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}.

---

##### `fieldLogLevel`<sup>Required</sup> <a name="fieldLogLevel" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.fieldLogLevel"></a>

```java
public java.lang.String getFieldLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#field_log_level AppsyncGraphqlApi#field_log_level}.

---

##### `excludeVerboseContent`<sup>Optional</sup> <a name="excludeVerboseContent" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.excludeVerboseContent"></a>

```java
public java.lang.Object getExcludeVerboseContent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}.

---

### AppsyncGraphqlApiOpenidConnectConfig <a name="AppsyncGraphqlApiOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiOpenidConnectConfig;

AppsyncGraphqlApiOpenidConnectConfig.builder()
    .issuer(java.lang.String)
//  .authTtl(java.lang.Number)
//  .clientId(java.lang.String)
//  .iatTtl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}.

---

##### `authTtl`<sup>Optional</sup> <a name="authTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}.

---

##### `iatTtl`<sup>Optional</sup> <a name="iatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}.

---

### AppsyncGraphqlApiUserPoolConfig <a name="AppsyncGraphqlApiUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiUserPoolConfig;

AppsyncGraphqlApiUserPoolConfig.builder()
    .defaultAction(java.lang.String)
    .userPoolId(java.lang.String)
//  .appIdClientRegex(java.lang.String)
//  .awsRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#default_action AppsyncGraphqlApi#default_action}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}. |

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#default_action AppsyncGraphqlApi#default_action}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}.

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="appIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference;

new AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```java
public void resetAuthorizerResultTtlInSeconds()
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```java
public void resetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```java
public java.lang.String getAuthorizerUriInput();
```

- *Type:* java.lang.String

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```java
public java.lang.String getIdentityValidationExpressionInput();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderList <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderList" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiAdditionalAuthenticationProviderList;

new AppsyncGraphqlApiAdditionalAuthenticationProviderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>>

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference;

new AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetAuthTtl">resetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetIatTtl">resetIatTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthTtl` <a name="resetAuthTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetAuthTtl"></a>

```java
public void resetAuthTtl()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetIatTtl` <a name="resetIatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetIatTtl"></a>

```java
public void resetIatTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtlInput">authTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtlInput">iatTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTtlInput`<sup>Optional</sup> <a name="authTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtlInput"></a>

```java
public java.lang.Number getAuthTtlInput();
```

- *Type:* java.lang.Number

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `iatTtlInput`<sup>Optional</sup> <a name="iatTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtlInput"></a>

```java
public java.lang.Number getIatTtlInput();
```

- *Type:* java.lang.Number

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `authTtl`<sup>Required</sup> <a name="authTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `iatTtl`<sup>Required</sup> <a name="iatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.internalValue"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference;

new AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig">putLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig">putOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig">putUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetLambdaAuthorizerConfig">resetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetOpenidConnectConfig">resetOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetUserPoolConfig">resetUserPoolConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaAuthorizerConfig` <a name="putLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig"></a>

```java
public void putLambdaAuthorizerConfig(AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

---

##### `putOpenidConnectConfig` <a name="putOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig"></a>

```java
public void putOpenidConnectConfig(AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

---

##### `putUserPoolConfig` <a name="putUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig"></a>

```java
public void putUserPoolConfig(AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

---

##### `resetLambdaAuthorizerConfig` <a name="resetLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetLambdaAuthorizerConfig"></a>

```java
public void resetLambdaAuthorizerConfig()
```

##### `resetOpenidConnectConfig` <a name="resetOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetOpenidConnectConfig"></a>

```java
public void resetOpenidConnectConfig()
```

##### `resetUserPoolConfig` <a name="resetUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetUserPoolConfig"></a>

```java
public void resetUserPoolConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfig">openidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfig">userPoolConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfigInput">lambdaAuthorizerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfigInput">openidConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfigInput">userPoolConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaAuthorizerConfig`<sup>Required</sup> <a name="lambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfig"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference getLambdaAuthorizerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference</a>

---

##### `openidConnectConfig`<sup>Required</sup> <a name="openidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfig"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference getOpenidConnectConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference</a>

---

##### `userPoolConfig`<sup>Required</sup> <a name="userPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfig"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference getUserPoolConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `lambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="lambdaAuthorizerConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfigInput"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig getLambdaAuthorizerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

---

##### `openidConnectConfigInput`<sup>Optional</sup> <a name="openidConnectConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfigInput"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig getOpenidConnectConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

---

##### `userPoolConfigInput`<sup>Optional</sup> <a name="userPoolConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfigInput"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig getUserPoolConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference;

new AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAppIdClientRegex">resetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppIdClientRegex` <a name="resetAppIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```java
public void resetAppIdClientRegex()
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegexInput">appIdClientRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIdClientRegexInput`<sup>Optional</sup> <a name="appIdClientRegexInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```java
public java.lang.String getAppIdClientRegexInput();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `appIdClientRegex`<sup>Required</sup> <a name="appIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.internalValue"></a>

```java
public AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

---


### AppsyncGraphqlApiEnhancedMetricsConfigOutputReference <a name="AppsyncGraphqlApiEnhancedMetricsConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference;

new AppsyncGraphqlApiEnhancedMetricsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput">dataSourceLevelMetricsBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput">operationLevelMetricsConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput">resolverLevelMetricsBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior">dataSourceLevelMetricsBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig">operationLevelMetricsConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior">resolverLevelMetricsBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig">AppsyncGraphqlApiEnhancedMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSourceLevelMetricsBehaviorInput`<sup>Optional</sup> <a name="dataSourceLevelMetricsBehaviorInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehaviorInput"></a>

```java
public java.lang.String getDataSourceLevelMetricsBehaviorInput();
```

- *Type:* java.lang.String

---

##### `operationLevelMetricsConfigInput`<sup>Optional</sup> <a name="operationLevelMetricsConfigInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfigInput"></a>

```java
public java.lang.String getOperationLevelMetricsConfigInput();
```

- *Type:* java.lang.String

---

##### `resolverLevelMetricsBehaviorInput`<sup>Optional</sup> <a name="resolverLevelMetricsBehaviorInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehaviorInput"></a>

```java
public java.lang.String getResolverLevelMetricsBehaviorInput();
```

- *Type:* java.lang.String

---

##### `dataSourceLevelMetricsBehavior`<sup>Required</sup> <a name="dataSourceLevelMetricsBehavior" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.dataSourceLevelMetricsBehavior"></a>

```java
public java.lang.String getDataSourceLevelMetricsBehavior();
```

- *Type:* java.lang.String

---

##### `operationLevelMetricsConfig`<sup>Required</sup> <a name="operationLevelMetricsConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.operationLevelMetricsConfig"></a>

```java
public java.lang.String getOperationLevelMetricsConfig();
```

- *Type:* java.lang.String

---

##### `resolverLevelMetricsBehavior`<sup>Required</sup> <a name="resolverLevelMetricsBehavior" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.resolverLevelMetricsBehavior"></a>

```java
public java.lang.String getResolverLevelMetricsBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfigOutputReference.property.internalValue"></a>

```java
public AppsyncGraphqlApiEnhancedMetricsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiEnhancedMetricsConfig">AppsyncGraphqlApiEnhancedMetricsConfig</a>

---


### AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference;

new AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```java
public void resetAuthorizerResultTtlInSeconds()
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```java
public void resetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```java
public java.lang.String getAuthorizerUriInput();
```

- *Type:* java.lang.String

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```java
public java.lang.String getIdentityValidationExpressionInput();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```java
public AppsyncGraphqlApiLambdaAuthorizerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

---


### AppsyncGraphqlApiLogConfigOutputReference <a name="AppsyncGraphqlApiLogConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiLogConfigOutputReference;

new AppsyncGraphqlApiLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resetExcludeVerboseContent">resetExcludeVerboseContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeVerboseContent` <a name="resetExcludeVerboseContent" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resetExcludeVerboseContent"></a>

```java
public void resetExcludeVerboseContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">cloudwatchLogsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContentInput">excludeVerboseContentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevelInput">fieldLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContent">excludeVerboseContent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevel">fieldLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="cloudwatchLogsRoleArnInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```java
public java.lang.String getCloudwatchLogsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `excludeVerboseContentInput`<sup>Optional</sup> <a name="excludeVerboseContentInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContentInput"></a>

```java
public java.lang.Object getExcludeVerboseContentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fieldLogLevelInput`<sup>Optional</sup> <a name="fieldLogLevelInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevelInput"></a>

```java
public java.lang.String getFieldLogLevelInput();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsRoleArn`<sup>Required</sup> <a name="cloudwatchLogsRoleArn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```java
public java.lang.String getCloudwatchLogsRoleArn();
```

- *Type:* java.lang.String

---

##### `excludeVerboseContent`<sup>Required</sup> <a name="excludeVerboseContent" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContent"></a>

```java
public java.lang.Object getExcludeVerboseContent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fieldLogLevel`<sup>Required</sup> <a name="fieldLogLevel" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevel"></a>

```java
public java.lang.String getFieldLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.internalValue"></a>

```java
public AppsyncGraphqlApiLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

---


### AppsyncGraphqlApiOpenidConnectConfigOutputReference <a name="AppsyncGraphqlApiOpenidConnectConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiOpenidConnectConfigOutputReference;

new AppsyncGraphqlApiOpenidConnectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetAuthTtl">resetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetIatTtl">resetIatTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthTtl` <a name="resetAuthTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetAuthTtl"></a>

```java
public void resetAuthTtl()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetIatTtl` <a name="resetIatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetIatTtl"></a>

```java
public void resetIatTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtlInput">authTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtlInput">iatTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTtlInput`<sup>Optional</sup> <a name="authTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtlInput"></a>

```java
public java.lang.Number getAuthTtlInput();
```

- *Type:* java.lang.Number

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `iatTtlInput`<sup>Optional</sup> <a name="iatTtlInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtlInput"></a>

```java
public java.lang.Number getIatTtlInput();
```

- *Type:* java.lang.Number

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `authTtl`<sup>Required</sup> <a name="authTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `iatTtl`<sup>Required</sup> <a name="iatTtl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.internalValue"></a>

```java
public AppsyncGraphqlApiOpenidConnectConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

---


### AppsyncGraphqlApiUserPoolConfigOutputReference <a name="AppsyncGraphqlApiUserPoolConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_graphql_api.AppsyncGraphqlApiUserPoolConfigOutputReference;

new AppsyncGraphqlApiUserPoolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAppIdClientRegex">resetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppIdClientRegex` <a name="resetAppIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```java
public void resetAppIdClientRegex()
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegexInput">appIdClientRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIdClientRegexInput`<sup>Optional</sup> <a name="appIdClientRegexInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```java
public java.lang.String getAppIdClientRegexInput();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `appIdClientRegex`<sup>Required</sup> <a name="appIdClientRegex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.internalValue"></a>

```java
public AppsyncGraphqlApiUserPoolConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

---



