# `appsyncResolver` Submodule <a name="`appsyncResolver` Submodule" id="@cdktf/provider-aws.appsyncResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncResolver <a name="AppsyncResolver" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver aws_appsync_resolver}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolver;

AppsyncResolver.Builder.create(Construct scope, java.lang.String id)
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
    .apiId(java.lang.String)
    .field(java.lang.String)
    .type(java.lang.String)
//  .cachingConfig(AppsyncResolverCachingConfig)
//  .code(java.lang.String)
//  .dataSource(java.lang.String)
//  .id(java.lang.String)
//  .kind(java.lang.String)
//  .maxBatchSize(java.lang.Number)
//  .pipelineConfig(AppsyncResolverPipelineConfig)
//  .requestTemplate(java.lang.String)
//  .responseTemplate(java.lang.String)
//  .runtime(AppsyncResolverRuntime)
//  .syncConfig(AppsyncResolverSyncConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#api_id AppsyncResolver#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.field">field</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#field AppsyncResolver#field}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#type AppsyncResolver#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.cachingConfig">cachingConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | caching_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.code">code</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#code AppsyncResolver#code}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.dataSource">dataSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#data_source AppsyncResolver#data_source}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#id AppsyncResolver#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#kind AppsyncResolver#kind}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.maxBatchSize">maxBatchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.pipelineConfig">pipelineConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | pipeline_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.requestTemplate">requestTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#request_template AppsyncResolver#request_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.responseTemplate">responseTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#response_template AppsyncResolver#response_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | sync_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#api_id AppsyncResolver#api_id}.

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.field"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#field AppsyncResolver#field}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#type AppsyncResolver#type}.

---

##### `cachingConfig`<sup>Optional</sup> <a name="cachingConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.cachingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

caching_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#caching_config AppsyncResolver#caching_config}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.code"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#code AppsyncResolver#code}.

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.dataSource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#data_source AppsyncResolver#data_source}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#id AppsyncResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#kind AppsyncResolver#kind}.

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.maxBatchSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}.

---

##### `pipelineConfig`<sup>Optional</sup> <a name="pipelineConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.pipelineConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

pipeline_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#pipeline_config AppsyncResolver#pipeline_config}

---

##### `requestTemplate`<sup>Optional</sup> <a name="requestTemplate" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.requestTemplate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#request_template AppsyncResolver#request_template}.

---

##### `responseTemplate`<sup>Optional</sup> <a name="responseTemplate" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.responseTemplate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#response_template AppsyncResolver#response_template}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.runtime"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#runtime AppsyncResolver#runtime}

---

##### `syncConfig`<sup>Optional</sup> <a name="syncConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.Initializer.parameter.syncConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#sync_config AppsyncResolver#sync_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putCachingConfig">putCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putPipelineConfig">putPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putRuntime">putRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putSyncConfig">putSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetCachingConfig">resetCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetMaxBatchSize">resetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetPipelineConfig">resetPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetRequestTemplate">resetRequestTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetResponseTemplate">resetResponseTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetSyncConfig">resetSyncConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCachingConfig` <a name="putCachingConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putCachingConfig"></a>

```java
public void putCachingConfig(AppsyncResolverCachingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putCachingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---

##### `putPipelineConfig` <a name="putPipelineConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putPipelineConfig"></a>

```java
public void putPipelineConfig(AppsyncResolverPipelineConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putPipelineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---

##### `putRuntime` <a name="putRuntime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putRuntime"></a>

```java
public void putRuntime(AppsyncResolverRuntime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---

##### `putSyncConfig` <a name="putSyncConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putSyncConfig"></a>

```java
public void putSyncConfig(AppsyncResolverSyncConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---

##### `resetCachingConfig` <a name="resetCachingConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetCachingConfig"></a>

```java
public void resetCachingConfig()
```

##### `resetCode` <a name="resetCode" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetCode"></a>

```java
public void resetCode()
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetDataSource"></a>

```java
public void resetDataSource()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetId"></a>

```java
public void resetId()
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetKind"></a>

```java
public void resetKind()
```

##### `resetMaxBatchSize` <a name="resetMaxBatchSize" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetMaxBatchSize"></a>

```java
public void resetMaxBatchSize()
```

##### `resetPipelineConfig` <a name="resetPipelineConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetPipelineConfig"></a>

```java
public void resetPipelineConfig()
```

##### `resetRequestTemplate` <a name="resetRequestTemplate" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetRequestTemplate"></a>

```java
public void resetRequestTemplate()
```

##### `resetResponseTemplate` <a name="resetResponseTemplate" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetResponseTemplate"></a>

```java
public void resetResponseTemplate()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetSyncConfig` <a name="resetSyncConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.resetSyncConfig"></a>

```java
public void resetSyncConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolver;

AppsyncResolver.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolver;

AppsyncResolver.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolver;

AppsyncResolver.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cachingConfig">cachingConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.pipelineConfig">pipelineConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference">AppsyncResolverRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cachingConfigInput">cachingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.codeInput">codeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dataSourceInput">dataSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput">maxBatchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.pipelineConfigInput">pipelineConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.requestTemplateInput">requestTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.responseTemplateInput">responseTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.runtimeInput">runtimeInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.syncConfigInput">syncConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.maxBatchSize">maxBatchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.requestTemplate">requestTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.responseTemplate">responseTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cachingConfig`<sup>Required</sup> <a name="cachingConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cachingConfig"></a>

```java
public AppsyncResolverCachingConfigOutputReference getCachingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a>

---

##### `pipelineConfig`<sup>Required</sup> <a name="pipelineConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.pipelineConfig"></a>

```java
public AppsyncResolverPipelineConfigOutputReference getPipelineConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.runtime"></a>

```java
public AppsyncResolverRuntimeOutputReference getRuntime();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference">AppsyncResolverRuntimeOutputReference</a>

---

##### `syncConfig`<sup>Required</sup> <a name="syncConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.syncConfig"></a>

```java
public AppsyncResolverSyncConfigOutputReference getSyncConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `cachingConfigInput`<sup>Optional</sup> <a name="cachingConfigInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.cachingConfigInput"></a>

```java
public AppsyncResolverCachingConfig getCachingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.codeInput"></a>

```java
public java.lang.String getCodeInput();
```

- *Type:* java.lang.String

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dataSourceInput"></a>

```java
public java.lang.String getDataSourceInput();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `maxBatchSizeInput`<sup>Optional</sup> <a name="maxBatchSizeInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput"></a>

```java
public java.lang.Number getMaxBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `pipelineConfigInput`<sup>Optional</sup> <a name="pipelineConfigInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.pipelineConfigInput"></a>

```java
public AppsyncResolverPipelineConfig getPipelineConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---

##### `requestTemplateInput`<sup>Optional</sup> <a name="requestTemplateInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.requestTemplateInput"></a>

```java
public java.lang.String getRequestTemplateInput();
```

- *Type:* java.lang.String

---

##### `responseTemplateInput`<sup>Optional</sup> <a name="responseTemplateInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.responseTemplateInput"></a>

```java
public java.lang.String getResponseTemplateInput();
```

- *Type:* java.lang.String

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.runtimeInput"></a>

```java
public AppsyncResolverRuntime getRuntimeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---

##### `syncConfigInput`<sup>Optional</sup> <a name="syncConfigInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.syncConfigInput"></a>

```java
public AppsyncResolverSyncConfig getSyncConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `maxBatchSize`<sup>Required</sup> <a name="maxBatchSize" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.maxBatchSize"></a>

```java
public java.lang.Number getMaxBatchSize();
```

- *Type:* java.lang.Number

---

##### `requestTemplate`<sup>Required</sup> <a name="requestTemplate" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.requestTemplate"></a>

```java
public java.lang.String getRequestTemplate();
```

- *Type:* java.lang.String

---

##### `responseTemplate`<sup>Required</sup> <a name="responseTemplate" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.responseTemplate"></a>

```java
public java.lang.String getResponseTemplate();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolver.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncResolverCachingConfig <a name="AppsyncResolverCachingConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolverCachingConfig;

AppsyncResolverCachingConfig.builder()
//  .cachingKeys(java.util.List<java.lang.String>)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys">cachingKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#caching_keys AppsyncResolver#caching_keys}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#ttl AppsyncResolver#ttl}. |

---

##### `cachingKeys`<sup>Optional</sup> <a name="cachingKeys" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys"></a>

```java
public java.util.List<java.lang.String> getCachingKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#caching_keys AppsyncResolver#caching_keys}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#ttl AppsyncResolver#ttl}.

---

### AppsyncResolverConfig <a name="AppsyncResolverConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolverConfig;

AppsyncResolverConfig.builder()
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
    .apiId(java.lang.String)
    .field(java.lang.String)
    .type(java.lang.String)
//  .cachingConfig(AppsyncResolverCachingConfig)
//  .code(java.lang.String)
//  .dataSource(java.lang.String)
//  .id(java.lang.String)
//  .kind(java.lang.String)
//  .maxBatchSize(java.lang.Number)
//  .pipelineConfig(AppsyncResolverPipelineConfig)
//  .requestTemplate(java.lang.String)
//  .responseTemplate(java.lang.String)
//  .runtime(AppsyncResolverRuntime)
//  .syncConfig(AppsyncResolverSyncConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#api_id AppsyncResolver#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.field">field</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#field AppsyncResolver#field}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#type AppsyncResolver#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.cachingConfig">cachingConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | caching_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.code">code</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#code AppsyncResolver#code}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#data_source AppsyncResolver#data_source}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#id AppsyncResolver#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#kind AppsyncResolver#kind}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize">maxBatchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig">pipelineConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | pipeline_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.requestTemplate">requestTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#request_template AppsyncResolver#request_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.responseTemplate">responseTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#response_template AppsyncResolver#response_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | sync_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#api_id AppsyncResolver#api_id}.

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#field AppsyncResolver#field}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#type AppsyncResolver#type}.

---

##### `cachingConfig`<sup>Optional</sup> <a name="cachingConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.cachingConfig"></a>

```java
public AppsyncResolverCachingConfig getCachingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

caching_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#caching_config AppsyncResolver#caching_config}

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#code AppsyncResolver#code}.

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#data_source AppsyncResolver#data_source}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#id AppsyncResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#kind AppsyncResolver#kind}.

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize"></a>

```java
public java.lang.Number getMaxBatchSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}.

---

##### `pipelineConfig`<sup>Optional</sup> <a name="pipelineConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig"></a>

```java
public AppsyncResolverPipelineConfig getPipelineConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

pipeline_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#pipeline_config AppsyncResolver#pipeline_config}

---

##### `requestTemplate`<sup>Optional</sup> <a name="requestTemplate" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.requestTemplate"></a>

```java
public java.lang.String getRequestTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#request_template AppsyncResolver#request_template}.

---

##### `responseTemplate`<sup>Optional</sup> <a name="responseTemplate" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.responseTemplate"></a>

```java
public java.lang.String getResponseTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#response_template AppsyncResolver#response_template}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.runtime"></a>

```java
public AppsyncResolverRuntime getRuntime();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#runtime AppsyncResolver#runtime}

---

##### `syncConfig`<sup>Optional</sup> <a name="syncConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverConfig.property.syncConfig"></a>

```java
public AppsyncResolverSyncConfig getSyncConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#sync_config AppsyncResolver#sync_config}

---

### AppsyncResolverPipelineConfig <a name="AppsyncResolverPipelineConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolverPipelineConfig;

AppsyncResolverPipelineConfig.builder()
//  .functions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig.property.functions">functions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#functions AppsyncResolver#functions}. |

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig.property.functions"></a>

```java
public java.util.List<java.lang.String> getFunctions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#functions AppsyncResolver#functions}.

---

### AppsyncResolverRuntime <a name="AppsyncResolverRuntime" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolverRuntime;

AppsyncResolverRuntime.builder()
    .name(java.lang.String)
    .runtimeVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#name AppsyncResolver#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#runtime_version AppsyncResolver#runtime_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#name AppsyncResolver#name}.

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#runtime_version AppsyncResolver#runtime_version}.

---

### AppsyncResolverSyncConfig <a name="AppsyncResolverSyncConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolverSyncConfig;

AppsyncResolverSyncConfig.builder()
//  .conflictDetection(java.lang.String)
//  .conflictHandler(java.lang.String)
//  .lambdaConflictHandlerConfig(AppsyncResolverSyncConfigLambdaConflictHandlerConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection">conflictDetection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler">conflictHandler</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | lambda_conflict_handler_config block. |

---

##### `conflictDetection`<sup>Optional</sup> <a name="conflictDetection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection"></a>

```java
public java.lang.String getConflictDetection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}.

---

##### `conflictHandler`<sup>Optional</sup> <a name="conflictHandler" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler"></a>

```java
public java.lang.String getConflictHandler();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}.

---

##### `lambdaConflictHandlerConfig`<sup>Optional</sup> <a name="lambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig"></a>

```java
public AppsyncResolverSyncConfigLambdaConflictHandlerConfig getLambdaConflictHandlerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

lambda_conflict_handler_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#lambda_conflict_handler_config AppsyncResolver#lambda_conflict_handler_config}

---

### AppsyncResolverSyncConfigLambdaConflictHandlerConfig <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig;

AppsyncResolverSyncConfigLambdaConflictHandlerConfig.builder()
//  .lambdaConflictHandlerArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}. |

---

##### `lambdaConflictHandlerArn`<sup>Optional</sup> <a name="lambdaConflictHandlerArn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```java
public java.lang.String getLambdaConflictHandlerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncResolverCachingConfigOutputReference <a name="AppsyncResolverCachingConfigOutputReference" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolverCachingConfigOutputReference;

new AppsyncResolverCachingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys">resetCachingKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCachingKeys` <a name="resetCachingKeys" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys"></a>

```java
public void resetCachingKeys()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput">cachingKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys">cachingKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachingKeysInput`<sup>Optional</sup> <a name="cachingKeysInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput"></a>

```java
public java.util.List<java.lang.String> getCachingKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `cachingKeys`<sup>Required</sup> <a name="cachingKeys" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys"></a>

```java
public java.util.List<java.lang.String> getCachingKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue"></a>

```java
public AppsyncResolverCachingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---


### AppsyncResolverPipelineConfigOutputReference <a name="AppsyncResolverPipelineConfigOutputReference" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolverPipelineConfigOutputReference;

new AppsyncResolverPipelineConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions">resetFunctions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctions` <a name="resetFunctions" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions"></a>

```java
public void resetFunctions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput">functionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions">functions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionsInput`<sup>Optional</sup> <a name="functionsInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput"></a>

```java
public java.util.List<java.lang.String> getFunctionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions"></a>

```java
public java.util.List<java.lang.String> getFunctions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue"></a>

```java
public AppsyncResolverPipelineConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---


### AppsyncResolverRuntimeOutputReference <a name="AppsyncResolverRuntimeOutputReference" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolverRuntimeOutputReference;

new AppsyncResolverRuntimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.internalValue"></a>

```java
public AppsyncResolverRuntime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---


### AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference;

new AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">resetLambdaConflictHandlerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaConflictHandlerArn` <a name="resetLambdaConflictHandlerArn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```java
public void resetLambdaConflictHandlerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">lambdaConflictHandlerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaConflictHandlerArnInput`<sup>Optional</sup> <a name="lambdaConflictHandlerArnInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```java
public java.lang.String getLambdaConflictHandlerArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaConflictHandlerArn`<sup>Required</sup> <a name="lambdaConflictHandlerArn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```java
public java.lang.String getLambdaConflictHandlerArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```java
public AppsyncResolverSyncConfigLambdaConflictHandlerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncResolverSyncConfigOutputReference <a name="AppsyncResolverSyncConfigOutputReference" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_resolver.AppsyncResolverSyncConfigOutputReference;

new AppsyncResolverSyncConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig">putLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection">resetConflictDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler">resetConflictHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig">resetLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConflictHandlerConfig` <a name="putLambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```java
public void putLambdaConflictHandlerConfig(AppsyncResolverSyncConfigLambdaConflictHandlerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---

##### `resetConflictDetection` <a name="resetConflictDetection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection"></a>

```java
public void resetConflictDetection()
```

##### `resetConflictHandler` <a name="resetConflictHandler" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler"></a>

```java
public void resetConflictHandler()
```

##### `resetLambdaConflictHandlerConfig` <a name="resetLambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```java
public void resetLambdaConflictHandlerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput">conflictDetectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput">conflictHandlerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">lambdaConflictHandlerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection">conflictDetection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler">conflictHandler</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaConflictHandlerConfig`<sup>Required</sup> <a name="lambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```java
public AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference getLambdaConflictHandlerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `conflictDetectionInput`<sup>Optional</sup> <a name="conflictDetectionInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput"></a>

```java
public java.lang.String getConflictDetectionInput();
```

- *Type:* java.lang.String

---

##### `conflictHandlerInput`<sup>Optional</sup> <a name="conflictHandlerInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput"></a>

```java
public java.lang.String getConflictHandlerInput();
```

- *Type:* java.lang.String

---

##### `lambdaConflictHandlerConfigInput`<sup>Optional</sup> <a name="lambdaConflictHandlerConfigInput" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```java
public AppsyncResolverSyncConfigLambdaConflictHandlerConfig getLambdaConflictHandlerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---

##### `conflictDetection`<sup>Required</sup> <a name="conflictDetection" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection"></a>

```java
public java.lang.String getConflictDetection();
```

- *Type:* java.lang.String

---

##### `conflictHandler`<sup>Required</sup> <a name="conflictHandler" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler"></a>

```java
public java.lang.String getConflictHandler();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue"></a>

```java
public AppsyncResolverSyncConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---



