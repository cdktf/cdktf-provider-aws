# `apigatewayv2Api` Submodule <a name="`apigatewayv2Api` Submodule" id="@cdktf/provider-aws.apigatewayv2Api"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Api <a name="Apigatewayv2Api" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api aws_apigatewayv2_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_api.Apigatewayv2Api;

Apigatewayv2Api.Builder.create(Construct scope, java.lang.String id)
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
    .protocolType(java.lang.String)
//  .apiKeySelectionExpression(java.lang.String)
//  .body(java.lang.String)
//  .corsConfiguration(Apigatewayv2ApiCorsConfiguration)
//  .credentialsArn(java.lang.String)
//  .description(java.lang.String)
//  .disableExecuteApiEndpoint(java.lang.Boolean)
//  .disableExecuteApiEndpoint(IResolvable)
//  .failOnWarnings(java.lang.Boolean)
//  .failOnWarnings(IResolvable)
//  .id(java.lang.String)
//  .routeKey(java.lang.String)
//  .routeSelectionExpression(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .target(java.lang.String)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#name Apigatewayv2Api#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.protocolType">protocolType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.apiKeySelectionExpression">apiKeySelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#body Apigatewayv2Api#body}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | cors_configuration block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.credentialsArn">credentialsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#description Apigatewayv2Api#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.failOnWarnings">failOnWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#id Apigatewayv2Api#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.routeKey">routeKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_key Apigatewayv2Api#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.routeSelectionExpression">routeSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags Apigatewayv2Api#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags_all Apigatewayv2Api#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#target Apigatewayv2Api#target}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#version Apigatewayv2Api#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#name Apigatewayv2Api#name}.

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.protocolType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}.

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="apiKeySelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.apiKeySelectionExpression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.body"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#body Apigatewayv2Api#body}.

---

##### `corsConfiguration`<sup>Optional</sup> <a name="corsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.corsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

cors_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#cors_configuration Apigatewayv2Api#cors_configuration}

---

##### `credentialsArn`<sup>Optional</sup> <a name="credentialsArn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.credentialsArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#description Apigatewayv2Api#description}.

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="disableExecuteApiEndpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.disableExecuteApiEndpoint"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}.

---

##### `failOnWarnings`<sup>Optional</sup> <a name="failOnWarnings" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.failOnWarnings"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#id Apigatewayv2Api#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routeKey`<sup>Optional</sup> <a name="routeKey" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.routeKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_key Apigatewayv2Api#route_key}.

---

##### `routeSelectionExpression`<sup>Optional</sup> <a name="routeSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.routeSelectionExpression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags Apigatewayv2Api#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags_all Apigatewayv2Api#tags_all}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#target Apigatewayv2Api#target}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#version Apigatewayv2Api#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration">putCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetApiKeySelectionExpression">resetApiKeySelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCorsConfiguration">resetCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCredentialsArn">resetCredentialsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDisableExecuteApiEndpoint">resetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetFailOnWarnings">resetFailOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteKey">resetRouteKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteSelectionExpression">resetRouteSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCorsConfiguration` <a name="putCorsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration"></a>

```java
public void putCorsConfiguration(Apigatewayv2ApiCorsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---

##### `resetApiKeySelectionExpression` <a name="resetApiKeySelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetApiKeySelectionExpression"></a>

```java
public void resetApiKeySelectionExpression()
```

##### `resetBody` <a name="resetBody" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetBody"></a>

```java
public void resetBody()
```

##### `resetCorsConfiguration` <a name="resetCorsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCorsConfiguration"></a>

```java
public void resetCorsConfiguration()
```

##### `resetCredentialsArn` <a name="resetCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCredentialsArn"></a>

```java
public void resetCredentialsArn()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableExecuteApiEndpoint` <a name="resetDisableExecuteApiEndpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDisableExecuteApiEndpoint"></a>

```java
public void resetDisableExecuteApiEndpoint()
```

##### `resetFailOnWarnings` <a name="resetFailOnWarnings" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetFailOnWarnings"></a>

```java
public void resetFailOnWarnings()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetId"></a>

```java
public void resetId()
```

##### `resetRouteKey` <a name="resetRouteKey" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteKey"></a>

```java
public void resetRouteKey()
```

##### `resetRouteSelectionExpression` <a name="resetRouteSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteSelectionExpression"></a>

```java
public void resetRouteSelectionExpression()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_api.Apigatewayv2Api;

Apigatewayv2Api.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_api.Apigatewayv2Api;

Apigatewayv2Api.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_api.Apigatewayv2Api;

Apigatewayv2Api.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiEndpoint">apiEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference">Apigatewayv2ApiCorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.executionArn">executionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpressionInput">apiKeySelectionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfigurationInput">corsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArnInput">credentialsArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpointInput">disableExecuteApiEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarningsInput">failOnWarningsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolTypeInput">protocolTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKeyInput">routeKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpressionInput">routeSelectionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpression">apiKeySelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArn">credentialsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarnings">failOnWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKey">routeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpression">routeSelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiEndpoint`<sup>Required</sup> <a name="apiEndpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiEndpoint"></a>

```java
public java.lang.String getApiEndpoint();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `corsConfiguration`<sup>Required</sup> <a name="corsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfiguration"></a>

```java
public Apigatewayv2ApiCorsConfigurationOutputReference getCorsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference">Apigatewayv2ApiCorsConfigurationOutputReference</a>

---

##### `executionArn`<sup>Required</sup> <a name="executionArn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.executionArn"></a>

```java
public java.lang.String getExecutionArn();
```

- *Type:* java.lang.String

---

##### `apiKeySelectionExpressionInput`<sup>Optional</sup> <a name="apiKeySelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpressionInput"></a>

```java
public java.lang.String getApiKeySelectionExpressionInput();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `corsConfigurationInput`<sup>Optional</sup> <a name="corsConfigurationInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfigurationInput"></a>

```java
public Apigatewayv2ApiCorsConfiguration getCorsConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---

##### `credentialsArnInput`<sup>Optional</sup> <a name="credentialsArnInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArnInput"></a>

```java
public java.lang.String getCredentialsArnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableExecuteApiEndpointInput`<sup>Optional</sup> <a name="disableExecuteApiEndpointInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpointInput"></a>

```java
public java.lang.Object getDisableExecuteApiEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failOnWarningsInput`<sup>Optional</sup> <a name="failOnWarningsInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarningsInput"></a>

```java
public java.lang.Object getFailOnWarningsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolTypeInput"></a>

```java
public java.lang.String getProtocolTypeInput();
```

- *Type:* java.lang.String

---

##### `routeKeyInput`<sup>Optional</sup> <a name="routeKeyInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKeyInput"></a>

```java
public java.lang.String getRouteKeyInput();
```

- *Type:* java.lang.String

---

##### `routeSelectionExpressionInput`<sup>Optional</sup> <a name="routeSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpressionInput"></a>

```java
public java.lang.String getRouteSelectionExpressionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `apiKeySelectionExpression`<sup>Required</sup> <a name="apiKeySelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpression"></a>

```java
public java.lang.String getApiKeySelectionExpression();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `credentialsArn`<sup>Required</sup> <a name="credentialsArn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArn"></a>

```java
public java.lang.String getCredentialsArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="disableExecuteApiEndpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpoint"></a>

```java
public java.lang.Object getDisableExecuteApiEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failOnWarnings`<sup>Required</sup> <a name="failOnWarnings" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarnings"></a>

```java
public java.lang.Object getFailOnWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKey"></a>

```java
public java.lang.String getRouteKey();
```

- *Type:* java.lang.String

---

##### `routeSelectionExpression`<sup>Required</sup> <a name="routeSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpression"></a>

```java
public java.lang.String getRouteSelectionExpression();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2ApiConfig <a name="Apigatewayv2ApiConfig" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_api.Apigatewayv2ApiConfig;

Apigatewayv2ApiConfig.builder()
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
    .protocolType(java.lang.String)
//  .apiKeySelectionExpression(java.lang.String)
//  .body(java.lang.String)
//  .corsConfiguration(Apigatewayv2ApiCorsConfiguration)
//  .credentialsArn(java.lang.String)
//  .description(java.lang.String)
//  .disableExecuteApiEndpoint(java.lang.Boolean)
//  .disableExecuteApiEndpoint(IResolvable)
//  .failOnWarnings(java.lang.Boolean)
//  .failOnWarnings(IResolvable)
//  .id(java.lang.String)
//  .routeKey(java.lang.String)
//  .routeSelectionExpression(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .target(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#name Apigatewayv2Api#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.apiKeySelectionExpression">apiKeySelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#body Apigatewayv2Api#body}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.corsConfiguration">corsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | cors_configuration block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.credentialsArn">credentialsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#description Apigatewayv2Api#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.failOnWarnings">failOnWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#id Apigatewayv2Api#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeKey">routeKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_key Apigatewayv2Api#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeSelectionExpression">routeSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags Apigatewayv2Api#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags_all Apigatewayv2Api#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#target Apigatewayv2Api#target}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#version Apigatewayv2Api#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#name Apigatewayv2Api#name}.

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}.

---

##### `apiKeySelectionExpression`<sup>Optional</sup> <a name="apiKeySelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.apiKeySelectionExpression"></a>

```java
public java.lang.String getApiKeySelectionExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#body Apigatewayv2Api#body}.

---

##### `corsConfiguration`<sup>Optional</sup> <a name="corsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.corsConfiguration"></a>

```java
public Apigatewayv2ApiCorsConfiguration getCorsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

cors_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#cors_configuration Apigatewayv2Api#cors_configuration}

---

##### `credentialsArn`<sup>Optional</sup> <a name="credentialsArn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.credentialsArn"></a>

```java
public java.lang.String getCredentialsArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#description Apigatewayv2Api#description}.

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="disableExecuteApiEndpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableExecuteApiEndpoint"></a>

```java
public java.lang.Object getDisableExecuteApiEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}.

---

##### `failOnWarnings`<sup>Optional</sup> <a name="failOnWarnings" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.failOnWarnings"></a>

```java
public java.lang.Object getFailOnWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#id Apigatewayv2Api#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routeKey`<sup>Optional</sup> <a name="routeKey" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeKey"></a>

```java
public java.lang.String getRouteKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_key Apigatewayv2Api#route_key}.

---

##### `routeSelectionExpression`<sup>Optional</sup> <a name="routeSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeSelectionExpression"></a>

```java
public java.lang.String getRouteSelectionExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags Apigatewayv2Api#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags_all Apigatewayv2Api#tags_all}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#target Apigatewayv2Api#target}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#version Apigatewayv2Api#version}.

---

### Apigatewayv2ApiCorsConfiguration <a name="Apigatewayv2ApiCorsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_api.Apigatewayv2ApiCorsConfiguration;

Apigatewayv2ApiCorsConfiguration.builder()
//  .allowCredentials(java.lang.Boolean)
//  .allowCredentials(IResolvable)
//  .allowHeaders(java.util.List<java.lang.String>)
//  .allowMethods(java.util.List<java.lang.String>)
//  .allowOrigins(java.util.List<java.lang.String>)
//  .exposeHeaders(java.util.List<java.lang.String>)
//  .maxAge(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_credentials Apigatewayv2Api#allow_credentials}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_headers Apigatewayv2Api#allow_headers}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_methods Apigatewayv2Api#allow_methods}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_origins Apigatewayv2Api#allow_origins}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#expose_headers Apigatewayv2Api#expose_headers}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#max_age Apigatewayv2Api#max_age}. |

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_credentials Apigatewayv2Api#allow_credentials}.

---

##### `allowHeaders`<sup>Optional</sup> <a name="allowHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_headers Apigatewayv2Api#allow_headers}.

---

##### `allowMethods`<sup>Optional</sup> <a name="allowMethods" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_methods Apigatewayv2Api#allow_methods}.

---

##### `allowOrigins`<sup>Optional</sup> <a name="allowOrigins" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_origins Apigatewayv2Api#allow_origins}.

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#expose_headers Apigatewayv2Api#expose_headers}.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#max_age Apigatewayv2Api#max_age}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2ApiCorsConfigurationOutputReference <a name="Apigatewayv2ApiCorsConfigurationOutputReference" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_api.Apigatewayv2ApiCorsConfigurationOutputReference;

new Apigatewayv2ApiCorsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowHeaders">resetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowMethods">resetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowOrigins">resetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowCredentials"></a>

```java
public void resetAllowCredentials()
```

##### `resetAllowHeaders` <a name="resetAllowHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowHeaders"></a>

```java
public void resetAllowHeaders()
```

##### `resetAllowMethods` <a name="resetAllowMethods" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowMethods"></a>

```java
public void resetAllowMethods()
```

##### `resetAllowOrigins` <a name="resetAllowOrigins" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowOrigins"></a>

```java
public void resetAllowOrigins()
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetExposeHeaders"></a>

```java
public void resetExposeHeaders()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetMaxAge"></a>

```java
public void resetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeadersInput">allowHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethodsInput">allowMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOriginsInput">allowOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentialsInput"></a>

```java
public java.lang.Object getAllowCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHeadersInput`<sup>Optional</sup> <a name="allowHeadersInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethodsInput`<sup>Optional</sup> <a name="allowMethodsInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOriginsInput`<sup>Optional</sup> <a name="allowOriginsInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposeHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.internalValue"></a>

```java
public Apigatewayv2ApiCorsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---



