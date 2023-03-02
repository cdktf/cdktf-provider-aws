# `apiGatewayStage` Submodule <a name="`apiGatewayStage` Submodule" id="@cdktf/provider-aws.apiGatewayStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayStage <a name="ApiGatewayStage" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage aws_api_gateway_stage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_stage.ApiGatewayStage;

ApiGatewayStage.Builder.create(Construct scope, java.lang.String id)
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
    .deploymentId(java.lang.String)
    .restApiId(java.lang.String)
    .stageName(java.lang.String)
//  .accessLogSettings(ApiGatewayStageAccessLogSettings)
//  .cacheClusterEnabled(java.lang.Boolean)
//  .cacheClusterEnabled(IResolvable)
//  .cacheClusterSize(java.lang.String)
//  .canarySettings(ApiGatewayStageCanarySettings)
//  .clientCertificateId(java.lang.String)
//  .description(java.lang.String)
//  .documentationVersion(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .variables(java.util.Map<java.lang.String, java.lang.String>)
//  .xrayTracingEnabled(java.lang.Boolean)
//  .xrayTracingEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.stageName">stageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_name ApiGatewayStage#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | access_log_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.cacheClusterSize">cacheClusterSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.canarySettings">canarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | canary_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.clientCertificateId">clientCertificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#description ApiGatewayStage#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.documentationVersion">documentationVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#id ApiGatewayStage#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags ApiGatewayStage#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags_all ApiGatewayStage#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.variables">variables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#variables ApiGatewayStage#variables}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.xrayTracingEnabled">xrayTracingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.deploymentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.stageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_name ApiGatewayStage#stage_name}.

---

##### `accessLogSettings`<sup>Optional</sup> <a name="accessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.accessLogSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

access_log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#access_log_settings ApiGatewayStage#access_log_settings}

---

##### `cacheClusterEnabled`<sup>Optional</sup> <a name="cacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.cacheClusterEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}.

---

##### `cacheClusterSize`<sup>Optional</sup> <a name="cacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.cacheClusterSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}.

---

##### `canarySettings`<sup>Optional</sup> <a name="canarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.canarySettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

canary_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#canary_settings ApiGatewayStage#canary_settings}

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.clientCertificateId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#description ApiGatewayStage#description}.

---

##### `documentationVersion`<sup>Optional</sup> <a name="documentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.documentationVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#id ApiGatewayStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags ApiGatewayStage#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags_all ApiGatewayStage#tags_all}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.variables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#variables ApiGatewayStage#variables}.

---

##### `xrayTracingEnabled`<sup>Optional</sup> <a name="xrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.xrayTracingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings">putAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings">putCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetAccessLogSettings">resetAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterEnabled">resetCacheClusterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterSize">resetCacheClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCanarySettings">resetCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetClientCertificateId">resetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDocumentationVersion">resetDocumentationVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetVariables">resetVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetXrayTracingEnabled">resetXrayTracingEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAccessLogSettings` <a name="putAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings"></a>

```java
public void putAccessLogSettings(ApiGatewayStageAccessLogSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---

##### `putCanarySettings` <a name="putCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings"></a>

```java
public void putCanarySettings(ApiGatewayStageCanarySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---

##### `resetAccessLogSettings` <a name="resetAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetAccessLogSettings"></a>

```java
public void resetAccessLogSettings()
```

##### `resetCacheClusterEnabled` <a name="resetCacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterEnabled"></a>

```java
public void resetCacheClusterEnabled()
```

##### `resetCacheClusterSize` <a name="resetCacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterSize"></a>

```java
public void resetCacheClusterSize()
```

##### `resetCanarySettings` <a name="resetCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCanarySettings"></a>

```java
public void resetCanarySettings()
```

##### `resetClientCertificateId` <a name="resetClientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetClientCertificateId"></a>

```java
public void resetClientCertificateId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocumentationVersion` <a name="resetDocumentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDocumentationVersion"></a>

```java
public void resetDocumentationVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetVariables` <a name="resetVariables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetVariables"></a>

```java
public void resetVariables()
```

##### `resetXrayTracingEnabled` <a name="resetXrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetXrayTracingEnabled"></a>

```java
public void resetXrayTracingEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_stage.ApiGatewayStage;

ApiGatewayStage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_stage.ApiGatewayStage;

ApiGatewayStage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_stage.ApiGatewayStage;

ApiGatewayStage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference">ApiGatewayStageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettings">canarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference">ApiGatewayStageCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.executionArn">executionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.invokeUrl">invokeUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.webAclArn">webAclArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettingsInput">accessLogSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabledInput">cacheClusterEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSizeInput">cacheClusterSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettingsInput">canarySettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateIdInput">clientCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersionInput">documentationVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageNameInput">stageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variablesInput">variablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabledInput">xrayTracingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSize">cacheClusterSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateId">clientCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersion">documentationVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageName">stageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variables">variables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabled">xrayTracingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLogSettings`<sup>Required</sup> <a name="accessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettings"></a>

```java
public ApiGatewayStageAccessLogSettingsOutputReference getAccessLogSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference">ApiGatewayStageAccessLogSettingsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `canarySettings`<sup>Required</sup> <a name="canarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettings"></a>

```java
public ApiGatewayStageCanarySettingsOutputReference getCanarySettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference">ApiGatewayStageCanarySettingsOutputReference</a>

---

##### `executionArn`<sup>Required</sup> <a name="executionArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.executionArn"></a>

```java
public java.lang.String getExecutionArn();
```

- *Type:* java.lang.String

---

##### `invokeUrl`<sup>Required</sup> <a name="invokeUrl" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.invokeUrl"></a>

```java
public java.lang.String getInvokeUrl();
```

- *Type:* java.lang.String

---

##### `webAclArn`<sup>Required</sup> <a name="webAclArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.webAclArn"></a>

```java
public java.lang.String getWebAclArn();
```

- *Type:* java.lang.String

---

##### `accessLogSettingsInput`<sup>Optional</sup> <a name="accessLogSettingsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettingsInput"></a>

```java
public ApiGatewayStageAccessLogSettings getAccessLogSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---

##### `cacheClusterEnabledInput`<sup>Optional</sup> <a name="cacheClusterEnabledInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabledInput"></a>

```java
public java.lang.Object getCacheClusterEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheClusterSizeInput`<sup>Optional</sup> <a name="cacheClusterSizeInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSizeInput"></a>

```java
public java.lang.String getCacheClusterSizeInput();
```

- *Type:* java.lang.String

---

##### `canarySettingsInput`<sup>Optional</sup> <a name="canarySettingsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettingsInput"></a>

```java
public ApiGatewayStageCanarySettings getCanarySettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---

##### `clientCertificateIdInput`<sup>Optional</sup> <a name="clientCertificateIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateIdInput"></a>

```java
public java.lang.String getClientCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `documentationVersionInput`<sup>Optional</sup> <a name="documentationVersionInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersionInput"></a>

```java
public java.lang.String getDocumentationVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageNameInput"></a>

```java
public java.lang.String getStageNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `xrayTracingEnabledInput`<sup>Optional</sup> <a name="xrayTracingEnabledInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabledInput"></a>

```java
public java.lang.Object getXrayTracingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheClusterEnabled`<sup>Required</sup> <a name="cacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabled"></a>

```java
public java.lang.Object getCacheClusterEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheClusterSize`<sup>Required</sup> <a name="cacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSize"></a>

```java
public java.lang.String getCacheClusterSize();
```

- *Type:* java.lang.String

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateId"></a>

```java
public java.lang.String getClientCertificateId();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `documentationVersion`<sup>Required</sup> <a name="documentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersion"></a>

```java
public java.lang.String getDocumentationVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `xrayTracingEnabled`<sup>Required</sup> <a name="xrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabled"></a>

```java
public java.lang.Object getXrayTracingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayStageAccessLogSettings <a name="ApiGatewayStageAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_stage.ApiGatewayStageAccessLogSettings;

ApiGatewayStageAccessLogSettings.builder()
    .destinationArn(java.lang.String)
    .format(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#format ApiGatewayStage#format}. |

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#format ApiGatewayStage#format}.

---

### ApiGatewayStageCanarySettings <a name="ApiGatewayStageCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_stage.ApiGatewayStageCanarySettings;

ApiGatewayStageCanarySettings.builder()
//  .percentTraffic(java.lang.Number)
//  .stageVariableOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .useStageCache(java.lang.Boolean)
//  .useStageCache(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.percentTraffic">percentTraffic</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#percent_traffic ApiGatewayStage#percent_traffic}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_variable_overrides ApiGatewayStage#stage_variable_overrides}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.useStageCache">useStageCache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#use_stage_cache ApiGatewayStage#use_stage_cache}. |

---

##### `percentTraffic`<sup>Optional</sup> <a name="percentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.percentTraffic"></a>

```java
public java.lang.Number getPercentTraffic();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#percent_traffic ApiGatewayStage#percent_traffic}.

---

##### `stageVariableOverrides`<sup>Optional</sup> <a name="stageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.stageVariableOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_variable_overrides ApiGatewayStage#stage_variable_overrides}.

---

##### `useStageCache`<sup>Optional</sup> <a name="useStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.useStageCache"></a>

```java
public java.lang.Object getUseStageCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#use_stage_cache ApiGatewayStage#use_stage_cache}.

---

### ApiGatewayStageConfig <a name="ApiGatewayStageConfig" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_stage.ApiGatewayStageConfig;

ApiGatewayStageConfig.builder()
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
    .deploymentId(java.lang.String)
    .restApiId(java.lang.String)
    .stageName(java.lang.String)
//  .accessLogSettings(ApiGatewayStageAccessLogSettings)
//  .cacheClusterEnabled(java.lang.Boolean)
//  .cacheClusterEnabled(IResolvable)
//  .cacheClusterSize(java.lang.String)
//  .canarySettings(ApiGatewayStageCanarySettings)
//  .clientCertificateId(java.lang.String)
//  .description(java.lang.String)
//  .documentationVersion(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .variables(java.util.Map<java.lang.String, java.lang.String>)
//  .xrayTracingEnabled(java.lang.Boolean)
//  .xrayTracingEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.stageName">stageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_name ApiGatewayStage#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | access_log_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterSize">cacheClusterSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.canarySettings">canarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | canary_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.clientCertificateId">clientCertificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#description ApiGatewayStage#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.documentationVersion">documentationVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#id ApiGatewayStage#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags ApiGatewayStage#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags_all ApiGatewayStage#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.variables">variables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#variables ApiGatewayStage#variables}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.xrayTracingEnabled">xrayTracingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_name ApiGatewayStage#stage_name}.

---

##### `accessLogSettings`<sup>Optional</sup> <a name="accessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.accessLogSettings"></a>

```java
public ApiGatewayStageAccessLogSettings getAccessLogSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

access_log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#access_log_settings ApiGatewayStage#access_log_settings}

---

##### `cacheClusterEnabled`<sup>Optional</sup> <a name="cacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterEnabled"></a>

```java
public java.lang.Object getCacheClusterEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}.

---

##### `cacheClusterSize`<sup>Optional</sup> <a name="cacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterSize"></a>

```java
public java.lang.String getCacheClusterSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}.

---

##### `canarySettings`<sup>Optional</sup> <a name="canarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.canarySettings"></a>

```java
public ApiGatewayStageCanarySettings getCanarySettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

canary_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#canary_settings ApiGatewayStage#canary_settings}

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.clientCertificateId"></a>

```java
public java.lang.String getClientCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#description ApiGatewayStage#description}.

---

##### `documentationVersion`<sup>Optional</sup> <a name="documentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.documentationVersion"></a>

```java
public java.lang.String getDocumentationVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#id ApiGatewayStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags ApiGatewayStage#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags_all ApiGatewayStage#tags_all}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.variables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#variables ApiGatewayStage#variables}.

---

##### `xrayTracingEnabled`<sup>Optional</sup> <a name="xrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.xrayTracingEnabled"></a>

```java
public java.lang.Object getXrayTracingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayStageAccessLogSettingsOutputReference <a name="ApiGatewayStageAccessLogSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_stage.ApiGatewayStageAccessLogSettingsOutputReference;

new ApiGatewayStageAccessLogSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```java
public java.lang.String getDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.internalValue"></a>

```java
public ApiGatewayStageAccessLogSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---


### ApiGatewayStageCanarySettingsOutputReference <a name="ApiGatewayStageCanarySettingsOutputReference" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_stage.ApiGatewayStageCanarySettingsOutputReference;

new ApiGatewayStageCanarySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetPercentTraffic">resetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetStageVariableOverrides">resetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetUseStageCache">resetUseStageCache</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercentTraffic` <a name="resetPercentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetPercentTraffic"></a>

```java
public void resetPercentTraffic()
```

##### `resetStageVariableOverrides` <a name="resetStageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetStageVariableOverrides"></a>

```java
public void resetStageVariableOverrides()
```

##### `resetUseStageCache` <a name="resetUseStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetUseStageCache"></a>

```java
public void resetUseStageCache()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTrafficInput">percentTrafficInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverridesInput">stageVariableOverridesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCacheInput">useStageCacheInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTraffic">percentTraffic</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCache">useStageCache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentTrafficInput`<sup>Optional</sup> <a name="percentTrafficInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTrafficInput"></a>

```java
public java.lang.Number getPercentTrafficInput();
```

- *Type:* java.lang.Number

---

##### `stageVariableOverridesInput`<sup>Optional</sup> <a name="stageVariableOverridesInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverridesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverridesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useStageCacheInput`<sup>Optional</sup> <a name="useStageCacheInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCacheInput"></a>

```java
public java.lang.Object getUseStageCacheInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `percentTraffic`<sup>Required</sup> <a name="percentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTraffic"></a>

```java
public java.lang.Number getPercentTraffic();
```

- *Type:* java.lang.Number

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="stageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useStageCache`<sup>Required</sup> <a name="useStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCache"></a>

```java
public java.lang.Object getUseStageCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.internalValue"></a>

```java
public ApiGatewayStageCanarySettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---



