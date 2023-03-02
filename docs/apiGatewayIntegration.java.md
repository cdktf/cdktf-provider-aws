# `apiGatewayIntegration` Submodule <a name="`apiGatewayIntegration` Submodule" id="@cdktf/provider-aws.apiGatewayIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayIntegration <a name="ApiGatewayIntegration" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration aws_api_gateway_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration.ApiGatewayIntegration;

ApiGatewayIntegration.Builder.create(Construct scope, java.lang.String id)
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
    .httpMethod(java.lang.String)
    .resourceId(java.lang.String)
    .restApiId(java.lang.String)
    .type(java.lang.String)
//  .cacheKeyParameters(java.util.List<java.lang.String>)
//  .cacheNamespace(java.lang.String)
//  .connectionId(java.lang.String)
//  .connectionType(java.lang.String)
//  .contentHandling(java.lang.String)
//  .credentials(java.lang.String)
//  .id(java.lang.String)
//  .integrationHttpMethod(java.lang.String)
//  .passthroughBehavior(java.lang.String)
//  .requestParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .requestTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .timeoutMilliseconds(java.lang.Number)
//  .tlsConfig(ApiGatewayIntegrationTlsConfig)
//  .uri(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.cacheKeyParameters">cacheKeyParameters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.cacheNamespace">cacheNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.contentHandling">contentHandling</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.credentials">credentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.integrationHttpMethod">integrationHttpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.passthroughBehavior">passthroughBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.requestParameters">requestParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.requestTemplates">requestTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.httpMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}.

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="cacheKeyParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.cacheKeyParameters"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}.

---

##### `cacheNamespace`<sup>Optional</sup> <a name="cacheNamespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.cacheNamespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}.

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connectionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}.

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.contentHandling"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.credentials"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationHttpMethod`<sup>Optional</sup> <a name="integrationHttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.integrationHttpMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.passthroughBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.requestParameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}.

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.requestTemplates"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}.

---

##### `timeoutMilliseconds`<sup>Optional</sup> <a name="timeoutMilliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.timeoutMilliseconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}.

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#tls_config ApiGatewayIntegration#tls_config}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.uri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheKeyParameters">resetCacheKeyParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheNamespace">resetCacheNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetContentHandling">resetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetIntegrationHttpMethod">resetIntegrationHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetPassthroughBehavior">resetPassthroughBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestTemplates">resetRequestTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTimeoutMilliseconds">resetTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetUri">resetUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig"></a>

```java
public void putTlsConfig(ApiGatewayIntegrationTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

---

##### `resetCacheKeyParameters` <a name="resetCacheKeyParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheKeyParameters"></a>

```java
public void resetCacheKeyParameters()
```

##### `resetCacheNamespace` <a name="resetCacheNamespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheNamespace"></a>

```java
public void resetCacheNamespace()
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionId"></a>

```java
public void resetConnectionId()
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionType"></a>

```java
public void resetConnectionType()
```

##### `resetContentHandling` <a name="resetContentHandling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetContentHandling"></a>

```java
public void resetContentHandling()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetIntegrationHttpMethod` <a name="resetIntegrationHttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetIntegrationHttpMethod"></a>

```java
public void resetIntegrationHttpMethod()
```

##### `resetPassthroughBehavior` <a name="resetPassthroughBehavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetPassthroughBehavior"></a>

```java
public void resetPassthroughBehavior()
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestParameters"></a>

```java
public void resetRequestParameters()
```

##### `resetRequestTemplates` <a name="resetRequestTemplates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestTemplates"></a>

```java
public void resetRequestTemplates()
```

##### `resetTimeoutMilliseconds` <a name="resetTimeoutMilliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTimeoutMilliseconds"></a>

```java
public void resetTimeoutMilliseconds()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetUri"></a>

```java
public void resetUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration.ApiGatewayIntegration;

ApiGatewayIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration.ApiGatewayIntegration;

ApiGatewayIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration.ApiGatewayIntegration;

ApiGatewayIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference">ApiGatewayIntegrationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParametersInput">cacheKeyParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespaceInput">cacheNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandlingInput">contentHandlingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentialsInput">credentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethodInput">integrationHttpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehaviorInput">passthroughBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParametersInput">requestParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplatesInput">requestTemplatesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMillisecondsInput">timeoutMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespace">cacheNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandling">contentHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentials">credentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethod">integrationHttpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehavior">passthroughBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParameters">requestParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplates">requestTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfig"></a>

```java
public ApiGatewayIntegrationTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference">ApiGatewayIntegrationTlsConfigOutputReference</a>

---

##### `cacheKeyParametersInput`<sup>Optional</sup> <a name="cacheKeyParametersInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParametersInput"></a>

```java
public java.util.List<java.lang.String> getCacheKeyParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cacheNamespaceInput`<sup>Optional</sup> <a name="cacheNamespaceInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespaceInput"></a>

```java
public java.lang.String getCacheNamespaceInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `contentHandlingInput`<sup>Optional</sup> <a name="contentHandlingInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandlingInput"></a>

```java
public java.lang.String getContentHandlingInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentialsInput"></a>

```java
public java.lang.String getCredentialsInput();
```

- *Type:* java.lang.String

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationHttpMethodInput`<sup>Optional</sup> <a name="integrationHttpMethodInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethodInput"></a>

```java
public java.lang.String getIntegrationHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `passthroughBehaviorInput`<sup>Optional</sup> <a name="passthroughBehaviorInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehaviorInput"></a>

```java
public java.lang.String getPassthroughBehaviorInput();
```

- *Type:* java.lang.String

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTemplatesInput`<sup>Optional</sup> <a name="requestTemplatesInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplatesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestTemplatesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutMillisecondsInput`<sup>Optional</sup> <a name="timeoutMillisecondsInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMillisecondsInput"></a>

```java
public java.lang.Number getTimeoutMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfigInput"></a>

```java
public ApiGatewayIntegrationTlsConfig getTlsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `cacheKeyParameters`<sup>Required</sup> <a name="cacheKeyParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParameters"></a>

```java
public java.util.List<java.lang.String> getCacheKeyParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cacheNamespace`<sup>Required</sup> <a name="cacheNamespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespace"></a>

```java
public java.lang.String getCacheNamespace();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `contentHandling`<sup>Required</sup> <a name="contentHandling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandling"></a>

```java
public java.lang.String getContentHandling();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationHttpMethod`<sup>Required</sup> <a name="integrationHttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethod"></a>

```java
public java.lang.String getIntegrationHttpMethod();
```

- *Type:* java.lang.String

---

##### `passthroughBehavior`<sup>Required</sup> <a name="passthroughBehavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehavior"></a>

```java
public java.lang.String getPassthroughBehavior();
```

- *Type:* java.lang.String

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTemplates`<sup>Required</sup> <a name="requestTemplates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

##### `timeoutMilliseconds`<sup>Required</sup> <a name="timeoutMilliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMilliseconds"></a>

```java
public java.lang.Number getTimeoutMilliseconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayIntegrationConfig <a name="ApiGatewayIntegrationConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration.ApiGatewayIntegrationConfig;

ApiGatewayIntegrationConfig.builder()
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
    .httpMethod(java.lang.String)
    .resourceId(java.lang.String)
    .restApiId(java.lang.String)
    .type(java.lang.String)
//  .cacheKeyParameters(java.util.List<java.lang.String>)
//  .cacheNamespace(java.lang.String)
//  .connectionId(java.lang.String)
//  .connectionType(java.lang.String)
//  .contentHandling(java.lang.String)
//  .credentials(java.lang.String)
//  .id(java.lang.String)
//  .integrationHttpMethod(java.lang.String)
//  .passthroughBehavior(java.lang.String)
//  .requestParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .requestTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .timeoutMilliseconds(java.lang.Number)
//  .tlsConfig(ApiGatewayIntegrationTlsConfig)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheNamespace">cacheNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.contentHandling">contentHandling</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.credentials">credentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.integrationHttpMethod">integrationHttpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.passthroughBehavior">passthroughBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestParameters">requestParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestTemplates">requestTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.timeoutMilliseconds">timeoutMilliseconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}.

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="cacheKeyParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheKeyParameters"></a>

```java
public java.util.List<java.lang.String> getCacheKeyParameters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}.

---

##### `cacheNamespace`<sup>Optional</sup> <a name="cacheNamespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheNamespace"></a>

```java
public java.lang.String getCacheNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}.

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}.

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.contentHandling"></a>

```java
public java.lang.String getContentHandling();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationHttpMethod`<sup>Optional</sup> <a name="integrationHttpMethod" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.integrationHttpMethod"></a>

```java
public java.lang.String getIntegrationHttpMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.passthroughBehavior"></a>

```java
public java.lang.String getPassthroughBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}.

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}.

---

##### `timeoutMilliseconds`<sup>Optional</sup> <a name="timeoutMilliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.timeoutMilliseconds"></a>

```java
public java.lang.Number getTimeoutMilliseconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}.

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.tlsConfig"></a>

```java
public ApiGatewayIntegrationTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#tls_config ApiGatewayIntegration#tls_config}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}.

---

### ApiGatewayIntegrationTlsConfig <a name="ApiGatewayIntegrationTlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration.ApiGatewayIntegrationTlsConfig;

ApiGatewayIntegrationTlsConfig.builder()
//  .insecureSkipVerification(java.lang.Boolean)
//  .insecureSkipVerification(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.property.insecureSkipVerification">insecureSkipVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}. |

---

##### `insecureSkipVerification`<sup>Optional</sup> <a name="insecureSkipVerification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.property.insecureSkipVerification"></a>

```java
public java.lang.Object getInsecureSkipVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayIntegrationTlsConfigOutputReference <a name="ApiGatewayIntegrationTlsConfigOutputReference" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration.ApiGatewayIntegrationTlsConfigOutputReference;

new ApiGatewayIntegrationTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resetInsecureSkipVerification">resetInsecureSkipVerification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInsecureSkipVerification` <a name="resetInsecureSkipVerification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resetInsecureSkipVerification"></a>

```java
public void resetInsecureSkipVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerificationInput">insecureSkipVerificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerification">insecureSkipVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `insecureSkipVerificationInput`<sup>Optional</sup> <a name="insecureSkipVerificationInput" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerificationInput"></a>

```java
public java.lang.Object getInsecureSkipVerificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `insecureSkipVerification`<sup>Required</sup> <a name="insecureSkipVerification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerification"></a>

```java
public java.lang.Object getInsecureSkipVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.internalValue"></a>

```java
public ApiGatewayIntegrationTlsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

---



